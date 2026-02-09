export type PanelSolarService = {
  title: string;
  slug: "instalacion" | "mantenimiento";
  shortDescription: string;
  longDescription: string;

  // opcional, pero útil para UI
  benefits?: string[];
  faqs?: { q: string; a: string }[];
};

export const panelesSolares: PanelSolarService[] = [
  {
    title: "Instalación de paneles solares",
    slug: "instalacion",
    shortDescription:
      "Diseño e instalación llave en mano para hogares y negocios.",
    longDescription:
      "Realizamos el levantamiento técnico, dimensionamiento del sistema, instalación y puesta en marcha. Te asesoramos para elegir la mejor solución según tu consumo, espacio disponible y objetivos (ahorro, respaldo o energía limpia).",
    benefits: [
      "Ahorro en consumo eléctrico",
      "Energía limpia y sostenible",
      "Instalación segura y ordenada",
    ],
    faqs: [
      {
        q: "¿Cuánto tiempo toma la instalación?",
        a: "Depende del tamaño del sistema y condiciones del lugar. En proyectos residenciales suele completarse en pocos días.",
      },
      {
        q: "¿Necesito permisos?",
        a: "Depende del tipo de instalación y normativa local. Te orientamos según tu caso.",
      },
    ],
  },
];

export const proyectosPaneles = [
  {
    id: 1,
    titulo: 'Casa Familiar - Viña del Mar',
    ubicacion: 'Viña del Mar, Valparaíso',
    capacidad: '5.5 kW',
    ahorro: '85%',
    año: 2025,
    imagen: '/proyectos/proyecto-1.jpg', // Añadir imágenes reales
  },
  {
    id: 2,
    titulo: 'Edificio Comercial - Valparaíso',
    ubicacion: 'Centro, Valparaíso',
    capacidad: '12 kW',
    ahorro: '78%',
    año: 2024,
    imagen: '/proyectos/proyecto-2.jpg',
  },
  {
    id: 3,
    titulo: 'Industria - Quilpué',
    ubicacion: 'Quilpué, Valparaíso',
    capacidad: '25 kW',
    ahorro: '90%',
    año: 2024,
    imagen: '/proyectos/proyecto-3.jpg',
  },
]


export function getPanelSolarServiceBySlug(slug: string) {
  return panelesSolares.find((s) => s.slug === slug);
}
