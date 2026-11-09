'use client'

import { motion } from 'framer-motion'
import { AdsVideoPlayer, Card, Container, Section } from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'

interface AdsVideoSectionData {
  id: string
  title: string
  description: string
  src: string
  poster: string
  label: string
  pendingNote: string
}

export function AdsVideoSection({ data }: { data: AdsVideoSectionData }) {
  const reveal = useAdsReveal()

  return (
    <Section id={data.id} variant="accent" className={adsStyles.section}>
      <Container size="md">
        <motion.div {...reveal}>
          <h2 className={adsStyles.heading}>{data.title}</h2>
          <p className={adsStyles.description}>{data.description}</p>
        </motion.div>
        <motion.figure {...reveal}>
          <Card padding="sm" className={adsStyles.card}>
            <AdsVideoPlayer
              src={data.src}
              poster={data.poster}
              label={data.label}
            />
          </Card>
          <figcaption className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-slate-500">
            {data.pendingNote}
          </figcaption>
        </motion.figure>
      </Container>
    </Section>
  )
}
