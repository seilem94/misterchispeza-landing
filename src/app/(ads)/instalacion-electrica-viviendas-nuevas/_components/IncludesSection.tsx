'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
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
  ViviendasNuevasIncludesData,
  ViviendasNuevasItem,
} from '@/lib/constants/viviendas-nuevas'

interface IncludesSectionProps {
  data: ViviendasNuevasIncludesData
  items: readonly ViviendasNuevasItem[]
}

export function IncludesSection({ data, items }: IncludesSectionProps) {
  const reveal = useAdsReveal()
  return (
    <Section id={data.id} variant="accent" className={adsStyles.section}>
      <Container>
        <motion.div {...reveal}>
          <h2 className={adsStyles.heading}>{data.title}</h2>
          <p className={adsStyles.description}>{data.description}</p>
        </motion.div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <motion.li key={item.id} {...reveal}>
              <Card className={adsStyles.card} padding="lg">
                <span className={adsStyles.iconBadge}>
                  <CheckCircle2 className={adsStyles.icon} aria-hidden="true" />
                </span>
                <CardHeader title={item.title} />
                <CardContent className="text-base leading-7 text-slate-600">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
        <motion.p
          {...reveal}
          className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500"
        >
          {data.scopeNote}
        </motion.p>
      </Container>
    </Section>
  )
}
