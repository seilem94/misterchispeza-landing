'use client'

import { motion } from 'framer-motion'
import { CircleHelp } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Section,
} from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
import type { RemodelacionFearsData } from '@/lib/constants/remodelacion-antiguas'

interface FearsSectionProps {
  data: RemodelacionFearsData
  ctaText: string
  whatsappMessage: string
}

export function FearsSection({
  data,
  ctaText,
  whatsappMessage,
}: FearsSectionProps) {
  const reveal = useAdsReveal()
  return (
    <Section
      id={data.id}
      variant="accent"
      className={cn(adsStyles.section, 'border-y border-slate-200 py-20')}
    >
      <Container>
        <motion.div {...reveal}>
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
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {data.items.map((item) => (
            <motion.div key={item.id} {...reveal}>
              <Card
                className={cn(
                  adsStyles.card,
                  'border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none',
                )}
                padding="lg"
              >
                <span className={adsStyles.iconBadge}>
                  <CircleHelp className={adsStyles.icon} aria-hidden="true" />
                </span>
                <CardHeader title={item.question} />
                <CardContent className="text-base leading-7 text-slate-600">
                  <p>{item.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div {...reveal} className="mt-12 text-center">
          <WhatsAppCTAButton label={ctaText} message={whatsappMessage} />
        </motion.div>
      </Container>
    </Section>
  )
}
