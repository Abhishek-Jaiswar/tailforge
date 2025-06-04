import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import CodeShowcaseSection from "../components/home/CodeShowcaseSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import TestimonialSection from "../components/home/TestimonialSection";
import PricingSection from "../components/home/PricingSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      <main>
        <HeroSection />
        <section id="features" className="scroll-mt-16">
          <FeatureSection />
        </section>
        <section id="code-showcase" className="scroll-mt-16">
          <CodeShowcaseSection />
        </section>
        <section id="how-it-works" className="scroll-mt-16">
          <HowItWorksSection />
        </section>
        <section id="testimonials" className="scroll-mt-16">
          <TestimonialSection />
        </section>
        <section id="pricing" className="scroll-mt-16">
          <PricingSection />
        </section>
        <section id="cta" className="scroll-mt-16">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
