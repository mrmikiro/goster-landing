import { useScrollReveal } from '../hooks/useScrollReveal'
import { GhostLogo } from './Logo'

export default function FinalCTA() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-lavender-600/8 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="fade-up mb-8">
          <GhostLogo className="h-16 w-auto mx-auto opacity-10" />
        </div>
        <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
          Empieza hoy.{' '}
          <span className="gradient-text">Reduce tu carga de trabajo</span>{' '}
          desde el primer estudio.
        </h2>
        <p className="fade-up delay-2 mt-6 text-white/40 text-lg font-light max-w-xl mx-auto">
          Únete a los radiólogos que ya están transformando su práctica con inteligencia artificial.
        </p>
        <div className="fade-up delay-3 mt-10">
          <a
            href="https://app.goster.ai"
            className="group inline-flex items-center gap-2.5 px-10 py-4 text-base font-medium text-white bg-lavender-600 rounded-full hover:bg-lavender-500 transition-all duration-300 hover:shadow-xl hover:shadow-lavender-600/25"
          >
            Entrar a la plataforma
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
