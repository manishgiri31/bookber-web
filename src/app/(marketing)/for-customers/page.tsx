import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Star, Bell, CreditCard, Smartphone } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { HOW_IT_WORKS_CUSTOMER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Customers — Book Your Barber in Seconds",
  description:
    "Find top-rated barbers near you, book appointments instantly, track your queue live, and never wait again. BOOKBER is the smartest way to get a haircut.",
  alternates: { canonical: "/for-customers" },
};

const benefits = [
  { icon: Clock, title: "Save Hours Every Month", desc: "No more sitting in a shop for 90 minutes. Book your slot, arrive on time, get your cut.", color: "#3B82F6" },
  { icon: MapPin, title: "Discover Great Barbers", desc: "Find the best-rated barbers near you with real photos of their work and genuine reviews.", color: "#10B981" },
  { icon: Star, title: "Verified Reviews", desc: "Every review on BOOKBER is from a real customer who completed a real booking. No fakes.", color: "#F59E0B" },
  { icon: Bell, title: "Smart Notifications", desc: "Get alerts when your slot is approaching. We time it so you arrive perfectly on time.", color: "#8B5CF6" },
  { icon: CreditCard, title: "Pay Securely", desc: "Card, Apple Pay, Google Pay — pay however you like. Tip your barber in-app too.", color: "#22C55E" },
  { icon: Smartphone, title: "All in Your Pocket", desc: "Your entire barber relationship — history, favorites, preferences — lives in one app.", color: "#E53935" },
];

export default function ForCustomersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-[#F8F9FA] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFF6FF] border border-[#BFDBFE] rounded-full text-[#1D4ED8] text-xs font-semibold mb-8 uppercase tracking-wide">
                  For Customers
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h1
                  className="font-black tracking-tight text-[#111111] text-balance mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.05", letterSpacing: "-0.03em" }}
                >
                  Your barber,
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(135deg, #E53935 0%, #FF6F00 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    on your schedule.
                  </span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                  Find top-rated barbers near you, book an appointment in seconds, track your position in the
                  queue live, and arrive at exactly the right moment. No waiting. No guessing.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#C62828] transition-all text-sm">
                    Join Waitlist <ArrowRight size={16} />
                  </Link>
                  <Link href="/features" className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#111111] font-semibold px-6 py-3 rounded-xl hover:border-[#111111] transition-all text-sm">
                    See All Features
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Phone mockup area */}
            <AnimatedSection direction="right">
              <div className="relative flex justify-center">
                <div className="w-64 bg-[#111111] rounded-[2.5rem] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
                  <div className="bg-[#1A1A1A] rounded-[2rem] overflow-hidden h-[500px] p-4">
                    {/* Mock app UI */}
                    <div className="h-6 flex items-center justify-between mb-4">
                      <span className="text-white text-xs font-semibold">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/40 rounded-sm" />
                        <div className="w-2 h-2 bg-white/40 rounded-full" />
                      </div>
                    </div>
                    <div className="text-white font-bold text-sm mb-1">Good morning, Alex 👋</div>
                    <div className="text-[#6B7280] text-xs mb-4">What are we doing today?</div>

                    {/* Search bar */}
                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border border-[#4B5563]" />
                      <span className="text-[#4B5563] text-xs">Find a barber near you...</span>
                    </div>

                    {/* Nearby cards */}
                    {[
                      { name: "Mike's Cuts", rating: "4.9", wait: "10 min", color: "#E53935" },
                      { name: "Elite Barbers", rating: "4.8", wait: "25 min", color: "#3B82F6" },
                      { name: "The Fade Room", rating: "4.7", wait: "5 min", color: "#10B981" },
                    ].map((shop) => (
                      <div key={shop.name} className="bg-white/5 border border-white/5 rounded-xl p-3 mb-2 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ backgroundColor: shop.color + "30" }}>
                          <div className="w-full h-full rounded-lg flex items-center justify-center text-xs font-bold" style={{ color: shop.color }}>
                            {shop.name.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-xs font-semibold truncate">{shop.name}</div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[#F59E0B] text-[10px]">★ {shop.rating}</span>
                            <span className="text-[#22C55E] text-[10px]">~{shop.wait}</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-[#E53935] font-medium">Book</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating notification */}
                <div className="absolute -right-4 top-20 bg-white rounded-xl shadow-xl p-3 w-44 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                      <span className="text-[10px]">✓</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#111111]">Booked!</span>
                  </div>
                  <p className="text-[9px] text-[#6B7280]">Mike&apos;s Cuts · Today 2:30 PM</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Customer Benefits"
            title="Everything that makes"
            titleHighlight="your life easier"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] hover:shadow-md transition-all duration-300 h-full">
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

      {/* How it works for customers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="From zero to fresh cut"
            titleHighlight="in 5 steps"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOW_IT_WORKS_CUSTOMER.map((step, i) => (
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

      {/* CTA */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-[#111111] tracking-tight mb-4">
              Join 50,000+ customers waiting for BOOKBER
            </h2>
            <p className="text-[#6B7280] mb-8">Be first in line when we launch in your city.</p>
            <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#C62828] transition-all text-sm shadow-[0_0_30px_rgba(229,57,53,0.2)]">
              Join the Waitlist
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
