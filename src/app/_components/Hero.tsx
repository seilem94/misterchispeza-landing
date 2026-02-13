"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Section, Container, Button } from "@/app/components/ui"

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
          className="object-cover object-center"
          quality={70}
        />
        {/* Overlay más oscuro en mobile para mejor legibilidad */}
        <div className="absolute inset-0 bg-slate-900/70 sm:bg-slate-900/60" />
      </div>

      {/* Contenido */}
      <Container className="relative z-10 py-20 sm:py-28 md:py-36 lg:py-44 text-white">
        {/* Título con mejor escalado responsive */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Soluciones{" "}
          <span className="text-amber-400">Eléctricas</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          y <span className="text-amber-400">Electrónicas</span>
        </motion.h1>

        {/* Descripción con mejor espaciado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className="mt-4 sm:mt-6 max-w-2xl font-bold text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed"
        >
          Para industrias, comercios y residenciales.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Servicio preventivo y correctivo.
        </motion.p>

        {/* Botones responsive - Stack en mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5,
          }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Button 
            variant="primary" 
            size="md" 
            icon 
            href="#empresa"
            className="w-full sm:w-auto justify-center"
          >
            Conózcanos
          </Button>
          <Button 
            variant="ghost" 
            size="md" 
            href="#contacto"
            className="w-full sm:w-auto justify-center"
          >
            Solicitar cotización
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}
