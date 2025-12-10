"use client";

import React from "react";

export default function DashboardStep04() {
  const stream = [
    {
      label: "Deploy new AI-optimized FAQ block on top intake page.",
      tag: "CRO / Content",
      time: "Today · 9:02 am",
    },
    {
      label: "Sync pushed 24 new 5-star reviews into GBP + schema.",
      tag: "Reputation",
      time: "Today · 12:51 pm",
    },
    {
      label: "Ship local landing page refresh for 3 priority metros.",
      tag: "Local SEO",
      time: "Yesterday · 4:19 pm",
    },
  ];

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7E8AB6]">
            Deployment Stream
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Weekly launches that keep rankings, reviews, and revenue compounding.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
          18 changes this week
        </span>
      </div>

      <div className="space-y-3 mb-6 text-[11px]">
        {stream.map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-[#050816] border border-white/5 px-4 py-3 flex items-start justify-between gap-3"
          >
            <div>
              <p className="text-[12px] text-gray-100 leading-relaxed">
                {item.label}
              </p>
              <p className="text-[11px] text-gray-500 mt-1">{item.time}</p>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-[#102238] text-[#E8ECFF] whitespace-nowrap">
              {item.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 pt-2 text-[11px] text-gray-300">
        <p className="mb-1">
          100% of this activity syncs back into{" "}
          <span className="text-[#1B7BFF] font-semibold">
            Search Rivals OS
          </span>
          ,
        </p>
        <p>
          giving you a provable trail from fix → ranking → lead → revenue.
        </p>
      </div>
    </div>
  );
}
