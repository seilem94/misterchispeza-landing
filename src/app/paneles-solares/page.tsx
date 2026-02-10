import type { Metadata } from 'next'
import { HeroPaneles } from './_components/HeroPaneles'
import { BeneficiosPaneles } from './_components/BeneficiosPaneles'
import { ProcesoInstalacion } from './_components/ProcesoInstalacion'
import { PortafolioPaneles } from './_components/PortafolioPaneles'
import { CTAPaneles } from './_components/CTAPaneles'
import ContactForm from '@/app/components/ContactForm'
import { Container } from '@/app/components/ui'
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
      {/* Formulario de contacto */}
      <section id="contacto-paneles" className="bg-slate-900 py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Solicita tu Cotización
              </h2>
              <p className="text-slate-300">
                Completa el formulario y nos contactaremos contigo en menos de 24 horas
              </p>
            </div>
            <ContactForm />          
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
