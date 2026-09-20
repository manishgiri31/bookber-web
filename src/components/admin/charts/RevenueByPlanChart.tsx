interface PlanRevenue {
  plan: string;
  mrr: number;
}

// Stubbed for Phase 1: single-plan pricing has no "by plan" breakdown left
// to chart, and there's no real revenue yet. Rewritten once finance.ts is.
export default function RevenueByPlanChart({ data }: { data: PlanRevenue[] }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-[#111111] mb-4">Revenue</h3>
      <div className="h-[260px] flex items-center justify-center text-sm text-[#9CA3AF]">
        {data.length === 0 ? "No revenue yet." : `${data.length} plan(s)`}
      </div>
    </div>
  );
}
