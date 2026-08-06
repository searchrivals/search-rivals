"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";

export default function FooterV1() {
  const revealRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLLIElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <footer className="w-full max-w-full overflow-hidden bg-black text-white border-t border-white/10 pt-32 pb-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* ====================================================== */}
        {/* ROW 1 — BRAND + SERVICES + INDUSTRIES */}
        {/* ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-24">

          {/* BRAND STORY */}
          <div className="space-y-6 max-w-xl md:col-span-2">
            <h2 className="text-6xl font-bold leading-[1.05] tracking-tight">
              Search <span className="text-[#1A73E8]">Rivals</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Search Rivals is the AI SEO Agency built for modern search.
              We help brands outrank rivals, maximize visibility across 
              every search channel, and turn search visibility into revenue
              that compounds.
            </p>

            <div className="flex items-center space-x-5 pt-2">
              <Link
                href="/contact"
                className="border border-white/40 px-6 py-2.5 text-sm rounded hover:bg-white hover:text-black transition"
              >
                Contact Us
              </Link>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="text-white/60 hover:text-white transition text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="md:pl-4 lg:pl-10 xl:pl-12">
            <h3 className="text-xs tracking-widest mb-4 font-semibold bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] text-transparent bg-clip-text">
              SERVICES
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                "AI SEO",
                "AI Web Design",
                "Branding",
                "Content Marketing",
                "Local SEO",
                "Multilocation SEO",
                "Omnichannel Marketing",
                "Performance Marketing",
                "Full-Service Marketing",
                "vCMO Services",
              ].map((item, i) => (
                <li
                  key={i}
                  ref={addToRefs}
                  className={`reveal-item reveal-delay-${i} text-gray-300 transition duration-200 cursor-pointer 
                    hover:text-transparent hover:bg-clip-text 
                    hover:bg-gradient-to-r hover:from-[#1A73E8] hover:to-[#7E3FF2]
                    hover:drop-shadow-[0_0_6px_#7E3FF2]`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div className="lg:pl-20">
            <h3 className="text-xs tracking-widest mb-4 font-semibold bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] text-transparent bg-clip-text">
              INDUSTRIES
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                "B2B",
                "eCommerce",
                "Enterprise",
                "Finance",
                "Healthcare",
                "Insurance",
                "Law Firm",
                "Private Equity",
                "SaaS",
                "Start-Ups",
              ].map((item, i) => (
                <li
                  key={i}
                  ref={addToRefs}
                  className={`reveal-item reveal-delay-${i + 12} text-gray-300 transition duration-200 cursor-pointer
                    hover:text-transparent hover:bg-clip-text 
                    hover:bg-gradient-to-r hover:from-[#1A73E8] hover:to-[#7E3FF2]
                    hover:drop-shadow-[0_0_6px_#7E3FF2]`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 pb-12" />

        {/* ====================================================== */}
        {/* ROW 2 — GEO LOCATIONS */}
        {/* ====================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center pb-12">
          {[
            ["LV", "Las Vegas, NV (HQ)"],
            ["CO", "Denver, CO"],
            ["CHI", "Chicago, IL"],
            ["TX", "Dallas, TX"],
            ["NYC", "NYC Metro"],
          ].map(([abbr, city]) => (
            <div key={abbr}>
              <p className="text-5xl font-semibold">{abbr}</p>
              <p className="text-xs text-gray-400 uppercase">{city}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 pb-12" />

        {/* ====================================================== */}
        {/* ROW 3 — ADDRESS + CONTACT + SOCIAL + REVIEWS */}
        {/* ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 items-center">

          <div className="text-sm text-gray-300 leading-relaxed">
            <p>Search Rivals LLC</p>
            <p>4201 W Rochelle Ave</p>
            <p>Las Vegas, NV 89103</p>
            <p>United States</p>
          </div>

          <div className="text-sm text-gray-300 space-y-1">
            <p className="font-semibold text-white">+1 (702) 418-5481</p>
            <Link href="mailto:info@searchrivals.com" className="text-blue-400 hover:underline block">
              info@searchrivals.com
            </Link>
            <Link href="mailto:support@searchrivals.com" className="text-blue-400 hover:underline block">
              support@searchrivals.com
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-6 text-white/80 text-2xl">
            <FaFacebookF className="hover:text-white transition cursor-pointer" />
            <FaInstagram className="hover:text-white transition cursor-pointer" />
            <FaTiktok className="hover:text-white transition cursor-pointer" />
            <FaYoutube className="hover:text-white transition cursor-pointer" />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-300 mb-1">Google Business Reviews</p>
            <p className="text-xl font-semibold bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] text-transparent bg-clip-text">
              ★★★★★
            </p>
          </div>
        </div>

        {/* ====================================================== */}
        {/* ROW 4 — PREMIUM MARQUEE */}
        {/* ====================================================== */}
        <div className="relative overflow-hidden border-t border-white/10 border-b border-white/10 py-8 mb-12">

          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="whitespace-nowrap flex items-center animate-marquee">
            <span className="marquee-text text-[6rem] md:text-[7rem] font-semibold">
              Outrank Rivals. Own The Search. Outrank Rivals. Own The Search. Outrank Rivals. Own The Search.&nbsp;
            </span>
            <span className="marquee-text text-[6rem] md:text-[7rem] font-semibold">
              Outrank Rivals. Own The Search. Outrank Rivals. Own The Search. Outrank Rivals. Own The Search.&nbsp;
            </span>
          </div>

        </div>

        {/* ====================================================== */}
        {/* ROW 5 — COPYRIGHT */}
        {/* ====================================================== */}
        <div className="flex flex-col md:flex-row justify-between text-xs text-gray-500 pt-6">
          <span>© Copyright 2025 Search Rivals LLC | Founded 2025</span>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 md:mt-0">
            <Link href="/cookies" className="hover:text-white">Cookies Disclaimer</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
