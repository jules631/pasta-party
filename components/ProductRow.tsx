'use client'

import { Product } from '@/types'
import { useCart } from './CartProvider'
import PastaShape from './PastaShape'
import { useState } from 'react'

export default function ProductRow({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="flex-1 flex items-center gap-6 border-b border-[var(--color-border)] px-2 min-h-0">
      <PastaShape slug={product.slug} />
      <div className="flex-1 min-w-0">
        <h2 className="font-display italic text-2xl text-[var(--color-espresso)] leading-tight truncate">
          {product.name}
        </h2>
        <p className="text-xs text-[var(--color-warm-mid)] tracking-wide mt-0.5 truncate">
          {product.description}
        </p>
      </div>
      <span className="font-display text-xl text-[var(--color-espresso)] shrink-0">
        ${(product.price / 100).toFixed(2)}
      </span>
      <button
        onClick={handleAdd}
        className="shrink-0 text-xs tracking-[0.18em] uppercase border-b border-[var(--color-espresso)] text-[var(--color-espresso)] hover:text-[var(--color-terra)] hover:border-[var(--color-terra)] transition-colors pb-px w-16 text-right"
      >
        {added ? 'Added' : 'Add'}
      </button>
    </div>
  )
}
