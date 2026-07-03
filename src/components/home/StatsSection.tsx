import AnimatedSection from "@/components/shared/AnimatedSection";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="font-black text-4xl md:text-5xl tracking-tight mb-1 text-[#111111]">
                  {stat.value}
                </div>
                <div className="text-[#111111] font-semibold text-sm mb-0.5">{stat.label}</div>
                {stat.description && (
                  <div className="text-[#9CA3AF] text-xs">{stat.description}</div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
