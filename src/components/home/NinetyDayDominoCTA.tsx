"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NinetyDayCTA() {
  return (
    <section className="relative py-10 md:py-12 overflow-hidden bg-[#050509] border-t border-[#1A73E8]/15">
      
      {/* ========================== */}
      {/*        GRID BACKGROUND     */}
      {/* ========================== */}
      <div className="absolute inset-0 opacity-[0.38] pointer-events-none">

        {/* Base grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.065) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* ========================================== */}
        {/*       YOUR ADDED ANIMATED NEON STREAKS     */}
        {/* ========================================== */}

        {/* Vertical streaks */}
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div
            key={`vs-${i}`}
            className="absolute w-[4px] h-32 rounded-full bg-gradient-to-b from-[#7E3FF2] via-[#1A73E8] to-transparent blur-[1.5px]"
            style={{
              left: `${8 + i * 14}%`,
              top: "-20%",
            }}
            animate={{ y: ["0%", "150%"] }}
            transition={{
              duration: 2.8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Horizontal streaks */}
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div
            key={`hs-${i}`}
            className="absolute h-[4px] w-32 rounded-full bg-gradient-to-r from-[#1A73E8] via-[#7E3FF2] to-transparent blur-[1.5px]"
            style={{
              top: `${10 + i * 12}%`,
              left: "-20%",
            }}
            animate={{ x: ["0%", "150%"] }}
            transition={{
              duration: 3.2 + i * 0.55,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* ======================================= */}
        {/*     ORIGINAL BEAD-PULSE GRID RUNNERS     */}
        {/* ======================================= */}

        {/* Vertical bead pulses */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-[6px] h-[6px] rounded-full"
            style={{
              left: `${6 + i * 12}%`,
              top: "-10%",
              background: "radial-gradient(circle, #7E3FF2 0%, #1A73E8 55%, transparent 80%)",
              filter: "blur(1px)",
            }}
            animate={{
              y: ["0%", "160%"],
              opacity: [0, 1, 1, 0],
              scale: [0.7, 1, 0.85, 1],
            }}
            transition={{
              duration: 2.4 + i * 0.45,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Horizontal bead pulses */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-[6px] w-[6px] rounded-full"
            style={{
              top: `${12 + i * 10}%`,
              left: "-10%",
              background: "radial-gradient(circle, #1A73E8 0%, #7E3FF2 55%, transparent 80%)",
              filter: "blur(1px)",
            }}
            animate={{
              x: ["0%", "160%"],
              opacity: [0, 1, 1, 0],
              scale: [0.7, 1, 0.85, 1],
            }}
            transition={{
              duration: 2.8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Depth glow wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(26,115,232,0.08),_transparent_60%)]" />
      </div>

      {/* ========================== */}
      {/*        TEXT CONTENT        */}
      {/* ========================== */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">

        <p className="text-[11px] tracking-[0.22em] uppercase text-[#60A5FA] mb-2">
          90-Day Momentum • Guaranteed
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
          Your First 90 Days With Us
        </h2>

        <p className="text-gray-300 text-[13.5px] md:text-base max-w-xl mx-auto">
          See measurable increases in your visibility within 90 days, or your next month is free.
        </p>
      </div>
    </section>
  );
}
