"use client";

import React from "react";

export default function DashboardStep01() {
  return (
    <div className="p-6 md:p-8">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7E8AB6]">
            Live Search & AI Signals
          </p>
          <p className="text-sm text-gray-400 mt-1">
            GSC, GA4, GBP, reviews, AI surfaces – all in one panel.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
          Stable · Last 7 days
        </span>
      </div>

      {/* Main metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-xs">
        <div className="bg-[#060814] rounded-xl border border-white/5 p-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 mb-1">
            GSC Clicks
          </p>
          <p className="text-2xl font-semibold text-white">+38%</p>
          <p className="text-[11px] text-emerald-300 mt-1">vs prior 28 days</p>
        </div>

        <div className="bg-[#060814] rounded-xl border border-white/5 p-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 mb-1">
            GA4 Sessions
          </p>
          <p className="text-2xl font-semibold text-white">+24%</p>
          <p className="text-[11px] text-emerald-300 mt-1">qualified traffic</p>
        </div>

        <div className="bg-[#060814] rounded-xl border border-white/5 p-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 mb-1">
            GBP Actions
          </p>
          <p className="text-2xl font-semibold text-white">+57%</p>
          <p className="text-[11px] text-emerald-300 mt-1">calls & directions</p>
        </div>

        <div className="bg-[#060814] rounded-xl border border-white/5 p-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 mb-1">
            AI Features
          </p>
          <p className="text-2xl font-semibold text-white">31</p>
          <p className="text-[11px] text-emerald-300 mt-1">AI answers & cards</p>
        </div>
      </div>

      {/* Simple “timeline” rows */}
      <div className="space-y-2 text-[11px] text-gray-300">
        <div className="flex items-center justify-between bg-white/2 rounded-lg px-3 py-2">
          <p>4.7 ★ average rating across 327 reviews</p>
          <span className="text-emerald-300 font-semibold">+0.3</span>
        </div>
        <div className="flex items-center justify-between bg-white/2 rounded-lg px-3 py-2">
          <p>Detected in ChatGPT, Gemini & Perplexity brand mentions</p>
          <span className="text-violet-300 font-semibold">+12</span>
        </div>
        <div className="flex items-center justify-between bg-white/2 rounded-lg px-3 py-2">
          <p>Organic, Local, AI and Social signals streaming in live</p>
          <span className="text-sky-300 font-semibold">Synced</span>
        </div>
      </div>
    </div>
  );
}
