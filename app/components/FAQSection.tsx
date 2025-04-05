"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this service legally valid?",
      answer:
        "Yes, all documents are drafted to comply with standard legal requirements. However, we recommend having a lawyer review documents for complex cases or specific jurisdictions.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "You can cancel auto-renewal at any time. Your subscription will remain active until the end of the current billing period.",
    },
    {
      question: "Are the documents customizable?",
      answer:
        "Absolutely. Each document can be fully customized with your specific details, clauses, and terms. Our editor makes it easy to modify templates.",
    },
    {
      question: "What happens if I forget to renew my subscription?",
      answer:
        "We'll send multiple reminders before your subscription expires. If it lapses, you'll revert to our free plan but won't lose any documents you've already generated.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee on all subscriptions. Contact our support team and we'll process your refund, no questions asked.",
    },
    {
      question: "How often are templates updated?",
      answer:
        "Our legal team reviews and updates templates quarterly to reflect changing laws. You'll automatically get access to all template updates.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Need Help?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our service
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "shadow-md" : "hover:shadow-sm"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-gray-500 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-500 text-xl" />
                )}
              </button>

              <div
                id={`faq-content-${index}`}
                className={`px-6 pb-6 pt-0 text-gray-600 transition-all duration-300 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                  overflow: "hidden",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
