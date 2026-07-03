import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Calendar, DollarSign, Users, Star, Zap } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { HOW_IT_WORKS_BARBER, PRICING_PLANS } from "@/lib/constants";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "For Barbers — Grow Your Business with BOOKBER",
  description:
    "BOOKBER gives barber shop owners and independent barbers the tools to accept bookings, manage queues, reduce no-shows, and grow revenue. Partner with us.",
  alternates: { canonical: "/for-barbers" },
};

const benefits = [
  { icon: DollarSign, title: "Increase Revenue 30%+", desc: "Shops using BOOKBER report 30–40% revenue increases from reduced no-shows and optimized scheduling.", color: "#22C55E" },
  { icon: Calendar, title: "Zero No-Shows", desc: "Automated reminders and deposit requirements cut no-shows to near zero.", color: "#3B82F6" },
  { icon: BarChart3, title: "Powerful Analytics", desc: "Know your busiest hours, most popular services, and most loyal clients with real-time dashboards.", color: "#8B5CF6" },
  { icon: Users, title: "Grow Your Clientele", desc: "Get discovered by new customers through our directory and search features.", color: "#F59E0B" },
  { icon: Star, title: "Build Your Reputation", desc: "Collect verified reviews and showcase your best work to attract premium clients.", color: "#E53935" },
  { icon: Zap, title: "Setup in Minutes", desc: "Create your shop profile, set your hours, and start accepting bookings in under 10 minutes.", color: "#06B6D4" },
];

const starterFeatures = ["50 bookings/month", "Basic queue management", "BOOKBER listing", "Mobile dashboard", "Customer notifications"];

export default function ForBarbersPage() {
  const proFeatures = PRICING_PLANS.find(p => p.id === "professional")?.features ?? [];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E53935]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E53935]/20 border border-[#E53935]/30 rounded-full text-[#E53935] text-xs font-semibold mb-8 uppercase tracking-wide">
                  ✂️ For Barbers & Shop Owners
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h1
                  className="font-black tracking-tight text-[#111111] text-balance mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.05", letterSpacing: "-0.03em" }}
                >
                  Your shop,
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(135deg, #E53935 0%, #FF6F00 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    running smarter.
                  </span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                  Stop managing bookings on a notepad. Stop chasing clients who don&apos;t show up. Stop
                  guessing your busiest hours. BOOKBER gives you the tools to run a modern, profitable
                  barber shop — starting free.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#C62828] transition-all text-sm shadow-[0_0_25px_rgba(229,57,53,0.3)]">
                    Become a Partner <ArrowRight size={16} />
                  </Link>
                  <Link href="/pricing" className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#111111] font-semibold px-6 py-3 rounded-xl hover:border-[#111111] transition-all text-sm">
                    View Pricing
                  </Link>
                </div>
                <p className="mt-4 text-[#6B7280] text-xs">Free plan available. No credit card required.</p>
              </AnimatedSection>
            </div>

            {/* Dashboard mockup */}
            <AnimatedSection direction="right">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-[#111111] font-semibold text-sm">Shop Dashboard</h3>
                    <p className="text-[#9CA3AF] text-xs">Mike&apos;s Barber Shop</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#16A34A] text-xs">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Today's Bookings", value: "24", color: "#E53935" },
                    { label: "Queue Position", value: "#6", color: "#3B82F6" },
                    { label: "Revenue", value: "$847", color: "#22C55E" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#F8F9FA] rounded-xl p-3 text-center">
                      <div className="font-black text-lg" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-[#9CA3AF] text-[10px] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Queue list */}
                <div className="space-y-2">
                  <p className="text-[#9CA3AF] text-[10px] uppercase tracking-wide font-medium mb-2">Current Queue</p>
                  {[
                    { name: "Marcus W.", service: "Fade + Beard", wait: "Now", status: "active" },
                    { name: "Jordan K.", service: "Haircut", wait: "~10 min", status: "waiting" },
                    { name: "Devon C.", service: "Fade", wait: "~22 min", status: "waiting" },
                  ].map((client) => (
                    <div key={client.name} className="flex items-center gap-3 bg-[#F8F9FA] rounded-lg px-3 py-2">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${client.status === "active" ? "bg-[#22C55E]" : "bg-[#9CA3AF]"}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[#111111] text-xs font-medium">{client.name}</div>
                        <div className="text-[#9CA3AF] text-[10px]">{client.service}</div>
                      </div>
                      <div className={`text-[10px] font-semibold ${client.status === "active" ? "text-[#16A34A]" : "text-[#9CA3AF]"}`}>
                        {client.wait}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Barber Benefits"
            title="Tools that actually"
            titleHighlight="grow your income"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:shadow-md transition-all duration-300 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${b.color}15`, border: `1px solid ${b.color}25` }}
                  >
                    <b.icon size={20} style={{ color: b.color }} />
                  </div>
                  <h3 className="font-semibold text-[#111111] mb-2">{b.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Getting Started"
            title="Up and running"
            titleHighlight="in 10 minutes"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOW_IT_WORKS_BARBER.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E53935]/10 group-hover:border-[#E53935]/30 transition-all duration-300">
                    <span className="text-2xl font-black text-[#E53935]">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-[#111111] text-sm mb-2">{step.title}</h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Simple Pricing"
            title="Start free."
            titleHighlight="Scale when you're ready."
            description="No contracts. Cancel anytime. Start for free and upgrade when your business grows."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatedSection direction="left">
              <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-[#F8F9FA]">
                <h3 className="font-black text-2xl text-[#111111] mb-1">Free</h3>
                <p className="text-[#6B7280] text-sm mb-6">Perfect for getting started</p>
                <ul className="space-y-2 mb-8">
                  {starterFeatures.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#374151]">
                      <Check size={14} className="text-[#22C55E] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/#waitlist" className="block text-center bg-[#111111] text-white font-semibold py-3 rounded-xl hover:bg-[#222222] transition-all text-sm">
                  Get Started Free
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="p-6 rounded-2xl border-2 border-[#E53935] bg-white relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E53935] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <h3 className="font-black text-2xl text-[#111111] mb-1">$29<span className="text-sm font-normal text-[#6B7280]">/mo</span></h3>
                <p className="text-[#6B7280] text-sm mb-6">For growing shops</p>
                <ul className="space-y-2 mb-8">
                  {proFeatures.slice(0, 5).map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#374151]">
                      <Check size={14} className="text-[#E53935] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="block text-center bg-[#E53935] text-white font-semibold py-3 rounded-xl hover:bg-[#C62828] transition-all text-sm">
                  Start Free Trial
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="text-center mt-6">
            <Link href="/pricing" className="text-[#E53935] text-sm font-medium hover:underline">
              View all plans including Enterprise →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-[#111111] tracking-tight mb-4">
              Ready to transform your shop?
            </h2>
            <p className="text-[#6B7280] mb-8">Join 2,000+ barbers already on the BOOKBER partner waitlist.</p>
            <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#C62828] transition-all text-sm shadow-[0_0_30px_rgba(229,57,53,0.3)]">
              Become a Barber Partner
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
