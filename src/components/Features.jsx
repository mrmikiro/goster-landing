import { useScrollReveal } from '../hooks/useScrollReveal'
import { GhostLogo } from './Logo'
import {
  Smartphone, BookOpen, Wand2, Palette, FileText, Mic,
  Layers, PenLine, ScanLine, Volume2
} from 'lucide-react'

/* ── Feature section with alternating image/text layout ── */
const features = [
  {
    tag: 'Dictado por voz',
    title: 'Dicta desde cualquier lugar',
    desc: 'Utiliza tu micrófono de escritorio o parear tu celular escaneando un código QR. Sin cables, sin configuraciones. La transcripción aparece en tiempo real mientras dictas los hallazgos del estudio.',
    bullets: [
      { icon: Mic, text: 'Web Speech API con reconocimiento es-MX' },
      { icon: Smartphone, text: 'Pareamiento por QR — dicta desde tu celular' },
      { icon: Volume2, text: 'Animación reactiva al volumen de voz' },
    ],
    visual: 'dictation',
  },
  {
    tag: 'Motor de IA',
    title: 'Informes con precisión clínica',
    desc: 'Gemini 2.5 Flash procesa tu dictado con un prompt especializado de más de 800 líneas y 21 reglas clínicas. Genera hallazgos estructurados y conclusiones diagnósticas respetando tu estilo y tus correcciones previas.',
    bullets: [
      { icon: Wand2, text: 'Conclusiones diagnósticas automáticas' },
      { icon: Layers, text: 'Plantillas por tipo de estudio (RX, TC, RM, US, MG)' },
      { icon: ScanLine, text: 'Matching difuso de triggers (Levenshtein)' },
    ],
    visual: 'report',
  },
  {
    tag: 'Editor profesional',
    title: 'Refina y exporta al instante',
    desc: 'Editor enriquecido TipTap con formato profesional: negritas, tablas, listas, alineación, tamaño de fuente. Copia al portapapeles con estilos compatibles con Word. Corrige por voz con el asistente Gōster integrado.',
    bullets: [
      { icon: PenLine, text: 'Editor TipTap con formato rico' },
      { icon: FileText, text: 'Copiar a Word con estilos inline' },
      { icon: BookOpen, text: 'Diccionario clínico que aprende de correcciones' },
    ],
    visual: 'editor',
  },
]

function DictationVisual() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 h-full">
      {/* Phone 1 — Connected state */}
      <div className="relative w-[45%] max-w-[200px]">
        <div className="rounded-[24px] overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
          <img src="/IMG_9083.jpg" alt="Gōster móvil — conectado" className="w-full h-auto block" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-dark-700 border border-white/10 rounded-full">
          <span className="text-[9px] text-white/50 font-medium tracking-wide">Conectado</span>
        </div>
      </div>
      {/* Phone 2 — Dictating state */}
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
    <div className="bg-dark-800 rounded-2xl p-6 border border-white/5 h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
          <FileText className="w-5 h-5 text-green-400" strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-sm font-medium text-white/80">Informe generado</div>
          <div className="text-[10px] text-green-400">RX Tórax PA — Listo</div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-dark-700/60 rounded-xl p-3 border border-white/5">
          <div className="text-[8px] uppercase tracking-widest font-bold text-white/20 mb-1.5">Hallazgos</div>
          <p className="text-[11px] text-white/60 leading-relaxed">
            Se identifica opacidad homogénea en la base del hemitórax derecho, con presencia de broncograma aéreo, sugestiva de proceso consolidativo. Silueta cardiaca dentro de límites normales. Senos costofrénicos libres.
          </p>
        </div>
        <div className="bg-dark-700/60 rounded-xl p-3 border border-lavender-500/10">
          <div className="text-[8px] uppercase tracking-widest font-bold text-lavender-400/50 mb-1.5">Conclusión diagnóstica</div>
          <p className="text-[11px] text-white/80 leading-relaxed font-medium">
            Consolidación en base pulmonar derecha, probable proceso neumónico. Se sugiere correlación clínica y laboratorial. Sin evidencia de derrame pleural ni neumotórax.
          </p>
        </div>
        {/* Tags */}
        <div className="flex gap-1.5 flex-wrap">
          {['Consolidación', 'Broncograma aéreo', 'Base derecha'].map((tag) => (
            <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-lavender-500/10 text-lavender-300/60 border border-lavender-500/10">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function EditorVisual() {
  return (
    <div className="bg-dark-800 rounded-2xl p-6 border border-white/5 h-full">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-dark-700/60 border border-white/5 mb-4">
        {['B', 'I', 'U'].map((t) => (
          <span key={t} className="w-6 h-6 flex items-center justify-center rounded text-[10px] font-bold text-white/30">{t}</span>
        ))}
        <div className="w-px h-3 mx-1 bg-white/5" />
        <span className="text-[9px] text-white/20 px-1">Fuente</span>
        <span className="text-[9px] text-white/20 px-1">Tamaño</span>
      </div>
      {/* Content */}
      <div className="bg-dark-700/30 rounded-xl p-4 border border-white/5 mb-4">
        <p className="text-[11px] text-white/70 leading-relaxed mb-2">
          <span className="font-bold text-white/90">RADIOGRAFÍA DE TÓRAX PA</span>
        </p>
        <p className="text-[11px] text-white/50 leading-relaxed mb-2">
          <span className="font-semibold text-white/60">Hallazgos:</span> Se identifica opacidad homogénea en la base del hemitórax derecho...
        </p>
        <p className="text-[11px] text-white/50 leading-relaxed">
          <span className="font-semibold text-lavender-400/70">Conclusión:</span> <span className="text-white/70">Consolidación en base pulmonar derecha, probable proceso neumónico.</span>
        </p>
      </div>
      {/* Ghost assistant */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-lavender-500/5 border border-lavender-500/10">
        <GhostLogo className="h-8 w-auto" />
        <div>
          <div className="text-[10px] text-lavender-300 font-medium">Asistente Gōster</div>
          <div className="text-[10px] text-white/30">¿Quieres ajustar algo? Dicta la corrección...</div>
        </div>
      </div>
      {/* Color swatches */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[9px] text-white/20">Tema:</span>
        <div className="flex gap-1">
          {['#7c3aed', '#2563eb', '#059669', '#dc2626', '#d97706', '#0891b2', '#be185d'].map((c) => (
            <div key={c} className="w-3.5 h-3.5 rounded-full border border-white/10" style={{ background: c }} />
          ))}
        </div>
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
                {/* Text */}
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
                {/* Visual */}
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
