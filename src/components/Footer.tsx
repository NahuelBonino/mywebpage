import { Link } from 'react-router-dom'
import { EmailIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons'

// ── Footer ─────────────────────────────────────────────────────────────────

const LEGAL_LINKS = [
  { to: '/terminos#condiciones-generales', label: 'Términos del servicio' },
  { to: '/terminos#reembolso', label: 'Política de reembolso' },
]

export default function Footer() {
  return (
    <footer className="py-8 bg-[#060A12] border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LEGAL_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-slate-500 hover:text-[#22D3EE] text-[13px] font-medium tracking-wide transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:contacto@nahuelbonino.uy"
            className="text-slate-500 hover:text-[#22D3EE] text-[13px] font-medium tracking-wide transition-colors duration-200"
          >
            contacto@nahuelbonino.uy
          </a>
        </div>

        <div className="flex items-center justify-between gap-4 w-full flex-col sm:flex-row">
          <span className="text-slate-700 text-[12px] font-mono">
            © {new Date().getFullYear()} Nahuel Bonino
          </span>
          <div className="flex items-center gap-5">
            {[
              { href: 'https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/', icon: <LinkedInIcon size={15} />, label: 'LinkedIn' },
              { href: 'https://github.com/NahuelBonino', icon: <GitHubIcon size={15} />, label: 'GitHub' },
              { href: 'https://api.whatsapp.com/send?phone=095458701', icon: <WhatsAppIcon size={15} />, label: 'WhatsApp' },
              { href: 'mailto:contacto@nahuelbonino.uy', icon: <EmailIcon size={15} />, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-slate-700 hover:text-[#22D3EE] transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
