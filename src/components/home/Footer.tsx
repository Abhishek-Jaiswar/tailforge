"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">TailForge</h2>
            <p className="text-neutral-400 mb-4">
              Master Tailwind CSS through practice and real-world challenges.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Abhishek-jaiswar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("challenges")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Challenges
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("ai")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  AI Assistant
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("privacy")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("terms")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("cookies")}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500">
            © 2024 TailForge. All rights reserved.
          </p>
          <p className="text-neutral-400 mt-2">
            Built with ❤️ by{" "}
            <Link
              href="https://github.com/Abhishek-jaiswar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Abhishek Jaiswar
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
