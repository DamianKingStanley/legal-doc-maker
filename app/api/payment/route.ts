import Stripe from "stripe";
import { NextResponse } from "next/server"; // Import NextResponse for the new app directory

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia", // Ensure the correct Stripe API version
});

export async function POST(req: Request) {
  try {
    const { userToken, selectedPlan } = await req.json(); // Use req.json() to parse the body

    // Verify the user token and check their plan to determine which subscription to create
    if (!userToken) {
      return NextResponse.json(
        { error: "User token is required" },
        { status: 400 }
      );
    }

    // Logic to get the priceId based on the user's plan
    let selectedPriceId: string;
    if (selectedPlan === "premium") {
      selectedPriceId = "price_1QpTvh4U2Uz4AIjwDYbMi6pI"; // Premium Price ID
    } else if (selectedPlan === "enterprise") {
      selectedPriceId = "price_1QpTyr4U2Uz4AIjwZyITRWwr"; // Enterprise Price ID
    } else {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 }
      );
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: selectedPriceId,
          quantity: 1,
        },
      ],
      mode: "payment", // Change this to "payment" if it's a one-time payment
      success_url: `${process.env.BASE_URL}/success`, // Replace with your success URL
      cancel_url: `${process.env.BASE_URL}/cancel`, // Replace with your cancel URL
    });

    // Log these URLs to verify if they're correctly formed
    console.log("Success URL:", session.success_url);
    console.log("Cancel URL:", session.cancel_url);

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "An error occurred",
      },
      { status: 500 }
    );
  }
}
