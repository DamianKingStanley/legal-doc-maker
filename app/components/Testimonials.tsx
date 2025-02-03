"use client";
import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This company transformed our business with an amazing mobile app! Highly recommended!",
    position: "CEO, Tech Solutions",
  },
  {
    name: "Jane Smith",
    feedback:
      "The website they built for us is fast, responsive, and user-friendly. We couldn’t be happier!",
    position: "Marketing Director, BrandX",
  },
  {
    name: "Michael Johnson",
    feedback:
      "Outstanding AI solutions! Their machine learning expertise helped automate our workflow.",
    position: "Operations Manager, DataCorp",
  },
  {
    name: "Emily Williams",
    feedback:
      "Exceptional customer service and support. They truly care about their clients!",
    position: "Founder, StartupHub",
  },
  {
    name: "David Brown",
    feedback:
      "Their e-commerce solutions helped us scale our online store to the next level!",
    position: "E-commerce Manager, ShopEase",
  },
  {
    name: "Sophia Martinez",
    feedback:
      "From branding to digital marketing, they handled everything seamlessly. A game-changer!",
    position: "Creative Director, Visionary Designs",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  // Memoize nextSlide function to prevent re-creation
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide]); // Now useCallback ensures `nextSlide` doesn't change unnecessarily

  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        What Our Clients Say
      </h2>
      <div className="relative overflow-hidden max-w-5xl mx-auto py-8">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-1/3 min-w-full md:min-w-[33.33%] p-6">
              <div className="bg-white p-6 rounded-lg shadow-lg mx-2 h-64">
                <div className="flex justify-center mb-4 text-blue-700 text-2xl">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-700 italic">{testimonial.feedback}</p>
                <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
