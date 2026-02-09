import React from "react";
import { Section, Container } from "@/app/components/ui";

/**
 * Sección de información de la empresa
 */
export function CompanySection() {
  return (
    <Section id="empresa" variant="gradient" className="relative">
      <Container className="py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Somos expertos en Instalaciones Eléctricas
          </h2>
          <p className="mt-4 text-amber-100">
            Ingeniería y diseño de instalaciones; servicio preventivo y
            correctivo de instalaciones eléctricas, para que su energía opere
            eficientemente.
          </p>
          <div className="mt-6">
            <a
              href="#contacto"
              className="inline-block rounded-xl bg-white px-5 py-3 font-semibold text-amber-700 shadow-lg hover:-translate-y-px transition-transform"
            >
              Contáctenos
            </a>
          </div>
        </div>
      </Container>

      {/* Decoración inferior */}
      <div className="absolute inset-x-0 -bottom-10 h-16 bg-white [clip-path:polygon(0_0,100%_100%,0_100%)]" />
    </Section>
  );
}
