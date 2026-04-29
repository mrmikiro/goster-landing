import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { Stethoscope, Activity, Lock, Globe, Cpu, Clock } from 'lucide-react'

const icons = [Stethoscope, Activity, Lock, Globe, Cpu, Clock]

const t = {
  es: [
    'Diseñado por radiólogos',
    'Flujo clínico real',
    'Datos seguros',
    'Hecho en México',
    'IA de última generación',
    'Disponible 24/7',
  ],
  en: [
    'Designed by radiologists',
    'Real clinical workflow',
    'Secure data',
    'Made in Mexico',
    'State-of-the-art AI',
    'Available 24/7',
  ],
}

export default function Trust() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const texts = t[lang]

  return (
    <section ref={ref} className="py-16 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-up flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {texts.map((text, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-lavender-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-400 font-medium">{text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
