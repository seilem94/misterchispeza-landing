'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import type { RemodelacionHeroData } from '@/lib/constants/remodelacion-antiguas'

interface RemodelacionHeroProps {
  data: RemodelacionHeroData
  whatsappMessage: string
}

export function RemodelacionHero({
  data,
  whatsappMessage,
}: RemodelacionHeroProps) {
  const reveal = useAdsReveal()
  return (
    <Section
      id={data.id}
      className="relative overflow-hidden border-b border-slate-100 py-10 sm:py-14 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl"
      />
      <Container className="relative">
        <motion.div {...reveal} className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-800 sm:text-sm">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            {data.eyebrow}
          </p>
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
            {data.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {data.description}
          </p>
          <div className="mt-7">
            <WhatsAppCTAButton label={data.ctaText} message={whatsappMessage} />
          </div>
          <div className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-3 text-sm leading-6 text-slate-600">
            <ShieldCheck className={adsStyles.icon} aria-hidden="true" />
            <p>{data.socialProof}</p>
          </div>
          <p className="mx-auto mt-3 max-w-xl px-16 text-xs leading-5 text-slate-500 sm:px-0">
            {data.referencesNote}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
