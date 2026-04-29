import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { Sun, Moon, Palette, SlidersHorizontal } from 'lucide-react'

const colorRows = [
  ['#6ee7b7', '#8b8bf5', '#c4c4d4', '#1e3a8a', '#818cf8', '#9ca3af', '#60a5fa'],
  ['#9ca3af', '#22d3ee', '#a7c4a0', '#facc15', '#d97706', '#f59e0b', '#b5a78a'],
  ['#f97316', '#78716c', '#84cc16', '#eab308', '#f472b6', '#fb923c', '#a855f7'],
]

const t = {
  es: {
    label: 'Personalización',
    heading: 'Hazlo tuyo',
    subheading: 'Tu espacio de trabajo, a tu manera.',
    themeTitle: 'Tema claro y oscuro',
    themeDesc: 'Cambia con un clic.',
    toneTitle: 'Control de tono',
    toneDesc: 'De negro a gris. De blanco a sepia.',
    colorsTitle: '21 colores de acento',
    colorsDesc: 'Elige el que represente tu estilo.',
  },
  en: {
    label: 'Customization',
    heading: 'Make it yours',
    subheading: 'Your workspace, your way.',
    themeTitle: 'Light and dark theme',
    themeDesc: 'Switch with one click.',
    toneTitle: 'Tone control',
    toneDesc: 'From black to gray. From white to sepia.',
    colorsTitle: '21 accent colors',
    colorsDesc: 'Choose the one that matches your style.',
  },
}

export default function Personalization() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">{txt.label}</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {txt.heading}
          </h2>
          <p className="fade-up delay-2 mt-3 text-gray-500 font-light">
            {txt.subheading}
          </p>
        </div>

        <div className="fade-up delay-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Theme */}
          <div className="p-6 rounded-2xl border border-gray-100 text-center hover:border-lavender-200 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
                <Moon className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center">
                <Sun className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">{txt.themeTitle}</h3>
            <p className="text-sm text-gray-400">{txt.themeDesc}</p>
          </div>

          {/* Tone slider */}
          <div className="p-6 rounded-2xl border border-gray-100 text-center hover:border-lavender-200 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <SlidersHorizontal className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-1 justify-center mb-4">
              <div className="w-6 h-6 rounded bg-gray-900" />
              <div className="w-6 h-6 rounded bg-gray-700" />
              <div className="w-6 h-6 rounded bg-gray-500" />
              <div className="w-6 h-6 rounded bg-gray-300" />
              <div className="w-6 h-6 rounded bg-amber-50 border border-gray-200" />
              <div className="w-6 h-6 rounded bg-orange-50 border border-gray-200" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">{txt.toneTitle}</h3>
            <p className="text-sm text-gray-400">{txt.toneDesc}</p>
          </div>

          {/* Colors */}
          <div className="p-6 rounded-2xl border border-gray-100 text-center hover:border-lavender-200 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <Palette className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
            </div>
            <div className="space-y-1.5 mb-4">
              {colorRows.map((row, r) => (
                <div key={r} className="flex items-center justify-center gap-1.5">
                  {row.map((c, i) => (
                    <div key={`${r}-${i}`} className="w-5 h-5 rounded-full shadow-sm" style={{ background: c }} />
                  ))}
                </div>
              ))}
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">{txt.colorsTitle}</h3>
            <p className="text-sm text-gray-400">{txt.colorsDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
