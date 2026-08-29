export default function HeroOrb() {
  return (
    <div className="hero-orb-wrap" aria-hidden="true">
      <div className="hero-orb-glow" />
      <svg viewBox="0 0 400 400" className="hero-orb-svg">
        <circle cx="200" cy="200" r="150" stroke="url(#ringGrad)" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="200" cy="200" r="110" stroke="url(#ringGrad)" strokeWidth="1" fill="none" opacity="0.35" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="70" fill="url(#coreGrad)" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const len = 14 + (i % 5) * 6;
          const x1 = 200 + Math.cos(angle) * 160;
          const y1 = 200 + Math.sin(angle) * 160;
          const x2 = 200 + Math.cos(angle) * (160 + len);
          const y2 = 200 + Math.sin(angle) * (160 + len);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#ringGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />
          );
        })}
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B14EFF" />
            <stop offset="100%" stopColor="#FF4D8D" />
          </linearGradient>
          <radialGradient id="coreGrad">
            <stop offset="0%" stopColor="#FF4D8D" />
            <stop offset="100%" stopColor="#B14EFF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}