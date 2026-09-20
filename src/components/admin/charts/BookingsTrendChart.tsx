interface TrendPoint {
  date: string;
  bookings: number;
  walkIns: number;
}

// Stubbed for Phase 1: no real shops onboarded yet, so there's no queue
// throughput to chart. Rewritten once overview.ts reads real data.
export default function BookingsTrendChart({ data }: { data: TrendPoint[] }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-[#111111] mb-4">Queue activity</h3>
      <div className="h-[260px] flex items-center justify-center text-sm text-[#9CA3AF]">
        {data.length === 0 ? "No activity yet." : `${data.length} day(s) of data`}
      </div>
    </div>
  );
}
