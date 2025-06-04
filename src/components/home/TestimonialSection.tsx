import React from "react";
import { Star } from "lucide-react";

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

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-neutral-400">
              Join thousands of developers who have transformed their careers
              with TailForge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-amber-400/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-neutral-300 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-neutral-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
