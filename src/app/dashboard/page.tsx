import React from "react";
import {
  Trophy,
  Clock,
  Star,
  TrendingUp,
  Code2,
  BookOpen,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Challenges Completed",
    value: "24",
    icon: Trophy,
    change: "+12%",
    color: "text-amber-400",
  },
  {
    title: "Time Spent",
    value: "48h",
    icon: Clock,
    change: "+8%",
    color: "text-blue-400",
  },
  {
    title: "Current Streak",
    value: "7 days",
    icon: Star,
    change: "+2",
    color: "text-purple-400",
  },
  {
    title: "Skill Level",
    value: "Advanced",
    icon: TrendingUp,
    change: "Level Up!",
    color: "text-green-400",
  },
];

const recentChallenges = [
  {
    title: "Responsive Navigation",
    difficulty: "Intermediate",
    progress: 75,
    dueDate: "2 days left",
  },
  {
    title: "Dark Mode Toggle",
    difficulty: "Beginner",
    progress: 100,
    dueDate: "Completed",
  },
  {
    title: "Card Grid Layout",
    difficulty: "Advanced",
    progress: 30,
    dueDate: "5 days left",
  },
];

const recommendedChallenges = [
  {
    title: "Animated Hero Section",
    difficulty: "Intermediate",
    category: "UI Components",
    timeEstimate: "2 hours",
  },
  {
    title: "Dashboard Layout",
    difficulty: "Advanced",
    category: "Layouts",
    timeEstimate: "4 hours",
  },
  {
    title: "Form Validation",
    difficulty: "Beginner",
    category: "Forms",
    timeEstimate: "1 hour",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-neutral-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">
            Welcome back, John! 👋
          </h1>
          <p className="text-neutral-400 font-medium tracking-wide">
            Track your progress and continue your Tailwind CSS journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-green-400 font-medium tracking-wide">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-neutral-400 text-sm font-medium tracking-wide">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Challenges */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-semibold text-white tracking-tight">
                  Recent Challenges
                </h2>
                <Link
                  href="/challenges"
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium tracking-wide"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {recentChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-display font-medium tracking-wide">
                        {challenge.title}
                      </h3>
                      <span className="text-sm text-neutral-400 font-medium tracking-wide">
                        {challenge.dueDate}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-400 font-medium tracking-wide">
                        {challenge.difficulty}
                      </span>
                      <div className="w-32 h-2 bg-neutral-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{ width: `${challenge.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Challenges */}
          <div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold text-white mb-6 tracking-tight">
                Recommended for You
              </h2>
              <div className="space-y-4">
                {recommendedChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-display font-medium tracking-wide">
                          {challenge.title}
                        </h3>
                        <p className="text-sm text-neutral-400 font-medium tracking-wide">
                          {challenge.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400 font-medium tracking-wide">
                        {challenge.difficulty}
                      </span>
                      <span className="text-neutral-400 font-medium tracking-wide">
                        {challenge.timeEstimate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold text-white mb-6 tracking-tight">
                Quick Stats
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="text-neutral-300 font-medium tracking-wide">
                      Learning Path
                    </span>
                  </div>
                  <span className="text-white font-display font-medium">
                    75%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-neutral-300 font-medium tracking-wide">
                      Community Rank
                    </span>
                  </div>
                  <span className="text-white font-display font-medium">
                    #42
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-green-400" />
                    <span className="text-neutral-300 font-medium tracking-wide">
                      Weekly Goal
                    </span>
                  </div>
                  <span className="text-white font-display font-medium">
                    4/5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
