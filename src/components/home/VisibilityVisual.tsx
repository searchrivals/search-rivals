"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VisibilityVisual({ index }: { index: number }) {
  const animations = [
    // 1 — Rankings Suddenly Shift
    {
      id: 0,
      glow: "from-[#1A73E8]/40 to-[#7E3FF2]/30",
      title: "Ranking Volatility Detected",
      description: "Search layouts shifting due to AI rewrites and SERP changes.",
    },

    // 2 — AI Engines Skip Your Brand
    {
      id: 1,
      glow: "from-[#7E3FF2]/40 to-[#1A73E8]/30",
      title: "AI Entity Mismatch",
      description:
        "AI engines selecting higher-authority competitors for generative answers.",
    },

    // 3 — Brands Fall Behind
    {
      id: 2,
      glow: "from-[#1A73E8]/25 to-[#1A73E8]/10",
      title: "Signals Outdated",
      description:
        "Indexing slowdowns, broken signals, and missing content relationships.",
    },

    // 4 — How Search Rivals Helps You Win
    {
      id: 3,
      glow: "from-[#7E3FF2]/40 to-emerald-400/20",
      title: "Visibility Strengthened",
      description:
        "AI-aligned fixes applied, signals rebuilt, rankings regain stability.",
    },
  ];

  const current = animations[index] ?? animations[0];

  return (
    <motion.div
      key={current.id}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white/3 rounded-[32px] border border-white/10 backdrop-blur-xl 
      p-10 min-h-[420px] flex flex-col justify-center overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.35)]"
    >
      {/* Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${current.glow} blur-3xl opacity-40`}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        animate={{ opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          className="text-2xl font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {current.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-[15px] max-w-md"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {current.description}
        </motion.p>

        {/* Mini animated bars */}
        <div className="mt-8 grid grid-cols-12 gap-1 h-24">
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.div
              key={i}
              className="rounded-full bg-gradient-to-t from-[#1A73E8]/40 via-[#7E3FF2]/60 to-white/90"
              animate={{
                height: [
                  `${20 + (i % 5) * 8}px`,
                  `${60 + (i % 7) * 8}px`,
                  `${25 + (i % 6) * 8}px`,
                ],
                opacity: [0.4, 1, 0.5],
              }}
              transition={{
                duration: 3 + (i % 5) * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
