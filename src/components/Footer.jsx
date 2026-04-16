export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="/goster-ghost.svg"
              alt="Gōster"
              className="h-7 w-auto text-gray-900"
            />
            <img
              src="/goster-wordmark.svg"
              alt="Gōster"
              className="h-4 w-auto text-gray-900"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#beneficios"
              className="text-sm text-gray-400 hover:text-lavender-500 transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-gray-400 hover:text-lavender-500 transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#planes"
              className="text-sm text-gray-400 hover:text-lavender-500 transition-colors"
            >
              Planes
            </a>
            <a
              href="mailto:contacto@goster.ai"
              className="text-sm text-gray-400 hover:text-lavender-500 transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Gōster. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
