"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpecialSections from "@/components/dummies/categoryfeat";
import { useRouter } from "next/navigation";

const CARD_WIDTH: number = 288 + 16; // card width (w-72) + gap on mobile
const CARD_WIDTH_SM: number = 320 + 24; // card width (w-80) + gap on desktop

const SpecialChallenges = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [atStart, setAtStart] = useState<boolean>(true);
  const [atEnd, setAtEnd] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const scroll = (direction: "left" | "right"): void => {
    if (scrollRef.current) {
      const { scrollLeft }: { scrollLeft: number } = scrollRef.current;
      const cardWidth: number =
        window.innerWidth >= 640 ? CARD_WIDTH_SM : CARD_WIDTH;
      const newScroll: number =
        direction === "left"
          ? scrollLeft - cardWidth * 2
          : scrollLeft + cardWidth * 2;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  const handleScroll = (): void => {
    if (!scrollRef.current) return;
    const {
      scrollLeft,
      scrollWidth,
      clientWidth,
    }: {
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
    <div className="relative w-full overflow-hidden bg-neutral-800/50 rounded-lg border border-neutral-700 shadow-lg">
      {/* Navigation Buttons */}
      <button
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 text-white shadow-lg transition-all duration-300 ${atStart
          ? "opacity-50 cursor-not-allowed"
          : "opacity-90 hover:opacity-100 hover:scale-105 hover:shadow-xl cursor-pointer"
          }`}
        onClick={() => scroll("left")}
        disabled={atStart}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 mx-auto" />
      </button>

      <button
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 text-white shadow-lg transition-all duration-300 ${atEnd
          ? "opacity-50 cursor-not-allowed"
          : "opacity-90 hover:opacity-100 hover:scale-105 hover:shadow-xl cursor-pointer"
          }`}
        onClick={() => scroll("right")}
        disabled={atEnd}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 mx-auto" />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 p-6 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {SpecialSections.map(
          ({
            id,
            icon: Icon,
            name,
            description,
            speciality,
            noOfChallenges,
          }) => (
            <div
              key={id}
              className="group relative flex-shrink-0 w-72 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-neutral-800" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-700/50 backdrop-blur-sm border border-neutral-600/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-neutral-700/50 backdrop-blur-sm border border-neutral-600/30">
                    <span className="text-xs font-medium text-amber-400">
                      NEW
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{name}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-amber-400/90 font-medium">
                      {speciality}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      {noOfChallenges} Challenges
                    </span>
                    <span className="text-xs text-amber-400/90">
                      Updated recently
                    </span>
                  </div>
                  <button onClick={() => router.push("/questions/" + id)} className="w-full py-2.5 px-4 rounded-lg bg-neutral-700/50 hover:bg-neutral-600/50 text-white font-medium text-sm transition-all duration-300 border border-neutral-600/30">
                    Start Learning
                  </button>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-xl border border-neutral-700/50 pointer-events-none" />
            </div>
          )
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center gap-1.5 pb-4">
        {Array.from({ length: Math.ceil(SpecialSections.length / 3) }).map(
          (_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-neutral-700"
            />
          )
        )}
      </div>
    </div>
  );
};

export default SpecialChallenges;
