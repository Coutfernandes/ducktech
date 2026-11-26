import { ArrowRight, ArrowUpRight, CircleCheck } from 'lucide-react'
import duckNotebook from '../assets/duck-tech-notebook.png'
import { Button } from './ui/button'
import { SectionLabel } from './ui/section-label'

const metrics = [
  { value: '2026', label: 'Ano de fundação' },
  { value: '2', label: 'Fundadores' },
  { value: '100%', label: 'Sob medida' },
]

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL']

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden pt-24 md:pt-28 pb-12 md:pb-16"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0D0D0D]" />
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute top-[-20%] right-[-5%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(245,197,24,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-30%] left-[-15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(156,150,114,0.10),transparent_65%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-preto" />
      </div>

      <div className="section relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <SectionLabel className="mb-5">Tecnologia com segurança</SectionLabel>

            <h1
              id="hero-title"
              className="text-[2.6rem] leading-[1.04] sm:text-5xl lg:text-[4.1rem] font-black tracking-[-0.035em] text-white mb-5"
            >
              Ideias que viram{' '}
              <span className="text-yellow-duck">soluções digitais.</span>
            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-xl mb-7 leading-relaxed">
              A Duck Tech desenvolve sites, plataformas e sistemas web que unem
              estratégia, design e tecnologia para impulsionar o seu negócio no
              ambiente digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <Button
                variant="yellow"
                size="lg"
                onClick={() =>
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Solicitar orçamento <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Conhecer nossos serviços
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/10 pt-7">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-2xl font-black text-white tracking-tight">{m.value}</span>
                  <span className="text-xs text-oliva mt-0.5">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mascot */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(245,197,24,0.22),transparent_62%)] blur-2xl" />

              {/* Concentric accents */}
              <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-duck/15" />
              <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-duck/10" />

              <div className="relative overflow-hidden rounded-[2rem] border border-cinza-medio/40 bg-[#101010]">
                <img
                  src={duckNotebook}
                  alt="Mascote pato da Duck Tech desenvolvendo um projeto no notebook"
                  className="w-full h-auto block"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Availability badge */}
              <div className="absolute -bottom-5 left-4 sm:left-8 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#151515]/95 px-4 py-3 backdrop-blur">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-vermelho opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-vermelho" />
                </span>
                <span className="text-xs font-medium text-white/80">
                  Disponível para novos projetos
                </span>
              </div>

              {/* Floating capability chip */}
              <div className="absolute -top-4 right-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-[#151515]/95 px-4 py-2.5 backdrop-blur">
                <CircleCheck className="w-4 h-4 text-yellow-duck" />
                <span className="text-xs font-medium text-white/80">Entrega sob medida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stack bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-oliva shrink-0">
              Tecnologias que dominamos
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {stack.map((tech) => (
                <span key={tech} className="text-sm font-semibold text-white/45 hover:text-white/80 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#servicos"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-duck hover:text-white transition-colors ml-auto shrink-0"
            >
              Ver serviços <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
