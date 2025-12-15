'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react'

type FooterLink = { label: string; href: string }
type FooterGroup = { title: string; links: FooterLink[] }

const GROUPS: FooterGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'Company', href: '/company' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI SEO', href: '/services' },
      { label: 'Local Visibility', href: '/services' },
      { label: 'Competitive Intelligence', href: '/services' },
      { label: 'Website + Conversion', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Free Audit', href: '/contact' },
    ],
  },
]

const LOCATIONS = [
  { code: 'LV', city: 'Las Vegas, NV (HQ)' },
  { code: 'CO', city: 'Denver, CO' },
  { code: 'TX', city: 'Austin, TX' },
]

export default function FooterV0() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-blue-500/15 to-transparent blur-2xl" />

      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-10">
        {/* CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h3 className="text-balance text-xl font-semibold text-white">
                Ready To Outrank Your Rivals?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                Get a fast, clear visibility audit and a prioritized roadmap. No fluff.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full px-5">
                <Link href="/contact">
                  Get Free Audit <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="rounded-full border-white/15 bg-transparent px-5 text-white hover:bg-white/5">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Locations (mobile: horizontal scroll / desktop: grid) */}
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/80">Locations</p>
            <span className="text-xs text-white/45">Remote Friendly</span>
          </div>

          <div className="mt-3 -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
            {LOCATIONS.map((l) => (
              <div
                key={l.code}
                className="min-w-[240px] flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:min-w-0"
              >
                <div className="text-4xl font-semibold tracking-tight text-white">{l.code}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/55">{l.city}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav groups (mobile: accordions / desktop: columns) */}
        <div className="mt-8 grid gap-6 sm:grid-cols-4">
          {/* Brand block */}
          <div className="sm:col-span-1">
            <div className="text-lg font-semibold text-white">
              Search <span className="text-blue-500">Rivals</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Manage visibility across search, AI answers, maps, reviews, and social discovery.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:hello@searchrivals.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/80 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                hello@searchrivals.com
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/80 hover:bg-white/5"
              >
                <MapPin className="h-4 w-4" />
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop columns */}
          <div className="hidden gap-6 sm:col-span-3 sm:grid sm:grid-cols-3">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <p className="text-sm font-medium text-white/85">{g.title}</p>
                <ul className="mt-3 space-y-2">
                  {g.links.map((lnk) => (
                    <li key={lnk.label}>
                      <Link
                        href={lnk.href}
                        className="text-sm text-white/65 hover:text-white"
                      >
                        {lnk.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile accordions */}
          <div className="sm:hidden">
            <div className="space-y-2">
              {GROUPS.map((g) => (
                <details
                  key={g.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <summary className="cursor-pointer list-none text-sm font-medium text-white/85">
                    {g.title}
                    <span className="float-right text-white/40 group-open:rotate-180">⌄</span>
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {g.links.map((lnk) => (
                      <li key={lnk.label}>
                        <Link
                          href={lnk.href}
                          className="text-sm text-white/65 hover:text-white"
                        >
                          {lnk.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Search Rivals. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-white/45 hover:text-white/80">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-white/45 hover:text-white/80">
              Terms
            </Link>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/45 hover:text-white/80"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
