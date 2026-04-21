import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import Header from '@/components/Header'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Pasta Party — Artisan Pasta',
  description: 'Rare and exceptional pasta, made with intention.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body className="h-full flex flex-col overflow-hidden">
        <CartProvider>
          <Header />
          <main className="flex-1 min-h-0 px-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
