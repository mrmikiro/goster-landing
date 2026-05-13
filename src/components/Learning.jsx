import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { TrendingUp, BookOpen, History, Brain, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

const t = {
  es: {
    sectionLabel: 'Aprendizaje continuo',
    heading1: 'Cuanto más lo usas, ',
    heading2: 'mejor funciona',
    subtitle: 'El primer informe es bueno. El décimo es mejor. El centésimo es tuyo.',
    points: [
      {
        title: 'Correcciones → reglas',
        desc: 'Editas un informe, guardas cambios, y gōster aplica ese patrón en el futuro. Lo que hoy corriges, mañana ya no lo tocas.',
      },
      {
        title: 'Diccionario que crece',
        desc: 'Nuevas entradas se incorporan automáticamente desde tus correcciones. Tu vocabulario clínico se expande sin esfuerzo.',
      },
      {
        title: 'Historial activo',
        desc: 'Tus reportes previos son memoria activa. gōster recuerda tu estilo, tus equivalencias diagnósticas y tus decisiones.',
      },
      {
        title: 'Coherencia automática',
        desc: 'Valida cada párrafo para evitar contradicciones. Si dictas una lesión, no agrega frases de normalidad incompatibles.',
      },
    ],
    flowSteps: ['Dictas', 'gōster genera', 'Corriges', 'gōster aprende', 'Mejores informes'],
  },
  en: {
    sectionLabel: 'Continuous learning',
    heading1: 'The more you use it, ',
    heading2: 'the better it gets',
    subtitle: 'The first report is good. The tenth is better. The hundredth is yours.',
    points: [
      {
        title: 'Corrections → rules',
        desc: 'Edit a report, save changes, and gōster applies that pattern going forward. What you correct today, you won\'t need to touch tomorrow.',
      },
      {
        title: 'A growing dictionary',
        desc: 'New entries are automatically incorporated from your corrections. Your clinical vocabulary expands effortlessly.',
      },
      {
        title: 'Active history',
        desc: 'Your previous reports are active memory. gōster remembers your style, your diagnostic equivalences, and your decisions.',
      },
      {
        title: 'Automatic consistency',
        desc: 'Validates every paragraph to avoid contradictions. If you dictate a lesion, it won\'t add incompatible normality phrases.',
      },
    ],
    flowSteps: ['You dictate', 'gōster generates', 'You correct', 'gōster learns', 'Better reports'],
  },
}

const pointIcons = [BookOpen, TrendingUp, History, ShieldCheck]

export default function Learning() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="fade-up text-sm font-medium gradient-label-dark tracking-wide uppercase mb-3">{txt.sectionLabel}</p>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            {txt.heading1}<span className="gradient-text">{txt.heading2}</span>
          </h2>
          <p className="fade-up delay-2 mt-5 text-white/40 text-lg font-light">
            {txt.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {txt.points.map((point, i) => {
            const Icon = pointIcons[i]
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
          {txt.flowSteps.map((step, i) => (
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
