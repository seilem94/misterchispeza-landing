import React from "react";
import Image from "next/image";
import { Section, Container } from "@/app/components/ui";
import { galleryImages } from "@/lib/constants/gallery";

/**
 * Sección de galería de imágenes
 */
export function GallerySection() {
  return (
    <Section id="galeria" variant="accent">
      <Container className="py-16">
        <h3 className="text-center text-2xl font-bold sm:text-3xl">Imágenes</h3>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative h-64 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="rounded-2xl object-cover shadow"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
