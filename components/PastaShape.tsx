const shapes: Record<string, React.ReactNode> = {
  'squid-ink-spaghetti': (
    <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10 C16 6 28 18 40 14 C52 10 58 18 62 14" strokeWidth="1.2"/>
      <path d="M2 20 C14 16 26 28 38 24 C50 20 56 28 62 24" strokeWidth="1.2"/>
      <path d="M2 30 C12 26 24 38 38 34 C50 30 58 38 62 34" strokeWidth="1.2"/>
      <path d="M2 38 C16 34 30 44 44 40 C54 36 60 42 62 40" strokeWidth="1.2" strokeOpacity="0.4"/>
    </svg>
  ),
  'lobster-ravioli': (
    <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="24" height="22" rx="4" strokeWidth="1.2"/>
      <path d="M4 19 Q16 16 28 19" strokeWidth="0.7" strokeOpacity="0.5"/>
      <path d="M16 8 Q14 19 16 30" strokeWidth="0.7" strokeOpacity="0.5"/>
      <rect x="36" y="8" width="24" height="22" rx="4" strokeWidth="1.2"/>
      <path d="M36 19 Q48 16 60 19" strokeWidth="0.7" strokeOpacity="0.5"/>
      <path d="M48 8 Q46 19 48 30" strokeWidth="0.7" strokeOpacity="0.5"/>
    </svg>
  ),
  'saffron-fettuccine': (
    <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeLinecap="round">
      <path d="M2 12 C20 8 44 14 62 10" strokeWidth="3.5"/>
      <path d="M2 22 C18 18 44 24 62 20" strokeWidth="3.5"/>
      <path d="M2 32 C20 28 42 36 62 30" strokeWidth="3.5"/>
    </svg>
  ),
  'nduja-rigatoni': (
    <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeLinecap="round">
      <rect x="4" y="6" width="14" height="28" rx="3" strokeWidth="1.2"/>
      <line x1="9" y1="7" x2="9" y2="33" strokeWidth="0.7" strokeOpacity="0.45"/>
      <line x1="13" y1="7" x2="13" y2="33" strokeWidth="0.7" strokeOpacity="0.45"/>
      <rect x="25" y="6" width="14" height="28" rx="3" strokeWidth="1.2"/>
      <line x1="30" y1="7" x2="30" y2="33" strokeWidth="0.7" strokeOpacity="0.45"/>
      <line x1="34" y1="7" x2="34" y2="33" strokeWidth="0.7" strokeOpacity="0.45"/>
      <rect x="46" y="6" width="14" height="28" rx="3" strokeWidth="1.2"/>
      <line x1="51" y1="7" x2="51" y2="33" strokeWidth="0.7" strokeOpacity="0.45"/>
      <line x1="55" y1="7" x2="55" y2="33" strokeWidth="0.7" strokeOpacity="0.45"/>
    </svg>
  ),
  'porcini-pappardelle': (
    <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeLinecap="round">
      <path d="M2 10 C22 6 42 8 62 10 L62 18 C42 16 22 14 2 18 Z" strokeWidth="1.2"/>
      <path d="M2 24 C22 20 42 22 62 24 L62 32 C42 30 22 28 2 32 Z" strokeWidth="1.2"/>
    </svg>
  ),
  'gold-leaf-tagliatelle': (
    <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeLinecap="round">
      <path d="M32 22 C40 10 56 14 54 24 C52 34 40 38 28 34 C16 30 12 18 20 12 C28 6 44 10 46 22" strokeWidth="1.2"/>
      <path d="M32 22 C36 14 48 18 46 26 C44 34 34 36 26 30" strokeWidth="1.2" strokeOpacity="0.45"/>
      <path d="M32 22 C34 18 40 20 40 26" strokeWidth="1.2" strokeOpacity="0.2"/>
    </svg>
  ),
}

export default function PastaShape({ slug }: { slug: string }) {
  return (
    <div className="w-16 shrink-0 text-[var(--color-espresso)]">
      {shapes[slug] ?? null}
    </div>
  )
}
