import { useScrollReveal } from '../hooks/useScrollReveal'
import { Upload, BookOpen, Mic } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    step: '1',
    title: 'Sube tus plantillas',
    desc: 'Carga un informe normal por cada tipo de estudio (DOCX o PDF). gōster detecta la modalidad automáticamente.',
  },
  {
    icon: BookOpen,
    step: '2',
    title: 'Construye tu diccionario',
    desc: 'Sube informes previos patológicos. gōster extrae los triggers y descripciones, anonimizando datos del paciente.',
  },
  {
    icon: Mic,
    step: '3',
    title: 'Dicta y genera',
    desc: 'Activa plantilla, dicta tus hallazgos y presiona Generar. En segundos tienes el informe completo.',
  },
]

export default function Onboarding() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-up text-sm font-medium text-lavender-500 tracking-wide uppercase mb-3">Empieza en minutos</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Tres pasos para tu primer informe
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className={`fade-up delay-${i + 1} relative text-center`}>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+50px)] right-[calc(-50%+50px)] h-px bg-gradient-to-r from-lavender-300 to-lavender-100" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-lavender-50 border border-lavender-200 mb-5">
                  <Icon className="w-8 h-8 text-lavender-600" strokeWidth={1.2} />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-lavender-600 text-white text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
