"use client"

import React from "react"
import { motion } from "framer-motion"
import type { Sector } from "@/lib/types"
import { getIconComponent } from "@/lib/utils/get-icon"

interface SectorCardProps {
  sector: Sector
  index: number
}

/**
 * Tarjeta individual de sector
 */
export function SectorCard({ sector, index }: SectorCardProps) {
  const IconComponent = getIconComponent(sector.icon)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-all hover:border-amber-400 hover:shadow-lg"
    >
      {/* Icono responsive */}
      <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 sm:p-4 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      
      {/* Título responsive */}
      <h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-900">
        {sector.title}
      </h3>
      
      {/* Descripción responsive */}
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        {sector.description}
      </p>
    </motion.div>
  )
}
