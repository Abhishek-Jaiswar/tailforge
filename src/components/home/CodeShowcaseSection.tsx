"use client";

import React from "react";
import { Code2 } from "lucide-react";

const CodeShowcaseSection = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Beautiful Components with Tailwind CSS
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            See how Tailwind CSS helps you build beautiful designs faster than
            ever before.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card Component */}
          <div className="bg-neutral-800/50 rounded-xl border border-neutral-700 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-medium text-white">
                  Card Component
                </h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-amber-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-xl font-medium text-black">
                      ChitChat
                    </div>
                    <p className="text-neutral-500">You have a new message!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button Component */}
          <div className="bg-neutral-800/50 rounded-xl border border-neutral-700 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-medium text-white">
                  Button Component
                </h3>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-colors">
                  Primary
                </button>
                <button className="px-4 py-2 bg-neutral-700 text-white rounded-lg font-medium hover:bg-neutral-600 transition-colors">
                  Secondary
                </button>
              </div>
            </div>
          </div>

          {/* Alert Component */}
          <div className="bg-neutral-800/50 rounded-xl border border-neutral-700 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-medium text-white">
                  Alert Component
                </h3>
              </div>
              <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-amber-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-amber-400">
                      Attention needed
                    </h3>
                    <div className="mt-2 text-sm text-amber-400/80">
                      <p>
                        This is an important message that needs your attention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Component */}
          <div className="bg-neutral-800/50 rounded-xl border border-neutral-700 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-medium text-white">
                  Input Component
                </h3>
              </div>
              <div className="max-w-sm">
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcaseSection;
