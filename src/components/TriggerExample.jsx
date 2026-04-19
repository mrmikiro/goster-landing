import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function TriggerExample() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dark-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-up text-sm font-medium gradient-label-dark tracking-wide uppercase mb-3">Triggers clínicos</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Dicta en corto. <span className="gradient-text">gōster redacta en completo.</span>
          </h2>
          <p className="fade-up delay-2 mt-4 text-white/35 text-base font-light max-w-2xl mx-auto">
            Las medidas, lateralidad y niveles se adaptan automáticamente. El diccionario guarda descripciones genéricas — tú solo dictas los valores.
          </p>
        </div>

        <div className="fade-up delay-2 space-y-6 max-w-3xl mx-auto">
          {/* Example 1 */}
          <div className="rounded-2xl border border-white/5 bg-dark-800/60 p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">Tú dices</div>
                <p className="text-white/80 font-medium">"hernia discal de 12 mm en L5-S1"</p>
              </div>
              <ArrowRight className="w-5 h-5 text-lavender-500 shrink-0 hidden md:block" strokeWidth={1.5} />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">gōster genera</div>
                <p className="text-white/60 text-sm leading-relaxed">"Hernia discal de 12 mm con compresión radicular a nivel L5-S1, con desplazamiento posterior del saco tecal."</p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="rounded-2xl border border-white/5 bg-dark-800/60 p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">Tú dices</div>
                <p className="text-white/80 font-medium">"tendinosis del semimembranoso"</p>
              </div>
              <ArrowRight className="w-5 h-5 text-lavender-500 shrink-0 hidden md:block" strokeWidth={1.5} />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">gōster genera</div>
                <p className="text-white/60 text-sm leading-relaxed">"Incremento del grosor y de la intensidad de señal del tendón semimembranoso, compatible con tendinopatía."</p>
              </div>
            </div>
          </div>

          {/* Example 3 — self-correction */}
          <div className="rounded-2xl border border-white/5 bg-dark-800/60 p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">Te corriges</div>
                <p className="text-white/80 font-medium">"inclinación de 16 grados... no espera, son 19 grados"</p>
              </div>
              <ArrowRight className="w-5 h-5 text-lavender-500 shrink-0 hidden md:block" strokeWidth={1.5} />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">gōster entiende</div>
                <p className="text-white/60 text-sm leading-relaxed">Descarta 16° y usa 19° en todo el informe: descripción, tablas y conclusiones.</p>
              </div>
            </div>
          </div>

          {/* Example 4 — resto normal */}
          <div className="rounded-2xl border border-white/5 bg-dark-800/60 p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">Tú dices</div>
                <p className="text-white/80 font-medium">"resto normal"</p>
              </div>
              <ArrowRight className="w-5 h-5 text-lavender-500 shrink-0 hidden md:block" strokeWidth={1.5} />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">gōster genera</div>
                <p className="text-white/60 text-sm leading-relaxed">Todo lo demás conserva el texto normal de tu plantilla — sin tocar nada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
