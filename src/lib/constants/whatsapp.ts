import { contactCosta, contactMarga } from '@/lib/constants/navigation'
import { whatsappMessage as remodelacionWhatsappMessage } from '@/lib/constants/remodelacion-antiguas'
import { whatsappMessage as viviendasWhatsappMessage } from '@/lib/constants/viviendas-nuevas'
import { panelesContactData } from '@/lib/constants/paneles-solares'

export type WhatsAppZone = 'costa' | 'marga'

export interface WhatsAppContactZone {
  id: WhatsAppZone
  label: string
  coverage: string
  phone: string
  defaultMessage: string
}

export const whatsappZones: readonly WhatsAppContactZone[] = [
  {
    id: 'costa',
    label: 'Quinta Costa',
    coverage: '(Valparaíso, Viña, Concón)',
    phone: contactCosta.whatsapp.replace(/\D/g, ''),
    defaultMessage:
      'Hola, me gustaría realizar una consulta sobre sus servicios eléctricos (Quinta Costa).',
  },
  {
    id: 'marga',
    label: 'Marga Marga',
    coverage: '(Quilpué, Villa Alemana, Limache)',
    phone: contactMarga.whatsapp.replace(/\D/g, ''),
    defaultMessage:
      'Hola, me gustaría realizar una consulta sobre sus servicios eléctricos (Marga Marga).',
  },
]

export const whatsappCampaignMessages: Readonly<Record<string, string>> = {
  '/remodelacion-instalaciones': remodelacionWhatsappMessage,
  '/instalacion-electrica-viviendas-nuevas': viviendasWhatsappMessage,
  '/paneles-solares': panelesContactData.whatsappMessage,
}

export const whatsappWidgetContent = {
  title: 'Soporte Mr. Chispeza',
  subtitle: 'Selecciona tu zona',
  greeting:
    '¡Hola! 👋 ¿De qué zona de la Región de Valparaíso nos contactas? Selecciona tu zona para conversar con el equipo correspondiente.',
  otherZoneNote:
    '💡 Si perteneces a otra zona geográfica, selecciona Quinta Costa para que el equipo revise tu ubicación.',
  closeLabel: 'Cerrar selector de WhatsApp',
  openLabel: 'Contactar por WhatsApp',
} as const

export const whatsappRedirectContent = {
  title: 'Redirigiéndote a WhatsApp',
  description: 'Te estamos derivando con el técnico de la zona de',
  waitNote: 'Esto tomará sólo un segundo…',
  fallbackCta: 'Hacer clic si no eres redirigido',
} as const
