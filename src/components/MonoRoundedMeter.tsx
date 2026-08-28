import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

// ── MonoRoundedMeter ───────────────────────────────────────────────────────
// Medidor de arco semicircular (estilo amicro: mono-rounded-meter), hecho con
// SVG + motion. El arco se anima de 0 al porcentaje de la carrera completada.

interface MonoRoundedMeterProps {
  value: number
  total: number
  label?: string
  sublabel?: string
  accent?: string
}

export default function MonoRoundedMeter({
  value,
  total,
  label = 'créditos aprobados',
  sublabel = 'de la carrera',
  accent = '#2DD4BF',
}: MonoRoundedMeterProps) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.4 })

  const cx = 100
  const cy = 110
  const radius = 88
  const arc = `M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`
  const arcLength = Math.PI * radius

  return (
    <div
      ref={ref}
      className="w-full max-w-[360px] mx-auto mt-10 rounded-2xl border border-[#5EEAD4]/35 p-6 relative overflow-hidden transition-colors duration-500 hover:border-[#5EEAD4]/60"
      style={{ backgroundImage: 'var(--texture-noise), var(--gradient-teal)' }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
          Avance de la carrera
        </span>
      </div>

      <div className="relative mt-1 mx-auto w-full max-w-[240px]">
        <svg viewBox="0 0 200 130" className="w-full h-auto">
          <path
            d={arc}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={14}
            strokeLinecap="round"
          />
          <motion.path
            d={arc}
            fill="none"
            stroke={accent}
            strokeWidth={14}
            strokeLinecap="round"
            strokeDasharray={arcLength}
            initial={false}
            animate={{ strokeDashoffset: inView ? arcLength * (1 - pct / 100) : arcLength }}
            transition={{ duration: inView ? 1.4 : 0, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: `drop-shadow(0 0 6px ${accent}66)` }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center top-18 pointer-events-none">
          <span className="text-3xl font-bold tabular-nums text-white">
            {value}
            <span className="text-base font-normal opacity-70">/{total}</span>
          </span>
          <span className="text-sm font-mono font-semibold mt-1" style={{ color: accent }}>
            {pct}%
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/15 text-[13px] font-mono font-semibold">
        <span className="text-white/85">{label}</span>
        <span className="text-[#5EEAD4]">{sublabel}</span>
      </div>
    </div>
  )
}
