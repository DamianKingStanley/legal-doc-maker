"use client";
import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div
            className="faq-item bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
            onClick={() => toggleAccordion(0)}
          >
            <h4 className="text-xl font-semibold mb-4 text-gray-800">
              Is this service legally valid?
            </h4>
            {activeIndex === 0 && (
              <p className="text-gray-600">
                Yes, the documents are legally sound and compliant with standard
                regulations.
              </p>
            )}
          </div>
          <div
            className="faq-item bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
            onClick={() => toggleAccordion(1)}
          >
            <h4 className="text-xl font-semibold mb-4 text-gray-800">
              Can I cancel my subscription anytime?
            </h4>
            {activeIndex === 1 && (
              <p className="text-gray-600">
                Yes, you can cancel your subscription anytime from your account
                settings.
              </p>
            )}
          </div>
          <div
            className="faq-item bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
            onClick={() => toggleAccordion(2)}
          >
            <h4 className="text-xl font-semibold mb-4 text-gray-800">
              Are the documents customizable?
            </h4>
            {activeIndex === 2 && (
              <p className="text-gray-600">
                Yes, you can customize each document by adding your own clauses
                and details.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
