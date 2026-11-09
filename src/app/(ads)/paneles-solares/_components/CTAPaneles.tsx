import { Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { panelesContactData } from '@/lib/constants/paneles-solares'

export function CTAPaneles() {
  return (
    <Section id={panelesContactData.id} variant="accent" className="py-20">
      <Container className="max-w-3xl text-center">
        <h2 className="mb-10 text-3xl font-bold text-slate-900 sm:text-4xl">
          {panelesContactData.title}
        </h2>
        <p className="mb-8 text-lg text-slate-600">
          {panelesContactData.description}
        </p>
        <WhatsAppCTAButton
          label={panelesContactData.ctaText}
          message={panelesContactData.whatsappMessage}
        />
      </Container>
    </Section>
  )
}
