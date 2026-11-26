import { ArrowRight, MessageCircle } from 'lucide-react'
import { SectionLabel } from './ui/section-label'
import { Button } from './ui/button'

function openWhatsApp(message: string) {
  const url = `https://wa.me/5592991902330?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function CTA() {
  return (
    <section id="contato" className="section-padding relative overflow-hidden" aria-labelledby="cta-title">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-preto to-preto pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,197,24,0.12),transparent_62%)] blur-2xl pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="section relative z-10">
        <div className="max-w-3xl">
          <SectionLabel className="mb-5">Vamos começar</SectionLabel>
          <h2 id="cta-title" className="text-3xl md:text-4xl font-black tracking-tight mb-6">
            Sua próxima ideia merece{' '}
            <span className="text-yellow-duck">sair do papel.</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-xl">
            Vamos construir juntos uma solução digital para transformar seu
            negócio? Conte o que você precisa e retornamos com uma proposta.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button
              variant="yellow"
              size="lg"
              onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento para um projeto com a Duck Tech.')}
            >
              Começar um projeto <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openWhatsApp('Olá! Gostaria de conversar com a equipe da Duck Tech.')}
            >
              Falar com a equipe
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-x-8 gap-y-3">
            <a
              href="https://wa.me/5592991902330"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-yellow-duck transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-oliva" />
              (92) 99190-2330
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
