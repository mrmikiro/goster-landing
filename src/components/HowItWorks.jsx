import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mic, Cpu, PenLine } from 'lucide-react'

const steps = [
  {
    icon: Mic,
    number: '01',
    title: 'Dicta los hallazgos',
    description: 'Utiliza tu micrófono o parear tu celular por QR para dictar los hallazgos del estudio radiológico.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'La IA genera el informe',
    description: 'Gōster procesa tu dictado con inteligencia artificial y genera un informe estructurado con hallazgos y conclusión diagnóstica.',
  },
  {
    icon: PenLine,
    number: '03',
    title: 'Revisa, ajusta y exporta',
    description: 'Refina el informe en el editor enriquecido, aplica correcciones por voz y exporta el documento final.',
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section id="como-funciona" ref={ref} className="py-20 md:py-28 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="fade-up text-sm font-medium text-lavender-500 tracking-wide uppercase mb-3">
            Cómo funciona
          </p>
          <h2 className="fade-up fade-up-delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Tres pasos. Sin curva de aprendizaje.
          </h2>
          <p className="fade-up fade-up-delay-2 mt-4 text-gray-500 text-lg font-light">
            De la voz al informe en segundos, con la precisión que tu práctica exige.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className={`fade-up fade-up-delay-${i + 1} relative`}>
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-lavender-200 to-lavender-100" />
                )}

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-sm mb-6">
                    <Icon className="w-8 h-8 text-lavender-500" strokeWidth={1.2} />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-lavender-600 text-white text-xs font-semibold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
