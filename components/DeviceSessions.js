"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Desktop", value: 5200, color: "#2d6374" },
  { name: "Mobile", value: 1800, color: "#7db3c7" },
  { name: "Tablet", value: 400, color: "#e8eef1" },
];

export default function DeviceSessions() {
  return (
    <div className="bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <h3 className="text-base font-semibold text-[#1e293b] mb-6 text-center">
        Device Sessions
      </h3>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart layout="vertical" data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" width={70} tick={{ fill: "#475569", fontSize: 13 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}