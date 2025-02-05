import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";
import Document from "@/src/models/Document";

export async function GET(req: Request) {
  await connectToDatabase();
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await getUserFromToken(token);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const documents = await Document.find({ user: user._id }).sort({
      createdAt: -1,
    });

    return NextResponse.json({ documents }, { status: 200 });
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents" },
      { status: 500 }
    );
  }
}
