"use client";

import React from "react";
import { motion, easeOut, type Variants } from "framer-motion";
import CountUp from "react-countup";
import { CheckCircle2 } from "lucide-react";
import SRStar from "@/components/ui/SRStar";


/* -------------------------------------------
   Types
-------------------------------------------- */
interface Tile {
  id: string;
  label: string;
  value: string;
  meta: string;
  detail: string;
  tag: string;
}

/* -------------------------------------------
   Helper: Convert values like "128k" → 128000
-------------------------------------------- */
const parseValue = (val: string) => {
  if (val.toLowerCase().includes("k")) {
    return parseFloat(val) * 1000;
  }
  return parseFloat(val);
};

/* -------------------------------------------
   Dashboard Tile Definitions
-------------------------------------------- */
const tiles: Tile[] = [
  {
    id: "visibility",
    label: "Visibility Score",
    value: "91",
    meta: "Last 7 days",
    detail: "Organic • AI answers • Local pack",
    tag: "+18% vs prev.",
  },
  {
    id: "aiMentions",
    label: "AI Mentions",
    value: "134",
    meta: "ChatGPT · Perplexity · Claude",
    detail: "Brand referenced in AI answers",
    tag: "Rising",
  },
  {
    id: "gbp",
    label: "GBP Insights",
    value: "4.7",
    meta: "1.2k reviews",
    detail: "Calls • direction requests • views",
    tag: "Reputation",
  },
  {
    id: "traffic",
    label: "Organic Traffic",
    value: "128k",
    meta: "Rolling 30 days",
    detail: "Search + AI + Local surfaces",
    tag: "+32% YoY",
  },
  {
    id: "siteHealth",
    label: "Site Health",
    value: "98",
    meta: "Overall score",
    detail: "Indexing • speed • UX • security",
    tag: "Healthy",
  },
  {
    id: "keywords",
    label: "Keyword Momentum",
    value: "317",
    meta: "Terms gaining rank",
    detail: "High-intent, revenue-driving queries",
    tag: "Accelerating",
  },
];

/* -------------------------------------------
   Animation Variants
-------------------------------------------- */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.06,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

const positiveIds = ["visibility", "aiMentions", "traffic", "siteHealth", "keywords"];

/* -------------------------------------------
   Tag Renderer (per-metric styling)
-------------------------------------------- */
const renderTag = (tile: Tile, i: number) => {
  const isPositive = positiveIds.includes(tile.id);

  if (isPositive) {
    return (
      <motion.span
        className="rounded-full px-2 py-[2px] text-[10px] border border-emerald-400/60 bg-emerald-500/10 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.45)]"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.06, 1] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.15,
        }}
      >
        {tile.tag}
      </motion.span>
    );
  }

  if (tile.id === "gbp") {
    return (
      <span className="rounded-full px-2 py-[2px] text-[10px] border border-[#1A73E8]/50 bg-[#0B1220] text-[#E8ECFF]/90">
        {tile.tag}
      </span>
    );
  }

  return (
    <span className="rounded-full px-2 py-[2px] text-[10px] border border-white/12 bg-[#0B1220] text-gray-200">
      {tile.tag}
    </span>
  );
};

/* -------------------------------------------
   Right-side visual per tile
-------------------------------------------- */
const renderRightVisual = (tile: Tile, tileIndex: number) => {
  // Gauge for Site Health
  if (tile.id === "siteHealth") {
    return (
      <div className="relative flex items-center justify-center">
        <div className="relative h-14 w-14 rounded-full bg-[#050815] border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.45)]">
          {/* Filled arc */}
          <div className="absolute inset-[3px] rounded-full border-2 border-emerald-400/80 border-t-transparent border-l-transparent rotate-[-35deg]" />
          {/* Inner core */}
          <div className="absolute inset-[10px] rounded-full bg-[#050509] border border-emerald-500/40" />
          {/* Needle glow */}
          <div className="absolute -top-1 left-1/2 h-3 w-[2px] -translate-x-1/2 rotate-[10deg] bg-emerald-400/90 rounded-full shadow-[0_0_18px_rgba(16,185,129,0.95)]" />
          {/* Value */}
          <div className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-emerald-200">
            <CountUp end={parseValue(tile.value)} duration={2.2} />%
          </div>
        </div>
      </div>
    );
  }

  // GBP Stars
  if (tile.id === "gbp") {
    return (
      <div className="flex flex-col items-end gap-1">
        <motion.div
          className="flex"
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {[0, 1, 2, 3, 4].map((idx) => (
            <SRStar key={idx} dimmed={idx === 4} />
          ))}
        </motion.div>
        <span className="text-[10px] text-gray-300">4.7 / 5.0</span>
      </div>
    );
  }

  // Sparklines for all other metrics
  const isPositive = ["visibility", "aiMentions", "traffic", "keywords"].includes(
    tile.id
  );

  return (
    <div className="flex items-end gap-[3px]">
      {Array.from({ length: 9 }).map((_, j) => (
        <motion.span
          key={j}
          className={`w-[3px] rounded-full bg-gradient-to-t ${
            isPositive
              ? "from-emerald-400/10 via-emerald-400/80 to-[#7E3FF2]/80"
              : "from-[#1A73E8]/10 via-[#1A73E8]/60 to-[#7E3FF2]/80"
          }`}
          style={{ height: 6 + (j % 4) * 4 }}
          animate={{
            height: [
              6 + (j % 4) * 4,
              10 + (j % 4) * 4,
              6 + (j % 4) * 4,
            ],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: (tileIndex * 0.25 + j * 0.09) % 1.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* -------------------------------------------
   MAIN COMPONENT
-------------------------------------------- */
export default function EcosystemDashboard() {
  return (
    <section className="relative py-28 bg-[#050509] text-white overflow-hidden">
      {/* Glow Nebula */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[#1A73E8]/20 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-[#7E3FF2]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#1A73E8]/10 blur-3xl" />
      </div>

      {/* Wash Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)] opacity-30 mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT PANEL — DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-[28px] border border-[#1A73E8]/35 bg-gradient-to-b from-[#060714] via-[#060716] to-[#050509] shadow-[0_24px_80px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col"
          >
            {/* Header Bar */}
            <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#060716]/80 backdrop-blur">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                <span className="uppercase tracking-[0.18em] text-[10px]">
                  SEARCH RIVALS OS · LIVE
                </span>
              </div>
              <span className="text-[10px] text-gray-400">
                Connected: GSC · GA4 · GBP · Reviews · AI Signals
              </span>
            </div>

            {/* GRID OF TILES */}
            <div className="relative px-6 pb-6 pt-4 grow">
              <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
                <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                {tiles.map((tile, i) => (
                  <motion.div
                    key={tile.id}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      boxShadow: "0 24px 60px rgba(0,0,0,0.9)",
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="group relative rounded-2xl border border-white/5 bg-[#050712]/80 backdrop-blur-sm px-4 py-4 overflow-hidden"
                  >
                    {/* Hover glow */}
                    <motion.div
                      className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-[#1A73E8]/35 via-transparent to-[#7E3FF2]/35 opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.22, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: i * 0.35,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative flex flex-col gap-2">
                      {/* Label + Tag */}
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
                          {tile.label}
                        </span>
                        {renderTag(tile, i)}
                      </div>

                      {/* Value + Right-side visual */}
                      <div className="flex items-end justify-between gap-4 mt-1">
                        <div>
                          {/* Value formatting per tile */}
                          <div className="text-2xl font-semibold tracking-tight text-white">
                            {tile.id === "aiMentions" ? (
                              <>
                                +
                                <CountUp
                                  end={parseValue(tile.value)}
                                  duration={2.2}
                                  separator=","
                                />
                              </>
                            ) : tile.id === "gbp" ? (
                              <>
                                <CountUp
                                  end={parseValue(tile.value)}
                                  duration={1.6}
                                  decimals={1}
                                />
                              </>
                            ) : tile.id === "siteHealth" ? (
                              <>
                                <CountUp
                                  end={parseValue(tile.value)}
                                  duration={2.0}
                                />
                                <span className="text-xl align-middle">%</span>
                              </>
                            ) : (
                              <CountUp
                                end={parseValue(tile.value)}
                                duration={2.0}
                                separator=","
                              />
                            )}
                          </div>

                          <div className="text-[11px] text-gray-400">
                            {tile.meta}
                          </div>
                        </div>

                        {renderRightVisual(tile, i)}
                      </div>

                      <div className="mt-1 text-[11px] text-gray-300">
                        {tile.detail}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN TEXT */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight 
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]"
            >
              Manage Search, AI, and Socials in One Dashboard
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              className="mt-5 text-[15px] leading-relaxed text-gray-300 max-w-xl"
            >
              Visibility is not one channel anymore. Buyers discover you across
              organic search, AI answers, local packs, reviews, and social
              conversations that rarely live in one place.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="mt-3 text-[15px] leading-relaxed text-gray-300 max-w-xl"
            >
              Search Rivals OS pulls these signals into a single control panel so
              you can see what is driving rankings, leads, and revenue in real
              time instead of guessing from disconnected reports.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
              className="mt-6 space-y-3 text-[14px] text-gray-200"
            >
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-400" />
                <span>
                  Track live visibility across search, AI answers, local packs,
                  and brand mentions in a single operating view.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-400" />
                <span>
                  See which campaigns, pages, and surfaces are actually moving
                  revenue so you can double down with confidence.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-400" />
                <span>
                  Give your team and leadership one source of truth instead of
                  wrestling with five disconnected dashboards.
                </span>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
