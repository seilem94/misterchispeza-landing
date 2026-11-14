'use client'

import React, { useState, useEffect, useRef, useId, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { MapPin, X } from 'lucide-react'
import {
  whatsappCampaignMessages,
  whatsappCampaignServices,
  whatsappWidgetContent,
  whatsappZones,
} from '@/lib/constants/whatsapp'
import { cn } from '@/lib/utils/cn'
import {
  getWhatsAppRedirectHref,
  isWhatsAppOpenDetail,
  WHATSAPP_OPEN_EVENT,
} from '@/lib/utils/whatsapp'

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.909 1.504 5.511 0 9.995-4.485 9.998-10 .001-2.67-1.03-5.18-2.902-7.051C16.771 1.73 14.265.69 11.595.69c-5.5 0-9.986 4.486-9.99 10-.001 1.893.493 3.748 1.431 5.378L2.008 22l6.005-1.574c-.527.288-1.025.432-1.432.432.203.001.077 0-.074-.012zm11.502-4.578c-.307-.154-1.82-.9-2.1-.1-.28.1-.482.154-.69.462-.21.308-.8.995-.98 1.201-.18.206-.36.23-.668.077-.308-.154-1.3-.48-2.477-1.53-1.177-1.05-1.972-2.348-2.203-2.733-.23-.385-.025-.593.129-.747.14-.138.308-.36.462-.539.154-.18.206-.308.308-.514.103-.206.051-.385-.026-.54-.077-.154-.692-1.67-.949-2.285-.25-.602-.503-.52-.69-.53l-.59-.011c-.206 0-.54.077-.822.385-.282.308-1.078 1.053-1.078 2.57 0 1.516 1.104 2.985 1.258 3.19.154.206 2.172 3.31 5.262 4.643.735.316 1.309.505 1.758.648.74.235 1.414.202 1.947.123.593-.088 1.82-.745 2.078-1.46.257-.717.257-1.334.18-1.461-.077-.128-.282-.205-.59-.359z" />
  </svg>
)

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [request, setRequest] = useState<{
    pathname: string
    message: string
  } | null>(null)
  const pathname = usePathname()
  const service = whatsappCampaignServices[pathname]
  const widgetRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const dialogId = useId()
  const reducedMotion = useReducedMotion()
  const isThankYouPage = pathname === '/gracias'
  const message =
    request?.pathname === pathname
      ? request.message
      : whatsappCampaignMessages[pathname]

  const closeSelector = useCallback(() => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }, [])

  useEffect(() => {
    if (isThankYouPage) return

    function handleRequest(event: Event) {
      if (
        !(event instanceof CustomEvent) ||
        !isWhatsAppOpenDetail(event.detail)
      )
        return
      triggerRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null
      setRequest({ pathname, message: event.detail.message })
      setIsOpen(true)
    }
    function handleOutside(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !widgetRef.current?.contains(event.target)
      )
        setIsOpen(false)
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) closeSelector()
    }

    window.addEventListener(WHATSAPP_OPEN_EVENT, handleRequest)
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener(WHATSAPP_OPEN_EVENT, handleRequest)
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [pathname, isThankYouPage, isOpen, closeSelector])

  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
  }, [isOpen])

  if (isThankYouPage) return null

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={dialogId}
            role="dialog"
            aria-labelledby={dialogId + '-title'}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            className="absolute bottom-16 right-[-8px] max-h-[calc(100dvh-120px)] w-[calc(100vw-32px)] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl sm:bottom-20 sm:right-0 sm:w-[350px]"
          >
            <div className="flex items-center justify-between gap-3 bg-[#075e54] p-4 text-white">
              <div>
                <h2 id={dialogId + '-title'} className="text-sm font-semibold">
                  {whatsappWidgetContent.title}
                </h2>
                <p className="mt-1 text-xs text-slate-200">
                  {whatsappWidgetContent.subtitle}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closeSelector}
                className="rounded-full p-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={whatsappWidgetContent.closeLabel}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="bg-[#efeae2] p-4">
              <p className="rounded-xl bg-white p-3 text-sm leading-relaxed text-slate-800">
                {whatsappWidgetContent.greeting}
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {whatsappZones.map((zone) => (
                  <a
                    key={zone.id}
                    href={getWhatsAppRedirectHref(zone.id, message, service)}
                    className="flex flex-col items-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800 hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                  >
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {zone.label}
                    </span>
                    <span className="mt-1 text-xs font-normal text-slate-600">
                      {zone.coverage}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <p className="border-t border-slate-200 bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-600">
              {whatsappWidgetContent.otherZoneNote}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={(event) => {
          if (isOpen) closeSelector()
          else {
            triggerRef.current = event.currentTarget
            setRequest(null)
            setIsOpen(true)
          }
        }}
        className={cn(
          'relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-slate-950 shadow-lg transition-colors hover:bg-[#20ba5a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 sm:h-14 sm:w-14',
        )}
        aria-label={whatsappWidgetContent.openLabel}
        aria-expanded={isOpen}
        aria-controls={isOpen ? dialogId : undefined}
      >
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full bg-[#25d366]/40 opacity-75 motion-safe:animate-ping"
            aria-hidden="true"
          />
        )}
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      </button>
    </div>
  )
}
