import { contactCosta, contactMarga } from '@/lib/constants/navigation'
import { panelesContactData } from '@/lib/constants/paneles-solares'

export type WhatsAppZone = 'costa' | 'marga'
export type WhatsAppService = 'remodelacion' | 'casa-nueva' | 'solar'

export const remodelacionWhatsappMessage =
  'Hola Mr Chispeza, quiero cotizar la renovación eléctrica de mi casa. Está en la comuna de '

export const viviendasWhatsappMessage =
  'Hola Mr Chispeza, estoy construyendo y quiero cotizar la instalación eléctrica. La obra está en la comuna de '

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

export const whatsappCampaignServices: Readonly<
  Partial<Record<string, WhatsAppService>>
> = {
  '/remodelacion-instalaciones': 'remodelacion',
  '/instalacion-electrica-viviendas-nuevas': 'casa-nueva',
  '/paneles-solares': 'solar',
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
