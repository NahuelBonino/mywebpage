import { EmailIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons'
import { SectionLabel } from './ui'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'nahuelboninoa@gmail.com',
    href: 'mailto:nahuelboninoa@gmail.com',
    icon: <EmailIcon size={20} />,
    color: '#22D3EE',
    gradient: 'linear-gradient(166.9deg, #155E75 53.19%, #22D3EE 107.69%)',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nahuel-bonino-acuña',
    href: 'https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/',
    icon: <LinkedInIcon size={20} />,
    color: '#0A84FF',
    gradient: 'linear-gradient(166.9deg, #075985 53.19%, #0A84FF 107.69%)',
  },
  {
    label: 'GitHub',
    value: 'github.com/NahuelBonino',
    href: 'https://github.com/NahuelBonino',
    icon: <GitHubIcon size={20} />,
    color: '#E2E8F0',
    gradient: 'linear-gradient(166.9deg, #1E293B 53.19%, #475569 107.69%)',
  },
  {
    label: 'WhatsApp',
    value: '095 458 701',
    href: 'https://api.whatsapp.com/send?phone=095458701',
    icon: <WhatsAppIcon size={20} />,
    color: '#25D366',
    gradient: 'linear-gradient(166.9deg, #065F46 53.19%, #25D366 107.69%)',
  },
]


export default function Contact() {
  return (
    <section id="contacto" className="py-28 bg-[#060A12]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Contacto</SectionLabel>

        <div className="mt-6 mb-12">
          <p className="text-slate-400 text-[15px] max-w-md leading-relaxed">
            Estoy disponible para proyectos freelance, posiciones full-time o simplemente una buena conversación técnica.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_LINKS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group rounded-2xl border p-5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-4"
              style={{
                backgroundImage: `var(--texture-noise), ${c.gradient}`,
                borderColor: `${c.color}4d`,
                ['--card-accent' as string]: c.color,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ring-1 ring-white/10 transition-colors duration-300"
                style={{ backgroundColor: 'rgba(0,0,0,0.28)', color: c.color }}
              >
                {c.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-white/55 font-mono tracking-widest mb-1 uppercase">
                  {c.label}
                </div>
                <div className="text-[13px] text-white/85 font-medium group-hover:text-white transition-colors duration-200 break-all leading-snug">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
