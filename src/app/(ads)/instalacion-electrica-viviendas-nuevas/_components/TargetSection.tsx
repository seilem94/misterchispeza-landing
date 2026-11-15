'use client'

import { motion } from 'framer-motion'
import { House } from 'lucide-react'
import { Card, Container, Section } from '@/app/components/ui'
import {
  useAdsReveal,
  useAdsStagger,
} from '@/app/components/hooks/useAdsReveal'
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
  const stagger = useAdsStagger()
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
        <motion.ul
          {...stagger.container}
          aria-label={data.title}
          tabIndex={0}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:p-0 md:m-0"
        >
          {items.map((item) => (
            <motion.li
              key={item.id}
              variants={stagger.item}
              className="shrink-0 snap-center md:min-w-0"
            >
              <Card
                className={cn(
                  adsStyles.card,
                  'w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center p-5 flex flex-col items-stretch gap-3 border-slate-200 text-left transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-xl motion-reduce:transition-none motion-reduce:md:hover:translate-y-0',
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      adsStyles.iconBadge,
                      'mx-0 mb-0 h-10 w-10 rounded-xl',
                    )}
                  >
                    <House className={adsStyles.icon} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold leading-tight text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 text-left">
                  {item.description}
                </p>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  )
}
