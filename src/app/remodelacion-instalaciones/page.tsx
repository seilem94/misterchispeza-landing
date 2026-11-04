import type { Metadata } from 'next'
import { HeaderRemodelacion } from './_components/HeaderRemodelacion'
import { HeroRemodelacion } from './_components/HeroRemodelacion'
import { SenalesAlerta } from './_components/SenalesAlerta'
import { SolucionesBeneficios } from './_components/SolucionesBeneficios'
import { ProcesoRemodelacion } from './_components/ProcesoRemodelacion'
import { ProyectosRemodelacion } from './_components/ProyectosRemodelacion'
import { FAQRemodelacion } from './_components/FAQRemodelacion'
import { CTARemodelacion } from './_components/CTARemodelacion'
import { Footer } from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Remodelación de Instalaciones Antiguas',
  description:
    'Renovación integral y segura de instalaciones eléctricas antiguas en la Región de Valparaíso. Reemplazo de cableado vetusto, nuevos tableros con salvavidas y certificación SEC TE1.',
  keywords: [
    'remodelación de instalaciones antiguas',
    'recableado casas antiguas',
    'cambio cable tela Valparaíso',
    'tablero eléctrico con diferencial',
    'aumento de capacidad eléctrica',
    'normalización eléctrica SEC',
    'electricista certificado Valparaíso',
    'electricista Viña del Mar',
    'certificación TE1 SEC',
  ],
  openGraph: {
    title: 'Remodelación de Instalaciones Eléctricas Antiguas - Mr.Chispeza',
    description:
      'Protege tu hogar renovando cables antiguos, tableros y protecciones bajo normativa SEC RIC.',
    images: ['/hero.webp'],
  },
}

export default function RemodelacionInstalacionesPage() {
  return (
    <main className="min-h-screen">
      <HeaderRemodelacion />
      <HeroRemodelacion />
      <SenalesAlerta />
      <SolucionesBeneficios />
      <ProcesoRemodelacion />
      <ProyectosRemodelacion />
      <FAQRemodelacion />
      <CTARemodelacion />
      <Footer />
    </main>
  )
}
