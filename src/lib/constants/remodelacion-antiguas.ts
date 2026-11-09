export const remodelacionMetadata = {
  title: 'Remodelación de Instalaciones Antiguas',
  description:
    'Renovación integral y segura de instalaciones eléctricas antiguas en la Región de Valparaíso. Reemplazo de cableado vetusto, nuevos tableros con salvavidas y certificación SEC TE1.',
  keywords: [
    'remodelación de instalaciones antiguas',
    'recableado casas antiguas',
    'cambio cable tela Valparaíso',
    'tablero eléctrico con diferencial',
    'aumento de capacidad eléctrica',
    'normalización eléctrica SEC',
    'electricista certificado Valparaíso',
    'electricista Viña del Mar',
    'certificación TE1 SEC',
  ],
  alternates: { canonical: '/remodelacion-instalaciones' },
  openGraph: {
    title: 'Remodelación de Instalaciones Eléctricas Antiguas - Mr.Chispeza',
    description:
      'Protege tu hogar renovando cables antiguos, tableros y protecciones bajo normativa SEC RIC.',
    url: '/remodelacion-instalaciones',
    images: ['/hero.webp'],
  },
}

export interface RemodelacionSectionData {
  id: string
  title: string
  description: string
}

export interface RemodelacionHeroData extends RemodelacionSectionData {
  eyebrow: string
  ctaText: string
  socialProof: string
  referencesNote: string
}

export interface RemodelacionSymptom {
  id: string
  text: string
}

export interface RemodelacionSymptomsData extends RemodelacionSectionData {
  items: readonly RemodelacionSymptom[]
}

export interface RemodelacionFear {
  id: string
  question: string
  answer: string
}

export interface RemodelacionFearsData extends RemodelacionSectionData {
  items: readonly RemodelacionFear[]
}

export interface RemodelacionProcessStep {
  id: string
  number: number
  title: string
  description: string
}

export interface RemodelacionIncludedItem {
  id: string
  title: string
  description: string
}

export interface RemodelacionIncludesData extends RemodelacionSectionData {
  scopeNote: string
}

export interface RemodelacionVideoData extends RemodelacionSectionData {
  src: string
  poster: string
  label: string
  pendingNote: string
}

export interface RemodelacionContactData extends RemodelacionSectionData {
  eyebrow: string
  ctaText: string
}

export const heroData: RemodelacionHeroData = {
  id: 'remodelacion',
  eyebrow: 'Renovación eléctrica de casas antiguas',
  title:
    'Renueva la electricidad de tu casa antigua sin convertirla en una obra',
  description:
    'Revisamos tu instalación y planificamos la renovación por sectores. Antes de intervenir, acordamos contigo qué se hará, los cortes de energía y el presupuesto.',
  ctaText: 'Cotizar mi renovación por WhatsApp',
  socialProof: 'Electricistas certificados SEC Costa y Marga Marga',
  referencesNote: 'Renovaciones realizadas: [numero] por confirmar.',
}

export const symptomsData: RemodelacionSymptomsData = {
  id: 'riesgos',
  title: '¿Te pasa algo de esto?',
  description:
    'Estas señales merecen una revisión de la instalación. Cuéntanos cuáles reconoces en tu casa para orientar la visita técnica.',
  items: [
    {
      id: 'automatico',
      text: 'Se salta el automático si usas el hervidor y la estufa al mismo tiempo',
    },
    {
      id: 'tablero',
      text: 'Tu tablero todavía tiene tapones o no tiene diferencial',
    },
    {
      id: 'enchufes',
      text: 'Hay enchufes que se calientan, están sueltos o tienen marcas oscuras',
    },
    {
      id: 'alargadores',
      text: 'Dependes de alargadores porque faltan enchufes donde los necesitas',
    },
    {
      id: 'luces',
      text: 'Las luces parpadean cuando enciendes un electrodoméstico',
    },
    {
      id: 'cables',
      text: 'No sabes cuándo se renovaron los cables ni si existe conexión a tierra',
    },
  ],
}

export const fearsData: RemodelacionFearsData = {
  id: 'dudas-remodelacion',
  title: 'Los 3 miedos principales',
  description:
    'Antes de decidir, necesitas saber cómo afectará el trabajo a tu casa y tu rutina.',
  items: [
    {
      id: 'viabilidad',
      question: '¿Mi casa se puede recablear?',
      answer:
        'La visita técnica permite revisar el cableado, los ductos y el tablero para definir una solución viable. El alcance se calcula para tu vivienda; [100 m2] es una superficie de referencia pendiente de confirmar, no un límite del servicio.',
    },
    {
      id: 'intervenciones',
      question: '¿Me van a romper todo?',
      answer:
        'Primero evaluamos si podemos aprovechar las canalizaciones existentes. Si algún tramo necesita abrirse o requiere una canalización nueva, te explicamos dónde y por qué antes de acordar la intervención. La visita define qué terminaciones incluye el presupuesto.',
    },
    {
      id: 'plazos',
      question: '¿Cuánto tiempo voy a estar en obra?',
      answer:
        'Planificamos el trabajo por sectores y acordamos los cortes de energía antes de comenzar. La referencia [X días] está pendiente de confirmar; el plazo real depende del estado de la instalación, su tamaño y el alcance aprobado.',
    },
  ],
}

export const processSectionData: RemodelacionSectionData = {
  id: 'proceso',
  title: 'Así renovamos tu instalación, paso a paso',
  description:
    'Conoce el alcance antes de empezar y coordina cada etapa con el equipo.',
}

export const processData: readonly RemodelacionProcessStep[] = [
  {
    id: 'whatsapp',
    number: 1,
    title: 'Nos escribes por WhatsApp',
    description:
      'Seleccionas tu zona y nos cuentas la comuna, la antigüedad aproximada de tu casa y qué señales has notado. Si tienes fotos del tablero, puedes compartirlas en la conversación.',
  },
  {
    id: 'visita',
    number: 2,
    title: 'Hacemos una visita técnica',
    description:
      'Revisamos la instalación y definimos contigo qué renovar. Recibes un presupuesto con materiales, trabajos incluidos, intervenciones necesarias y programación de cortes.',
  },
  {
    id: 'renovacion',
    number: 3,
    title: 'Renovamos por sectores',
    description:
      'Ejecutamos las etapas acordadas, verificamos el funcionamiento y te explicamos el nuevo tablero. La documentación y la declaración TE1 se gestionan según el alcance contratado.',
  },
]

export const includesSectionData: RemodelacionIncludesData = {
  id: 'soluciones',
  title: 'Qué contempla la renovación',
  description:
    'Una propuesta que considera la instalación completa y las necesidades de tu hogar.',
  scopeNote:
    'La visita técnica y el presupuesto definen qué elementos se incluyen en tu caso. Las reparaciones de muros, pintura y trabajos adicionales deben quedar expresamente acordados.',
}

export const includesData: readonly RemodelacionIncludedItem[] = [
  {
    id: 'cableado',
    title: 'Cableado bajo norma',
    description:
      'Renovación de los conductores y canalizaciones definidos en el diagnóstico.',
  },
  {
    id: 'tablero',
    title: 'Tablero nuevo y protecciones',
    description:
      'Automáticos, diferenciales y rotulación de los circuitos según el proyecto.',
  },
  {
    id: 'tierra',
    title: 'Revisión de la puesta a tierra',
    description:
      'Evaluación y adecuaciones necesarias de la protección a tierra.',
  },
  {
    id: 'circuitos',
    title: 'Circuitos para el uso actual de tu casa',
    description:
      'Distribución de enchufes y cargas conforme a las necesidades acordadas.',
  },
  {
    id: 'pruebas',
    title: 'Pruebas y entrega explicada',
    description:
      'Verificación de la instalación y explicación del uso del tablero renovado.',
  },
  {
    id: 'te1',
    title: 'Certificado TE1',
    description:
      'Gestión de la declaración y documentación técnica según el alcance contratado.',
  },
]

export const whatsappMessage: string =
  'Hola Mr Chispeza, quiero cotizar la renovación eléctrica de mi casa. Está en [comuna] y tiene aprox. [años] años.'

export const videoData: RemodelacionVideoData = {
  id: 'video-remodelacion',
  title: 'Conoce cómo se prepara una renovación',
  description:
    'Un espacio para mostrar el trabajo real y explicar la intervención en tu casa.',
  src: '/videos/remodelacion-placeholder.mp4',
  poster: '/galeria/remodelacion-poster.jpg',
  label: 'Vídeo de remodelación eléctrica: material pendiente de incorporar',
  pendingNote:
    'Vídeo y miniatura pendientes: este reproductor utiliza rutas de preparación hasta recibir material real de Mr. Chispeza.',
}

export const contactData: RemodelacionContactData = {
  id: 'contacto-remodelacion',
  eyebrow: 'Conversemos sobre tu casa',
  title: 'Da el primer paso para renovar tu instalación',
  description:
    'Cuéntanos qué necesitas y en qué comuna está tu vivienda. Elige tu zona en WhatsApp para conversar con el equipo correspondiente.',
  ctaText: heroData.ctaText,
}
