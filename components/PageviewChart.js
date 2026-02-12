// PageviewsChart.js - PADDING KAM
"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const generateMonthlyData = () => {
  const months = [];
  const startDate = new Date(2017, 6);
  const endDate = new Date(2019, 6);
  let currentDate = new Date(startDate);
  const values = [5000, 7000, 6000, 9000, 8000, 11000, 13000, 16000, 18000, 20000, 19080, 22000, 24000, 26000, 25000, 28000, 27000, 30000, 32000, 35000, 37000, 40000, 38000, 42000, 45000];
  let index = 0;
  
  while (currentDate <= endDate) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const baseValue = values[index] || 45000;
    const variation = (Math.random() - 0.5) * 5000;
    
    months.push({
      name: `${month} ${year}`,
      value: Math.max(2000, baseValue + variation),
      shortName: currentDate.getMonth() === 0 || currentDate.getMonth() === 6 ? `${month} ${year}` : ''
    });
    
    currentDate.setMonth(currentDate.getMonth() + 1);
    index++;
  }
  return months;
};

const data = generateMonthlyData();

export default function PageviewsChart() {
  return (
    <div className="bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] h-full w-[549px] flex flex-col">
      <h3 className="text-sm font-semibold text-[#1e293b] mb-2 text-center flex-shrink-0">
        Pageviews
      </h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
  data={data}
  barSize={12}
  barCategoryGap="-1%"
  barGap={0}
  margin={{ top: 10, right: 10, bottom: -2, left: -20 }}
>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="shortName" tick={{ fill: "#64748b", fontSize: 9 }} axisLine={false} tickLine={false} interval={0} />
            <YAxis tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} ticks={[0, 50000]} tickFormatter={(value) => `${value / 1000}K`} domain={[0, 50000]} />
            <Tooltip />
            <Bar
  dataKey="value"
  fill="#1d6885"
  radius={[2, 2, 0, 0]}
/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}