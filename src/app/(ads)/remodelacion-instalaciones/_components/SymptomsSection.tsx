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
import type {
  RemodelacionSymptom,
  RemodelacionSymptomsData,
} from '@/lib/constants/remodelacion-antiguas'

function SymptomCard({ item }: { item: RemodelacionSymptom }) {
  return (
    <Card
      className={cn(
        adsStyles.card,
        'h-auto flex-row items-start gap-3 border-slate-200 p-4 text-left transition-all duration-300 md:h-full md:flex-col md:items-center md:gap-0 md:p-8 md:text-center md:hover:-translate-y-1 md:hover:shadow-xl motion-reduce:transition-none motion-reduce:md:hover:translate-y-0',
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
  )
}

export function SymptomsSection({
  data,
  whatsappMessage,
}: {
  data: RemodelacionSymptomsData
  whatsappMessage: string
}) {
  const reveal = useAdsReveal()
  const stagger = useAdsStagger()
  const symptomPairs = Array.from(
    { length: Math.ceil(data.items.length / 2) },
    (_, index) => data.items.slice(index * 2, index * 2 + 2),
  )
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
          aria-label={data.title}
          tabIndex={0}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide md:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
        >
          {symptomPairs.map((pair) => (
            <motion.li
              key={pair[0].id}
              variants={stagger.item}
              className="w-[85vw] shrink-0 snap-center flex flex-col gap-3"
            >
              {pair.map((item) => (
                <SymptomCard key={item.id} item={item} />
              ))}
            </motion.li>
          ))}
        </motion.ul>
        <motion.ul
          {...stagger.container}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6"
        >
          {data.items.map((item) => (
            <motion.li key={item.id} variants={stagger.item}>
              <SymptomCard item={item} />
            </motion.li>
          ))}
        </motion.ul>
        <motion.div {...reveal} className="mt-10 text-center">
          <p className="mb-5 text-base leading-7 text-slate-600">
            {data.ctaPrompt}
          </p>
          <WhatsAppCTAButton label={data.ctaText} message={whatsappMessage} />
          <p className="text-xs text-slate-500 mt-2 text-center">
            {data.ctaMicrocopy}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
