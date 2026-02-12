// DeviceSessions.js 
"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Desktop", value: 4800, color: "#3c7486" },
  { name: "Mobile", value: 2400, color: "#6b95a3" },
  { name: "Tablet", value: 800, color: "#e8ecf0" },
];

export default function DeviceSessions() {
  return (
    <div className="bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] h-full flex flex-col">
      <h3 className="text-sm font-semibold text-[#1e293b] mb-2 text-center flex-shrink-0">
        Device Sessions
      </h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data} margin={{ top: 0, right: 0, bottom: 20, left: 0 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={70} tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
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