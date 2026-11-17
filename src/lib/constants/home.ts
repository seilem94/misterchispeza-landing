import { site } from '@/shared/config/site'

export const homeSeoContent = {
  title: 'Electricista en Valparaíso | Mr. Chispeza - HHL SpA',
  description: site.description,
} as const

export const homeBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': new URL('/#electrician', site.url).href,
  name: site.legalName,
  url: new URL('/', site.url).href,
  image: new URL(site.ogImage, site.url).href,
  description: homeSeoContent.description,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Valparaíso',
    addressCountry: 'CL',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Región de Valparaíso',
  },
} as const

export const homeHeroContent = {
  image: {
    src: '/hero.webp',
    alt: 'Mantenimiento eléctrico',
  },
  title: {
    introduction: 'Soluciones',
    electrical: 'Eléctricas',
    conjunction: 'y',
    electronics: 'Electrónicas',
  },
  audience: 'Para industrias, comercios y residenciales.',
  description: 'Servicio preventivo y correctivo.',
  aboutCta: { text: 'Conózcanos', href: '#empresa' },
  contactCta: { text: 'Solicitar cotización', href: '#contacto' },
} as const
