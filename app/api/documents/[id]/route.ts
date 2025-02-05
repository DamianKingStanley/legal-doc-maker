import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import Document from "@/src/models/Document";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();

  const { id } = params;
  try {
    const document = await Document.findById(id);
    if (!document) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ document }, { status: 200 });
  } catch (error) {
    console.error("Error fetching document:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
