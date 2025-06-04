import React from "react";
import { Code2, Sparkles, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Real-world Challenges",
    description:
      "Practice with actual design challenges that mirror real-world scenarios and industry standards.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Learning",
    description:
      "Get instant feedback and suggestions from our AI to improve your Tailwind skills faster.",
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description:
      "Monitor your improvement with detailed analytics and achievement tracking.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Join a community of developers, share solutions, and learn from others.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Master Tailwind CSS
            </h2>
            <p className="text-lg text-neutral-400">
              A comprehensive platform designed to help you become a Tailwind
              CSS expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-amber-400/20 transition-all duration-300 hover:bg-neutral-800/70"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
