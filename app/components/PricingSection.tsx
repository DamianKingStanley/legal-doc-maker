"use client";
import Link from "next/link";
import React from "react";
import { FaCheck, FaCrown, FaBuilding, FaRegStar } from "react-icons/fa";

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "₦0",
      period: "forever",
      description: "Perfect for individuals with basic document needs",
      cta: "Get Started",
      featured: false,
      href: "/generate-doc",
      features: [
        "5 basic document templates",
        "Limited downloads per month",
        "Standard support",
        "Watermark on documents",
      ],
      icon: <FaRegStar className="w-5 h-5" />,
    },
    {
      name: "Professional",
      price: "$1",
      period: "per month",
      description: "For frequent users needing premium features",
      cta: "Subscribe Now",
      featured: true,
      href: "/subscription",
      features: [
        "Unlimited document templates",
        "Priority document generation",
        "24-hour support response",
        "No watermark",
        "Export to Word & PDF",
        "Basic e-signature",
      ],
      icon: <FaCrown className="w-5 h-5" />,
    },
    {
      name: "Enterprise",
      price: "$10",
      period: "per year",
      description: "For businesses with high-volume needs",
      cta: "Contact Sales",
      featured: false,
      href: "/contact",
      features: [
        "All Professional features",
        "Unlimited team members",
        "Custom templates",
        "Dedicated account manager",
        "Advanced e-signature",
        "API access",
        "SSO integration",
      ],
      icon: <FaBuilding className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.featured
                  ? "border-2 border-blue-500 transform scale-105 z-10"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-8 -translate-y-2">
                  POPULAR
                </div>
              )}

              <div
                className={`p-8 ${
                  plan.featured
                    ? "bg-gradient-to-b from-blue-50 to-white"
                    : "bg-white"
                }`}
              >
                <div className="flex items-center mb-4">
                  {plan.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-2">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>

                <p className="text-gray-600 mb-6">{plan.description}</p>

                <Link
                  href={plan.href}
                  className={`block w-full py-3 px-6 rounded-lg text-center font-medium mb-8 transition-colors ${
                    plan.featured
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need custom solutions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
          >
            Contact our sales team
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
