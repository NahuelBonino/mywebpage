import { useCallback, useEffect, useRef, useState } from 'react'
import ProjectCard, { type Project } from './ProjectCard'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'
import { SectionLabel } from './ui'

// ── Datos ──────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
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
]

// ── Projects ───────────────────────────────────────────────────────────────

export default function Projects() {
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
          <p className="text-slate-500 text-[16px] leading-relaxed">
            Proyectos que he desarrollado a lo largo de mi carrera. Algunos son proyectos personales, otros fueron desarrollados para clientes o por interes personal.
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
            <ChevronLeftIcon />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollByOffset(1)}
            disabled={isAtEnd}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 rounded-full bg-[#0F172A]/90 backdrop-blur border border-white/[0.08] hidden md:flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.18] disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 shadow-lg shadow-black/40"
            aria-label="Siguiente proyecto"
          >
            <ChevronRightIcon />
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
