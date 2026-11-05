import type { Metadata } from 'next'
import { HeroViviendasNuevas } from './_components/HeroViviendasNuevas'
import { DesafiosRurales } from './_components/DesafiosRurales'
import { SolucionesViviendasNuevas } from './_components/SolucionesViviendasNuevas'
import { EtapasObraNueva } from './_components/EtapasObraNueva'
import { ProyectosViviendasNuevas } from './_components/ProyectosViviendasNuevas'
import { FAQViviendasNuevas } from './_components/FAQViviendasNuevas'
import { CTAViviendasNuevas } from './_components/CTAViviendasNuevas'
import { viviendasNuevasMetadata } from '@/lib/constants/viviendas-nuevas'

export const metadata: Metadata = viviendasNuevasMetadata

export default function ViviendasNuevasPage() {
  return (
    <main className="min-h-screen">
      <HeroViviendasNuevas />
      <DesafiosRurales />
      <SolucionesViviendasNuevas />
      <EtapasObraNueva />
      <ProyectosViviendasNuevas />
      <FAQViviendasNuevas />
      <CTAViviendasNuevas />
    </main>
  )
}
