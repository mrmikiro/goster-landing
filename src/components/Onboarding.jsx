import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../i18n/LanguageContext'
import { Upload, BookOpen, Mic } from 'lucide-react'

const t = {
  es: {
    label: 'Empieza en minutos',
    heading: 'Tres pasos para tu primer informe',
    steps: [
      {
        step: '1',
        title: 'Sube tus plantillas',
        desc: 'Carga un informe normal por cada tipo de estudio (DOCX, DOC o PDF). gōster detecta la modalidad y puedes agregar instrucciones especiales por plantilla.',
      },
      {
        step: '2',
        title: 'Construye tu diccionario',
        desc: 'Sube informes patológicos previos. gōster extrae triggers y descripciones, anonimiza datos del paciente y fusiona entradas sin duplicar.',
      },
      {
        step: '3',
        title: 'Dicta y genera',
        desc: 'Activa la plantilla manualmente o con voz diciendo el tipo de estudio (ej. "resonancia magnética de hombro"). El diccionario se vincula solo. Dicta tus hallazgos y presiona Generar informe.',
      },
    ],
  },
  en: {
    label: 'Get started in minutes',
    heading: 'Three steps to your first report',
    steps: [
      {
        step: '1',
        title: 'Upload your templates',
        desc: 'Upload a normal report for each study type (DOCX, DOC, or PDF). gōster detects the modality and you can add special instructions per template.',
      },
      {
        step: '2',
        title: 'Build your dictionary',
        desc: 'Upload previous pathological reports. gōster extracts triggers and descriptions, anonymizes patient data, and merges entries without duplicates.',
      },
      {
        step: '3',
        title: 'Dictate and generate',
        desc: 'Activate the template manually or by voice, stating the study type (e.g., "shoulder MRI"). The dictionary links automatically. Dictate your findings and press Generate report.',
      },
    ],
  },
}

const stepIcons = [Upload, BookOpen, Mic]

export default function Onboarding() {
  const ref = useScrollReveal()
  const { lang } = useLang()
  const txt = t[lang]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">{txt.label}</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {txt.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {txt.steps.map((s, i) => {
            const Icon = stepIcons[i]
            return (
              <div key={i} className={`fade-up delay-${i + 1} relative text-center`}>
                {i < txt.steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+50px)] right-[calc(-50%+50px)] h-px bg-gradient-to-r from-lavender-300 to-lavender-100" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-lavender-50 border border-lavender-200 mb-5">
                  <Icon className="w-8 h-8 text-lavender-600" strokeWidth={1.2} />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-lavender-600 text-white text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
