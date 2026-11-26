import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from './ui/utils'

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Como funciona', href: '#como-funciona' },
  { name: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)
  const scrollToContact = () => {
    setIsOpen(false)
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 glass-navbar',
        scrolled && 'border-b border-white/10',
      )}
    >
      <div className="section flex items-center justify-between h-16 md:h-20">
        <a
          href="#inicio"
          className="flex items-center shrink-0"
          onClick={closeMenu}
          aria-label="Duck Tech — início"
        >
          <span className="font-black text-lg tracking-tight text-white">
            DUCK<span className="text-yellow-duck">TECH</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-[13px] font-medium text-white/65 hover:text-yellow-duck transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={scrollToContact}>
            Vamos conversar
          </Button>
          <Button variant="yellow" size="sm" onClick={scrollToContact}>
            Solicitar orçamento
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-white hover:text-yellow-duck transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-preto/98 backdrop-blur-md lg:hidden">
          <div className="absolute top-5 right-5">
            <button onClick={closeMenu} className="p-2 text-white/60 hover:text-white" aria-label="Fechar menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 h-full px-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-xl font-semibold text-white hover:text-yellow-duck transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 w-full max-w-xs mt-6">
              <Button variant="yellow" size="lg" className="w-full" onClick={scrollToContact}>
                Solicitar orçamento
              </Button>
              <Button variant="outline" size="lg" className="w-full" onClick={scrollToContact}>
                Vamos conversar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
