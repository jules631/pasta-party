import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="py-32 max-w-md border-t border-[var(--color-border)]">
      <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-warm-mid)] mb-6">
        Order confirmed
      </p>
      <h1 className="font-display italic text-5xl text-[var(--color-espresso)] leading-tight mb-6">
        Thank you.
      </h1>
      <p className="text-sm leading-relaxed text-[var(--color-warm-mid)] mb-12">
        Your pasta is being prepared with care. A receipt has been sent to your email.
      </p>
      <Link
        href="/"
        className="text-xs tracking-[0.2em] uppercase border-b border-[var(--color-espresso)] text-[var(--color-espresso)] hover:text-[var(--color-terra)] hover:border-[var(--color-terra)] transition-colors pb-px"
      >
        Back to the collection
      </Link>
    </div>
  )
}
