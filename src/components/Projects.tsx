import { useEffect, useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Card, type CardVariant } from './Card'
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
  variant: CardVariant
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
    variant: 'pink',
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
    variant: 'orange',
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
    variant: 'primary',
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
    variant: 'success',
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
    variant: 'violet',
  },
]


function ProjectCTA({ label, href, accent }: { label: string; href: string; accent: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative flex flex-col items-center justify-center shrink-0">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-9 z-50 max-w-[calc(100vw-2rem)] overflow-visible px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/15 text-[10px] font-mono shadow-xl whitespace-normal break-all text-center pointer-events-none"
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
          color: '#ffffff',
          borderColor: `${accent}40`,
          backgroundColor: `${accent}12`,
        }}
      >
        <span>{label}</span>
        <span
          className="flex items-center justify-center w-5 h-5 rounded-full"
          style={{ backgroundColor: accent }}
        >
          <ExternalLink size={11} color="#060A12" />
        </span>
      </motion.a>
    </div>
  )
}


export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const active = PROJECTS[activeIndex]

  useEffect(() => {
    if (!isModalOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

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
            onImageClick={(index) => {
              setActiveIndex(index)
              setIsModalOpen(true)
            }}
          />
        </div>

      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Detalles de ${active.title}`}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl"
              style={{ ['--project-accent' as string]: `${active.accent}1f` }}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Cerrar detalles del proyecto"
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/75 transition-colors hover:bg-black/70 hover:text-white"
              >
                <X size={18} />
              </button>

              <Card
                variant={active.variant}
                className="card--project max-h-[calc(100vh-4rem)] overflow-visible !flex-col !items-stretch !p-6 sm:!p-8"
                title={active.title}
                meta={active.meta}
                description={active.subtitle}
                headerAction={
                  <ProjectCTA label={active.ctaLabel} href={active.ctaHref} accent={active.accent} />
                }
              >
                <div className="flex flex-wrap gap-1.5 mt-4">
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
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
