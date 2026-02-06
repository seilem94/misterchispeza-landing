import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Section, Container } from '@/app/components/ui'
import ContactForm from '@/app/components/ContactForm'
import { contactInfo } from '@/lib/constants/navigation'

/**
 * Sección de contacto con información y formulario
 */
export function ContactSection() {
  return (
    <Section id="contacto" variant="dark">
      <Container className="grid gap-10 py-16 sm:grid-cols-2">
        {/* Información de contacto */}
        <div>
          <h3 className="text-2xl font-bold sm:text-3xl">Contacto</h3>
          <p className="mt-2 text-slate-300">
            Cuéntanos de tu proyecto y agenda una visita técnica.
          </p>

          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden />
              {contactInfo.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden />
              {contactInfo.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden />
              {contactInfo.location}
            </li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <ContactForm />
      </Container>
    </Section>
  )
}