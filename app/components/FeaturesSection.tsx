"use client";
import React from "react";
import {
  FaRocket,
  FaCheckCircle,
  FaUserShield,
  FaLock,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Lightning-Fast Generation",
      description:
        "Create court-ready documents in under 2 minutes with our AI-powered platform. No more manual drafting.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "Attorney-Reviewed",
      description:
        "Every template is vetted by our legal team to ensure compliance with current regulations.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <FaUserShield className="w-8 h-8" />,
      title: "User-Centric Design",
      description:
        "Intuitive interface with step-by-step guidance makes legal docs accessible to everyone.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: "Bank-Grade Security",
      description:
        "256-bit encryption and strict confidentiality protocols protect your sensitive information.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Widely Accepted",
      description:
        "Used and trusted by businesses, courts, and legal professionals nationwide.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Continuous Updates",
      description:
        "We automatically update templates to reflect changing laws and regulations.",
      color: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Legal Documents, <br className="hidden lg:block" />
            Without the High Costs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines legal expertise with cutting-edge technology
            to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-6">
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}
                ></div>
                <div
                  className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} text-white`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
            Start Generating Documents Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
