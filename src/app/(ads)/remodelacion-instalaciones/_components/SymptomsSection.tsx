'use client'

import { motion } from 'framer-motion'
import { CircleAlert } from 'lucide-react'
import { Card, Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import {
  useAdsReveal,
  useAdsStagger,
} from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
import type { RemodelacionSymptomsData } from '@/lib/constants/remodelacion-antiguas'

export function SymptomsSection({
  data,
  whatsappMessage,
}: {
  data: RemodelacionSymptomsData
  whatsappMessage: string
}) {
  const reveal = useAdsReveal()
  const stagger = useAdsStagger()
  return (
    <Section
      id={data.id}
      variant="default"
      className={cn(adsStyles.section, 'py-20')}
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
        <motion.ul
          {...stagger.container}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {data.items.map((item) => (
            <motion.li key={item.id} variants={stagger.item}>
              <Card
                className={cn(
                  adsStyles.card,
                  'flex-row items-start gap-4 border-slate-200 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:flex-col md:items-center md:gap-0 md:p-8 md:text-center',
                )}
                padding="sm"
              >
                <span
                  className={cn(
                    adsStyles.iconBadge,
                    'mx-0 mb-0 h-10 w-10 rounded-xl md:mx-auto md:mb-6 md:h-16 md:w-16 md:rounded-2xl',
                  )}
                >
                  <CircleAlert className={adsStyles.icon} aria-hidden="true" />
                </span>
                <p className="min-w-0 flex-1 text-base font-semibold leading-7 text-slate-900">
                  {item.text}
                </p>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div {...reveal} className="mt-10 text-center">
          <p className="mb-5 text-base leading-7 text-slate-600">
            {data.ctaPrompt}
          </p>
          <WhatsAppCTAButton label={data.ctaText} message={whatsappMessage} />
        </motion.div>
      </Container>
    </Section>
  )
}
