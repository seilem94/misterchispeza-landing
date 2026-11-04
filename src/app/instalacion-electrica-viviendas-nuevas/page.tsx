import type { Metadata } from 'next'
import { HeaderViviendasNuevas } from './_components/HeaderViviendasNuevas'
import { HeroViviendasNuevas } from './_components/HeroViviendasNuevas'
import { DesafiosRurales } from './_components/DesafiosRurales'
import { SolucionesViviendasNuevas } from './_components/SolucionesViviendasNuevas'
import { EtapasObraNueva } from './_components/EtapasObraNueva'
import { ProyectosViviendasNuevas } from './_components/ProyectosViviendasNuevas'
import { FAQViviendasNuevas } from './_components/FAQViviendasNuevas'
import { CTAViviendasNuevas } from './_components/CTAViviendasNuevas'
import { Footer } from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Instalación Eléctrica para Viviendas Nuevas y Parcelas',
  description:
    'Ingeniería y ejecución eléctrica para casas nuevas, parcelas de agrado y cabañas en la Región de Valparaíso. Empalmes de larga distancia, alimentadores sin caída de tensión y certificación SEC TE1.',
  keywords: [
    'instalacion electrica para viviendas nuevas',
    'instalacion electrica casas nuevas',
    'electricidad parcelas rurales',
    'empalme electrico parcela Valparaiso',
    'tendido subterraneo alimentador',
    'electricista certificado parcelas Casablanca',
    'electricista parcelas Limache Olmue',
    'certificacion SEC TE1 casa nueva',
    'proyectos electricos desde cero',
  ],
  openGraph: {
    title: 'Instalación Eléctrica para Viviendas Nuevas y Parcelas - Mr.Chispeza',
    description:
      'Soluciones eléctricas profesionales para obras desde cero y parcelas rurales con certificación SEC TE1.',
    images: ['/hero.webp'],
  },
}

export default function ViviendasNuevasPage() {
  return (
    <main className="min-h-screen">
      <HeaderViviendasNuevas />
      <HeroViviendasNuevas />
      <DesafiosRurales />
      <SolucionesViviendasNuevas />
      <EtapasObraNueva />
      <ProyectosViviendasNuevas />
      <FAQViviendasNuevas />
      <CTAViviendasNuevas />
      <Footer />
    </main>
  )
}
