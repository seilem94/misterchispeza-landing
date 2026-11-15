'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  AdsMobileAccordion,
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
                  padding="sm"
                  className={cn(
                    adsStyles.card,
                    'items-stretch border-slate-200 p-4 text-left transition-all duration-300 md:p-8 md:flex-col md:items-center md:text-center md:hover:-translate-y-1 md:hover:shadow-xl motion-reduce:transition-none motion-reduce:md:hover:translate-y-0',
                  )}
                >
                  <AdsMobileAccordion
                    title={benefit.title}
                    className="w-full"
                    titleClassName="text-lg md:text-xl"
                    headerContent={
                      <span className="flex min-w-0 flex-1 items-center gap-3 md:flex-col md:gap-0">
                        <span
                          className={cn(
                            adsStyles.iconBadge,
                            'mx-0 mb-0 h-10 w-10 rounded-xl md:mx-auto md:mb-6 md:h-16 md:w-16 md:rounded-2xl',
                          )}
                        >
                          <Icon className={adsStyles.icon} aria-hidden="true" />
                        </span>
                        <span>{benefit.title}</span>
                      </span>
                    }
                  >
                    <CardContent className="text-base leading-7 text-slate-600">
                      <p>{benefit.description}</p>
                    </CardContent>
                  </AdsMobileAccordion>
                </Card>
              </motion.li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
