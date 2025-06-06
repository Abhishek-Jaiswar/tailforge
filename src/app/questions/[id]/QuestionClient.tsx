"use client";

import React, { useState } from "react";
import {
    Code2,
    BookOpen,
    Play,
    FileText,
    Clock,
    Target,
    ChevronLeft,
    MessageSquare,
    Share2,
} from "lucide-react";
import Link from "next/link";
import Tabs from "@/components/dashbaord/questions/Tabs";
import AIChat from "@/components/dashbaord/ai/AIChat";

type QuestionClientProps = {
    questionId: string;
};

const QuestionClient = ({ questionId }: QuestionClientProps) => {
    const [activeTab, setActiveTab] = useState("question");
    // Mock data - this would come from your API
    const question = {
        id: questionId,
        title: "Responsive Navigation Bar",
        description:
            "Create a modern navigation bar that adapts to different screen sizes. The navigation should include a logo, menu items, and a mobile menu toggle. Implement smooth animations for the mobile menu and ensure it works well on all screen sizes.",
        difficulty: "Intermediate",
        timeEstimate: "45 min",
        category: "Navigation",
        status: "In Progress",
        requirements: [
            "Logo should be visible on all screen sizes",
            "Menu items should collapse into a hamburger menu on mobile",
            "Smooth animations for menu transitions",
            "Support for dark/light mode",
            "Accessible navigation with proper ARIA attributes",
        ],
        resources: [
            {
                id: 1,
                title: "Responsive Navigation Patterns",
                description: "Learn about different patterns for responsive navigation",
                type: "article",
                icon: FileText,
                link: "#",
            },
            {
                id: 2,
                title: "Mobile Menu Animations",
                description: "Tutorial on creating smooth mobile menu animations",
                type: "video",
                icon: Play,
                link: "#",
            },
            {
                id: 3,
                title: "Accessibility in Navigation",
                description: "Best practices for accessible navigation",
                type: "guide",
                icon: BookOpen,
                link: "#",
            },
        ],
    };

    return (
        <div className=" bg-neutral-900 h-full w-full p-2">
            {/* Header */}
            <div className="flex items-center justify-between bg-neutral-800/50 p-4 rounded-lg border border-neutral-700 mb-2">
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard/ai"
                        className="p-2 hover:bg-neutral-700/50 rounded-lg transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-neutral-400" />
                    </Link>
                    {/* Question Title and Metadata */}
                    <div>
                        <h1 className="text-2xl font-display font-bold text-white tracking-tight">
                            {question.title}
                        </h1>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-neutral-400">
                                {question.category}
                            </span>
                            <span className="text-sm text-neutral-400">•</span>
                            <div className="flex items-center gap-1 text-sm text-neutral-400">
                                <Clock className="w-4 h-4" />
                                {question.timeEstimate}
                            </div>
                            <span className="text-sm text-neutral-400">•</span>
                            <div className="flex items-center gap-1 text-sm text-neutral-400">
                                <Target className="w-4 h-4" />
                                {question.difficulty}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-neutral-700/50 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5 text-neutral-400" />
                    </button>
                    <button className="p-2 hover:bg-neutral-700/50 rounded-lg transition-colors">
                        <MessageSquare className="w-5 h-5 text-neutral-400" />
                    </button>
                </div>
            </div>

            <main className="flex w-full min-h-screen bg-neutral-900 gap-2">
                {/* Left Section (Tabs + Content) */}
                <section className="flex-1 max-w-[600px] rounded-lg border border-neutral-700 p-2 space-y-2">
                    {/* Tabs */}
                    <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

                    {/* Tab Content */}
                    {activeTab === "question" && (
                        <div className="bg-neutral-800/50 p-6 space-y-4 border border-neutral-700 rounded-lg">
                            <h2 className="text-lg font-display font-semibold text-white">
                                Description
                            </h2>
                            <p className="text-neutral-300">{question.description}</p>
                            <h3 className="text-md font-display font-semibold text-white mt-6">
                                Requirements
                            </h3>
                            <ul className="space-y-2">
                                {question.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center mt-0.5">
                                            <span className="text-xs text-amber-400">{index + 1}</span>
                                        </div>
                                        <span className="text-neutral-300">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "resources" && (
                        <div className="space-y-6">
                            {question.resources.map((resource) => (
                                <div
                                    key={resource.id}
                                    className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6 hover:border-amber-500/50 transition-all duration-200 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                                            <resource.icon className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                                {resource.title}
                                            </h3>
                                            <p className="text-neutral-400 mb-4">{resource.description}</p>
                                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-neutral-700 text-neutral-300">
                                                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "discussion" && (
                        <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6">
                            <AIChat />
                        </div>
                    )}
                </section>

                {/* Right Section (Code Editor) */}
                <section className=" flex-1 space-y-6">
                    <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6 h-full">
                        <h2 className="text-lg font-display font-semibold text-white mb-4">
                            Your Solution
                        </h2>
                        <div className="h-[500px] bg-neutral-900 rounded-lg border border-neutral-700">
                            {/* Code editor will go here */}
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default QuestionClient;
