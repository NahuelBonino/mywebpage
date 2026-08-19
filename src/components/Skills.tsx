import { Badge, SectionLabel } from './ui'

// ── Datos ──────────────────────────────────────────────────────────────────

const SKILLS = [
  {
    category: 'Frontend',
    color: '#22D3EE',
    items: ['React', 'Next.js', 'Vue.js', 'AngularJS', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: '#34D399',
    items: ['Node.js', 'NestJS', 'Ruby on Rails', 'Quarkus', 'APIs REST', 'Laravel'],
  },
  {
    category: 'Databases',
    color: '#A78BFA',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'SQL Avanzado'],
  },
  {
    category: 'Tools & DevOps',
    color: '#FB923C',
    items: ['Git', 'Docker', 'Jenkins', 'Postman'],
  },
  {
    category: 'Languages',
    color: '#F472B6',
    items: ['JavaScript', 'Python', 'PHP', 'Kotlin'],
  },
]

// ── Skills ─────────────────────────────────────────────────────────────────

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
            <div
              key={cat.category}
              className="rounded-2xl bg-[#0F172A] border border-white/[0.06] p-5 hover:border-white/[0.11] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-[13px] font-semibold text-white">{cat.category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge key={item} color={`${cat.color}bb`} bgColor={`${cat.color}09`} borderColor={`${cat.color}22`}>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
