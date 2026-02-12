"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { v: 10 }, { v: 150 }, { v: 12 }, { v: 18 }, { v: -16 }, { v: 22 }, { v: 80 }, { v: 25 }
];

export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <p className="text-[#6b7280] text-s font-normal mb-2 text-center">
        {title}
      </p>
      <h2 className="text-[32px] font-bold text-[#1e293b] mb-2 text-center">
        {value}
      </h2>
      <div className="h-8 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="linear" dataKey="v" stroke="#4a9baf" strokeWidth={1.9} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}