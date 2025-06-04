import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "5 challenges per month",
      "Basic AI feedback",
      "Community access",
      "Basic progress tracking",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious developers",
    features: [
      "Unlimited challenges",
      "Advanced AI feedback",
      "Priority support",
      "Detailed analytics",
      "Custom challenges",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team management",
      "Custom branding",
      "API access",
      "Dedicated support",
      "Training sessions",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-400">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-xl bg-neutral-800/50 border ${
                  plan.popular
                    ? "border-amber-400/20 shadow-lg shadow-amber-400/5"
                    : "border-neutral-700"
                } transition-all duration-300 hover:border-amber-400/20`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400/10 text-amber-400 text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                  </div>
                  <p className="text-neutral-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-neutral-300"
                    >
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className={`block w-full py-3 px-6 text-center rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-amber-400 text-neutral-900 hover:bg-amber-500"
                      : "bg-neutral-700 text-white hover:bg-neutral-600"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
