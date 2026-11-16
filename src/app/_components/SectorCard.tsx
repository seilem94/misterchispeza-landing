'use client'

import { motion } from 'framer-motion'
import type { Sector } from '@/lib/types'
import { Card, CardContent } from '@/app/components/ui'
import { getIconComponent } from '@/lib/utils/get-icon'
import { HomeMobileAccordion } from './HomeMobileAccordion'

interface SectorCardProps {
  sector: Sector
  index: number
  isOpen: boolean
  onToggle: () => void
}

/**
 * Tarjeta individual de sector
 */
export function SectorCard({
  sector,
  index,
  isOpen,
  onToggle,
}: SectorCardProps) {
  const IconComponent = getIconComponent(sector.icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card hover className="group flex h-full flex-col p-0 md:p-6">
        <HomeMobileAccordion
          icon={
            <IconComponent
              className="h-5 w-5 sm:h-6 sm:w-6"
              aria-hidden="true"
            />
          }
          title={sector.title}
          isOpen={isOpen}
          onToggle={onToggle}
        >
          <CardContent className="grow">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {sector.description}
            </p>
          </CardContent>
        </HomeMobileAccordion>
      </Card>
    </motion.div>
  )
}
