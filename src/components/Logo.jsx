export function GhostLogo({ className = "h-8 w-auto", invert = false }) {
  return (
    <img
      src="/goster-icon-light.png"
      alt="Gōster"
      className={`${className}${invert ? ' invert' : ''}`}
      draggable={false}
    />
  )
}

export function Wordmark({ className = "h-5 w-auto", invert = false }) {
  return (
    <img
      src="/goster-wordmark.png"
      alt="Gōster"
      className={`${className}${invert ? ' invert' : ''}`}
      draggable={false}
    />
  )
}

export function FullLogo({ ghostClassName = "h-8 w-auto", wordmarkClassName = "h-5 w-auto", invert = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <GhostLogo className={ghostClassName} invert={invert} />
      <Wordmark className={wordmarkClassName} invert={invert} />
    </div>
  )
}
