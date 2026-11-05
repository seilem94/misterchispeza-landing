export const viviendasNuevasMetadata = {
  title: 'Instalación eléctrica para viviendas nuevas',
  description:
    'Proyecto, instalación eléctrica y certificado TE1 para casas nuevas, cabañas y ampliaciones en Costa y Marga Marga. Comparte tus planos para cotizar.',
  keywords: [
    'instalacion electrica para viviendas nuevas',
    'instalacion electrica casas nuevas',
    'electricidad parcelas rurales',
    'empalme electrico parcela Valparaiso',
    'tendido subterraneo alimentador',
    'electricista certificado parcelas Casablanca',
    'electricista parcelas Limache Olmue',
    'certificacion SEC TE1 casa nueva',
    'proyectos electricos desde cero',
  ],
  alternates: { canonical: '/instalacion-electrica-viviendas-nuevas' },
  openGraph: {
    title: 'La electricidad de tu casa nueva, bien hecha desde el primer día',
    description:
      'Primero el proyecto, después el cable: diseño, instalación y TE1 para tu casa, cabaña o ampliación.',
    url: '/instalacion-electrica-viviendas-nuevas',
    images: ['/hero.webp'],
  },
}

export interface ViviendasNuevasSectionData {
  id: string
  title: string
  description: string
}

export interface ViviendasNuevasHeroData extends ViviendasNuevasSectionData {
  eyebrow: string
  ctaText: string
  socialProof: string
  referencesNote: string
}

export interface ViviendasNuevasProblem {
  id: string
  text: string
}

export interface ViviendasNuevasProblemData extends ViviendasNuevasSectionData {
  items: readonly ViviendasNuevasProblem[]
}

export interface ViviendasNuevasSolutionData extends ViviendasNuevasSectionData {
  statement: string
}

export interface ViviendasNuevasItem {
  id: string
  title: string
  description: string
}

export interface ViviendasNuevasProcessStep extends ViviendasNuevasItem {
  number: number
}

export interface ViviendasNuevasIncludesData extends ViviendasNuevasSectionData {
  scopeNote: string
}

export interface ViviendasNuevasVideoData extends ViviendasNuevasSectionData {
  src: string
  poster: string
  label: string
  pendingNote: string
}

export interface ViviendasNuevasContactData extends ViviendasNuevasSectionData {
  eyebrow: string
  ctaText: string
  formTitle: string
  formDescription: string
}

export const heroData: ViviendasNuevasHeroData = {
  id: 'viviendas-nuevas',
  eyebrow: 'Instalación eléctrica para viviendas nuevas',
  title: 'La electricidad de tu casa nueva, bien hecha desde el primer día',
  description:
    'Proyecto, instalación y certificado TE1 para casas, cabañas y ampliaciones. Coordinamos la electricidad con las etapas de tu obra, desde los planos hasta la entrega.',
  ctaText: 'Enviar mis planos por WhatsApp',
  socialProof:
    'Electricistas certificados SEC Costa y Marga Marga · [número] viviendas instaladas',
  referencesNote:
    'Cifra de viviendas y respaldo de experiencia pendientes de confirmación.',
}

export const problemData: ViviendasNuevasProblemData = {
  id: 'problemas-obra',
  title: 'Lo que se instala mal en la obra se paga dos veces',
  description:
    'Definir la electricidad a tiempo ayuda a evitar correcciones que interrumpen el avance de la construcción.',
  items: [
    {
      id: 'circuitos',
      text: 'Circuitos mal calculados que no responden a la demanda de tu casa',
    },
    {
      id: 'te1',
      text: 'Observaciones al pedir el TE1 porque la instalación no coincide con el proyecto',
    },
    {
      id: 'terminaciones',
      text: 'Muros y cielos terminados que hay que abrir para corregir recorridos o agregar puntos',
    },
  ],
}

export const solutionData: ViviendasNuevasSolutionData = {
  id: 'soluciones',
  title: 'Primero el proyecto, después el cable',
  description:
    'Revisamos tus planos y diseñamos la instalación según los espacios, los equipos que usarás y las etapas de tu obra. Coordinamos las canalizaciones antes de cerrar muros y cielos para que la electricidad acompañe la construcción.',
  statement: 'El mismo equipo que diseña, instala y certifica.',
}

export const processSectionData: ViviendasNuevasSectionData = {
  id: 'etapas',
  title: 'De tus planos a la instalación terminada',
  description:
    'Tres pasos para definir el proyecto, acordar el presupuesto y coordinar la ejecución con tu obra.',
}

export const processData: readonly ViviendasNuevasProcessStep[] = [
  {
    id: 'planos',
    number: 1,
    title: 'Mandas tus planos por WhatsApp',
    description:
      'Seleccionas tu zona y nos cuentas la comuna y la etapa de construcción. Comparte los planos en la conversación para revisar la distribución y lo que necesitas instalar.',
  },
  {
    id: 'presupuesto',
    number: 2,
    title: 'Presupuesto en [X días]',
    description:
      'Revisamos la información y definimos alcance, materiales y etapas de trabajo. El plazo [X días] está pendiente de confirmar con el equipo; la fecha de entrega del presupuesto se acuerda al revisar tu proyecto.',
  },
  {
    id: 'instalacion',
    number: 3,
    title: 'Instalación y TE1',
    description:
      'Coordinamos las canalizaciones, el cableado y las terminaciones con el avance de la construcción. Realizamos las pruebas y gestionamos el TE1 y la documentación según el alcance contratado.',
  },
]

export const includesSectionData: ViviendasNuevasIncludesData = {
  id: 'incluidos',
  title: 'Qué incluye el proyecto de tu casa nueva',
  description:
    'Una propuesta que conecta el diseño con lo que se ejecutará en terreno.',
  scopeNote:
    'El presupuesto detalla los materiales, los trabajos y las etapas incluidos en tu caso. Empalmes, extensiones de red y otros trabajos adicionales deben quedar expresamente acordados.',
}

export const includesData: readonly ViviendasNuevasItem[] = [
  {
    id: 'diseno',
    title: 'Diseño de proyecto',
    description:
      'Distribución de puntos, circuitos y cargas a partir de tus planos y necesidades.',
  },
  {
    id: 'canalizacion',
    title: 'Canalización en obra gruesa',
    description:
      'Coordinación de ductos y cajas antes de cerrar muros, cielos y otras terminaciones.',
  },
  {
    id: 'cableado',
    title: 'Cableado y puntos eléctricos',
    description:
      'Tendido de conductores y conexión de enchufes, interruptores y puntos de iluminación acordados.',
  },
  {
    id: 'tablero',
    title: 'Tablero y protecciones',
    description:
      'Montaje y rotulación de circuitos con las protecciones definidas en el proyecto.',
  },
  {
    id: 'tierra',
    title: 'Puesta a tierra y pruebas',
    description:
      'Ejecución del sistema de protección y verificación de la instalación antes de la entrega.',
  },
  {
    id: 'te1',
    title: 'Certificado TE1',
    description:
      'Gestión de la declaración y entrega de documentación técnica según el alcance contratado.',
  },
]

export const targetSectionData: ViviendasNuevasSectionData = {
  id: 'para-quien',
  title: 'Para tu casa nueva, cabaña o ampliación',
  description:
    'Podemos revisar tu proyecto desde la planificación o coordinar la instalación con una obra que ya está en marcha.',
}

export const targetData: readonly ViviendasNuevasItem[] = [
  {
    id: 'casa-propia',
    title: 'Casa propia en construcción',
    description:
      'Quieres definir la electricidad junto con la distribución de tu casa y tus hábitos de uso.',
  },
  {
    id: 'cabanas',
    title: 'Cabañas para arriendo',
    description:
      'Necesitas planificar los consumos y la distribución eléctrica de una o varias cabañas.',
  },
  {
    id: 'ampliaciones',
    title: 'Ampliaciones',
    description:
      'Vas a sumar espacios y necesitas evaluar cómo integrarlos a la instalación existente.',
  },
  {
    id: 'parcelas',
    title: 'Vivienda nueva en parcela',
    description:
      'Estás construyendo y necesitas revisar la ubicación, las distancias y las necesidades del proyecto.',
  },
]

export const whatsappMessage: string =
  'Hola Mr Chispeza, estoy construyendo en [comuna] y quiero cotizar la instalación eléctrica. ¿Les mando los planos?'

export const videoData: ViviendasNuevasVideoData = {
  id: 'video-viviendas-nuevas',
  title: 'Así se prepara la electricidad de una casa nueva',
  description:
    'Un espacio para mostrar el trabajo real y explicar cómo se coordina la instalación con la obra.',
  src: '/videos/viviendas-placeholder.mp4',
  poster: '/galeria/viviendas-poster.jpg',
  label:
    'Vídeo de instalación eléctrica para viviendas nuevas: material pendiente de incorporar',
  pendingNote:
    'Vídeo y miniatura pendientes: este reproductor utiliza rutas de preparación hasta recibir material real de Mr. Chispeza.',
}

export const contactData: ViviendasNuevasContactData = {
  id: 'contacto-viviendas-nuevas',
  eyebrow: 'Planifiquemos la electricidad de tu obra',
  title: 'Comparte tus planos y conversemos sobre tu proyecto',
  description:
    'Elige tu zona en WhatsApp y cuéntanos en qué etapa está la construcción. Desde esa conversación puedes compartir los planos con el equipo.',
  ctaText: heroData.ctaText,
  formTitle: '¿Prefieres dejar una consulta?',
  formDescription:
    'Déjanos tus datos y los detalles del proyecto. Este formulario no recibe archivos; los planos se comparten por WhatsApp.',
}
