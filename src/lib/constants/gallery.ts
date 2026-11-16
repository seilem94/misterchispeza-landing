import type { GalleryImage } from '@/lib/types'

export const homeGalleryContent = {
  title: 'Galería de Proyectos',
  contactHref: '#contacto',
  ctaText: 'Cotizar un proyecto similar',
  emptyText: 'No hay imágenes disponibles en este momento.',
} as const

/** Fotografías reales aprobadas para la galería del Home. */
export const galleryImages: GalleryImage[] = [
  {
    id: 'img-1',
    src: 'https://gapghs72pvdn9hax.public.blob.vercel-storage.com/home/Panel-solar-tecnicos.webp',
    alt: 'Técnicos junto a los paneles solares de Restaurant Río Tinto',
    title: 'Planta fotovoltaica Restaurant Río Tinto',
    location: 'Casablanca, Valparaíso',
    category: 'industrial',
  },
  {
    id: 'img-2',
    src: 'https://gapghs72pvdn9hax.public.blob.vercel-storage.com/remodelacion/galpon_iluminado.webp',
    alt: 'Iluminación de un galpón restaurado en Colmo',
    title: 'Restauración e iluminación de espacios',
    location: 'Colmo, Provincia de Quillota',
    category: 'comercial',
  },
  {
    id: 'img-3',
    src: 'https://gapghs72pvdn9hax.public.blob.vercel-storage.com/home/Tablero-casa-patrimonial-actualizado.webp',
    alt: 'Tablero eléctrico actualizado en una casa patrimonial de Con-Con',
    title: 'Actualización de tablero en casa patrimonial',
    location: 'Con-Con, Valparaíso',
    category: 'residencial',
  },
]
