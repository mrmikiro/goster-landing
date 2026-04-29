import { GhostLogo, Wordmark } from './Logo'
import { useLang } from '../i18n/LanguageContext'

const t = {
  es: {
    links: [
      { label: 'Plataforma', href: '#plataforma' },
      { label: 'Características', href: '#caracteristicas' },
      { label: 'Planes', href: '#planes' },
      { label: 'Guía de usuario', href: '/guia.html' },
      { label: 'Contacto', href: 'mailto:contacto@goster.ai' },
    ],
    rights: 'Todos los derechos reservados',
    developedBy: 'Desarrollado por',
  },
  en: {
    links: [
      { label: 'Platform', href: '#plataforma' },
      { label: 'Features', href: '#caracteristicas' },
      { label: 'Pricing', href: '#planes' },
      { label: 'User guide', href: '/guia.html' },
      { label: 'Contact', href: 'mailto:contacto@goster.ai' },
    ],
    rights: 'All rights reserved',
    developedBy: 'Developed by',
  },
}

export default function Footer() {
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <footer className="py-10 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-white/40">
            <GhostLogo className="h-6 w-auto" />
            <Wordmark className="h-3.5 w-auto" />
          </div>

          <div className="flex items-center gap-6">
            {txt.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-white/20 hover:text-white/40 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} gōster. {txt.rights}.
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-[10px] text-white/10">
            {txt.developedBy}{' '}
            <a href="https://www.stonevale.io" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/40 transition-colors">
              STONEVALE
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
