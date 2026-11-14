import type { AdsVideoSectionData } from '@/lib/types/ads'

export const panelesSolaresMetadata = {
  title: 'Instalación de Paneles Solares',
  description:
    'Instalación profesional de paneles solares fotovoltaicos. Reduce tu factura eléctrica hasta un 90%. Proyectos residenciales, comerciales e industriales.',
  keywords: [
    'instalación paneles solares',
    'energía solar',
    'paneles fotovoltaicos',
    'ahorro energético',
    'energía renovable',
    'instalador certificado',
  ],
  alternates: { canonical: '/paneles-solares' },
  openGraph: {
    title: 'Instalación de Paneles Solares - Mr.Chispeza',
    description: 'Reduce tu factura eléctrica con energía solar profesional',
    url: '/paneles-solares',
    images: ['/og-image.webp'],
  },
}

export const panelesContactData: {
  id: string
  title: string
  description: string
  ctaText: string
  whatsappMessage: string
} = {
  id: 'contacto-paneles',
  title: '¿Listo para generar tu propia energía?',
  description: 'Obtén una cotización personalizada sin compromiso.',
  ctaText: 'Cotizar paneles solares por WhatsApp',
  whatsappMessage:
    'Hola Mr Chispeza, quiero cotizar la instalación de paneles solares.',
}

interface SolarSectionData {
  id: string
  title: string
  description: string
}

interface SolarFeature {
  id: string
  icon: string
  label: string
  detail?: string
}

interface SolarHeroData extends SolarSectionData {
  eyebrow: string
  highlight: string
  background: { src: string; alt: string }
  features: readonly SolarFeature[]
  ctaText: string
  secondaryCta: { label: string; href: string }
}

interface SolarBenefit {
  id: string
  icon: string
  title: string
  description: string
}

interface SolarBenefitsData extends SolarSectionData {
  items: readonly SolarBenefit[]
}

interface SolarProcessData extends SolarSectionData {
  stepLabel: string
  totalLabel: string
  totalDuration: string
  ctaText: string
  ctaHref: string
  steps: readonly {
    number: number
    icon: string
    title: string
    description: string
    duration: string
  }[]
}

interface SolarPortfolioData extends SolarSectionData {
  savingsLabel: string
  yearLabel: string
}

export const heroData: SolarHeroData = {
  id: 'paneles-solares',
  eyebrow: 'Energía Solar Profesional',
  title: 'Instalación de',
  highlight: 'Paneles Solares',
  description:
    'Reduce tu factura eléctrica hasta un 90% con energía limpia y renovable',
  background: {
    // TODO(marketing): acreditar la procedencia de la foto solar existente.
    src: '/grid-pattern.webp',
    alt: 'Paneles solares fotovoltaicos al aire libre',
  },
  features: [
    { id: 'certificacion', icon: 'Zap', label: 'Instalación Certificada' },
    { id: 'ahorro', icon: 'TrendingDown', label: 'Ahorro Garantizado' },
    {
      id: 'precio',
      icon: 'DollarSign',
      label: 'Desde $8MM + IVA',
      detail: '— instalación tipo 8 kW',
    },
  ],
  ctaText: 'Cotizar por WhatsApp',
  secondaryCta: { label: 'Ver Proceso', href: '#proceso' },
}

export const videoData: AdsVideoSectionData = {
  id: 'video-paneles-solares',
  title: 'Así instalamos tu sistema solar',
  description:
    'Conoce las etapas del trabajo y cómo se prepara una instalación de paneles solares.',
  src: 'https://gapghs72pvdn9hax.public.blob.vercel-storage.com/Paneles-Solares.mp4',
  poster:
    'https://gapghs72pvdn9hax.public.blob.vercel-storage.com/solar-poster.png',
  label: 'Vídeo de instalación de paneles solares',
  pendingNote:
    'Vídeo y miniatura pendientes: este reproductor utiliza rutas de preparación hasta recibir material real de Mr. Chispeza.',
}

export const benefitsData: SolarBenefitsData = {
  id: 'beneficios-paneles',
  title: '¿Por qué instalar paneles solares?',
  description:
    'Invierte en tu futuro energético con tecnología limpia y eficiente',
  items: [
    {
      id: 'ahorro',
      icon: 'TrendingDown',
      title: 'Reduce tu Factura',
      description: 'Ahorra hasta un 90% en tu cuenta de electricidad mensual',
    },
    {
      id: 'energia',
      icon: 'Leaf',
      title: 'Energía Limpia',
      description: 'Contribuye al medio ambiente con energía 100% renovable',
    },
    {
      id: 'independencia',
      icon: 'Zap',
      title: 'Independencia Energética',
      description: 'Genera tu propia electricidad y protégete de alzas',
    },
    {
      id: 'garantia',
      icon: 'Shield',
      title: 'Garantía Extendida',
      description:
        'Garantía estándar del producto: 10–12 años. Garantía de rendimiento: hasta 25 años.',
    },
    {
      id: 'plazo',
      icon: 'Clock',
      title: 'Instalación Rápida',
      description: 'Sistema operativo en 5-7 días hábiles',
    },
    {
      id: 'certificacion',
      icon: 'Award',
      title: 'Certificación SEC',
      description: 'Instalaciones certificadas según normativa chilena',
    },
  ],
}

export const processData: SolarProcessData = {
  id: 'proceso',
  title: 'Proceso de Instalación',
  description: 'Un proceso transparente y profesional de principio a fin',
  stepLabel: 'Paso',
  totalLabel: 'Tiempo total estimado:',
  totalDuration: '4-6 semanas',
  ctaText: 'Iniciar mi Proyecto',
  ctaHref: '#contacto-paneles',
  steps: [
    {
      number: 1,
      icon: 'ClipboardCheck',
      title: 'Evaluación Inicial',
      description:
        'Visita técnica gratuita para evaluar tu techo, consumo eléctrico y viabilidad del proyecto.',
      duration: '1 día',
    },
    {
      number: 2,
      icon: 'Calculator',
      title: 'Cotización Personalizada',
      description:
        'Diseñamos el sistema óptimo según tu consumo y presupuesto. Incluye simulación de ahorro.',
      duration: '2-3 días',
    },
    {
      number: 3,
      icon: 'FileCheck',
      title: 'Tramitación y Permisos',
      description:
        'Gestionamos todos los permisos municipales y trámites SEC requeridos.',
      duration: '15-20 días',
    },
    {
      number: 4,
      icon: 'Wrench',
      title: 'Instalación',
      description:
        'Montaje de paneles, inversor y estructura. Equipo certificado y equipamiento profesional.',
      duration: '3-5 días',
    },
    {
      number: 5,
      icon: 'CheckCircle',
      title: 'Puesta en Marcha',
      description:
        'Conexión a red eléctrica, pruebas y capacitación en uso del sistema de monitoreo.',
      duration: '1 día',
    },
  ],
}

export const portfolioData: SolarPortfolioData = {
  id: 'portafolio',
  title: 'Proyectos Realizados',
  description: 'Instalaciones en la Región de Valparaíso',
  savingsLabel: 'Ahorro:',
  yearLabel: 'Año:',
}

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
    shortDescription:
      'Diseño e instalación llave en mano para hogares y negocios.',
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
  alt: string
  width: number // ✅ Dimensiones reales para Next.js Image
  height: number
}

// TODO(marketing): validar fotos y respaldo de los casos y cifras heredados.
export const proyectosPaneles: ProyectoPaneles[] = [
  {
    id: 1,
    titulo: 'Casa Familiar - Con-Con',
    ubicacion: 'Con-Con, Valparaíso',
    capacidad: '5.5 kW',
    ahorro: '85%',
    año: 2025,
    imagen: '/paneles-1.webp',
    width: 1920,
    height: 1081,
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
    width: 4032,
    height: 1927,
  },
].map((proyecto) => ({
  ...proyecto,
  alt: `Instalación de paneles solares ${proyecto.capacidad} en ${proyecto.ubicacion}`,
}))

export function getPanelSolarServiceBySlug(slug: string) {
  return panelesSolares.find((s) => s.slug === slug)
}
