'use client'

import Link from 'next/link'
import { useCart } from './CartProvider'

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header className="shrink-0 border-b border-[var(--color-border)] px-8 py-4 flex items-center justify-between">
      <Link href="/" className="font-display italic text-2xl tracking-wide text-[var(--color-espresso)] hover:text-[var(--color-terra)] transition-colors">
        Pasta Party
      </Link>
      <Link
        href="/cart"
        className="text-xs tracking-[0.2em] uppercase text-[var(--color-warm-mid)] hover:text-[var(--color-espresso)] transition-colors"
      >
        {totalItems > 0 ? `Cart (${totalItems})` : 'Cart'}
      </Link>
    </header>
  )
}
