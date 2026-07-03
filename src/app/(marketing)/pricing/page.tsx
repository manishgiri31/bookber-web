import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { PRICING_PLANS, FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — Simple, Transparent Plans for Every Barber",
  description:
    "BOOKBER offers a free Starter plan, Professional at $29/month, and custom Enterprise plans. No contracts, no hidden fees. Start free today.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = FAQS.filter(f => f.category === "Pricing");

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#15803D] text-xs font-semibold mb-8 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Free plan available — no credit card needed
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1
              className="font-black tracking-tight text-[#111111] text-balance mb-6 mx-auto max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: "1.05", letterSpacing: "-0.03em" }}
            >
              Simple pricing.
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #E53935 0%, #FF6F00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                No surprises.
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Start free and scale as you grow. No contracts. Cancel anytime. Every plan includes
              access to the core BOOKBER platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 100}>
                <div
                  className={cn(
                    "rounded-2xl p-6 flex flex-col h-full relative",
                    plan.highlighted
                      ? "bg-white border-2 border-[#E53935] shadow-[0_0_50px_rgba(229,57,53,0.15)]"
                      : "bg-white border border-[#E5E7EB] shadow-card"
                  )}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E53935] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Zap size={10} />
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className={cn("font-black text-xl tracking-tight mb-1", plan.highlighted ? "text-[#111111]" : "text-[#111111]")}>
                      {plan.name}
                    </h2>
                    <p className={cn("text-sm", plan.highlighted ? "text-[#6B7280]" : "text-[#6B7280]")}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    {typeof plan.price === "number" ? (
                      <div className="flex items-end gap-1">
                        <span className={cn("font-black text-5xl tracking-tight", plan.highlighted ? "text-[#111111]" : "text-[#111111]")}>
                          ${plan.price}
                        </span>
                        {plan.period && (
                          <span className={cn("text-sm mb-2", plan.highlighted ? "text-[#6B7280]" : "text-[#9CA3AF]")}>
                            /{plan.period}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className={cn("font-black text-4xl tracking-tight", plan.highlighted ? "text-[#111111]" : "text-[#111111]")}>
                        {plan.price}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                            plan.highlighted ? "bg-[#E53935]/20" : "bg-[#DCFCE7]"
                          )}
                        >
                          <Check size={10} className={plan.highlighted ? "text-[#E53935]" : "text-[#16A34A]"} />
                        </div>
                        <span className={cn("text-sm", plan.highlighted ? "text-[#374151]" : "text-[#374151]")}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.id === "enterprise" ? "/contact" : "/#waitlist"}
                    className={cn(
                      "block text-center font-semibold py-3 rounded-xl transition-all text-sm",
                      plan.highlighted
                        ? "bg-[#E53935] text-white hover:bg-[#C62828] shadow-[0_0_20px_rgba(229,57,53,0.3)]"
                        : "bg-[#F1F3F5] text-[#111111] border border-[#E5E7EB] hover:bg-[#E5E7EB]"
                    )}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Compare Plans"
            title="What's included"
            className="mb-12"
          />
          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="text-left p-4 font-semibold text-[#111111]">Feature</th>
                  {PRICING_PLANS.map((plan) => (
                    <th
                      key={plan.id}
                      className={cn(
                        "p-4 font-semibold text-center",
                        plan.highlighted ? "bg-[#FFF5F5] text-[#E53935]" : "text-[#111111]"
                      )}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bookings per month", "50", "Unlimited", "Unlimited"],
                  ["Queue management", "Basic", "Advanced", "Advanced"],
                  ["BOOKBER listing", "✓", "✓ Priority", "✓ Featured"],
                  ["Analytics", "—", "✓", "✓ Advanced"],
                  ["Custom branding", "—", "✓", "✓"],
                  ["Payment processing", "—", "✓", "✓"],
                  ["SMS notifications", "—", "✓", "✓"],
                  ["API access", "—", "—", "✓"],
                  ["Multi-location", "—", "—", "✓"],
                  ["Dedicated support", "Email", "Priority", "Dedicated CSM"],
                ].map(([feature, ...values], ri) => (
                  <tr
                    key={feature}
                    className={cn("border-b border-[#F3F4F6]", ri % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]")}
                  >
                    <td className="p-4 text-[#374151] font-medium">{feature}</td>
                    {values.map((val, vi) => (
                      <td
                        key={vi}
                        className={cn(
                          "p-4 text-center",
                          val === "—" ? "text-[#D1D5DB]" : "text-[#111111]",
                          PRICING_PLANS[vi].highlighted ? "bg-[#FFF5F5]/50" : ""
                        )}
                      >
                        {val === "✓" ? (
                          <span className="text-[#22C55E] font-bold">{val}</span>
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Pricing questions"
            titleHighlight="answered"
            className="mb-12"
          />
          <div className="space-y-4">
            {[...pricingFaqs, ...[
              { question: "Can I change plans later?", answer: "Yes, you can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately and are prorated." },
              { question: "Is there a setup fee?", answer: "No. BOOKBER has zero setup fees, zero hidden charges, and no long-term contracts. What you see is what you pay." },
              { question: "What payment methods do you accept?", answer: "We accept all major credit and debit cards, as well as ACH bank transfers for annual plans." },
            ]].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                  <h3 className="font-semibold text-[#111111] mb-2 text-sm">{faq.question}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-[#111111] tracking-tight mb-4">
              Start free today.
            </h2>
            <p className="text-[#6B7280] mb-8">No risk. No credit card. Just a better way to run your barber shop.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#C62828] transition-all text-sm shadow-[0_0_30px_rgba(229,57,53,0.3)]">
                Get Started Free <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#111111] font-semibold px-8 py-4 rounded-xl hover:border-[#111111] transition-all text-sm">
                Talk to Sales
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
