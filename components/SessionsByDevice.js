// SessionsByDevice.js
"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";
const data = [
  // 2017 -
  { name: 'Jul 2017', Desktop: 1800, Mobile: 2200, Tablet: 600 },
  { name: 'Aug 2017', Desktop: 2100, Mobile: 2400, Tablet: 650 },
  { name: 'Sep 2017', Desktop: 1600, Mobile: 2600, Tablet: 700 },
  { name: 'Oct 2017', Desktop: 2300, Mobile: 2800, Tablet: 750 },
  { name: 'Nov 2017', Desktop: 1900, Mobile: 3000, Tablet: 800 },
  { name: 'Dec 2017', Desktop: 2500, Mobile: 3200, Tablet: 850 },
  
  // Jan 2018 - Desktop BIG SPIKE
  { name: 'Jan 2018', Desktop: 20000, Mobile: 3500, Tablet: 900 },
  
  // 2018 
  { name: 'Feb 2018', Desktop: 5800, Mobile: 4000, Tablet: 1000 },
  { name: 'Mar 2018', Desktop: 6200, Mobile: 4800, Tablet: 1100 },
  { name: 'Apr 2018', Desktop: 5300, Mobile: 5800, Tablet: 1200 },
  { name: 'May 2018', Desktop: 5900, Mobile: 6900, Tablet: 1300 },
  { name: 'Jun 2018', Desktop: 5500, Mobile: 7900, Tablet: 1400 },
  { name: 'Jul 2018', Desktop: 6300, Mobile: 7700, Tablet: 1500 },
  { name: 'Aug 2018', Desktop: 6000, Mobile: 9900, Tablet: 1600 },
  { name: 'Sep 2018', Desktop: 6600, Mobile: 8000, Tablet: 1700 },
  { name: 'Oct 2018', Desktop: 6200, Mobile: 10400, Tablet: 1800 },
  { name: 'Nov 2018', Desktop: 6900, Mobile: 11900, Tablet: 1900 },
  { name: 'Dec 2018', Desktop: 6500, Mobile: 12000, Tablet: 2000 },
  
  { name: 'Jan 2019', Desktop: 7100, Mobile: 14600, Tablet: 2100 },
  { name: 'Feb 2019', Desktop: 6800, Mobile: 13600, Tablet: 2200 },
  { name: 'Mar 2019', Desktop: 7400, Mobile: 16400, Tablet: 2300 },
  { name: 'Apr 2019', Desktop: 7000, Mobile: 15200, Tablet: 2400 },
  { name: 'May 2019', Desktop: 7600, Mobile: 19000, Tablet: 2500 },
  { name: 'Jun 2019', Desktop: 7200, Mobile: 17800, Tablet: 2600 },
  { name: 'Jul 2019', Desktop: 7900, Mobile: 17600, Tablet: 2700 },
];
const CustomLegend = () => {
  return (
    <div className="flex  gap-6 mb-1">
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#b0e0e6" }} />
        <span className="text-xs font-medium text-[#475569]">Desktop</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1e3f4d" }} />
        <span className="text-xs font-medium text-[#475569]">Mobile</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#cbd5e1" }} />
        <span className="text-xs font-medium text-[#475569]">Tablet</span>
      </div>
    </div>
  );
};

export default function SessionsByDevice() {
  return (
    <div className="bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] h-full flex flex-col">
      <h3 className="text-sm font-semibold text-[#0f2a33] mb-1 text-center flex-shrink-0">
        Sessions by Device
      </h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, bottom: 20, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />

            <XAxis
              dataKey="name"
              tick={{ fill: "#475569", fontSize: 9, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
              ticks={['Jul 2017', 'Jan 2018', 'Jul 2018', 'Jan 2019', 'Jul 2019']}
              interval={0}
              height={16}
            />

            <YAxis
              tick={{ fill: "#475569", fontSize: 10, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 20000]}
              tickFormatter={(value) => `${value / 1000}K`}
              domain={[0, 21000]}
              width={35}
            />

            <Tooltip />
            
            <Legend 
              content={<CustomLegend />} 
              verticalAlign="top" 
              wrapperStyle={{ paddingBottom: 8 }}
            />

            {/* Desktop - LIGHT BLUE line with LIGHT BLUE fill - ZIGZAG/UP-DOWN */}
            <Area
              type="monotone"
              dataKey="Mobile"
              stroke="#7da5a7"        // Light blue-green line
              strokeWidth={2.2}
              fill="#c2e3e8"          // Very light blue fill
              fillOpacity={0.8}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />

            {/* Mobile - DARK TEAL line - MOUNTAIN shape (continuously rising) */}
            <Area
              type="linear"
              dataKey="Desktop"
              stroke="#1a404d"        // Dark teal/blue
              strokeWidth={2.2}
              fill="#c2e3e8" 
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />

            {/* Tablet - GREY line - Slight upward */}
            <Area
              type="monotone"
              dataKey="Tablet"
              stroke="#b4c7d1"        // Light grey
              strokeWidth={1.8}
              fill="none"
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}