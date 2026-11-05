'use client'

import React from 'react'
import { Section, Container } from '@/app/components/ui'
import { Button } from '@/app/components/ui/Button'
import ContactForm from '@/app/components/ContactForm'
import { ShieldCheck, Phone, CheckCircle, Clock } from 'lucide-react'

export function CTARemodelacion() {
  return (
    <Section id="contacto-remodelacion" variant="dark" className="py-20 text-white bg-slate-950">
      <Container className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Lado izquierdo: Propuesta de valor */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 text-amber-300 px-3.5 py-1 text-xs sm:text-sm font-semibold mb-6 border border-amber-500/30">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span>Presupuesto Claro & Sin Compromiso</span>
          </div>

          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            ¿Listo para Modernizar y Proteger tu Hogar?
          </h2>

          <p className="mb-8 text-base sm:text-lg text-slate-300 leading-relaxed">
            Elimina los riesgos de cortocircuitos e incendios. Solicita una visita de diagnóstico
            técnico en terreno en cualquier comuna de la Región de Valparaíso (Valparaíso, Viña del Mar,
            Quilpué, Villa Alemana, Concón y alrededores).
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle className="h-5 w-5 text-amber-400 shrink-0" />
              <span>Instaladores certificados por la SEC (Norma RIC 2021)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle className="h-5 w-5 text-amber-400 shrink-0" />
              <span>Materiales de primera calidad libres de halógenos</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <Clock className="h-5 w-5 text-amber-400 shrink-0" />
              <span>Respuesta técnica y coordinación en menos de 24 horas</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="tel:+56986774423"
              size="lg"
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              <span>Llamar al +56 9 8677 4423</span>
            </Button>
          </div>
        </div>

        {/* Lado derecho: Formulario */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur">
            <div className="mb-6 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Solicita tu Diagnóstico Eléctrico
              </h3>
              <p className="text-sm text-slate-400">
                Cuéntanos sobre tu casa o departamento y coordinaremos la visita de inspección.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
