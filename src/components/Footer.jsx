import { GhostLogo, Wordmark } from './Logo'

export default function Footer() {
  return (
    <footer className="py-10 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-white/40">
            <GhostLogo className="h-6 w-auto" eyeColor="#0a0a0f" />
            <Wordmark className="text-base" />
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: 'Plataforma', href: '#plataforma' },
              { label: 'Características', href: '#caracteristicas' },
              { label: 'Planes', href: '#planes' },
              { label: 'Contacto', href: 'mailto:contacto@goster.ai' },
            ].map((link) => (
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
            &copy; {new Date().getFullYear()} Gōster. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
