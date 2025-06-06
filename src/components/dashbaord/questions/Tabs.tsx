import { BookOpen, Code2, MessageSquare } from 'lucide-react';
import React, { useState } from 'react'

interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = ({ activeTab, onTabChange }: TabProps) => {
  return (
    <div className="flex gap-2 p-1 bg-neutral-800/50 rounded-lg border border-neutral-700">
      <button
        onClick={() => onTabChange("question")}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "question"
          ? "bg-amber-400 text-neutral-900"
          : "text-neutral-400 hover:text-white hover:bg-neutral-700/50"
          }`}
      >
        <Code2 className="w-4 h-4" />
        Question
      </button>
      <button
        onClick={() => onTabChange("resources")}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "resources"
          ? "bg-amber-400 text-neutral-900"
          : "text-neutral-400 hover:text-white hover:bg-neutral-700/50"
          }`}
      >
        <BookOpen className="w-4 h-4" />
        Resources
      </button>
      <button
        onClick={() => onTabChange("discussion")}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "discussion"
          ? "bg-amber-400 text-neutral-900"
          : "text-neutral-400 hover:text-white hover:bg-neutral-700/50"
          }`}
      >
        <MessageSquare className="w-4 h-4" />
        Discuss With AI
      </button>
    </div>
  )
}

export default Tabs