export type PanelSolarService = {
  title: string
  slug: 'instalacion' | 'mantenimiento'
  shortDescription: string
  longDescription: string
  benefits?: string[]
  faqs?: { q: string; a: string }[]
}

export const panelesSolares: PanelSolarService[] = [
  {
    title: 'Instalación de paneles solares',
    slug: 'instalacion',
    shortDescription: 'Diseño e instalación llave en mano para hogares y negocios.',
    longDescription:
      'Realizamos el levantamiento técnico, dimensionamiento del sistema, instalación y puesta en marcha. Te asesoramos para elegir la mejor solución según tu consumo, espacio disponible y objetivos (ahorro, respaldo o energía limpia).',
    benefits: [
      'Ahorro en consumo eléctrico',
      'Energía limpia y sostenible',
      'Instalación segura y ordenada',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo toma la instalación?',
        a: 'Depende del tamaño del sistema y condiciones del lugar. En proyectos residenciales suele completarse en pocos días.',
      },
      {
        q: '¿Necesito permisos?',
        a: 'Depende del tipo de instalación y normativa local. Te orientamos según tu caso.',
      },
    ],
  },
]

// ✅ NUEVO: Tipo para proyectos con optimización de imágenes
export type ProyectoPaneles = {
  id: number
  titulo: string
  ubicacion: string
  capacidad: string
  ahorro: string
  año: number
  imagen: string
  width: number  // ✅ Dimensiones reales para Next.js Image
  height: number
}

// ✅ ACTUALIZADO: Array con dimensiones de imágenes
export const proyectosPaneles: ProyectoPaneles[] = [
  {
    id: 1,
    titulo: 'Casa Familiar - Con-Con',
    ubicacion: 'Con-Con, Valparaíso',
    capacidad: '5.5 kW',
    ahorro: '85%',
    año: 2025,
    imagen: '/paneles-1.webp',
    width: 1200,  // ✅ Ajusta según tu imagen real
    height: 675,  // ✅ Aspect ratio 16:9
  },
  {
    id: 2,
    titulo: 'Edificio Comercial - Reñaca',
    ubicacion: 'Viña del Mar, Valparaíso',
    capacidad: '12 kW',
    ahorro: '78%',
    año: 2025,
    imagen: '/paneles-2.webp',
    width: 1280,
    height: 960,
  },
  {
    id: 3,
    titulo: 'Restaurant - Casablanca',
    ubicacion: 'Casablanca, Valparaíso',
    capacidad: '200 kW',
    ahorro: '90%',
    año: 2025,
    imagen: '/paneles-3.webp',
    width: 1200,
    height: 675,
  },
]

export function getPanelSolarServiceBySlug(slug: string) {
  return panelesSolares.find((s) => s.slug === slug)
}
