import { useScrollReveal } from '../hooks/useScrollReveal'
import AppMockup from './AppMockup'
import { Mic, Brain, Zap, Shield } from 'lucide-react'

export default function Platform() {
  const ref = useScrollReveal()

  return (
    <section id="plataforma" ref={ref} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender-50 border border-lavender-200 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-lavender-500 animate-pulse" />
            <span className="text-xs font-medium text-lavender-700 tracking-wide">
              Plataforma de IA para radiología
            </span>
          </div>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Tu copiloto clínico
            <br />
            <span className="gradient-text-light">impulsado por IA</span>
          </h2>
          <p className="fade-up delay-2 mt-5 text-lg text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Gōster transforma dictados de voz en informes radiológicos profesionales
            mediante inteligencia artificial. Aprende de tu estilo y se adapta a tu práctica.
          </p>
        </div>

        {/* Light mockup */}
        <div className="scale-in delay-2 mb-20">
          <AppMockup variant="light" />
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Mic,
              title: 'Dictado inteligente',
              desc: 'Dictado por voz desde tu computadora o celular vía QR. Reconocimiento preciso de terminología radiológica en español.',
            },
            {
              icon: Brain,
              title: 'IA especializada',
              desc: 'Motor de Gemini 2.5 Flash entrenado con prompts médicos de más de 800 líneas. Cero alucinaciones, máxima fidelidad.',
            },
            {
              icon: Zap,
              title: 'Generación instantánea',
              desc: 'Informes estructurados con hallazgos, conclusiones diagnósticas y formato profesional en segundos.',
            },
            {
              icon: Shield,
              title: 'Aprendizaje continuo',
              desc: 'Cada corrección enriquece tu diccionario clínico personal. La IA se adapta a tu estilo de informar.',
            },
          ].map((item, i) => {
            const Icon = item.icon
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
