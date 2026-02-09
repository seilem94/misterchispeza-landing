import React from "react";
import { Section, Container, Button } from "@/app/components/ui";

/**
 * Sección CTA final antes del contacto
 */
export function CTASection() {
  return (
    <Section variant="default">
      <Container className="py-16 text-center">
        <h3 className="text-2xl font-bold sm:text-3xl">
          ¿Listo para energizar su proyecto?
        </h3>
        <p className="mt-3 text-slate-600">
          Envíenos un mensaje y recibirá respuesta hoy mismo.
        </p>
        <div className="mt-6">
          <Button variant="primary" size="md" icon href="#contacto">
            Contáctenos
          </Button>
        </div>
      </Container>
    </Section>
  );
}
