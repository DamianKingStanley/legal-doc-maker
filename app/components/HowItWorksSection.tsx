"use client";
import React from "react";
import {
  FaSearch,
  FaEdit,
  FaFileDownload,
  FaCheckCircle,
} from "react-icons/fa";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      step: "01",
      title: "Select Your Document",
      description:
        "Browse our library of 100+ professionally drafted legal templates for any situation.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaEdit className="w-6 h-6" />,
      step: "02",
      title: "Customize Your Template",
      description:
        "Fill in the details using our intuitive questionnaire. Add or remove clauses as needed.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FaFileDownload className="w-6 h-6" />,
      step: "03",
      title: "Download & Execute",
      description:
        "Get your court-ready document in Word and PDF formats. Sign and use immediately.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      step: "04",
      title: "Legal Peace of Mind",
      description:
        "Rest easy knowing your documents meet current legal standards.",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Legal Documents in{" "}
            <span className="text-blue-600">3 Easy Steps</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes legal documentation accessible to
            everyone
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 h-1 w-3/4 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={`mb-6 flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-2xl font-bold relative z-10`}
                >
                  {index < 3 ? (
                    <span className="absolute -top-2 -right-2 bg-white border-4 border-gray-50 text-xs font-semibold text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                      {step.step}
                    </span>
                  ) : null}
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
            Start Your Document Now
          </button>
          <p className="mt-4 text-sm text-gray-500 flex items-center justify-center">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
