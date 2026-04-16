export function GhostLogo({ className = "h-8 w-auto" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 260"
      fill="none"
      className={className}
    >
      <path
        d="M120 12 C52 12 12 62 12 130 L12 210 Q12 200 28 210 Q44 222 56 208 Q68 194 82 210 Q96 226 108 214 Q120 202 132 214 Q144 226 158 210 Q172 194 184 208 Q196 222 212 210 Q228 200 228 210 L228 130 C228 62 188 12 120 12Z"
        fill="currentColor"
      />
      <ellipse cx="84" cy="118" rx="22" ry="28" fill="white" />
      <ellipse cx="156" cy="118" rx="22" ry="28" fill="white" />
    </svg>
  )
}

export function Wordmark({ className = "h-5" }) {
  return (
    <span
      className={`font-medium tracking-tight text-current leading-none inline-block ${className}`}
      style={{ fontSize: 'inherit' }}
    >
      g&#x14D;ster
    </span>
  )
}

export function FullLogo({ ghostClassName = "h-8 w-auto", wordmarkClassName = "text-xl" }) {
  return (
    <div className="flex items-center gap-2.5">
      <GhostLogo className={ghostClassName} />
      <Wordmark className={wordmarkClassName} />
    </div>
  )
}
