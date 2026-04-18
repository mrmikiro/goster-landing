import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mic, Cpu, PenLine } from 'lucide-react'

const steps = [
  {
    icon: Mic,
    number: '01',
    title: 'Dicta los hallazgos',
    desc: 'Desde tu computadora o celular por QR.',
    color: 'from-lavender-600 to-lavender-400',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'La IA genera el informe',
    desc: 'Informe estructurado con hallazgos y conclusión diagnóstica.',
    color: 'from-lavender-500 to-emerald-400',
  },
  {
    icon: PenLine,
    number: '03',
    title: 'Revisa y exporta',
    desc: 'Corrige por voz y copia con formato Word.',
    color: 'from-emerald-500 to-teal-400',
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section id="como-funciona" ref={ref} className="py-20 md:py-32 bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="fade-up text-sm font-medium text-lavender-400 tracking-wide uppercase mb-3">Cómo funciona</p>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Tres pasos.{' '}
            <span className="gradient-text">Sin curva de aprendizaje.</span>
          </h2>
          <p className="fade-up delay-2 mt-4 text-white/40 text-base font-light">
            De la voz al informe en segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className={`fade-up delay-${i + 1} group relative`}>
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[calc(50%+50px)] right-[calc(-50%+50px)] h-px bg-gradient-to-r from-white/10 to-white/5" />
                )}

                <div className="text-center p-8 rounded-2xl border border-white/5 bg-dark-800/50 hover:border-lavender-500/20 transition-all duration-500 hover:bg-dark-800">
                  {/* Icon with glow */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-dark-700 border border-white/5 mb-6">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <Icon className="w-8 h-8 text-lavender-400" strokeWidth={1.2} />
                    <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${step.color} text-white text-xs font-bold flex items-center justify-center shadow-lg`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
