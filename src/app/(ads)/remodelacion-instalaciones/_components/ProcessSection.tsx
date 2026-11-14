'use client'

import { motion } from 'framer-motion'
import {
  Card,
  AdsMobileAccordion,
  CardContent,
  Container,
  Section,
} from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'
import type {
  RemodelacionProcessStep,
  RemodelacionSectionData,
} from '@/lib/constants/remodelacion-antiguas'

interface ProcessSectionProps {
  data: RemodelacionSectionData
  steps: readonly RemodelacionProcessStep[]
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
                  'items-start border-slate-700 bg-slate-800 text-left text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-10',
                )}
                padding="sm"
              >
                <div className="grid w-full grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-3 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-6">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-slate-900 text-xl font-extrabold text-amber-400 md:h-16 md:w-16 md:rounded-2xl md:text-2xl"
                  >
                    {step.number}
                  </span>
                  <AdsMobileAccordion
                    title={step.title}
                    titleClassName="text-white"
                  >
                    <CardContent className="text-base leading-7 text-slate-300">
                      <p>{step.description}</p>
                    </CardContent>
                  </AdsMobileAccordion>
                </div>
              </Card>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
