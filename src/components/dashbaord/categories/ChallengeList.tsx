'use client';

import React from "react";
import { CheckCircle2, Circle, Clock, Star } from "lucide-react";
import { useRouter } from "next/navigation";
interface Challenge {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  acceptance: number;
  status: "solved" | "attempted" | "unsolved";
  premium: boolean;
}

const mockChallenges: Challenge[] = [
  {
    id: 1,
    title: "Responsive Navigation Bar",
    difficulty: "Easy",
    category: "Navigation",
    acceptance: 85,
    status: "solved",
    premium: false,
  },
  {
    id: 2,
    title: "Dark Mode Toggle",
    difficulty: "Easy",
    category: "Theming",
    acceptance: 78,
    status: "attempted",
    premium: false,
  },
  {
    id: 3,
    title: "Infinite Scroll List",
    difficulty: "Medium",
    category: "Lists",
    acceptance: 65,
    status: "unsolved",
    premium: false,
  },
  {
    id: 4,
    title: "Animated Modal Dialog",
    difficulty: "Medium",
    category: "Modals",
    acceptance: 72,
    status: "unsolved",
    premium: true,
  },
  {
    id: 5,
    title: "Drag and Drop Interface",
    difficulty: "Hard",
    category: "Interactions",
    acceptance: 58,
    status: "unsolved",
    premium: false,
  },
  {
    id: 6,
    title: "Custom Form Validation",
    difficulty: "Medium",
    category: "Forms",
    acceptance: 68,
    status: "unsolved",
    premium: false,
  },
  {
    id: 7,
    title: "Responsive Grid Layout",
    difficulty: "Easy",
    category: "Layout",
    acceptance: 82,
    status: "solved",
    premium: false,
  },
  {
    id: 8,
    title: "Interactive Data Visualization",
    difficulty: "Hard",
    category: "Charts",
    acceptance: 45,
    status: "unsolved",
    premium: true,
  },
];

const ChallengeList = () => {
  const router = useRouter();
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "Hard":
        return "text-red-400";
      default:
        return "text-neutral-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "solved":
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case "attempted":
        return <Clock className="w-4 h-4 text-yellow-400" />;
      default:
        return <Circle className="w-4 h-4 text-neutral-600" />;
    }
  };

  return (
    <div className="w-full">
      <div className="bg-neutral-800/50 rounded-lg border border-neutral-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Acceptance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-700">
              {mockChallenges.map((challenge) => (
                <tr
                  key={challenge.id}
                  onClick={() => router.push(`/questions/${challenge.id}`)}
                  className="hover:bg-neutral-700/30 transition-colors duration-150 cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusIcon(challenge.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-neutral-200">
                        {challenge.title}
                      </span>
                      {challenge.premium && (
                        <Star className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-neutral-400">
                      {challenge.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-neutral-400">
                      {challenge.acceptance}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChallengeList;
