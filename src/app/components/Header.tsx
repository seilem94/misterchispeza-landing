import React from "react";
import { Zap } from "lucide-react";
import { Container } from "@/app/components/ui";
import { Button } from "@/app/components/ui/Button";
import { mainNavigation } from "@/lib/constants/navigation";

/**
 * Header sticky con navegación
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white">
            <Zap className="h-5 w-5" />
          </span>
          <div className="text-left leading-tight">
            <div className="text-[#16325B] hover:text-[#0b203f] text-sm font-bold tracking-wide">
              Mr.Chispeza
            </div>
            <div className="text-[10px] uppercase text-slate-500">
              Servicios Eléctricos y Electrónicos
            </div>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav className="text-[#16325B] hover:text-[#0b203f] hidden gap-6 text-sm font-medium md:flex">
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

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Button size="md" icon href="#contacto">
            Contáctenos
          </Button>
        </div>
      </Container>
    </header>
  );
}
