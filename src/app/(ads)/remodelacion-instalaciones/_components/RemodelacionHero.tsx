import { ShieldCheck } from 'lucide-react'
import { Container, Section } from '@/app/components/ui'
import type { RemodelacionHeroData } from '@/lib/constants/remodelacion-antiguas'
import { RemodelacionWhatsAppButton } from './RemodelacionWhatsAppButton'

interface RemodelacionHeroProps {
  data: RemodelacionHeroData
  whatsappMessage: string
}

export function RemodelacionHero({
  data,
  whatsappMessage,
}: RemodelacionHeroProps) {
  return (
    <Section id={data.id} variant="dark" className="py-10 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold text-amber-300">
            {data.eyebrow}
          </p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            {data.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {data.description}
          </p>
          <div className="mt-6">
            <RemodelacionWhatsAppButton
              label={data.ctaText}
              message={whatsappMessage}
            />
          </div>
          <p className="mt-5 flex max-w-2xl items-start gap-2 text-sm text-slate-200">
            <ShieldCheck
              className="h-5 w-5 shrink-0 text-amber-300"
              aria-hidden="true"
            />
            <span>{data.socialProof}</span>
          </p>
          <p className="mt-2 text-xs text-slate-300">{data.referencesNote}</p>
        </div>
      </Container>
    </Section>
  )
}
