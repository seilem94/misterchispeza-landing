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
    <Section id={data.id} className={adsStyles.section}>
      <Container>
        <motion.div {...reveal}>
          <h2 className={adsStyles.heading}>{data.title}</h2>
          <p className={adsStyles.description}>{data.description}</p>
        </motion.div>
        <ol className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <motion.li key={step.id} {...reveal}>
              <Card className={adsStyles.card} padding="lg">
                <span
                  aria-hidden="true"
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50 text-2xl font-bold text-amber-700"
                >
                  {step.number}
                </span>
                <CardHeader title={step.title} />
                <CardContent className="text-base leading-7 text-slate-600">
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
