import React from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700 mb-8">
            <span className="text-amber-400">🚀</span>
            <span className="text-neutral-300">
              Ready to level up your Tailwind skills?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Building Beautiful Interfaces Today
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Join thousands of developers who are already improving their
            Tailwind skills with TailForge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-all duration-300 hover:scale-105"
            >
              Start Practicing Now
              <Zap className="w-5 h-5" />
            </Link>
            <Link
              href="/challenges"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-600 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
            >
              View Challenges
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
