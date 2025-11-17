export default function LogoFruitpod({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-label="Fruitpod logo"
    >
      {/* Leaf */}
      <path d="M46 10c-6 0-10 5-11 9 6 2 12-1 14-7 1-3-1-2-3-2z" fill="#45A049"/>
      {/* Three fruit pods */}
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF5C8A"/><stop offset="1" stopColor="#FF9A5A"/>
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9BE15D"/><stop offset="1" stopColor="#00C853"/>
        </linearGradient>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFD36E"/><stop offset="1" stopColor="#FF9E2C"/>
        </linearGradient>
      </defs>
      <circle cx="20" cy="34" r="12" fill="url(#g1)"/>
      <circle cx="34" cy="42" r="12" fill="url(#g2)"/>
      <circle cx="48" cy="34" r="12" fill="url(#g3)"/>
    </svg>
  );
}
