import { useScrollReveal } from '../hooks/useScrollReveal'
import { Check, Sparkles, Building2 } from 'lucide-react'

const plans = [
  {
    name: 'Trial',
    price: 'Gratis',
    period: '15 días',
    desc: 'Prueba todo sin compromiso.',
    features: [
      '3 plantillas personalizadas',
      '15 informes generados',
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
    price: '$199',
    period: 'MXN/mes',
    desc: 'Ideal para comenzar.',
    features: [
      'Plantillas ilimitadas',
      '100 informes por mes',
      'Todo lo del Trial',
      'Soporte por email',
      'Actualizaciones incluidas',
    ],
    cta: 'Comenzar ahora',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$399',
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
]

export default function Pricing() {
  const ref = useScrollReveal()

  return (
    <section id="planes" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">Planes</p>
          <h2 className="fade-up delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Elige tu plan
          </h2>
          <p className="fade-up delay-2 mt-4 text-gray-500 text-lg font-light">
            Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
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
                  Más popular
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
          * Todos los precios en pesos mexicanos. Sin tarjeta de crédito para el trial.
        </p>
      </div>
    </section>
  )
}
