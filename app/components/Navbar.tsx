"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("LegalDoc-token");
    if (token) setIsLoggedIn(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("LegalDoc-token");
    window.location.href = "/";
    setIsLoggedIn(false);
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`text-2xl font-bold ${
                scrolled ? "text-[#0A2342]" : "text-white"
              }`}
            >
              LegalGenius
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link
                href="/"
                className={`font-medium hover:text-[#1D4E89] transition ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/templates"
                className={`font-medium hover:text-[#1D4E89] transition flex items-center ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                Templates
              </Link>
              <Link
                href="/pricing"
                className={`font-medium hover:text-[#1D4E89] transition ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className={`font-medium hover:text-[#1D4E89] transition ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className={`flex items-center font-medium ${
                    scrolled
                      ? "text-gray-700 hover:text-[#1D4E89]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <FaUser className="mr-2" /> Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-500 hover:text-red-600 transition"
                >
                  <RiLogoutCircleRLine className="mr-2" /> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-lg font-medium ${
                    scrolled
                      ? "text-[#1D4E89] hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-[#1D4E89] to-[#0A2342] text-white rounded-lg font-medium hover:opacity-90 transition shadow-md"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes
                className={`text-xl ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <FaBars
                className={`text-xl ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className={`md:hidden fixed inset-0 mt-16 w-full ${
              scrolled ? "bg-white" : "bg-[#0A2342]"
            } transition-all duration-300 overflow-y-auto`}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className={`py-3 px-4 rounded-lg font-medium ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/templates"
                className={`py-3 px-4 rounded-lg font-medium flex items-center ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Templates
              </Link>
              <Link
                href="/pricing"
                className={`py-3 px-4 rounded-lg font-medium ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className={`py-3 px-4 rounded-lg font-medium ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 mt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/dashboard"
                      className={`py-3 px-4 rounded-lg font-medium flex items-center ${
                        scrolled
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FaUser className="mr-3" /> My Account
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full py-3 px-4 rounded-lg font-medium flex items-center text-red-500 hover:bg-red-50"
                    >
                      <RiLogoutCircleRLine className="mr-3" /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className={`block py-3 px-4 rounded-lg font-medium text-center mb-3 ${
                        scrolled
                          ? "text-[#1D4E89] hover:bg-gray-100"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="block py-3 px-4 bg-gradient-to-r from-[#1D4E89] to-[#0A2342] text-white rounded-lg font-medium text-center hover:opacity-90 transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started Free
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
