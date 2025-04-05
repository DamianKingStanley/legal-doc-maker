"use client";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                LegalGenius
              </span>
            </h3>
            <p className="text-gray-400">
              AI-powered legal document generation platform trusted by
              businesses and individuals worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/templates"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Document Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Document Types */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Document Types</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/templates/business"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Business Contracts
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/employment"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Employment Agreements
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/real-estate"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/personal"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Personal & Family
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/finance"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Financial Documents
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Legal Street, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:support@legalgenius.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  support@legalgenius.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <a
                  href="tel:+2349159822561"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +234 915 982 2561
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LegalGenius. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
