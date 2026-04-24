import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Necesitamos herramientas que funcionen como un colega que te escucha y redacta el informe por ti, con el conocimiento clínico que solo un radiólogo tiene.',
    role: 'Radiólogo intervencionista',
  },
  {
    quote: 'Lo más importante es que aprenda mi estilo personal. Cada radiólogo tiene su forma de redactar y la herramienta debe adaptarse, no imponerme un formato genérico.',
    role: 'Neurorradióloga',
  },
  {
    quote: 'Que sea preciso y veraz. No puede inventar información que yo no dicté. Eso es crítico para adopción en un entorno médico.',
    role: 'Residente de 4to año',
  },
  {
    quote: 'La estructura del informe debe ser correcta, con gramática impecable y respetando el formato que yo defino.',
    role: 'Fellow de mama',
  },
  {
    quote: 'Sería ideal que pudiera vincular hallazgos con literatura médica actual. Eso le daría un valor agregado único.',
    role: 'Radiólogo MSK',
  },
  {
    quote: 'Tiene que ser práctica y fácil de usar. Si es complicada, nadie la va a adoptar en el flujo diario.',
    role: 'Radióloga de ultrasonido',
  },
]

export default function SocialProof() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">Validado por la comunidad</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Validado por radiólogos mexicanos
          </h2>
          <p className="fade-up delay-2 mt-4 text-2xl md:text-3xl font-bold gradient-text-light">
            92% lo considera útil o imprescindible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`fade-up delay-${Math.min(i + 1, 4)} p-6 rounded-2xl bg-white border border-gray-100 hover:border-lavender-200 transition-all duration-300`}
            >
              <p className="text-base text-gray-700 leading-relaxed mb-4">"{t.quote}"</p>
              <p className="text-sm text-gray-400 font-medium">— {t.role}</p>
            </div>
          ))}
        </div>

        <div className="fade-up delay-5 mt-14 text-center">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Todo esto, <span className="gradient-text-light">gōster ya lo hace.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
