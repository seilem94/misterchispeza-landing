export const viviendasNuevasMetadata = {
  title: 'Instalación Eléctrica para Viviendas Nuevas y Parcelas',
  description:
    'Ingeniería y ejecución eléctrica para casas nuevas, parcelas de agrado y cabañas en la Región de Valparaíso. Empalmes de larga distancia, alimentadores sin caída de tensión y certificación SEC TE1.',
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
    title: 'Instalación Eléctrica para Viviendas Nuevas y Parcelas - Mr.Chispeza',
    description:
      'Soluciones eléctricas profesionales para obras desde cero y parcelas rurales con certificación SEC TE1.',
    url: '/instalacion-electrica-viviendas-nuevas',
    images: ['/hero.webp'],
  },
}

export interface RuralChallenge {
  id: string
  title: string
  subtitle: string
  description: string
  solution: string
  iconName: string
}

export interface SolucionViviendaNueva {
  id: string
  title: string
  description: string
  features: string[]
  iconName: string
}

export interface EtapaObraNueva {
  numero: number
  titulo: string
  fase: string
  duracion: string
  descripcion: string
  hitos: string[]
  iconName: string
}

export interface ProyectoObraNueva {
  id: number
  titulo: string
  ubicacion: string
  tipoTerreno: string
  potencia: string
  alcance: string
  año: number
  imagen: string
  width: number
  height: number
  destacado: string
}

export interface ViviendaNuevaFAQ {
  pregunta: string
  respuesta: string
}

export const navItemsViviendasNuevas = [
  { label: 'Terrenos & Parcelas', href: '#desafios-rurales' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Etapas de Obra', href: '#etapas' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Cotizar', href: '#contacto-viviendas-nuevas' },
]

export const desafiosRurales: RuralChallenge[] = [
  {
    id: 'distancia-poste',
    title: 'Puntos de conexión distantes en parcelas',
    subtitle: 'Tendido de alimentador a 100m, 200m o más del poste',
    description:
      'En terrenos rurales y loteos agrícolas, el punto de entrega de la distribuidora suele quedar en el camino vecinal a gran distancia de la vivienda, requiriendo postación privada o zanja subterránea técnica.',
    solution:
      'Diseñamos tendidos aéreos en postes certificados o zanjas subterráneas protegidas con cinta de advertencia y arena compactada, respetando profundidad mínima SEC.',
    iconName: 'Compass',
  },
  {
    id: 'caida-tension',
    title: 'Caídas de tensión por largo kilometraje',
    subtitle: 'Pérdida de fuerza que daña motores y electrodomésticos',
    description:
      'Si un conductor se dimensiona solo por corriente y no por longitud, los 220V caen dramáticamente a 180V-190V al llegar a la casa, impidiendo el arranque de refrigeradores, bombas y herramientas.',
    solution:
      'Efectuamos cálculo riguroso de caída de tensión porcentual (menor al 3% según pliego RIC 03), seleccionando el calibre adecuado en cobre o aluminio preensamblado.',
    iconName: 'Zap',
  },
  {
    id: 'resistividad-suelo',
    title: 'Terrenos secos, arcillosos o pedregosos',
    subtitle: 'Dificultad para lograr valores seguros de puesta a tierra',
    description:
      'En cerros, sectores de secano costero o valles interiores, la resistencia del suelo es extremadamente alta, haciendo inútil una jabalina común de 1.5 metros para derivar descargas.',
    solution:
      'Instalamos mallas a tierra profundas con barras copperweld de alta densidad, soldadura cuproaluminotérmica y tratamiento mejorador de suelo para garantizar menos de 20 Ohms normados.',
    iconName: 'Mountain',
  },
  {
    id: 'cargas-especiales',
    title: 'Bombas de agua, fosa séptica y quinchos',
    subtitle: 'Demanda trifásica y circuitos perimetrales exigentes',
    description:
      'Una vivienda rural no es solo iluminación interior: requiere energía continua para la bomba sumergible del pozo (1.5HP a 3HP), sistema de cloración, portón eléctrico y cobertizos.',
    solution:
      'Configuramos tableros secundarios dedicados con relés térmicos, guardamotores, contactores y protecciones estancas IP65 contra polvo y humedad exterior.',
    iconName: 'Droplets',
  },
  {
    id: 'respaldo-emergencia',
    title: 'Cortes frecuentes de la red rural',
    subtitle: 'Vulnerabilidad ante temporales o fallas zonales',
    description:
      'En zonas campestres los cortes de energía pueden durar horas o días debido a ramas en el tendido o accidentes en rutas secundarias, afectando el bombeo de agua potable.',
    solution:
      'Dejamos el tablero preparado con llave de transferencia manual o automática (TTA) para acoplar generadores a combustión o kit solar fotovoltaico de respaldo.',
    iconName: 'ShieldPlus',
  },
]

export const solucionesViviendasNuevas: SolucionViviendaNueva[] = [
  {
    id: 'ingenieria-planos',
    title: 'Ingeniería de Detalle y Planos RIC 2021',
    description:
      'Diseño eléctrico completo desde plano arquitectónico: cuadros de carga, balanceo trifásico o monofásico, diagramas unilineales y memoria técnica firmada por instalador SEC autorizado.',
    features: [
      'Cálculo de demanda máxima y factor de simultaneidad',
      'Planos en formato digital CAD listos para obra',
      'Cumplimiento estricto de los 19 pliegos normativos RIC',
    ],
    iconName: 'DraftingCompass',
  },
  {
    id: 'gestion-empalme',
    title: 'Gestión Integral de Empalmes (Provisorio y Definitivo)',
    description:
      'Tramitación ante Chilquinta, CGE o cooperativas locales. Levantamos la solicitud de factibilidad técnica, instalamos el murete o poste de empalme reglamentario y gestionamos el medidor.',
    features: [
      'Empalme provisorio de faena para iniciar construcción',
      'Empalme definitivo aéreo o subterráneo (A6, A9, S9, etc.)',
      'Supervisión hasta la colocación del medidor sellado',
    ],
    iconName: 'Building2',
  },
  {
    id: 'canalizacion-obra-gruesa',
    title: 'Canalizaciones Embutidas y Subterráneas',
    description:
      'Montaje de ductos en radier, losas de hormigón armado, muros de tabiquería o entramado de madera con materiales ignífugos de alto impacto.',
    features: [
      'Tuberías conduit de alto impacto y cajas de derivación estancas',
      'Tendido subterráneo con profundidades y arena reglamentaria',
      'Cero improvisaciones durante el avance de la obra civil',
    ],
    iconName: 'HardHat',
  },
  {
    id: 'tableros-alta-gama',
    title: 'Tableros Generales y Distribución por Zonas',
    description:
      'Gabinetes metálicos o termoplásticos con amplio espacio de reserva para futuras ampliaciones (aire acondicionado, piscina, quincho), con protecciones de primer nivel.',
    features: [
      'Disyuntores termomagnéticos y diferenciales de corte selectivo',
      'Subtableros independientes para exteriores, quincho y bombas',
      'Rotulación profesional y esquema pegado en puerta',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'malla-tierra-certificada',
    title: 'Malla a Tierra y Sistema de Protección Integral',
    description:
      'Construcción de sistema de puesta a tierra con electrodo vertical o malla reticular, cámara de registro accesible y medición con telurómetro calibrado.',
    features: [
      'Resistencia comprobada inferior a los límites normativos SEC',
      'Conexiones con soldadura exotérmica o prensas certificadas',
      'Protección total contra descargas atmosféricas y fallas',
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'declaracion-te1',
    title: 'Tramitación y Obtención de Certificado SEC TE1',
    description:
      'Ingreso formal del expediente técnico a la plataforma SEC para la obtención del Certificado TE1 oficial, requisito obligatorio para que la distribuidora conecte la luz.',
    features: [
      'Documento oficial indispensable para recepción municipal',
      'Aceptado por todas las distribuidoras eléctricas de Chile',
      'Garantía total de aprobación técnica',
    ],
    iconName: 'FileCheck2',
  },
]

export const etapasObraNueva: EtapaObraNueva[] = [
  {
    numero: 1,
    titulo: 'Factibilidad y Estudio de Terreno',
    fase: 'Etapa de Planificación',
    duracion: '1 a 3 días',
    descripcion:
      'Visitamos tu parcela o sitio en construcción para medir distancias a la red eléctrica pública, calcular la caída de tensión esperada, evaluar el tipo de suelo y determinar si se requiere empalme monofásico o trifásico.',
    hitos: ['Revisión de poste distribuidora', 'Definición de trazado de acometida'],
    iconName: 'MapPin',
  },
  {
    numero: 2,
    titulo: 'Ingeniería, Planos y Trámite de Empalme',
    fase: 'Etapa Técnica & Legal',
    duracion: '1 a 2 semanas',
    descripcion:
      'Confeccionamos los planos eléctricos completos, cuadro de cargas y solicitamos a la distribuidora la factibilidad de conexión. Montamos el poste de empalme o murete normado en el deslinde de la propiedad.',
    hitos: ['Aprobación de factibilidad de compañía', 'Murete/Poste de empalme instalado'],
    iconName: 'FileText',
  },
  {
    numero: 3,
    titulo: 'Canalizaciones en Obra Negra & Malla a Tierra',
    fase: 'Etapa de Obra Gruesa',
    duracion: 'En paralelo a construcción',
    descripcion:
      'Antes de que se vierta el radier o se cierren las paredes con volcanita/madera, tendemos las tuberías conduit, dejamos cajas de paso y construimos la malla a tierra en terreno.',
    hitos: ['Tuberías embutidas en radier/muros', 'Malla a tierra hincada y medida'],
    iconName: 'Hammer',
  },
  {
    numero: 4,
    titulo: 'Cableado, Armado de Tableros y Conexiones',
    fase: 'Etapa de Terminaciones',
    duracion: '3 a 7 días',
    descripcion:
      'Tendido de conductores libres de halógenos, armado del tablero general con sus diferenciales y automáticos, conexionado de enchufes, interruptores, bombas de agua y luminarias.',
    hitos: ['Tablero general cableado y rotulado', 'Conexión de artefactos y circuitos especiales'],
    iconName: 'Wrench',
  },
  {
    numero: 5,
    titulo: 'Pruebas de Seguridad y Certificación SEC TE1',
    fase: 'Puesta en Marcha & Entrega',
    duracion: '1 semana',
    descripcion:
      'Medición de aislamiento de circuitos, verificación de disparo diferencial, protocolo de medición de tierra e ingreso formal ante la SEC. Entrega del certificado TE1 definitivo para la colocación del medidor.',
    hitos: ['Certificado TE1 emitido por SEC', 'Energización definitiva de la propiedad'],
    iconName: 'Award',
  },
]

export const proyectosObraNueva: ProyectoObraNueva[] = [
  {
    id: 1,
    titulo: 'Parcela de Agrado en Valle de Casablanca',
    ubicacion: 'Casablanca, Valparaíso',
    tipoTerreno: 'Parcela Rural 5.000 m²',
    potencia: 'Trifásico 25A (16.5 kW)',
    alcance: 'Tendido subterráneo 180m, empalme provisorio y definitivo, bomba pozo 3HP y TE1 aprobado.',
    año: 2025,
    imagen: '/hero.webp',
    width: 1200,
    height: 675,
    destacado: 'Empalme Subterráneo de Larga Distancia',
  },
  {
    id: 2,
    titulo: 'Casa de Campo en Limache / Olmué',
    ubicacion: 'Limache, Valparaíso',
    tipoTerreno: 'Vivienda Nueva 160 m²',
    potencia: 'Monofásico 40A (8.8 kW)',
    alcance: 'Proyecto eléctrico completo desde radier, tablero 18 circuitos, quincho y respaldo generador.',
    año: 2025,
    imagen: '/paneles-1.webp',
    width: 1200,
    height: 675,
    destacado: 'Transferencia para Generador Integrada',
  },
  {
    id: 3,
    titulo: 'Complejo de Cabañas en Maitencillo Rural',
    ubicacion: 'Puchuncaví / Maitencillo',
    tipoTerreno: '3 Cabañas Turísticas + Administración',
    potencia: 'Trifásico 40A (26.4 kW)',
    alcance: 'Empalme centralizado, subtableros independientes por cabaña, iluminación de jardines y TE1.',
    año: 2025,
    imagen: '/paneles-3.webp',
    width: 1200,
    height: 675,
    destacado: 'Subtableros Independientes & Iluminación',
  },
]

export const faqsViviendasNuevas: ViviendaNuevaFAQ[] = [
  {
    pregunta: '¿Cómo solicito luz para mi terreno si el poste de la distribuidora está lejos de mi parcela?',
    respuesta:
      'Nosotros realizamos el levantamiento técnico en terreno y la solicitud de factibilidad ante la compañía eléctrica (Chilquinta, CGE, etc.). Dependiendo de la distancia y topografía, diseñamos la extensión de red a través de postación privada interior o mediante tendido subterráneo en zanja reglamentaria con conductores de sección calculada para evitar caídas de voltaje.',
  },
  {
    pregunta: '¿Qué es el empalme provisorio de faena y cuándo conviene solicitarlo?',
    respuesta:
      'El empalme provisorio es una conexión temporal autorizada por la SEC y la distribuidora que permite tener energía eléctrica legal para alimentar trompos de hormigón, sierras, soldadoras y herramientas durante la etapa de construcción, sin tener que depender de ruidosos y costosos generadores de bencina.',
  },
  {
    pregunta: '¿Cuándo me conviene contratar un empalme monofásico (220V) vs trifásico (380V)?',
    respuesta:
      'Para casas familiares estándar suele ser suficiente un empalme monofásico de 25A o 40A. Sin embargo, en parcelas o terrenos rurales donde se planea instalar bombas de pozo profundo de más de 2HP, climatización centralizada, piscina, taller de herramientas o cargador de vehículo eléctrico, un empalme trifásico ofrece mayor estabilidad, balance de cargas y menor costo operativo en motores.',
  },
  {
    pregunta: '¿Mr. Chispeza se encarga de todo el trámite ante la SEC y la distribuidora eléctrica?',
    respuesta:
      'Sí, nos encargamos del proceso "llave en mano": elaboración de memorias de cálculo, planos de instalación en formato digital, presentación de carpetas ante la distribuidora, hincado y medición de malla a tierra, e inscripción formal de la declaración TE1 en la Superintendencia de Electricidad y Combustibles (SEC).',
  },
  {
    pregunta: '¿En qué etapa de la construcción de la casa debo llamarlos?',
    respuesta:
      'Lo ideal es contactarnos antes de comenzar la obra o durante la planificación de los cimientos. De esta manera podemos coordinar el empalme provisorio y dejar pasadas de ductos en el radier o losa de fundación, lo que ahorra costos significativos y evita picar estructuras de hormigón más adelante.',
  },
]
