"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section, Container, Button } from "@/app/components/ui";

/**
 * Sección Hero principal con imagen de fondo
 */
export function Hero() {
  return (
    <Section id="inicio" className="relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Mantenimiento eléctrico"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* Contenido */}
      <Container className="relative z-10 py-28 sm:py-36 lg:py-44 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl"
        >
          Soluciones <span className="text-amber-400">Eléctricas</span> <br />y
          <span className="text-amber-400"> Electrónicas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className="mt-6 max-w-2xl text-lg text-slate-200"
        >
          Para industrias, comercios y residenciales. <br /> Servicio preventivo
          y correctivo.
        </motion.p>

        <div className="mt-8 flex gap-3">
          <Button variant="primary" size="md" icon href="#empresa">
            Conózcanos
          </Button>
          <Button variant="ghost" size="md" href="#contacto">
            Solicitar cotización
          </Button>
        </div>
      </Container>
    </Section>
  );
}
