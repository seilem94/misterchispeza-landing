'use client'

import { motion } from 'framer-motion'
import { Card, Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
import type { RemodelacionContactData } from '@/lib/constants/remodelacion-antiguas'

interface CTARemodelacionProps {
  data: RemodelacionContactData
  whatsappMessage: string
}

export function CTARemodelacion({
  data,
  whatsappMessage,
}: CTARemodelacionProps) {
  const reveal = useAdsReveal()
  return (
    <Section
      id={data.id}
      variant="gradient"
      className="scroll-mt-6 pb-28 pt-20 text-slate-900 sm:pt-24"
    >
      <Container>
        <motion.div {...reveal}>
          <Card
            padding="lg"
            className={cn(
              adsStyles.card,
              'mx-auto max-w-4xl border-slate-200 py-12 text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none sm:px-12 sm:py-16',
            )}
          >
            <p className="mb-6 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
              {data.eyebrow}
            </p>
            <h2
              className={cn(
                adsStyles.heading,
                'mb-4 font-extrabold sm:text-3xl md:text-4xl lg:text-5xl',
              )}
            >
              {data.title}
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mb-10 mt-6 h-1 w-16 rounded-full bg-amber-500"
            />
            <p className={adsStyles.description}>{data.description}</p>
            <WhatsAppCTAButton label={data.ctaText} message={whatsappMessage} />
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
