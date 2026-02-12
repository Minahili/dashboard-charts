// page.js
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import DeviceSessions from "@/components/DeviceSessions";
import ChannelSessions from "@/components/ChannelSessions";
import SessionsChart from "@/components/SessionsChart";
import SessionsByDevice from "@/components/SessionsByDevice";
import PageviewsChart from "@/components/PageviewChart";

export default function Home() {
  return (
    <div className="h-screen bg-[#c8ced8] flex items-center justify-center p-4 overflow-hidden">
      {/* Main container */}
      <div className="flex max-w-[12100px] w-[1530px] items-center" style={{ height: '99vh' }}>
        {/* Tabs */}
        <div className="flex flex-col justify-center z-0">
          <Sidebar />
        </div>

        {/* Main dashboard card */}
        <div className="relative z-10 flex-1 h-full bg-white rounded-[42px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden ml-[-20px]">
          {/* Inner content area */}
          <div className="px-5 py-3 bg-[#e8ecf0] h-full flex flex-col">
            {/* Header */}
            <div className="flex-shrink-0 mb-2">
              <Header />
            </div>

            {/* Top stats row */}
            <div className="grid grid-cols-4 px-2 mb-2  flex-shrink-0">
              <StatCard title="Total Unique Pageviews" value="622K" />
              <StatCard title="Avg Time (s) on Page" value="29.8" />
              <StatCard title="Page Exit %" value="16.4%" />
              <StatCard title="Bounce %" value="21.6%"  />
            </div>

            {/* Middle charts row */}
            <div className="flex gap-4 flex-shrink-0 mt-2" style={{ height: '170px' }}>
              <div className="w-1/4 h-full">
                <DeviceSessions />
              </div>
              <div className="w-1/4 h-full">
                <ChannelSessions />
              </div>
              <div className="w-2/4 h-full">
                <SessionsChart />
              </div>
            </div>

            {/* Bottom charts row  */}
            <div className="flex gap-3 flex-shrink-0 mt-6" style={{ height: '170px' }}>
              <div className="w-1/2 h-full">
                <SessionsByDevice />
              </div>
              <div className="w-1/2 h-full">
                <PageviewsChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}