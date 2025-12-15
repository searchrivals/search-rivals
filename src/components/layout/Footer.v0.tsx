"use client";

import Link from "next/link";

export default function FooterV0() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-16 pb-14 px-6 md:px-12 lg:px-20">

      {/* -------------------------------------------------- */}
      {/* SECTION: BRAND + MISSION */}
      {/* -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto text-center md:text-left pb-12">
        <h2 className="text-2xl font-semibold mb-3 tracking-tight">Search Rivals</h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
          Search Rivals is the AI SEO Agency built for modern search. 
          We help brands outperform rivals, maximize visibility, and turn 
          search demand into revenue that compounds.
        </p>
      </div>

      <div className="w-full border-t border-white/10 my-10" />

      {/* -------------------------------------------------- */}
      {/* SECTION: QUICK LINKS (STACKED ON MOBILE) */}
      {/* -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto flex flex-col space-y-4 text-center text-gray-300 text-base pb-12">
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
        <Link href="/services" className="hover:text-white transition">Services</Link>
        <Link href="/about" className="hover:text-white transition">About Us</Link>
      </div>

      <div className="w-full border-t border-white/10 my-10" />

      {/* -------------------------------------------------- */}
      {/* SECTION: INDUSTRIES (STACK WRAP) */}
      {/* -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 justify-center md:justify-start pb-12">
        {[
          "Healthcare Marketing","Insurance Marketing","Law Firm SEO","Content Marketing",
          "Local SEO","Multilocation SEO","Omnichannel Marketing","Performance Marketing",
          "Full-Service Marketing","vCMO Services","Finance","Private Equity","SaaS","Start-Ups"
        ].map((i) => (
          <span key={i} className="whitespace-nowrap">{i}</span>
        ))}
      </div>

      <div className="w-full border-t border-white/10 my-10" />

      {/* -------------------------------------------------- */}
      {/* SECTION: LOCATIONS — PUNCH MOBILE STYLE */}
      {/* -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center pb-12">
        {[
          { abbr: "LV", city: "Las Vegas, NV (HQ)" },
          { abbr: "CO", city: "Denver, CO" },
          { abbr: "CHI", city: "Chicago, IL" },
          { abbr: "TX", city: "Dallas, TX" },
          { abbr: "NYC", city: "NYC Metro" }
        ].map((loc) => (
          <div key={loc.abbr}>
            <p className="text-2xl font-semibold tracking-tight">{loc.abbr}</p>
            <p className="text-sm text-gray-400 mt-1">{loc.city}</p>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-white/10 my-10" />

      {/* -------------------------------------------------- */}
      {/* SECTION: CONTACT INFORMATION (STACKED) */}
      {/* -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto text-center space-y-6 text-sm text-gray-400 pb-12">

        <div>
          Search Rivals LLC<br />
          4201 W Rochelle Ave<br />
          Las Vegas, NV 89103<br />
          United States<br />
          <Link href="/" className="text-blue-400 hover:underline">Directions</Link>
        </div>

        <div>
          <a href="tel:+17024185481" className="block hover:text-white">+1 (702) 418-5481</a>
          <Link href="mailto:info@searchrivals.com" className="text-blue-400 hover:underline block">
            info@searchrivals.com
          </Link>
          <Link href="mailto:support@searchrivals.com" className="text-blue-400 hover:underline block">
            support@searchrivals.com
          </Link>
        </div>

        {/* Social placeholders */}
        <div className="flex justify-center space-x-4 pt-4">
          <div className="w-10 h-10 bg-white/5 rounded" />
          <div className="w-10 h-10 bg-white/5 rounded" />
          <div className="w-10 h-10 bg-white/5 rounded" />
        </div>

      </div>

      <div className="w-full border-t border-white/10 my-10" />

      {/* -------------------------------------------------- */}
      {/* SECTION: LEGAL + YEAR + LINKS */}
      {/* -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-3 text-xs text-gray-500">

        <div className="text-center">
          © Copyright 2025 Search Rivals Marketing, LLC<br />
          Founded 2025
        </div>

        <div className="flex space-x-4 pt-1">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <span>|</span>
          <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
        </div>

      </div>

      {/* Tagline */}
      <div className="w-full border-t border-white/10 mt-12 pt-6 pb-4 text-center text-lg font-semibold opacity-60">
        Outrank Rivals. Own the Search.
      </div>
    </footer>
  );
}
