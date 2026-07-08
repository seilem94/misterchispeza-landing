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
    <Section id="contacto" className="py-16 text-white bg-linear-to-br from-sky-900/70 to-blue-950/60" variant="dark">
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
                <Phone className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <a
                  href="/gracias?to=whatsapp&zone=costa"
                  className="hover:text-emerald-400 hover:underline transition-colors font-medium"
                >
                  {contactCosta.phone}
                </a>
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
                <Phone className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <a
                  href="/gracias?to=whatsapp&zone=marga"
                  className="hover:text-emerald-400 hover:underline transition-colors font-medium"
                >
                  {contactMarga.phone}
                </a>
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
