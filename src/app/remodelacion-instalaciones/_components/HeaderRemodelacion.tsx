'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Home, Phone, ArrowLeft, Menu, X, ShieldCheck } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { Button } from '@/app/components/ui/Button'
import { navItemsRemodelacion } from '@/lib/constants/remodelacion-antiguas'

export function HeaderRemodelacion() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        {/* Logo + Volver */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors"
            aria-label="Volver a la página principal"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Inicio</span>
          </Link>

          <div className="h-5 sm:h-6 w-px bg-slate-300" />

          <Link
            href="/remodelacion-instalaciones"
            className="flex items-center gap-2.5"
            aria-label="Remodelación de Instalaciones Antiguas"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-600 text-white shadow-sm">
              <Home className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="text-left leading-tight">
              <div className="text-sm font-bold tracking-tight text-slate-900">
                Remodelación Eléctrica
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 inline" /> Casas Antiguas
              </div>
            </div>
          </Link>
        </div>

        {/* Navegación Desktop */}
        <nav
          className="hidden gap-6 text-sm font-medium lg:flex"
          aria-label="Navegación remodelación eléctrica"
        >
          {navItemsRemodelacion.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+56986774423"
            className="hidden items-center gap-2 text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors md:flex"
          >
            <Phone className="h-4 w-4 text-amber-600" />
            <span>+56 9 8677 4423</span>
          </a>
          <Button
            size="sm"
            href="#contacto-remodelacion"
            className="bg-linear-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-sm"
          >
            Diagnóstico
          </Button>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-amber-600 lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Menú Desplegable Mobile */}
      {mobileMenuOpen && (
        <nav className="border-b border-slate-200 bg-white/95 px-4 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-2">
            {navItemsRemodelacion.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-sm font-medium text-slate-700 hover:text-amber-600 border-b border-slate-100 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                size="md"
                href="#contacto-remodelacion"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center bg-amber-500 text-white"
              >
                Solicitar Diagnóstico en Terreno
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
