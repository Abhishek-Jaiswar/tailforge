"use client";

import React, { useState } from "react";
import AIChat from "@/components/dashbaord/ai/AIChat";
import TutorialSection from "@/components/dashbaord/ai/TutorialSection";
import {
  History,
  MessageSquare,
  ListChecks,
  ChevronRight,
  Plus,
  Sparkles,
  Code2,
  Clock,
  Target,
} from "lucide-react";
import Link from "next/link";

const AIPage = () => {
  const [activeTab, setActiveTab] = useState("generate");
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [prompt, setPrompt] = useState("");

  const tabs = [
    { id: "generate", label: "Generate", icon: ListChecks },
    { id: "history", label: "History", icon: History },
    { id: "feedback", label: "Feedback", icon: MessageSquare },
  ];

  const createdQuestions = [
    {
      id: 1,
      title: "Responsive Navigation Bar",
      description:
        "Create a modern navigation bar that adapts to different screen sizes",
      difficulty: "Intermediate",
      timeEstimate: "45 min",
      category: "Navigation",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Card Grid Layout",
      description: "Design a responsive grid of cards with hover effects",
      difficulty: "Beginner",
      timeEstimate: "30 min",
      category: "Layout",
      status: "Completed",
    },
    {
      id: 3,
      title: "Dark Mode Toggle",
      description: "Implement a smooth dark mode toggle with animations",
      difficulty: "Advanced",
      timeEstimate: "1 hour",
      category: "Theming",
      status: "Not Started",
    },
  ];

  const handleCreateQuestion = () => {
    // Handle question creation logic
    setShowPromptModal(false);
    setPrompt("");
  };

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

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-neutral-800/50 rounded-lg border border-neutral-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-amber-400 text-neutral-900"
                : "text-neutral-400 hover:text-white hover:bg-neutral-700/50"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === "generate" && (
            <div className="space-y-6">
              {/* Create New Question Button */}
              <button
                onClick={() => setShowPromptModal(true)}
                className="w-full p-6 bg-neutral-800/50 rounded-lg border border-neutral-700 hover:border-amber-500/50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                    <Plus className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-display font-semibold text-white group-hover:text-amber-400 transition-colors">
                      Create New Question
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Generate a custom UI challenge with AI
                    </p>
                  </div>
                </div>
              </button>

              {/* Questions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {createdQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6 hover:border-amber-500/50 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-amber-400" />
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          question.status === "Completed"
                            ? "bg-green-500/10 text-green-400"
                            : question.status === "In Progress"
                            ? "bg-amber-400/10 text-amber-400"
                            : "bg-neutral-700 text-neutral-400"
                        }`}
                      >
                        {question.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {question.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mb-4">
                      {question.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-neutral-400">
                        <Clock className="w-4 h-4" />
                        {question.timeEstimate}
                      </div>
                      <div className="flex items-center gap-1 text-neutral-400">
                        <Target className="w-4 h-4" />
                        {question.difficulty}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <TutorialSection />
            </div>
          )}

          {activeTab === "history" && (
            <div className="space-y-6">
              {/* History List */}
              <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6">
                <h2 className="text-lg font-display font-semibold text-white mb-4">
                  Recent Challenges
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <Link key={item} href={`/dashboard/questions/${item}`}>
                      <div
                        className="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg border border-neutral-600 hover:bg-neutral-700/50 transition-all duration-200 group cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                            <ListChecks className="w-5 h-5 text-amber-400" />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                              Responsive Navigation Challenge
                            </h3>
                            <p className="text-sm text-neutral-400">
                              Generated 2 hours ago
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-amber-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "feedback" && (
            <div className="space-y-6">
              {/* Feedback List */}
              <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6">
                <h2 className="text-lg font-display font-semibold text-white mb-4">
                  Recent Feedback
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="p-4 bg-neutral-700/30 rounded-lg border border-neutral-600 hover:bg-neutral-700/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-white">
                            Card Grid Layout
                          </h3>
                          <p className="text-xs text-neutral-400">
                            Feedback received 1 hour ago
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-300">
                        Great implementation! Consider adding hover effects and
                        improving the responsive behavior for mobile devices.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - AI Chat */}
        <div className="lg:sticky lg:top-6">
          <AIChat />
        </div>
      </div>

      {/* Prompt Modal */}
      {showPromptModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-800 rounded-lg border border-neutral-700 w-full max-w-2xl mx-4">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-white">
                    Create New Question
                  </h2>
                  <p className="text-sm text-neutral-400">
                    Describe the UI you want to create
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Describe your UI
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Example: Create a modern navigation bar with a mobile menu, dark mode toggle, and smooth animations..."
                    className="w-full h-32 px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowPromptModal(false)}
                    className="flex-1 px-4 py-2 bg-neutral-700/50 text-neutral-300 rounded-lg font-medium hover:bg-neutral-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateQuestion}
                    disabled={!prompt.trim()}
                    className="flex-1 px-4 py-2 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Generate Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIPage;
