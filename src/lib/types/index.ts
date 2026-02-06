// src/lib/types/index.ts

/**
 * Servicio eléctrico ofrecido por la empresa
 */
export interface Service {
  id: string
  icon: string
  title: string
  description: string
  fullDescription?: string
  slug: string
  category: 'electrical' | 'electronic' | 'solar' | 'security'
  featured?: boolean
}

/**
 * Sector al que se presta servicio
 */
export interface Sector {
  id: string
  icon: string
  title: string
  description: string
  slug?: string
}

/**
 * Imagen de galería
 */
export interface GalleryImage {
  id: string
  src: string
  alt: string
  category?: string
}

/**
 * Elemento de navegación
 */
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

/**
 * Testimonial de cliente
 */
export interface Testimonial {
  id: string
  name: string
  company?: string
  location: string
  text: string
  rating?: number
  avatar?: string
}