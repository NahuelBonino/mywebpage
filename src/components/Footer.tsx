import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons'

// ── Footer ─────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="py-8 bg-[#060A12] border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-slate-700 text-[12px] font-mono">
          © {new Date().getFullYear()} Nahuel Bonino
        </span>
        <div className="flex items-center gap-5">
          {[
            { href: 'https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/', icon: <LinkedInIcon size={15} />, label: 'LinkedIn' },
            { href: 'https://github.com/NahuelBonino', icon: <GitHubIcon size={15} />, label: 'GitHub' },
            { href: 'https://api.whatsapp.com/send?phone=095458701', icon: <WhatsAppIcon size={15} />, label: 'WhatsApp' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-700 hover:text-[#22D3EE] transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
