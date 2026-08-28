import { Card, type CardVariant } from './Card'
import SkillRadar from './SkillRadar'
import { Badge, SectionLabel } from './ui'

// ── Datos ──────────────────────────────────────────────────────────────────

interface SkillCategory {
  category: string
  variant: CardVariant
  color: string
  items: string[]
}

const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    variant: 'primary',
    color: '#22D3EE',
    items: ['React', 'Next.js', 'Vue.js', 'AngularJS', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    variant: 'success',
    color: '#34D399',
    items: ['Node.js', 'NestJS', 'Ruby on Rails', 'Quarkus', 'APIs REST', 'Laravel'],
  },
  {
    category: 'Databases',
    variant: 'violet',
    color: '#A78BFA',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'SQL Avanzado'],
  },
  {
    category: 'Tools & DevOps',
    variant: 'orange',
    color: '#FB923C',
    items: ['Git', 'Docker', 'Jenkins', 'Postman'],
  },
  {
    category: 'Languages',
    variant: 'pink',
    color: '#F472B6',
    items: ['JavaScript', 'Python', 'PHP', 'Java', 'Ruby'],
  },
]


export default function Skills() {
  return (
    <section id="habilidades" className="py-28 bg-[#090D16]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Habilidades Técnicas</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white mb-12">
          Mi stack tecnológico
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((cat) => (
            <Card key={cat.category} variant={cat.variant} size="sm" title={cat.category}>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge key={item} color="#ffffff" bgColor="#00000059" borderColor={`${cat.color}70`}>
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <SkillRadar
          items={[
            { label: 'Frontend', value: 90 },
            { label: 'Backend', value: 75 },
            { label: 'DevOps', value: 40 },
            { label: 'Algoritmos', value: 80 },
            { label: 'Database', value: 70 },
          ]}
          accent="#A5F3FC"
        />
      </div>
    </section>
  )
}
