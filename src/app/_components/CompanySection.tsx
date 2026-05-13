import React from "react";
import { Section, Container, Button } from "@/app/components/ui";

/**
 * Sección de información de la empresa
 */
export function CompanySection() {
  return (
    <Section id="empresa" variant="default" className="relative bg-gradient-to-br from-sky-800/70 to-blue-950/60">
      <Container className="py-20 ">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-4xl text-amber-400">
            Somos expertos en Instalaciones Eléctricas
          </h2>
          <p className="mt-4 text-amber-100 font-semibold">
            Ingeniería y diseño de instalaciones; servicio preventivo y
            correctivo de instalaciones eléctricas, para que su energía opere
            eficientemente.
          </p>
          <div className="mt-6">
          <Button 
            variant="primary" 
            size="md" 
            icon 
            href="#empresa"
            className="w-full sm:w-auto justify-center"
          >
            Contáctenos
          </Button>
          </div>
        </div>
      </Container>

      {/* Decoración inferior */}
      <div className="absolute inset-x-0 -bottom-10 h-16 bg-white [clip-path:polygon(0_0,100%_100%,0_100%)]" />
    </Section>
  );
}
