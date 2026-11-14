'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { AdsVideoPlayer, Card, Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
import type {
  ViviendasNuevasHeroData,
  ViviendasNuevasVideoData,
} from '@/lib/constants/viviendas-nuevas'

interface ViviendasNuevasHeroProps {
  data: ViviendasNuevasHeroData
  video: ViviendasNuevasVideoData
  whatsappMessage: string
}

export function ViviendasNuevasHero({
  data,
  video,
  whatsappMessage,
}: ViviendasNuevasHeroProps) {
  const reveal = useAdsReveal()
  return (
    <Section
      id={data.id}
      variant="dark"
      className="relative overflow-hidden border-b border-blue-950 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 py-12 text-white sm:py-16 lg:py-20"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div {...reveal} className="min-w-0 text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-blue-950/40 px-4 py-2 text-xs font-semibold text-blue-100 sm:text-sm">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
              aria-hidden="true"
            />
            {data.eyebrow}
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-[2.75rem]">
            {data.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg lg:mx-0">
            {data.description}
          </p>
          <div className="mt-7">
            <WhatsAppCTAButton
              label={data.ctaText}
              message={whatsappMessage}
              className="shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
            />
          </div>
          <div className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-3 text-sm leading-6 text-blue-100 lg:mx-0 lg:justify-start">
            <ShieldCheck
              className={cn(adsStyles.icon, 'text-amber-400')}
              aria-hidden="true"
            />
            <p>{data.socialProof}</p>
          </div>
        </motion.div>
        <motion.figure
          {...reveal}
          id={video.id}
          className="min-w-0 scroll-mt-6"
        >
          <Card
            padding="sm"
            className="rounded-3xl border-blue-200/20 bg-slate-950/40 shadow-2xl shadow-slate-950/40"
          >
            <AdsVideoPlayer
              src={video.src}
              poster={video.poster}
              label={video.label}
            />
          </Card>
        </motion.figure>
      </Container>
    </Section>
  )
}
