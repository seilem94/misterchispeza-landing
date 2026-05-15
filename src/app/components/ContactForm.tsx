'use client'
import { useEffect, useActionState } from 'react'
import { useTurnstile } from './hooks/useTurnstile'
import { FormField } from '@/app/components/ui/FormField'
import { submitContactForm } from '@/app/actions/contact'

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const turnstileRef = useTurnstile({ siteKey })

  const [state, formAction, isPending] = useActionState(submitContactForm, {})

  // ✅ Redirigir cuando el formulario se envió exitosamente
  useEffect(() => {
    if (state?.success) {
      console.log('✅ Formulario enviado, redirigiendo...') // Para debug
      setTimeout(() => {
        window.location.href = '/gracias'
      }, 500) // Pequeño delay para asegurar la redirección
    }
  }, [state?.success])

  return (
    <form action={formAction} className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6 backdrop-blur">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="Nuevo mensaje desde la web" />

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          label="Nombre *"
          id="nombre"
          name="nombre"
          required
          placeholder="Tu nombre"
        />

        <FormField
          label="Email *"
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu.correo@empresa.com"
        />

        <FormField
          label="Teléfono *"
          id="telefono"
          name="telefono"
          type="tel"
          required
          placeholder="+569 1234 5678"
        />

        <FormField
          label="Ubicación *"
          id="ubicacion"
          name="ubicacion"
          required
          placeholder="Valparaíso, V Región"
        />

        <div className="sm:col-span-2">
          <FormField
            label="Mensaje *"
            id="mensaje"
            name="mensaje"
            type="textarea"
            required
            placeholder="¿Qué necesitas?"
          />
        </div>
      </div>

      {siteKey && (
        <div className="mt-4 flex justify-center">
          <div ref={turnstileRef} aria-label="Verificación anti-spam" />
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-4 w-full rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 disabled:opacity-60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/50"
      >
        {isPending ? 'Enviando...' : 'Enviar'}
      </button>

      {state?.error && (
        <p className="mt-2 text-center text-sm text-red-400" role="alert">
          {state.error}
        </p>
      )}

      <p className="mt-2 text-center text-xs text-slate-400">
        Al enviar aceptas nuestro aviso de privacidad.
      </p>
    </form>
  )
}
