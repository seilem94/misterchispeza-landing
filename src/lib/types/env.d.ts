export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FORMSPREE_ID?: string
      NEXT_PUBLIC_TURNSTILE_SITE_KEY?: string
      /** Clave privada de Turnstile. Solo se lee desde el servidor. */
      TURNSTILE_SECRET_KEY?: string
    }
  }
}
