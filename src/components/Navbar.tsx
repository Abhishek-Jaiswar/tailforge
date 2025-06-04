"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // This will be replaced with actual auth state management
  const isLoggedIn = false;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-amber-400" />
            <span className="text-xl font-bold text-white tracking-tight">
              TailForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("challenges")}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Challenges
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-neutral-300 hover:text-white transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-colors"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-neutral-300 hover:text-white transition-colors px-4 py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-neutral-300 hover:text-white transition-colors px-4 py-2"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("challenges")}
                className="text-neutral-300 hover:text-white transition-colors px-4 py-2"
              >
                Challenges
              </button>
              <div className="pt-4 border-t border-neutral-800">
                {isLoggedIn ? (
                  <Link
                    href="/dashboard"
                    className="block w-full px-4 py-2 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-colors text-center"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block w-full px-4 py-2 text-neutral-300 hover:text-white transition-colors text-center mb-2"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/signup"
                      className="block w-full px-4 py-2 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-colors text-center"
                    >
                      Sign up
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
