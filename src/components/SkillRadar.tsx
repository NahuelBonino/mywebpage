import { useRef } from 'react'
import { motion, useInView } from 'motion/react'


export interface RadarItem {
  label: string
  value: number
}

interface SkillRadarProps {
  items: RadarItem[]
  accent?: string
  title?: string
}

export default function SkillRadar({
  items,
  accent = '#22D3EE',
  title = 'Estadisticas',
}: SkillRadarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.4 })

  const n = items.length
  const size = 440
  const cx = size / 2
  const cy = size / 2
  const radius = 130

  const point = (i: number, ratio: number): [number, number] => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n
    return [cx + radius * ratio * Math.cos(angle), cy + radius * ratio * Math.sin(angle)]
  }

  const levels = [0.2, 0.4, 0.6, 0.8, 1]

  const polyPoints = (ratio: number) =>
    items
      .map((_, i) => {
        const [x, y] = point(i, ratio)
        return `${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(' ')

  const dataPoints = items.map((item, i) => point(i, item.value / 100))

  return (
    <div
      ref={ref}
      className="w-full max-w-[480px] mx-auto mt-12 rounded-2xl border border-[#A5F3FC]/35 p-6 relative overflow-hidden"
      style={{ backgroundImage: 'var(--texture-noise), var(--gradient-primary)' }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/85">{title}</span>
      </div>

      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto">
        {levels.map((lv) => (
          <polygon
            key={lv}
            points={polyPoints(lv)}
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth={1}
          />
        ))}

        {items.map((_, i) => {
          const [x, y] = point(i, 1)
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,0.14)" strokeWidth={1} />
        })}

        <motion.polygon
          points={dataPoints.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')}
          fill={`${accent}26`}
          stroke={accent}
          strokeWidth={2}
          strokeLinejoin="round"
          style={{ transformOrigin: '50% 50%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        {dataPoints.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={3.5} fill={accent} />
        ))}

        {items.map((item, i) => {
          const [x, y] = point(i, 1.24)
          const anchor = Math.abs(x - cx) < 24 ? 'middle' : x < cx ? 'end' : 'start'
          return (
            <g key={i}>
              <text
                x={x}
                y={y}
                textAnchor={anchor}
                dominantBaseline="middle"
                className="fill-white/90 font-mono text-[14px]"
              >
                {item.label}
              </text>
              <text
                x={x}
                y={y + 13}
                textAnchor={anchor}
                dominantBaseline="middle"
                className="font-mono text-[13px]"
                fill="#ffffff"
              >
                {item.value}%
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
