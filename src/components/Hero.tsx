import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ChevronDownIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons'

gsap.registerPlugin(ScrollTrigger)

gsap.registerEffect({
    name: 'rainbow',
    effect: (targets:any, config:any) => {
        let split = new SplitText(targets, { type: "words" })
        let tl = gsap.timeline()
        tl.from(split.words, {
            opacity: 0,
            y: -150,
            duration: config.duration,
            stagger: 0.05,
        })
        .to(split.words, {color: gsap.utils.wrap(["#22D3EE", "#FFFF"]), stagger: 0.05})
        return tl
    },
    defaults: { duration: 1 },
    extendTimeline: true,
})

// ── Hero ───────────────────────────────────────────────────────────────────

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const bgImageRef = useRef<HTMLImageElement>(null)

    useLayoutEffect(() => {
        if (!titleRef.current) return

        const context = gsap.context(() => {
            gsap.effects.rainbow(titleRef.current)
        }, titleRef)

        return () => context.revert()
    }, [])

    useLayoutEffect(() => {
        const section = sectionRef.current
        const image = bgImageRef.current
        if (!section || !image) return

        const getAvatar = () => document.querySelector<HTMLElement>('#about-avatar')
        const getAvatarImg = () => document.querySelector<HTMLElement>('#about-avatar img')
        const finalTop = () => window.innerHeight * 0.35

        const context = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => {
                        const rect = getAvatar()?.getBoundingClientRect()
                        if (!rect) return 0
                        const topDoc = rect.top + window.scrollY
                        return Math.max(0, topDoc - finalTop())
                    },
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            })

            // La imagen de fondo del hero se achica y se desplaza hacia el avatar.
            tl.fromTo(
                image,
                {
                    x: 0,
                    y: 0,
                    width: () => window.innerWidth,
                    height: () => window.innerHeight,
                    opacity: 0.1,
                    borderRadius: 0,
                },
                {
                    x: () => getAvatar()?.getBoundingClientRect().left ?? 0,
                    y: finalTop,
                    width: () => getAvatar()?.getBoundingClientRect().width ?? 0,
                    height: () => getAvatar()?.getBoundingClientRect().height ?? 0,
                    opacity: 1,
                    borderRadius: 16,
                    duration: 1,
                },
                0,
            )

            // Al solaparse con el avatar: se oculta la imagen del hero
            // y se muestra la imagen estática de About.
            const avatarImg = getAvatarImg()
            if (avatarImg) {
                tl.to(image, { opacity: 0, duration: 0.1 }, 0.9)
                tl.fromTo(
                    avatarImg,
                    { opacity: 0, visibility: 'hidden' },
                    { opacity: 1, visibility: 'visible', duration: 0.1 },
                    0.9,
                )
            }
        }, section)

        return () => context.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Dark base */}
            <div className="absolute inset-0 bg-[#090D16]" />

            <img
                ref={bgImageRef}
                src="/foto2.png"
                alt="Nahuel Bonino"
                className="fixed top-0 left-0 z-0 object-cover w-screen h-screen opacity-[0.1]"
            />

            {/* Ambient glows */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 70% 55% at 15% 35%, rgba(34,211,238,0.08) 0%, transparent 65%),
                        radial-gradient(ellipse 55% 45% at 85% 65%, rgba(52,211,153,0.055) 0%, transparent 65%),
                        radial-gradient(ellipse 40% 35% at 50% 95%, rgba(99,102,241,0.04) 0%, transparent 55%)
                    `,
                }}
            />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '64px 64px',
                }}
            />

            {/* Dot corners */}
            <div className="absolute top-1/4 left-[8%] w-1.5 h-1.5 rounded-full bg-[#22D3EE]/20" />
            <div className="absolute top-1/3 right-[10%] w-1 h-1 rounded-full bg-[#34D399]/25" />
            <div className="absolute bottom-1/3 left-[12%] w-1 h-1 rounded-full bg-[#22D3EE]/15" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                {/* Headline */}
                <h1 ref={titleRef} className="text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold text-white leading-[1.04] tracking-[-0.03em] mb-5">
                    Nahuel
                    {' '}
                    Bonino
                </h1>

                <p className="text-[clamp(1rem,2.5vw,1.35rem)] text-slate-400 font-medium tracking-wide mb-11">
                    Desarrollador Full Stack
                    <span className="text-white/15 mx-3">·</span>
                    Analista de Sistemas
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    <a
                        href="#proyectos"
                        className="px-7 py-3 rounded-full bg-[#22D3EE] text-[#060A12] font-semibold text-[13px] tracking-wide hover:bg-[#38BDF8] hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-[#22D3EE]/20"
                    >
                        Ver proyectos
                    </a>
                    <a
                        href="#contacto"
                        className="px-7 py-3 rounded-full border border-white/10 text-slate-300 font-semibold text-[13px] tracking-wide hover:border-white/20 hover:text-white transition-all duration-200"
                    >
                        Contactarme
                    </a>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-7">
                    {[
                        { href: 'https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/', icon: <LinkedInIcon size={17} />, label: 'LinkedIn' },
                        { href: 'https://github.com/NahuelBonino', icon: <GitHubIcon size={17} />, label: 'GitHub' },
                        { href: 'https://api.whatsapp.com/send?phone=095458701', icon: <WhatsAppIcon size={17} />, label: 'WhatsApp' },
                    ].map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="text-slate-600 hover:text-[#22D3EE] hover:scale-110 transition-all duration-200"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700 animate-bounce">
                <ChevronDownIcon />
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-28" />
        </section>
    )
}
