import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { ArrowRight, Upload, BookOpen } from 'lucide-react'

const t = {
  es: {
    label: 'Diccionario clínico',
    heading1: 'Tus frases. ',
    heading2: 'Tu estilo. Tu diccionario.',
    step1Label: 'Paso 1',
    step1Text: (
      <>
        Subes tus informes reales (patológicos). <strong className="text-white/70 font-medium">gōster</strong> extrae cada hallazgo de la conclusión como <strong className="text-white/60">trigger</strong> y asocia su descripción clínica completa del cuerpo del informe. Las medidas se eliminan — la descripción queda genérica y reutilizable.
      </>
    ),
    step2Label: 'Paso 2',
    step2Text: (
      <>
        Cuando dictas un trigger, <strong className="text-white/70 font-medium">gōster</strong> lo reconoce y expande la descripción completa, insertando las medidas, lateralidad y niveles que tú dictas en ese momento. Un trigger puede tener múltiples variantes para evitar informes repetitivos.
      </>
    ),
    resultText: (
      <>
        Resultado: dices 5 palabras y <strong className="text-white font-semibold">gōster</strong> escribe 30.
      </>
    ),
    examplesLabel: 'Ejemplos reales de triggers',
    triggerLabel: 'Trigger — lo que dictas',
    descLabel: 'Descripción — lo que gōster genera',
    examples: [
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
    ],
    autocorrectionLabel: 'Autocorrección en tiempo real',
    correctionTriggerLabel: 'Te corriges',
    correctionTriggerText: '"inclinación de 16 grados... no espera, son 19 grados"',
    correctionResultLabel: 'gōster entiende',
    correctionResultText: 'Descarta 16° y usa 19° en todo el informe: descripción, tablas y conclusiones.',
  },
  en: {
    label: 'Clinical dictionary',
    heading1: 'Your phrases. ',
    heading2: 'Your style. Your dictionary.',
    step1Label: 'Step 1',
    step1Text: (
      <>
        Upload your real (pathological) reports. <strong className="text-white/70 font-medium">gōster</strong> extracts each finding from the conclusion as a <strong className="text-white/60">trigger</strong> and links it to its full clinical description from the report body. Measurements are removed — the description stays generic and reusable.
      </>
    ),
    step2Label: 'Step 2',
    step2Text: (
      <>
        When you dictate a trigger, <strong className="text-white/70 font-medium">gōster</strong> recognizes it and expands the full description, inserting the measurements, laterality, and levels you dictate at that moment. A trigger can have multiple variants to avoid repetitive reports.
      </>
    ),
    resultText: (
      <>
        Result: you say 5 words, <strong className="text-white font-semibold">gōster</strong> writes 30.
      </>
    ),
    examplesLabel: 'Real trigger examples',
    triggerLabel: 'Trigger — what you dictate',
    descLabel: 'Description — what gōster generates',
    examples: [
      {
        label: 'Knee — MRI',
        trigger: 'grade 2 ACL tear',
        result: 'Anterior cruciate ligament with partial disruption of fiber continuity.',
      },
      {
        label: 'Chest — CT',
        trigger: 'signs of pneumonia in the middle lobe',
        result: 'Right lung with an area of increased density in a ground-glass pattern with a tendency toward consolidation, located in the middle lobe.',
      },
      {
        label: 'Brain — MRI',
        trigger: 'Fazekas 1 findings in parietal lobes',
        result: 'Isolated punctate hyperintensities in the subcortical and deep white matter of both parietal lobes, non-confluent.',
      },
    ],
    autocorrectionLabel: 'Real-time autocorrection',
    correctionTriggerLabel: 'You correct yourself',
    correctionTriggerText: '"tilt of 16 degrees... no wait, it\'s 19 degrees"',
    correctionResultLabel: 'gōster understands',
    correctionResultText: 'Discards 16° and uses 19° throughout the entire report: description, tables, and conclusions.',
  },
}

export default function TriggerExample() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dark-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="fade-up text-sm font-medium gradient-label-dark tracking-wide uppercase mb-3">{txt.label}</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {txt.heading1}<span className="gradient-text">{txt.heading2}</span>
          </h2>
        </div>

        {/* How it works explanation */}
        <div className="fade-up delay-2 max-w-3xl mx-auto mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl border border-white/5 bg-dark-800/40">
              <div className="flex items-center gap-2.5 mb-3">
                <Upload className="w-4 h-4 text-lavender-400" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{txt.step1Label}</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                {txt.step1Text}
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-dark-800/40">
              <div className="flex items-center gap-2.5 mb-3">
                <BookOpen className="w-4 h-4 text-lavender-400" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{txt.step2Label}</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                {txt.step2Text}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-lavender-500/10 border border-lavender-500/20 px-6 py-4 text-center">
            <p className="text-base font-medium text-lavender-300">
              {txt.resultText}
            </p>
          </div>
        </div>

        {/* Label */}
        <div className="text-center mb-8">
          <p className="fade-up text-xs font-semibold text-white/20 uppercase tracking-widest">{txt.examplesLabel}</p>
        </div>

        {/* Examples */}
        <div className="fade-up delay-3 space-y-5 max-w-3xl mx-auto">
          {txt.examples.map((ex, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-dark-800/60 p-6">
              <div className="text-[9px] uppercase tracking-widest font-bold text-lavender-500/60 mb-4">{ex.label}</div>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">{txt.triggerLabel}</div>
                  <p className="text-white/80 font-medium text-[15px]">"{ex.trigger}"</p>
                </div>
                <ArrowRight className="w-5 h-5 text-lavender-500 shrink-0 hidden md:block mt-6" strokeWidth={1.5} />
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">{txt.descLabel}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{ex.result}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Self-correction */}
          <div className="rounded-2xl border border-lavender-500/10 bg-lavender-500/[0.03] p-6">
            <div className="text-[9px] uppercase tracking-widest font-bold text-lavender-400/40 mb-4">{txt.autocorrectionLabel}</div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">{txt.correctionTriggerLabel}</div>
                <p className="text-white/80 font-medium text-[15px]">{txt.correctionTriggerText}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-lavender-500 shrink-0 hidden md:block mt-6" strokeWidth={1.5} />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-lavender-400 mb-2">{txt.correctionResultLabel}</div>
                <p className="text-white/50 text-sm leading-relaxed">{txt.correctionResultText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
