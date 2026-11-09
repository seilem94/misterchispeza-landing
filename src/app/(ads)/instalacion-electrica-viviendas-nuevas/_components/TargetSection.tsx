'use client'

import { motion } from 'framer-motion'
import { House } from 'lucide-react'
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
  ViviendasNuevasItem,
  ViviendasNuevasSectionData,
} from '@/lib/constants/viviendas-nuevas'

interface TargetSectionProps {
  data: ViviendasNuevasSectionData
  items: readonly ViviendasNuevasItem[]
}

export function TargetSection({ data, items }: TargetSectionProps) {
  const reveal = useAdsReveal()
  return (
    <Section
      id={data.id}
      variant="default"
      className={cn(adsStyles.section, 'border-t border-slate-200 py-20')}
    >
      <Container>
        <motion.div {...reveal}>
          <h2
            className={cn(
              adsStyles.heading,
              'mb-4 font-extrabold sm:text-3xl md:text-4xl lg:text-5xl',
            )}
          >
            {data.title}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mb-10 mt-6 h-1 w-16 rounded-full bg-amber-500"
          />
          <p className={adsStyles.description}>{data.description}</p>
        </motion.div>
        <ul className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <motion.li key={item.id} {...reveal}>
              <Card
                className={cn(
                  adsStyles.card,
                  'border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none',
                )}
                padding="lg"
              >
                <span className={adsStyles.iconBadge}>
                  <House className={adsStyles.icon} aria-hidden="true" />
                </span>
                <CardHeader title={item.title} />
                <CardContent className="text-base leading-7 text-slate-600">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
