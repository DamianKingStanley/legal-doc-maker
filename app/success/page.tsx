"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import successImage from "@/public/images/Successful-Payment.png"; // Add your success image in the public folder

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 10 seconds
    setTimeout(() => {
      router.push("/"); // Redirect to your home page or dashboard
    }, 10000);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-green-600 flex flex-col items-center justify-center p-5">
      <div className="bg-white text-center p-4 shadow-xl rounded-lg w-full max-w-lg">
        <Image
          src={successImage}
          alt="Payment Successful"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <h1 className="text-2xl md:text-23x1 font-semibold text-green-600">
          Payment Successful!
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-800">
          Your payment was processed successfully. You will be redirected
          shortly.
        </p>
        <div className="mt-4 text-xl text-gray-600">
          <p>Thank you for your purchase! We appreciate your support.</p>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">Redirecting in 10 seconds...</p>
        </div>
      </div>
    </div>
  );
}
