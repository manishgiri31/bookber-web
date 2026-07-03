import { cn } from "@/lib/utils";

type BadgeTone = "good" | "warning" | "critical" | "neutral" | "info";

const TONE_CLASSES: Record<BadgeTone, string> = {
  good: "bg-[#DCFCE7] text-[#16A34A]",
  warning: "bg-[#FEF3C7] text-[#B45309]",
  critical: "bg-[#FEE2E2] text-[#DC2626]",
  neutral: "bg-[#F1F3F5] text-[#6B7280]",
  info: "bg-[#DBEAFE] text-[#1D4ED8]",
};

export default function Badge({ tone, children }: { tone: BadgeTone; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold", TONE_CLASSES[tone])}>
      {children}
    </span>
  );
}

export function toneForStatus(status: string): BadgeTone {
  const s = status.toUpperCase();
  if (["VERIFIED", "ACTIVE", "PAID", "RESOLVED", "CLOSED", "GOOD"].includes(s)) return "good";
  if (["PENDING", "DUE", "OPEN"].includes(s)) return "warning";
  if (["REJECTED", "FAILED", "CANCELED", "URGENT", "CRITICAL"].includes(s)) return "critical";
  if (["PAST_DUE", "HIGH"].includes(s)) return "info";
  return "neutral";
}
