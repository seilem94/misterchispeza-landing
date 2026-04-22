import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Section, Container } from "@/app/components/ui";
import ContactForm from "@/app/components/ContactForm";
import { contactCosta, contactMarga } from "@/lib/constants/navigation";

/**
 * Sección de contacto con información y formulario
 */
export function ContactSection() {
  return (
    <Section id="contacto" className="py-16 text-white" variant="dark">
      <Container className="flex flex-col lg:flex-row lg:items-start gap-12 py-16">
        {/* Información de contacto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl font-bold sm:text-4xl">Contacto</h3>
          
          <p className="mt-4 font-semibold text-slate-300">
            Cuéntanos de tu proyecto y agenda una visita técnica.
          </p>
          <h4 className="text-md font-bold mt-10 text-slate-400">Quinta Costa</h4>
            <ul className="mt-2 inline-flex flex-col items-start gap-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contactCosta.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contactCosta.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {contactCosta.location}
              </li>
            </ul>

            <h4 className="text-md font-bold mt-10 text-slate-400">Marga Marga</h4>
                        <ul className="mt-2 inline-flex flex-col items-start gap-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contactMarga.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contactMarga.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {contactMarga.location}
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
