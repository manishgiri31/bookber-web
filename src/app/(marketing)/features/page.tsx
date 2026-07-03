import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureIcon from "@/components/shared/FeatureIcon";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Features — Real-time Booking, Queue Tracking & More",
  description:
    "Explore all BOOKBER features: real-time queue management, instant booking, live ETA, secure payments, analytics dashboard, and more.",
  alternates: { canonical: "/features" },
};

const featureGroups = [
  {
    label: "For Customers",
    color: "#3B82F6",
    ids: ["instant-booking", "realtime-queue", "live-eta", "nearby-barbers", "ratings-reviews", "maps-integration"],
  },
  {
    label: "For Barbers",
    color: "#E53935",
    ids: ["business-dashboard", "smart-scheduling", "analytics", "smart-notifications", "secure-payments", "availability"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E53935]/6 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-[#374151] text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-pulse" />
              12 Powerful Features
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1
              className="font-black tracking-tight text-[#111111] text-balance mb-6 mx-auto max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: "1.05", letterSpacing: "-0.03em" }}
            >
              Every feature you need.
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #E53935 0%, #FF6F00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Zero you don&apos;t.
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
              BOOKBER packs enterprise-level functionality into an interface so intuitive, even the
              most tech-averse barber can be up and running in minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* All features grid */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <AnimatedSection key={feature.id} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-transparent hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group h-full">
                  <FeatureIcon name={feature.icon} color={feature.color} size="lg" className="mb-5" />
                  <h2 className="font-semibold text-[#111111] text-base mb-2 group-hover:text-[#E53935] transition-colors duration-200">
                    {feature.title}
                  </h2>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature groups breakdown */}
      {featureGroups.map((group, gi) => {
        const groupFeatures = group.ids.map((id) => FEATURES.find((f) => f.id === id)).filter(Boolean);
        return (
          <section
            key={group.label}
            className={`py-24 ${gi === 0 ? "bg-white" : "bg-[#F8F9FA]"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge={group.label}
                title={gi === 0 ? "Designed for the customer" : "Built for barbers"}
                titleHighlight={gi === 0 ? "in you" : "who mean business"}
                description={
                  gi === 0
                    ? "As a customer, BOOKBER saves you time, eliminates uncertainty, and helps you discover the best barbers near you."
                    : "As a barber, BOOKBER gives you the tools to run a more efficient, profitable, and professional shop."
                }
                className="mb-16"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupFeatures.map((feature, i) => feature && (
                  <AnimatedSection key={feature.id} delay={i * 80}>
                    <div
                      className={`rounded-2xl p-5 border transition-all duration-300 flex gap-4 items-start ${
                        gi === 0
                          ? "bg-[#F8F9FA] border-[#E5E7EB] hover:shadow-md"
                          : "bg-white border-[#E5E7EB] hover:shadow-md"
                      }`}
                    >
                      <FeatureIcon name={feature.icon} color={feature.color} size="sm" />
                      <div>
                        <h3 className={`font-semibold text-sm mb-1 ${gi === 0 ? "text-[#111111]" : "text-[#111111]"}`}>
                          {feature.title}
                        </h3>
                        <p className={`text-xs leading-relaxed ${gi === 0 ? "text-[#6B7280]" : "text-[#6B7280]"}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-[#111111] tracking-tight mb-4">
              Ready to experience BOOKBER?
            </h2>
            <p className="text-[#6B7280] mb-8">
              Join the waitlist for early access and exclusive launch pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#C62828] transition-all text-sm">
                Join Waitlist <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#111111] font-semibold px-6 py-3 rounded-xl hover:border-[#111111] transition-all text-sm">
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
