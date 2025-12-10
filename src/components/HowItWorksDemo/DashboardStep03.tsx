"use client";

import React from "react";

export default function DashboardStep03() {
  const rows = [
    {
      label: "Launch AV test on intake form vs. 2-step quiz",
      lane: "CRO Funnel",
      eta: "Live · 7 days left",
    },
    {
      label: "Cluster missing map packs in 5 high-value cities",
      lane: "Local SEO",
      eta: "Queued · this sprint",
    },
    {
      label: "Rewrite 24 bottom-funnel pages for AI overview answers",
      lane: "Content",
      eta: "In progress",
    },
  ];

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7E8AB6]">
            Visibility Playbook
          </p>
          <p className="text-sm text-gray-400 mt-1">
            One roadmap that ties every fix to rankings, leads, and revenue.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs bg-sky-500/10 text-sky-300 border border-sky-400/40">
          Sprint: Week 03
        </span>
      </div>

      <div className="space-y-3 mb-6 text-[11px]">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/5 bg-[#050716] px-4 py-3 flex flex-col gap-1"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-100 text-[12px]">{row.label}</p>
              <span className="px-2 py-0.5 rounded-full bg-[#10162F] text-[10px] text-indigo-200">
                {row.lane}
              </span>
            </div>
            <p className="text-[11px] text-gray-400">{row.eta}</p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-gray-400">
        Every play is sequenced to compound: technical stability, local trust,
        answer ownership, then offer conversion.
      </p>
    </div>
  );
}
