# Pasta Party

An artisan pasta e-commerce site built in a single session. Minimal, elegant, no scroll.

## Stack

- **Next.js 16** — App Router, TypeScript
- **Tailwind CSS** — Cormorant Garamond + Jost, warm parchment palette
- **Supabase** — Postgres for products and orders
- **Stripe Checkout** — hosted, redirect-based payments

## Features

- Full-viewport product catalog — 6 artisan pastas, no scrolling
- Minimalist SVG illustrations per pasta shape (spaghetti, ravioli, fettuccine, rigatoni, pappardelle, tagliatelle)
- Cart persisted in localStorage
- Stripe Checkout with order tracking
- Webhook handler to mark orders paid on completion

## Getting Started

**1. Clone and install**
```bash
git clone https://github.com/jules631/pasta-party.git
cd pasta-party
npm install
```

**2. Environment variables**

Create `.env.local`:
```env
DATABASE_URL=your_supabase_postgres_url
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**3. Seed the database**

Run against your Postgres instance:
```sql
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL, slug TEXT UNIQUE NOT NULL,
  description TEXT, price INTEGER NOT NULL,
  image_emoji TEXT, stock INTEGER DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_session_id TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending', items JSONB NOT NULL,
  total INTEGER NOT NULL, customer_email TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

**4. Run**
```bash
npm run dev
```

## Stripe Testing

Use test card `4242 4242 4242 4242` with any future expiry and CVC.

## Structure

```
app/
  page.tsx               # product catalog (full viewport, no scroll)
  cart/page.tsx          # order summary + checkout
  success/page.tsx       # post-payment confirmation
  cancel/page.tsx        # cancelled checkout
  api/checkout/          # creates Stripe Checkout Session + saves order
  api/webhooks/          # Stripe webhook → marks order paid
components/
  Header.tsx             # nav with live cart count
  ProductRow.tsx         # single product row, add-to-cart
  PastaShape.tsx         # SVG line illustrations per pasta type
  CartProvider.tsx       # React context + localStorage cart
lib/
  db.ts                  # Postgres client
  stripe.ts              # Stripe server client
```
