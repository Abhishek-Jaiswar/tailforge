import React from "react";
import Navbar from "../components/Navbar";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Trophy,
  Users,
  Zap,
  Check,
  Star,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

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

const testimonials = [
  {
    quote:
      "TailForge helped me land my dream job as a frontend developer. The challenges are exactly what companies are looking for.",
    author: "Sarah Chen",
    role: "Frontend Developer",
    company: "TechCorp",
  },
  {
    quote:
      "The AI feedback is incredible. It's like having a senior developer review your code in real-time.",
    author: "Mike Johnson",
    role: "Full Stack Developer",
    company: "StartupX",
  },
  {
    quote:
      "I went from zero to hero in Tailwind CSS thanks to TailForge's structured learning path.",
    author: "Alex Rivera",
    role: "UI Developer",
    company: "DesignCo",
  },
];

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

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />

      {/* Hero Section with enhanced background */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-neutral-900/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-neutral-900 to-neutral-900" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700 mb-8">
              <span className="text-amber-400">✨</span>
              <span className="text-neutral-300">
                The best way to master Tailwind CSS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent mb-6">
              Master Tailwind CSS Through Practice
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join the community of developers who are mastering Tailwind CSS
              through real-world challenges and AI-powered feedback.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/signup"
                className="group px-6 py-3 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-100 transition-all duration-300 hover:scale-105"
              >
                Get Started
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </Link>
              <Link
                href="/dashboard/categories"
                className="px-6 py-3 border border-neutral-600 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
              >
                View Challenges
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-neutral-400">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>10k+ developers</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span>1000+ challenges</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Showcase Section */}
      <section className="py-20 bg-neutral-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Write Less, Design More
                </h2>
                <p className="text-neutral-300 mb-8">
                  See how Tailwind CSS helps you build beautiful designs faster
                  than ever before.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-400" />
                    <span className="text-neutral-300">No more custom CSS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-400" />
                    <span className="text-neutral-300">
                      Responsive by default
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-400" />
                    <span className="text-neutral-300">Dark mode support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 blur-3xl" />
                <div className="relative bg-neutral-800 rounded-xl p-4 border border-neutral-700">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <pre className="text-sm text-neutral-300">
                    <code>{`<div className="flex items-center gap-4 p-6
  bg-neutral-800 rounded-xl
  hover:bg-neutral-700
  transition-colors">
  <div className="w-12 h-12 bg-amber-400
    rounded-full flex items-center
    justify-center">
    <Icon className="w-6 h-6" />
  </div>
  <div>
    <h3 className="text-lg font-semibold
      text-white">Feature Title</h3>
    <p className="text-neutral-400">
      Description text here
    </p>
  </div>
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose TailForge?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Everything you need to master Tailwind CSS and build beautiful
              interfaces faster than ever.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Loved by Developers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include a
              14-day free trial.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-neutral-800/50 border rounded-xl p-8 ${
                  plan.popular ? "border-amber-500/50" : "border-neutral-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-neutral-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-neutral-400">/month</span>
                </div>
                <p className="text-neutral-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-amber-400" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-amber-400 text-neutral-900 hover:bg-amber-300"
                      : "bg-neutral-700 text-white hover:bg-neutral-600"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced design */}
      <section className="py-20 bg-neutral-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700 mb-8">
              <span className="text-amber-400">🚀</span>
              <span className="text-neutral-300">
                Ready to level up your Tailwind skills?
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Building Beautiful Interfaces Today
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Join thousands of developers who are already improving their
              Tailwind skills with TailForge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-all duration-300 hover:scale-105"
              >
                Start Practicing Now
                <Zap className="w-5 h-5" />
              </Link>
              <Link
                href="/challenges"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-600 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
              >
                View Challenges
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 border-t border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">TailForge</h2>
              <p className="text-neutral-400 mb-4">
                Master Tailwind CSS through practice and real-world challenges.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/challenges"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Challenges
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    AI Assistant
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-800 text-center text-neutral-500">
            <p>© 2024 TailForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
