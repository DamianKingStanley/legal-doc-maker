"use client";
import React from "react";
import { FaRocket, FaCheckCircle, FaUser } from "react-icons/fa";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 text-black bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            className="feature-card p-8 bg-white shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <div className="text-center mb-4">
              <FaRocket className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">
              Fast Document Creation
            </h3>
            <p className="text-gray-600">
              Generate documents in minutes, not hours. Save time with our
              powerful AI.
            </p>
          </div>
          <div
            className=" feature-card p-8 bg-white text-black shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center mb-4">
              <FaCheckCircle className="text-5xl text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Legally Accurate</h3>
            <p className="text-gray-600">
              Our AI ensures that every document generated meets legal standards
              and compliance.
            </p>
          </div>
          <div
            className="feature-card p-8 bg-white text-black shadow-lg rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-center mb-4">
              <FaUser className="text-5xl text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              User-Friendly Interface
            </h3>
            <p className="text-gray-600">
              Our platform is designed to be intuitive and easy to use for
              everyone, no legal expertise needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
