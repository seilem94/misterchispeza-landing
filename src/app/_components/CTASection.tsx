import React from "react"
import { Section, Container, Button } from "@/app/components/ui"

/**
 * Sección CTA final antes del contacto
 */
export function CTASection() {
  return (
    <Section id="cta" className="bg-linear-to-br from-amber-400 to-orange-500">
      <Container className="py-16 sm:py-20 lg:py-24 text-center text-white">
        {/* Título responsive */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          ¿Listo para energizar su proyecto?
        </h2>
        
        {/* Descripción responsive */}
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-white/90">
          Envíenos un mensaje y recibirá respuesta hoy mismo.
        </p>
        
        {/* Botón centrado con mejor tamaño */}
        <Button 
          href="#contacto" 
          variant="secondary" 
          size="lg"
          className="w-full sm:w-auto min-w-50"
        >
          Contáctenos
        </Button>
      </Container>
    </Section>
  )
}
