'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Section,
} from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
import type {
  ViviendasNuevasProcessStep,
  ViviendasNuevasSectionData,
} from '@/lib/constants/viviendas-nuevas'

interface ProcessSectionProps {
  data: ViviendasNuevasSectionData
  steps: readonly ViviendasNuevasProcessStep[]
}

export function ProcessSection({ data, steps }: ProcessSectionProps) {
  const reveal = useAdsReveal()
  return (
    <Section
      id={data.id}
      variant="dark"
      className={cn(adsStyles.section, 'py-20')}
    >
      <Container className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:sticky lg:top-32 lg:col-span-4">
          <motion.div {...reveal}>
            <h2
              className={cn(
                adsStyles.heading,
                'mb-4 font-extrabold text-white sm:text-3xl md:text-4xl lg:text-left lg:text-5xl',
              )}
            >
              {data.title}
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mb-10 mt-6 h-1 w-16 rounded-full bg-amber-500 lg:ml-0"
            />
            <p
              className={cn(
                adsStyles.description,
                'mb-0 text-slate-300 lg:text-left',
              )}
            >
              {data.description}
            </p>
          </motion.div>
        </div>
        <ol className="grid min-w-0 gap-6 lg:col-span-8">
          {steps.map((step) => (
            <motion.li key={step.id} {...reveal}>
              <Card
                className={cn(
                  adsStyles.card,
                  'items-start border-slate-700 bg-slate-800 text-left text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-10',
                )}
                padding="lg"
              >
                <div className="grid w-full gap-6 sm:grid-cols-[4rem_minmax(0,1fr)]">
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/30 bg-slate-900 text-2xl font-extrabold text-amber-400"
                  >
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <CardHeader
                      title={step.title}
                      className="[&_h3]:text-white"
                    />
                    <CardContent className="text-base leading-7 text-slate-300">
                      <p>{step.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
