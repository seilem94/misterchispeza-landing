'use client'

import { useEffect, useState } from 'react'
import { Section, Container } from '@/app/components/ui'
import { services } from '@/lib/constants/services'
import { ServiceCard } from './ServiceCard'

const primaryLandingPaths = new Set([
  '/paneles-solares',
  '/instalacion-electrica-viviendas-nuevas',
  '/remodelacion-instalaciones',
])
const primaryServices = services.filter((service) =>
  primaryLandingPaths.has(service.href ?? ''),
)
const additionalServices = services.filter(
  (service) => !primaryLandingPaths.has(service.href ?? ''),
)

/**
 * Sección de grid de servicios
 */
export function ServicesGrid() {
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    let scrollFrame: number | undefined
    let scrollTimer: number | undefined

    const cancelPendingScroll = () => {
      if (scrollFrame !== undefined) window.cancelAnimationFrame(scrollFrame)
      if (scrollTimer !== undefined) window.clearTimeout(scrollTimer)
    }

    const openHashService = () => {
      cancelPendingScroll()
      const hash = window.location.hash.slice(1)
      const service = additionalServices.find(
        (item) => (item.anchorId ?? item.id) === hash,
      )
      if (!service) return

      setOpenId(service.id)
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      // Esperar el despliegue y el cierre del panel anterior antes de alinear el ancla.
      scrollFrame = window.requestAnimationFrame(() => {
        scrollTimer = window.setTimeout(
          () => {
            document.getElementById(hash)?.scrollIntoView({
              behavior: reducedMotion ? 'auto' : 'smooth',
              block: 'start',
            })
          },
          reducedMotion ? 0 : 200,
        )
      })
    }

    openHashService()
    window.addEventListener('hashchange', openHashService)

    return () => {
      cancelPendingScroll()
      window.removeEventListener('hashchange', openHashService)
    }
  }, [])

  return (
    <Section id="servicios" className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Soluciones eléctricas integrales para todo tipo de proyectos
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {primaryServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isPrimary
            />
          ))}
          <h3 className="mt-6 mb-3 px-1 text-sm font-semibold uppercase tracking-wider text-slate-400 md:hidden">
            Otros servicios y certificaciones SEC
          </h3>
          {additionalServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={primaryServices.length + index}
              isOpen={openId === service.id}
              onToggle={() =>
                setOpenId((current) =>
                  current === service.id ? null : service.id,
                )
              }
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
