'use client'

import {
  useReducedMotion,
  type MotionProps,
  type Variants,
} from 'framer-motion'

const adsRevealViewport = {
  once: true,
  margin: '0px 0px 120px 0px',
  amount: 0.05,
} satisfies NonNullable<MotionProps['viewport']>

export function useAdsReveal(): MotionProps {
  const reducedMotion = useReducedMotion()

  return {
    initial: reducedMotion ? false : { opacity: 0.85, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: adsRevealViewport,
    transition: {
      duration: reducedMotion ? 0 : 0.28,
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
      viewport: adsRevealViewport,
      variants: {
        hidden: {},
        visible: {
          transition: { staggerChildren: reducedMotion ? 0 : 0.06 },
        },
      },
    },
    item: {
      hidden: { opacity: reducedMotion ? 1 : 0.85, y: reducedMotion ? 0 : 8 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reducedMotion ? 0 : 0.25,
          ease: 'easeOut',
        },
      },
    },
  }
}
