import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { GhostLogo } from './Logo'

const t = {
  es: {
    headingLine1: 'Únete a los radiólogos que',
    headingLine2: 'ya confían en',
    cta: 'Comenzar prueba gratuita',
    note: 'Sin tarjeta · Sin compromiso · Prueba gratuita',
  },
  en: {
    headingLine1: 'Join the radiologists who',
    headingLine2: 'already trust',
    cta: 'Start free trial',
    note: 'No credit card · No commitment · Free trial',
  },
}

export default function FinalCTA() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-lavender-600/8 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="fade-up mb-8">
          <GhostLogo className="h-16 w-auto mx-auto opacity-15" />
        </div>
        <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
          {txt.headingLine1}
          <br />
          {txt.headingLine2} <span className="gradient-text">gōster</span>
        </h2>
        <div className="fade-up delay-2 mt-10">
          <a
            href="https://app.goster.ai"
            className="group inline-flex items-center gap-2.5 px-10 py-4 text-base font-medium text-white bg-lavender-600 rounded-full hover:bg-lavender-500 transition-all duration-300 hover:shadow-xl hover:shadow-lavender-600/25"
          >
            {txt.cta}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        <p className="fade-up delay-3 mt-5 text-sm text-white/25">
          {txt.note}
        </p>
      </div>
    </section>
  )
}
