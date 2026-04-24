import { GhostLogo, Wordmark } from './Logo'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Check } from 'lucide-react'

export default function Hero() {
  const ref = useScrollReveal()

  return (
    <section className="relative bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-lavender-600/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="flex justify-center mb-8">
          <div className="ghost-animate">
            <GhostLogo className="h-28 md:h-36 w-auto" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="word-animate">
            <Wordmark className="h-12 md:h-16 w-auto" />
          </div>
        </div>

        <h2 className="fade-up delay-3 mt-8 text-center text-2xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] max-w-4xl mx-auto">
          <span className="text-white">Tu asistente personal de</span>
          <br />
          <span className="gradient-text">redacción radiológica</span>
        </h2>

        <p className="fade-up delay-4 mt-5 text-center text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto">
          El teclado es historia — bienvenido a la evolución del dictado.
        </p>

        <p className="fade-up delay-5 mt-4 text-center text-base text-white/35 max-w-xl mx-auto font-light leading-relaxed">
          Dedícate a interpretar con naturalidad. <strong className="text-white/60 font-medium">gōster</strong> escribe los informes por ti.
          <br />
          <span className="text-white/50">Con tus palabras, en tu estilo.</span>
        </p>

        <div className="fade-up delay-6 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.goster.ai"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-medium text-white bg-lavender-600 rounded-full hover:bg-lavender-500 transition-all duration-300 hover:shadow-xl hover:shadow-lavender-600/25"
          >
            <span className="absolute inset-0 rounded-full bg-lavender-400/20 animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s' }} />
            Probar gratis
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white/50 border border-white/10 rounded-full hover:border-white/25 hover:text-white/80 transition-all duration-300"
          >
            Ver cómo funciona
          </a>
        </div>

        <div className="fade-up delay-7 mt-8 flex flex-wrap items-center justify-center gap-6">
          {['Sin tarjeta de crédito', '3 plantillas incluidas', 'Sin compromiso'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-lavender-400" strokeWidth={2} />
              <span className="text-xs text-white/30 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
