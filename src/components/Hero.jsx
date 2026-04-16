import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mic, FileText, Sparkles } from 'lucide-react'

export default function Hero() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-glow overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender-50 border border-lavender-200 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-lavender-500" strokeWidth={1.5} />
          <span className="text-xs font-medium text-lavender-700 tracking-wide">
            Plataforma de IA para radiología
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight leading-[1.08] text-gray-900 max-w-4xl mx-auto">
          Radiología más rápida,{' '}
          <span className="gradient-text">precisa</span>{' '}
          y sin fricción.
        </h1>

        {/* Subheadline */}
        <p className="fade-up fade-up-delay-2 mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
          Dicta tus hallazgos por voz y deja que la inteligencia artificial genere informes
          radiológicos estructurados en segundos. Diseñado por radiólogos, para radiólogos.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.goster.ai"
            className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-lavender-600 rounded-full hover:bg-lavender-700 transition-all hover:shadow-lg hover:shadow-lavender-200"
          >
            Probar gratis
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#planes"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:border-lavender-300 hover:text-lavender-600 transition-all"
          >
            Ver planes
          </a>
        </div>

        {/* Product mockup */}
        <div className="fade-up fade-up-delay-4 mt-16 md:mt-20 relative max-w-5xl mx-auto">
          {/* Browser frame */}
          <div className="mockup-shadow rounded-2xl overflow-hidden border border-gray-200/60 bg-white">
            {/* Browser top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              </div>
              <div className="flex-1 mx-8">
                <div className="mx-auto max-w-md bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-100 text-center">
                  app.goster.ai
                </div>
              </div>
            </div>
            {/* Mock UI content */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-gray-50/50 to-white">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left panel — dictation */}
                <div className="flex-1 bg-white rounded-xl border border-gray-100 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-lavender-50 flex items-center justify-center">
                      <Mic className="w-4.5 h-4.5 text-lavender-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">Dictado por voz</div>
                      <div className="text-xs text-gray-400">Grabando...</div>
                    </div>
                    <div className="ml-auto flex gap-0.5 items-end h-4">
                      {[3, 5, 7, 4, 6, 8, 5, 7, 3, 6, 8, 4, 7, 5].map((h, i) => (
                        <div
                          key={i}
                          className="w-0.5 bg-lavender-400 rounded-full"
                          style={{ height: `${h * 2}px`, opacity: 0.5 + (i % 3) * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-500 text-left leading-relaxed">
                    <p>"Se observa opacidad homogénea en base pulmonar derecha con broncograma aéreo..."</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <div className="px-3 py-1 rounded-full bg-lavender-50 text-xs text-lavender-600 font-medium">Tórax PA</div>
                    <div className="px-3 py-1 rounded-full bg-gray-50 text-xs text-gray-500">Radiografía</div>
                  </div>
                </div>
                {/* Right panel — generated report */}
                <div className="flex-1 bg-white rounded-xl border border-gray-100 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center">
                      <FileText className="w-4.5 h-4.5 text-green-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">Informe generado</div>
                      <div className="text-xs text-green-500">Listo para revisión</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-left">
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Hallazgos</div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Se identifica opacidad homogénea en la base del hemitórax derecho, con presencia de broncograma aéreo, sugestiva de proceso consolidativo.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Conclusión</div>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        Consolidación en base pulmonar derecha, probable neumonía. Se sugiere correlación clínica.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
