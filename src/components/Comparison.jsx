import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { Check, Minus } from 'lucide-react'

const t = {
  es: {
    label: '¿Por qué gōster?',
    heading: 'Diseñado por radiólogos, para radiólogos',
    othersHeader: 'Otras plataformas',
    rows: [
      { feature: 'Precio mensual', others: '$75–150 USD', goster: '$8–20 USD' },
      { feature: 'Estilo de redacción', others: 'Genérico', goster: 'Aprende el tuyo' },
      { feature: 'Plantillas', others: 'Limitadas', goster: 'Ilimitadas' },
      { feature: 'Corrección post-generación', others: 'Manual', goster: 'Asistida por voz' },
      { feature: 'Celular como micrófono', others: null, goster: true },
      { feature: 'Diccionario clínico personal', others: null, goster: true },
      { feature: 'Aprende de correcciones', others: null, goster: true },
    ],
  },
  en: {
    label: 'Why gōster?',
    heading: 'Designed by radiologists, for radiologists',
    othersHeader: 'Other platforms',
    rows: [
      { feature: 'Monthly price', others: '$75–150 USD', goster: '$8–20 USD' },
      { feature: 'Writing style', others: 'Generic', goster: 'Learns yours' },
      { feature: 'Templates', others: 'Limited', goster: 'Unlimited' },
      { feature: 'Post-generation correction', others: 'Manual', goster: 'Voice-assisted' },
      { feature: 'Phone as microphone', others: null, goster: true },
      { feature: 'Personal clinical dictionary', others: null, goster: true },
      { feature: 'Learns from corrections', others: null, goster: true },
    ],
  },
}

function CellValue({ value }) {
  if (value === true) return <Check className="w-4 h-4 text-lavender-500" strokeWidth={2} />
  if (value === null) return <Minus className="w-4 h-4 text-gray-300" strokeWidth={1.5} />
  return <span>{value}</span>
}

export default function Comparison() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">{txt.label}</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {txt.heading}
          </h2>
        </div>

        <div className="fade-up delay-2 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 font-medium text-gray-400 text-xs uppercase tracking-wider w-2/5"></th>
                <th className="text-center py-4 px-4 font-medium text-gray-400 text-xs uppercase tracking-wider">{txt.othersHeader}</th>
                <th className="text-center py-4 px-4 font-bold text-white text-xs uppercase tracking-wider bg-lavender-600 rounded-t-xl">
                  <strong className="font-bold">gōster</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              {txt.rows.map((row, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-700">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-gray-400">
                    <CellValue value={row.others} />
                  </td>
                  <td className="py-4 px-4 text-center font-semibold text-lavender-600 bg-lavender-50/50">
                    <div className="flex justify-center">
                      <CellValue value={row.goster} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
