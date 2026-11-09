'use client'

import { useReducedMotion, type MotionProps } from 'framer-motion'

export function useAdsReveal(): MotionProps {
  const reducedMotion = useReducedMotion()

  return {
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reducedMotion ? 0 : 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }
}
