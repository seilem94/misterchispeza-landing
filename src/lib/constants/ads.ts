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

export const adsStyles = {
  section: 'scroll-mt-6 py-16 sm:py-24',
  heading:
    'mb-10 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl',
  description:
    'mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-slate-600 sm:text-lg',
  card: 'h-full items-center rounded-2xl border border-slate-100 bg-white text-center shadow-md transition-shadow duration-300 hover:shadow-lg',
  iconBadge:
    'mx-auto mb-6 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-50',
  icon: 'h-8 w-8 shrink-0 text-amber-500',
} as const
