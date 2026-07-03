import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {badge && (
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#FFEBEE] text-[#C62828] border border-[#FFCDD2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-pulse" />
            {badge}
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection delay={100}>
        <h2
          className={cn(
            "font-black tracking-tight text-balance text-[#111111]",
            "text-3xl sm:text-4xl lg:text-5xl"
          )}
        >
          {title}{" "}
          {titleHighlight && (
            <span className="gradient-text-red">{titleHighlight}</span>
          )}
        </h2>
      </AnimatedSection>

      {description && (
        <AnimatedSection delay={200}>
          <p
            className={cn(
              "text-base sm:text-lg leading-relaxed max-w-2xl text-[#6B7280]",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
