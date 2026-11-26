import { ArrowUpRight, Layout, Code2, Settings, Shield } from 'lucide-react'
import { SectionLabel } from './ui/section-label'

const services = [
  {
    number: '01',
    title: 'Sites institucionais e Landing Pages',
    icon: Layout,
    desc: 'Desenvolvimento de sites profissionais e páginas estratégicas para apresentar marcas, produtos e serviços com clareza e impacto.',
    tags: ['Institucional', 'Landing Page', 'SEO'],
  },
  {
    number: '02',
    title: 'Plataformas Web e SaaS',
    icon: Code2,
    desc: 'Criação de plataformas digitais e aplicações web escaláveis para diferentes modelos de negócio, com arquitetura pensada para crescer.',
    tags: ['SaaS', 'Dashboard', 'API'],
  },
  {
    number: '03',
    title: 'Sistemas Web Personalizados',
    icon: Settings,
    desc: 'Sistemas desenvolvidos sob medida para otimizar processos, organizar informações e facilitar a gestão do seu negócio.',
    tags: ['Sob medida', 'Automação', 'Gestão'],
  },
  {
    number: '04',
    title: 'Manutenção e Suporte',
    icon: Shield,
    desc: 'Acompanhamento técnico, atualizações, melhorias e manutenção contínua de aplicações web para manter tudo funcionando.',
    tags: ['Suporte', 'Atualizações', 'Monitoramento'],
  },
]

export function Services() {
  return (
    <section id="servicos" className="section-padding relative" aria-labelledby="servicos-title">
      <div className="section">
        <div className="section-header">
          <SectionLabel className="mb-6">Serviços</SectionLabel>
          <h2 id="servicos-title">
            Transformamos necessidades{' '}
            <span className="text-yellow-duck">em soluções digitais.</span>
          </h2>
          <p>
            Da primeira ideia ao produto final, desenvolvemos soluções para
            fortalecer sua presença digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <article key={service.number} className="card group flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="icon-tile">
                  <service.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold tracking-[0.22em] text-white/25">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed mb-4 flex-1">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-duck hover:text-white transition-colors"
              >
                Saber mais
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
