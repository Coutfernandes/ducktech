import { ArrowRight, Search, PenTool, Rocket } from 'lucide-react'
import { SectionLabel } from './ui/section-label'
import { Button } from './ui/button'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Briefing e descoberta',
    desc: 'Entendemos o seu negócio, o público e os objetivos do projeto para definir a melhor estratégia digital.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design e desenvolvimento',
    desc: 'Criamos a identidade visual e desenvolvemos a solução com foco em performance, usabilidade e escalabilidade.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Entrega e suporte',
    desc: 'Publicamos o projeto, acompanhamos os resultados e oferecemos suporte contínuo para evoluir a aplicação.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-padding relative"
      aria-labelledby="como-funciona-title"
    >
      <div className="section">
        <div className="section-header">
          <SectionLabel className="mb-5">Como trabalhamos</SectionLabel>
          <h2 id="como-funciona-title">
            Do briefing ao lançamento,{' '}
            <span className="text-yellow-duck">com você em cada etapa.</span>
          </h2>
          <p>
            Um processo claro, transparente e sem surpresas — do primeiro contato
            à evolução contínua do seu produto digital.
          </p>
        </div>

        <div className="relative">
          {/* Progress line (desktop) */}
          <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-yellow-duck/10 via-yellow-duck/50 to-yellow-duck/10" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-7">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-start text-left">
                {/* Step marker */}
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-duck/30 bg-preto text-sm font-black text-yellow-duck">
                  {step.number}
                </div>

                <div className="icon-tile icon-tile-olive mb-5 md:hidden">
                  <step.icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                  <step.icon className="hidden md:block w-5 h-5 text-yellow-duck" />
                  {step.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-start">
          <Button
            variant="yellow"
            size="lg"
            onClick={() =>
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Começar um projeto <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
