// ChannelSessions.js - PADDING KAM
"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Organic Se...", value: 4800, color: "#2d6374" },
  { name: "Direct", value: 3200, color: "#6b95a3" },
  { name: "Social", value: 1800, color: "#67cae0" },
  { name: "Referral", value: 1200, color: "#c9dfe8" },
  { name: "Paid Search", value: 600, color: "#118dff" },
];

export default function ChannelSessions() {
  return (
    <div className="bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] h-full flex flex-col">
      <h3 className="text-sm font-semibold text-[#1e293b] mb-2 text-center flex-shrink-0">
        Channel Sessions
      </h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={90} tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="value" radius={[0, 0, 0, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}