export function GhostLogo({ className = "h-8 w-auto", darkBg = false }) {
  // Eye color: white on dark backgrounds, white cutout on light (the body is currentColor)
  const eyeFill = darkBg ? '#0a0a0f' : 'white'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 520"
      fill="none"
      className={className}
    >
      {/* Ghost body — wide dome, 3 smooth waves at bottom */}
      <path
        d="M240 20
           C130 20 40 100 40 220
           L40 410
           C40 410 60 370 100 400
           C140 430 150 380 190 410
           C210 430 230 430 250 420
           C270 430 290 430 310 410
           C350 380 360 430 400 400
           C440 370 460 410 460 410
           L460 220
           C460 100 370 20 240 20Z"
        fill="currentColor"
      />
      {/* Left eye — rounded oval */}
      <ellipse cx="170" cy="230" rx="42" ry="50" fill={eyeFill} />
      {/* Right eye — rounded oval */}
      <ellipse cx="310" cy="230" rx="42" ry="50" fill={eyeFill} />
    </svg>
  )
}

export function Wordmark({ className = "text-xl" }) {
  return (
    <span className={`font-semibold tracking-[-0.02em] leading-none ${className}`}
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      gōster
    </span>
  )
}

export function FullLogo({ ghostClassName = "h-8 w-auto", wordmarkClassName = "text-xl", darkBg = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <GhostLogo className={ghostClassName} darkBg={darkBg} />
      <Wordmark className={wordmarkClassName} />
    </div>
  )
}
