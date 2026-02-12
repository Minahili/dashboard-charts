"use client";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-semibold text-[#1e293b]">
        Web Traffic
      </h1>
      <div className="flex items-center gap-2">
        <button className="px-5 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
          Month
        </button>
        <button className="px-5 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
          Year
        </button>
        <button className="px-5 py-2 bg-[#6ba5bd] text-white rounded-full text-sm font-medium hover:bg-[#5a94ab] transition-colors shadow-sm">
          Total
        </button>
        <button className="ml-1 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}