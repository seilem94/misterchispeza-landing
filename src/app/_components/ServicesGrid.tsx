import React from "react";
import { Section, Container } from "@/app/components/ui";
import { services } from "@/lib/constants/services";
import { ServiceCard } from "./ServiceCard";

/**
 * Sección de grid de servicios
 */
export function ServicesGrid() {
  return (
    <Section id="servicios" variant="default">
      <Container className="py-20">
        <h3 className="text-center text-2xl font-bold sm:text-3xl">
          Servicios Eléctricos y Proyectos
        </h3>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
