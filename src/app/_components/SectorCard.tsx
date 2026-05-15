"use client"

import { motion } from "framer-motion"
import type { Sector } from "@/lib/types"
import { Card, CardHeader, CardContent } from "@/app/components/ui"
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
      className="h-full"
    >
      <Card hover className="group h-full flex flex-col">
        <CardHeader
          icon={<IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />}
          title={sector.title}
          className="text-lg sm:text-xl"
        />
        
        <CardContent className="grow">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {sector.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
