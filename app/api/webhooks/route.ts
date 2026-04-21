import { NextRequest } from 'next/server'
import { getStripe } from '@/lib/stripe'
import sql from '@/lib/db'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  if (!sig) return new Response('Missing signature', { status: 400 })

  const stripe = getStripe()
  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(`Webhook error: ${message}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    await sql`
      UPDATE orders
      SET status = 'paid', customer_email = ${session.customer_details?.email ?? null}
      WHERE stripe_session_id = ${session.id}
    `
  }

  return new Response('OK', { status: 200 })
}
