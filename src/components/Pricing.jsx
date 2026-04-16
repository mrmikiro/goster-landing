import { useScrollReveal } from '../hooks/useScrollReveal'
import { Check, Building2 } from 'lucide-react'

const plans = [
  {
    name: 'Base',
    price: '$349',
    period: 'MXN/mes',
    description: 'Todo lo esencial para digitalizar tu flujo de informes.',
    features: [
      'Generación de informes por voz',
      'Conclusiones diagnósticas automáticas',
      'Editor de texto enriquecido',
      'Diccionario clínico personalizado',
      'Plantillas por tipo de estudio',
      'Dictado remoto por celular',
      'Temas y personalización visual',
      'Soporte estándar',
    ],
    cta: 'Comenzar ahora',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$599',
    period: 'MXN/mes',
    description: 'Mayor capacidad y funciones avanzadas para alta demanda.',
    features: [
      'Todo lo del Plan Base',
      'Mayor capacidad de dictados',
      'Funciones avanzadas de IA',
      'Prioridad en procesamiento',
      'Triggers clínicos avanzados',
      'Correcciones masivas por voz',
      'Historial extendido de informes',
      'Soporte prioritario',
    ],
    cta: 'Comenzar ahora',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    period: '',
    description: 'Para instituciones y grupos de radiólogos con necesidades especiales.',
    features: [
      'Todo lo del Plan Pro',
      'Capacidad ilimitada',
      'Integraciones personalizadas',
      'RIS/PACS compatibilidad',
      'Onboarding dedicado',
      'SLA garantizado',
      'Administración multi-usuario',
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
    <section id="planes" ref={ref} className="py-20 md:py-28 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="fade-up text-sm font-medium text-lavender-500 tracking-wide uppercase mb-3">
            Planes
          </p>
          <h2 className="fade-up fade-up-delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Elige el plan que se adapta a tu práctica
          </h2>
          <p className="fade-up fade-up-delay-2 mt-4 text-gray-500 text-lg font-light">
            Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} relative flex flex-col rounded-2xl p-7 border transition-all ${
                plan.highlighted
                  ? 'pricing-highlight border-lavender-300 shadow-sm'
                  : 'bg-white border-gray-100'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-lavender-600 text-white text-xs font-medium rounded-full">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {plan.isEnterprise && <Building2 className="w-4.5 h-4.5 text-gray-400" strokeWidth={1.5} />}
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.highlighted ? 'text-lavender-700' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-gray-400 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-lavender-500 shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.isEnterprise ? 'mailto:contacto@goster.ai' : 'https://app.goster.ai'}
                className={`block text-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
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
      </div>
    </section>
  )
}
