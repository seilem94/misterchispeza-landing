'use client'

import { motion } from 'framer-motion'
import { Card, Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
import type { ViviendasNuevasContactData } from '@/lib/constants/viviendas-nuevas'

interface CTAViviendasNuevasProps {
  data: ViviendasNuevasContactData
  whatsappMessage: string
}

export function CTAViviendasNuevas({
  data,
  whatsappMessage,
}: CTAViviendasNuevasProps) {
  const reveal = useAdsReveal()
  return (
    <Section
      id={data.id}
      variant="accent"
      className="scroll-mt-6 pb-28 pt-16 sm:pt-24"
    >
      <Container>
        <motion.div {...reveal}>
          <Card
            padding="lg"
            className={cn(
              adsStyles.card,
              'mx-auto max-w-4xl py-12 sm:px-12 sm:py-16',
            )}
          >
            <p className="mb-6 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
              {data.eyebrow}
            </p>
            <h2 className={adsStyles.heading}>{data.title}</h2>
            <p className={adsStyles.description}>{data.description}</p>
            <WhatsAppCTAButton label={data.ctaText} message={whatsappMessage} />
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
