
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
  {
    title: "Mantenimiento y limpieza",
    slug: "mantenimiento",
    shortDescription:
      "Mantén tu sistema en óptimo rendimiento con revisión y limpieza.",
    longDescription:
      "Realizamos inspección visual y eléctrica, limpieza (según condiciones), revisión de protecciones, cableado, estructura y mediciones. Entregamos recomendaciones para maximizar el rendimiento y prevenir fallas.",
    benefits: [
      "Mejor rendimiento del sistema",
      "Prevención de fallas",
      "Reporte y recomendaciones",
    ],
    faqs: [
      {
        q: "¿Cada cuánto se recomienda mantenimiento?",
        a: "Depende de polvo, salinidad y entorno. En general, una revisión periódica ayuda a mantener el rendimiento.",
      },
    ],
  },
];

export function getPanelSolarServiceBySlug(slug: string) {
  return panelesSolares.find((s) => s.slug === slug);
};