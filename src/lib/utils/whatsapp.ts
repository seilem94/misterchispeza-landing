import { whatsappZones } from '@/lib/constants/whatsapp'
import type { WhatsAppService } from '@/lib/constants/whatsapp'

export const WHATSAPP_OPEN_EVENT = 'mr-chispeza:whatsapp:open'

export interface WhatsAppOpenDetail {
  message: string
}

export function normalizeWhatsAppMessage(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  const message = value.trimStart()
  return message.trim().length > 0 && message.length <= 1000
    ? message
    : undefined
}

export function isWhatsAppOpenDetail(
  value: unknown,
): value is WhatsAppOpenDetail {
  return (
    typeof value === 'object' &&
    value !== null &&
    'message' in value &&
    normalizeWhatsAppMessage(value.message) !== undefined
  )
}

export function openWhatsAppSelector(message: string): void {
  const normalizedMessage = normalizeWhatsAppMessage(message)
  if (!normalizedMessage) return

  window.dispatchEvent(
    new CustomEvent<WhatsAppOpenDetail>(WHATSAPP_OPEN_EVENT, {
      detail: { message: normalizedMessage },
    }),
  )
}

export function getWhatsAppRedirectHref(
  zone: string,
  message?: string,
  service?: WhatsAppService,
): string {
  const params = new URLSearchParams({ to: 'whatsapp', zone })
  const normalizedMessage = normalizeWhatsAppMessage(message)
  if (normalizedMessage) params.set('message', normalizedMessage)
  if (service) params.set('servicio', service)
  return `/gracias?${params.toString()}`
}

export function getWhatsAppDestination(
  zone: string | null,
  message?: string | null,
) {
  const contact =
    whatsappZones.find((item) => item.id === zone) ?? whatsappZones[0]
  const text = normalizeWhatsAppMessage(message) ?? contact.defaultMessage

  return {
    label: contact.label,
    url: `https://wa.me/${contact.phone}?text=${encodeURIComponent(text)}`,
  }
}
