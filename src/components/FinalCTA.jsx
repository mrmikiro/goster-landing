import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCTA() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gray-50/60">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="fade-up text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Empieza hoy.{' '}
          <span className="gradient-text">Reduce tu carga de trabajo</span>{' '}
          desde el primer estudio.
        </h2>
        <p className="fade-up fade-up-delay-1 mt-5 text-gray-500 text-lg font-light max-w-xl mx-auto">
          Únete a los radiólogos que ya están transformando su práctica con inteligencia artificial.
        </p>
        <div className="fade-up fade-up-delay-2 mt-10">
          <a
            href="https://app.goster.ai"
            className="group inline-flex items-center gap-2 px-10 py-4 text-base font-medium text-white bg-lavender-600 rounded-full hover:bg-lavender-700 transition-all hover:shadow-xl hover:shadow-lavender-200"
          >
            Probar Gōster gratis
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
