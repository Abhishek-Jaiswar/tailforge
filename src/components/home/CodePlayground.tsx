"use client";

import React, { useState, useEffect } from "react";
import { Code2, ChevronLeft, ChevronRight } from "lucide-react";

const examples = [
  {
    title: "Card Component",
    code: `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <div class="h-12 w-12 bg-amber-400 rounded-full"></div>
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-neutral-500">You have a new message!</p>
  </div>
</div>`,
  },
  {
    title: "Button Component",
    code: `<button class="px-4 py-2 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-colors">
  Click me
</button>`,
  },
  {
    title: "Alert Component",
    code: `<div class="bg-amber-400/10 border border-amber-400/20 rounded-lg p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-amber-400">Attention needed</h3>
      <div class="mt-2 text-sm text-amber-400/80">
        <p>This is an important message that needs your attention.</p>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    title: "Badge Component",
    code: `<div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-400/10 text-amber-400">
  New Feature
</div>`,
  },
  {
    title: "Input Component",
    code: `<div class="max-w-sm">
  <label class="block text-sm font-medium text-neutral-400 mb-2">
    Email address
  </label>
  <input type="email" class="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 text-white" placeholder="you@example.com" />
</div>`,
  },
];

const CodePlayground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % examples.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % examples.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-medium text-white">Component Showcase</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            title="Previous example"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            title="Next example"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Code Display */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-800 rounded-t-lg flex items-center px-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <pre
            className={`w-full h-[400px] bg-neutral-900 text-neutral-100 font-mono text-sm p-4 pt-12 rounded-lg border border-neutral-800 overflow-auto transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <code>{examples[currentIndex].code}</code>
          </pre>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-lg p-8 flex items-center justify-center">
          <div
            className={`w-full transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            dangerouslySetInnerHTML={{ __html: examples[currentIndex].code }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-neutral-400">
          {examples[currentIndex].title}
        </p>
        <div className="flex gap-2">
          {examples.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-amber-400"
                  : "bg-neutral-600 hover:bg-neutral-500"
              }`}
              title={`View ${examples[index].title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
