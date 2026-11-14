'use client'

import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { Loader2, MessageSquare } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'
import { whatsappRedirectContent } from '@/lib/constants/whatsapp'
import { getWhatsAppDestination } from '@/lib/utils/whatsapp'

interface WhatsAppAnalyticsWindow extends Window {
  gtag?: (
    command: 'event',
    eventName: 'whatsapp_contact_conversion',
    parameters: {
      event_category: 'Lead'
      event_label: string
      zone: string | null
    },
  ) => void
}

export default function WhatsAppRedirect() {
  const searchParams = useSearchParams()
  const trackedDestination = useRef<string | null>(null)
  const isRedirecting = searchParams.get('to') === 'whatsapp'
  const zone = searchParams.get('zone')
  const { label, url } = getWhatsAppDestination(
    zone,
    searchParams.get('message'),
  )

  useEffect(() => {
    if (!isRedirecting) return

    const analyticsWindow: WhatsAppAnalyticsWindow = window
    if (
      typeof analyticsWindow.gtag === 'function' &&
      trackedDestination.current !== url
    ) {
      analyticsWindow.gtag('event', 'whatsapp_contact_conversion', {
        event_category: 'Lead',
        event_label: label,
        zone,
      })
      trackedDestination.current = url
    }

    const timer = setTimeout(() => {
      window.location.href = url
    }, 1500)
    return () => clearTimeout(timer)
  }, [isRedirecting, label, url, zone])

  if (!isRedirecting) return null

  return (
    <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center backdrop-blur-xs">
      <div className="mb-4 flex justify-center">
        <Loader2
          className="h-10 w-10 text-emerald-400 motion-safe:animate-spin"
          aria-hidden="true"
        />
      </div>
      <h2 className="mb-2 text-xl font-bold text-slate-100">
        {whatsappRedirectContent.title}
      </h2>
      <p className="mb-6 text-sm text-slate-300">
        {whatsappRedirectContent.description}{' '}
        <strong className="text-emerald-400">{label}</strong>.{' '}
        {whatsappRedirectContent.waitNote}
      </p>
      <Button
        href={url}
        variant="primary"
        size="md"
        className="w-full gap-2 bg-emerald-700 text-white hover:bg-emerald-800"
      >
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        {whatsappRedirectContent.fallbackCta}
      </Button>
    </div>
  )
}
