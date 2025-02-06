"use client";
import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl text-black md:text-3xl font-semibold mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div
            className="faq-item bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
            onClick={() => toggleAccordion(0)}
          >
            <h4 className="text-sm md:text-xl font-semibold mb-4 text-gray-800">
              Is this service legally valid? {activeIndex === 0 ? "▼" : "▲"}
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
            <h4 className="text-sm md:text-xl font-semibold mb-4 text-gray-800">
              Can I cancel my subscription anytime?{" "}
              {activeIndex === 1 ? "▼" : "▲"}
            </h4>
            {activeIndex === 1 && (
              <p className="text-gray-600">
                You may decide not to renew your subscription with us after. But
                for the current subscription, you cannot cancel it.
              </p>
            )}
          </div>
          <div
            className="faq-item bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
            onClick={() => toggleAccordion(2)}
          >
            <h4 className="text-sm md:text-xl font-semibold mb-4 text-gray-800">
              Are the documents customizable? {activeIndex === 2 ? "▼" : "▲"}
            </h4>
            {activeIndex === 2 && (
              <p className="text-gray-600">
                Yes, you can customize each document by adding your own clauses
                and details.
              </p>
            )}
          </div>

          <div
            className="faq-item bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
            onClick={() => toggleAccordion(3)}
          >
            <h4 className="text-sm md:text-xl font-semibold mb-4 text-gray-800">
              What happens if I forget to renew my subscription?{" "}
              {activeIndex === 3 ? "▼" : "▲"}
            </h4>
            {activeIndex === 3 && (
              <p className="text-gray-600">
                If you forget to renew, your subscription will expire, and you
                will lose access to premium features until you renew it.
              </p>
            )}
          </div>

          <div
            className="faq-item bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
            onClick={() => toggleAccordion(5)}
          >
            <h4 className="text-sm md:text-xl font-semibold mb-4 text-gray-800">
              Can I get a refund if I&apos;m not satisfied?{" "}
              {activeIndex === 5 ? "▼" : "▲"}
            </h4>
            {activeIndex === 5 && (
              <p className="text-gray-600">
                Refunds are available within 30 days of purchase, depending on
                the specific terms and conditions of your subscription.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
