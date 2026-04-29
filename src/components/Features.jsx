import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import {
  Smartphone, BookOpen, Wand2, FileText, Mic,
  Layers, PenLine, MessageCircle
} from 'lucide-react'

const t = {
  es: {
    sectionLabel: 'Características',
    sectionHeadingPre: 'Cada detalle diseñado para ',
    sectionHeadingHighlight: 'tu flujo clínico',
    features: [
      {
        tag: 'Dictado inteligente',
        title: 'Dicta como si hablaras con un colega',
        desc: 'Habla de forma natural. Si te corriges durante el dictado, gōster descarta lo anterior y conserva tu decisión final.',
        bullets: [
          'Reconocimiento continuo en español',
          'Pareamiento móvil por QR — sin apps',
          'Te corriges y gōster se adapta al instante',
        ],
      },
      {
        tag: 'Diccionario clínico',
        title: 'Tu vocabulario, tus reglas',
        desc: 'Sube informes previos y gōster extrae tus triggers con sus descripciones. Dicta una frase corta y la IA expande la descripción completa adaptando medidas y lateralidad.',
        bullets: [
          'Triggers extraídos de tus informes reales',
          'Medidas y lateralidad adaptadas automáticamente',
          'Múltiples variantes — informes nunca repetitivos',
        ],
      },
      {
        tag: 'Asistente de corrección',
        title: 'Corrige por voz, sin tocar el teclado',
        desc: '¿Quieres ajustar algo? Dicta: "cambia la estenosis a moderada", "agrega derrame articular". gōster aplica el cambio exactamente donde corresponde.',
        bullets: [
          'Correcciones en lenguaje natural',
          'Aplicadas en la sección correcta del informe',
          'Cada corrección mejora futuros informes',
        ],
      },
    ],
    altDictationConnected: 'gōster móvil — conectado',
    altDictationDictating: 'gōster móvil — dictando',
    labelConnected: 'Conectado',
    labelDictating: 'Dictando',
    altReport: 'Ejemplo de dictado con triggers y informe generado',
    altEditor: 'Asistente gōster — ¿Quieres ajustar algo?',
  },
  en: {
    sectionLabel: 'Features',
    sectionHeadingPre: 'Every detail designed for ',
    sectionHeadingHighlight: 'your clinical workflow',
    features: [
      {
        tag: 'Smart dictation',
        title: 'Dictate as if speaking with a colleague',
        desc: 'Speak naturally. If you correct yourself mid-dictation, gōster discards the previous input and keeps your final decision.',
        bullets: [
          'Continuous speech recognition',
          'Mobile pairing via QR — no apps needed',
          'Self-corrections handled by gōster instantly',
        ],
      },
      {
        tag: 'Clinical dictionary',
        title: 'Your vocabulary, your rules',
        desc: 'Upload previous reports and gōster extracts your triggers with their descriptions. Dictate a short phrase and the AI expands the full description, adapting measurements and laterality.',
        bullets: [
          'Triggers extracted from your actual reports',
          'Measurements and laterality adapted automatically',
          'Multiple variants — reports are never repetitive',
        ],
      },
      {
        tag: 'Correction assistant',
        title: 'Correct by voice, without touching the keyboard',
        desc: 'Need to adjust something? Dictate: "change the stenosis to moderate", "add joint effusion". gōster applies the change exactly where it belongs.',
        bullets: [
          'Corrections in natural language',
          'Applied to the correct section of the report',
          'Every correction improves future reports',
        ],
      },
    ],
    altDictationConnected: 'gōster mobile — connected',
    altDictationDictating: 'gōster mobile — dictating',
    labelConnected: 'Connected',
    labelDictating: 'Dictating',
    altReport: 'Dictation example with triggers and generated report',
    altEditor: 'gōster assistant — Need to adjust something?',
  },
}

const bulletIcons = [
  [Mic, Smartphone, Wand2],
  [BookOpen, Layers, PenLine],
  [MessageCircle, FileText, BookOpen],
]

function DictationVisual({ txt }) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 h-full">
      <div className="relative w-[45%] max-w-[200px] phone-tilt">
        <div className="rounded-[24px] overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
          <img src="/IMG_9083.jpg" alt={txt.altDictationConnected} className="w-full h-auto block" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-dark-700 border border-white/10 rounded-full">
          <span className="text-[9px] text-white/50 font-medium tracking-wide">{txt.labelConnected}</span>
        </div>
      </div>
      <div className="relative w-[45%] max-w-[200px] phone-tilt phone-tilt-r">
        <div className="rounded-[24px] overflow-hidden shadow-2xl shadow-lavender-600/20 border border-lavender-500/20">
          <img src="/IMG_9084.jpg" alt={txt.altDictationDictating} className="w-full h-auto block" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-lavender-600 rounded-full">
          <span className="text-[9px] text-white font-medium tracking-wide">{txt.labelDictating}</span>
        </div>
      </div>
    </div>
  )
}

function ReportVisual({ txt }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/[0.06] img-hover">
      <img src="/ejemplo de dictado.png" alt={txt.altReport} className="w-full h-auto block" />
    </div>
  )
}

function EditorVisual({ txt }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/[0.06] max-w-[320px] img-hover">
        <img src="/widget.png" alt={txt.altEditor} className="w-full h-auto block" />
      </div>
    </div>
  )
}

const visualComponents = [DictationVisual, ReportVisual, EditorVisual]

export default function Features() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section id="caracteristicas" ref={ref} className="py-20 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">{txt.sectionLabel}</p>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            {txt.sectionHeadingPre}<span className="gradient-text-light">{txt.sectionHeadingHighlight}</span>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {txt.features.map((feat, i) => {
            const Visual = visualComponents[i]
            const isReversed = i % 2 === 1
            const icons = bulletIcons[i]
            return (
              <div key={i} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}>
                <div className="flex-1">
                  <span className={`${isReversed ? 'slide-right' : 'slide-left'} delay-1 inline-flex px-3 py-1 rounded-full bg-lavender-50 text-xs font-medium text-lavender-600 border border-lavender-200 mb-4`}>
                    {feat.tag}
                  </span>
                  <h3 className={`${isReversed ? 'slide-right' : 'slide-left'} delay-2 text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-4`}>
                    {feat.title}
                  </h3>
                  <p className={`${isReversed ? 'slide-right' : 'slide-left'} delay-3 text-gray-500 leading-relaxed mb-6`}>
                    {feat.desc}
                  </p>
                  <ul className="space-y-3">
                    {feat.bullets.map((text, j) => {
                      const BIcon = icons[j]
                      return (
                        <li key={j} className={`${isReversed ? 'slide-right' : 'slide-left'} delay-${j + 4} flex items-center gap-3`}>
                          <div className="w-8 h-8 rounded-lg bg-lavender-50 flex items-center justify-center shrink-0">
                            <BIcon className="w-4 h-4 text-lavender-500" strokeWidth={1.5} />
                          </div>
                          <span className="text-sm text-gray-600">{text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className={`flex-1 w-full ${isReversed ? 'slide-left' : 'slide-right'} delay-2`}>
                  <Visual txt={txt} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
