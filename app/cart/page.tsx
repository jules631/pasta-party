'use client'

import { useCart } from '@/components/CartProvider'
import Link from 'next/link'
import { useState } from 'react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      const { url } = await res.json()
      if (url) window.location.href = url
    } catch {
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="py-32 border-t border-[var(--color-border)]">
        <p className="font-display italic text-4xl text-[var(--color-espresso)] mb-4">
          Your order is empty.
        </p>
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase border-b border-[var(--color-espresso)] text-[var(--color-espresso)] hover:text-[var(--color-terra)] hover:border-[var(--color-terra)] transition-colors pb-px"
        >
          Browse the collection
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-xl">
      <h1 className="font-display italic text-5xl text-[var(--color-espresso)] mb-12">Your Order</h1>

      <div className="border-t border-[var(--color-border)]">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-start gap-4 py-6 border-b border-[var(--color-border)]">
            <div className="flex-1">
              <p className="font-display text-lg text-[var(--color-espresso)]">{product.name}</p>
              <p className="text-xs text-[var(--color-warm-mid)] mt-1 tracking-wide">
                ${(product.price / 100).toFixed(2)} each
              </p>
            </div>

            <div className="flex items-center gap-3 mt-1">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="text-[var(--color-warm-mid)] hover:text-[var(--color-espresso)] transition-colors text-lg leading-none"
                aria-label="Decrease"
              >
                −
              </button>
              <span className="text-sm w-4 text-center text-[var(--color-espresso)]">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="text-[var(--color-warm-mid)] hover:text-[var(--color-espresso)] transition-colors text-lg leading-none"
                aria-label="Increase"
              >
                +
              </button>
            </div>

            <div className="text-right mt-1">
              <p className="font-display text-lg text-[var(--color-espresso)] w-20">
                ${((product.price * quantity) / 100).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(product.id)}
                className="text-xs text-[var(--color-warm-mid)] hover:text-[var(--color-terra)] tracking-widest uppercase transition-colors mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 flex items-start justify-between mb-10">
        <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-warm-mid)]">Total</span>
        <span className="font-display text-2xl text-[var(--color-espresso)]">
          ${(totalPrice / 100).toFixed(2)}
        </span>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full border border-[var(--color-espresso)] text-[var(--color-espresso)] py-4 text-xs tracking-[0.25em] uppercase hover:bg-[var(--color-espresso)] hover:text-[var(--color-parchment)] transition-colors disabled:opacity-40"
      >
        {loading ? 'Preparing checkout…' : 'Proceed to payment'}
      </button>

      <Link
        href="/"
        className="block text-center mt-6 text-xs tracking-[0.2em] uppercase text-[var(--color-warm-mid)] hover:text-[var(--color-espresso)] transition-colors"
      >
        Continue shopping
      </Link>
    </div>
  )
}
