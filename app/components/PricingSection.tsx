"use client";
import Link from "next/link";
import React from "react";

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12">
          Choose the Perfect Plan for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            className="pricing-card p-8 bg-white text-gray-800 shadow-xl rounded-xl transform transition-transform duration-500 hover:scale-105"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
            <p className="text-gray-600 mb-6">
              Access to basic templates and limited features.
            </p>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold mb-6">NGN0/month</span>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
                <Link href="/generate-doc"> Generate</Link>
              </button>
            </div>
          </div>
          <div
            className="pricing-card p-8 bg-white text-gray-800 shadow-xl rounded-xl transform transition-transform duration-500 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-gray-600 mb-6">
              Unlimited document generation with advanced features.
            </p>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold mb-6">$1/month</span>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
                <Link href="/subscription"> Subscribe</Link>
              </button>
            </div>
          </div>
          <div
            className="pricing-card p-8 bg-white text-gray-800 shadow-xl rounded-xl transform transition-transform duration-500 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
            <p className="text-gray-600 mb-6">
              For businesses with large-scale document needs.
            </p>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold mb-6">$10/year</span>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
                <Link href="/subscription"> Subscribe</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
