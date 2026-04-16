import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  Smartphone, BookOpen, Wand2, FileText, Mic,
  Layers, PenLine, MessageCircle
} from 'lucide-react'

const features = [
  {
    tag: 'Dictado inteligente',
    title: 'Dicta desde tu celular o computadora',
    desc: 'Parear tu celular es tan fácil como escanear un QR. Toca el micrófono y dicta los hallazgos del estudio. La transcripción llega en tiempo real a tu escritorio, lista para generar el informe.',
    bullets: [
      { icon: Mic, text: 'Dictado por voz con reconocimiento en español' },
      { icon: Smartphone, text: 'Pareamiento móvil por QR — sin cables, sin apps' },
      { icon: Wand2, text: 'Animación reactiva al volumen de tu voz' },
    ],
    visual: 'dictation',
  },
  {
    tag: 'Diccionario clínico',
    title: 'Informes basados en tu propio diccionario',
    desc: 'Sube tus informes reales y Gōster extrae automáticamente las frases trigger con sus descripciones clínicas. Cuando dictas, la IA reconoce esos triggers y expande el informe con tu propio estilo y terminología. Tu diccionario es personalizable y crece con cada corrección.',
    bullets: [
      { icon: BookOpen, text: 'Diccionario extraído de tus informes reales' },
      { icon: Layers, text: 'Triggers clínicos que se expanden automáticamente' },
      { icon: PenLine, text: 'Personalizable: edita, agrega y reorganiza entradas' },
    ],
    visual: 'report',
  },
  {
    tag: 'Asistente de corrección',
    title: 'Corrige por voz después de generar',
    desc: 'Al terminar el informe, el asistente Gōster aparece preguntando si quieres ajustar algo. Dicta la corrección y la verás aplicada exactamente donde se necesita en el informe. Sin tocar el teclado.',
    bullets: [
      { icon: MessageCircle, text: '¿Quieres ajustar algo? Dicta y se aplica al instante' },
      { icon: FileText, text: 'Las correcciones se ubican en la sección correcta del informe' },
      { icon: BookOpen, text: 'Cada corrección enriquece tu diccionario clínico' },
    ],
    visual: 'editor',
  },
]

function DictationVisual() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 h-full">
      <div className="relative w-[45%] max-w-[200px]">
        <div className="rounded-[24px] overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
          <img src="/IMG_9083.jpg" alt="Gōster móvil — conectado" className="w-full h-auto block" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-dark-700 border border-white/10 rounded-full">
          <span className="text-[9px] text-white/50 font-medium tracking-wide">Conectado</span>
        </div>
      </div>
      <div className="relative w-[45%] max-w-[200px]">
        <div className="rounded-[24px] overflow-hidden shadow-2xl shadow-lavender-600/20 border border-lavender-500/20">
          <img src="/IMG_9084.jpg" alt="Gōster móvil — dictando" className="w-full h-auto block" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-lavender-600 rounded-full">
          <span className="text-[9px] text-white font-medium tracking-wide">Dictando</span>
        </div>
      </div>
    </div>
  )
}

function ReportVisual() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/[0.06]">
      <img src="/ejemplo de dictado.png" alt="Ejemplo de dictado con triggers y informe generado" className="w-full h-auto block" />
    </div>
  )
}

function EditorVisual() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/[0.06] max-w-[320px]">
        <img src="/widget.png" alt="Asistente Gōster — ¿Quieres ajustar algo?" className="w-full h-auto block" />
      </div>
    </div>
  )
}

const visuals = { dictation: DictationVisual, report: ReportVisual, editor: EditorVisual }

export default function Features() {
  const ref = useScrollReveal()

  return (
    <section id="caracteristicas" ref={ref} className="py-20 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="fade-up text-sm font-medium text-lavender-500 tracking-wide uppercase mb-3">Características</p>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Cada detalle diseñado para <span className="gradient-text-light">tu flujo clínico</span>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {features.map((feat, i) => {
            const Visual = visuals[feat.visual]
            const isReversed = i % 2 === 1
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
                    {feat.bullets.map((b, j) => {
                      const BIcon = b.icon
                      return (
                        <li key={j} className={`${isReversed ? 'slide-right' : 'slide-left'} delay-${j + 4} flex items-center gap-3`}>
                          <div className="w-8 h-8 rounded-lg bg-lavender-50 flex items-center justify-center shrink-0">
                            <BIcon className="w-4 h-4 text-lavender-500" strokeWidth={1.5} />
                          </div>
                          <span className="text-sm text-gray-600">{b.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className={`flex-1 w-full ${isReversed ? 'slide-left' : 'slide-right'} delay-2`}>
                  <Visual />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
