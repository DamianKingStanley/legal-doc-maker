"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import ChatwayWidget from "../components/FloatingChat";

const stripePromise = loadStripe(
  "pk_test_51QpTbf4U2Uz4AIjw8ODxgdKg26Y77pbSDceOmK1GTKDyfOmrHACNjZW7eyUNKlU5RMQBaJMncqRpSs4HFG3NtZWM00SVEnPAKm"
);

export default function SubscriptionPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string>(""); // state to hold selected plan
  const router = useRouter();

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      // Get the user token
      const token = localStorage.getItem("LegalDoc-token");
      if (!token) {
        router.push("/login");
        return;
      }

      // Check if a plan has been selected
      if (!selectedPlan) {
        setErrorMessage("Please select a plan before proceeding.");
        return;
      }

      // Create a Checkout Session with the selected plan's Price ID
      const { data } = await axios.post("/api/payment", {
        userToken: token,
        selectedPlan, // Pass the selected plan to the server
      });

      // Redirect to the Stripe Checkout page
      const stripe = await stripePromise;
      if (!stripe) {
        setErrorMessage("Stripe initialization failed.");
        return;
      }
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        setErrorMessage("Payment failed. Please try again.");
      }
    } catch {
      setErrorMessage("Error creating checkout session.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white  text-black flex flex-col">
      <ChatwayWidget />
      <div className=" text-center py-6 shadow-sm px-5">
        <h1 className="text-2xl font-bold">Subscription Payment</h1>
        <p className="text-sm md:text-lg">
          Choose your subscription plan and proceed with the payment
        </p>
      </div>
      {/* <p className="text-sm text-center px-5">
        After payment or If you have trouble processing the payment., please
        send us a message via the chat box, and we will back to you as soon as
        possible.
      </p> */}

      {/* Error Message Display */}
      {errorMessage && (
        <div className="bg-red-600 text-white p-3 text-center">
          {errorMessage}
        </div>
      )}

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg transform transition-all duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Select Your Plan
          </h2>

          {/* Plan Selection - Radio Buttons */}
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="premium"
                  name="plan"
                  value="premium"
                  onChange={() => setSelectedPlan("premium")}
                  className="mr-2"
                />
                <label
                  htmlFor="premium"
                  className="text-sm md:text-xl font-medium text-gray-800"
                >
                  Premium Plan
                </label>
              </div>
              <span className="text-sm md:text-xl font-bold text-gray-900">
                $1/month
              </span>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="enterprise"
                  name="plan"
                  value="enterprise"
                  onChange={() => setSelectedPlan("enterprise")}
                  className="mr-2"
                />
                <label
                  htmlFor="enterprise"
                  className="text-sm md:text-xl font-medium text-gray-800"
                >
                  Enterprise Plan
                </label>
              </div>
              <span className="text-sm md:text-xl font-bold text-gray-900">
                $10/year
              </span>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={isLoading}
            className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold rounded-md hover:from-blue-700 hover:to-blue-900 focus:outline-none transition-all duration-300 disabled:bg-blue-400"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span className="ml-2">Processing...</span>
              </div>
            ) : (
              "Proceed to Payment"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
