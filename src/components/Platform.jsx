import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { Mic, Brain, Zap, Shield, Palette, FileText, Settings, Table2 } from 'lucide-react'

const t = {
  es: {
    badge: 'Plataforma de IA para radiología',
    heading1: 'Tu copiloto clínico',
    heading2: 'impulsado por IA',
    subtitle: 'Dictado de voz a informe profesional. Aprende de tu estilo.',
    imgAlt: 'Interfaz de gōster',
    pillars: [
      { title: 'Dictado natural', desc: 'Habla como con un colega. Desde tu computadora o celular vía QR.' },
      { title: 'Interpretación semántica', desc: 'Entiende tu intención clínica, no solo tus palabras exactas. Tolera errores de dictado y sinónimos.' },
      { title: 'Plantillas + diccionario', desc: 'Al activar una plantilla, se vincula automáticamente el diccionario correspondiente.' },
      { title: 'Informes en segundos', desc: 'Hallazgos, conclusiones diagnósticas y formato profesional al instante.' },
      { title: 'Instrucciones especiales', desc: 'Reglas por plantilla: cálculos, convenciones, terminología específica para cada estudio.' },
      { title: 'Tablas por voz', desc: 'Dicta y llena tablas clínicas dentro del informe con tu voz.' },
      { title: 'Aprende de ti', desc: 'Cada corrección se convierte en regla. Tu estilo se replica automáticamente.' },
      { title: 'Hazlo tuyo', desc: 'Tema claro/oscuro, tono sepia a blanco, 21 colores de acento.' },
    ],
  },
  en: {
    badge: 'AI platform for radiology',
    heading1: 'Your clinical copilot',
    heading2: 'powered by AI',
    subtitle: 'Voice dictation to professional report. Learns your style.',
    imgAlt: 'gōster interface',
    pillars: [
      { title: 'Natural dictation', desc: 'Speak as you would with a colleague. From your computer or phone via QR.' },
      { title: 'Semantic interpretation', desc: 'Understands your clinical intent, not just your exact words. Tolerates dictation errors and synonyms.' },
      { title: 'Templates + dictionary', desc: 'When you activate a template, the corresponding dictionary is linked automatically.' },
      { title: 'Reports in seconds', desc: 'Findings, diagnostic conclusions, and professional formatting instantly.' },
      { title: 'Special instructions', desc: 'Per-template rules: calculations, conventions, and study-specific terminology.' },
      { title: 'Tables by voice', desc: 'Dictate and fill clinical tables within the report using your voice.' },
      { title: 'Learns from you', desc: 'Every correction becomes a rule. Your style is replicated automatically.' },
      { title: 'Make it yours', desc: 'Light/dark theme, sepia to white tone, 21 accent colors.' },
    ],
  },
}

const icons = [Mic, Brain, FileText, Zap, Settings, Table2, Shield, Palette]

export default function Platform() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section id="plataforma" ref={ref} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender-50 border border-lavender-200 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-lavender-500 animate-pulse" />
            <span className="text-xs font-medium gradient-label tracking-wide">
              {txt.badge}
            </span>
          </div>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            {txt.heading1}
            <br />
            <span className="gradient-text-light">{txt.heading2}</span>
          </h2>
          <p className="fade-up delay-2 mt-5 text-lg text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            {txt.subtitle}
          </p>
        </div>

        {/* App screenshot */}
        <div className="scale-in delay-2 mb-20">
          <div className="rounded-2xl overflow-hidden border border-gray-200/60 mockup-shadow-light img-hover">
            <img src="/interfaz.png" alt={txt.imgAlt} className="w-full h-auto block" />
          </div>
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {txt.pillars.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className={`fade-up delay-${i + 1} group p-6 rounded-2xl border border-gray-100 hover:border-lavender-200 transition-all duration-300 hover:shadow-lg hover:shadow-lavender-100/50`}>
                <div className="w-10 h-10 rounded-xl bg-lavender-50 flex items-center justify-center mb-4 group-hover:bg-lavender-100 transition-colors">
                  <Icon className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
