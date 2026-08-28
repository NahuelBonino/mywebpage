import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import CardCarousel from './CardCarousel'
import { Badge, SectionLabel } from './ui'

// ── Datos ──────────────────────────────────────────────────────────────────

interface Project {
  title: string
  subtitle: string
  image: string
  tags: readonly string[]
  meta?: string
  ctaLabel: string
  ctaHref: string
  accent: string
}

const PROJECTS: Project[] = [
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
]

// ── Proyecto CTA (botón pill estilo amicro: hover-link-card) ──────────────

function ProjectCTA({ label, href, accent }: { label: string; href: string; accent: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative flex flex-col items-center justify-center shrink-0">
      {/* Tooltip flotante con la URL */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-9 px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/15 text-[10px] font-mono shadow-xl whitespace-nowrap z-20 pointer-events-none"
            style={{ color: accent }}
          >
            {href}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 border-r border-b border-white/15 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón pill */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-semibold shadow-md transition-shadow duration-200 no-underline cursor-pointer"
        style={{
          color: accent,
          borderColor: `${accent}40`,
          backgroundColor: `${accent}12`,
        }}
      >
        <span>{label}</span>
        <ExternalLink size={13} />
      </motion.a>
    </div>
  )
}


export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(2)
  const active = PROJECTS[activeIndex]

  return (
    <section id="proyectos" className="py-28 bg-[#060A12]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Proyectos</SectionLabel>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4 mb-12">
          <p className="text-slate-500 text-[16px] leading-relaxed">
            Proyectos que he desarrollado a lo largo de mi carrera. Algunos son proyectos personales, otros fueron desarrollados para clientes o por interes personal.
          </p>
        </div>

        <div className="h-[340px] md:h-[380px]">
          <CardCarousel
            images={PROJECTS.map((p) => ({ src: p.image, title: p.title }))}
            activeIndex={activeIndex}
            onActiveChange={setActiveIndex}
          />
        </div>

        <div
          className="relative overflow-hidden mt-12 rounded-2xl bg-[#0F172A] border border-white/[0.06] p-8 md:p-10 transition-colors duration-500 hover:border-white/[0.12]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 90% at 100% 100%, ${active.accent}33 0%, transparent 60%)`,
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-2xl font-bold text-white leading-snug">{active.title}</h3>
              {active.meta && (
                <span className="text-[11px] text-slate-600 font-mono mt-1 block">{active.meta}</span>
              )}
            </div>

            <ProjectCTA label={active.ctaLabel} href={active.ctaHref} accent={active.accent} />
          </div>

          <p className="text-slate-400 text-[14px] leading-relaxed mt-3 max-w-2xl">{active.subtitle}</p>

          <div className="flex flex-wrap gap-1.5 mt-5">
            {active.tags.map((t) => (
              <Badge
                key={t}
                color={active.accent}
                bgColor={`${active.accent}1f`}
                borderColor={`${active.accent}52`}
                className="text-[11px]"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
