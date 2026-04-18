import { useScrollReveal } from '../hooks/useScrollReveal'
import { Sun, Moon, Palette, SlidersHorizontal } from 'lucide-react'

const colors = [
  '#7c3aed', '#2563eb', '#06b6d4', '#10b981', '#f472b6',
  '#f97316', '#ef4444', '#eab308', '#84cc16', '#0891b2',
  '#6366f1', '#d946ef', '#1d4ed8', '#78716c',
]

export default function Personalization() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-up text-sm font-medium text-lavender-500 tracking-wide uppercase mb-3">Personalización</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Hazlo tuyo
          </h2>
          <p className="fade-up delay-2 mt-3 text-gray-500 font-light">
            Tu espacio de trabajo, a tu manera.
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
            <h3 className="text-base font-semibold text-gray-900 mb-1">Tema claro y oscuro</h3>
            <p className="text-sm text-gray-400">Cambia con un clic.</p>
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
            <h3 className="text-base font-semibold text-gray-900 mb-1">Control de tono</h3>
            <p className="text-sm text-gray-400">De negro a gris. De blanco a sepia.</p>
          </div>

          {/* Colors */}
          <div className="p-6 rounded-2xl border border-gray-100 text-center hover:border-lavender-200 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <Palette className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
              {colors.map((c) => (
                <div key={c} className="w-5 h-5 rounded-full shadow-sm" style={{ background: c }} />
              ))}
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">14 colores de acento</h3>
            <p className="text-sm text-gray-400">Elige el que represente tu estilo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
