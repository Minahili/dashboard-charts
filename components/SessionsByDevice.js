"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: 'Jul 2017', Desktop: 1000, Mobile: 800, Tablet: 400 },
  { name: 'Aug 2017', Desktop: 1100, Mobile: 850, Tablet: 420 },
  { name: 'Sep 2017', Desktop: 1050, Mobile: 900, Tablet: 450 },
  { name: 'Oct 2017', Desktop: 1200, Mobile: 950, Tablet: 480 },
  { name: 'Nov 2017', Desktop: 1150, Mobile: 1000, Tablet: 460 },
  { name: 'Dec 2017', Desktop: 1300, Mobile: 1100, Tablet: 500 },
  { name: 'Jan 2018', Desktop: 18500, Mobile: 8000, Tablet: 2000 },
  { name: 'Feb 2018', Desktop: 5800, Mobile: 7200, Tablet: 1800 },
  { name: 'Mar 2018', Desktop: 6200, Mobile: 7500, Tablet: 1850 },
  { name: 'Apr 2018', Desktop: 5900, Mobile: 7300, Tablet: 1820 },
  { name: 'May 2018', Desktop: 6400, Mobile: 7600, Tablet: 1900 },
  { name: 'Jun 2018', Desktop: 6100, Mobile: 7400, Tablet: 1880 },
  { name: 'Jul 2018', Desktop: 6600, Mobile: 7700, Tablet: 1950 },
  { name: 'Aug 2018', Desktop: 6300, Mobile: 7500, Tablet: 1900 },
  { name: 'Sep 2018', Desktop: 6800, Mobile: 7800, Tablet: 2000 },
  { name: 'Oct 2018', Desktop: 6500, Mobile: 7600, Tablet: 1950 },
  { name: 'Nov 2018', Desktop: 7000, Mobile: 7900, Tablet: 2050 },
  { name: 'Dec 2018', Desktop: 6700, Mobile: 7700, Tablet: 2000 },
  { name: 'Jan 2019', Desktop: 7200, Mobile: 8000, Tablet: 2100 },
  { name: 'Feb 2019', Desktop: 6900, Mobile: 7800, Tablet: 2050 },
  { name: 'Mar 2019', Desktop: 7400, Mobile: 8100, Tablet: 2150 },
  { name: 'Apr 2019', Desktop: 7100, Mobile: 7900, Tablet: 2080 },
  { name: 'May 2019', Desktop: 7500, Mobile: 8200, Tablet: 2180 },
  { name: 'Jun 2019', Desktop: 7300, Mobile: 8000, Tablet: 2120 },
  { name: 'Jul 2019', Desktop: 7600, Mobile: 8300, Tablet: 2200 },
];

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-xs text-[#64748b]">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function SessionsByDevice() {
  return (
    <div className="bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <h3 className="text-base font-semibold text-[#1e293b] mb-2 text-center">
        Sessions by Device
      </h3>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data} margin={{ top: 20, right: 10, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 9 }} axisLine={false} tickLine={false} interval={5} />
          <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} ticks={[0, 20000]} tickFormatter={(value) => `${value / 1000}K`} domain={[0, 22000]} width={35} />
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Line type="linear" dataKey="Desktop" stroke="#2d6374" strokeWidth={2.5} dot={false} />
          <Line type="linear" dataKey="Mobile" stroke="#6ba5bd" strokeWidth={2.5} dot={false} />
          <Line type="linear" dataKey="Tablet" stroke="#d5e3e8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}