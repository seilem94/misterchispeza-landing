'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { panelesContactData } from '@/lib/constants/paneles-solares'
import { cn } from '@/lib/utils/cn'

export function CTAPaneles() {
  const reveal = useAdsReveal()

  return (
    <Section
      id={panelesContactData.id}
      variant="dark"
      className="scroll-mt-6 pb-28 pt-20 sm:pt-24"
    >
      <Container size="md">
        <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {panelesContactData.title}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mb-10 mt-6 h-1 w-16 rounded-full bg-amber-500"
          />
          <p className={cn(adsStyles.description, 'mb-10 text-slate-300')}>
            {panelesContactData.description}
          </p>
          <WhatsAppCTAButton
            label={panelesContactData.ctaText}
            message={panelesContactData.whatsappMessage}
            className="shadow-lg shadow-amber-500/20"
          />
        </motion.div>
      </Container>
    </Section>
  )
}
