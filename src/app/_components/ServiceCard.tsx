"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Service } from "@/lib/types"
import { Card, CardHeader, CardContent, CardFooter } from "@/app/components/ui"
import { getIconComponent } from "@/lib/utils/get-icon"

interface ServiceCardProps {
  service: Service
  index: number
}

/**
 * Tarjeta individual de servicio con animación
 */
export function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = getIconComponent(service.icon)
  const buttonHref = service.href || '#contacto'
  const buttonText = service.ctaText || (service.href ? 'Ver más' : 'Cotizar')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full" // ✅ IMPORTANTE: Altura completa para que flexbox funcione
    >
      <Card hover className="group h-full"> {/* ✅ IMPORTANTE: h-full aquí también */}
        <CardHeader
          icon={<IconComponent className="h-6 w-6" />}
          title={service.title}
        />
        
        <CardContent>
          <p>{service.description}</p>
        </CardContent>

        {/* ✅ Este footer ahora se queda al fondo siempre */}
        <CardFooter>
          <Link
            href={buttonHref}
            className="inline-flex items-center text-sm font-medium text-amber-600 transition-colors hover:text-amber-700"
          >
            {buttonText}
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </Card>
    </motion.div>
  )
}
