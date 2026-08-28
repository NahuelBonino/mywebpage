import { Card, type CardVariant } from './Card'
import MonoRoundedMeter from './MonoRoundedMeter'
import { Badge, SectionLabel } from './ui'


interface EducationItem {
  institution: string
  degree: string
  period: string
  description: string
  status: string
  variant: CardVariant
}

const EDUCATION: EducationItem[] = [
  {
    institution: 'Universidad de la República · UdelaR',
    degree: 'Ingeniería en Computación',
    period: '2016 – Presente',
    description:
      'Estudiante avanzado. Formación en algoritmos, arquitectura de software, bases de datos y desarrollo de sistemas.',
    status: 'Egreso proyectado 2027',
    variant: 'teal',
  },
]


export default function Education() {
  return (
    <section id="educacion" className="py-20 bg-[#060A12]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Educación</SectionLabel>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="w-full"
            >
              <Card
                variant={edu.variant}
                size="sm"
                title={edu.degree}
                subtitle={edu.institution}
                meta={edu.period}
                description={edu.description}
              >
                <Badge
                  color="#ffffff" bgColor="#0000008a" borderColor="#00000022"
                  className='mt-3'
                >
                  {edu.status}
                </Badge>
              </Card>
            </div>
          ))}
        </div>

        <MonoRoundedMeter value={396} total={450} accent="#ffffff" />
      </div>
    </section>
  )
}
