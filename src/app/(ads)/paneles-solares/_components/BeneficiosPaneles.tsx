'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Section,
} from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import { benefitsData } from '@/lib/constants/paneles-solares'
import { cn } from '@/lib/utils/cn'
import { getIconComponent } from '@/lib/utils/get-icon'

export function BeneficiosPaneles() {
  const reveal = useAdsReveal()

  return (
    <Section
      id={benefitsData.id}
      variant="default"
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
            {benefitsData.title}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mb-10 mt-6 h-1 w-16 rounded-full bg-amber-500"
          />
          <p className={adsStyles.description}>{benefitsData.description}</p>
        </motion.div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefitsData.items.map((benefit) => {
            const Icon = getIconComponent(benefit.icon)
            return (
              <motion.li key={benefit.id} {...reveal}>
                <Card
                  padding="lg"
                  className={cn(
                    adsStyles.card,
                    'border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                  )}
                >
                  <span className={adsStyles.iconBadge}>
                    <Icon className={adsStyles.icon} aria-hidden="true" />
                  </span>
                  <CardHeader title={benefit.title} />
                  <CardContent className="text-base leading-7 text-slate-600">
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
