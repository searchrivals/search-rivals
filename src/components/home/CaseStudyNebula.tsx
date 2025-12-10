"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// INDUSTRY-THEMED HOMEPAGE MOCKUPS (CODE-GENERATED)
const industries = [
  {
    id: "cyber",
    label: "Cybersecurity",
    accent: "#1A73E8",
  },
  {
    id: "saas",
    label: "AI SaaS",
    accent: "#E53935",
  },
  {
    id: "legal",
    label: "Injury & Employment Law",
    accent: "#D4AF37",
  },
  {
    id: "msp",
    label: "IT & MSP",
    accent: "#7E3FF2",
  },
  {
    id: "property",
    label: "Property Development",
    accent: "#4A5568",
  },
  {
    id: "industrial",
    label: "Industrial Manufacturing",
    accent: "#6C757D",
  },
  {
    id: "pt",
    label: "Physical Therapy",
    accent: "#38B2AC",
  },
  {
    id: "cannabis",
    label: "Cannabis",
    accent: "#00FF7F",
  },
];

// CODE-GENERATED HOMEPAGE MOCKUP CARD
function IndustryMockup({ label, accent }: { label: string; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.92 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="
        relative w-[360px] sm:w-[420px] md:w-[460px] lg:w-[520px]
        h-[260px] sm:h-[300px] md:h-[330px]
        rounded-3xl overflow-hidden shadow-[0_0_45px_rgba(0,0,0,0.65)]
        backdrop-blur-xl bg-[#0B0C12]/60 border border-white/10
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Neon glow border */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          boxShadow: `0 0 26px ${accent}55`,
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-4 bg-[#0F1118]/60 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[11px] tracking-wider uppercase text-gray-300">
          Live Homepage View
        </span>
      </div>

      {/* Hero band */}
      <div
        className="absolute top-12 left-4 right-4 h-12 rounded-xl opacity-90"
        style={{
          background: `linear-gradient(90deg, ${accent}, #7E3FF2)`,
        }}
      />

      {/* Faux content */}
      <div className="absolute left-4 right-4 top-28 flex flex-col gap-3">
        <div className="h-3 w-4/5 rounded-full bg-white/15" />
        <div className="h-2.5 w-3/5 rounded-full bg-white/10" />
        <div className="h-2.5 w-2/5 rounded-full bg-white/10" />
      </div>

      {/* Metrics */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-200">Search Volume</span>
          <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "80%",
                background: `linear-gradient(90deg, ${accent}, #7E3FF2)`,
              }}
            />
          </div>
        </div>

        {/* Mini bar graph */}
        <div className="flex items-end gap-1 h-14">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="w-2 rounded-full"
              style={{
                height: `${30 + ((i * 18) % 50)}%`,
                background: `linear-gradient(to top, ${accent}80, #7E3FF2AA, white)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Label overlay */}
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <span className="text-[13px] font-semibold text-white">{label}</span>
      </div>
    </motion.div>
  );
}

export default function CaseStudyNebula() {
  const [index, setIndex] = useState(0);

  // Rotate industry every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = industries[index];

  return (
    <section className="relative py-24 bg-[#050509] border-t border-[#1A73E8]/15 overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.22] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Neon bead pulses */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-[6px] h-[6px] rounded-full"
          style={{
            left: `${8 + i * 12}%`,
            top: "-10%",
            background: "radial-gradient(circle, #7E3FF2 0%, #1A73E8 55%, transparent 80%)",
          }}
          animate={{ y: ["0%", "170%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity }}
        />
      ))}

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 mb-12">
        <p className="text-[11px] tracking-[0.22em] uppercase text-[#60A5FA] mb-2">
          Real Markets • Real Competition
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
          How Brands Compete Across Industries
        </h2>

        <p className="text-gray-300 text-sm md:text-base">
          A live, rotating view showing how different industries battle for visibility.
        </p>
      </div>

      {/* Centered indexing mockup */}
      <div className="relative flex justify-center items-center z-10">
        <IndustryMockup
          key={current.id}
          label={current.label}
          accent={current.accent}
        />
      </div>
    </section>
  );
}
