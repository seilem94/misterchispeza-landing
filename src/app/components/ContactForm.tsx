'use client'
import { useEffect, useActionState } from 'react'
import { useTurnstile } from './hooks/useTurnstile'
import { FormField } from '@/app/components/ui/FormField'
import { submitContactForm } from '@/app/actions/contact'
import { contactFormContent } from '@/lib/constants/contact'

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const { turnstileRef, resetTurnstile } = useTurnstile({ siteKey })

  const [state, formAction, isPending] = useActionState(submitContactForm, {
    status: 'idle',
  })

  useEffect(() => {
    if (state.status === 'error') {
      resetTurnstile()
    }
  }, [state, resetTurnstile])

  useEffect(() => {
    if (state.status !== 'success') return

    const timeout = setTimeout(() => {
      window.location.href = '/gracias'
    }, 500)
    return () => clearTimeout(timeout)
  }, [state.status])

  const error =
    state.status === 'error'
      ? state.error
      : !siteKey
        ? contactFormContent.errors.configuration
        : undefined

  return (
    <form
      action={formAction}
      aria-busy={isPending}
      className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6 backdrop-blur"
    >
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {contactFormContent.fields.map((field) => (
          <FormField
            key={field.name}
            {...field}
            required
            className={field.type === 'textarea' ? 'sm:col-span-2' : undefined}
          />
        ))}
      </div>

      {siteKey && (
        <div className="mt-4 flex justify-center">
          <div
            ref={turnstileRef}
            aria-label={contactFormContent.verificationLabel}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isPending || state.status === 'success' || !siteKey}
        className="mt-4 w-full rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 disabled:opacity-60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/50"
      >
        {isPending ? contactFormContent.pending : contactFormContent.submit}
      </button>

      {error && (
        <p className="mt-2 text-center text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      {state.status === 'success' && (
        <p className="mt-2 text-center text-sm text-slate-200" role="status">
          {contactFormContent.success}
        </p>
      )}

      <p className="mt-2 text-center text-xs text-slate-400">
        {contactFormContent.privacy}
      </p>
    </form>
  )
}
