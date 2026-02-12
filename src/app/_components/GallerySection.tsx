"use client";

import React from "react";
import Image from "next/image";
import { Section, Container } from "@/app/components/ui";
import { galleryImages } from "@/lib/constants/gallery";

/**
 * Sección de galería de imágenes
 */
export function GallerySection() {
  return (
    <Section id="galeria" className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        {/* Título responsive */}
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Galería de Proyectos
        </h2>

        {/* Grid responsive optimizado */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
                className="object-cover transition-transform duration-300 md:group-hover:scale-110"
                unoptimized
                priority={index < 3}
              />
                <div className="
                  absolute inset-0 
                  bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent
                  opacity-100 md:opacity-0
                  transition-opacity duration-300 
                  md:group-hover:opacity-100
                ">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-semibold text-white">
                    {image.alt}
                  </p>
                  {image.category && (
                    <span className="mt-1 inline-block px-2 py-0.5 text-xs font-medium text-white/90 bg-white/20 rounded-full capitalize">
                      {image.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback si no hay imágenes */}
        {galleryImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No hay imágenes disponibles en este momento.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
