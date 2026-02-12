import type { Metadata } from 'next'
import { HeroPaneles } from './_components/HeroPaneles'
import { BeneficiosPaneles } from './_components/BeneficiosPaneles'
import { ProcesoInstalacion } from './_components/ProcesoInstalacion'
import { PortafolioPaneles } from './_components/PortafolioPaneles'
import { CTAPaneles } from './_components/CTAPaneles'
import { HeaderPaneles } from "@/app/paneles-solares/_components/HeaderPaneles";
import { Footer } from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Instalación de Paneles Solares',
  description:
    'Instalación profesional de paneles solares fotovoltaicos. Reduce tu factura eléctrica hasta un 90%. Proyectos residenciales, comerciales e industriales.',
  keywords: [
    'instalación paneles solares',
    'energía solar',
    'paneles fotovoltaicos',
    'ahorro energético',
    'energía renovable',
    'instalador certificado',
  ],
  openGraph: {
    title: 'Instalación de Paneles Solares - Mr.Chispeza',
    description: 'Reduce tu factura eléctrica con energía solar profesional',
    images: ['/og-paneles-solares.jpg'],
  },
}

export default function PanelesSolaresPage() {
  return (
    <main className="min-h-screen">
      <HeaderPaneles />

      <HeroPaneles />
      <BeneficiosPaneles />      
      <ProcesoInstalacion />
      <PortafolioPaneles />
      <CTAPaneles />      

      <Footer />
    </main>
  )
}
