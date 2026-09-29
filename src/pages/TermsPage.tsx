import { EmailIcon } from '../components/icons'
import { SectionLabel } from '../components/ui'
import useScrollToHash from '../hooks/useScrollToHash'

// ── Datos ──────────────────────────────────────────────────────────────────

interface TermBlock {
  heading?: string
  body: string
}

interface TermSection {
  id: string
  num: string
  title: string
  blocks: TermBlock[]
}

const TERMS_SECTIONS: TermSection[] = [
  {
    id: 'condiciones-generales',
    num: '01',
    title: 'Condiciones Generales',
    blocks: [
      {
        body: 'Las presentes condiciones regulan el acceso, suscripción y contratación de los servicios de automatización de procesos, desarrollo de software y mantenimiento en la nube prestados de manera independiente por Nahuel Bonino (en adelante, "el Prestador"). La contratación o uso de cualquiera de los servicios implica la aceptación plena de estos términos.',
      },
    ],
  },
  {
    id: 'naturaleza-del-servicio',
    num: '02',
    title: 'Naturaleza del Servicio y Licencia de Uso',
    blocks: [
      {
        heading: 'Servicios ofrecidos',
        body: 'Soluciones de software como servicio (SaaS), chatbots, integración de APIs y automatización de flujos operativos.',
      },
      {
        heading: 'Licencia',
        body: 'Salvo que se acuerde expresamente el desarrollo a medida con transferencia total de derechos, los servicios prestados se otorgan bajo una licencia de uso no exclusiva, revocable e intransferible, condicionada al pago puntual de la tarifa o suscripción correspondiente.',
      },
      {
        heading: 'Límites de uso',
        body: 'El cliente es responsable del uso adecuado de las automatizaciones y de cumplir con las políticas de uso aceptable de plataformas de terceros integradas (como Meta, WhatsApp, Instagram, OpenAI, etc.).',
      },
    ],
  },
  {
    id: 'facturacion-y-pagos',
    num: '03',
    title: 'Cotización, Facturación y Pagos',
    blocks: [
      {
        heading: 'Planes y tasas',
        body: 'Los servicios se estructuran mediante tarifas de implementación/configuración inicial y/o suscripciones periódicas (mensuales o anuales).',
      },
      {
        heading: 'Condición de inicio',
        body: 'La activación del servicio o el inicio de los trabajos técnicos comenzará tras la aceptación explícita de la propuesta y la confirmación del pago correspondiente (seña o primera cuota de suscripción).',
      },
      {
        heading: 'Mora o falta de pago',
        body: 'El impago de la suscripción dentro de los plazos acordados podrá facultar al Prestador a suspender temporalmente la ejecución o disponibilidad de las automatizaciones hasta la regularización de la cuenta.',
      },
    ],
  },
  {
    id: 'reembolso',
    num: '04',
    title: 'Política de Cancelación y Reembolso',
    blocks: [
      {
        heading: 'Cancelación de suscripción',
        body: 'El cliente podrá solicitar la cancelación de su suscripción en cualquier momento antes del inicio del siguiente ciclo de facturación. El servicio permanecerá activo hasta la finalización del período abonado.',
      },
      {
        heading: 'Costos de configuración o desarrollo inicial',
        body: 'Los importes abonados por concepto de seña, configuración inicial o etapas de desarrollo técnico ya ejecutadas no son reembolsables, dado que corresponden a horas de trabajo e infraestructura ya asignadas.',
      },
      {
        heading: 'Cancelación previa al inicio',
        body: 'Si el cliente cancela la contratación antes de la ejecución de cualquier trabajo técnico, se reembolsará el importe abonado descontando los gastos de gestión o comisiones bancarias aplicables.',
      },
      {
        heading: 'Incumplimiento imputable al Prestador',
        body: 'En el caso excepcional de que el Prestador no pueda prestar el servicio por causas directamente imputables a su persona, se procederá al reembolso proporcional de los importes abonados por los servicios no prestados o no configurados.',
      },
    ],
  },
  {
    id: 'propiedad-intelectual',
    num: '05',
    title: 'Propiedad Intelectual e Insumos de Terceros',
    blocks: [
      {
        heading: 'Plataforma y código base',
        body: 'El Prestador conserva la titularidad de los derechos de propiedad intelectual sobre las arquitecturas, conectores y código base que sustentan la plataforma de automatización.',
      },
      {
        heading: 'Datos del cliente',
        body: 'Todos los datos e información operativa procesados por las automatizaciones son y seguirán siendo propiedad exclusiva del cliente.',
      },
      {
        heading: 'APIs y servicios de terceros',
        body: 'El Prestador no se responsabiliza por interrupciones, cambios de políticas o costos adicionales derivados de plataformas externas (Meta, proveedores de infraestructura, etc.), ajustando los flujos a las capacidades técnicas vigentes de dichas herramientas.',
      },
    ],
  },
  {
    id: 'jurisdiccion',
    num: '06',
    title: 'Legislación Aplicable y Jurisdicción',
    blocks: [
      {
        body: 'Estos términos se rigen por las leyes de la República Oriental del Uruguay. Cualquier controversia, litigio o reclamo derivado de la interpretación o ejecución de los presentes términos será sometido a la jurisdicción de los tribunales competentes de la ciudad de Montevideo, Uruguay.',
      },
    ],
  },
]

const PROFESSIONAL_CONTACT = [
  { label: 'Nombre completo', value: 'Nahuel Bonino' },
  { label: 'Ubicación', value: 'Montevideo, Uruguay' },
  { label: 'Email profesional', value: 'contacto@nahuelbonino.uy', href: 'mailto:contacto@nahuelbonino.uy' },
]

// ── TermsPage ──────────────────────────────────────────────────────────────

export default function TermsPage() {
  useScrollToHash()

  return (
    <main className="pt-[64px]">
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionLabel>Términos del Servicio y Política de Reembolso</SectionLabel>
          <p className="mt-5 text-slate-400 text-[15px] leading-relaxed max-w-2xl">
            Condiciones que regulan la contratación de los servicios de automatización, desarrollo de software y
            mantenimiento en la nube prestados por Nahuel Bonino.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            {TERMS_SECTIONS.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-28 rounded-2xl border border-white/[0.06] bg-[#0F172A]/40 p-7 sm:p-9"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[13px] text-[#22D3EE]/70 shrink-0">{s.num}</span>
                  <h2 className="text-[19px] sm:text-[21px] font-semibold text-slate-100 tracking-tight">
                    {s.title}
                  </h2>
                </div>

                <div className="mt-6 flex flex-col gap-5">
                  {s.blocks.map((b, i) => (
                    <div key={i}>
                      {b.heading && (
                        <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#22D3EE] mb-1.5">
                          {b.heading}
                        </h3>
                      )}
                      <p className="text-slate-400 text-[15px] leading-relaxed">{b.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section
            id="contacto-profesional"
            className="scroll-mt-28 mt-10 rounded-2xl border p-7 sm:p-9"
            style={{
              backgroundImage:
                'var(--texture-noise), linear-gradient(166.9deg, #155E75 53.19%, #22D3EE 107.69%)',
              borderColor: '#22D3EE4d',
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ring-1 ring-white/10"
                style={{ backgroundColor: 'rgba(0,0,0,0.28)', color: '#22D3EE' }}
              >
                <EmailIcon size={20} />
              </div>
              <h2 className="text-[19px] sm:text-[21px] font-semibold text-white tracking-tight">
                Contacto profesional
              </h2>
            </div>

            <dl className="mt-6 grid sm:grid-cols-3 gap-5">
              {PROFESSIONAL_CONTACT.map((c) => (
                <div key={c.label}>
                  <dt className="text-[10px] text-white/55 font-mono tracking-widest uppercase mb-1">
                    {c.label}
                  </dt>
                  <dd className="text-[14px] text-white/90 font-medium leading-snug">
                    {c.href ? (
                      <a href={c.href} className="underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors duration-200 break-all">
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="mt-10 text-slate-600 text-[12px] font-mono">
            Última actualización: septiembre 2026 · Montevideo, Uruguay
          </p>
        </div>
      </section>
    </main>
  )
}
