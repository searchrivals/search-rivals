'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Globe, ChevronDown } from "lucide-react"
import { client } from "@/sanity/sanity.client"

/* ---------------------------------------
   GLOBAL CURSOR LIGHT (subtle radial glow)
----------------------------------------*/
function useLightFollow() {
  useEffect(() => {
    const root = document.documentElement
    const move = (e: MouseEvent) => {
      root.style.setProperty('--x', e.clientX + 'px')
      root.style.setProperty('--y', e.clientY + 'px')
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
}

/* ---------------------------------------
   TILT CARD (hover depth micro-interaction)
----------------------------------------*/
function TiltCard({ children }: { children: React.ReactNode }) {
  const r = useRef<HTMLDivElement | null>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = r.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (py - 0.5) * -12
    const rotY = (px - 0.5) * 12
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
    el.style.boxShadow = `0 8px 32px rgba(26,115,232,0.35)`
  }
  const onLeave = () => {
    const el = r.current
    if (!el) return
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`
    el.style.boxShadow = `0 4px 16px rgba(26,115,232,0.15)`
  }
  return (
    <div ref={r} onMouseMove={onMove} onMouseLeave={onLeave} className="transition-all duration-300 will-change-transform shadow-md hover:shadow-lg">
      {children}
    </div>
  )
}

/* ---------------------------------------
   OPTIONAL LINE DRAW (accent connector)
----------------------------------------*/
function LineDraw({ className = '', path, stroke = '#1A73E8', width = 2, delay = 0 }: { className?: string; path: string; stroke?: string; width?: number; delay?: number }) {
  return (
    <motion.svg className={className} viewBox="0 0 800 200" aria-hidden initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}>
      <motion.path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth={width}
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 0.9, transition: { duration: 1.8, delay, ease: 'easeInOut' } }
        }}
      />
    </motion.svg>
  )
}

/* ---------------------------------------
   LAVA FIELD (global background canvas)
   - emissive plasma blobs + particles
----------------------------------------*/
function LavaField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d', { alpha: true })!
    let w = (c.width = window.innerWidth)
    let h = (c.height = window.innerHeight)

    const resize = () => {
      w = c.width = window.innerWidth
      h = c.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const blobs = Array.from({ length: 7 }).map((_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 140 + Math.random() * 140,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      phase: Math.random() * Math.PI * 2,
      speed: 0.005 + Math.random() * 0.01,
      hue: i % 2 === 0 ? 262 : 214 // purple/blue alternation
    }))

    const particles = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      s: Math.random() * 1.6 + 0.4,
      v: Math.random() * 0.4 + 0.1,
      a: Math.random() * Math.PI * 2
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = 'rgba(10,10,10,0.6)'
      ctx.fillRect(0, 0, w, h)

      // emissive particles
      ctx.globalCompositeOperation = 'screen'
      particles.forEach(p => {
        p.x += Math.cos(p.a) * p.v
        p.y += Math.sin(p.a) * p.v
        p.a += 0.002
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 18 * p.s)
        g.addColorStop(0, 'rgba(255,255,255,0.08)')
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, 18 * p.s, 0, Math.PI * 2)
        ctx.fill()
      })

      // lava blobs
      blobs.forEach(b => {
        b.phase += b.speed
        b.x += b.dx + Math.cos(b.phase) * 0.3
        b.y += b.dy + Math.sin(b.phase * 0.9) * 0.3
        if (b.x < -b.r || b.x > w + b.r) b.dx *= -1
        if (b.y < -b.r || b.y > h + b.r) b.dy *= -1

        const core = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * 0.65)
        core.addColorStop(0, `hsla(${b.hue}, 90%, 60%, 0.45)`)
        core.addColorStop(0.5, `hsla(${b.hue === 262 ? 214 : 262}, 90%, 55%, 0.3)`)
        core.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = core
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r * 0.9, 0, Math.PI * 2)
        ctx.fill()

        const halo = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * 1.15)
        halo.addColorStop(0, `hsla(${b.hue}, 100%, 70%, 0.1)`)
        halo.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = halo
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r * 1.15, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(draw)
    }

    draw()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return <canvas ref={ref} className="w-full h-full block" />
}

/* ---------------------------------------
   CLIENT PARTICLE FIELD (to avoid hydration mismatch)
----------------------------------------*/
function ClientParticleField() {
  const [particleStyles, setParticleStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...Array(80)].map(() => ({
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.15 + Math.random() * 0.3,
      filter: 'blur(0.5px)',
    }));
    setParticleStyles(styles);
  }, []);

  if (particleStyles.length === 0) {
    // Server-side placeholder (static non-random styles to match hydration)
    return (
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#1A73E8] rounded-full shadow-[0_0_8px_#1A73E8]"
            style={{
              width: '2px',
              height: '2px',
              top: '50%',
              left: '50%',
              opacity: 0.3,
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: [0, 0],
              y: [0, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 8px rgba(26,115,232,0.5)',
                '0 0 12px rgba(126,63,242,0.7)',
                '0 0 8px rgba(26,115,232,0.5)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 0,
            }}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {particleStyles.map((style, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#1A73E8] rounded-full shadow-[0_0_8px_#1A73E8]"
          style={style}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 8px rgba(26,115,232,0.5)',
              '0 0 12px rgba(126,63,242,0.7)',
              '0 0 8px rgba(26,115,232,0.5)',
            ],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
}

/* ---------------------------------------
   PAGE
----------------------------------------*/
export default function HomePage() {
  useLightFollow()
    const [cmsData, setCmsData] = useState<any>(null)

  useEffect(() => {
    async function getData() {
      const data = await client.fetch(`*[_type == "homepage"][0]{
        headline,
        subheadline,
        ctaPrimary,
        ctaSecondary
      }`)
      setCmsData(data)
    }
    getData()
  }, [])

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [searchIndex, setSearchIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [rivalText, setRivalText] = useState('')
  const [isEnglish, setIsEnglish] = useState(true)
  const pageRef = useRef<HTMLDivElement | null>(null)
  const rivalsRef = useRef<HTMLParagraphElement | null>(null)
  const rivalsInView = useInView(rivalsRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: pageRef, offset: ['start start', 'end end'] })
  const particlesOpacity = useTransform(scrollYProgress, [0, 1], [0.22, 0.08])

  const englishPrompts = [
    'How do I get my business higher on Google?',
    'How do I rank higher in AI search results?',
    'How do I rank higher on Google Maps?',
    'Why am I getting traffic but no leads?',
    'How do I turn search traffic into revenue?',
    'How do I show up in Google’s AI Overviews?',
    'How do I get more business reviews on Google?',
    'How do I outrank my competitors on Google?',
    'Why isn’t my website showing up on Google?',
    'How long does it take to rank on Google?',
    'How do I appear on the first page of Google?',
    'How do I optimize my Google Business Profile?',
    'How do I convert more visitors into paying customers?',
    'How do I make my business visible in ChatGPT or other AI tools?',
    'How do I measure SEO ROI?',
    'How do I improve my local search rankings?',
    'How do I get more qualified leads from search?',
    'How do I future-proof my SEO for AI search?',
    'How do I build authority in my niche?',
    'Why is my site ranking lower than my competitors?'
  ]

  const spanishPrompts = [
    '¿Cómo posiciono mi negocio más alto en Google?',
    '¿Cómo clasifico más alto en resultados de búsqueda de IA?',
    '¿Cómo clasifico más alto en Google Maps?',
    '¿Por qué recibo tráfico pero no leads?',
    '¿Cómo convierto el tráfico de búsqueda en ingresos?',
    '¿Cómo aparezco en las Overviews de IA de Google?',
    '¿Cómo obtengo más reseñas de negocios en Google?',
    '¿Cómo supero a mis competidores en Google?',
    '¿Por qué no aparece mi sitio web en Google?',
    '¿Cuánto tiempo toma clasificar en Google?',
    '¿Cómo aparezco en la primera página de Google?',
    '¿Cómo optimizo mi Perfil de Negocio de Google?',
    '¿Cómo convierto más visitantes en clientes pagadores?',
    '¿Cómo hago visible mi negocio en ChatGPT u otras herramientas de IA?',
    '¿Cómo mido el ROI de SEO?',
    '¿Cómo mejoro mis clasificaciones de búsqueda local?',
    '¿Cómo obtengo más leads calificados de búsqueda?',
    '¿Cómo preparo mi SEO para la búsqueda de IA futura?',
    '¿Cómo construyo autoridad en mi nicho?',
    '¿Por qué mi sitio clasifica más bajo que mis competidores?'
  ]

  const prompts = isEnglish ? englishPrompts : spanishPrompts

  // typing effect (hero)
  useEffect(() => {
    let charIndex = 0
    let interval: NodeJS.Timeout
    const typeEffect = () => {
      const currentPrompt = prompts[searchIndex]
      setTypedText(currentPrompt.slice(0, charIndex))
      charIndex++
      if (charIndex > currentPrompt.length) {
        clearInterval(interval)
        setTimeout(() => {
          setSearchIndex((p) => (p + 1) % prompts.length)
          setTypedText('')
        }, 2000)
      }
    }
    interval = setInterval(typeEffect, 50)
    return () => clearInterval(interval)
  }, [searchIndex, isEnglish])

  // "And Your Rivals Are Winning…"
  useEffect(() => {
    if (!rivalsInView) return
    const text = isEnglish ? 'And Your Rivals Are Winning…' : 'Y Tus Rivales Están Ganando…'
    let charIndex = 0
    let interval: NodeJS.Timeout
    const typeText = () => {
      setRivalText(text.slice(0, charIndex))
      charIndex++
      if (charIndex > text.length) clearInterval(interval)
    }
    interval = setInterval(typeText, 85)
    return () => clearInterval(interval)
  }, [rivalsInView, isEnglish])

  return (
    <div ref={pageRef} className="relative bg-[#0A0A0A] text-white min-h-screen font-sans overflow-x-clip">
      {/* GLOBAL CURSOR-REACTIVE LIGHT */}
      <style jsx global>{`
        :root::before {
          content: "";
          position: fixed;
          inset: 0;
          background: radial-gradient(420px circle at var(--x) var(--y),
            rgba(26,115,232,0.18), rgba(126,63,242,0.1) 35%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      {/* GLOBAL BACKGROUND: lava field visible ACROSS ALL SECTIONS */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <LavaField />
        {/* slight veil to keep contrast for text/UI */}
        <div className="absolute inset-0 bg-[#0A0A0A]/55 backdrop-blur-[1px] mix-blend-screen" />
      </div>

      {/* Floating micro-particles layer */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ opacity: particlesOpacity }}
      >
        {[...Array(28)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#1A73E8] rounded-full"
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              top: `${(i * 139) % 100}%`,
              left: `${(i * 67) % 100}%`,
              opacity: 0.16,
            }}
            animate={{ y: ['10%', '-120%'], opacity: [0.12, 0.28, 0.06] }}
            transition={{
              duration: 7 + (i % 5),
              repeat: Infinity,
              ease: 'easeOut',
              delay: (i % 7) * 0.35,
            }}
          />
        ))}
      </motion.div>

      {/* Electrically Charged Particle Field - Fixed with client-only random */}
      <ClientParticleField />

{/* ===================== HERO ===================== */}
<section className="relative flex flex-col items-center justify-center text-center py-32 px-6 z-10">
  <motion.h1
    className="text-5xl md:text-7xl font-extrabold max-w-5xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {cmsData?.headline || "Outrank Rivals. Own The Search."}
  </motion.h1>

  <motion.p
    className="text-lg md:text-2xl text-gray-300 max-w-3xl mt-6"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    {cmsData?.subheadline || "Turn search into your most profitable channel with Search Rivals. We attract your highest-value customers at the exact moment they’re ready to buy."}
  </motion.p>

  {/* Language Toggle */}
  <button
    onClick={() => setIsEnglish(!isEnglish)}
    className="flex items-center text-gray-400 hover:text-white mt-8"
  >
    <Globe className="w-4 h-4 mr-2" /> {isEnglish ? 'Español' : 'English'}
  </button>

  {/* Search Box Animation */}
  <motion.div
    className="relative mt-8 w-[90%] max-w-[680px] mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.3 }}
  >
    <div className="relative bg-white/10 backdrop-blur-md border border-[#1A73E8]/30 rounded-full shadow-lg flex items-center px-6 py-4 overflow-hidden">
      <Search className="w-5 h-5 text-[#B0B0B0] mr-4 flex-shrink-0" strokeWidth={2} />
      <motion.span
        className="text-gray-200 text-lg md:text-xl whitespace-nowrap truncate text-left flex-1"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {typedText}
        <span className="animate-pulse text-[#1A73E8]">|</span>
      </motion.span>
    </div>
    <div className="absolute inset-0 rounded-full bg-[#1A73E8]/10 blur-3xl opacity-20 pointer-events-none" />
  </motion.div>

  {/* Primary CTAs */}
  <motion.div
    className="mt-12 flex flex-col sm:flex-row gap-6"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 1 }}
  >
    <motion.div
      whileHover={{ scale: 1.08, boxShadow: '0 0 25px #1A73E8' }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <Button
        size="lg"
        className="bg-[#1A73E8] hover:bg-[#1559b2] text-lg px-10 py-6 rounded-2xl shadow-lg"
      >
        {cmsData?.ctaPrimary || "Get Your Free Audit"}
      </Button>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.08, boxShadow: '0 0 25px #7E3FF2' }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <Button
        size="lg"
        variant="outline"
        className="border-[#7E3FF2] text-[#1A73E8] text-lg px-10 py-6 rounded-2xl"
      >
        {cmsData?.ctaSecondary || "See Our Work"}
      </Button>
    </motion.div>
  </motion.div>
</section>


      {/* ===================== FEATURED ON ===================== */}
      <section className="relative bg-[#0A0A0A] py-12 border-t border-[#1A73E8]/20 overflow-hidden z-10">
        <LineDraw className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] opacity-30"
          path="M 20 100 C 150 0, 650 200, 780 100" width={3} delay={0.1} />
        <motion.div
          className="flex items-center gap-12 opacity-80 will-change-transform"
          style={{ minWidth: '200%' }}
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
        >
          {[
            '/logos/wsj.png','/logos/washpost.png','/logos/foxnews.png','/logos/reuters.png',
            '/logos/usnews.png','/logos/huffpost.png','/logos/forbes.png','/logos/usatoday.png','/logos/cnn.png',
            '/logos/wsj.png','/logos/washpost.png','/logos/foxnews.png','/logos/reuters.png',
            '/logos/usnews.png','/logos/huffpost.png','/logos/forbes.png','/logos/usatoday.png','/logos/cnn.png',
          ].map((src, i) => (
            <motion.img key={i} src={src} alt="Featured Logo" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition" whileHover={{ scale: 1.15 }} />
          ))}
        </motion.div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-24 bg-[#101010] px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2 className="text-4xl font-bold mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            How We Deliver Measurable Growth
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: '/icons/seo-automation.svg', title: 'SEO Automation & Site Infrastructure', desc: 'We automate audits and fixes to keep your site rank-ready. For MSPs: Reduced downtime by 92%.' },
              { icon: '/icons/local-seo.svg', title: 'Local SEO & Geo Ecosystems', desc: 'Dominate maps and listings for walk-ins and calls. For HVAC firms: +312% leads in 6 months.' },
              { icon: '/icons/ai-optimization.svg', title: 'AI / LLM Search Optimization', desc: 'Entity-rich content for AI visibility. For legal firms: Featured in 50+ snippets.' },
              { icon: '/icons/content-systems.svg', title: 'Content Systems & Topical Mapping', desc: 'Intent-aligned clusters for authority. For dental networks: Top 3 in 12 cities.' },
              { icon: '/icons/branding.svg', title: 'Creative Branding & Positioning', desc: 'Convert-focused identities. For eCom: +184% revenue from trust signals.' },
              { icon: '/icons/web-design.svg', title: 'SEO-Friendly Web Design', desc: 'Fast sites with schema for conversions. For cyber clients: +140% conversions.' },
              { icon: '/icons/link-pr.svg', title: 'Link Ecosystem & Digital PR', desc: 'Earned links for equity. For national law: +210% traffic.' },
              { icon: '/icons/marketing-automation.svg', title: 'Marketing Automation', desc: 'Nurture workflows for loyalty. For MSP rollups: 99% site health.' },
              { icon: '/icons/cro.svg', title: 'Conversion Rate Optimization (CRO)', desc: 'Data-driven tests for revenue. Across clients: 30-50% lift average.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(26,115,232,0.3)' }}
                className="relative"
                onHoverStart={() => setHoveredIndex(i)} onHoverEnd={() => setHoveredIndex(null)}
              >
                <TiltCard>
                  <Card className="relative bg-[#181818] border border-[#1A73E8]/10 text-center rounded-2xl shadow-lg overflow-hidden">
                    <CardContent className="p-8 flex flex-col items-center justify-center">
                      <motion.div
                        className="pointer-events-none absolute inset-0 rounded-2xl blur-3xl opacity-0"
                        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(26,115,232,0.25), transparent 60%)' }}
                        animate={hoveredIndex === i ? { opacity: 0.45 } : { opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      />
                      <img src={item.icon} alt="" className="w-12 h-12 mb-4" />
                      <motion.h3 className="text-2xl font-semibold mb-4 text-[#1A73E8] relative z-10" whileHover={{ scale: 1.02 }}>
                        {item.title}
                      </motion.h3>
                      <p className="text-gray-300 leading-relaxed max-w-xs relative z-10">{item.desc}</p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CINEMATIC SEARCH WARS ===================== */}
      <section className="relative py-16 bg-[#0A0A0A] text-center overflow-hidden border-t border-[#1A73E8]/20">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/25 via-[#7E3FF2]/15 to-transparent opacity-70" animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />
        <div className="absolute inset-0 bg-[url('/images/search-grid.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <motion.h2 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] drop-shadow-[0_0_25px_rgba(26,115,232,0.5)] mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          The Search Wars Have Begun
        </motion.h2>
        <div className="relative inline-block mt-4">
          <motion.p ref={rivalsRef} className="relative text-5xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 drop-shadow-[0_0_20px_rgba(126,63,242,0.3)] z-10" style={{ whiteSpace: 'pre' }}>
            {rivalText}
            <motion.span className="text-[#1A73E8]" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
              |
            </motion.span>
          </motion.p>
        </div>
      </section>

      {/* ===================== HOW WE ENGINEER SEARCH WINS ===================== */}
      <section className="py-32 bg-[#0A0A0A] border-t border-[#1A73E8]/20 flex flex-col md:flex-row items-center justify-between gap-16 px-8 lg:px-24">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="md:w-1/2">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] mb-6">
            How We Engineer Search Wins
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Rankings drop because strategies lag. We automate audits and predictive modeling to detect shifts early, turning data into actions that lift ROI 30–50% in 6 months.
          </p>
          <Button className="bg-[#1A73E8] text-lg px-8 py-5 rounded-2xl">See How It Works</Button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/20 via-[#7E3FF2]/10 to-transparent rounded-3xl blur-2xl"></div>
          <motion.img
            src="/images/seo-dashboard-las-vegas.webp" // Updated with Las Vegas overlay
            alt="SEO Dashboard Visualization"
            className="rounded-3xl shadow-2xl relative z-10"
            whileInView={{ scale: [0.98, 1], rotate: [0.4, 0] }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </motion.div>
      </section>

      {/* ===================== PROOF CAROUSEL ===================== */}
      <section className="bg-[#0A0A0A] py-28 text-center border-t border-[#1A73E8]/20 overflow-hidden">
        <h2 className="text-4xl font-bold mb-10">$500M+ Generated for Clients</h2>
        <motion.div className="flex gap-10 w-max mx-auto" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
          {[
            { h: 'HVAC Pros', m: '+312% Leads, 45+ Campaigns Executed' },
            { h: 'National Law Group', m: '+210% Traffic, 3-Year Retention' },
            { h: 'eCom Labs', m: '+184% Revenue, 30–50% ROI Lift' },
            { h: 'Cyber Client', m: '+140% Conversions, Top 3 in 12 Cities' },
            { h: 'Dental Network', m: 'Top 3 in 12 Cities, 47% Lead Growth' },
            { h: 'MSP Rollup', m: 'Site Health 92% → 99%, 50% Time Savings' },
          ].map((it, i) => (
            <motion.div key={i} className="bg-[#181818] px-10 py-8 rounded-2xl border border-[#1A73E8]/10 shadow-lg mx-5 min-w-[320px]">
              <p className="text-2xl font-semibold text-[#1A73E8]">{it.h}</p>
              <p className="text-gray-300 text-lg font-bold mt-1">{it.m}</p>
              <Button variant="outline" className="mt-4 border-[#7E3FF2] text-[#7E3FF2]">View Case Study</Button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===================== ANATOMY ===================== */}
      <section className="py-28 bg-[#0A0A0A] border-t border-[#1A73E8]/20">
        <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] text-center mb-16">
          The Anatomy of Search Dominance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-8">
          {[
            { title: 'AI-Enhanced SEO Systems', desc: 'Automation detects issues early, keeping you ahead. See crawl health improve and rankings rise.' },
            { title: 'Competitive Intelligence', desc: 'We reverse-engineer rivals to uncover gaps, turning insights into actions that outpace them.' },
            { title: 'Local Visibility Networks', desc: 'Geo ecosystems dominate maps, driving calls. Track entry rates and review growth.' },
            { title: 'Conversion Architecture', desc: 'Every click optimized for revenue. Lift CVR with tested journeys and behavioral data.' },
            { title: 'Performance Automation', desc: 'Real-time shifts trigger fixes, ensuring compounding gains. Monitor SLAs and velocity.' },
            { title: 'Authority Compounding', desc: 'Earned links and PR build trust quarterly. Measure domain scores and correlations.' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6, scale: 1.03 }} className="p-8 rounded-2xl bg-[#111]/60 border border-[#1A73E8]/20 backdrop-blur-md">
              <h4 className="text-2xl font-semibold text-[#1A73E8] mb-4">{item.title}</h4>
              <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== OS ===================== */}
      <section className="py-28 bg-[#070707] border-t border-[#1A73E8]/10 text-center relative overflow-hidden">
        <LineDraw className="absolute top-8 left-0 w-full opacity-20" path="M 0 100 C 160 40, 320 160, 480 100 S 800 40, 1000 100" width={2} />
        <h2 className="text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]">The Search Rivals OS</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-10">
          {[
            { title: 'AI Automation Core', desc: 'Triggers detect shifts and deploy fixes, saving 50% on manual time. See real-time logs.' },
            { title: 'Data Intelligence Hub', desc: 'Unifies GSC, GA4, and GBP for clear actions. Track MoM trends and ROI.' },
            { title: 'Creative Engine', desc: 'Behavior-driven content that converts. Measure engagement and authority growth.' },
          ].map((b,i)=>(
            <motion.div key={i} whileHover={{ y:-5, scale:1.02 }} className="p-10 bg-[#111]/80 border border-[#1A73E8]/10 rounded-2xl backdrop-blur-lg text-left">
              <h3 className="text-2xl text-[#1A73E8] font-semibold mb-3">{b.title}</h3>
              <p className="text-gray-300 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== WHY US (NEW FOR DEPTH) ===================== */}
      <section className="py-24 bg-[#101010] border-t border-[#1A73E8]/20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Why 7-8 Figure Businesses Choose Us</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { title: 'No Guesswork Guarantees', desc: 'Month-to-month contracts with clear SLAs—results or we walk.' },
            { title: 'AI Edge for Scale', desc: 'Proprietary tools compound gains; 97% client retention.' },
            { title: 'Niche Mastery', desc: 'Tailored for legal, HVAC, MSPs, dental, cyber—delivering 30-50% ROI lifts.' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-[#181818] p-8 rounded-2xl border border-[#1A73E8]/10 transition">
              <h3 className="text-xl font-semibold text-[#7E3FF2] mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== INSIDE THE ENGINE ===================== */}
      <section className="relative bg-[#050505] py-40 overflow-hidden border-t border-[#1A73E8]/10">
        <motion.div 
          className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-[#1A73E8]/20 via-[#7E3FF2]/10 to-transparent rounded-3xl blur-2xl" />
            <motion.video
              src="/videos/search-engine.mp4"
              autoPlay muted loop playsInline
              className="rounded-3xl border border-[#1A73E8]/20 shadow-2xl relative z-10"
              whileInView={{ scale: [0.99, 1], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 25px 80px rgba(26,115,232,0.25)'] }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] mb-6">
              Inside the Search Rivals Engine
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Complex data slows decisions. Our framework runs simulations to identify opportunities early, making your visibility adaptive and unstoppable.
            </p>
            <ul className="space-y-4 text-gray-400 text-base">
              <li>• Predictive Rank Flow Mapping</li>
              <li>• Automated Site Intelligence</li>
              <li>• Real-Time Keyword Cohesion Modeling</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===================== REAL RESULTS ===================== */}
      <section className="py-24 bg-[#101010] border-t border-[#1A73E8]/20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">Real Results from Our Partners</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: 'Legal Firm SEO', metrics: ['+210% traffic', '+145% conversions', 'Top 3 across 3 metros'], desc: 'Rebuilt digital footprint to dominate high-value keywords.' },
            { title: 'HVAC Local Growth', metrics: ['+312% leads', '+5 map pack rankings', '47% lead lift in 6 months'], desc: 'Expanded visibility across six service areas.' },
            { title: 'National eCommerce', metrics: ['+184% revenue', 'Top 3 for 50+ keywords', '30–50% ROI improvement'], desc: 'Built authority and long-term ranking resilience.' },
          ].map((study, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-[#181818] rounded-2xl p-8 border border-[#1A73E8]/10">
              <h3 className="text-2xl font-semibold text-[#1A73E8] mb-3">{study.title}</h3>
              <p className="text-gray-300 mb-4">{study.desc}</p>
              <ul className="text-gray-400 text-sm">
                {study.metrics.map((m) => <li key={m}>• {m}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== POWERED BY ===================== */}
      <section className="py-16 bg-gradient-to-r from-[#111] via-[#1A73E8]/10 to-[#111] text-center">
        <p className="text-gray-400 mb-6 uppercase tracking-widest">Powered By</p>
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
          {['/logos/semrush.svg','/logos/ahrefs.svg','/logos/ga4.svg','/logos/gsc.svg','/logos/wp.svg'].map((logo,i)=>(
            <img key={i} src={logo} alt="Integration Logo" className="h-10 md:h-12 opacity-60 hover:opacity-100 transition" />
          ))}
        </div>
      </section>

      {/* ===================== RIVAL’S MAP ===================== */}
      <section className="relative py-40 bg-[#0A0A0A] border-t border-[#1A73E8]/20 overflow-hidden">
        <motion.div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#1A73E8]/10 via-[#7E3FF2]/5 to-transparent skew-x-[-12deg]" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 px-8 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:pr-16">
            <h2 className="text-5xl font-extrabold mb-6">
              The Rival’s Map: <span className="text-[#1A73E8]">Where You Win</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Rivals leave gaps we exploit. Our map visualizes investments and neglects, guiding actions to overtake them with precision.
            </p>
            <Button className="bg-[#1A73E8] text-lg px-8 py-5 rounded-2xl">View Demo</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#1A73E8]/10 via-[#7E3FF2]/5 to-transparent blur-2xl" />
            <img src="/images/rival-map-las-vegas.webp" alt="Rival Map Visualization" className="rounded-3xl border border-[#1A73E8]/20 shadow-2xl relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500" /> {/* Updated visual */}
          </motion.div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#1A73E8]/20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Partners Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { quote: 'Search Rivals transformed our SEO. We’re ranking above competitors for the first time.', name: 'Alex M.', company: 'National Legal Group' },
            { quote: 'Their AI optimization actually works — we doubled qualified leads in 90 days.', name: 'Sara T.', company: 'HVAC Pros' },
            { quote: 'The team feels like an extension of ours. Transparent, fast, and strategic.', name: 'Kevin R.', company: 'eCom Labs' },
            { quote: 'From stagnant to dominant—+184% revenue in 6 months.', name: 'Lisa B.', company: 'Cyber Security Firm' },
            { quote: 'Top 3 rankings in 12 cities; they deliver what others promise.', name: 'Mark D.', company: 'Dental Network' },
          ].map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-[#181818] p-8 rounded-2xl border border-[#1A73E8]/10">
              <p className="text-gray-300 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-[#1A73E8]">{t.name}</h4>
              <p className="text-sm text-gray-400">{t.company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== FAQ (NEW FOR DEPTH) ===================== */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#1A73E8]/20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: 'How long until I see results?', a: 'Most clients see 30%+ lifts in 90 days; full compounding in 6 months.' },
            { q: 'What niches do you specialize in?', a: 'Legal, HVAC, MSPs, dental, cyber—tailored for U.S. scaleups.' },
            { q: 'Do you offer guarantees?', a: 'Month-to-month with performance SLAs—if we don’t deliver, you walk free.' },
            { q: 'How is your AI different?', a: 'Predictive modeling spots opportunities before competitors react.' },
          ].map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#181818] p-6 rounded-2xl border border-[#1A73E8]/10">
              <h3 className="text-xl font-semibold text-[#1A73E8] mb-2 flex items-center">
                <ChevronDown className="w-5 h-5 mr-2" /> {faq.q}
              </h3>
              <p className="text-gray-300">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== BLOG TEASERS (NEW FOR DEPTH/SEO) ===================== */}
      <section className="py-24 bg-[#101010] border-t border-[#1A73E8]/20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Insights to Own Your Category</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: 'AI Search: Future-Proof Your Rankings', excerpt: 'How to dominate generative engines before competitors catch up.' },
            { title: 'Local SEO for Multi-Location Businesses', excerpt: 'Scale map packs and reviews for 7-figure growth.' },
            { title: 'CRO Tactics That Double Conversions', excerpt: 'Data-driven tests for legal and MSP niches.' },
          ].map((post, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-[#181818] rounded-2xl p-6 border border-[#1A73E8]/10">
              <h3 className="text-xl font-semibold text-[#1A73E8] mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Button variant="outline" className="border-[#7E3FF2] text-[#7E3FF2]">Read More</Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-28 bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6">Ready to Outrank Rivals?</h2>
        <p className="text-lg text-white/90 mb-10">Claim your free AI-SEO audit—see gaps holding you back. Limited spots this month.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <input placeholder="Your website URL" className="bg-white/20 border-white/30 text-white placeholder:text-white/60 flex-1 p-4 rounded-full" />
          <Button size="lg" className="bg-white text-[#1A73E8] text-lg px-10 py-6 rounded-2xl hover:bg-gray-200">
            Get My Free Audit
          </Button>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-[#0A0A0A] py-10 text-center border-t border-[#1A73E8]/20 text-gray-400 text-sm">
        <p>System Status: <span className="text-green-400">● All Engines Operational</span></p>
        <p className="mt-2">© {new Date().getFullYear()} Search Rivals. All Rights Reserved.</p>
      </footer>
    </div>
  )
}