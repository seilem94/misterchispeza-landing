'use client'

import { motion } from 'framer-motion'
import { Button, Card, Container, Section } from '@/app/components/ui'
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
        <ol className="relative grid gap-6 before:absolute before:bottom-8 before:left-8 before:top-8 before:hidden before:w-px before:bg-slate-700 md:before:block">
          {processData.steps.map((step) => {
            const Icon = getIconComponent(step.icon)
            return (
              <motion.li
                key={step.number}
                {...reveal}
                className="relative grid gap-4 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/30 bg-slate-800 text-amber-400 shadow-md">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <Card
                  padding="lg"
                  className="border-slate-700 bg-slate-800 text-white shadow-md"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-300">
                      {processData.stepLabel} {step.number}
                    </span>
                    <span className="text-sm text-slate-300">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-7 text-slate-300">
                    {step.description}
                  </p>
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
