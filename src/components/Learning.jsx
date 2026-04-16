import { useScrollReveal } from '../hooks/useScrollReveal'
import { TrendingUp, BookOpen, History, Brain, ArrowRight, Sparkles } from 'lucide-react'

const points = [
  {
    icon: BookOpen,
    title: 'Correcciones que se convierten en reglas',
    desc: 'Cada vez que editas un informe y guardas los cambios, gōster extrae patrones de redacción y los aplica en futuros informes. Lo que hoy corriges, mañana ya no tendrás que tocarlo.',
  },
  {
    icon: TrendingUp,
    title: 'Diccionario que crece contigo',
    desc: 'gōster incorpora automáticamente nuevas entradas al diccionario a partir de tus correcciones. Tu vocabulario clínico se expande con el uso, sin esfuerzo extra.',
  },
  {
    icon: History,
    title: 'Historial como memoria activa',
    desc: 'Tus reportes previos no son solo referencia: son memoria activa que modifica el comportamiento del modelo. gōster identifica tu estilo, tus equivalencias diagnósticas y tus decisiones.',
  },
  {
    icon: Brain,
    title: 'Transferencia de aprendizaje',
    desc: 'Cuando gōster detecta hallazgos similares en un nuevo informe, aplica automáticamente el estilo corregido en casos previos. Una corrección se transfiere a todos los casos análogos futuros.',
  },
]

export default function Learning() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="fade-up text-sm font-medium text-lavender-400 tracking-wide uppercase mb-3">Aprendizaje continuo</p>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Cuanto más lo usas, <span className="gradient-text">mejor funciona</span>
          </h2>
          <p className="fade-up delay-2 mt-5 text-white/40 text-lg font-light">
            El primer informe es bueno. El décimo es mejor. El centésimo es tuyo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {points.map((point, i) => {
            const Icon = point.icon
            return (
              <div key={i} className={`fade-up delay-${i + 1} group p-6 rounded-2xl border border-white/5 bg-dark-800/50 hover:border-lavender-500/20 transition-all duration-300`}>
                <div className="w-10 h-10 rounded-xl bg-lavender-600/10 flex items-center justify-center mb-4 group-hover:bg-lavender-600/20 transition-colors">
                  <Icon className="w-5 h-5 text-lavender-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{point.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Flow diagram */}
        <div className="fade-up delay-5 mt-16 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center">
          {['Dictas', 'gōster genera', 'Corriges', 'gōster aprende', 'Mejores informes'].map((step, i) => (
            <div key={i} className="flex items-center gap-3 md:gap-4">
              <div className="px-4 py-2 rounded-full border border-white/10 bg-dark-800/50">
                <span className="text-xs text-white/50 font-medium">{step}</span>
              </div>
              {i < 4 && <ArrowRight className="w-3.5 h-3.5 text-white/15 hidden md:block" strokeWidth={1.5} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
