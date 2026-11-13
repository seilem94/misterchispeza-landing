'use client'

import { motion } from 'framer-motion'
import { AdsVideoPlayer, Card, Container, Section } from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import type { AdsVideoSectionData } from '@/lib/types/ads'
import { cn } from '@/lib/utils/cn'

export function AdsVideoSection({ data }: { data: AdsVideoSectionData }) {
  const reveal = useAdsReveal()

  return (
    <Section
      id={data.id}
      variant="accent"
      className={cn(adsStyles.section, 'py-20')}
    >
      <Container>
        <motion.div {...reveal}>
          <h2
            className={cn(
              adsStyles.heading,
              'mb-4 font-extrabold md:text-4xl lg:text-5xl',
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
        <motion.figure {...reveal}>
          <Card
            padding="sm"
            className="rounded-3xl border-slate-200 bg-white shadow-xl"
          >
            <AdsVideoPlayer
              src={data.src}
              poster={data.poster}
              label={data.label}
            />
          </Card>
        </motion.figure>
      </Container>
    </Section>
  )
}
