import React from "react";
import { BookOpen, Play, FileText } from "lucide-react";
import SectionHeader from "./layout/SectionHeader";
import TutorialCard from "./ui/TutorialCard";

const tutorials = [
  {
    id: 1,
    title: "Getting Started with UI Challenges",
    description:
      "Learn the basics of UI development and how to approach challenges effectively.",
    type: "guide",
    icon: BookOpen,
    link: "#",
  },
  {
    id: 2,
    title: "Responsive Design Fundamentals",
    description:
      "Master the art of creating layouts that work across all screen sizes.",
    type: "video",
    icon: Play,
    link: "#",
  },
  {
    id: 3,
    title: "Component Architecture",
    description:
      "Best practices for structuring and organizing your UI components.",
    type: "article",
    icon: FileText,
    link: "#",
  },
];

const TutorialSection = () => {
  return (
    <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6">
      <SectionHeader
        icon={BookOpen}
        title="Learning Resources"
        description="Tutorials and guides to help you improve"
      />

      <div className="space-y-4">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            type={tutorial.type}
            icon={tutorial.icon}
            link={tutorial.link}
          />
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-neutral-700/50 hover:bg-neutral-700 text-neutral-300 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
        <BookOpen className="w-4 h-4" />
        View All Resources
      </button>
    </div>
  );
};

export default TutorialSection;
