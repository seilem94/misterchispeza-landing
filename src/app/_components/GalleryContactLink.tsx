'use client'

import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { homeGalleryContent } from '@/lib/constants/gallery'

export function GalleryContactLink({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion()

  return (
    <a
      href={homeGalleryContent.contactHref}
      className="flex h-full flex-col rounded-2xl focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-amber-500"
      onClick={(event) => {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return
        const target = document.getElementById(
          homeGalleryContent.contactHref.slice(1),
        )
        if (!target) return

        event.preventDefault()
        if (window.location.hash !== homeGalleryContent.contactHref) {
          window.history.pushState(null, '', homeGalleryContent.contactHref)
        }
        target.scrollIntoView({
          behavior: reducedMotion ? 'auto' : 'smooth',
          block: 'start',
        })
        target
          .querySelector<HTMLElement>('[data-home-contact-form]')
          ?.focus({ preventScroll: true })
      }}
    >
      {children}
    </a>
  )
}
