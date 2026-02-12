import React from "react";
import type { Metadata } from 'next'
import { Hero } from "./_components/Hero";
import { CompanySection } from "./_components/CompanySection";
import { ServicesGrid } from "./_components/ServicesGrid";
import { BannerParallax } from "./_components/BannerParallax";
import { SectorsSection } from "./_components/SectorsSection";
import { GallerySection } from "./_components/GallerySection";
import { CTASection } from "./_components/CTASection";
import { ContactSection } from "./_components/ContactSection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: 'Inicio', // Se convierte en "Inicio | Mr.Chispeza" por el template
  description:
    'Servicios eléctricos profesionales en Valparaíso. Instalaciones, mantenimiento preventivo, proyectos eléctricos y paneles solares para industrias, comercios y hogares.',
  openGraph: {
    title: 'Mr.Chispeza - Servicios Eléctricos en Valparaíso',
    description: 'Expertos en instalaciones eléctricas y proyectos de energía',
    images: ['/og-image.jpg'],
  },
}

/**
 * Página principal - Home
 *
 * Esta página actúa como orquestador, componiendo las diferentes secciones
 * del sitio. Cada sección es un componente independiente y reutilizable.
 */
export default function HomePage() {
  return (
    <main className="relative min-h-screen scroll-smooth font-sans text-slate-800">
      <Header />

      <Hero />
      <CompanySection />
      <ServicesGrid />
      <BannerParallax />
      <SectorsSection />
      <GallerySection />
      <CTASection />
      <ContactSection />

      <Footer />
    </main>
  );
}