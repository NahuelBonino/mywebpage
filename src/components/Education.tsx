import { SectionLabel } from './ui'

// ── Education ──────────────────────────────────────────────────────────────

export default function Education() {
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
