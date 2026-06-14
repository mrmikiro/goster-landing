import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { Sparkles, Zap } from 'lucide-react'

const t = {
  es: {
    badge: 'Modo autopilot',
    headingStart: '¿No tienes plantillas?',
    headingHighlight: 'No las necesitas.',
    description: (
      <>
        <strong className="text-white/70 font-medium">gōster</strong> domina el lenguaje radiológico.
        Sin plantilla, sin diccionario — solo dicta tus hallazgos y recibe un informe
        profesional con estructura, terminología y conclusiones diagnósticas.
      </>
    ),
    cards: [
      {
        title: 'Solo dicta',
        desc: 'Habla como si comentaras el caso. Sin configurar nada.',
      },
      {
        title: 'Informe completo',
        desc: 'Hallazgos estructurados, conclusión diagnóstica y formato profesional.',
      },
      {
        title: 'Listo para firmar',
        desc: 'Revisa, ajusta si quieres, copia y pega. Así de simple.',
      },
    ],
  },
  en: {
    badge: 'Autopilot mode',
    headingStart: 'No templates?',
    headingHighlight: "You don't need them.",
    description: (
      <>
        <strong className="text-white/70 font-medium">gōster</strong> masters the language of radiology.
        No template, no dictionary — just dictate your findings and receive a
        professional report with structure, terminology, and diagnostic conclusions.
      </>
    ),
    cards: [
      {
        title: 'Just dictate',
        desc: 'Speak as if you were discussing the case. No setup needed.',
      },
      {
        title: 'Complete report',
        desc: 'Structured findings, diagnostic conclusion, and professional formatting.',
      },
      {
        title: 'Ready to sign',
        desc: 'Review, adjust if you want, copy and paste. That simple.',
      },
    ],
  },
}

export default function Autopilot() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dark-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lavender-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender-600/10 border border-lavender-500/20 mb-8">
          <Zap className="w-3.5 h-3.5 text-lavender-400" strokeWidth={1.5} />
          <span className="text-xs font-medium text-lavender-300 tracking-wide">{txt.badge}</span>
        </div>

        <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
          {txt.headingStart}{' '}
          <span className="gradient-text">{txt.headingHighlight}</span>
        </h2>

        <p className="fade-up delay-2 mt-5 text-white/40 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          {txt.description}
        </p>

        <div className="fade-up delay-3 mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {txt.cards.map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-white/5 bg-dark-800/50">
              <Sparkles className="w-4 h-4 text-lavender-400 mb-3" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
