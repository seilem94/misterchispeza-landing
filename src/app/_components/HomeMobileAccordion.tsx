'use client'

import { useId, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CardHeader } from '@/app/components/ui'
import { cn } from '@/lib/utils/cn'

interface HomeMobileAccordionProps {
  title: string
  icon: ReactNode
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

/** Contenido siempre montado para mantener las tarjetas abiertas desde md. */
export function HomeMobileAccordion({
  title,
  icon,
  isOpen,
  onToggle,
  children,
}: HomeMobileAccordionProps) {
  const panelId = useId()
  const reducedMotion = useReducedMotion()
  const transition = {
    duration: reducedMotion ? 0 : 0.2,
    ease: 'easeOut',
  } as const

  return (
    <>
      <h3 className="md:hidden">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
        >
          <span
            className="inline-flex shrink-0 rounded-xl bg-amber-100 p-2 text-amber-600"
            aria-hidden="true"
          >
            {icon}
          </span>
          <span className="flex-1 text-base font-bold leading-snug text-slate-900">
            {title}
          </span>
          <motion.span
            aria-hidden="true"
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={transition}
            className="inline-flex shrink-0 text-amber-600"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </button>
      </h3>
      <CardHeader
        icon={icon}
        title={title}
        className="hidden text-lg md:block md:text-xl"
      />
      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className={cn(
          'max-md:overflow-hidden md:visible! md:flex md:h-auto! md:grow md:flex-col md:opacity-100!',
          isOpen ? 'visible' : 'invisible',
        )}
      >
        <div className="flex flex-col px-4 pb-4 md:grow md:p-0">{children}</div>
      </motion.div>
    </>
  )
}
