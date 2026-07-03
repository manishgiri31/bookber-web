import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Lightbulb, Shield, Users, Cpu } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { TEAM_MEMBERS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About BOOKBER — Our Mission, Vision & Story",
  description:
    "Learn about BOOKBER's mission to transform the barber booking experience. Meet our team, understand our values, and see where we're headed.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Cpu,
    title: "Technology First",
    description:
      "We believe technology should make everyday experiences delightful. We obsess over every detail of the product experience.",
    color: "#3B82F6",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Everything we build starts with a real customer problem. If it doesn't make someone's day better, we don't build it.",
    color: "#E53935",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "We're open and honest with our partners, customers, and team. No hidden fees, no dark patterns, no surprises.",
    color: "#22C55E",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We're not here to digitize the status quo. We're here to reimagine how service businesses operate in the 21st century.",
    color: "#F59E0B",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E53935]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#9CA3AF] text-xs font-medium mb-8">
              About BOOKBER
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1
              className="font-black tracking-tight text-white text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: "1.05", letterSpacing: "-0.03em" }}
            >
              We&apos;re fixing how
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #E53935 0%, #FF6F00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                barbers do business.
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed">
              BOOKBER was born from a simple frustration: why does booking a haircut in 2025 still
              mean sitting in a shop for 90 minutes with no idea how long you&apos;ll wait? We knew
              there had to be a better way.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] h-full">
                <div className="w-12 h-12 rounded-xl bg-[#FFEBEE] border border-[#FFCDD2] flex items-center justify-center mb-6">
                  <Target size={22} className="text-[#E53935]" />
                </div>
                <h2 className="text-2xl font-black text-[#111111] tracking-tight mb-4">Our Mission</h2>
                <p className="text-[#6B7280] leading-relaxed">
                  To give every person access to a world-class barber experience — on their terms, on
                  their time. And to give every barber the tools they need to run a thriving,
                  modern business without the overhead.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="p-8 rounded-2xl bg-[#111111] border border-[#2A2A2A] h-full">
                <div className="w-12 h-12 rounded-xl bg-[#E53935]/20 border border-[#E53935]/30 flex items-center justify-center mb-6">
                  <Eye size={22} className="text-[#E53935]" />
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight mb-4">Our Vision</h2>
                <p className="text-[#9CA3AF] leading-relaxed">
                  A world where finding and booking your perfect barber is as simple and delightful
                  as ordering food from your favorite restaurant. We&apos;re building the infrastructure
                  for the future of personal grooming.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Story"
            title="From frustration to"
            titleHighlight="revolution"
            className="mb-12"
          />
          <div className="space-y-6 text-[#374151] leading-relaxed">
            {[
              "It started in Atlanta in 2023. Our founder Alex, after waiting 75 minutes in a barbershop while running late for a meeting, asked a simple question: \"Why isn't there an app for this?\" He looked around. There were apps for every kind of restaurant, hotel, and taxi — but nothing designed specifically for the barber shop experience.",
              "After months of research, Alex discovered this wasn't just a personal problem. Barbers lost an estimated 30% of potential revenue to no-shows and disorganized queues. Customers wasted billions of hours waiting annually. The entire system was broken.",
              "He recruited Maria, a former Google engineer, and together they spent six months talking to over 300 barbers and 1,000 customers across 8 cities. What they learned shaped every decision we've made since. BOOKBER isn't just a booking app — it's a complete platform for the future of barbershop culture.",
              "Today, BOOKBER is backed by top investors and has 50,000+ customers on our waitlist alongside 2,000+ barber shops eager to partner. We're launching across 15 cities in 2025 — and this is just the beginning.",
            ].map((para, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <p>{para}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What we stand for"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${value.color}15`, border: `1px solid ${value.color}25` }}
                  >
                    <value.icon size={20} style={{ color: value.color }} />
                  </div>
                  <h3 className="font-semibold text-[#111111] mb-2">{value.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Team"
            title="Built by people who"
            titleHighlight="care deeply"
            description="Our team brings together experience from Google, Uber, Stripe, Airbnb, and McKinsey — all united by the belief that great products change lives."
            dark
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100}>
                <div className="glass-card-dark rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-4"
                    style={{
                      background: `hsl(${i * 60}, 70%, 45%)`,
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-white mb-0.5">{member.name}</h3>
                  <p className="text-[#E53935] text-xs font-medium mb-3">{member.role}</p>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Join the team CTA */}
          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <p className="text-[#6B7280] mb-4">Want to build the future of barbershop culture with us?</p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#C62828] transition-all duration-200 text-sm"
              >
                View Open Positions
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Investors / Press */}
      <section className="py-16 bg-[#F8F9FA] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#9CA3AF] text-sm mb-8 uppercase tracking-widest font-medium">
            Backed by world-class investors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Sequoia", "a16z", "YCombinator", "Founders Fund", "Andreessen"].map((investor) => (
              <span key={investor} className="text-[#9CA3AF] font-semibold text-lg tracking-tight">
                {investor}
              </span>
            ))}
          </div>
          <p className="text-[#9CA3AF] text-xs mt-6">* For illustration purposes</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#111111] tracking-tight mb-4">
            Want to learn more about BOOKBER?
          </h2>
          <p className="text-[#6B7280] mb-8">
            Whether you&apos;re a barber, investor, journalist, or potential partner — we&apos;d love to
            hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#111111] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#222222] transition-all text-sm">
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <Link href="#waitlist" className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#111111] font-semibold px-6 py-3 rounded-xl hover:border-[#111111] transition-all text-sm">
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
