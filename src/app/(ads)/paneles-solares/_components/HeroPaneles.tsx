'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sun } from 'lucide-react'
import { Button, Container, Section } from '@/app/components/ui'
import { WhatsAppCTAButton } from '@/app/components/WhatsAppCTAButton'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { heroData, panelesContactData } from '@/lib/constants/paneles-solares'
import { getIconComponent } from '@/lib/utils/get-icon'

export function HeroPaneles() {
  const reveal = useAdsReveal()

  return (
    <Section
      id={heroData.id}
      variant="dark"
      className="relative isolate flex min-h-[75vh] flex-col justify-center overflow-hidden py-10 text-white sm:py-16 lg:min-h-[85vh] lg:py-20"
    >
      <Image
        src={heroData.background.src}
        alt={heroData.background.alt}
        fill
        sizes="100vw"
        preload
        quality={85}
        className="object-cover object-bottom"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/20 to-slate-950/70"
      />
      <Container className="relative flex flex-col justify-center">
        <motion.div {...reveal} className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
            <Sun className="h-4 w-4 text-amber-300" aria-hidden="true" />
            {heroData.eyebrow}
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heroData.title}{' '}
            <span className="block sm:inline">{heroData.highlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg lg:text-xl">
            {heroData.description}
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <WhatsAppCTAButton
              label={heroData.ctaText}
              message={panelesContactData.whatsappMessage}
              className="shadow-lg shadow-amber-500/20"
            />
            <Button
              href={heroData.secondaryCta.href}
              variant="ghost"
              size="lg"
              className="w-full border-white/40 bg-slate-900/30 text-white hover:bg-white/10 sm:w-auto"
            >
              {heroData.secondaryCta.label}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {heroData.features.map((feature) => {
              const Icon = getIconComponent(feature.icon)
              return (
                <li
                  key={feature.id}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-amber-300"
                    aria-hidden="true"
                  />
                  <span>
                    {feature.label}
                    {feature.detail && (
                      <span className="hidden lg:inline">
                        {' '}
                        {feature.detail}
                      </span>
                    )}
                  </span>
                </li>
              )
            })}
          </ul>
        </motion.div>
      </Container>
    </Section>
  )
}
