"use client";

import { useState } from "react";
import Image from "next/image"
import { Menu, X } from "lucide-react";
import { Container } from "@/app/components/ui";
import { Button } from "@/app/components/ui/Button";
import { mainNavigation } from "@/lib/constants/navigation";

/**
 * Header sticky con navegación
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-20 sm:h-22 items-center justify-between relative">
        {/* Logo Responsive */}
        <a href="#" className="flex items-center w-36 sm:w-44 md:w-[220px]">
          <Image
            src="/logo_new.png"
            alt="Logo Mr.Chispeza"
            width={220}
            height={120}
            priority={true}
            className="w-full h-auto object-contain object-left"
          />
        </a>

        {/* Navegación Desktop */}
        <nav className="text-[#16325B] hover:text-[#0b203f] hidden gap-6 text-sm font-medium lg:flex xl:gap-8">
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-amber-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botones / CTA */}
        <div className="flex items-center gap-3">
          <Button size="md" icon href="#contacto" className="hidden sm:inline-flex">
            Contáctenos
          </Button>
          
          {/* Botón Menú Hamburguesa (sólo Mobile y Tablet) */}
          <button
            className="lg:hidden p-2 text-[#16325B] hover:text-amber-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú principal"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Menú Desplegable Mobile */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full border-b border-slate-200 bg-white/95 backdrop-blur shadow-lg lg:hidden">
          <div className="flex flex-col p-4 gap-2">
            {mainNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#16325B] hover:text-amber-600 font-medium py-3 px-2 transition-colors border-b border-slate-100 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 sm:hidden">
              <Button size="md" href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="w-full justify-center">
                Contáctenos
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
