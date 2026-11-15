'use client'

import { motion } from 'framer-motion'
import {
  AdsMobileAccordion,
  Button,
  Card,
  Container,
  Section,
} from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { processData } from '@/lib/constants/paneles-solares'
import { cn } from '@/lib/utils/cn'
import { getIconComponent } from '@/lib/utils/get-icon'

export function ProcesoInstalacion() {
  const reveal = useAdsReveal()

  return (
    <Section
      id={processData.id}
      variant="dark"
      className={cn(adsStyles.section, 'py-20')}
    >
      <Container>
        <motion.div {...reveal}>
          <h2
            className={cn(
              adsStyles.heading,
              'mb-4 font-extrabold text-white md:text-4xl lg:text-5xl',
            )}
          >
            {processData.title}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mb-10 mt-6 h-1 w-16 rounded-full bg-amber-500"
          />
          <p className={cn(adsStyles.description, 'text-slate-300')}>
            {processData.description}
          </p>
        </motion.div>
        <ol className="grid gap-6">
          {processData.steps.map((step) => {
            const Icon = getIconComponent(step.icon)
            return (
              <motion.li key={step.number} {...reveal} className="min-w-0">
                <Card
                  padding="sm"
                  className="border-slate-700 bg-slate-800 p-4 text-white shadow-md md:p-8"
                >
                  <AdsMobileAccordion
                    title={step.title}
                    defaultOpen={step.number === 1}
                    titleClassName="text-lg text-white md:text-2xl"
                    headerContent={
                      <span className="flex min-w-0 flex-1 items-center gap-3 md:gap-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-slate-800 text-amber-400 shadow-md md:h-16 md:w-16 md:rounded-2xl">
                          <Icon className="h-8 w-8" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="mb-2 flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-300">
                              {processData.stepLabel} {step.number}
                            </span>
                            <span className="text-sm font-normal text-slate-300">
                              {step.duration}
                            </span>
                          </span>
                          <span>{step.title}</span>
                        </span>
                      </span>
                    }
                  >
                    <p className="text-base leading-7 text-slate-300">
                      {step.description}
                    </p>
                  </AdsMobileAccordion>
                </Card>
              </motion.li>
            )
          })}
        </ol>
        <motion.div {...reveal} className="mt-12 text-center">
          <p className="mb-6 text-lg font-medium text-slate-300">
            {processData.totalLabel}{' '}
            <strong className="text-amber-300">
              {processData.totalDuration}
            </strong>
          </p>
          <Button href={processData.ctaHref} variant="primary" size="lg">
            {processData.ctaText}
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}
