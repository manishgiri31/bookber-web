"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface PlanRevenue {
  plan: string;
  mrr: number;
}

const COLORS = ["#2a78d6", "#1baf7a", "#4a3aa7"];

export default function RevenueByPlanChart({ data }: { data: PlanRevenue[] }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-[#111111] mb-4">MRR by Plan</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
          <XAxis dataKey="plan" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={{ stroke: "#E5E7EB" }} tickLine={false} />
          <YAxis
            tick={{ fontSize: 11, fill: "#9CA3AF" }}
            axisLine={false}
            tickLine={false}
            width={48}
            tickFormatter={(v) => `$${(v / 100).toLocaleString()}`}
          />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB", fontSize: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            labelStyle={{ color: "#111111", fontWeight: 600 }}
            formatter={(value) => [`$${(Number(value) / 100).toLocaleString()}`, "MRR"]}
          />
          <Bar dataKey="mrr" radius={[6, 6, 0, 0]} maxBarSize={56}>
            {data.map((entry, i) => (
              <Cell key={entry.plan} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
