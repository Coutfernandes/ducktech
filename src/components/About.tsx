import { Sparkles, Code2, Handshake } from 'lucide-react'
import { SectionLabel } from './ui/section-label'

const pillars = [
  {
    icon: Sparkles,
    title: 'Inovação',
    desc: 'Soluções criativas e alinhadas às necessidades de cada projeto, com design que traduz a personalidade da sua marca.',
    tone: 'yellow' as const,
  },
  {
    icon: Code2,
    title: 'Tecnologia',
    desc: 'Aplicações modernas, funcionais e eficientes, construídas com as melhores práticas e foco em performance.',
    tone: 'neutral' as const,
  },
  {
    icon: Handshake,
    title: 'Conexão',
    desc: 'Tecnologia criada para aproximar empresas e pessoas, gerando experiências digitais memoráveis.',
    tone: 'red' as const,
  },
]

export function About() {
  return (
    <section id="sobre" className="section-padding relative" aria-labelledby="sobre-title">
      <div className="absolute inset-0 bg-gradient-to-b from-preto via-[#101010] to-preto pointer-events-none" />
      <div className="section relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <SectionLabel className="mb-5">Sobre a Duck Tech</SectionLabel>
            <h2 id="sobre-title" className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              Tecnologia com propósito,{' '}
              <span className="text-yellow-duck">design com identidade.</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              Fundada em 2026 por Matheus Fernandes e seu irmão Marcos Fernandes,
              a Duck Tech nasceu com o propósito de transformar ideias em soluções
              digitais. Desenvolvemos sites, plataformas e sistemas web que conectam
              tecnologia, criatividade e estratégia para ajudar negócios a crescerem
              no ambiente digital.
            </p>
          </div>

          {/* Right: pillars */}
          <div className="lg:col-span-7">
            <div className="grid gap-5">
              {pillars.map((pillar, i) => (
                <div key={pillar.title} className="card group">
                  <div className="flex items-start gap-5">
                    <div
                      className={
                        pillar.tone === 'yellow'
                          ? 'icon-tile shrink-0'
                          : pillar.tone === 'red'
                            ? 'icon-tile icon-tile-red shrink-0'
                            : 'icon-tile icon-tile-olive shrink-0'
                      }
                    >
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4 mb-1.5">
                        <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                        <span className="text-xs font-bold tracking-[0.2em] text-white/25">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="text-sm text-white/65 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-white/10 bg-[#111111] px-6 py-5">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-duck" />
                <span className="text-xs text-white/60">Soluções 100% personalizadas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-oliva" />
                <span className="text-xs text-white/60">Acompanhamento próximo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-vermelho" />
                <span className="text-xs text-white/60">Foco em resultado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
