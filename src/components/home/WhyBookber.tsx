import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    problem: "30–90 min wait times",
    solution: "Real-time queue tracking & smart ETAs",
  },
  {
    problem: "Phone calls to book",
    solution: "Instant booking in seconds",
  },
  {
    problem: "Cash-only payments",
    solution: "Digital payments & tipping",
  },
  {
    problem: "Manual paper queue",
    solution: "Smart automated queue management",
  },
  {
    problem: "No ETA or updates",
    solution: "Live push notifications & smart alerts",
  },
  {
    problem: "No reviews or ratings",
    solution: "Verified reviews & star ratings",
  },
  {
    problem: "Hard to discover shops",
    solution: "Nearby barber discovery with map view",
  },
  {
    problem: "No business analytics",
    solution: "Full shop dashboard & revenue insights",
  },
];

export default function WhyBookber() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA]" aria-labelledby="why-bookber-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The BOOKBER Difference"
          title="Why customers and barbers"
          titleHighlight="choose BOOKBER"
          description="Traditional barber booking is broken. We're fixing every part of it."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Traditional column */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden">
              <div className="bg-[#F1F3F5] px-6 py-4 border-b border-[#E5E7EB]">
                <h3 className="font-semibold text-[#374151] text-sm">
                  Traditional Barber Shop
                </h3>
                <p className="text-[#9CA3AF] text-xs mt-0.5">The old way</p>
              </div>
              <div className="bg-white divide-y divide-[#F3F4F6]">
                {comparisons.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-6 py-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                      <X size={11} className="text-red-400" />
                    </div>
                    <span className="text-[#6B7280] text-sm">{item.problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* BOOKBER column */}
          <AnimatedSection direction="right">
            <div className="rounded-2xl border border-[#E53935]/20 overflow-hidden shadow-[0_0_30px_rgba(229,57,53,0.08)]">
              <div
                className="px-6 py-4 border-b border-[#E53935]/20"
                style={{
                  background: "linear-gradient(135deg, #E53935 0%, #C62828 100%)",
                }}
              >
                <h3 className="font-semibold text-white text-sm">
                  BOOKBER Platform
                </h3>
                <p className="text-red-200 text-xs mt-0.5">The better way</p>
              </div>
              <div className="bg-white divide-y divide-[#F3F4F6]">
                {comparisons.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-6 py-3.5 group hover:bg-[#FFF5F5] transition-colors duration-150"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-[#16A34A]" />
                    </div>
                    <span className="text-[#111111] text-sm font-medium">{item.solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
