import React from "react";
import AIChat from "@/components/dashbaord/ai/AIChat";
import QuestionGenerator from "@/components/dashbaord/ai/QuestionGenerator";
import TutorialSection from "@/components/dashbaord/ai/TutorialSection";

const AIPage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">
            AI Learning Assistant
          </h1>
          <p className="text-neutral-400 mt-1">
            Generate custom UI challenges and get instant feedback
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Question Generator */}
        <div className="space-y-6">
          <QuestionGenerator />
          <TutorialSection />
        </div>

        {/* Right Column - AI Chat */}
        <div className="lg:sticky lg:top-6">
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default AIPage;
