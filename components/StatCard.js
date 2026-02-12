// StatCard.js
"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";

// Different wavy patterns for each card
const dataPatterns = {
  "Total Unique Pageviews": [
    { v: 40 }, { v: 65 }, { v: 45 }, { v: 50 }, { v: 48 }, { v: 52 }, { v: 50 }, { v: 58 },
    { v: 55 }, { v: 60 }, { v: 58 }, { v: 62 }, { v: 60 }, { v: 65 }, { v: 63 }, { v: 68 }
  ],
  "Avg Time (s) on Page": [
    { v: 55 }, { v: 35 }, { v: 45 }, { v: 40 }, { v: 50 }, { v: 45 }, { v: 48 }, { v: 50 },
    { v: 52 }, { v: 48 }, { v: 50 }, { v: 55 }, { v: 50 }, { v: 52 }, { v: 48 }, { v: 50 }
  ],
  "Page Exit %": [
    { v: 45 }, { v: 70 }, { v: 55 }, { v: 50 }, { v: 48 }, { v: 52 }, { v: 45 }, { v: 50 },
    { v: 48 }, { v: 52 }, { v: 50 }, { v: 48 }, { v: 50 }, { v: 52 }, { v: 48 }, { v: 50 }
  ],
  "Bounce %": [
    { v: 50 }, { v: 75 }, { v: 55 }, { v: 65 }, { v: 58 }, { v: 60 }, { v: 55 }, { v: 50 },
    { v: 52 }, { v: 60 }, { v: 55 }, { v: 58 }, { v: 56 }, { v: 60 }, { v: 58 }, { v: 55 }
  ]
};

export default function StatCard({ title, value }) {
  // Get the appropriate wavy pattern based on title
  const data = dataPatterns[title] || dataPatterns["Total Unique Pageviews"];
  
  return (
    <div className="bg-white px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] h-[109px] w-[259px] mb-2 flex flex-col">
      <p className="text-[#6b7280] text-xs font-normal mb-2 text-center flex-shrink-0">
        {title}
      </p>
      <h2 className="text-[28px] font-bold text-[#1e293b] mb-2 text-center leading-none flex-shrink-0">
        {value}
      </h2>
      <div className="flex-1 min-h-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Line 
              type="linear" 
              dataKey="v" 
              stroke="#2e8297" 
              strokeWidth={1.5} 
              dot={false} 
              connectNulls
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}