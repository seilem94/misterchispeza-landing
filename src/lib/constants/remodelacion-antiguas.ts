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

export interface WarningSign {
  id: string
  title: string
  subtitle: string
  description: string
  riskLevel: 'critico' | 'alto' | 'moderado'
  iconName: string
}

export interface RemodelacionSolution {
  id: string
  title: string
  description: string
  benefits: string[]
  iconName: string
}

export interface RemodelacionStep {
  numero: number
  titulo: string
  duracion: string
  descripcion: string
  entregables: string[]
  iconName: string
}

export interface ProyectoRemodelacion {
  id: number
  titulo: string
  ubicacion: string
  tipoPropiedad: string
  alcance: string
  año: number
  imagen: string
  width: number
  height: number
  destacado: string
}

export interface RemodelacionFAQ {
  pregunta: string
  respuesta: string
}

export const navItemsRemodelacion = [
  { label: 'Riesgos', href: '#riesgos' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Paso a Paso', href: '#proceso' },
  { label: 'Casos Reales', href: '#proyectos' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Cotizar', href: '#contacto-remodelacion' },
]

export const senalesAlerta: WarningSign[] = [
  {
    id: 'cableado-antiguo',
    title: 'Cables de tela, plomo o alambre rígido',
    subtitle: 'Aislamiento degradado y reseco',
    description:
      'Las viviendas construidas hace más de 20 o 30 años tienen cableado con aislamiento de tela o goma vulcanizada que se desmorona al tacto, provocando fugas de corriente y cortocircuitos invisibles dentro de muros o entretechos.',
    riskLevel: 'critico',
    iconName: 'Flame',
  },
  {
    id: 'tablero-obsoleto',
    title: 'Tableros con tapones o fusibles de plomo',
    subtitle: 'Sin protección diferencial salvavidas',
    description:
      'Los fusibles de alambre no reaccionan con la rapidez necesaria para evitar incendios y carecen totalmente de interruptor diferencial, lo que significa que no hay protección contra descargas eléctricas hacia personas.',
    riskLevel: 'critico',
    iconName: 'AlertTriangle',
  },
  {
    id: 'sobrecalentamiento',
    title: 'Enchufes calientes o con olor a quemado',
    subtitle: 'Sobrecarga de líneas eléctricas',
    description:
      'El uso simultáneo de hervidor, microondas, calefactor o lavadora calienta las líneas eléctricas y enchufes antiguos diseñados originalmente para un consumo mínimo (apenas ampolletas y un radio).',
    riskLevel: 'alto',
    iconName: 'ZapOff',
  },
  {
    id: 'cortes-frecuentes',
    title: 'Automáticos que saltan frecuentemente',
    subtitle: 'Capacidad eléctrica superada',
    description:
      'Si al encender dos artefactos de cocina salta el automático principal, tu circuito está trabajando al límite térmico, degradando las tuberías y poniendo en peligro la estructura del inmueble.',
    riskLevel: 'alto',
    iconName: 'Activity',
  },
  {
    id: 'sin-tierra',
    title: 'Enchufes sin conexión a tierra',
    subtitle: 'Falta de línea a tierra de protección',
    description:
      'Los antiguos enchufes de dos patas no desvían fallas a tierra. Si un refrigerador, microondas o lavadora presenta una falla interna, la corriente se descarga en la persona que lo toca.',
    riskLevel: 'critico',
    iconName: 'ShieldAlert',
  },
  {
    id: 'parpadeo-luces',
    title: 'Parpadeo o caída de tensión en luces',
    subtitle: 'Empalmes flojos o sulfatados',
    description:
      'Cuando enciendes un electrodoméstico y la luz se atenúa momentáneamente, existe una alta resistencia en las uniones o el calibre del alimentador es insuficiente para la demanda actual.',
    riskLevel: 'moderado',
    iconName: 'LightbulbOff',
  },
]

export const solucionesRemodelacion: RemodelacionSolution[] = [
  {
    id: 'recableado-normado',
    title: 'Recableado Total bajo Norma SEC RIC',
    description:
      'Reemplazo completo de conductores antiguos por cable de cobre libre de halógenos (H07Z1-K / EVA), ignífugo y con código de colores normalizado.',
    benefits: [
      'Cero emisión de gases tóxicos en caso de siniestro',
      'Conductores con capacidad real para alta demanda',
      'Canalizaciones limpias y seguras',
    ],
    iconName: 'RefreshCw',
  },
  {
    id: 'tablero-nuevo',
    title: 'Nuevo Tablero Eléctrico General y Distribución',
    description:
      'Instalación de gabinete ignífugo con automáticos termomagnéticos bipolares de marca certificada (Schneider/Legrand) e interruptores diferenciales por zona.',
    benefits: [
      'Protección salvavidas diferencial en todos los circuitos',
      'Selectividad de fallas: no se corta toda la casa',
      'Rotulado claro de cada circuito',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'puesta-tierra',
    title: 'Puesta a Tierra y Medición Certificada',
    description:
      'Hincado de electrodo de cobre (barra Copperweld), cámara de registro y conductor de protección verde/amarillo llevado a cada enchufe de la casa.',
    benefits: [
      'Derivación instantánea de fallas eléctricas',
      'Protección para computadores, TVs y electrodomésticos',
      'Medición de resistencia con telurómetro calibrado',
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'circuitos-independientes',
    title: 'Independización de Circuitos de Fuerza',
    description:
      'Separación de circuitos de fuerza para cocina (horno, microondas, encimera), logia (lavadora/secadora) y climatización, evitando sobrecargas.',
    benefits: [
      'Uso simultáneo de artefactos sin que caiga la luz',
      'Líneas de 2.5 mm² o 4.0 mm² con protección dedicada',
      'Aumento de capacidad general de la vivienda',
    ],
    iconName: 'Layers',
  },
  {
    id: 'certificacion-sec',
    title: 'Planos As-Built y Certificación SEC TE1',
    description:
      'Levantamiento técnico de la instalación renovada, confección de planos unilineales y tramitación de la declaración TE1 ante la Superintendencia de Electricidad y Combustibles.',
    benefits: [
      'Válido para pólizas de seguros contra incendio',
      'Requisito indispensable para venta o arriendo regular',
      'Tranquilidad legal y técnica para tu familia',
    ],
    iconName: 'FileCheck',
  },
]

export const pasosRemodelacion: RemodelacionStep[] = [
  {
    numero: 1,
    titulo: 'Diagnóstico Técnico en Terreno',
    duracion: '1 a 2 horas',
    descripcion:
      'Visitamos tu casa en la Región de Valparaíso para inspeccionar el estado del tablero, revisar las cajas de derivación, medir la aislación de líneas y evaluar la viabilidad de canalizaciones existentes.',
    entregables: ['Informe de estado actual', 'Detección de puntos de riesgo crítico'],
    iconName: 'Search',
  },
  {
    numero: 2,
    titulo: 'Diseño de Carga y Presupuesto Claro',
    duracion: '24 a 48 horas',
    descripcion:
      'Calculamos la potencia real que requiere tu hogar hoy y a futuro. Presentamos un presupuesto detallado con materiales certificados y cronograma de intervención por sectores.',
    entregables: ['Presupuesto transparente sin costos ocultos', 'Propuesta de distribución de circuitos'],
    iconName: 'Calculator',
  },
  {
    numero: 3,
    titulo: 'Retiro de Líneas Vetustas y Recableado Limpio',
    duracion: '2 a 4 días',
    descripcion:
      'Trabajamos con técnica cuidadosa para pasar nuevos cables por ductos existentes o instalar canalizaciones discretas donde sea necesario, minimizando cualquier intervención en muros o pintura.',
    entregables: ['Extracción de cables de tela/alambre', 'Tendido de conductores libres de halógenos'],
    iconName: 'Wrench',
  },
  {
    numero: 4,
    titulo: 'Montaje de Tablero y Nueva Malla a Tierra',
    duracion: '1 día',
    descripcion:
      'Armamos el nuevo tablero con protecciones termo y diferenciales de primera línea. Hincamos la barra de puesta a tierra y medimos el valor óhmico según normativa.',
    entregables: ['Gabinete rotulado con diagrama unilineal', 'Puesta a tierra conectada y verificada'],
    iconName: 'CheckCircle2',
  },
  {
    numero: 5,
    titulo: 'Pruebas de Carga, Certificado TE1 y Entrega',
    duracion: '1 día',
    descripcion:
      'Ejecutamos pruebas de disparo diferencial, balanceo de fases y tensión en cada toma. Tramitamos la declaración SEC TE1 y entregamos la carpeta técnica de la instalación.',
    entregables: ['Certificado de Inscripción SEC TE1', 'Garantía formal de mano de obra'],
    iconName: 'Award',
  },
]

export const proyectosRemodelacion: ProyectoRemodelacion[] = [
  {
    id: 1,
    titulo: 'Casona Tradicional en Cerro Alegre',
    ubicacion: 'Valparaíso',
    tipoPropiedad: 'Vivienda Patrimonial (1940)',
    alcance: 'Recableado completo 160m², retiro de cable de tela y nuevo tablero 14 circuitos.',
    año: 2025,
    imagen: '/hero.webp',
    width: 1200,
    height: 675,
    destacado: 'Normalización SEC TE1',
  },
  {
    id: 2,
    titulo: 'Departamento Habitacional Años 70',
    ubicacion: 'Viña del Mar',
    tipoPropiedad: 'Edificio Residencial',
    alcance: 'Aumento de capacidad a 40A, separación de cocina eléctrica y tablero con salvavidas.',
    año: 2025,
    imagen: '/paneles-2.webp',
    width: 1280,
    height: 960,
    destacado: 'Cero Riesgo de Sobrecarga',
  },
  {
    id: 3,
    titulo: 'Casa Familiar en Sector Centro',
    ubicacion: 'Quilpué',
    tipoPropiedad: 'Casa Antigua 1 Piso',
    alcance: 'Renovación de ductos, instalación de barra a tierra, iluminación LED y regularización.',
    año: 2025,
    imagen: '/paneles-1.webp',
    width: 1200,
    height: 675,
    destacado: 'Tierra de Protección Certificada',
  },
]

export const faqsRemodelacion: RemodelacionFAQ[] = [
  {
    pregunta: '¿Es estrictamente necesario picar todas las paredes para cambiar los cables viejos?',
    respuesta:
      'En la gran mayoría de los casos no es necesario picar. Las casas antiguas suelen contar con tuberías metálicas o conduit por donde podemos deslizar los nuevos conductores libres de halógenos mediante guías pasacables profesionales. Si algún tramo se encuentra colapsado, evaluamos alternativas limpias como canaletas decorativas perimetrales o derivaciones discretas.',
  },
  {
    pregunta: '¿Cuánto tiempo permanecerá la casa sin energía eléctrica durante los trabajos?',
    respuesta:
      'Planificamos la obra por etapas y sectores. Durante el recableado de habitaciones mantenemos habilitados circuitos provisionales o el sector prioritario de refrigeración. Los cortes generales se programan con previo aviso y suelen acotarse a pocas horas mientras se realiza el conexionado del nuevo tablero.',
  },
  {
    pregunta: '¿Por qué salta el automático si enciendo el hervidor y la estufa al mismo tiempo?',
    respuesta:
      'Porque la capacidad del automático y el calibre de los cables fueron calculados hace décadas para consumos mucho menores. Al superar los amperios permitidos, el automático se dispara por protección térmica. La solución es separar circuitos de fuerza con cables de 2.5 mm² o 4.0 mm² y protecciones dedicadas.',
  },
  {
    pregunta: '¿Por qué es indispensable contar con interruptor diferencial y puesta a tierra?',
    respuesta:
      'El interruptor automático protege a los cables de quemarse por cortocircuito, pero NO protege a las personas. El interruptor diferencial (salvavidas) detecta cuando la corriente se desvía (por ejemplo, si un niño toca un enchufe o un artefacto tiene fuga) y corta la luz en milisegundos, salvando vidas. La tierra de protección es obligatoria por norma SEC RIC.',
  },
  {
    pregunta: '¿Entregan la certificación SEC TE1 al finalizar la remodelación?',
    respuesta:
      'Sí. Todo trabajo de remodelación integral realizado por Mr. Chispeza cumple con el Pliego Técnico Normativo RIC y es ejecutado bajo la supervisión de instaladores autorizados por la SEC, entregando la declaración oficial TE1 apta para seguros y trámites municipales.',
  },
]
