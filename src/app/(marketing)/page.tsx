import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhyBookber from "@/components/home/WhyBookber";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WaitlistSection from "@/components/home/WaitlistSection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Book appointments. Skip waiting.`,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <MarqueeSection />
      <FeaturesSection />
      <HowItWorks />
      <WhyBookber />
      <TestimonialsSection />
      <WaitlistSection />
    </>
  );
}
