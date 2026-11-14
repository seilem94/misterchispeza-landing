'use client'

import {
  useReducedMotion,
  type MotionProps,
  type Variants,
} from 'framer-motion'

const adsRevealViewport = {
  once: true,
  margin: '0px 0px -50px 0px',
  amount: 0.1,
} satisfies NonNullable<MotionProps['viewport']>

export function useAdsReveal(): MotionProps {
  const reducedMotion = useReducedMotion()

  return {
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: adsRevealViewport,
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
      viewport: adsRevealViewport,
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
