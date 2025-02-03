"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-[#2C3E50] text-white py-20" // Dark Blue/Charcoal background color for a legal feel
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-20 relative flex flex-col lg:flex-row items-center">
        {/* Left Side - Text & Button */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            AI Legal Document Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Effortlessly generate tailored legal documents in minutes using the
            power of AI.
          </p>
          <p className="text-sm text-gray-200 mb-6">
            Whether you&apos;re drafting contracts, agreements, or other legal
            papers, our AI technology makes it fast, easy, and accurate.
          </p>

          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={() => (window.location.href = "/generate-doc")}
          >
            Generate Document
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
