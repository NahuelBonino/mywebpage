import { useState } from 'react'
import { ExternalLinkIcon } from './icons'
import { Badge } from './ui'

// ── Tipos ──────────────────────────────────────────────────────────────────

export interface Project {
  title: string
  subtitle: string
  image: string
  tags: readonly string[]
  meta?: string
  ctaLabel: string
  ctaHref: string
  accent: string
}

// ── ProjectCard ────────────────────────────────────────────────────────────

export default function ProjectCard({
  title,
  subtitle,
  image,
  tags,
  meta,
  ctaLabel,
  ctaHref,
  accent,
}: Project) {
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
            <Badge key={t} color={`${accent}bb`} bgColor={`${accent}09`} borderColor={`${accent}22`}>
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
