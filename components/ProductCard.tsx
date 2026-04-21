'use client'

import { Product } from '@/types'
import { useCart } from './CartProvider'
import { useState } from 'react'

const CARD_PALETTES = [
  { bg: '#B85C38', text: '#F4EFE6' },
  { bg: '#2C2318', text: '#D9CEBC' },
  { bg: '#7C6E5A', text: '#F4EFE6' },
  { bg: '#D9CEBC', text: '#1A1209' },
  { bg: '#5C4A38', text: '#EAE0D0' },
  { bg: '#E8DFD0', text: '#2C2318' },
]

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const palette = CARD_PALETTES[index % CARD_PALETTES.length]
  const num = String(index + 1).padStart(2, '0')

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="flex flex-col group">
      <div
        className="relative h-56 flex items-end p-5 overflow-hidden"
        style={{ backgroundColor: palette.bg }}
      >
        <span
          className="absolute top-4 right-5 font-display italic text-8xl leading-none select-none pointer-events-none"
          style={{ color: palette.text, opacity: 0.18 }}
        >
          {num}
        </span>
        <span
          className="font-display italic text-4xl leading-tight"
          style={{ color: palette.text }}
        >
          {product.name}
        </span>
      </div>

      <div className="bg-[var(--color-cream)] border border-[var(--color-border)] border-t-0 p-5 flex flex-col flex-1">
        <p className="text-xs leading-relaxed text-[var(--color-warm-mid)] tracking-wide flex-1">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-xl text-[var(--color-espresso)]">
            ${(product.price / 100).toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className="text-xs tracking-[0.18em] uppercase border-b border-[var(--color-espresso)] text-[var(--color-espresso)] hover:text-[var(--color-terra)] hover:border-[var(--color-terra)] transition-colors pb-px"
          >
            {added ? 'Added' : 'Add to order'}
          </button>
        </div>
      </div>
    </div>
  )
}
