export const dynamic = 'force-dynamic'

import sql from '@/lib/db'
import { Product } from '@/types'
import ProductRow from '@/components/ProductRow'

async function getProducts(): Promise<Product[]> {
  const rows = await sql<Product[]>`SELECT * FROM products ORDER BY price ASC`
  return rows
}

export default async function CatalogPage() {
  const products = await getProducts()

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between py-4 border-b border-[var(--color-border)] shrink-0">
        <p className="font-display italic text-[var(--color-warm-mid)] text-lg">The Collection</p>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-warm-mid)]">Firenze, Italia</p>
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        {products.map(product => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
