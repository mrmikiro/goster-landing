import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Clock, Sparkles, CheckCircle } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

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

const t = {
  es: {
    labels: [
      'Tiempo promedio de generación',
      'Lo considera útil o imprescindible',
      'Disponibilidad de la plataforma',
    ],
  },
  en: {
    labels: [
      'Average generation time',
      'Consider it useful or essential',
      'Platform availability',
    ],
  },
}

const stats = [
  { icon: Clock, value: 40, suffix: 's', labelIndex: 0, prefix: '<' },
  { icon: CheckCircle, value: 92, suffix: '%', labelIndex: 1 },
  { icon: Sparkles, value: 24, suffix: '/7', labelIndex: 2 },
]

export default function Stats() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="relative bg-dark-900 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-3 gap-8 md:gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className={`fade-up delay-${i + 1} text-center`}>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-lavender-600/10 mb-3">
                  <Icon className="w-5 h-5 text-lavender-400" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
                </div>
                <div className="text-xs md:text-sm text-white/30 font-medium">{txt.labels[stat.labelIndex]}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
