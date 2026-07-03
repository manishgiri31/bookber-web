"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = ["All", "General", "Pricing", "Features", "Bookings", "Payments", "Barbers"];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#9CA3AF] text-xs font-medium mb-8">
              FAQ
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
              Questions? We have answers.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
              Everything you need to know about BOOKBER. Can&apos;t find what you&apos;re looking for?
              <a href="/contact" className="text-[#E53935] hover:underline ml-1">Contact us.</a>
            </p>
          </AnimatedSection>
          {/* Search */}
          <AnimatedSection delay={300}>
            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
              <input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 text-white placeholder-[#6B7280] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-[#E53935] text-white"
                    : "bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#E53935] hover:text-[#E53935]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-[#9CA3AF]">
              No questions match your search.
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 40}>
                  <div className={cn("bg-white rounded-2xl border overflow-hidden transition-all duration-200", openIndex === i ? "border-[#E53935]/30 shadow-[0_4px_20px_rgba(229,57,53,0.08)]" : "border-[#E5E7EB]")}>
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                      aria-expanded={openIndex === i}
                    >
                      <span className="font-semibold text-[#111111] text-sm">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={cn("text-[#6B7280] flex-shrink-0 transition-transform duration-200", openIndex === i && "rotate-180 text-[#E53935]")}
                      />
                    </button>
                    {openIndex === i && (
                      <div className="px-5 pb-5 text-[#6B7280] text-sm leading-relaxed border-t border-[#F3F4F6] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Still need help */}
          <AnimatedSection delay={300}>
            <div className="mt-16 text-center bg-[#111111] rounded-2xl p-8">
              <h2 className="text-white font-black text-xl mb-3">Still have questions?</h2>
              <p className="text-[#9CA3AF] text-sm mb-6">
                Our team is here to help. Reach out and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#C62828] transition-all text-sm"
              >
                Contact Support
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
