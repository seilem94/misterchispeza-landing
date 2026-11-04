'use client'

import React from 'react'
import { Section, Container } from '@/app/components/ui'
import { Button } from '@/app/components/ui/Button'
import ContactForm from '@/app/components/ContactForm'
import { TreePine, Phone, CheckCircle, Clock } from 'lucide-react'

export function CTAViviendasNuevas() {
  return (
    <Section id="contacto-viviendas-nuevas" variant="dark" className="py-20 text-white bg-slate-950">
      <Container className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Lado izquierdo */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 text-emerald-300 px-3.5 py-1 text-xs sm:text-sm font-semibold mb-6 border border-emerald-500/30">
            <TreePine className="h-4 w-4 text-emerald-400" />
            <span>Presupuesto y Asesoría Técnica en Terreno</span>
          </div>

          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Construye con la Tranquilidad de un Proyecto Eléctrico Certificado
          </h2>

          <p className="mb-8 text-base sm:text-lg text-slate-300 leading-relaxed">
            Te asesoramos desde la factibilidad técnica del empalme hasta la inscripción final del
            Certificado TE1 ante la SEC. Cuéntanos sobre tu terreno, parcela o proyecto en construcción
            en cualquier punto de la Región de Valparaíso o alrededores.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>Instaladores Autorizados Clase SEC (Norma RIC 2021)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>Gestión completa de empalmes con Chilquinta, CGE y cooperativas</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <Clock className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>Respuesta rápida y coordinación de visita a terreno en 24 horas</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="tel:+56986774423"
              size="lg"
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              <span>Llamar al +56 9 8677 4423</span>
            </Button>
          </div>
        </div>

        {/* Lado derecho: Formulario */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur">
            <div className="mb-6 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Cotiza tu Proyecto Eléctrico
              </h3>
              <p className="text-sm text-slate-400">
                Indícanos la ubicación del terreno y características de tu construcción para entregarte una propuesta técnica.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
