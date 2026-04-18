import { useScrollReveal } from '../hooks/useScrollReveal'
import { GhostLogo } from './Logo'

export default function Philosophy() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dark-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lavender-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="fade-up mb-6">
            <GhostLogo className="h-14 w-auto mx-auto opacity-20" />
          </div>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Tu <span className="gradient-text">ghostwriter</span> radiológico
          </h2>
          <p className="fade-up delay-2 mt-5 text-white/40 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            El nombre nace de <span className="text-white/70 font-medium">ghostwriter</span> — el escriba invisible.
          </p>
          <p className="fade-up delay-3 mt-3 text-white/50 text-lg font-light max-w-3xl mx-auto leading-relaxed">
            <strong className="text-white/80 font-medium">gōster</strong> es tu ghostwriter clínico personalizado:
            escribe como tú, contigo y&nbsp;para&nbsp;ti.
          </p>
        </div>

        <div className="fade-up delay-3 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Habla natural',
              desc: 'Comenta el caso como si hablaras con un colega. La IA entiende tu intención clínica.',
            },
            {
              title: 'Aprende de ti',
              desc: 'Cada corrección mejora los próximos informes. Tu diccionario crece con el uso.',
            },
            {
              title: 'Fidelidad absoluta',
              desc: 'Si no lo dictaste, no aparece. Sin alucinaciones. Sin invenciones.',
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-dark-800/50">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
