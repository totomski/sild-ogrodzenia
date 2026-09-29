export default function Logo({ variant = 'full', className = '', dark = false }: { variant?: 'full' | 'compact' | 'icon', className?: string, dark?: boolean }) {
  if (variant === 'icon') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="32" height="120" fill={dark ? "#1e5a8a" : "#12395A"} />
        <g transform="translate(38,0)" stroke={dark ? "#fff" : "#000"} strokeWidth="2.7" fill="none" strokeLinecap="square">
          <path d="M0 0 H82 V82"/>
          <path d="M8 8 H74 V74"/>
          <path d="M16 16 H66 V66"/>
          <path d="M24 24 H58 V58"/>
          <path d="M32 32 H50 V50"/>
          <rect x="35" y="35" width="12" height="12" strokeWidth="2.7"/>
          <line x1="0" y1="56" x2="44" y2="56"/>
          <line x1="0" y1="62" x2="44" y2="62"/>
          <line x1="0" y1="68" x2="44" y2="68"/>
          <line x1="0" y1="74" x2="44" y2="74"/>
          <line x1="0" y1="80" x2="44" y2="80"/>
        </g>
      </svg>
    )
  }

  if (variant === 'compact') {
    return <img src={dark ? "/logo-sild-dark.svg" : "/logo-sild-compact.svg"} alt="SILD" className={className} />
  }

  return <img src={dark ? "/logo-sild-dark.svg" : "/logo-sild-full.svg"} alt="SILD Systemy Ogrodzeń Strzeszewski" className={className} />
}
