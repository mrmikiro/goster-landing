import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mic, Brain, Clock, ShieldCheck, GraduationCap } from 'lucide-react'

const benefits = [
  {
    icon: Mic,
    title: 'Generación automática por voz',
    description: 'Dicta tus hallazgos y obtén informes radiológicos completos al instante. Desde tu computadora o tu celular.',
  },
  {
    icon: Brain,
    title: 'IA especializada en radiología',
    description: 'Motor de inteligencia artificial entrenado para comprender terminología radiológica y generar informes con precisión clínica.',
  },
  {
    icon: Clock,
    title: 'Reducción drástica del tiempo',
    description: 'Pasa de minutos a segundos por informe. Optimiza tu flujo de trabajo y atiende más estudios sin comprometer calidad.',
  },
  {
    icon: ShieldCheck,
    title: 'Estandarización diagnóstica',
    description: 'Plantillas por tipo de estudio, triggers clínicos y formato consistente. Informes siempre con estructura profesional.',
  },
  {
    icon: GraduationCap,
    title: 'Aprende de tu estilo',
    description: 'Cada corrección enriquece tu diccionario clínico personalizado. La IA se adapta progresivamente a tu forma de informar.',
  },
]

export default function Benefits() {
  const ref = useScrollReveal()

  return (
    <section id="beneficios" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="fade-up text-sm font-medium text-lavender-500 tracking-wide uppercase mb-3">
            Beneficios
          </p>
          <h2 className="fade-up fade-up-delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Todo lo que necesitas para informar mejor
          </h2>
          <p className="fade-up fade-up-delay-2 mt-4 text-gray-500 text-lg font-light">
            Herramientas diseñadas para el flujo real de trabajo del radiólogo.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <div
                key={i}
                className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group p-7 rounded-2xl border border-gray-100 hover:border-lavender-200 transition-all hover:shadow-sm bg-white`}
              >
                <div className="w-11 h-11 rounded-xl bg-lavender-50 flex items-center justify-center mb-5 group-hover:bg-lavender-100 transition-colors">
                  <Icon className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
