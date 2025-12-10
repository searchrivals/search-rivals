"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ConclusionCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.35,
    once: true,
  });

  return (
    <motion.section
      ref={ref}
      className="relative w-full py-16 bg-[#0B0B0B] text-white border-t border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* SCANLINE MATERIALIZATION */}
      <motion.div
        initial={{ height: "0%", opacity: 0.9 }}
        animate={inView ? { height: "100%", opacity: 0 } : {}}
        transition={{
          duration: 1.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 bg-gradient-to-b from-[#1A73E8]/40 via-[#7E3FF2]/40 to-transparent pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, white 0%, white 60%, transparent 100%)",
        }}
      />

      {/* HOLOGRAPHIC LEFT/RIGHT EXPANSION */}
      <motion.div
        initial={{ scaleX: 0.35, opacity: 0.25 }}
        animate={inView ? { scaleX: 1, opacity: 0 } : {}}
        transition={{
          duration: 1.15,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#1A73E8]/50 via-[#7E3FF2]/40 to-transparent pointer-events-none"
        style={{
          transformOrigin: "center",
          maskImage:
            "linear-gradient(to right, transparent 0%, white 40%, white 60%, transparent 100%)",
        }}
      />

      {/* DIGITAL SHIMMER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 0.3, 0] } : {}}
        transition={{
          duration: 0.65,
          delay: 0.4,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light pointer-events-none"
      />

      {/* GLOW BLOOMS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={inView ? { opacity: 0.55, scale: 1.3 } : {}}
        transition={{
          duration: 1.4,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 mx-auto my-auto w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#1A73E8]/40 via-[#7E3FF2]/30 to-transparent blur-[130px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 0.35, scale: 1.1 } : {}}
        transition={{
          duration: 1.3,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 w-[420px] h-[420px] mx-auto my-auto rounded-full bg-gradient-to-br from-[#1A73E8]/60 via-[#7E3FF2]/60 to-transparent blur-[90px]"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="relative max-w-6xl mx-auto px-6 text-center space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.5 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Ready to Outrank Every Competitor in Your Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.65 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
        >
          Your competitors aren’t slowing down and the AI-First Web is evolving fast.
          Let’s build the system that puts you permanently ahead.
        </motion.p>

        <motion.a
          href="#audit"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.75, delay: 0.75 }}
          className="inline-block mt-6 px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all font-medium text-lg shadow-[0_0_25px_rgba(26,115,232,0.45)] hover:shadow-[0_0_35px_rgba(26,115,232,0.65)]"
        >
          Get Your Free 90-Day Visibility Audit
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
