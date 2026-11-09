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
    <Section id={data.id} className={adsStyles.section}>
      <Container>
        <motion.div {...reveal}>
          <h2 className={adsStyles.heading}>{data.title}</h2>
          <p className={adsStyles.description}>{data.description}</p>
        </motion.div>
        <ul className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <motion.li key={item.id} {...reveal}>
              <Card className={adsStyles.card} padding="lg">
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
