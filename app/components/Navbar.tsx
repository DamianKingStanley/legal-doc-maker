"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null); // Ref for mobile menu
  const navbarRef = useRef<HTMLDivElement | null>(null); // Ref for navbar container

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when clicking outside of the navbar
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  // Add event listener for outside click
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string | null) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const servicesDropdown = [
    "General Services",
    "Android and IOS Apps",
    "Website Development",
    "Software Development",
    "Tech Coaching",
    "Graphics and Branding",
  ];

  const aboutDropdown = ["About Us", "Our Team", "Values", "Privacy Policy"];

  return (
    <nav ref={navbarRef} className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 text-sm font-semibold">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            DS TECH
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200 text-sm">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("services")}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="hover:text-gray-200 flex items-center">
                Our Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === "services" && (
                <div className="absolute bg-white text-gray-800  shadow-lg mt-2 py-2 w-48">
                  {servicesDropdown.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("about")}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="hover:text-gray-200 flex items-center">
                About Us
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === "about" && (
                <div className="absolute bg-white text-gray-800  shadow-lg mt-2 py-2 w-48">
                  {aboutDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={`/about/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link href="/career" className="hover:text-gray-200">
              Career
            </Link>
            <Link href="/products" className="hover:text-gray-200">
              Our Products
            </Link> */}
            <Link href="/contact" className="hover:text-gray-200">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-lg" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-white mt-2 pb-8 text-lg font-semibold text-black leading-10 space-y-3"
          >
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="px-4 py-2">
              <button
                className="w-full flex justify-between items-center"
                onClick={() => toggleDropdown("services")}
              >
                <span>Our Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === "services" && (
                <div className="pl-4">
                  {servicesDropdown.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="block py-2 hover:bg-blue-600 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="px-4 py-2">
              <button
                className="w-full flex justify-between items-center"
                onClick={() => toggleDropdown("about")}
              >
                <span>About Us</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === "about" && (
                <div className="pl-4">
                  {aboutDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={`/about/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block py-2 hover:bg-blue-600 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link
              href="/career"
              className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              Career
            </Link>
            <Link
              href="/products"
              className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              Our Products
            </Link> */}
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
