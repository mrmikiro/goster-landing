import { useScrollReveal } from '../hooks/useScrollReveal'
import { Stethoscope, Activity, Lock, Globe, Cpu, Clock } from 'lucide-react'

const items = [
  { icon: Stethoscope, text: 'Diseñado por radiólogos' },
  { icon: Activity, text: 'Flujo clínico real' },
  { icon: Lock, text: 'Datos seguros' },
  { icon: Globe, text: 'Hecho en México' },
  { icon: Cpu, text: 'IA de última generación' },
  { icon: Clock, text: 'Disponible 24/7' },
]

export default function Trust() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-16 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-up flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-lavender-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-400 font-medium">{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
