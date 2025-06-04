"use client";

import React from "react";
import { Check } from "lucide-react";

const CodeShowcaseSection = () => {
  return (
    <section className="py-20 bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Write Less, Design More
              </h2>
              <p className="text-lg text-neutral-300 mb-8">
                See how Tailwind CSS helps you build beautiful designs faster
                than ever before.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400" />
                  <span className="text-neutral-300">No more custom CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400" />
                  <span className="text-neutral-300">
                    Responsive by default
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400" />
                  <span className="text-neutral-300">Dark mode support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 blur-3xl" />
              <div className="relative bg-neutral-800 rounded-xl p-4 border border-neutral-700">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-sm text-neutral-300">
                  <code>{`<div className="flex items-center gap-4 p-6
  bg-neutral-800 rounded-xl
  hover:bg-neutral-700
  transition-colors">
  <div className="w-12 h-12 bg-amber-400
    rounded-full flex items-center
    justify-center">
    <Icon className="w-6 h-6" />
  </div>
  <div>
    <h3 className="text-lg font-semibold
      text-white">Feature Title</h3>
    <p className="text-neutral-400">
      Description text here
    </p>
  </div>
</div>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcaseSection;
