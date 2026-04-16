import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mic, Palette, Globe } from 'lucide-react'

function AnimatedNumber({ value, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  { icon: Mic, value: 60, suffix: '%', label: 'Aumento de productividad', prefix: '+' },
  { icon: Palette, value: 14, suffix: '', label: 'Colores de acento personalizables' },
  { icon: Globe, value: 24, suffix: '/7', label: 'Disponibilidad de la plataforma' },
]

export default function Stats() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="relative bg-white border-t border-gray-100">
      {/* Banner message */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-4 text-center">
        <p className="fade-up text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
          Bienvenido a la nueva forma de hacer radiología.
          <br />
          <span className="text-gray-900 font-medium">
            Una vez que pruebes <strong className="font-semibold">gōster</strong>, no vas a querer volver a trabajar sin él.
          </span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-3 gap-8 md:gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className={`fade-up delay-${i + 1} text-center`}>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-lavender-50 mb-3">
                  <Icon className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.text ? stat.text : <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />}
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
