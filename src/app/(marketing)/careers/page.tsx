import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Globe } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CAREER_POSITIONS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers — Join the BOOKBER Team",
  description:
    "Help us build the future of barber booking. We're hiring frontend, backend, mobile, design, marketing, and sales talent. Remote-friendly team.",
  alternates: { canonical: "/careers" },
};

const perks = [
  { emoji: "🌍", title: "Remote First", desc: "Work from anywhere. Our team spans multiple time zones." },
  { emoji: "💰", title: "Competitive Pay", desc: "Top-of-market salaries plus meaningful equity." },
  { emoji: "🏥", title: "Full Benefits", desc: "Medical, dental, vision for you and your family." },
  { emoji: "📚", title: "Learning Budget", desc: "$2,000/year for books, courses, and conferences." },
  { emoji: "🏖️", title: "Unlimited PTO", desc: "We trust you. Take the time you need." },
  { emoji: "💻", title: "Tech Setup", desc: "MacBook Pro, monitors, and any tools you need." },
];

const deptColors: Record<string, string> = {
  Engineering: "#3B82F6",
  Mobile: "#8B5CF6",
  Design: "#F59E0B",
  Marketing: "#22C55E",
  Sales: "#E53935",
};

export default function CareersPage() {
  const departments = [...new Set(CAREER_POSITIONS.map(p => p.department))];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#E53935]/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              {CAREER_POSITIONS.length} Open Positions
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1
              className="font-black tracking-tight text-white text-balance mb-6 max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: "1.05", letterSpacing: "-0.03em" }}
            >
              Help us build
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #E53935 0%, #FF6F00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                something iconic.
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-[#9CA3AF] text-lg max-w-xl leading-relaxed mb-8">
              We&apos;re a small team with massive ambitions. Every person here has real ownership
              over the product and culture. If you want your work to matter, this is where you belong.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-wrap items-center gap-6 text-[#6B7280] text-sm">
              <div className="flex items-center gap-2"><Globe size={14} /> Remote-friendly</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> HQ in San Francisco</div>
              <div className="flex items-center gap-2"><Clock size={14} /> Competitive comp & equity</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why BOOKBER"
            title="Build something real."
            titleHighlight="Be rewarded for it."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <AnimatedSection key={perk.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] h-full">
                  <div className="text-3xl mb-4">{perk.emoji}</div>
                  <h3 className="font-semibold text-[#111111] mb-2">{perk.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Open Roles"
            title="Find your place"
            titleHighlight="at BOOKBER"
            description="We hire for talent and attitude. Experience matters, but curiosity and ownership matter more."
            className="mb-16"
          />

          {departments.map((dept) => {
            const positions = CAREER_POSITIONS.filter(p => p.department === dept);
            const color = deptColors[dept] ?? "#6B7280";
            return (
              <div key={dept} className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <h2 className="font-semibold text-[#374151] text-sm uppercase tracking-widest">{dept}</h2>
                </div>
                <div className="space-y-3">
                  {positions.map((position, i) => (
                    <AnimatedSection key={position.id} delay={i * 60}>
                      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="font-semibold text-[#111111] group-hover:text-[#E53935] transition-colors">
                                {position.title}
                              </h3>
                              <span
                                className="text-xs px-2 py-0.5 rounded-full font-medium"
                                style={{ backgroundColor: `${color}15`, color }}
                              >
                                {position.type}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-3 mb-3 text-xs text-[#9CA3AF]">
                              <span className="flex items-center gap-1"><MapPin size={12} />{position.location}</span>
                              <span className="flex items-center gap-1"><Clock size={12} />{position.type}</span>
                            </div>
                            <p className="text-[#6B7280] text-sm mb-3">{position.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {position.requirements.map(req => (
                                <span key={req} className="text-xs bg-[#F3F4F6] text-[#374151] px-2.5 py-1 rounded-lg">
                                  {req}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Link
                            href={`/contact?subject=Application for ${encodeURIComponent(position.title)}`}
                            className={cn(
                              "flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
                              "bg-[#111111] text-white hover:bg-[#E53935]"
                            )}
                          >
                            Apply <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* No role? */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-black text-white mb-4">Don&apos;t see your role?</h2>
            <p className="text-[#9CA3AF] mb-8 text-sm">
              We&apos;re always interested in exceptional people. Send us a note and tell us why you&apos;d be
              a great addition to the BOOKBER team.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=General Application`}
              className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#C62828] transition-all text-sm"
            >
              Send Us Your Story
              <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
