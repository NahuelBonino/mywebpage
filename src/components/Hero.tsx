import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDownIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons'

gsap.registerPlugin(ScrollTrigger)

type RainbowConfig = {
    text: string
    duration?: number
}

gsap.registerEffect({
    name: 'rainbow',
    effect: (targets: HTMLElement[], config: RainbowConfig) => {
        const target = targets[0]
        const textState = { characterCount: 0 }
        const timeline = gsap.timeline()

        if (!target) return timeline

        target.textContent = ''
        timeline.to(textState, {
            characterCount: config.text.length,
            duration: config.duration,
            ease: 'none',
            onUpdate: () => {
                target.textContent = config.text.slice(0, Math.round(textState.characterCount))
            },
        })

        return timeline
    },
    defaults: { duration: 1.4 },
    extendTimeline: true,
})

// ── Hero ───────────────────────────────────────────────────────────────────

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const firstNameTextRef = useRef<HTMLSpanElement>(null)
    const surnameTextRef = useRef<HTMLSpanElement>(null)
    const nameCursorRef = useRef<HTMLSpanElement>(null)
    const specificationTextRef = useRef<HTMLSpanElement>(null)
    const specificationCursorRef = useRef<HTMLSpanElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const heroWrapRef = useRef<HTMLDivElement>(null)
    const heroImgRef = useRef<HTMLImageElement>(null)
    const sphereRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (
            !firstNameTextRef.current ||
            !surnameTextRef.current ||
            !nameCursorRef.current ||
            !specificationTextRef.current ||
            !specificationCursorRef.current
        ) return

        const context = gsap.context(() => {
            const timeline = gsap.timeline()

            gsap.set(specificationCursorRef.current, { opacity: 0 })
            timeline.add(
                gsap.effects.rainbow(firstNameTextRef.current, {
                    text: 'Nahuel',
                    duration: 0.7,
                }),
            )
            timeline.add(
                gsap.effects.rainbow(surnameTextRef.current, {
                    text: 'Bonino',
                    duration: 0.7,
                }),
            )
            timeline
                .to(nameCursorRef.current, { opacity: 0, duration: 0.1 })
                .to(specificationCursorRef.current, { opacity: 1, duration: 0.1 })
                .add(
                    gsap.effects.rainbow(specificationTextRef.current, {
                        text: 'Desarrollador Full Stack · Analista de Sistemas',
                        duration: 2.4,
                    }),
                )

            timeline.to(specificationCursorRef.current, { opacity: 0, duration: 0.1 })
            timeline.to(firstNameTextRef.current, { color: '#22D3EE', duration: 0.1 })

            for (let blink = 0; blink < 3; blink += 1) {
                timeline
                    .to(firstNameTextRef.current, { opacity: 0, duration: 0.18 })
                    .to(firstNameTextRef.current, { opacity: 1, duration: 0.18 })
            }

        }, titleRef)

        return () => context.revert()
    }, [])

    useLayoutEffect(() => {
        const section = sectionRef.current
        const wrap = heroWrapRef.current
        const img = heroImgRef.current
        const sphere = sphereRef.current
        if (!section || !wrap || !img || !sphere) return

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
                    // Oculta el contenedor apenas el scroll real pasa el final de la
                    // transición (aunque el scrub siga "alcanzando"), y lo muestra de
                    // nuevo si volvés hacia arriba dentro del rango.
                    onLeave: () => gsap.set(wrap, { visibility: 'hidden' }),
                    onEnterBack: () => gsap.set(wrap, { visibility: 'visible' }),
                    onRefresh: (self) => {
                        gsap.set(wrap, { visibility: self.progress >= 1 ? 'hidden' : 'visible' })
                    },
                },
            })

            // El contenedor se encoge, se vuelve circular y se centra en el avatar.
            tl.fromTo(
                wrap,
                {
                    x: 0,
                    y: 0,
                    width: () => window.innerWidth,
                    height: () => window.innerHeight,
                    borderRadius: 0,
                },
                {
                    x: () => {
                        const rect = getAvatar()?.getBoundingClientRect()
                        return rect ? rect.left : 0
                    },
                    y: finalTop,
                    width: () => getAvatar()?.getBoundingClientRect().width ?? 0,
                    height: () => getAvatar()?.getBoundingClientRect().height ?? 0,
                    borderRadius: 9999,
                    duration: 1,
                },
                0,
            )

            // La foto se apaga (recortándose circular) mientras aparece la esfera.
            tl.to(img, { opacity: 0, borderRadius: 9999, duration: 0.10 }, 0.2)
            tl.fromTo(
                sphere,
                { opacity: 0, scale: 0.20 },
                { opacity: 1, scale: 0.20, duration: 0.3 },
                0.25,
            )

            // Al llegar al avatar, la esfera se disuelve en la foto real.
            const avatarImg = getAvatarImg()
            if (avatarImg) {
                tl.to(sphere, { opacity: 0, scale: 0.20, duration: 0.1 }, 0.9)
                tl.fromTo(
                    avatarImg,
                    { opacity: 0, visibility: 'hidden' },
                    { opacity: 1, visibility: 'visible', duration: 0.1 },
                    0.9,
                )
            }

            // La visibilidad del contenedor la manejan SOLO los callbacks
            // (onLeave/onEnterBack/onRefresh) basados en el scroll real, no la
            // línea de tiempo — así no hay conflicto ni bugueo al subir desde abajo.
        }, section)

        return () => context.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            <div className="absolute inset-0 bg-[#090D16]" />

            <div
                ref={heroWrapRef}
                className="fixed top-0 left-0 z-30 w-screen h-screen overflow-visible"
            >
                <img
                    ref={heroImgRef}
                    src="/foto2.png"
                    alt=""
                    className="w-full h-full object-cover opacity-[0.1]"
                />
                <div ref={sphereRef} className="absolute inset-0 opacity-0 pointer-events-none">
                    <div className="absolute -top-[110%] left-[8%] right-[8%] h-[130%] rounded-full sphere-trail" />
                    <div className="absolute -inset-[14%] rounded-full sphere-ring" />
                    <div className="absolute -inset-[22%] rounded-full sphere-ring-accent" />
                    <div className="absolute -inset-[40%] rounded-full sphere-glow" />
                    <div className="absolute inset-0 rounded-full sphere-core" />
                </div>
            </div>

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

            <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '64px 64px',
                }}
            />

            <div className="absolute top-1/4 left-[8%] w-1.5 h-1.5 rounded-full bg-[#22D3EE]/20" />
            <div className="absolute top-1/3 right-[10%] w-1 h-1 rounded-full bg-[#34D399]/25" />
            <div className="absolute bottom-1/3 left-[12%] w-1 h-1 rounded-full bg-[#22D3EE]/15" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                <h1 ref={titleRef} className="text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold text-white leading-[1.04] tracking-[-0.03em] mb-5">
                    <span ref={firstNameTextRef} />{' '}
                    <span ref={surnameTextRef} />
                    <span ref={nameCursorRef} className="ml-1 text-[#22D3EE]" aria-hidden="true">|</span>
                </h1>

                <p className="text-[clamp(1rem,2.5vw,1.35rem)] text-slate-400 font-medium tracking-wide mb-11">
                    <span ref={specificationTextRef} />
                    <span ref={specificationCursorRef} className="ml-1 text-[#22D3EE]" aria-hidden="true">|</span>
                </p>

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

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 select-none">
                <span className="text-[10px] font-mono tracking-[0.35em] text-slate-500 uppercase">Scroll</span>
                <span className="inline-flex text-[#22D3EE]/80 animate-bounce">
                    <ChevronDownIcon size={18} />
                </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-28" />
        </section>
    )
}
