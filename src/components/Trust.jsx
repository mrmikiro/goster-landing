import { useScrollReveal } from '../hooks/useScrollReveal'
import { Stethoscope, Activity, Lock } from 'lucide-react'

const trustItems = [
  {
    icon: Stethoscope,
    text: 'Diseñado para radiólogos, por radiólogos',
  },
  {
    icon: Activity,
    text: 'Optimizado para flujo clínico real',
  },
  {
    icon: Lock,
    text: 'Datos seguros y procesamiento confiable',
  },
]

export default function Trust() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-lavender-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-500 font-medium">{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
