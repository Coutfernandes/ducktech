import { Share2, X, Link, ExternalLink, MapPin, MessageCircle } from 'lucide-react'

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Como funciona', href: '#como-funciona' },
  { name: 'Contato', href: '#contato' },
]

const services = [
  'Sites e Landing Pages',
  'Plataformas Web e SaaS',
  'Sistemas Personalizados',
  'Manutenção e Suporte',
]

const socials = [
  { name: 'Instagram', icon: Share2, label: 'Instagram (placeholder)' },
  { name: 'Twitter', icon: X, label: 'Twitter (placeholder)' },
  { name: 'LinkedIn', icon: Link, label: 'LinkedIn (placeholder)' },
  { name: 'GitHub', icon: ExternalLink, label: 'GitHub (placeholder)' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A0A]" aria-label="Rodapé">
      <div className="section pt-10 pb-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 mb-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#inicio" className="inline-flex items-center mb-4" aria-label="Duck Tech — início">
              <span className="font-black text-lg tracking-tight text-white">
                DUCK<span className="text-yellow-duck">TECH</span>
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Transformamos ideias em soluções digitais. Sites, plataformas e
              sistemas web com estratégia, design e tecnologia.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 hover:border-yellow-duck/40 hover:text-yellow-duck transition-colors"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-oliva mb-5">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-yellow-duck transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-oliva mb-5">
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-sm text-white/60 hover:text-yellow-duck transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-oliva mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5592991902330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-yellow-duck transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-oliva shrink-0" />
                  (92) 99190-2330
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-oliva shrink-0" />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45">
            © 2026 Duck Tech. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/45">
            <a href="#" className="hover:text-yellow-duck transition-colors">Privacidade</a>
            <a href="#" className="hover:text-yellow-duck transition-colors">Termos</a>
            <span className="hidden sm:inline text-white/25">|</span>
            <span className="text-oliva">Feito com tecnologia e identidade.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
