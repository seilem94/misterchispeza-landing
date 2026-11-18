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
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { site, siteSocialImage } from '@/shared/config/site'
import { homeSeoContent, homeBusinessJsonLd } from '@/lib/constants/home'

export const metadata: Metadata = {
  title: {
    absolute: homeSeoContent.title,
  },
  description: homeSeoContent.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    siteName: site.name,
    url: '/',
    title: homeSeoContent.title,
    description: homeSeoContent.description,
    images: [{ ...siteSocialImage, type: 'image/webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: site.twitter,
    title: homeSeoContent.title,
    description: homeSeoContent.description,
    images: [siteSocialImage],
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
      <script
        id="home-electrician-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeBusinessJsonLd).replace(/</g, '\\u003c'),
        }}
      />
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
      <WhatsAppWidget />
    </main>
  );
}
