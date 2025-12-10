"use client";

import React from "react";
import { motion } from "framer-motion";

interface LineDrawProps {
  className?: string;
  path: string;
  stroke?: string;
  width?: number;
  delay?: number;
}

export default function LineDraw({
  className = "",
  path,
  stroke = "#1A73E8",
  width = 2,
  delay = 0,
}: LineDrawProps) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 800 200"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth={width}
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 0.9,
            transition: {
              duration: 1.8,
              delay,
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.svg>
  );
}
