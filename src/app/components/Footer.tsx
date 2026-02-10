import React from "react";
import { Zap } from "lucide-react";
import { Container } from "@/app/components/ui";

/**
 * Footer con información de copyright
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white">
            <Zap className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold text-slate-600">
            Mr.Chispeza: Soluciones en Ingeniería & Mantenimiento Eléctrico
          </span>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Mr.Chispeza. Todos los derechos
          reservados.
        </p>
      </Container>
    </footer>
  );
}
