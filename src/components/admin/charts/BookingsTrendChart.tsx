"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface TrendPoint {
  date: string;
  bookings: number;
  walkIns: number;
}

export default function BookingsTrendChart({ data }: { data: TrendPoint[] }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-[#111111] mb-4">Bookings vs. Walk-ins (30 days)</h3>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="bookingsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a78d6" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#2a78d6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="walkInsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1baf7a" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#1baf7a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
          <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={{ stroke: "#E5E7EB" }} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} width={32} />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB", fontSize: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            labelStyle={{ color: "#111111", fontWeight: 600 }}
          />
          <Legend wrapperStyle={{ fontSize: 12, color: "#6B7280" }} iconType="circle" iconSize={8} />
          <Area type="monotone" dataKey="bookings" name="Bookings" stroke="#2a78d6" strokeWidth={2} fill="url(#bookingsFill)" />
          <Area type="monotone" dataKey="walkIns" name="Walk-ins" stroke="#1baf7a" strokeWidth={2} fill="url(#walkInsFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
