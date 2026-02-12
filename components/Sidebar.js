// Sidebar.js
"use client";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[63px] h-[75px] bg-[#92bcc9] rounded-l-[20px] rounded-r-[0] flex items-center justify-center cursor-pointer shadow-sm">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#3a4d54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </div>

      <div className="w-[63px] h-[75px] bg-white rounded-l-[20px] rounded-r-[0] flex items-center justify-center cursor-pointer shadow-sm">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#5a6570" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>

      <div className="w-[63px] h-[75px] bg-white rounded-l-[20px] rounded-r-[0] flex items-center justify-center cursor-pointer shadow-sm">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#5a6570" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </div>

      <div className="w-[63px] h-[75px] bg-white rounded-l-[20px] rounded-r-[0] flex items-center justify-center cursor-pointer shadow-sm">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#5a6570" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
    </div>
  );
}