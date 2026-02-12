"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Organic Se...", value: 4800, color: "#2d6374" },
  { name: "Direct", value: 3200, color: "#6b95a3" },
  { name: "Social", value: 1800, color: "#9fc5d3" },
  { name: "Referral", value: 1200, color: "#c9dfe8" },
  { name: "Paid Search", value: 600, color: "#3b9fd9" },
];

export default function ChannelSessions() {
  return (
    <div className="bg-white  p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <h3 className="text-base font-semibold text-[#1e293b] mb-6 text-center">
        Channel Sessions
      </h3>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart layout="vertical" data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" width={90} tick={{ fill: "#475569", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}