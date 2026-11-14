'use client'

import { useId, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CardHeader } from './Card'
import { cn } from '@/lib/utils/cn'

export interface AdsMobileAccordionProps {
  title: string
  children: ReactNode
  className?: string
  titleClassName?: string
}

export function AdsMobileAccordion({
  title,
  children,
  className,
  titleClassName,
}: AdsMobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()
  const reducedMotion = useReducedMotion()
  const duration = reducedMotion ? 0 : 0.2

  return (
    <div className={cn('min-w-0 flex-1', className)}>
      <CardHeader className="mb-0">
        <h3 className={cn('text-xl font-bold text-slate-900', titleClassName)}>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((open) => !open)}
            className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 md:hidden"
          >
            <span>{title}</span>
            <motion.span
              aria-hidden="true"
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration, ease: 'easeOut' }}
              className="inline-flex shrink-0 text-amber-600"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>
          <span className="hidden md:block">{title}</span>
        </h3>
      </CardHeader>
      {/* Keep SSR content mounted so desktop CSS can override the closed state. */}
      <AnimatePresence initial={false}>
        <motion.div
          key="panel"
          id={panelId}
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration, ease: 'easeOut' }}
          className={cn(
            'max-md:overflow-hidden md:visible! md:block md:h-auto!',
            isOpen ? 'max-md:visible' : 'max-md:invisible',
          )}
        >
          <div className="pt-2 md:pt-4">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
