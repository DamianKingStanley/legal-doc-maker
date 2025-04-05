"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    const token = localStorage.getItem("LegalDoc-token");
    if (token) {
      router.push("/generate-doc");
    } else {
      router.push("/login");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0A2342] to-[#1D4E89] text-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2C5F93] opacity-20 clip-path-polygon-[0_0,_100%_0,_100%_100%]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg
              className="w-5 h-5 mr-2 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">
              Trusted by 10,000+ professionals
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-cyan-400">
              Legally Binding Documents
            </span>
            <br />
            Drafted in Minutes, Not Hours
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Generate court-ready contracts, agreements, and legal forms with AI
            precision. Save thousands in lawyer fees while maintaining
            professional standards.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleButtonClick}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Generating Free
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 rounded-lg font-medium text-lg transition-all duration-300">
              See Sample Documents
            </button>
          </div>

          {/* Features grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "100% Court Approved",
              "Attorney-Reviewed",
              "GDPR Compliant",
              "Instant Downloads",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating document preview (visual interest) */}
      <div className="absolute bottom-10 left-10 w-32 h-40 bg-white/5 border border-white/10 rounded-lg transform rotate-6 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-40 bg-white/5 border border-white/10 rounded-lg transform -rotate-3 hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
