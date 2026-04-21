import { NextRequest } from 'next/server'
import { stripe } from '@/lib/stripe'
import sql from '@/lib/db'
import { CartItem } from '@/types'

export async function POST(request: NextRequest) {
  const { items }: { items: CartItem[] } = await request.json()

  if (!items || items.length === 0) {
    return Response.json({ error: 'Cart is empty' }, { status: 400 })
  }

  const lineItems = items.map(({ product, quantity }) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.name,
        description: product.description,
      },
      unit_amount: product.price,
    },
    quantity,
  }))

  const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    metadata: { items: JSON.stringify(items.map(i => ({ id: i.product.id, qty: i.quantity }))) },
  })

  await sql`
    INSERT INTO orders (stripe_session_id, status, items, total)
    VALUES (
      ${session.id},
      'pending',
      ${JSON.stringify(items)}::jsonb,
      ${total}
    )
    ON CONFLICT (stripe_session_id) DO NOTHING
  `

  return Response.json({ url: session.url })
}
