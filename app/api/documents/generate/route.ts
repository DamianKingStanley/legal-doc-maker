import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Document from "@/src/models/Document";

if (!process.env.API_KEY) {
  throw new Error("API_KEY is not defined");
}
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: Request) {
  await connectToDatabase();
  const body = await req.json();
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await getUserFromToken(token);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Check document limits based on subscription plan
  if (user.subscriptionPlan === "Free" && user.documentCount >= 10) {
    return NextResponse.json(
      { error: "Upgrade to Premium or Enterprise to generate more documents" },
      { status: 403 }
    );
  }

  if (user.subscriptionPlan === "Premium" && user.documentCount >= 50) {
    return NextResponse.json(
      { error: "Upgrade to Enterprise plan for unlimited document generation" },
      { status: 403 }
    );
  }

  // No document limit for Enterprise users
  if (user.subscriptionPlan === "Enterprise") {
    // No check on document count for Enterprise users
  }

  const { template, userInput } = body;
  const prompt = `Create a professional legal document on ${template} \n\nUser Input: ${userInput}.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedDoc = await response.text();

    // Save document to database
    const newDocument = new Document({
      user: user._id,
      template: template, // Use template as title
      content: generatedDoc,
    });

    await newDocument.save();

    // Increment document count for non-Enterprise users
    if (user.subscriptionPlan !== "Enterprise") {
      user.documentCount += 1;
      await user.save();
    }

    return NextResponse.json({ document: generatedDoc }, { status: 200 });
  } catch (error) {
    console.error("Error generating document:", error);
    return NextResponse.json(
      { error: "Failed to generate document" },
      { status: 500 }
    );
  }
}
