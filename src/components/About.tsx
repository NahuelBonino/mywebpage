import { SectionLabel } from './ui'

export default function About() {
    return (
        <section id="sobre-mi" className="py-28 bg-[#090D16]">
            <div className="max-w-[1200px] mx-auto px-6">
                <SectionLabel>Sobre mí</SectionLabel>

                <div className="mt-14 grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-14 lg:gap-20 items-start">
                    <div className="relative">
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#22D3EE]/25 to-[#34D399]/10 blur-sm opacity-70" />
                        <div id="about-avatar" className="relative rounded-2xl overflow-hidden bg-[#0F172A] aspect-square ring-1 ring-white/[0.06]">
                            <img
                                src="/foto2.png"
                                alt="Nahuel Bonino"
                                className="w-full h-full object-cover opacity-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-xl bg-[#22D3EE]/[0.07] border border-[#22D3EE]/15" />
                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-[#34D399]/[0.07] border border-[#34D399]/15" />
                    </div>

                    <div>
                        <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white leading-[1.2] mb-6">
                            Una breve descripción de mi persona
                        </h2>

                        <div className="space-y-4 text-[15px] text-slate-400 leading-relaxed">
                            <p> Soy estudiante avanzado de Ingeniería en Computación (UdelaR), proyectando recibirme en 2027. Me gusta enfrentarme a problemas que me obliguen a pensar, aprender cosas nuevas y encontrar soluciones que realmente aporten valor. </p> 
                            <p> Llevo alrededor de 6 años trabajando en el sector IT, y tuve la oportunidad de conocer realidades bastante distintas: desde el mantenimiento de servidores hasta el desarrollo, deploy y mantenimiento de aplicaciones utilizadas por muchas personas. Hoy me desempeño como Full Stack Developer, con especial interés en construir soluciones escalables, mantenibles y con código del que uno pueda sentirse orgulloso. </p> 
                            <p> Algo que valoro especialmente es la forma en que se trabaja en equipo. Para mí, un buen equipo se construye con compromiso, comunicación, confianza y la disposición de dar una mano cuando hace falta. Creo que cuando esas cosas están presentes, no solo se trabaja mejor, sino que también se aprende mucho más. </p> 
                            <p> Fuera de lo profesional, me llama especialmente la atención el mundo del Machine Learning. Y cuando dejo la computadora de lado, soy hincha apasionado de Peñarol y bastante fanático del fútbol. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
