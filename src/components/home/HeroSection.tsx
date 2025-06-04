import React from "react";
import Link from "next/link";
import { Star, Users, Trophy, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-neutral-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-neutral-900 to-neutral-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700 mb-8 animate-fade-in">
            <span className="text-amber-400">✨</span>
            <span className="text-neutral-300">
              The best way to master Tailwind CSS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            Master Tailwind CSS Through Practice
          </h1>

          {/* Description */}
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Join the community of developers who are mastering Tailwind CSS
            through real-world challenges and AI-powered feedback.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center animate-fade-in-up delay-200">
            <Link
              href="/signup"
              className="group px-6 py-3 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-100 transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/dashboard/categories"
              className="px-6 py-3 border border-neutral-600 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
            >
              View Challenges
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center justify-center gap-8 text-neutral-400 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span>10k+ developers</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>1000+ challenges</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
