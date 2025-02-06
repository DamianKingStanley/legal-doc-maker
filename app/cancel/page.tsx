"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import errorImage from "@/public/images/Failed-Payment.png"; // Add your image in the public folder

export default function PaymentFailedPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to subscription page after 5 seconds
    setTimeout(() => {
      router.push("/subscription"); // Redirect to subscription page or any other page
    }, 5000);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-red-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white text-center p-4 shadow-xl rounded-lg w-full max-w-md">
        <Image
          src={errorImage}
          alt="Payment Failed"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <h1 className="text-2xl md:text-3x1 font-semibold text-red-600">
          Payment Failed
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-800">
          Unfortunately, your payment was not successful. You will be redirected
          to the subscription page to try again.
        </p>
        <div className="mt-4 text-xl text-gray-600">
          <p>Please check your payment details and try again.</p>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">Redirecting in 5 seconds...</p>
        </div>
      </div>
    </div>
  );
}
