import { Palette, Gauge, MessagesSquare, LifeBuoy } from 'lucide-react'
import { SectionLabel } from './ui/section-label'

const differentials = [
  {
    icon: Palette,
    title: 'Design sob medida',
    desc: 'Cada projeto é único. Criamos interfaces com personalidade, alinhadas à identidade da sua marca — sem templates genéricos.',
    tone: 'yellow' as const,
  },
  {
    icon: Gauge,
    title: 'Performance e escalabilidade',
    desc: 'Código otimizado, boas práticas e arquitetura preparada para crescer junto com o seu negócio.',
    tone: 'neutral' as const,
  },
  {
    icon: MessagesSquare,
    title: 'Comunicação direta',
    desc: 'Você fala direto com quem desenvolve. Processo transparente, prazos claros e acompanhamento em cada etapa.',
    tone: 'red' as const,
  },
  {
    icon: LifeBuoy,
    title: 'Suporte contínuo',
    desc: 'Não abandonamos o projeto após o lançamento. Acompanhamento técnico e evolução constante da sua aplicação.',
    tone: 'yellow' as const,
  },
]

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-padding pt-4 md:pt-6 lg:pt-8 relative overflow-hidden"
      aria-labelledby="diferenciais-title"
    >
      <div className="absolute inset-0 bg-[#0A0A0A] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute right-[-10%] top-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(245,197,24,0.10),transparent_65%)] blur-2xl pointer-events-none" />

      <div className="section relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionLabel className="mb-5">Diferenciais</SectionLabel>
            <h2 id="diferenciais-title" className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              Por que escolher a{' '}
              <span className="text-yellow-duck">Duck Tech?</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-md">
              Unimos visão de negócio, design e engenharia para entregar produtos
              digitais que realmente geram resultado — não apenas sites bonitos.
            </p>

            <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 max-w-md">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-2 w-2 rounded-full bg-yellow-duck" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-oliva">
                  Nosso compromisso
                </span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Entregar tecnologia que funciona, design que diferencia e uma
                parceria que acompanha o crescimento do seu negócio.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map((item) => (
                <div key={item.title} className="card group">
                  <div
                    className={
                      item.tone === 'yellow'
                        ? 'icon-tile mb-4'
                        : item.tone === 'red'
                          ? 'icon-tile icon-tile-red mb-4'
                          : 'icon-tile icon-tile-olive mb-4'
                    }
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{item.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
