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
    <div className="min-h-screen bg-[#c8ced8] flex items-center justify-center p-4">
      {/* Main container with tabs attached */}
      <div className="flex max-w-[1400px] w-full">
        {/* Tabs - attached directly to left side of main card */}
        <div className="flex flex-col justify-center mr-[-20px] z-10">
          <Sidebar />
        </div>

        {/* Main dashboard card with curved edges */}
        <div className="flex-1 bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* Inner content area */}
          <div className="p-6 bg-[#e8ecf0]">
            <Header />

            {/* Top stats row */}
            <div className="grid grid-cols-4 gap-3 mb-3">
              <StatCard title="Total Unique Pageviews" value="622K" />
              <StatCard title="Avg Time (s) on Page" value="29.8" />
              <StatCard title="Page Exit %" value="16.4%" />
              <StatCard title="Bounce %" value="21.6%" />
            </div>

            {/* Middle charts row */}
            <div className="flex gap-3 mb-3 h-[220px]">
              <div className="w-1/4">
                <DeviceSessions />
              </div>
              <div className="w-1/4">
                <ChannelSessions />
              </div>
              <div className="w-2/4">
                <SessionsChart />
              </div>
            </div>

            {/* Bottom charts row */}
            <div className="flex gap-3 h-[220px]">
              <div className="w-1/2">
                <SessionsByDevice />
              </div>
              <div className="w-1/2">
                <PageviewsChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}