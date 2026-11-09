'use client'

import { motion } from 'framer-motion'
import { CircleAlert } from 'lucide-react'
import { Card, Container, Section } from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import type { ViviendasNuevasProblemData } from '@/lib/constants/viviendas-nuevas'

export function ProblemSection({ data }: { data: ViviendasNuevasProblemData }) {
  const reveal = useAdsReveal()
  return (
    <Section id={data.id} className={adsStyles.section}>
      <Container>
        <motion.div {...reveal}>
          <h2 className={adsStyles.heading}>{data.title}</h2>
          <p className={adsStyles.description}>{data.description}</p>
        </motion.div>
        <ul className="grid gap-6 lg:grid-cols-3">
          {data.items.map((item) => (
            <motion.li key={item.id} {...reveal}>
              <Card className={adsStyles.card} padding="lg">
                <span className={adsStyles.iconBadge}>
                  <CircleAlert className={adsStyles.icon} aria-hidden="true" />
                </span>
                <p className="text-base font-semibold leading-7 text-slate-900">
                  {item.text}
                </p>
              </Card>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
