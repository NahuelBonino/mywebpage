import { Card, type CardVariant } from './Card'
import { Badge, SectionLabel } from './ui'


interface ExperienceItem {
  role: string
  company: string
  period: string
  highlights: string[]
  tech: string[]
  accent: string
  variant: CardVariant
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Sofis Solutions',
    period: '10/2023 – 04/2026',
    highlights: [
      'Desarrollo end-to-end para el sector público uruguayo.',
      'Campus Ceibal, Mi Cuenta Ceibal, Censo Agropecuario, Ceibal Kids.',
    ],
    tech: ['Next.js', 'Vue.js', 'Node.js', 'NestJS', 'Laravel'],
    accent: '#6EE7B7',
    variant: 'success',
  },
  {
    role: 'Full Stack Developer',
    company: 'Humana IT',
    period: '03/2022 – 03/2023',
    highlights: [
      'Sistemas de gestión de salud para clínicas y aseguradoras.',
      'Integración de APIs REST/SOAP en entorno hospitalario con Docker y Jenkins.',
    ],
    tech: ['AngularJS', 'Ruby on Rails', 'PostgreSQL', 'Docker', 'Jenkins'],
    accent: '#38BDF8',
    variant: 'info',
  },
  {
    role: 'Help Desk / Developer Support',
    company: 'Ingenia',
    period: '03/2018 – 11/2021',
    highlights: [
      'Soporte técnico y optimización de consultas SQL de alto impacto.',
      'Desarrollo de herramientas internas con PHP y CSS',
      'Procesamiento de datos con scripts de bash.'
    ],
    tech: ['PHP', 'Scripts de Bash', 'SQL'],
    accent: '#67E8F9',
    variant: 'primary',
  },
]


export default function Experience() {
  return (
    <section id="experiencia" className="py-28 bg-[#090D16]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Experiencia Laboral</SectionLabel>

        <div className="mt-14 relative">
          <div className="absolute left-[10px] top-4 bottom-4 w-px bg-gradient-to-b from-[#22D3EE]/35 via-[#34D399]/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative md:pl-10 group">

                <Card
                  variant={exp.variant}
                  title={exp.role}
                  subtitle={exp.company}
                  meta={exp.period}
                  accent={exp.accent}
                >
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-[14px] leading-relaxed">
                        <span className="mt-1 shrink-0 text-[10px]" style={{ color: `${exp.accent}80` }}>
                          ▸
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge key={t} color="#ffffff" bgColor="#0000008a" borderColor="#00000022">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
