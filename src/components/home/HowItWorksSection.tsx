import React from "react";

const steps = [
  {
    number: "01",
    title: "Choose a Challenge",
    description:
      "Browse through our curated collection of Tailwind CSS challenges, from beginner to advanced.",
  },
  {
    number: "02",
    title: "Build & Practice",
    description:
      "Implement the design using Tailwind CSS, with our AI assistant ready to help when needed.",
  },
  {
    number: "03",
    title: "Get Feedback",
    description:
      "Receive instant feedback on your implementation and suggestions for improvement.",
  },
  {
    number: "04",
    title: "Level Up",
    description:
      "Track your progress, earn achievements, and watch your Tailwind skills grow.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-neutral-400">
              Start your journey to becoming a Tailwind CSS expert in four
              simple steps
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 items-start group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
