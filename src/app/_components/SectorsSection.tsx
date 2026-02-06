import React from 'react'
import { Section, Container } from '@/app/components/ui'
import { sectors } from '@/lib/constants/sectors'
import { SectorCard } from './SectorCard'

/**
 * Sección de sectores a los que prestamos servicio
 */
export function SectorsSection() {
  return (
    <Section id="sectores" variant="default">
      <Container className="py-20">
        <h3 className="text-center text-2xl font-bold sm:text-3xl">
          Soluciones eléctricas para diversos sectores
        </h3>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {sectors.map((sector, index) => (
            <SectorCard 
              key={sector.id} 
              sector={sector} 
              index={index} 
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}