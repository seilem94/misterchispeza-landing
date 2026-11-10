'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/app/components/ui'
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
      variant="dark"
      className="scroll-mt-6 border-t border-slate-800 pb-28 pt-20 sm:pt-24"
    >
      <Container size="md">
        <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex rounded-full border border-amber-400/25 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300">
            {data.eyebrow}
          </p>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {data.title}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mb-10 mt-6 h-1 w-16 rounded-full bg-amber-500"
          />
          <p className={cn(adsStyles.description, 'mb-10 text-slate-300')}>
            {data.description}
          </p>
          <WhatsAppCTAButton
            label={data.ctaText}
            message={whatsappMessage}
            className="shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
          />
        </motion.div>
      </Container>
    </Section>
  )
}
