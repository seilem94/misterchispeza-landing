import type { Metadata } from 'next'
import { AdsVideoSection } from '@/app/components/AdsVideoSection'
import { HeroPaneles } from './_components/HeroPaneles'
import { BeneficiosPaneles } from './_components/BeneficiosPaneles'
import { ProcesoInstalacion } from './_components/ProcesoInstalacion'
import { PortafolioPaneles } from './_components/PortafolioPaneles'
import { CTAPaneles } from './_components/CTAPaneles'
import {
  panelesSolaresMetadata,
  videoData,
} from '@/lib/constants/paneles-solares'

export const metadata: Metadata = panelesSolaresMetadata

export default function PanelesSolaresPage() {
  return (
    <main className="min-h-screen">
      <HeroPaneles />
      <AdsVideoSection data={videoData} />
      <BeneficiosPaneles />
      <ProcesoInstalacion />
      <PortafolioPaneles />
      <CTAPaneles />
    </main>
  )
}
