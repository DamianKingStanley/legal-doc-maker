import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from "@/app/lib/auth"; // Your custom token verification function
import User from "../../../../src/models/User"; // Assuming you're using a MongoDB model

export async function GET(req: NextRequest) {
  try {
    // Step 1: Get the Authorization token from the request headers
    const token = req.headers.get("authorization")?.split(" ")[1]; // Bearer token
    if (!token) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: 401 }
      );
    }

    // Step 2: Verify the token and fetch the user details
    const user = await getUserFromToken(token); // Decode the token to get user information
    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // Step 3: Fetch the user from the database
    const userData = await User.findById(user.id); // Assuming the user's ID is in the token payload

    if (!userData) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Step 4: Return the user's subscription plan (Free, Premium, Enterprise)
    return NextResponse.json({ subscriptionPlan: userData.subscriptionPlan });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch user subscription plan" },
      { status: 500 }
    );
  }
}
