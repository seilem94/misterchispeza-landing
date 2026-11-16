'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Service } from '@/lib/types'
import { serviceCtaDefaults } from '@/lib/constants/services'
import { Card, CardContent, CardFooter } from '@/app/components/ui'
import { getIconComponent } from '@/lib/utils/get-icon'
import { cn } from '@/lib/utils/cn'
import { HomeMobileAccordion } from './HomeMobileAccordion'

interface ServiceCardProps {
  service: Service
  index: number
  isPrimary?: boolean
  isOpen?: boolean
  onToggle?: () => void
}

/**
 * Tarjeta individual de servicio con animación
 */
export function ServiceCard({
  service,
  index,
  isPrimary = false,
  isOpen = false,
  onToggle,
}: ServiceCardProps) {
  const IconComponent = getIconComponent(service.icon)
  const buttonHref = service.href ?? serviceCtaDefaults.href
  const buttonText =
    service.ctaText ??
    (service.href
      ? serviceCtaDefaults.detailsText
      : serviceCtaDefaults.quoteText)

  const content = (
    <>
      <CardContent className="grow">
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {service.description}
        </p>
      </CardContent>

      {/* Footer siempre al fondo */}
      <CardFooter className="mt-auto">
        <Link
          href={buttonHref}
          className="inline-flex items-center text-sm sm:text-base font-medium text-amber-600 transition-colors hover:text-amber-700 group-hover:text-amber-700"
        >
          {buttonText}
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </CardFooter>
    </>
  )

  return (
    <motion.div
      id={service.anchorId ?? service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full scroll-mt-28 sm:scroll-mt-32"
    >
      <Card
        hover
        className={cn(
          'group flex h-full flex-col',
          isPrimary
            ? 'border-amber-200/80 bg-amber-50/20 p-5 shadow-sm md:border-slate-200 md:bg-white md:p-6 md:hover:border-amber-400'
            : 'p-0 md:p-6',
        )}
      >
        {isPrimary ? (
          <>
            <div className="mb-3 flex items-center gap-3 md:mb-4 md:block">
              <div className="inline-flex shrink-0 rounded-xl bg-amber-100 p-2 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white md:mb-4 md:p-3">
                <IconComponent
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 max-md:leading-snug md:text-xl">
                {service.title}
              </h3>
            </div>
            {content}
          </>
        ) : (
          <HomeMobileAccordion
            title={service.title}
            icon={
              <IconComponent
                className="h-5 w-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            }
            isOpen={isOpen}
            onToggle={() => onToggle?.()}
          >
            {content}
          </HomeMobileAccordion>
        )}
      </Card>
    </motion.div>
  )
}
