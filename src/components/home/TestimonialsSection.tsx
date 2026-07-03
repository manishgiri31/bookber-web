import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Early Users"
          title="People are already"
          titleHighlight="talking about us"
          description="Hear from barbers and customers who've experienced BOOKBER in our private beta."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimatedSection key={testimonial.id} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col gap-4 border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
                <Quote size={20} className="text-[#E53935]/50" />

                <p className="text-[#374151] text-sm leading-relaxed flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div>
                  {testimonial.rating && (
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{
                        background: `hsl(${i * 60}, 70%, 45%)`,
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[#111111] font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-[#9CA3AF] text-xs">{testimonial.role}</p>
                      {testimonial.company && (
                        <p className="text-[#9CA3AF] text-xs">{testimonial.company}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
