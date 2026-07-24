import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react'

// ── Icons ──────────────────────────────────────────────────────────────────

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function EmailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ExternalLinkIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

// ── Shared helpers ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 bg-[#22D3EE]/50" />
      <span className="text-[11px] font-mono tracking-[0.22em] text-[#22D3EE] uppercase">{children}</span>
    </div>
  )
}

function Badge({ children, color = '#22D3EE' }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono border transition-colors duration-200"
      style={{
        backgroundColor: `${color}09`,
        borderColor: `${color}22`,
        color: `${color}bb`,
      }}
    >
      {children}
    </span>
  )
}

// ── Navbar ─────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090D16]/85 backdrop-blur-2xl border-b border-white/[0.05] shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-medium tracking-widest">
          <span className="text-[#22D3EE]">NB</span>
          <span className="text-white/25">.</span>
          <span className="text-slate-500">dev</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-500 hover:text-slate-200 text-[13px] font-medium tracking-wide transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-[#090D16]" />

      {/* Ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 15% 35%, rgba(34,211,238,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 55% 45% at 85% 65%, rgba(52,211,153,0.055) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 50% 95%, rgba(99,102,241,0.04) 0%, transparent 55%)
          `,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Dot corners */}
      <div className="absolute top-1/4 left-[8%] w-1.5 h-1.5 rounded-full bg-[#22D3EE]/20" />
      <div className="absolute top-1/3 right-[10%] w-1 h-1 rounded-full bg-[#34D399]/25" />
      <div className="absolute bottom-1/3 left-[12%] w-1 h-1 rounded-full bg-[#22D3EE]/15" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#34D399]/[0.08] border border-[#34D399]/20 text-[#34D399] text-[11px] font-mono font-medium tracking-widest mb-9">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
          Disponible para proyectos
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold text-white leading-[1.04] tracking-[-0.03em] mb-5">
          Soy{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #22D3EE 0%, #67E8F9 50%, #34D399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Nahuel
          </span>{' '}
          Bonino
        </h1>

        <p className="text-[clamp(1rem,2.5vw,1.35rem)] text-slate-400 font-medium tracking-wide mb-11">
          Full Stack Developer
          <span className="text-white/15 mx-3">·</span>
          Systems Analyst
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="#proyectos"
            className="px-7 py-3 rounded-full bg-[#22D3EE] text-[#060A12] font-semibold text-[13px] tracking-wide hover:bg-[#38BDF8] hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-[#22D3EE]/20"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-7 py-3 rounded-full border border-white/10 text-slate-300 font-semibold text-[13px] tracking-wide hover:border-white/20 hover:text-white transition-all duration-200"
          >
            Contactarme
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-7">
          {[
            { href: 'https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/', icon: <LinkedInIcon size={17} />, label: 'LinkedIn' },
            { href: 'https://github.com/NahuelBonino', icon: <GitHubIcon size={17} />, label: 'GitHub' },
            { href: 'https://api.whatsapp.com/send?phone=095458701', icon: <WhatsAppIcon size={17} />, label: 'WhatsApp' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-600 hover:text-[#22D3EE] hover:scale-110 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700 animate-bounce">
        <ChevronDownIcon />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#090D16] to-transparent" />
    </section>
  )
}

// ── About ──────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="sobre-mi" className="py-28 bg-[#090D16]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Sobre mí</SectionLabel>

        <div className="mt-14 grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-14 lg:gap-20 items-start">
          {/* Avatar block */}
          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#22D3EE]/25 to-[#34D399]/10 blur-sm opacity-70" />
            <div className="relative rounded-2xl overflow-hidden bg-[#0F172A] aspect-square ring-1 ring-white/[0.06]">
              <img
                src="/foto2.jpeg"
                alt="Nahuel Bonino"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src =
                    'https://images.unsplash.com/photo-1782069327238-c154984f06ac?w=500&h=500&fit=crop&auto=format'
                }}
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
            {/* Corner accents */}
            <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-xl bg-[#22D3EE]/[0.07] border border-[#22D3EE]/15" />
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-[#34D399]/[0.07] border border-[#34D399]/15" />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white leading-[1.2] mb-6">
              Construyendo software que{' '}
              <span className="text-[#22D3EE]">importa</span>
            </h2>

            <div className="space-y-4 text-[15px] text-slate-400 leading-relaxed">
              <p>
                Soy estudiante avanzado de Ingeniería en Computación (UdelaR), proyectando recibirme en 2027. Me mueven los proyectos desafiantes que me impulsan a salir de mi zona de confort y dominar nuevas herramientas.
              </p>
              <p>
                Me interesa mucho la intersección entre la tecnología y la educación. Dar clases particulares de matemática y física para bachillerato despertó en mí un gran gusto por enseñar y aprender. De ahí viene también mi convicción de que, para lograr grandes objetivos en cualquier proyecto, el primer paso es construir un equipo bien integrado y colaborativo.
              </p>
              <p>
                A nivel más personal, me llama la atención el mundo del Machine Learning, soy hincha apasionado de Peñarol y un fanático del fútbol.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { value: '6+', label: 'Años de exp.' },
                { value: '3', label: 'Empresas' },
                { value: '2027', label: 'Egreso' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="px-5 py-3 rounded-xl bg-[#0F172A] border border-white/[0.06] hover:border-white/[0.10] transition-colors duration-200"
                >
                  <div className="text-xl font-bold text-[#22D3EE] font-mono">{s.value}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Projects ───────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: 'Ronda',
    subtitle: 'Plataforma de Juegos Sociales en Tiempo Real',
    image: '/ronda.png',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Motion', 'Zustand', 'Supabase', 'Jest', 'pnpm'],
    meta: 'Julio 2026',
    ctaLabel: 'Live Demo',
    ctaHref: 'https://ronda-gamma.vercel.app/',
    accent: '#22D3EE',
  },
  {
    title: 'Página web de Ingenia',
    subtitle: 'Página web institucional single-page para la empresa Ingenia',
    image: '/Ingenia.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    meta: 'Noviembre 2021',
    ctaLabel: 'Visit Site',
    ctaHref: 'https://www.ingenia.com.uy/',
    accent: '#34D399',
  },
  {
    title: '2Teams',
    subtitle: 'App Android que divide hasta diez personas en dos equipos al azar de iguales cantidades.',
    image: '/2teams.png',
    tags: ['Android Studio', 'Java'],
    meta: '2021',
    ctaLabel: 'Ver Repo',
    ctaHref: 'https://github.com/NahuelBonino/2teams',
    accent: '#A78BFA',
  },
  {
    title: 'Lista de Archivos',
    subtitle: 'Utilidad de escritorio que lista los archivos de una carpeta especificada desde un dropdown.',
    image: '/ListaArchivo.png',
    tags: ['Java', 'Swing'],
    meta: '2021',
    ctaLabel: 'Ver Repo',
    ctaHref: 'https://github.com/NahuelBonino/ListaArchivos-',
    accent: '#FB923C',
  },
  {
    title: 'Globo',
    subtitle: 'Juego para Android dividido en niveles donde se debe superar uno para avanzar al siguiente.',
    image: '/globo2.png',
    tags: ['Unity', 'C#', 'Android'],
    meta: '2021',
    ctaLabel: 'Ver Repo',
    ctaHref: 'https://github.com/NahuelBonino/globo',
    accent: '#F472B6',
  },
] as const

function ProjectCard({
  title,
  subtitle,
  image,
  tags,
  meta,
  ctaLabel,
  ctaHref,
  accent,
}: {
  title: string
  subtitle: string
  image: string
  tags: readonly string[]
  meta?: string
  ctaLabel: string
  ctaHref: string
  accent: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group relative rounded-2xl overflow-hidden bg-[#0F172A] border border-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1.5 transition-all duration-350 h-full flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#0A1020] shrink-0">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-[1.06]' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/10 to-transparent" />

        {/* Accent glow on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse 60% 40% at 50% 100%, ${accent}18 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col overflow-hidden">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-lg font-bold text-white leading-snug">{title}</h3>
            {meta && (
              <span className="text-[11px] text-slate-600 font-mono mt-0.5 block">{meta}</span>
            )}
          </div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-[11px] font-semibold tracking-wide transition-all duration-200 hover:scale-[1.04]"
            style={{
              borderColor: `${accent}35`,
              color: accent,
              backgroundColor: hovered ? `${accent}12` : 'transparent',
            }}
          >
            {ctaLabel}
            <ExternalLinkIcon size={11} />
          </a>
        </div>

        <p className="text-slate-400 text-[13px] leading-relaxed mb-4 line-clamp-3">{subtitle}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((t) => (
            <Badge key={t} color={accent}>
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const firstChild = el.children[0] as HTMLElement | undefined
    const cardWidth = firstChild?.clientWidth ?? 1
    const gap = 24
    const step = cardWidth + gap
    const idx = Math.round(scrollLeft / step)
    setActiveIndex(Math.max(0, Math.min(idx, PROJECTS.length - 1)))
    setIsAtStart(scrollLeft < 10)
    setIsAtEnd(scrollLeft + el.clientWidth >= el.scrollWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => {
      el.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  const scrollTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const firstChild = el.children[0] as HTMLElement | undefined
    const cardWidth = firstChild?.clientWidth ?? 0
    const gap = 24
    el.scrollTo({ left: (cardWidth + gap) * index, behavior: 'smooth' })
  }

  const scrollByOffset = (dir: 1 | -1) => {
    const el = scrollRef.current
    if (!el) return
    const firstChild = el.children[0] as HTMLElement | undefined
    const cardWidth = firstChild?.clientWidth ?? 0
    const gap = 24
    el.scrollBy({ left: (cardWidth + gap) * dir, behavior: 'smooth' })
  }

  return (
    <section id="proyectos" className="py-28 bg-[#060A12]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Proyectos</SectionLabel>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-white leading-tight">
            Trabajo seleccionado
          </h2>
          <p className="text-slate-500 text-[13px] max-w-xs leading-relaxed">
            Proyectos que reflejan mi enfoque técnico y capacidad de entrega end-to-end.
          </p>
        </div>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollByOffset(-1)}
            disabled={isAtStart}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-[#0F172A]/90 backdrop-blur border border-white/[0.08] hidden md:flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.18] disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 shadow-lg shadow-black/40"
            aria-label="Proyecto anterior"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollByOffset(1)}
            disabled={isAtEnd}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 rounded-full bg-[#0F172A]/90 backdrop-blur border border-white/[0.08] hidden md:flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.18] disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 shadow-lg shadow-black/40"
            aria-label="Siguiente proyecto"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="snap-start shrink-0 w-[calc(100%-0px)] md:w-[calc(50%-12px)] h-[510px]"
              >
                <ProjectCard {...p} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {PROJECTS.map((p, i) => (
              <button
                key={p.title}
                onClick={() => scrollTo(i)}
                className="group/dot p-1.5"
                aria-label={`Ir a ${p.title}`}
              >
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: i === activeIndex ? p.accent : 'rgba(255,255,255,0.12)',
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Experience ─────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Sofis Solutions',
    period: '10/2023 – 04/2026',
    highlights: [
      'Desarrollo end-to-end para el sector público uruguayo.',
      'Campus Ceibal, Mi Cuenta Ceibal, Censo Agropecuario, Ceibal Kids.',
    ],
    tech: ['Next.js', 'Vue.js', 'Node.js', 'NestJS', 'Laravel'],
    accent: '#22D3EE',
  },
  {
    role: 'Full Stack Developer',
    company: 'Humana IT',
    period: '03/2022 – 03/2023',
    highlights: [
      'Sistemas de gestión de salud para clínicas y aseguradoras.',
      'Integración de APIs REST/SOAP en entorno hospitalario con Docker y Jenkins.',
    ],
    tech: ['AngularJS', 'Ruby on Rails', 'PostgreSQL', 'Docker', 'Jenkins'],
    accent: '#34D399',
  },
  {
    role: 'Help Desk / Developer Support',
    company: 'Ingenia',
    period: '03/2018 – 11/2021',
    highlights: [
      'Soporte técnico y optimización de consultas SQL de alto impacto.',
      'Desarrollo de herramientas internas con PHP y PL/SQL.',
    ],
    tech: ['PHP', 'PL/SQL', 'SQL'],
    accent: '#A78BFA',
  },
]

function Experience() {
  return (
    <section id="experiencia" className="py-28 bg-[#090D16]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Experiencia Laboral</SectionLabel>

        <div className="mt-14 relative">
          {/* Timeline rail */}
          <div className="absolute left-[10px] top-4 bottom-4 w-px bg-gradient-to-b from-[#22D3EE]/35 via-[#34D399]/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative md:pl-10 group">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-[22px] w-[20px] h-[20px] rounded-full border-2 bg-[#090D16] items-center justify-center hidden md:flex transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${exp.accent}50`,
                  }}
                >
                  <div
                    className="w-[7px] h-[7px] rounded-full transition-colors duration-300"
                    style={{ backgroundColor: `${exp.accent}70` }}
                  />
                </div>

                <div className="rounded-2xl bg-[#0F172A] border border-white/[0.06] p-6 hover:border-white/[0.11] transition-all duration-300 group-hover:bg-[#111827]">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-[16px] font-bold text-white leading-snug">{exp.role}</h3>
                      <span className="text-sm font-semibold mt-0.5 block" style={{ color: exp.accent }}>
                        {exp.company}
                      </span>
                    </div>
                    <span className="shrink-0 px-3 py-1 rounded-full bg-white/[0.04] text-slate-500 text-[11px] font-mono border border-white/[0.05]">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px] text-slate-400 leading-relaxed">
                        <span className="mt-1 shrink-0 text-[10px]" style={{ color: `${exp.accent}80` }}>
                          ▸
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge key={t} color={exp.accent}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Education ──────────────────────────────────────────────────────────────

function Education() {
  return (
    <section id="educacion" className="py-20 bg-[#060A12]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Educación</SectionLabel>

        <div className="mt-10 relative rounded-2xl overflow-hidden">
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 100% at 0% 50%, rgba(34,211,238,0.07) 0%, transparent 60%)',
            }}
          />

          <div className="relative bg-[#0F172A] border border-white/[0.07] rounded-2xl p-8 flex flex-wrap items-center gap-8">
            {/* Left accent bar */}
            <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-[#22D3EE] to-[#34D399]" />

            <div className="flex-1 min-w-0 pl-3">
              <div className="text-[10px] font-mono text-[#22D3EE]/80 mb-2 tracking-[0.22em] uppercase">
                Universidad de la República · UdelaR
              </div>
              <h3 className="text-[1.5rem] font-bold text-white leading-snug mb-1">
                Ingeniería en Computación
              </h3>
              <p className="text-slate-500 text-[13px]">Estudiante avanzado — 2016 – Presente</p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#34D399]/[0.08] border border-[#34D399]/20 text-[#34D399] text-[12px] font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              Egreso proyectado 2027
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Skills ─────────────────────────────────────────────────────────────────

const SKILLS = [
  {
    category: 'Frontend',
    color: '#22D3EE',
    items: ['React', 'Next.js', 'Vue.js', 'AngularJS', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: '#34D399',
    items: ['Node.js', 'NestJS', 'Ruby on Rails', 'Quarkus', 'APIs REST', 'Laravel'],
  },
  {
    category: 'Databases',
    color: '#A78BFA',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'TypeORM', 'SQL Avanzado'],
  },
  {
    category: 'Tools & DevOps',
    color: '#FB923C',
    items: ['Git', 'Docker', 'Jenkins', 'Postman', 'Redmine'],
  },
  {
    category: 'Languages',
    color: '#F472B6',
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Kotlin'],
  },
  {
    category: 'ORM & Data',
    color: '#60A5FA',
    items: ['TypeORM', 'SQL Avanzado', 'PL/SQL'],
  },
]

function Skills() {
  return (
    <section id="habilidades" className="py-28 bg-[#090D16]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Habilidades Técnicas</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white mb-12">
          Mi stack tecnológico
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl bg-[#0F172A] border border-white/[0.06] p-5 hover:border-white/[0.11] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-[13px] font-semibold text-white">{cat.category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge key={item} color={cat.color}>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ────────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'nahuelboninoa@gmail.com',
    href: 'mailto:nahuelboninoa@gmail.com',
    icon: <EmailIcon size={20} />,
    color: '#22D3EE',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nahuel-bonino-acuña',
    href: 'https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/',
    icon: <LinkedInIcon size={20} />,
    color: '#0A84FF',
  },
  {
    label: 'GitHub',
    value: 'github.com/NahuelBonino',
    href: 'https://github.com/NahuelBonino',
    icon: <GitHubIcon size={20} />,
    color: '#E2E8F0',
  },
  {
    label: 'WhatsApp',
    value: '095 458 701',
    href: 'https://api.whatsapp.com/send?phone=095458701',
    icon: <WhatsAppIcon size={20} />,
    color: '#25D366',
  },
]

function Contact() {
  return (
    <section id="contacto" className="py-28 bg-[#060A12]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Contacto</SectionLabel>

        <div className="mt-6 mb-12">
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-tight mb-3">
            Trabajemos{' '}
            <span className="text-[#22D3EE]">juntos</span>
          </h2>
          <p className="text-slate-400 text-[15px] max-w-md leading-relaxed">
            Estoy disponible para proyectos freelance, posiciones full-time o simplemente una buena conversación técnica.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_LINKS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group rounded-2xl bg-[#0F172A] border border-white/[0.06] p-5 hover:border-white/[0.13] hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{ backgroundColor: `${c.color}12`, color: c.color }}
              >
                {c.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-600 font-mono tracking-widest mb-1 uppercase">
                  {c.label}
                </div>
                <div className="text-[13px] text-slate-400 font-medium group-hover:text-white transition-colors duration-200 break-all leading-snug">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8 bg-[#060A12] border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-slate-700 text-[12px] font-mono">
          © {new Date().getFullYear()} Nahuel Bonino — Diseñado y desarrollado con ♥
        </span>
        <div className="flex items-center gap-5">
          {[
            { href: 'https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/', icon: <LinkedInIcon size={15} />, label: 'LinkedIn' },
            { href: 'https://github.com/NahuelBonino', icon: <GitHubIcon size={15} />, label: 'GitHub' },
            { href: 'https://api.whatsapp.com/send?phone=095458701', icon: <WhatsAppIcon size={15} />, label: 'WhatsApp' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-700 hover:text-[#22D3EE] transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ── App ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#090D16] text-slate-100 font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
