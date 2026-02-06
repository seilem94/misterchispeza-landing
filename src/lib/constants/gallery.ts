import type { GalleryImage } from '@/lib/types'

/**
 * Imágenes de la galería de trabajos
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 'img-1',
    src: 'https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
    alt: 'Instalación eléctrica industrial',
    category: 'industrial',
  },
  {
    id: 'img-2',
    src: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    alt: 'Tablero eléctrico residencial',
    category: 'residential',
  },
  {
    id: 'img-3',
    src: 'https://images.unsplash.com/photo-1704475336842-0ab3798abf0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    alt: 'Mantenimiento preventivo',
    category: 'maintenance',
  },
]