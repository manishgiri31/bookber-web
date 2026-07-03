import SectionHeader from "@/components/shared/SectionHeader";
import FeatureIcon from "@/components/shared/FeatureIcon";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { FEATURES } from "@/lib/constants";

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA]" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Platform Features"
          title="Everything you need,"
          titleHighlight="nothing you don't"
          description="BOOKBER packs powerful features into an interface so clean, you'll forget all the complexity underneath."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => (
            <AnimatedSection key={feature.id} delay={i * 50}>
              <div className="bg-white rounded-2xl p-5 border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group h-full">
                <FeatureIcon name={feature.icon} color={feature.color} size="md" className="mb-4" />
                <h3 className="font-semibold text-[#111111] text-sm mb-1.5 group-hover:text-[#E53935] transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
