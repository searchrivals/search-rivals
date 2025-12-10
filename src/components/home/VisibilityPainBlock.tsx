"use client";

import { motion } from "framer-motion";

export default function VisibilityPainBlock() {
  return (
    <section className="py-32 px-6 md:px-16 w-full relative">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]">
            Maximize Visibility in Search, AI, and Social
          </h2>

          <p className="text-gray-300 mt-6 max-w-xl">
            Losing visibility hurts more now than ever. AI Overviews, shifting ranking
            layouts, and new search formats can wipe out revenue you spent years
            building. If your rankings drop, it isn’t random — it’s a sign your strategy is
            operating in a pre-AI world.
          </p>

          <p className="text-gray-300 mt-4 max-w-xl">
            Search Rivals monitors every place your brand can win or lose visibility —
            AI answers, Google, local results, maps, reviews, and social platforms.
          </p>

          <p className="text-gray-300 mt-4 max-w-xl">
            When something shifts, we respond instantly. Our systems convert every
            signal into tactical moves that restore lost positions, expand your reach,
            and keep competitors from capturing the customers searching for you.
          </p>

          <button className="mt-10 bg-[#1A73E8] hover:bg-[#1559b2] text-white px-8 py-4 text-lg rounded-2xl shadow-lg transition">
            See How We Fix Visibility Loss →
          </button>
        </motion.div>

        {/* RIGHT — VISIBILITY SIGNALS CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-6 bg-[#111]/80 backdrop-blur-xl border border-white/5 
                     shadow-[0_0_60px_-15px_rgba(26,115,232,0.45)]"
        >
          <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-6">
            Visibility Signals
          </h3>

          <div className="space-y-6">

            <SignalItem
              color="#1A73E8"
              title="AI Overview Replacements"
              desc="Detect when AI boxes replace your organic rankings."
            />

            <SignalItem
              color="#A855F7"
              title="Local Pack Volatility"
              desc="Identify drops in Maps visibility before traffic disappears."
            />

            <SignalItem
              color="#22C55E"
              title="Entity & Indexing Changes"
              desc="Monitor semantic rewrites that derail rankings."
            />

            <SignalItem
              color="#F59E0B"
              title="Social Discovery Loss"
              desc="Track drops across Reddit, Quora, TikTok search, and UGC."
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* ----------------------------------------------------
   SIGNAL ITEM COMPONENT
---------------------------------------------------- */

function SignalItem({
  color,
  title,
  desc,
}: {
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
        style={{ backgroundColor: color }}
      ></div>

      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}
