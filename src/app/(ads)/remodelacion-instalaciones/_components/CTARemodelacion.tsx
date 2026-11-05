import ContactForm from '@/app/components/ContactForm'
import { Card, Container, Section } from '@/app/components/ui'
import type { RemodelacionContactData } from '@/lib/constants/remodelacion-antiguas'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'

interface CTARemodelacionProps {
  data: RemodelacionContactData
  whatsappMessage: string
}

export function CTARemodelacion({
  data,
  whatsappMessage,
}: CTARemodelacionProps) {
  return (
    <Section
      id={data.id}
      variant="dark"
      className="scroll-mt-6 pb-28 pt-12 sm:pt-16"
    >
      <Container className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold text-amber-300">
            {data.eyebrow}
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {data.title}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-200">
            {data.description}
          </p>
          <div className="mt-6">
            <WhatsAppCTAButton label={data.ctaText} message={whatsappMessage} />
          </div>
        </div>
        <Card className="border-slate-700 bg-slate-900" padding="sm">
          <h3 className="text-xl font-bold text-white">{data.formTitle}</h3>
          <p className="mb-6 mt-3 text-sm leading-relaxed text-slate-200">
            {data.formDescription}
          </p>
          <ContactForm />
        </Card>
      </Container>
    </Section>
  )
}
