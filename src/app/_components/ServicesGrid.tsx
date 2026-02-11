import React from "react";
import { Section, Container } from "@/app/components/ui";
import { services } from "@/lib/constants/services";
import { ServiceCard } from "./ServiceCard";

/**
 * Sección de grid de servicios
 */
export function ServicesGrid() {
  return (
    <Section id="servicios" className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Soluciones eléctricas integrales para todo tipo de proyectos
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

