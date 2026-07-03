import { type LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  delta?: { value: string; direction: "up" | "down"; positive?: boolean };
  accent?: string;
}

export default function StatCard({ label, value, icon: Icon, delta, accent = "#E53935" }: StatCardProps) {
  const deltaPositive = delta ? (delta.positive ?? delta.direction === "up") : false;

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}15` }}>
          <Icon size={17} style={{ color: accent }} />
        </div>
        {delta && (
          <div
            className={cn(
              "flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-full",
              deltaPositive ? "text-[#16A34A] bg-[#DCFCE7]" : "text-[#DC2626] bg-[#FEE2E2]"
            )}
          >
            {delta.direction === "up" ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
            {delta.value}
          </div>
        )}
      </div>
      <div className="text-2xl font-black tracking-tight text-[#111111]">{value}</div>
      <div className="text-xs text-[#9CA3AF] mt-1">{label}</div>
    </div>
  );
}
