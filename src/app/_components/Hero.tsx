'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Section, Container, Button } from '@/app/components/ui'
import { homeHeroContent } from '@/lib/constants/home'

/**
 * Sección Hero principal con imagen de fondo
 */
// TODO: Confirmar con marketing que /hero.webp pertenece a una obra real de Mr. Chispeza; su procedencia no está documentada.
export function Hero() {
  return (
    <Section id="inicio" className="relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={homeHeroContent.image.src}
          alt={homeHeroContent.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
        {/* Overlay más oscuro en mobile para mejor legibilidad */}
        <div className="absolute inset-0 bg-slate-900/70 sm:bg-slate-900/60" />
      </div>

      {/* Contenido */}
      <Container className="relative z-10 flex flex-col items-center py-14 text-center text-white sm:py-20 md:items-start md:py-36 md:text-left lg:py-44">
        {/* Título con mejor escalado responsive */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', duration: 0.6, delay: 0.1 }}
          className="mx-auto w-full max-w-3xl text-[2.5rem] font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:mx-0 md:text-5xl md:font-bold md:leading-tight md:tracking-normal lg:text-6xl"
        >
          {homeHeroContent.title.introduction}{' '}
          <span className="text-amber-400">
            {homeHeroContent.title.electrical}
          </span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {homeHeroContent.title.conjunction}{' '}
          <span className="text-amber-400">
            {homeHeroContent.title.electronics}
          </span>
        </motion.h1>

        {/* Descripción con mejor espaciado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'tween',
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className="mx-auto mt-4 w-full max-w-xl text-base font-bold leading-relaxed text-slate-200 sm:mt-6 sm:text-lg md:mx-0 md:max-w-2xl lg:text-xl"
        >
          {homeHeroContent.audience}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {homeHeroContent.description}
        </motion.p>

        {/* Botones responsive - Stack en mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'tween',
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5,
          }}
          className="mt-6 flex w-full flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 md:justify-start"
        >
          <Button
            variant="primary"
            size="md"
            icon
            href={homeHeroContent.aboutCta.href}
            className="w-full sm:w-auto justify-center"
          >
            {homeHeroContent.aboutCta.text}
          </Button>
          <Button
            variant="ghost"
            size="md"
            href={homeHeroContent.contactCta.href}
            className="w-full sm:w-auto justify-center"
          >
            {homeHeroContent.contactCta.text}
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}
