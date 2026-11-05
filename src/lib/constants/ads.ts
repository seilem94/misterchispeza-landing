import { site } from '@/shared/config/site'

export const adsLayoutContent = {
  logo: {
    src: '/logo_new.webp',
    alt: `Logo ${site.name}`,
    width: 876,
    height: 312,
  },
  copyright: {
    holder: site.name,
    rights: 'Todos los derechos reservados.',
  },
} as const

export const adsVideoContent = {
  label: 'Reproductor de vídeo de la campaña',
  fallback: 'Tu navegador no permite reproducir este vídeo.',
} as const
