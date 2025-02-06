"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
// import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  // const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("LegalDoc-token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const subscriptionLink = "/subscription";
  const handleLogout = () => {
    localStorage.removeItem("LegalDoc-token");
    // router.push("/");
    window.location.href = "/";

    setIsLoggedIn(false);
  };

  return (
    <nav ref={navbarRef} className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 text-sm font-semibold">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            AIDOC
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact Us
            </Link>
            <Link href={subscriptionLink} className="hover:text-gray-200">
              Subscription
            </Link>

            {/* Display Log Out button if user is logged in */}
            {isLoggedIn && (
              <button
                className="hover:text-gray-200"
                onClick={handleLogout} // Log out the user when clicked
              >
                Log Out
              </button>
            )}
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
            className="md:hidden bg-[#2C3E50] fixed top-16 left-0 w-full h-fit text-lg font-semibold text-white flex flex-col space-y-3 p-4 z-50"
          >
            <Link
              href="/"
              className="block text-sm px-4 py-2 hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm px-4 py-2 hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-sm px-4 py-2 hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              Contact Us
            </Link>
            <Link
              href={subscriptionLink}
              className="block text-sm px-4 py-2 hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              Subscription
            </Link>

            {isLoggedIn && (
              <button
                className="block text-sm px-4 py-2 hover:bg-gray-700"
                onClick={() => {
                  handleLogout(); // Log out the user when clicked
                  setIsMobileMenuOpen(false); // Close menu when clicked
                }}
              >
                Log Out
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
