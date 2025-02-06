"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    const token = localStorage.getItem("LegalDoc-token");
    if (token) {
      router.push("/generate-doc");
    } else {
      router.push("/login");
    }
  };

  return (
    <section
      className="relative bg-[#2C3E50] text-white py-20" // Dark Blue/Charcoal background color for a legal feel
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-20 relative flex flex-col lg:flex-row items-center">
        {/* Left Side - Text & Button */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl md:text-4x1 font-bold text-white leading-tight mb-6">
            AI Legal Document Creator
          </h1>
          <p className="text-sm text-gray-300 mb-8">
            Effortlessly create legal documents in seconds using the power of
            AI.
          </p>
          <p className="text-sm text-gray-300 mb-6">
            Whether you&apos;re drafting contracts, agreements, or other legal
            papers, our AI technology makes it fast, easy, and accurate.
          </p>

          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={handleButtonClick}
          >
            Create Document
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
