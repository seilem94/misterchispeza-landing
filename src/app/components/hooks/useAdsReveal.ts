'use client'

import {
  useReducedMotion,
  type MotionProps,
  type Variants,
} from 'framer-motion'

export function useAdsReveal(): MotionProps {
  const reducedMotion = useReducedMotion()

  return {
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      ease: 'easeOut',
    },
  }
}

interface AdsStagger {
  container: MotionProps
  item: Variants
}

export function useAdsStagger(): AdsStagger {
  const reducedMotion = useReducedMotion()

  return {
    container: {
      initial: reducedMotion ? false : 'hidden',
      whileInView: 'visible',
      viewport: { once: true, amount: 0.12 },
      variants: {
        hidden: {},
        visible: {
          transition: { staggerChildren: reducedMotion ? 0 : 0.3 },
        },
      },
    },
    item: {
      hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reducedMotion ? 0 : 0.7,
          ease: 'easeOut',
        },
      },
    },
  }
}
