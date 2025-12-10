"use client";

import React from "react";

export default function DashboardStep02() {
  const items = [
    {
      label: "Technical",
      impact: "19 critical issues",
      tag: "Core Web Vitals",
    },
    {
      label: "Content",
      impact: "33 thin / outdated pages",
      tag: "Topic authority",
    },
    {
      label: "Local",
      impact: "14 unoptimized locations",
      tag: "Local pack wins",
    },
    {
      label: "AI Overview",
      impact: "7 queries with weak answers",
      tag: "Answer replacement risk",
    },
  ];

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7E8AB6]">
            AI Weak-Point Map
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Every silent leak in traffic and revenue flagged in one view.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs bg-rose-500/10 text-rose-300 border border-rose-400/40">
          Action required
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/5 bg-[#080818] p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-200">{item.label}</p>
              <span className="text-[11px] px-2 py-1 rounded-full bg-amber-500/15 text-amber-200">
                {item.tag}
              </span>
            </div>
            <p className="text-[13px] text-rose-300">{item.impact}</p>
            <p className="text-[11px] text-gray-400">
              Prioritized by revenue impact, difficulty to fix, and time-to-win.
            </p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-gray-400">
        Every issue is linked to affected URLs, lost impressions, and missed
        conversions, so you know exactly where to act first.
      </p>
    </div>
  );
}
