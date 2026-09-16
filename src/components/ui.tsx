import type { ReactNode } from 'react'

// ── Primitivas visuales compartidas ────────────────────────────────────────

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="section-label text-[23px] text-[#FFFF] uppercase">{children}</span>
    </div>
  )
}

interface BadgeProps {
  children: ReactNode
  color: string
  bgColor: string
  borderColor: string
  className?: string
}

export function Badge({ children, color, bgColor, borderColor, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-md text-[12px] font-mono border transition-colors duration-200 ${className}`}
      style={{
        backgroundColor: bgColor,
        borderColor,
        color,
      }}
    >
      {children}
    </span>
  )
}
