import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import User from "@/src/models/User";
import bcrypt from "bcryptjs";
import { createToken } from "@/app/lib/auth";

export async function POST(req: Request) {
  await connectToDatabase();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const token = createToken(user._id);
  return NextResponse.json({ token }, { status: 200 });
}
