"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container, Button } from "@/app/components/ui";

/**
 * Banner con efecto parallax en la imagen de fondo
 */
export function BannerParallax() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section className="relative overflow-hidden">
      <div ref={targetRef} className="relative"></div>

      {/* Capa de fondo con parallax */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute left-0 right-0 top-[-40%] h-[200%] will-change-transform"
        >
          <Image
            src="https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600"
            alt="Profesionales eléctricos"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </motion.div>
      </div>

      {/* Contenido */}
      <Container className="relative z-10 py-20 text-white text-center">
        <h3 className="text-2xl font-bold sm:text-3xl">
          Somos los profesionales que necesita su proyecto
        </h3>
        <p className="mt-2 max-w-2xl mx-auto text-slate-200">
          Seguridad, cumplimiento normativo y entrega a tiempo.
        </p>
        <div className="mt-6">
          <Button variant="primary" size="md" icon href="#contacto">
            Solicitar cotización
          </Button>
        </div>
      </Container>
    </section>
  );
}
