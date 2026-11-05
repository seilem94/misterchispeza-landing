import type { Metadata } from 'next'
import { HeroRemodelacion } from './_components/HeroRemodelacion'
import { SenalesAlerta } from './_components/SenalesAlerta'
import { SolucionesBeneficios } from './_components/SolucionesBeneficios'
import { ProcesoRemodelacion } from './_components/ProcesoRemodelacion'
import { ProyectosRemodelacion } from './_components/ProyectosRemodelacion'
import { FAQRemodelacion } from './_components/FAQRemodelacion'
import { CTARemodelacion } from './_components/CTARemodelacion'
import { remodelacionMetadata } from '@/lib/constants/remodelacion-antiguas'

export const metadata: Metadata = remodelacionMetadata

export default function RemodelacionInstalacionesPage() {
  return (
    <main className="min-h-screen">
      <HeroRemodelacion />
      <SenalesAlerta />
      <SolucionesBeneficios />
      <ProcesoRemodelacion />
      <ProyectosRemodelacion />
      <FAQRemodelacion />
      <CTARemodelacion />
    </main>
  )
}
