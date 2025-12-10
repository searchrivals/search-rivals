"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Full Search and AI Visibility",
    desc: "We monitor every surface your brand appears on and fix issues early to protect visibility from competitors.",
  },
  {
    id: 2,
    title: "Real-Time Improvements Powered By AI Automation",
    desc: "Our automation detects ranking shifts and AI answer changes and improves key surfaces before visibility drops.",
  },
  {
    id: 3,
    title: "Strategy Aligned to Buyers, Not Vanity Metrics",
    desc: "We focus on high-intent pages and surfaces that drive revenue, not empty traffic or noise.",
  },
  {
    id: 4,
    title: "Execution That Adapts Daily, Not Monthly",
    desc: "We refine content, technical health, and authority every day so your growth stays ahead of search and AI changes.",
  },
];

function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="relative w-full h-[420px] md:h-[440px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#020617] via-[#020314] to-[#070020] border border-white/12 backdrop-blur-xl shadow-[0_26px_70px_rgba(0,0,0,0.75)]"
    >
      {/* outer glow edge */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-px rounded-[1.4rem] bg-gradient-to-br from-[#1A73E8]/40 via-transparent to-[#7E3FF2]/45 opacity-70" />
      </div>

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.22] mix-blend-soft-light"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* inner content */}
      <div className="relative z-10 w-full h-full p-5 md:p-6">{children}</div>
    </motion.div>
  );
}

/* ================================
   PANEL 1 – Full Search Visibility
=================================== */
function PanelVisibility() {
  return (
    <PanelShell>
      {/* top chrome */}
      <div className="flex items-center justify-between mb-4 text-[10px] md:text-xs text-gray-200/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/90" />
          </div>
          <span className="px-2 py-0.5 rounded-full bg-black/40 border border-white/15 uppercase tracking-[0.16em]">
            Coverage Map
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300/90">All channels online</span>
        </div>
      </div>

      {/* main layout */}
      <div className="grid grid-cols-[1.1fr,0.95fr] gap-4 h-[calc(100%-1rem)]">
        {/* left: surfaces map */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]/40 border border-white/10 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.7),_transparent_55%)]" />
          <div className="relative p-4 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-gray-300/90 mb-2">
              <span>Search & AI Surfaces</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px]">
                Protected
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {[
                "Organic results",
                "Local packs",
                "AI answers",
                "Review sites",
                "Maps & directions",
                "Social discovery",
              ].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-2 rounded-xl bg-white/3 border border-white/10 px-2 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                  <span className="text-gray-100/90">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* status bar */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-[10px] text-gray-300/80 mb-1">
                <span>Visibility coverage</span>
                <span className="text-emerald-300">↑ strong</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-[#1A73E8] to-[#7E3FF2]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* right: volatility bars */}
        <div className="relative rounded-2xl bg-gradient-to-t from-[#020617] via-[#020617] to-[#020617]/40 border border-white/10 overflow-hidden">
          <div className="relative h-full flex flex-col p-4">
            <div className="flex items-center justify-between text-[11px] text-gray-300/85 mb-2">
              <span>Channel stability – last 14 days</span>
              <span className="text-emerald-300">Low risk</span>
            </div>
            <div className="flex-1 flex items-end gap-[5px] pb-2">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-full bg-gradient-to-t from-[#1A73E8]/70 via-[#7E3FF2]/80 to-white"
                  style={{
                    height: `${35 + ((i * 19) % 55)}%`,
                    opacity: 0.55 + ((i % 4) * 0.12),
                  }}
                  animate={{
                    scaleY: [1, 0.9 + (i % 3) * 0.08, 1],
                  }}
                  transition={{
                    duration: 2.2 + (i % 5) * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-400">
              <span>Organic · Local · AI · Social</span>
              <span className="text-sky-300/90">Live monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  );
}

/* ============================================
   PANEL 2 – Real-Time AI Automation
=============================================== */
function PanelAutomation() {
  return (
    <PanelShell>
      {/* header */}
      <div className="flex items-center justify-between mb-4 text-[10px] md:text-xs text-gray-200/85">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-cyan-400/40 text-[10px] tracking-[0.18em] uppercase">
            Automation stream
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span className="text-lime-300/90">Agents running</span>
        </div>
      </div>

      <div className="grid grid-rows-[1.2fr,0.9fr] gap-4 h-[calc(100%-1rem)]">
        {/* timeline */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#020617] to-[#020617]/40 border border-white/10 p-4 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.65),_transparent_55%)]" />
          <div className="relative h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-gray-300/90 mb-2">
              <span>Real-time fix queue</span>
              <span className="text-cyan-300">0 critical issues</span>
            </div>

            <div className="relative mt-2 h-[72%]">
              {/* base line */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-[#1A73E8]/30 via-[#7E3FF2]/60 to-transparent" />
              {/* pulses */}
              {Array.from({ length: 7 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${6 + i * 13}%`,
                  }}
                  animate={{
                    y: [4, -6, 4],
                  }}
                  transition={{
                    duration: 2 + i * 0.18,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-[7px] h-[7px] rounded-full bg-gradient-to-tr from-[#22d3ee] to-[#a855f7] shadow-[0_0_14px_rgba(56,189,248,0.9)]" />
                  <div className="mt-1 h-6 w-[2px] rounded-full bg-gradient-to-t from-[#22d3ee]/70 to-transparent" />
                  <span className="mt-1 text-[9px] text-gray-300/80">
                    {i % 2 === 0 ? "Rank shift" : "AI answer"}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* automation cards */}
        <div className="grid grid-cols-3 gap-3 text-[10px] text-gray-200/90">
          {[
            {
              label: "Rank checks",
              val: "Every 15 min",
              color: "from-emerald-400 to-cyan-400",
            },
            {
              label: "AI overview scans",
              val: "Live",
              color: "from-sky-400 to-violet-400",
            },
            {
              label: "Fixes deployed",
              val: "Auto-queued",
              color: "from-amber-400 to-rose-400",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="relative rounded-2xl bg-white/[0.03] border border-white/10 p-3 overflow-hidden"
            >
              <div
                className={`absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t ${card.color} opacity-20`}
              />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 mb-1">
                  {card.label}
                </p>
                <p className="text-xs font-semibold text-white">{card.val}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PanelShell>
  );
}

/* ============================================
   PANEL 3 – Buyer-Aligned Strategy
=============================================== */
function PanelStrategy() {
  return (
    <PanelShell>
      {/* header */}
      <div className="flex items-center justify-between mb-4 text-[10px] md:text-xs text-gray-200/85">
        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-purple-400/40 tracking-[0.18em] uppercase">
          Buyer journey view
        </span>
        <span className="text-[10px] text-sky-300/90">High-intent pages highlighted</span>
      </div>

      <div className="grid grid-cols-[1.1fr,0.9fr] gap-4 h-[calc(100%-1rem)]">
        {/* funnel */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]/40 border border-white/10 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] text-gray-300/90 mb-2">
            <span>Revenue funnel focus</span>
            <span className="text-emerald-300">Noise filtered out</span>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4">
            {[
              { label: "Awareness", size: "100%", dim: true },
              { label: "Consideration", size: "80%", dim: false },
              { label: "Decision", size: "64%", dim: false },
              { label: "Retention", size: "48%", dim: false },
            ].map((stage, i) => (
              <motion.div
                key={stage.label}
                className="relative h-8 rounded-full overflow-hidden"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i }}
              >
                <div className="absolute inset-0 bg-white/3" />
                <motion.div
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#1A73E8] via-[#7E3FF2] to-emerald-400 ${
                    stage.dim ? "opacity-50" : "opacity-100"
                  }`}
                  style={{ width: stage.size }}
                />
                <div className="relative flex items-center justify-between px-3 text-[11px] text-white/90 h-full">
                  <span>{stage.label}</span>
                  {!stage.dim && (
                    <span className="text-emerald-200 text-[10px]">
                      High-intent focus
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* persona & pages */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#020617] to-[#020617]/40 border border-white/10 p-4">
          <div className="flex items-center justify-between text-[11px] text-gray-300/90 mb-2">
            <span>Buyer personas</span>
            <span className="text-violet-300">Mapped to key pages</span>
          </div>

          <div className="space-y-3 text-[11px]">
            {[
              {
                persona: "Operations lead",
                page: "Pricing & implementation",
              },
              {
                persona: "Executive sponsor",
                page: "ROI & outcomes",
              },
              {
                persona: "Technical evaluator",
                page: "Integration & security",
              },
            ].map((row, idx) => (
              <motion.div
                key={row.persona}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * idx }}
                className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/10 px-3 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#7E3FF2] flex items-center justify-center text-[10px] text-white/95">
                    {row.persona.split(" ")[0][0]}
                  </span>
                  <div>
                    <p className="text-xs text-white">{row.persona}</p>
                    <p className="text-[10px] text-gray-300/80">
                      Guided to: <span className="text-sky-300">{row.page}</span>
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px]">
                  Revenue path
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelShell>
  );
}

/* ============================================
   PANEL 4 – Daily Adaptive Execution
=============================================== */
function PanelExecution() {
  return (
    <PanelShell>
      {/* header */}
      <div className="flex items-center justify-between mb-4 text-[10px] md:text-xs text-gray-200/85">
        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-emerald-400/40 tracking-[0.18em] uppercase">
          90-day execution log
        </span>
        <span className="text-[10px] text-emerald-300/90">Progress updated daily</span>
      </div>

      <div className="grid grid-cols-[1.1fr,0.9fr] gap-4 h-[calc(100%-1rem)]">
        {/* calendar heatmap */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]/40 border border-white/10 p-4">
          <div className="flex items-center justify-between text-[11px] text-gray-300/90 mb-2">
            <span>Last 90 days of execution</span>
            <span className="text-emerald-300">No missed weeks</span>
          </div>

          <div className="grid grid-cols-10 gap-1 mt-2">
            {Array.from({ length: 70 }).map((_, i) => {
              const strength = (i % 5) + 1;
              const color =
                strength >= 4
                  ? "bg-emerald-400"
                  : strength === 3
                  ? "bg-sky-400"
                  : "bg-slate-500";
              return (
                <motion.div
                  key={i}
                  className={`h-3 w-3 rounded-[6px] ${color}`}
                  style={{ opacity: 0.25 + strength * 0.12 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 3 + (i % 7) * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* daily actions list */}
        <div className="relative rounded-2xl bg-gradient-to-t from-[#020617] via-[#020617] to-[#020617]/40 border border-white/10 p-4">
          <div className="flex items-center justify-between text-[11px] text-gray-300/90 mb-2">
            <span>Today’s focus queue</span>
            <span className="text-sky-300">Auto-prioritized</span>
          </div>

          <div className="space-y-2.5 text-[11px]">
            {[
              {
                label: "Update AI answer hub content",
                badge: "Content",
              },
              {
                label: "Ship technical fixes for high-value pages",
                badge: "Technical",
              },
              {
                label: "Promote earned links to authority pages",
                badge: "Authority",
              },
              {
                label: "Review new volatility alerts & wins",
                badge: "Signals",
              },
            ].map((task, idx) => (
              <motion.div
                key={task.label}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * idx }}
                className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/10 px-3 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-gray-100">{task.label}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-gray-200 border border-white/15">
                  {task.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PanelShell>
  );
}

/* ============================================
   VISUAL SWITCHER
=============================================== */
function VisualForItem({ activeId }: { activeId: number }) {
  switch (activeId) {
    case 1:
      return <PanelVisibility />;
    case 2:
      return <PanelAutomation />;
    case 3:
      return <PanelStrategy />;
    case 4:
    default:
      return <PanelExecution />;
  }
}

/* ============================================
   MAIN SECTION
=============================================== */
export default function WhyFastGrowingChoose() {
  const [open, setOpen] = useState<number>(1);

  return (
    <section className="relative py-16 md:py-20 bg-[#050509] border-t border-[#1A73E8]/15 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-14 items-start">
        {/* LEFT: VISUAL PANEL */}
        <div className="order-1 lg:order-none">
          <VisualForItem activeId={open || 1} />
        </div>

        {/* RIGHT: TEXT + ACCORDION */}
        <div className="order-0 lg:order-none">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
  <span className="bg-gradient-to-r from-[#1A73E8] via-[#7E3FF2] to-[#1A73E8] bg-clip-text text-transparent">
    Why Fast-Growing Brands Choose Our AI SEO Agency
  </span>
</h2>



          <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg">
            Four reasons brands trust Search Rivals to engineer predictable
            visibility gains, outperform competitors, and stay ahead of AI-driven
            changes.
          </p>

          <div className="space-y-4">
            {items.map((item) => {
              const isOpen = open === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setOpen(isOpen ? 0 : item.id)}
                  className={`cursor-pointer rounded-2xl border transition-all ${
                    isOpen
                      ? "border-[#1A73E8]/45 bg-white/[0.06] shadow-[0_14px_40px_rgba(0,0,0,0.55)]"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between p-5">
                    <p className="text-white font-semibold text-sm md:text-base">
                      {item.title}
                    </p>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-300 text-lg leading-none"
                    >
                      ▾
                    </motion.span>
                  </div>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="px-5 pb-5 text-gray-300 text-sm leading-relaxed"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
