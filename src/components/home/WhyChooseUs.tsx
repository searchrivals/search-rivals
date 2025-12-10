"use client";

import CEOContactCTA from "@/components/forms/CEOContactCTA";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#050509] border-t border-[#1A73E8]/15">
      <div
        className="
          relative 
          max-w-7xl mx-auto 
          px-6 lg:px-10
          grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]
          gap-12 lg:gap-16 
          items-start
        "
      >

        {/* LEFT BLOCK -------------------------------------------------- */}
        <div>
          <h2
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
              max-w-2xl
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-[#1A73E8]
              to-[#7E3FF2]
              mb-6
            "
          >
            Win More Customers Across Every Search
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl mb-4">
            Buyers move fast across AI answers, search results, reviews, maps, and social, 
            and you win when your brand shows up first and looks like the obvious best choice.
            Search Rivals gives you that advantage. Make your brand visible and impossible 
            to ignore across search so more buyers choose you, not your rivals.   
          </p>

          {/* VALUE BLOCKS ------------------------------------------------ */}
          <div className="space-y-5">

            {/* 1. REAL-TIME SEARCH INTELLIGENCE */}
            <div>
              <h3
                className="
                  text-lg
                  font-semibold
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-[#1A73E8]
                  to-[#7E3FF2]
                  mb-1
                "
              >
                Real-Time Search Intelligence
              </h3>
              <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                We track how buyers find you across search, AI answers, maps, 
                and reviews and act before shifts reduce your visibility or 
                revenue.
              </p>
            </div>

            {/* 2. WEBSITE AS STRONGEST ASSET */}
            <div>
              <h3
                className="
                  text-lg
                  font-semibold
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-[#1A73E8]
                  to-[#7E3FF2]
                  mb-1
                "
              >
                Turn Your Website Into Your Strongest Asset
              </h3>
              <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                If you can imagine it, we can build it with world-class design 
                optimized for search so your site earns trust, ranks with authority, 
                and converts demand on arrival.
              </p>
            </div>

            {/* 3. SENIOR OPERATORS */}
            <div>
              <h3
                className="
                  text-lg
                  font-semibold
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-[#1A73E8]
                  to-[#7E3FF2]
                  mb-1
                "
              >
                Senior Operators on Every Account
              </h3>
              <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                No juniors. No outsourcing. You work directly with the experts
                who built the system, understand high-stakes growth, and deliver
                results you can feel in your pipeline.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT BLOCK — CONTACT CTA FORM -------------------------------- */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md mt-12">
            <CEOContactCTA />
          </div>
        </div>

      </div>
    </section>
  );
}
