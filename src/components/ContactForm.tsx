'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, ValidationError } from '@formspree/react'


export default function ContactForm() {
  const router = useRouter()
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID
  if (!formId) {
    console.error("❌ No se encontró NEXT_PUBLIC_FORMSPREE_ID en .env.local")
  }
  const [state, handleSubmit] = useForm(formId || "missing-form-id")
  useEffect(() => {
    if (state.succeeded) {
      router.push('/gracias')
    }
  }, [state.succeeded, router])

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6 backdrop-blur"
    >
      {/* Campos ocultos útiles */}
      <input type="hidden" name="_subject" value="Nuevo mensaje desde la web" />
      {/* Honeypot antispam (no remover) */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-400"
            placeholder="Tu nombre"
          />
          <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
        </div>

        <div>
          <label className="block text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-400"
            placeholder="tucorreo@empresa.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label className="block text-sm" htmlFor="telefono">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            autoComplete="tel"
            className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-400"
            placeholder="+569…"
          />
          <ValidationError prefix="Teléfono" field="telefono" errors={state.errors} />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-400"
            placeholder="¿Qué necesitas?"
          />
          <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-4 w-full rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-60"
      >
        {state.submitting ? 'Enviando…' : 'Enviar'}
      </button>

      {!!state.errors && (
        <p className="mt-2 text-center text-sm text-red-400">
          Revisa los campos e intenta nuevamente.
        </p>
      )}

      <p className="mt-2 text-center text-xs text-slate-400">
        Al enviar aceptas nuestro aviso de privacidad.
      </p>
    </form>
  )
}
