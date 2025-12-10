"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function SearchWars() {
  const rivalsRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  const [rivalText, setRivalText] = useState("");

  const fullText = "And Your Rivals Are Winning...";

  // Typewriter only starts when in view
  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const interval = setInterval(() => {
      setRivalText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-[#0A0A0A] text-center overflow-hidden border-t border-[#1A73E8]/20"
    >
      {/* gradient wash */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/25 via-[#7E3FF2]/15 to-transparent opacity-70"
        animate={isInView ? { opacity: [0.5, 0.8, 0.5] } : { opacity: 0 }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* grid texture */}
      <div className="absolute inset-0 bg-[url('/images/search-grid.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      {/* Title */}
      <motion.h2
        className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent 
        bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] drop-shadow-[0_0_25px_rgba(26,115,232,0.5)] mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        The Search Wars Have Begun
      </motion.h2>

      {/* Typewriter Text */}
      <div className="relative inline-block mt-4">
        <motion.p
          ref={rivalsRef}
          className="relative text-5xl md:text-6xl font-extrabold tracking-wide 
          text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 
          drop-shadow-[0_0_20px_rgba(126,63,242,0.3)] z-10"
          style={{ whiteSpace: "pre" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {rivalText}
          {isInView && (
            <motion.span
              className="text-[#1A73E8]"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          )}
        </motion.p>
      </div>
    </section>
  );
}
