'use client'

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpecialSections from "@/components/dummies/categoryfeat";

const CARD_WIDTH: number = 288 + 16; // card width (w-72) + gap on mobile
const CARD_WIDTH_SM: number = 320 + 24; // card width (w-80) + gap on desktop

const SpecialChallenges = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [atStart, setAtStart] = useState<boolean>(true);
  const [atEnd, setAtEnd] = useState<boolean>(false);

  // Ref type
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollRef.current) {
      const { scrollLeft }: { scrollLeft: number } = scrollRef.current;
      const cardWidth: number = window.innerWidth >= 640 ? CARD_WIDTH_SM : CARD_WIDTH;
      const newScroll: number = direction === "left"
        ? scrollLeft - cardWidth * 2
        : scrollLeft + cardWidth * 2;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  const handleScroll = (): void => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth }: {
      scrollLeft: number;
      scrollWidth: number;
      clientWidth: number;
    } = scrollRef.current;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };


  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <button
        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white shadow-xl transition-all duration-300 ${atStart
          ? 'opacity-30 cursor-not-allowed'
          : 'opacity-90 hover:opacity-100 hover:scale-110 hover:shadow-2xl'
          }`}
        onClick={() => scroll("left")}
        disabled={atStart}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 mx-auto" />
      </button>

      <button
        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white shadow-xl transition-all duration-300 ${atEnd
          ? 'opacity-30 cursor-not-allowed'
          : 'opacity-90 hover:opacity-100 hover:scale-110 hover:shadow-2xl'
          }`}
        onClick={() => scroll("right")}
        disabled={atEnd}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 mx-auto" />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 py-1 sm:gap-6 sm:px-8 overflow-x-auto scrollbar-hide scroll-smooth h-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SpecialSections.map(({ id, icon: Icon, name, description, speciality, noOfChallenges }) => (
          <div
            key={id}
            className={`group relative flex-shrink-0 rounded-md sm:rounded-md overflow-hidden cursor-pointer transition-all duration-500 w-80 ${hoveredCard === id
              ? 'shadow-2xl shadow-neutral-700/50'
              : 'hover:scale-102 shadow-xl'
              }`}
            onMouseEnter={() => setHoveredCard(id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 opacity-90" />

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-600/30 via-neutral-500/30 to-neutral-600/30" />
            </div>

            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-neutral-600/10 via-neutral-500/10 to-neutral-600/10 opacity-0 transition-opacity duration-500 ${hoveredCard === id ? 'opacity-100' : 'group-hover:opacity-60'
              }`} />

            {/* Content */}
            <div className="relative z-10 p-4 sm:p-4 h-full flex flex-col justify-between">
              {/* Icon Section */}
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-neutral-700/50 backdrop-blur-sm border border-neutral-600/30 flex items-center justify-center transition-all duration-300 ${hoveredCard === id ? 'scale-110 rotate-3 bg-neutral-600/50' : 'group-hover:scale-105'
                  }`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-300" />
                </div>

                {/* Floating Badge */}
                <div className="px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-neutral-700/50 backdrop-blur-sm border border-neutral-600/30">
                  <span className="text-xs font-medium text-neutral-300">NEW</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors duration-300">
                  {name}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400 font-medium italic">
                    {speciality}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className={`mt-3 sm:mt-4 transition-all duration-300 `}>
                <span className="text-neutral-300 font-semibold text-lg"> {noOfChallenges} Unique Levels</span>
                <button className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-neutral-700 hover:bg-neutral-600 text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl border border-neutral-600/50 cursor-pointer">
                  Start Challenge
                </button>
              </div>
            </div>

            {/* Subtle Border */}
            <div className="absolute inset-0 rounded-3xl border border-neutral-600/20 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(SpecialSections.length / 3) }).map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-neutral-600 transition-colors duration-300"
          />
        ))}
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-900">
      <SpecialChallenges />
    </div>
  );
};

export default Categories;