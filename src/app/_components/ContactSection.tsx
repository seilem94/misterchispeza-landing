import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Section, Container } from "@/app/components/ui";
import ContactForm from "@/app/components/ContactForm";
import { contactInfo } from "@/lib/constants/navigation";

/**
 * Sección de contacto con información y formulario
 */
export function ContactSection() {
  return (
    <Section id="contacto" className="py-16 text-white" variant="dark">
      <Container className="flex flex-col lg:flex-row lg:items-start gap-12 py-16">
        {/* Información de contacto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl font-bold sm:text-4xl">Contacto</h3>
          
          <p className="mt-2 text-slate-300">
            Cuéntanos de tu proyecto y agenda una visita técnica.
          </p>

          <ul className="mt-6 inline-flex flex-col items-start gap-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contactInfo.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contactInfo.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {contactInfo.location}
            </li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
