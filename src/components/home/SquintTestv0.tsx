"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";

const scenarios = [
  {
    id: "what",
    tag: "WHAT WE DO",
    prompt:
      "How do we stay visible across Google, AI answers, maps, and reviews?",
    title: "Improve Visibility Across Every Search",
    bullets: [
      "Connect SEO, local, AI answers, and reviews into one system.",
      "Show up where high-intent buyers search every day.",
      "Turn scattered visibility into a predictable acquisition engine.",
    ],
  },
  {
    id: "why",
    tag: "WHY IT MATTERS",
    prompt: "How do we become the obvious best choice on the web?",
    title: "Make Your Brand The Obvious Best Choice",
    bullets: [
      "Strengthen how your brand appears on the surfaces buyers trust.",
      "Stay resilient to algorithm shifts and market noise.",
      "Win more clicks, calls, and customers from the same demand.",
    ],
  },
  {
    id: "gain",
    tag: "WHAT YOU GAIN",
    prompt: "How do we create predictable customers and revenue?",
    title: "A Predictable Flow of New Customers and Revenue",
    bullets: [
      "Convert high-intent demand from the buyers who matter most.",
      "Use one operating view your leadership team can trust.",
      "Forecast and scale with confidence instead of guessing.",
    ],
  },
];

export default function SquintTestv0() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = scenarios[activeIndex];

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % scenarios.length),
      6500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#050509] overflow-hidden border-t border-[#1A73E8]/20">
      {/* ------------------------------------------------------------------
          BACKGROUND: DARK SR PANEL + BLUE GRID LINES ONLY
      ------------------------------------------------------------------ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dark base with very light neutral vignette (no blue wash) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top, rgba(255,255,255,0.03), transparent 55%), radial-gradient(circle at bottom, rgba(0,0,0,0.6), #050509 70%)",
          }}
        />

        {/* Static SR blue grid, subtle parallax drift */}
        <motion.div
          className="absolute inset-0 opacity-[0.16]"
          animate={{ x: ["0%", "-2%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(26,115,232,0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(26,115,232,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Soft neutral spotlight behind phone (white-ish, not blue) */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[460px] h-[460px] rounded-full opacity-[0.18] blur-[120px] mix-blend-screen"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
          }}
        />
      </div>

      {/* ------------------------------------------------------------------
          MAIN LAYOUT
      ------------------------------------------------------------------ */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] items-start">
        {/* ----------------------------------------------------------------
            LEFT: ULTRA-REALISTIC SR EDITION IPHONE
        ---------------------------------------------------------------- */}
        <div className="w-full flex justify-center">
          <motion.div
            className="relative w-full max-w-[280px] perspective-[1600px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Device float animation */}
            <motion.div
              className="relative w-full"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* SR Edition Metallic Blue Frame */}
              <motion.div
                className="relative w-full aspect-[9/19.5] rounded-[2.5rem] p-[3px] shadow-[0_28px_80px_rgba(0,0,0,0.85)]"
                style={{
                  background:
                    "linear-gradient(145deg, #4F8DFF, #1A73E8 30%, #111827 70%, #7E3FF2)",
                }}
                whileHover={{
                  rotateX: -10,
                  rotateY: 10,
                  translateY: -4,
                  scale: 1.015,
                }}
                transition={{ type: "spring", stiffness: 190, damping: 17 }}
              >
                {/* Inner metallic lip */}
                <div className="absolute inset-[2px] rounded-[2.35rem] bg-gradient-to-b from-white/35 via-white/5 to-black/60 opacity-55 pointer-events-none" />

                {/* Side buttons (volume / power) */}
                <div className="absolute left-0 top-[80px] h-10 w-[3px] rounded-r-full bg-black/80 opacity-70" />
                <div className="absolute left-0 top-[130px] h-6 w-[3px] rounded-r-full bg-black/80 opacity-60" />
                <div className="absolute right-0 top-[110px] h-12 w-[3px] rounded-l-full bg-black/85 opacity-80" />

                {/* Screen container */}
                <div className="relative h-full w-full rounded-[2.25rem] bg-black border border-[#1F2937] overflow-hidden">
                  {/* Glass reflection overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-35"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.08) 100%)",
                      mixBlendMode: "screen",
                    }}
                  />

                  {/* Inner screen shadow vignette */}
                  <div className="absolute inset-0 rounded-[2.25rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] pointer-events-none" />

                  {/* Dynamic Island */}
                  <div className="absolute top-[14px] left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/90 border border-white/10 shadow-[0_0_18px_rgba(0,0,0,0.9)]">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-black via-[#020617] to-black shadow-[inset_0_0_10px_rgba(255,255,255,0.08)]" />
                  </div>

                  {/* Status bar */}
                  <div className="relative z-20 flex items-center justify-between px-4 pt-8 pb-2 bg-gradient-to-b from-black/40 to-transparent">
                    <div className="flex items-center gap-2 text-xs text-gray-200">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1A73E8]/20">
                        <Sparkles className="h-3 w-3 text-[#1A73E8]" />
                      </span>
                      <span className="font-medium tracking-tight">
                        SR · Visibility Copilot
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <span>9:41</span>
                      <span className="h-1 w-1 rounded-full bg-gray-500" />
                      <span>5G</span>
                    </div>
                  </div>

                  {/* Prompt pill */}
                  <div className="relative z-20 px-4 pt-1">
                    <motion.div
                      key={active.id + "-prompt"}
                      className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/15 px-3 py-1.5 text-[11px] text-gray-100 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.32 }}
                    >
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1A73E8] text-[9px] font-semibold text-white">
                        AI
                      </span>
                      <span className="truncate">{active.prompt}</span>
                    </motion.div>
                  </div>

                  {/* Response panel */}
                  <div className="relative z-20 px-4 pb-4 pt-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.28 }}
                        className="rounded-2xl bg-gradient-to-b from-[#111827] to-[#020617] border border-white/12 px-4 py-4 space-y-3 shadow-[0_0_22px_rgba(15,23,42,0.7)]"
                      >
                        <div className="flex items-center justify-between text-[11px] text-gray-300">
                          <span className="font-semibold tracking-wide text-[#A78BFA]">
                            {active.tag}
                          </span>
                          <span className="inline-flex items-center gap-1 text-gray-400">
                            Visibility plan <ChevronRight className="h-3 w-3" />
                          </span>
                        </div>

                        <p className="text-[11px] text-gray-100 font-medium">
                          {active.title}
                        </p>

                        <ul className="space-y-1.5">
                          {active.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-[10px] text-gray-300"
                            >
                              <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-center gap-1.5 pt-1.5">
                          {scenarios.map((s, idx) => (
                            <span
                              key={s.id}
                              className={
                                "h-1.5 rounded-full transition-all " +
                                (idx === activeIndex
                                  ? "w-5 bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]"
                                  : "w-2 bg-white/20")
                              }
                            />
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom input bar */}
                  <div className="relative z-20 border-t border-white/15 bg-black/85 px-4 py-3 flex items-center gap-2 backdrop-blur-sm">
                    <div className="flex-1 rounded-full bg-white/5 border border-white/12 px-3 py-1.5 text-[11px] text-gray-400 truncate">
                      Ask how to grow with search…
                    </div>
                    <button className="h-7 w-7 rounded-full bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] flex items-center justify-center text-[11px] font-semibold text-white shadow-[0_0_12px_rgba(124,58,237,0.7)]">
                      Go
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ----------------------------------------------------------------
            RIGHT: COPY COLUMN
        ---------------------------------------------------------------- */}
        <div className="space-y-8 relative z-10 max-w-xl">
          <div>
            <p className="text-[11px] tracking-[0.18em] font-semibold text-[#60A5FA] uppercase mb-3">
              What We Do In 6 Seconds
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1A73E8] via-[#4F46E5] to-[#7E3FF2] mb-4">
              Why Brands Hire Us
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Brands hire us because they’re ready for more leads. They want a
              reliable partner who strengthens their authority across every
              corner of the web. There’s a reason we’re the best at what we do —
              here is how we do it.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[11px] tracking-[0.18em] text-[#A5B4FC] font-semibold uppercase mb-1.5">
                What We Do
              </p>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                Improve Visibility Across Every Search
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Driving more qualified leads starts with understanding exactly
                what your buyers want. We study their pain points, map how they
                search, and position your brand as the clear answer. From there,
                we do everything required to win those searches.
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.18em] text-[#A5B4FC] font-semibold uppercase mb-1.5">
                Why It Matters
              </p>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                Make Your Brand The Obvious Best Choice
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Imagine gaining qualified buyers every day, regardless of
                algorithm shifts or market noise. When you show up more
                prominently across the surfaces buyers trust, you place your
                business in the strongest position to earn the click, the call,
                and the customer.
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.18em] text-[#A5B4FC] font-semibold uppercase mb-1.5">
                What You Gain
              </p>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                A Predictable Flow of New Customers and Revenue
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                You get consistent, high-intent demand from the buyers who
                matter most. We turn fragmented visibility across search, AI,
                maps, reviews, and social into a reliable acquisition system
                your leadership team can trust, forecast, and scale with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
