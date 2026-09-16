import type { HTMLAttributes, ReactNode } from 'react'

interface BorderBeamProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  active?: boolean
}

export function BorderBeam({ children, className = '', active = false, ...props }: BorderBeamProps) {
  return (
    active ?
      <div
        className={`relative isolate overflow-hidden rounded-2xl p-px ${className}`}
        {...props}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="border-beam-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect
            className={active ? 'animate-[border-beam-dash_4s_linear_1]' : ''}
            fill="none"
            height="99"
            pathLength="400"
            rx="16"
            ry="16"
            stroke="url(#border-beam-gradient)"
            strokeDasharray="32 368"
            strokeLinecap="round"
            strokeWidth="1.5"
            width="99"
            x="0.5"
            y="0.5"
          />
        </svg>
        <div className="relative z-10 h-full w-full rounded-[inherit]">{children}</div>
      </div>
      :
      <div
        className={`relative isolate overflow-hidden rounded-2xl p-px ${className}`}
        {...props}
      >
        <div className="relative z-10 h-full w-full rounded-[inherit]">{children}</div>
      </div>
  )
}
