import { useScrollReveal } from '../hooks/useScrollReveal'
import { Palette, Smartphone, BookOpen, Wand2 } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Dictado remoto',
    description: 'Escanea un código QR y dicta desde tu celular. Sin cables, sin configuraciones.',
  },
  {
    icon: BookOpen,
    title: 'Diccionario clínico personal',
    description: 'Triggers, correcciones y términos que la IA aprende de tus preferencias.',
  },
  {
    icon: Wand2,
    title: 'Conclusiones automáticas',
    description: 'Diagnósticos generados con base en los hallazgos dictados, listos para revisión.',
  },
  {
    icon: Palette,
    title: 'Personalización total',
    description: '14 colores de acento, temas claro y oscuro, control de tono. Tu espacio, tu estilo.',
  },
]

export default function ProductShowcase() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="fade-up text-sm font-medium text-lavender-500 tracking-wide uppercase mb-3">
            Plataforma
          </p>
          <h2 className="fade-up fade-up-delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Diseñada para el flujo clínico real
          </h2>
          <p className="fade-up fade-up-delay-2 mt-4 text-gray-500 text-lg font-light">
            Cada detalle pensado para optimizar tu práctica radiológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-lavender-200 transition-all hover:shadow-sm bg-white`}
              >
                <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center shrink-0 group-hover:bg-lavender-100 transition-colors">
                  <Icon className="w-5.5 h-5.5 text-lavender-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Visual mockup area */}
        <div className="fade-up mt-16 relative">
          <div className="mockup-shadow rounded-2xl overflow-hidden border border-gray-200/60 bg-white">
            <div className="p-6 md:p-10 bg-gradient-to-br from-lavender-50/40 via-white to-lavender-50/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Color theme preview */}
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Temas y colores</div>
                  <div className="flex gap-1.5 mb-3">
                    {['#7c3aed', '#2563eb', '#059669', '#dc2626', '#d97706', '#0891b2', '#be185d'].map((c) => (
                      <div key={c} className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                      <span className="text-[10px] text-white font-medium">Oscuro</span>
                    </div>
                    <div className="flex-1 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                      <span className="text-[10px] text-gray-600 font-medium">Claro</span>
                    </div>
                  </div>
                </div>

                {/* Trigger dictionary preview */}
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Diccionario de triggers</div>
                  <div className="space-y-2">
                    {[
                      { trigger: 'normal torax', expansion: 'Campos pulmonares limpios, sin evidencia de...' },
                      { trigger: 'fractura', expansion: 'Se observa trazo de fractura en...' },
                      { trigger: 'derrame', expansion: 'Se identifica derrame pleural en...' },
                    ].map((t) => (
                      <div key={t.trigger} className="flex items-start gap-2">
                        <span className="text-[10px] px-1.5 py-0.5 bg-lavender-50 text-lavender-600 rounded font-mono font-medium shrink-0 mt-0.5">{t.trigger}</span>
                        <span className="text-[11px] text-gray-400 leading-tight truncate">{t.expansion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* QR mobile dictation */}
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Dictado remoto</div>
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 rounded-xl bg-gray-900 p-2 flex items-center justify-center">
                      {/* Simplified QR pattern */}
                      <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-0.5">
                        {[1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1].map((v, i) => (
                          <div key={i} className={`rounded-[1px] ${v ? 'bg-white' : 'bg-gray-700'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 text-center mt-3">Escanea para emparejar tu celular</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
