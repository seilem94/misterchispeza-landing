'use server'

import {
  contactFormContent,
  contactFormSecurity,
} from '@/lib/constants/contact'
import type { FormState } from '@/lib/types/contact'

function readText(formData: FormData, name: string, maxLength: number) {
  const values = formData.getAll(name)
  if (values.length !== 1 || typeof values[0] !== 'string') return null

  const value = values[0].trim()
  return value.length > 0 && value.length <= maxLength ? value : null
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim()
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim()

  if (!formId || !/^[a-zA-Z0-9]+$/.test(formId) || !siteKey) {
    return { status: 'error', error: contactFormContent.errors.configuration }
  }

  if (!(formData instanceof FormData)) {
    return { status: 'error', error: contactFormContent.errors.fields }
  }

  if (formData.get('_gotcha')) {
    return { status: 'error', error: contactFormContent.errors.fields }
  }

  const nombre = readText(formData, 'nombre', 120)
  const email = readText(formData, 'email', 254)
  const telefono = readText(formData, 'telefono', 20)
  const ubicacion = readText(formData, 'ubicacion', 200)
  const mensaje = readText(formData, 'mensaje', 5000)

  if (
    !nombre ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !telefono ||
    !/^\+569\s?\d{4}\s?\d{4}$/.test(telefono) ||
    !ubicacion ||
    !mensaje
  ) {
    return { status: 'error', error: contactFormContent.errors.fields }
  }

  const token = readText(
    formData,
    contactFormSecurity.tokenField,
    contactFormSecurity.maxTokenLength,
  )
  if (!token) {
    return { status: 'error', error: contactFormContent.errors.captcha }
  }

  // Formspree tiene Turnstile activo y valida este token en su backend una sola vez.
  const cleanData = {
    nombre,
    email,
    telefono,
    ubicacion,
    mensaje,
    _subject: contactFormContent.subject,
    [contactFormSecurity.tokenField]: token,
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      body: JSON.stringify(cleanData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      redirect: 'error',
      signal: AbortSignal.timeout(10_000),
    })

    if (!response.ok) {
      return { status: 'error', error: contactFormContent.errors.delivery }
    }

    return { status: 'success' }
  } catch {
    return { status: 'error', error: contactFormContent.errors.network }
  }
}
