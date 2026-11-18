export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? '')
  .trim()
  .replace(/\/+$/, '')

export const site = {
  name: 'Mr. Chispeza',
  legalName: 'Mr. Chispeza - HHL SpA',
  tagline: 'Servicio Eléctrico Profesional en Valparaíso',
  url: SITE_URL || 'https://mrchispeza.cl',
  locale: 'es_CL',
  facebook: 'https://www.facebook.com/MisterChispeza',
  twitter: '@MisterChispeza',
  ogImage: '/og-image-1200x630.webp',
  ogImageAlt: 'Mr. Chispeza - HHL SpA: servicios eléctricos en Valparaíso',
  description:
    'Instalaciones eléctricas, mantenimiento, certificación SEC y paneles solares en Valparaíso. Cotiza tu proyecto con Mr. Chispeza - HHL SpA.',
} as const

export const siteSocialImage = {
  url: site.ogImage,
  width: 1200,
  height: 630,
  alt: site.ogImageAlt,
} as const
