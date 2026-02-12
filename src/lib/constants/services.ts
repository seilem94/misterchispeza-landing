import type { Service } from "@/lib/types";

/**
 * Lista completa de servicios eléctricos ofrecidos
 */
export const services: Service[] = [
  {
    id: "paneles-solares",
    icon: "Sun",
    title: "Paneles Solares",
    description:
      "Proyectos llave en mano de paneles solares para autoconsumo eléctrico en hogares y empresas. Energía limpia y ahorro garantizado.",
    slug: "paneles-solares",
    category: "solar",
    featured: true,
    href: "/paneles-solares",
    features: [
      "Diseño personalizado",
      "Instalación llave en mano",
      "Monitoreo en tiempo real",
    ],
    ctaText: "Ver más sobre paneles solares",
  },
  {
    id: "tramites-sec",
    icon: "FileCheck2",
    title: "Trámites SEC (TE1, TE4, TE6)",
    description:
      "Gestión integral de trámites y declaraciones eléctricas ante la SEC, asegurando cumplimiento con las normas de seguridad eléctrica vigentes.",
    slug: "tramites-sec",
    category: "electrical",
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "empalmes",
    icon: "Plug",
    title: "Empalmes",
    description:
      "Instalación y regularización del empalme eléctrico o conexión a la red para su nuevo medidor de luz. Gestionamos el proceso completo ante la compañía distribuidora.",
    slug: "empalmes",
    category: "electrical",
    featured: true,
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "camaras-seguridad",
    icon: "Camera",
    title: "Cámaras de Seguridad",
    description:
      "Suministro e instalación de cámaras CCTV e IP con configuración profesional y acceso remoto desde su móvil.",
    slug: "camaras-seguridad",
    category: "security",
    featured: true,
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "tramites-compania",
    icon: "Building2",
    title: "Trámites Compañía Eléctrica",
    description:
      "Asesoría y gestión ante la compañía eléctrica: aumento de capacidad, cambios de medidor o tarifa y otros requerimientos administrativos.",
    slug: "tramites-compania-electrica",
    category: "electrical",
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "emergencias",
    icon: "Siren",
    title: "Emergencias 24/7",
    description:
      "Servicio de electricista 24 horas para fallas urgentes, cortocircuitos o problemas con tableros eléctricos. (Consultar disponibilidad de técnico de turno).",
    slug: "emergencias",
    category: "electrical",
    featured: true,
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "ingenieria-diseno",
    icon: "DraftingCompass",
    title: "Ingeniería y Diseño de Proyectos",
    description:
      "Diseño técnico con cálculos de carga, diagramas unilineales y planos eléctricos detallados conforme a la normativa SEC.",
    slug: "ingenieria-diseno",
    category: "electrical",
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "proyectos-nuevos",
    icon: "Ruler",
    title: "Proyectos desde Cero (Cabañas, Casas)",
    description:
      "Instalaciones eléctricas completas para proyectos nuevos: casas, cabañas, quinchos o ampliaciones. Todo certificado y normado.",
    slug: "proyectos-nuevos",
    category: "electrical",
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "remodelacion",
    icon: "Home",
    title: "Remodelación de instalaciones antiguas",
    description:
      "Renovación completa y segura de instalaciones eléctricas antiguas. Cambiamos cableado, tableros y protecciones para evitar fallas y aumentar la capacidad de su hogar.",
    slug: "remodelacion-instalaciones",
    category: "electrical",
    featured: true,
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "instalaciones-varias",
    icon: "Lightbulb",
    title: "Instalaciones Varias (Enchufes, Lámparas)",
    description:
      "Instalación y reparación de enchufes, interruptores, lámparas, puntos de luz y extractores en su propiedad.",
    slug: "instalaciones-varias",
    category: "electrical",
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
  {
    id: "cercos-electricos",
    icon: "Zap",
    title: "Cercos Eléctricos",
    description:
      "Instalación y certificación de cercos eléctricos perimetrales de alta seguridad para viviendas y recintos industriales.",
    slug: "cercos-electricos",
    category: "security",
    href: undefined, // Sin landing dedicada, redirige a contacto
    ctaText: undefined,
  },
];

/**
 * Obtener servicio por slug
 */
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

/**
 * Obtener servicios por categoría
 */
export const getServicesByCategory = (
  category: Service["category"],
): Service[] => {
  return services.filter((s) => s.category === category);
};

/**
 * Obtener servicios destacados
 */
export const getFeaturedServices = (): Service[] => {
  return services.filter((s) => s.featured);
};
