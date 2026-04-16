import { useState, useEffect } from 'react'
import { GhostLogo, Wordmark } from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Plataforma', href: '#plataforma' },
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Planes', href: '#planes' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-white">
          <GhostLogo className="h-7 w-auto" invert />
          <Wordmark className="h-4 w-auto" invert />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.goster.ai"
            className="inline-flex items-center px-5 py-2 text-[13px] font-medium text-white bg-lavender-600 rounded-full hover:bg-lavender-500 transition-all duration-300 hover:shadow-lg hover:shadow-lavender-600/20"
          >
            Probar gratis
          </a>
        </div>

        <button
          className="md:hidden p-2 text-white/60"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-white/50 hover:text-white py-2.5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.goster.ai"
            className="block text-center mt-2 px-5 py-2.5 text-sm font-medium text-white bg-lavender-600 rounded-full"
          >
            Probar gratis
          </a>
        </div>
      )}
    </nav>
  )
}
