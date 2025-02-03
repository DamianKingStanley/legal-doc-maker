"use client";
import React from "react";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div
            className="step-card p-8 bg-white shadow-lg rounded-xl transform transition-all duration-500 hover:scale-105"
            data-aos="zoom-in"
          >
            <h3 className="text-sm md:text-2xl font-semibold text-blue-600 mb-4">
              Step 1: Select a Document
            </h3>
            <p className="text-gray-600">
              Choose from a wide range of legal documents that suit your needs.
            </p>
          </div>
          <div
            className="step-card p-8 bg-white shadow-lg rounded-xl transform transition-all duration-500 hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-sm md:text-2xl font-semibold text-blue-600 mb-4">
              Step 2: Fill in the Details
            </h3>
            <p className="text-gray-600">
              Enter the required details for the document, including custom
              clauses.
            </p>
          </div>
          <div
            className="step-card p-8 bg-white shadow-lg rounded-xl transform transition-all duration-500 hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3 className="text-sm md:text-2xl font-semibold text-blue-600 mb-4">
              Step 3: Download & Use
            </h3>
            <p className="text-gray-600">
              Review your document, then download and use it instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
