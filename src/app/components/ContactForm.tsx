'use client'
import { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { useTurnstile } from './hooks/useTurnstile'
import { FormField } from '@/app/components/ui/FormField'

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID!

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const turnstileRef = useTurnstile({ siteKey })

  const [state, handleSubmit] = useForm(formId)

  // ✅ Redirigir cuando el formulario se envió exitosamente
  useEffect(() => {
    if (state.succeeded) {
      console.log('✅ Formulario enviado, redirigiendo...') // Para debug
      setTimeout(() => {
        window.location.href = '/gracias'
      }, 500) // Pequeño delay para asegurar que Formspree termine
    }
  }, [state.succeeded])

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6 backdrop-blur">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="Nuevo mensaje desde la web" />

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          label="Nombre *"
          id="nombre"
          name="nombre"
          required
          placeholder="Tu nombre"
          error={state.errors?.nombre}
        >
          <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
        </FormField>

        <FormField
          label="Email *"
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu.correo@empresa.com"
          error={state.errors?.email}
        >
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormField>

        <FormField
          label="Teléfono"
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="+569 1234 5678"
          error={state.errors?.telefono}
        >
          <ValidationError prefix="Teléfono" field="telefono" errors={state.errors} />
        </FormField>

        <FormField
          label="Ubicación"
          id="ubicacion"
          name="ubicacion"
          placeholder="Valparaíso, V Región"
          error={state.errors?.ubicacion}
        >
          <ValidationError prefix="Ubicación" field="ubicacion" errors={state.errors} />
        </FormField>

        <div className="sm:col-span-2">
          <FormField
            label="Mensaje *"
            id="mensaje"
            name="mensaje"
            type="textarea"
            required
            placeholder="¿Qué necesitas?"
            error={state.errors?.mensaje}
          >
            <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
          </FormField>
        </div>
      </div>

      {siteKey && (
        <div ref={turnstileRef} className="mt-4" aria-label="Verificación anti-spam" />
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-4 w-full rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 disabled:opacity-60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/50"
      >
        {state.submitting ? 'Enviando...' : 'Enviar'}
      </button>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <p className="mt-2 text-center text-sm text-red-400" role="alert">
          Error al enviar el formulario. Por favor, inténtalo de nuevo.
        </p>
      )}

      <p className="mt-2 text-center text-xs text-slate-400">
        Al enviar aceptas nuestro aviso de privacidad.
      </p>
    </form>
  )
}
