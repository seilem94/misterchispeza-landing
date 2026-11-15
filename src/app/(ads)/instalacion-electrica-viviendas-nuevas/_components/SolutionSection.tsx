'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck } from 'lucide-react'
import { Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
import type { ViviendasNuevasSolutionData } from '@/lib/constants/viviendas-nuevas'

interface SolutionSectionProps {
  data: ViviendasNuevasSolutionData
  whatsappMessage: string
}

export function SolutionSection({
  data,
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
        <motion.div
          {...reveal}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
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
          <p className="max-w-2xl text-lg font-semibold text-slate-900">
            {data.statement}
          </p>
          <div className="mt-10 w-full sm:w-auto">
            <WhatsAppCTAButton label={data.ctaText} message={whatsappMessage} />
            <p className="text-xs text-slate-500 mt-2 text-center">
              {data.ctaMicrocopy}
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
