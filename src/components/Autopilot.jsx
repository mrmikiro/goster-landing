import { useScrollReveal } from '../hooks/useScrollReveal'
import { Sparkles, Zap } from 'lucide-react'

export default function Autopilot() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dark-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lavender-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender-600/10 border border-lavender-500/20 mb-8">
          <Zap className="w-3.5 h-3.5 text-lavender-400" strokeWidth={1.5} />
          <span className="text-xs font-medium text-lavender-300 tracking-wide">Modo autopilot</span>
        </div>

        <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
          ¿No tienes plantillas?{' '}
          <span className="gradient-text">No las necesitas.</span>
        </h2>

        <p className="fade-up delay-2 mt-5 text-white/40 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          <strong className="text-white/70 font-medium">gōster</strong> domina el lenguaje radiológico.
          Sin plantilla, sin diccionario — solo dicta tus hallazgos y recibe un informe
          profesional con estructura, terminología y conclusiones diagnósticas.
        </p>

        <div className="fade-up delay-3 mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            {
              title: 'Solo dicta',
              desc: 'Habla como si comentaras el caso. Sin configurar nada.',
            },
            {
              title: 'Informe completo',
              desc: 'Hallazgos estructurados, conclusión diagnóstica y formato profesional.',
            },
            {
              title: 'Listo para firmar',
              desc: 'Revisa, ajusta si quieres, copia y pega. Así de simple.',
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-white/5 bg-dark-800/50">
              <Sparkles className="w-4 h-4 text-lavender-400 mb-3" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
