"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">AI Legal Docs</h2>
            <p className="mt-4 text-gray-400">
              Effortlessly generate tailored legal documents with AI.
              Simplifying legal work for businesses and individuals alike.
            </p>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/4 mb-8 text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-gray-200">
              Contact Us
            </h4>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:support@dstechcompany.com"
                className="hover:text-blue-400"
              >
                support@dstechcompany.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-blue-400">
                +2349159822561
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-8 text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-gray-200">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 AI Legal Docs. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm">
            <Link href="#" className="hover:text-blue-400">
              Terms of Service
            </Link>{" "}
            |
            <Link href="#" className="hover:text-blue-400">
              {" "}
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
