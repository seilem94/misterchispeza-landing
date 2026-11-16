import { Phone, Mail, MapPin } from 'lucide-react'
import { Section, Container } from '@/app/components/ui'
import ContactForm from '@/app/components/ContactForm'
import { homeContactContent } from '@/lib/constants/navigation'

export function ContactSection() {
  return (
    <Section
      id="contacto"
      className="scroll-mt-24 bg-linear-to-br from-sky-900/70 to-blue-950/60 py-10 text-white md:scroll-mt-28 md:py-16"
      variant="dark"
    >
      <Container className="flex flex-col gap-6 md:gap-12 md:py-16 lg:flex-row lg:items-start">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h3 className="text-3xl font-bold sm:text-4xl">
            {homeContactContent.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-slate-300 md:mt-4 md:text-base">
            {homeContactContent.description}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 text-left md:mt-0 md:block md:text-center lg:text-left">
            {homeContactContent.zones.map(({ title, href, contact }) => (
              <div key={href} className="min-w-0">
                <h4 className="text-sm font-bold text-slate-400 md:mt-10 md:text-base">
                  {title}
                </h4>
                <ul className="mt-2 flex flex-col items-start gap-2 text-xs md:inline-flex md:gap-3 md:text-sm">
                  <li className="flex items-center gap-2">
                    <Phone
                      className="h-4 w-4 shrink-0 text-emerald-500"
                      aria-hidden="true"
                    />
                    <a
                      href={href}
                      className="inline-flex min-h-11 items-center font-medium transition-colors hover:text-emerald-400 hover:underline md:min-h-0"
                    >
                      {contact.phone}
                    </a>
                  </li>
                  <li className="hidden items-center gap-2 md:flex">
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {contact.email}
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {contact.location}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 flex items-center justify-center gap-2 text-xs md:hidden">
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            {homeContactContent.zones[0].contact.email}
          </p>
        </div>

        <div data-home-contact-form tabIndex={-1} className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </Container>
    </Section>
  )
}
