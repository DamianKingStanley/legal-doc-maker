"use client";
import React from "react";
import { FaRocket, FaCheckCircle, FaUser } from "react-icons/fa";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 text-black bg-white ">
      <div className="container mx-auto px-6">
        <h2 className="text-lg md:text-3xl text-center font-semibold mb-12 text-gray-800">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-7">
          <div className="feature-card p-8 text-black  " data-aos="fade-up">
            <div className="text-center mb-4">
              <FaRocket className="text-3xl md:text-5xl text-center text-blue-600" />
            </div>
            <h3 className="text-xl text-black font-semibold ">
              Fast Document Creation
            </h3>
            <p className="text-gray-600 ">
              Generate documents in seconds, not hours. Save time with our
              powerful AI.
            </p>
          </div>
          <div className=" feature-card p-8  text-black text-left">
            <div className="text-center mb-4">
              <FaCheckCircle className="text-3xl md:text-5xl text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Legally Accurate</h3>
            <p className="text-gray-600">
              Our AI ensures that every document generated meets legal standards
              and compliance. However it is important you verify that it meets
              the requirement of your local law.
            </p>
          </div>
          <div
            className="feature-card p-8  text-black text-left"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-center mb-4">
              <FaUser className="text-3xl md:text-5xl text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold ">User-Friendly Interface</h3>
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
