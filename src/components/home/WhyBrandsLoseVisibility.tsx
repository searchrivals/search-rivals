"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const reasons = [
  {
    id: "rankings",
    title: "Why Rankings Suddenly Shift",
    body: `
Algorithm updates, AI Overviews, and layout changes reshuffle results without warning. 
If you are not tracking volatility across every surface, your key pages can free-fall 
while competitors rise.`,
  },
  {
    id: "ai-engines",
    title: "Why AI Engines Skip Your Brand",
    body: `
Search andAI engines favor brands with clear entities, up-to-date content, and strong authority. 
If your topic coverage is thin or fragmented, AI simply selects better-structured 
competitor content.`,
  },
  {
    id: "behind-search",
    title: "Why Brands Fall Behind in Search",
    body: `
Most teams rely on static reports instead of live monitoring. Technical debt, slow 
indexing, and unaddressed content gaps stack up month after month until visibility 
drops feel sudden and irreversible.`,
  },
  {
    id: "sr-helps",
    title: "How Search Rivals Helps You Win",
    body: `
We connect your data, monitor every surface, and translate early signals into action. 
Your rankings stabilize, AI engines recognize your brand, and every gain compounds 
instead of slipping away.`,
  },
];

function VisibilityVisual({ activeId }: { activeId: string }) {
  // Shared card shell
  return (
    <motion.div
      key={activeId}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full min-h-[320px] lg:min-h-[380px] rounded-3xl bg-gradient-to-br from-[#050817] via-[#050509] to-[#10051f] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.9)] overflow-hidden"
    >
      {/* Soft glow */}
      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_top,_rgba(26,115,232,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(126,63,242,0.4),_transparent_60%)] opacity-70" />

      {/* Inner content layer */}
      <div className="relative z-10 h-full flex flex-col p-5 sm:p-6 lg:p-7 gap-4 text-xs sm:text-[13px] text-gray-200">
        {activeId === "rankings" && (
          <>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-gray-400">
              <span>AI Overview Impact</span>
              <span className="inline-flex items-center gap-1 text-emerald-300">
                Live volatility
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </div>

            {/* Fake SERP rows */}
            <div className="mt-2 space-y-2.5">
              {/* AI Overview pill */}
              <motion.div
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white/5 border border-[#1A73E8]/40 px-4 py-3.5 flex flex-col gap-1"
              >
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#1A73E8]">
                  AI Overview
                </span>
                <span className="text-sm text-white">
                  AI summary now occupies the top of the page, pushing organic
                  links down.
                </span>
              </motion.div>

              {/* Organic listings */}
              {["Your Brand – Main Page", "Competitor A – Guide", "Competitor B – Comparison"].map(
                (label, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: activeId === "rankings" && idx === 0 ? 0.96 : 1,
                    }}
                    transition={{ duration: 0.4, delay: 0.08 * (idx + 1) }}
                    className={`rounded-xl px-4 py-2.5 border flex flex-col gap-0.5 ${
                      idx === 0
                        ? "border-red-400/60 bg-red-500/5"
                        : "border-white/8 bg-white/3"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-[#4ea0ff]">{label}</span>
                      {idx === 0 && (
                        <span className="flex items-center gap-1 text-[11px] text-red-300">
                          ↓ Position dropped
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gray-300">
                      Sample snippet text that represents how this result appears after the
                      layout shift.
                    </span>
                  </motion.div>
                )
              )}
            </div>

            {/* Volatility mini-chart */}
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
                  SERP Volatility – Last 14 Days
                </span>
                <span className="text-[11px] text-gray-300">High</span>
              </div>
              <div className="flex items-end gap-1.5 h-12">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full bg-gradient-to-t from-[#1A73E8]/40 via-[#7E3FF2]/70 to-white"
                    style={{
                      height: `${35 + ((i * 17) % 50)}%`,
                      opacity: 0.5 + ((i % 3) * 0.12),
                    }}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {activeId === "ai-engines" && (
          <>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-gray-400">
              <span>AI Engine Coverage</span>
              <span className="inline-flex items-center gap-1">
                Entities mapped
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
              </span>
            </div>

            <div className="mt-2 grid grid-cols-[1.1fr_1fr] gap-4">
              {/* Entity graph */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-3 flex flex-col gap-2">
                <span className="text-[11px] text-gray-300">
                  Topic Graph – “AI SEO Agency”
                </span>
                <div className="relative mt-1 h-28">
                  {/* Competitor nodes */}
                  <motion.div
                    className="absolute left-4 top-6 h-2 w-2 rounded-full bg-emerald-400"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute left-20 top-2 h-2.5 w-2.5 rounded-full bg-emerald-300"
                    animate={{ y: [1, -3, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute left-32 top-10 h-2 w-2 rounded-full bg-emerald-400"
                    animate={{ y: [-1, 2, -1] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />

                  {/* Your brand node (dim) */}
                  <motion.div
                    className="absolute left-10 bottom-4 h-2.5 w-2.5 rounded-full bg-[#1A73E8]/35 border border-[#1A73E8]"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Lines */}
                  <div className="absolute inset-0 opacity-60">
                    <svg
                      viewBox="0 0 200 120"
                      className="w-full h-full text-[#7E3FF2]/70"
                    >
                      <polyline
                        points="20,80 60,40 120,30 160,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <polyline
                        points="20,90 80,70 140,40 180,35"
                        fill="none"
                        stroke="#1A73E8"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeDasharray="4 3"
                      />
                    </svg>
                  </div>

                  <div className="absolute bottom-1 left-0 right-0 flex justify-between text-[10px] text-gray-400">
                    <span>Brand entities</span>
                    <span>AI understanding</span>
                  </div>
                </div>
              </div>

              {/* Coverage bars */}
              <div className="rounded-2xl bg-white/3 border border-white/10 p-3 flex flex-col gap-2">
                <span className="text-[11px] text-gray-300 mb-1">
                  Presence in AI Answers
                </span>
                {[
                  { label: "Competitor A", value: 92, color: "from-emerald-400 to-emerald-200" },
                  { label: "Competitor B", value: 81, color: "from-[#7E3FF2] to-[#c4a2ff]" },
                  { label: "Your Brand", value: 34, color: "from-[#1A73E8] to-[#7E3FF2]" },
                ].map((row) => (
                  <div key={row.label} className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-gray-300">
                      <span>{row.label}</span>
                      <span>{row.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${row.color}`}
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeId === "behind-search" && (
          <>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-gray-400">
              <span>Technical & Content Debt</span>
              <span className="inline-flex items-center gap-1 text-orange-300">
                Backlog growing
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              </span>
            </div>

            <div className="mt-2 grid grid-cols-[1.1fr_1fr] gap-4">
              {/* Indexing timeline */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-3 flex flex-col gap-3">
                <span className="text-[11px] text-gray-300">
                  Indexing & Fixes – Last 90 Days
                </span>
                <div className="h-24">
                  <svg viewBox="0 0 220 90" className="w-full h-full">
                    <defs>
                      <linearGradient id="lag" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#ffb454" />
                        <stop offset="100%" stopColor="#ff6b6b" />
                      </linearGradient>
                    </defs>
                    <polyline
                      points="10,70 40,68 70,64 100,60 130,54 160,50 190,45 210,42"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="10,40 40,46 70,52 100,60 130,68 160,76 190,84 210,86"
                      fill="none"
                      stroke="url(#lag)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>Fixes shipped</span>
                    <span>Issues discovered</span>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="rounded-2xl bg-white/3 border border-white/10 p-3 flex flex-col gap-2">
                <span className="text-[11px] text-gray-300 mb-1">
                  Common patterns in falling visibility
                </span>
                {[
                  "Old content never refreshed",
                  "Monitoring only via monthly reports",
                  "Slow responses to AI / SERP changes",
                  "Fragmented ownership across teams",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[11px] text-gray-200">
                    <span className="mt-[3px] h-2 w-2 rounded-full bg-red-400/80" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeId === "sr-helps" && (
          <>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-gray-400">
              <span>Search Rivals OS Impact</span>
              <span className="inline-flex items-center gap-1 text-emerald-300">
                Stability rising
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </div>

            <div className="mt-3 grid grid-cols-[1.05fr_1fr] gap-4">
              {/* Before vs After chart */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-3 flex flex-col gap-3">
                <span className="text-[11px] text-gray-300">
                  Combined visibility – Before vs After
                </span>
                <div className="h-24">
                  <svg viewBox="0 0 220 90" className="w-full h-full">
                    <polyline
                      points="10,70 40,68 70,66 100,64 130,63 160,62 190,61 210,60"
                      fill="none"
                      stroke="#64748b"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="10,72 40,64 70,56 100,48 130,40 160,32 190,26 210,22"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>Baseline</span>
                    <span>With SR playbooks</span>
                  </div>
                </div>
              </div>

              {/* Playbooks cards */}
              <div className="rounded-2xl bg-white/3 border border-white/10 p-3 flex flex-col gap-2">
                <span className="text-[11px] text-gray-300 mb-1">
                  What our operating system does for you
                </span>
                {[
                  "Detects early ranking and AI answer shifts",
                  "Prioritizes technical & content fixes automatically",
                  "Connects actions to revenue-driving pages",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-[11px] text-gray-200"
                  >
                    <span className="mt-[3px] h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-black/40 border border-white/10 px-3 py-2">
              <span className="text-[11px] text-gray-300">
                Weekly updates show how AI, local, and organic are trending together.
              </span>
              <span className="text-[11px] text-[#4ea0ff]">View OS snapshot →</span>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function WhyBrandsLoseVisibility() {
  const [activeId, setActiveId] = useState<string>("rankings");

  return (
    <section className="relative py-24 bg-[#050509] border-t border-[#1A73E8]/15 overflow-hidden">
      {/* soft grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1A73E8]/25 via-transparent to-[#7E3FF2]/30 blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-start">
        {/* LEFT: accordion copy */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] text-left mb-4 max-w-xl">
            Why Brands Lose Visibility in the AI-First Search Era
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl">
            AI Overviews, new layouts, and constant ranking shifts punish brands that
            still rely on legacy SEO habits. This section breaks down why visibility
            drops happen and how to turn them into an advantage.
          </p>

          <div className="space-y-3">
            {reasons.map((item) => {
              const isActive = item.id === activeId;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  initial={false}
                  animate={{
                    backgroundColor: isActive ? "rgba(15,23,42,0.95)" : "rgba(15,15,20,0.9)",
                    borderColor: isActive ? "rgba(74,222,128,0.7)" : "rgba(148,163,184,0.3)",
                  }}
                  className="w-full text-left rounded-2xl border px-4 sm:px-5 py-4 sm:py-4.5 cursor-pointer shadow-[0_18px_40px_rgba(0,0,0,0.75)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm md:text-base font-medium text-white">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-300 transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.body}
                    </p>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: dynamic visual */}
        <div className="min-h-[320px]">
          <VisibilityVisual activeId={activeId} />
        </div>
      </div>
    </section>
  );
}
