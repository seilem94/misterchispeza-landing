'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck } from 'lucide-react'
import { Card, Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
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
    <Section
      id={data.id}
      variant="accent"
      className={cn(adsStyles.section, 'border-y border-slate-200 py-20')}
    >
      <Container size="md">
        <motion.div {...reveal}>
          <Card
            className={cn(
              adsStyles.card,
              'border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none',
            )}
            padding="lg"
          >
            <span className={adsStyles.iconBadge}>
              <ClipboardCheck className={adsStyles.icon} aria-hidden="true" />
            </span>
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
