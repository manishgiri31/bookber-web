"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { HOW_IT_WORKS_CUSTOMER, HOW_IT_WORKS_BARBER } from "@/lib/constants";
import { Users, Scissors, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"customer" | "barber">("customer");

  const steps = activeTab === "customer" ? HOW_IT_WORKS_CUSTOMER : HOW_IT_WORKS_BARBER;

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-[#FAFAFA] overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="Simple for everyone."
          titleHighlight="Powerful for all."
          description="Whether you're booking a cut or running a shop, BOOKBER makes everything effortless."
          className="mb-12"
        />

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white border border-[#E5E7EB] rounded-xl gap-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <button
              onClick={() => setActiveTab("customer")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                activeTab === "customer"
                  ? "bg-[#E53935] text-white shadow-[0_4px_14px_rgba(229,57,53,0.25)]"
                  : "text-[#6B7280] hover:text-[#111111]"
              )}
            >
              <Users size={15} />
              For Customers
            </button>
            <button
              onClick={() => setActiveTab("barber")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                activeTab === "barber"
                  ? "bg-[#E53935] text-white shadow-[0_4px_14px_rgba(229,57,53,0.25)]"
                  : "text-[#6B7280] hover:text-[#111111]"
              )}
            >
              <Scissors size={15} />
              For Barbers
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <AnimatedSection key={`${activeTab}-${step.step}`} delay={i * 100}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-center mb-4 group-hover:bg-[#FFF5F5] group-hover:border-[#E53935]/30 transition-all duration-300">
                    <span className="text-2xl font-black text-[#E53935]">{step.step}</span>
                  </div>

                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 -right-2 hidden lg:block text-[#D1D5DB]">
                      <ArrowRight size={14} />
                    </div>
                  )}

                  <h3 className="font-semibold text-[#111111] text-sm mb-2">{step.title}</h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
