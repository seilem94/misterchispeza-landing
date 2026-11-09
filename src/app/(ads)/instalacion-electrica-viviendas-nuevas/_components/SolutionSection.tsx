'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck } from 'lucide-react'
import { Card, Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import type { ViviendasNuevasSolutionData } from '@/lib/constants/viviendas-nuevas'

interface SolutionSectionProps {
  data: ViviendasNuevasSolutionData
  ctaText: string
  whatsappMessage: string
}

export function SolutionSection({
  data,
  ctaText,
  whatsappMessage,
}: SolutionSectionProps) {
  const reveal = useAdsReveal()
  return (
    <Section id={data.id} variant="accent" className={adsStyles.section}>
      <Container size="md">
        <motion.div {...reveal}>
          <Card className={adsStyles.card} padding="lg">
            <span className={adsStyles.iconBadge}>
              <ClipboardCheck className={adsStyles.icon} aria-hidden="true" />
            </span>
            <h2 className={adsStyles.heading}>{data.title}</h2>
            <p className={adsStyles.description}>{data.description}</p>
            <p className="max-w-2xl border-t border-slate-100 pt-6 text-center text-lg font-semibold text-slate-900">
              {data.statement}
            </p>
          </Card>
        </motion.div>
        <motion.div {...reveal} className="mt-12 text-center">
          <WhatsAppCTAButton label={ctaText} message={whatsappMessage} />
        </motion.div>
      </Container>
    </Section>
  )
}
