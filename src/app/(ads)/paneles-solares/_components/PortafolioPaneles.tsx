'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CarouselDots } from '@/app/components/CarouselDots'
import { Card, Container, Section } from '@/app/components/ui'
import { useAdsReveal } from '@/app/components/hooks/useAdsReveal'
import { adsStyles } from '@/lib/constants/ads'
import {
  portfolioData,
  proyectosPaneles,
} from '@/lib/constants/paneles-solares'
import { cn } from '@/lib/utils/cn'

export function PortafolioPaneles() {
  const reveal = useAdsReveal()
  const carouselId = `${portfolioData.id}-carousel`

  return (
    <Section
      id={portfolioData.id}
      variant="accent"
      className={cn(adsStyles.section, 'py-20')}
    >
      <Container>
        <motion.div {...reveal}>
          <h2
            id={`${portfolioData.id}-title`}
            className={cn(
              adsStyles.heading,
              'mb-4 font-extrabold md:text-4xl lg:text-5xl',
            )}
          >
            {portfolioData.title}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mb-10 mt-6 h-1 w-16 rounded-full bg-amber-500"
          />
          <p className={adsStyles.description}>{portfolioData.description}</p>
        </motion.div>
        <div
          id={carouselId}
          role="region"
          aria-labelledby={`${portfolioData.id}-title`}
          tabIndex={0}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:p-0 md:m-0"
        >
          {proyectosPaneles.map((project) => (
            <motion.article
              key={project.id}
              {...reveal}
              className="w-[85vw] sm:w-[340px] md:w-auto shrink-0 snap-center min-w-0"
            >
              <Card
                padding="sm"
                className="group h-full overflow-hidden border-slate-200 p-0 shadow-md transition-all duration-300 md:hover:-translate-y-1.5 md:hover:shadow-xl motion-reduce:transition-none motion-reduce:md:hover:translate-y-0"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <Image
                    src={project.imagen}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1152px) 347px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 6rem) / 3), (min-width: 640px) 340px, 85vw"
                    quality={85}
                    loading="lazy"
                    className="object-cover transition-transform duration-300 md:group-hover:scale-105 motion-reduce:transition-none motion-reduce:md:group-hover:scale-100"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-slate-950 shadow-md">
                    {project.capacidad}
                  </div>
                </div>
                <div className="flex grow flex-col p-6 sm:p-8">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {project.titulo}
                  </h3>
                  <p className="mb-6 text-sm leading-6 text-slate-600">
                    {project.ubicacion}
                  </p>
                  <dl className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-100 pt-4 text-sm">
                    <div>
                      <dt className="text-slate-600">
                        {portfolioData.savingsLabel}
                      </dt>
                      <dd className="mt-1 font-bold text-emerald-700">
                        {project.ahorro}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-600">
                        {portfolioData.yearLabel}
                      </dt>
                      <dd className="mt-1 font-bold text-slate-900">
                        {project.año}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
        <CarouselDots
          carouselId={carouselId}
          itemCount={proyectosPaneles.length}
          label={portfolioData.title}
        />
      </Container>
    </Section>
  )
}
