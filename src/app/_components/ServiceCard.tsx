'use client'

import React from 'react'
import Link from "next/link";
import type { Route } from "next";
import { motion } from 'framer-motion'
import type { Service } from '@/lib/types'
import { Card, CardHeader, CardContent, CardFooter } from '@/app/components/ui'
import { getIconComponent } from '@/lib/utils/get-icon'

interface ServiceCardProps {
  service: Service
  index: number
}

/**
 * Tarjeta individual de servicio con animación
 */
export function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = getIconComponent(service.icon)  // ← Usar helper
  const href =
    typeof service.href === "string" && service.href.length > 0
      ? service.href
      : "/#contacto";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card hover className="h-full">
        <CardHeader
          icon={<IconComponent className="h-7 w-7" />}
          title={service.title}
        />
        <CardContent>
          <p>{service.description}</p>
        </CardContent>
        <CardFooter>
          <Link href={href} className="text-orange-600 font-medium hover:underline">
            Ver más
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}