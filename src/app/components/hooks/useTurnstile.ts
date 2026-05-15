'use client'
import { useEffect, useRef, useState } from 'react'

interface UseTurnstileProps {
  siteKey: string | undefined
}

export function useTurnstile({ siteKey }: UseTurnstileProps) {
  const [scriptLoaded, setScriptLoaded] = useState(
    typeof window !== 'undefined' && !!window.turnstile
  )
  const turnstileRef = useRef<HTMLDivElement>(null)

  // 1. Cargar el script solo una vez
  useEffect(() => {
    if (!siteKey || scriptLoaded) return

    const existingScript = document.querySelector(
      'script[src^="https://challenges.cloudflare.com/turnstile"]'
    )
    if (existingScript) {
      setScriptLoaded(true)
      return
    }

    const script = document.createElement('script')
    // Usar render=explicit para evitar que Turnstile intente auto-renderizar antes de que React esté listo
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => setScriptLoaded(true)
    document.head.appendChild(script)

    // IMPORTANTE: Nunca borrar el script en el cleanup, 
    // porque HMR/StrictMode desmonta el componente pero la variable global persiste, corrompiendo Turnstile.
  }, [siteKey, scriptLoaded])

  // 2. Renderizar el widget y limpiarlo correctamente
  useEffect(() => {
    if (!scriptLoaded || !turnstileRef.current) return

    const container = turnstileRef.current
    let widgetId: string | undefined

    const renderWidget = () => {
      if (window.turnstile && !container.hasChildNodes()) {
        try {
          widgetId = window.turnstile.render(container, {
            sitekey: siteKey!,
            theme: 'dark',
            size: 'normal',
          })
        } catch (error) {
          console.error('Turnstile render error:', error)
        }
      }
    }

    let checkInterval: NodeJS.Timeout
    let timeout: NodeJS.Timeout

    if (window.turnstile) {
      renderWidget()
    } else {
      checkInterval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkInterval)
          renderWidget()
        }
      }, 100)
      timeout = setTimeout(() => clearInterval(checkInterval), 5000)
    }

    // Cleanup: Destruir el widget cuando React desmonte el formulario
    return () => {
      if (checkInterval) clearInterval(checkInterval)
      if (timeout) clearTimeout(timeout)
      
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.remove(widgetId)
        } catch (e) {
          console.error("Failed to remove turnstile widget", e)
        }
      }
    }
  }, [scriptLoaded, siteKey])

  return turnstileRef
}
