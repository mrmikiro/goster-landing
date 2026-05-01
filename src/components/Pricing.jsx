import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { Check, Sparkles, Building2 } from 'lucide-react'

const t = {
  es: {
    label: 'Planes',
    heading: 'Elige tu plan',
    subheading: 'Sin contratos a largo plazo. Cancela cuando quieras.',
    mostPopular: 'Más popular',
    note: '* Todos los precios en pesos mexicanos. Sin tarjeta de crédito para la prueba gratuita.',
    plans: [
      {
        name: 'Trial',
        price: 'Gratis',
        period: '',
        desc: 'Prueba todo sin compromiso.',
        features: [
          '3 plantillas personalizadas',
          '10 informes generados',
          'Diccionario clínico propio',
          'Dictado por voz',
          'Celular como micrófono',
          'Historial de estudios',
        ],
        cta: 'Comenzar prueba',
        highlighted: false,
      },
      {
        name: 'Base',
        price: '$249',
        period: 'MXN/mes',
        desc: 'Ideal para comenzar.',
        features: [
          '20 plantillas',
          '50 informes por mes',
          'Todo lo del Trial',
          'Soporte por email',
          'Actualizaciones incluidas',
        ],
        cta: 'Comenzar ahora',
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '$499',
        period: 'MXN/mes',
        desc: 'Sin límites. Para alta demanda.',
        features: [
          'Plantillas ilimitadas',
          'Informes ilimitados',
          'Todo lo de Base',
          'Soporte prioritario',
          'Acceso anticipado a nuevas funciones',
          'Exportación múltiple (Word, PDF, RTF)',
        ],
        cta: 'Comenzar ahora',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        price: 'Personalizado',
        period: '',
        desc: 'Para instituciones y grupos de radiólogos.',
        features: [
          'Todo lo del Plan Pro',
          'Plantillas institucionales precargadas',
          'Informes homogeneizados para toda la organización',
          'Planes grupales y multi-usuario',
          'Onboarding dedicado',
          'Facturación institucional',
          'Soporte 24/7 dedicado',
        ],
        cta: 'Contactar ventas',
        highlighted: false,
        isEnterprise: true,
      },
    ],
  },
  en: {
    label: 'Pricing',
    heading: 'Choose your plan',
    subheading: 'No long-term contracts. Cancel anytime.',
    mostPopular: 'Most popular',
    note: '* All prices in Mexican pesos. No credit card required for the free trial.',
    plans: [
      {
        name: 'Trial',
        price: 'Free',
        period: '',
        desc: 'Try everything with no commitment.',
        features: [
          '3 custom templates',
          '10 generated reports',
          'Personal clinical dictionary',
          'Voice dictation',
          'Phone as microphone',
          'Study history',
        ],
        cta: 'Start trial',
        highlighted: false,
      },
      {
        name: 'Base',
        price: '$249',
        period: 'MXN/mo',
        desc: 'Ideal to get started.',
        features: [
          '20 templates',
          '50 reports per month',
          'Everything in Trial',
          'Email support',
          'Updates included',
        ],
        cta: 'Get started',
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '$499',
        period: 'MXN/mo',
        desc: 'No limits. For high demand.',
        features: [
          'Unlimited templates',
          'Unlimited reports',
          'Everything in Base',
          'Priority support',
          'Early access to new features',
          'Multiple export formats (Word, PDF, RTF)',
        ],
        cta: 'Get started',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'For institutions and radiology groups.',
        features: [
          'Everything in the Pro plan',
          'Pre-loaded institutional templates',
          'Standardized reports across the organization',
          'Group and multi-user plans',
          'Dedicated onboarding',
          'Institutional billing',
          'Dedicated 24/7 support',
        ],
        cta: 'Contact sales',
        highlighted: false,
        isEnterprise: true,
      },
    ],
  },
}

export default function Pricing() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section id="planes" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">{txt.label}</p>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
            {txt.heading}
          </h2>
          <p className="fade-up delay-2 mt-4 text-gray-500 text-lg font-light">
            {txt.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {txt.plans.map((plan, i) => (
            <div
              key={i}
              className={`fade-up delay-${i + 1} relative flex flex-col rounded-2xl p-7 border transition-all duration-300 ${
                plan.highlighted
                  ? 'pricing-highlight border-lavender-300 shadow-lg shadow-lavender-100/30 scale-[1.02]'
                  : 'bg-white border-gray-100 hover:border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 bg-lavender-600 text-white text-xs font-medium rounded-full shadow-lg shadow-lavender-600/20">
                  <Sparkles className="w-3 h-3" strokeWidth={1.5} />
                  {txt.mostPopular}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.highlighted ? 'text-lavender-700' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-sm text-gray-400 ml-1">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? 'text-lavender-500' : 'text-gray-300'}`} strokeWidth={2} />
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.isEnterprise ? 'mailto:contacto@goster.ai' : 'https://app.goster.ai'}
                className={`block text-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-lavender-600 text-white hover:bg-lavender-700 hover:shadow-lg hover:shadow-lavender-200'
                    : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-lavender-300 hover:text-lavender-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="fade-up delay-4 mt-8 text-center text-sm text-gray-400">
          {txt.note}
        </p>
      </div>
    </section>
  )
}
