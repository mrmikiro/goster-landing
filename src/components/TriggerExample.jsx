import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight, Upload, BookOpen } from 'lucide-react'

const examples = [
  {
    label: 'Rodilla — RM',
    trigger: 'lesión grado 2 del ligamento cruzado anterior',
    result: 'Ligamento cruzado anterior con interrupción parcial en la continuidad de las fibras.',
  },
  {
    label: 'Tórax — TC',
    trigger: 'signos de neumonía en lóbulo medio',
    result: 'Pulmón derecho con un área de incremento de la densidad en patrón de vidrio despulido con tendencia a la consolidación, localizado en el lóbulo medio.',
  },
  {
    label: 'Cerebro — RM',
    trigger: 'hallazgos de Fazekas 1 en lóbulos parietales',
    result: 'Hiperintensidades nodulares aisladas en la sustancia blanca subcortical y profunda de ambos lóbulos parietales, no confluentes.',
  },
]

export default function TriggerExample() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dark-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="fade-up text-sm font-medium gradient-label-dark tracking-wide uppercase mb-3">Diccionario clínico</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Tus frases. <span className="gradient-text">Tu estilo. Tu diccionario.</span>
          </h2>
        </div>

        {/* How it works explanation */}
        <div className="fade-up delay-2 max-w-3xl mx-auto mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl border border-white/5 bg-dark-800/40">
              <div className="flex items-center gap-2.5 mb-3">
                <Upload className="w-4 h-4 text-lavender-400" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Paso 1</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Subes tus informes reales (patológicos). <strong className="text-white/70 font-medium">gōster</strong> extrae cada hallazgo de la conclusión como <strong className="text-white/60">trigger</strong> y asocia su descripción clínica completa del cuerpo del informe. Las medidas se eliminan — la descripción queda genérica y reutilizable.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-dark-800/40">
              <div className="flex items-center gap-2.5 mb-3">
                <BookOpen className="w-4 h-4 text-lavender-400" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Paso 2</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Cuando dictas un trigger, <strong className="text-white/70 font-medium">gōster</strong> lo reconoce y expande la descripción completa, insertando las medidas, lateralidad y niveles que tú dictas en ese momento. Un trigger puede tener múltiples variantes para evitar informes repetitivos.
              </p>
            </div>
          </div>

          <p className="text-center text-white/25 text-sm font-light">
            Resultado: dices 5 palabras y <strong className="text-white/50 font-medium">gōster</strong> escribe 30.
          </p>
        </div>

        {/* Label */}
        <div className="text-center mb-8">
          <p className="fade-up text-xs font-semibold text-white/20 uppercase tracking-widest">Ejemplos reales de triggers</p>
        </div>

        {/* Examples */}
        <div className="fade-up delay-3 space-y-5 max-w-3xl mx-auto">
          {examples.map((ex, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-dark-800/60 p-6">
              <div className="text-[9px] uppercase tracking-widest font-bold text-lavender-500/60 mb-4">{ex.label}</div>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">Trigger — lo que dictas</div>
                  <p className="text-white/80 font-medium text-[15px]">"{ex.trigger}"</p>
                </div>
                <ArrowRight className="w-5 h-5 text-lavender-500 shrink-0 hidden md:block mt-6" strokeWidth={1.5} />
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">Descripción — lo que gōster genera</div>
                  <p className="text-white/50 text-sm leading-relaxed">{ex.result}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Self-correction */}
          <div className="rounded-2xl border border-lavender-500/10 bg-lavender-500/[0.03] p-6">
            <div className="text-[9px] uppercase tracking-widest font-bold text-lavender-400/40 mb-4">Autocorrección en tiempo real</div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">Te corriges</div>
                <p className="text-white/80 font-medium text-[15px]">"inclinación de 16 grados... no espera, son 19 grados"</p>
              </div>
              <ArrowRight className="w-5 h-5 text-lavender-500 shrink-0 hidden md:block mt-6" strokeWidth={1.5} />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">gōster entiende</div>
                <p className="text-white/50 text-sm leading-relaxed">Descarta 16° y usa 19° en todo el informe: descripción, tablas y conclusiones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
