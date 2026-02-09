'use client'
import { useEffect, useRef, useState } from 'react'

interface UseTurnstileProps {
  siteKey: string | undefined
}

export function useTurnstile({ siteKey }: UseTurnstileProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const turnstileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!siteKey || scriptLoaded) return

    const existingScript = document.querySelector(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    )
    if (existingScript) {
      setScriptLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.defer = true
    script.onload = () => setScriptLoaded(true)
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [siteKey, scriptLoaded])

  useEffect(() => {
    if (!scriptLoaded || !turnstileRef.current) return

    const container = turnstileRef.current
    if (container.hasChildNodes()) return

    const checkInterval = setInterval(() => {
      // ✅ Usa window.turnstile sin 'as any' gracias a turnstile.d.ts
      if (window.turnstile) {
        clearInterval(checkInterval)
        window.turnstile.render(container, {
          sitekey: siteKey!,
          theme: 'dark',
        })
      }
    }, 100)

    const timeout = setTimeout(() => clearInterval(checkInterval), 5000)

    return () => {
      clearInterval(checkInterval)
      clearTimeout(timeout)
    }
  }, [scriptLoaded, siteKey])

  return turnstileRef
}
