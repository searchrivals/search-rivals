"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

export default function SRMobileCopilot() {
  const steps = [
    {
      prompt: "How do we get our business to rank in search and AI?",
      header: "Elevate Your Visibility Across Every Search Channel",
      bullets: [
        "Reach qualified buyers consistently across search, AI answers, maps, and reviews.",
        "Convert fragmented visibility into a predictable acquisition engine you can scale.",
        "Stop guessing where customers come from and create predictable growth.",
      ],
    },
    {
      prompt: "How do we make buyers choose us over competitors?",
      header: "Make Your Brand The Obvious Best Choice",
      bullets: [
        "Build trust signals your competitors can't match.",
        "Show up higher, more authoritative, and appear more trustworthy everywhere buyers look.",
        "Strengthen your conversion paths so more clicks turn into customers.",
      ],
    },
    {
      prompt: "How do we increase visibility and revenue from search?",
      header: "A Predictable Flow of New Customers and Revenue",
      bullets: [
        "Turn modern search into a reliable pipeline of high-intent demand.",
        "Unify search, AI, maps, reviews, and social into one acquisition system.",
        "Give your leadership a forecastable, scalable growth engine.",
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const current = steps[step];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [step, autoPlay]);

  const nextStep = () => {
    setAutoPlay(false);
    setStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <div className="relative w-full flex justify-center lg:justify-start mt-10">
      <div className="rounded-[2.25rem] p-[6px] bg-gradient-to-br from-[#1A73E8]/40 via-[#111111] to-[#7E3FF2]/40 shadow-[0_0_80px_-20px_rgba(26,115,232,0.7)]">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="
            w-[440px] md:w-[520px]
            bg-[#050509]
            rounded-[1.9rem]
            border border-white/12
            overflow-hidden
          "
        >
          <div className="relative pt-3 pb-2 bg-[#050509] border-b border-white/10">
            <div className="mx-auto h-5 w-40 rounded-full bg-[#101014] flex items-center justify-between px-4 text-[10px] text-gray-400">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-[10px] rounded-[3px] bg-white/60" />
                <span>5G</span>
              </span>
            </div>
            <div className="mt-2 flex justify-between px-4 text-[11px] text-gray-400">
              <span className="font-medium text-gray-300">
                SR • Visibility Copilot
              </span>
              <span>Secure • Live</span>
            </div>
          </div>

          <div className="px-4 pt-5">
            <motion.div
              key={current.prompt}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="
                inline-block
                bg-[#14141A]
                text-gray-200
                text-sm
                px-4 py-3
                rounded-2xl
                max-w-[94%]
                leading-snug
                whitespace-normal
                break-words
              "
            >
              {current.prompt}
            </motion.div>
          </div>

          <div className="px-4 pt-4 pb-6">
            <motion.div
              key={current.header}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="
                bg-[#0B0B11]
                border border-white/12
                rounded-2xl
                p-5
                text-gray-200
              "
            >
              <h3 className="text-base md:text-[17px] font-semibold text-white mb-3">
                {current.header}
              </h3>

              <ul className="space-y-2.5">
                {current.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span className="mt-[3px]">
                      <ArrowUpCircle className="w-3.5 h-3.5 text-[#1A73E8]" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="px-4 pb-4">
            <div className="flex items-center bg-[#101018] border border-white/12 rounded-full px-4 py-3">
              <span className="text-gray-500 text-sm flex-1">
                Ask how to grow with search…
              </span>

              <button
                onClick={nextStep}
                className="
                  flex items-center gap-1
                  bg-[#1A73E8]
                  hover:bg-[#1667d8]
                  text-white
                  rounded-full
                  px-3.5 py-1.5
                  text-xs md:text-sm
                  font-semibold
                  transition-all
                "
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
