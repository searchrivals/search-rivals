"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SRStar({ dimmed = false }) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className="mx-0.5"
      initial={{ opacity: dimmed ? 0.35 : 1 }}
      animate={{
        opacity: dimmed ? 0.35 : 1,
        scale: [1, 1.04, 1],
        filter: [
          "drop-shadow(0 0 3px rgba(26,115,232,0.25))",
          "drop-shadow(0 0 6px rgba(126,63,242,0.35))",
          "drop-shadow(0 0 3px rgba(26,115,232,0.25))",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <defs>
        <linearGradient id="srGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A73E8" />
          <stop offset="100%" stopColor="#7E3FF2" />
        </linearGradient>

        {/* Shimmer highlight */}
        <linearGradient id="srShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.75)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        <mask id="shimmerMask">
          <rect width="24" height="24" fill="white" />
        </mask>
      </defs>

      {/* Base star */}
      <path
        fill="url(#srGradient)"
        d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"
      />

      {/* Shimmer sweep overlay */}
      <motion.rect
        width="24"
        height="24"
        fill="url(#srShimmer)"
        mask="url(#shimmerMask)"
        animate={{
          x: ["-150%", "150%"],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatDelay: 15,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
