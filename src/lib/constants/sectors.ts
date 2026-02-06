// src/lib/constants/sectors.ts

//import { Home, Factory, Store } from 'lucide-react'
import type { Sector } from '@/lib/types'

/**
 * Sectores a los que prestamos servicios
 */
export const sectors: Sector[] = [
  {
    id: 'residencial',
    icon: 'Home',
    title: 'Residenciales',
    description: 'Sistemas que soportan cargas de climatización, iluminación y necesidades especiales.',
    slug: 'residencial',
  },
  {
    id: 'industrial',
    icon: 'Factory',
    title: 'Industriales',
    description: 'Sistemas eléctricos eficientes y mantenimiento adecuado para evitar paros en la producción.',
    slug: 'industrial',
  },
  {
    id: 'comercial',
    icon: 'Store',
    title: 'Comercios',
    description: 'Diseño y ejecución que garantizan una experiencia confortable y segura.',
    slug: 'comercial',
  },
]