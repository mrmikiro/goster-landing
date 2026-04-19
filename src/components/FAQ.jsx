import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Mis datos son privados?',
    a: 'Sí. Todos tus datos están protegidos con autenticación y vinculados exclusivamente a tu cuenta. Nadie más tiene acceso a tus diccionarios, plantillas ni informes.',
  },
  {
    q: '¿Qué pasa si subo un informe con datos del paciente?',
    a: 'gōster detecta y anonimiza automáticamente los datos del paciente al procesar el documento. Los nombres, edades y datos identificables se eliminan antes de guardar.',
  },
  {
    q: '¿Puedo usar gōster sin diccionario ni plantilla?',
    a: 'Sí. Sin diccionario, gōster usa conocimiento clínico propio. Sin plantilla, genera en formato estándar. Pero los resultados mejoran significativamente cuando configuras ambos.',
  },
  {
    q: '¿gōster aprende de mis correcciones?',
    a: 'Sí. Cada vez que editas un informe y haces clic en "Guardar cambios", gōster registra la corrección y la aplica automáticamente en futuros informes del mismo tipo de estudio. Las correcciones se transfieren a casos similares.',
  },
  {
    q: '¿Puede gōster inventar hallazgos?',
    a: 'No. gōster tiene una regla de fidelidad absoluta: si no lo dictaste, no aparece en el informe. Expande tus triggers con terminología profesional, pero nunca agrega hallazgos que no mencionaste.',
  },
  {
    q: '¿Qué tipos de estudio soporta?',
    a: 'Todos. Puedes crear plantillas y diccionarios para cualquier modalidad: RX, TC, RM, US, MG, DEXA y más. gōster detecta automáticamente el tipo de estudio al subir tus documentos.',
  },
  {
    q: '¿Puedo acceder desde cualquier dispositivo?',
    a: 'Sí. gōster es una aplicación web que funciona desde cualquier navegador. Además, puedes vincular tu celular por QR para dictar de forma remota sin instalar ninguna app.',
  },
  {
    q: '¿Qué navegador necesito?',
    a: 'Chrome o Edge son los recomendados para el dictado por voz. La plataforma funciona en cualquier navegador moderno.',
  },
  {
    q: '¿Necesito dictar de forma estructurada?',
    a: 'No. Puedes hablar de forma natural, cambiar el orden, corregirte a mitad de frase. gōster entiende tu intención clínica y estructura el informe correctamente.',
  },
  {
    q: '¿Qué pasa si me corrijo durante el dictado?',
    a: 'gōster descarta automáticamente los valores provisionales y conserva solo tu decisión final. Si dices "16 grados... no, son 19", usará 19° en todo el informe.',
  },
  {
    q: '¿Puedo agregar instrucciones específicas por tipo de estudio?',
    a: 'Sí. Cada plantilla puede llevar instrucciones especiales: cálculos, convenciones de medidas, terminología. Se combinan con tus instrucciones globales.',
  },
  {
    q: '¿gōster genera la impresión diagnóstica?',
    a: 'Siempre. La impresión se genera automáticamente a partir del cuerpo del informe, ordenada de mayor a menor relevancia clínica. Si el diccionario tiene equivalencias, las usa; si no, infiere el diagnóstico.',
  },
  {
    q: '¿gōster reemplaza al radiólogo?',
    a: 'No. gōster es un asistente de redacción. El médico dicta los hallazgos; gōster los expande y estructura. La responsabilidad clínica es siempre del radiólogo.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-gray-900 pr-4 group-hover:text-lavender-600 transition-colors">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-lavender-500' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}
      >
        <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="fade-up text-sm font-medium gradient-label tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="fade-up delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="fade-up delay-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
