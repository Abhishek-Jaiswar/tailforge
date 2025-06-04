"use client";

import React, { useState } from "react";
import { Sparkles, Code2, Clock, Target } from "lucide-react";
import SectionHeader from "./layout/SectionHeader";
import DifficultySelector from "./ui/DifficultySelector";
import CategorySelect from "./ui/CategorySelect";
import FeatureCard from "./ui/FeatureCard";

const QuestionGenerator = () => {
  const [difficulty, setDifficulty] = useState("medium");
  const [category, setCategory] = useState("all");
  const [isGenerating, setIsGenerating] = useState(false);

  const features = [
    { icon: Code2, label: "Code Examples" },
    { icon: Clock, label: "Time Estimates" },
    { icon: Target, label: "Learning Goals" },
  ];

  return (
    <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6">
      <SectionHeader
        icon={Sparkles}
        title="Generate Challenge"
        description="Create a custom UI challenge with AI"
      />

      <div className="space-y-4">
        <DifficultySelector difficulty={difficulty} onSelect={setDifficulty} />

        <CategorySelect category={category} onChange={setCategory} />

        <button
          onClick={() => setIsGenerating(true)}
          disabled={isGenerating}
          className="w-full mt-6 px-4 py-3 bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
              Generating Challenge...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate Challenge
            </>
          )}
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} label={feature.label} />
        ))}
      </div>
    </div>
  );
};

export default QuestionGenerator;
