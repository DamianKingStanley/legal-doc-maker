import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";
import Document from "@/src/models/Document";
import { revalidateTag } from "next/cache";

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
    // Fetch user documents from the database
    const documents = await Document.find({ user: user._id }).sort({
      createdAt: -1,
    });

    // Set response cache headers (5 min cache, stale-while-revalidate 10 min)
    return NextResponse.json(
      { documents },
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents" },
      { status: 500 }
    );
  }
}

// ✅ Clear cache when a document is created
export async function POST(req: Request) {
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
    const { title, content } = await req.json();
    const newDocument = new Document({ user: user._id, title, content });
    await newDocument.save();

    // Invalidate cache when new document is added
    revalidateTag(`user-documents-${user._id}`);

    return NextResponse.json(
      { message: "Document created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating document:", error);
    return NextResponse.json(
      { error: "Failed to create document" },
      { status: 500 }
    );
  }
}
