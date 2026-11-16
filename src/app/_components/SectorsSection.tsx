'use client'

import { useState } from 'react'
import { Section, Container } from '@/app/components/ui'
import { sectors } from '@/lib/constants/sectors'
import { SectorCard } from './SectorCard'

/**
 * Sección de sectores a los que prestamos servicio
 */
export function SectorsSection() {
  const [openId, setOpenId] = useState<string | null>(sectors[0]?.id ?? null)

  return (
    <Section id="sectores" className="bg-slate-50">
      <Container className="py-16 sm:py-20 lg:py-24">
        {/* Título responsive centrado */}
        <h2 className="mb-8 sm:mb-12 lg:mb-16 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Soluciones eléctricas para diversos sectores
        </h2>

        {/* Grid responsive mejorado */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-8">
          {sectors.map((sector, index) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              index={index}
              isOpen={openId === sector.id}
              onToggle={() =>
                setOpenId((current) =>
                  current === sector.id ? null : sector.id,
                )
              }
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
