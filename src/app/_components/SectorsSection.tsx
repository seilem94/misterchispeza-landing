"use client"

import { motion } from "framer-motion"
import { Section, Container } from "@/app/components/ui"
import { sectors } from "@/lib/constants/sectors"
import { SectorCard } from "./SectorCard"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

/**
 * Sección de sectores a los que prestamos servicio
 */
export function SectorsSection() {
  return (
    <Section id="sectores" className="bg-slate-50">
      <Container className="py-16 sm:py-20 lg:py-24">
        {/* Título responsive centrado */}
        <h2 className="mb-8 sm:mb-12 lg:mb-16 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Soluciones eléctricas para diversos sectores
        </h2>
        
        {/* Grid responsive mejorado */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <SectorCard key={sector.id} sector={sector} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
