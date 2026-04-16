import { useScrollReveal } from '../hooks/useScrollReveal'
import { GhostLogo } from './Logo'

export default function Philosophy() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-32 bg-dark-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lavender-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="fade-up mb-6">
            <GhostLogo className="h-16 w-auto mx-auto opacity-20" />
          </div>
          <p className="fade-up delay-1 text-sm font-medium text-lavender-400 tracking-wide uppercase mb-3">Filosofía</p>
          <h2 className="fade-up delay-2 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Tu <span className="gradient-text">ghostwriter</span> radiológico
          </h2>
        </div>

        <div className="fade-up delay-3 space-y-6 text-center max-w-3xl mx-auto">
          <p className="text-white/50 text-lg leading-relaxed font-light">
            El nombre nace de <span className="text-white/80 font-medium">ghostwriter</span> — escritor fantasma.
            La <span className="text-white/80 font-medium">Ō</span> representa la H ausente.
            gōster trabaja en silencio para que el informe hable por ti.
          </p>
          <p className="text-white/50 text-lg leading-relaxed font-light">
            No es un transcriptor. No es un chatbot. Es tu <span className="text-white/80 font-medium">copiloto clínico invisible</span> que
            entiende cómo piensas, cómo redactas y cómo diagnosticas. Habla como si estuvieras platicando
            el caso con un colega — gōster escucha, interpreta y redacta el informe completo con terminología profesional.
          </p>
          <p className="text-white/50 text-lg leading-relaxed font-light">
            Olvídate del tedio de redactar. Dedica tu tiempo a lo que realmente importa:
            <span className="text-white/80 font-medium"> analizar tus estudios a profundidad</span>.
            gōster se encarga del resto.
          </p>
        </div>

        {/* Key differentiators */}
        <div className="fade-up delay-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Habla natural',
              desc: 'No necesitas dictar estructurado. Comenta el caso como si hablaras con un colega. gōster entiende tu intención clínica, no solo tus palabras.',
            },
            {
              title: 'Aprende de ti',
              desc: 'Cada corrección se convierte en una regla futura. Tu diccionario crece, tus conclusiones se afinan y tus informes son cada vez más tuyos.',
            },
            {
              title: 'Cero alucinaciones',
              desc: 'gōster no inventa hallazgos. Si no lo dictaste, no aparece en el informe. Fidelidad absoluta a tu dictado, expandido con tu propio diccionario.',
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
