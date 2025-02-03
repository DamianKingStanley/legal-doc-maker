"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("Sending...");

    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section className="contact bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 py-8">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-lg mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-700">Get in Touch</h2>
            <p className="text-lg text-gray-600 mt-2">
              Have a question or want to work with us? Reach out, and we&apos;ll
              respond as soon as possible.
            </p>
            <div className="mt-4 flex flex-col space-y-3">
              <p className="flex items-center space-x-2 text-lg text-gray-600">
                <FaEnvelope className="text-blue-500" />
                <span>contact@dstechcompany.com</span>
              </p>
              <p className="flex items-center space-x-2 text-lg text-gray-600">
                <FaPhone className="text-green-500" />
                <span>+2349159822561</span>
              </p>
            </div>
            <div className="mt-6 flex space-x-6 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-lg font-medium text-gray-700">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
