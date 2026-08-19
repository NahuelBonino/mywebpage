import type { ReactNode } from 'react'

// ── Primitivas visuales compartidas ────────────────────────────────────────

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[23px] font-mono tracking-[0.22em] text-[#FFFF] uppercase">{children}</span>
    </div>
  )
}

interface BadgeProps {
  children: ReactNode
  color: string
  bgColor: string
  borderColor: string
}

export function Badge({ children, color, bgColor, borderColor }: BadgeProps) {
  return (
    <span
      className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono border transition-colors duration-200"
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
