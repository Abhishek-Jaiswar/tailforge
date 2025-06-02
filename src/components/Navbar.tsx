"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Code2, User, LogOut, Settings, Bell } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-amber-400" />
            <span className="text-xl font-display font-bold text-white tracking-tight">
              TailForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/challenges"
              className="text-neutral-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Challenges
            </Link>
            <Link
              href="/learn"
              className="text-neutral-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Learn
            </Link>
            <Link
              href="/community"
              className="text-neutral-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Community
            </Link>
            <Link
              href="/pricing"
              className="text-neutral-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Pricing
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-neutral-300 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-amber-400" />
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-neutral-800 rounded-lg border border-neutral-700 shadow-lg">
                  <div className="p-3 border-b border-neutral-700">
                    <p className="text-white font-display font-medium">
                      John Doe
                    </p>
                    <p className="text-neutral-400 text-sm">john@example.com</p>
                  </div>
                  <div className="p-2">
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700 rounded-lg transition-colors font-medium"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center gap-2 px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700 rounded-lg transition-colors font-medium"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <button className="flex items-center gap-2 w-full px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700 rounded-lg transition-colors font-medium">
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-4">
              <Link
                href="/challenges"
                className="text-neutral-300 hover:text-white transition-colors font-medium tracking-wide"
              >
                Challenges
              </Link>
              <Link
                href="/learn"
                className="text-neutral-300 hover:text-white transition-colors font-medium tracking-wide"
              >
                Learn
              </Link>
              <Link
                href="/community"
                className="text-neutral-300 hover:text-white transition-colors font-medium tracking-wide"
              >
                Community
              </Link>
              <Link
                href="/pricing"
                className="text-neutral-300 hover:text-white transition-colors font-medium tracking-wide"
              >
                Pricing
              </Link>
              <div className="pt-4 border-t border-neutral-800">
                <Link
                  href="/profile"
                  className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors font-medium"
                >
                  <User className="w-5 h-5" />
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-2 mt-4 text-neutral-300 hover:text-white transition-colors font-medium"
                >
                  <Settings className="w-5 h-5" />
                  Settings
                </Link>
                <button className="flex items-center gap-2 mt-4 text-neutral-300 hover:text-white transition-colors font-medium">
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
