/**
 * Renders a string with all instances of "gōster" wrapped in <strong>.
 * Usage: <BrandText>Texto con gōster aquí</BrandText>
 *   or:  <BrandText text="Texto con gōster aquí" />
 */
export default function BrandText({ children, text }) {
  const str = text || children
  if (typeof str !== 'string') return str

  const parts = str.split(/(gōster)/gi)
  return parts.map((part, i) =>
    part.toLowerCase() === 'gōster'
      ? <strong key={i} className="font-semibold">gōster</strong>
      : part
  )
}
