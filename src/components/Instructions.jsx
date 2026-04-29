import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { Settings, Table2, MessageSquare, Sliders } from 'lucide-react'

const t = {
  es: {
    sectionLabel: 'Personalización avanzada',
    heading: (
      <>
        Configura cómo <span className="gradient-text-light">gōster</span> redacta por ti
      </>
    ),
    subtitle: (
      <>
        Define reglas globales y por estudio. <strong className="text-gray-700 font-medium">gōster</strong> las aplica en cada informe.
      </>
    ),
    globalTitle: 'Instrucciones globales',
    globalSubtitle: 'Aplican a todos los informes',
    globalDesc: (
      <>
        Define tu estilo de redacción, terminología preferida y convenciones. <strong className="text-gray-700 font-medium">gōster</strong> las respeta siempre.
      </>
    ),
    templateTitle: 'Instrucciones por plantilla',
    templateSubtitle: 'Reglas específicas por tipo de estudio',
    templateDesc: 'Cada plantilla puede llevar sus propias reglas: cálculos, convenciones, clasificaciones. Se combinan con las globales.',
    tablesTitle: 'Tablas por voz',
    tablesSubtitle: 'Dicta los valores, gōster llena la tabla',
    tablesDesc: (
      <>
        Si tu plantilla incluye tablas clínicas (medidas, ángulos, clasificaciones), solo dicta los valores.
        <strong className="text-gray-700 font-medium"> gōster</strong> identifica a qué campo pertenece cada valor y llena la tabla automáticamente con el formato correcto. Sin tocar el teclado.
      </>
    ),
    instructionExamples: [
      '"Evita usar las frases se observa y se identifica."',
      '"Todos los valores numéricos deben expresarse en milímetros."',
      '"Cuando se dicte ÍNDICE DE INSALL-SALVATI seguido de dos cifras, divide A entre B y escribe el resultado."',
      '"Si se menciona derrame articular, incluye siempre la cuantificación."',
    ],
  },
  en: {
    sectionLabel: 'Advanced customization',
    heading: (
      <>
        Configure how <span className="gradient-text-light">gōster</span> writes for you
      </>
    ),
    subtitle: (
      <>
        Define global and per-study rules. <strong className="text-gray-700 font-medium">gōster</strong> applies them to every report.
      </>
    ),
    globalTitle: 'Global instructions',
    globalSubtitle: 'Apply to all reports',
    globalDesc: (
      <>
        Define your writing style, preferred terminology, and conventions. <strong className="text-gray-700 font-medium">gōster</strong> always follows them.
      </>
    ),
    templateTitle: 'Per-template instructions',
    templateSubtitle: 'Specific rules per study type',
    templateDesc: 'Each template can have its own rules: calculations, conventions, classifications. They combine with global ones.',
    tablesTitle: 'Voice tables',
    tablesSubtitle: 'Dictate the values, gōster fills the table',
    tablesDesc: (
      <>
        If your template includes clinical tables (measurements, angles, classifications), just dictate the values.
        <strong className="text-gray-700 font-medium"> gōster</strong> identifies which field each value belongs to and fills in the table automatically with the correct format. No keyboard needed.
      </>
    ),
    instructionExamples: [
      '"Avoid using the phrases it is observed and it is identified."',
      '"All numerical values must be expressed in millimeters."',
      '"When INSALL-SALVATI INDEX is dictated followed by two numbers, divide A by B and write the result."',
      '"If joint effusion is mentioned, always include quantification."',
    ],
  },
}

export default function Instructions() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">{txt.sectionLabel}</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {txt.heading}
          </h2>
          <p className="fade-up delay-2 mt-4 text-gray-500 font-light max-w-2xl mx-auto">
            {txt.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instructions block */}
          <div className="fade-up delay-2">
            <div className="p-7 rounded-2xl border border-gray-100 h-full hover:border-lavender-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-lavender-50 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{txt.globalTitle}</h3>
                  <p className="text-xs text-gray-400">{txt.globalSubtitle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {txt.globalDesc}
              </p>
              <div className="space-y-2">
                {txt.instructionExamples.slice(0, 2).map((ex, i) => (
                  <div key={i} className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-100">
                    <p className="text-xs text-gray-500 italic">{ex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Per-template instructions */}
          <div className="fade-up delay-3">
            <div className="p-7 rounded-2xl border border-gray-100 h-full hover:border-lavender-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-lavender-50 flex items-center justify-center">
                  <Sliders className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{txt.templateTitle}</h3>
                  <p className="text-xs text-gray-400">{txt.templateSubtitle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {txt.templateDesc}
              </p>
              <div className="space-y-2">
                {txt.instructionExamples.slice(2).map((ex, i) => (
                  <div key={i} className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-100">
                    <p className="text-xs text-gray-500 italic">{ex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="fade-up delay-4 mt-8">
          <div className="p-7 rounded-2xl border border-gray-100 hover:border-lavender-200 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex items-center gap-3 md:w-1/3">
                <div className="w-10 h-10 rounded-xl bg-lavender-50 flex items-center justify-center shrink-0">
                  <Table2 className="w-5 h-5 text-lavender-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{txt.tablesTitle}</h3>
                  <p className="text-xs text-gray-400">{txt.tablesSubtitle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed md:w-2/3">
                {txt.tablesDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
