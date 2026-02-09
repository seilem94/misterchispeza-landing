import React from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "accent" | "dark" | "gradient";
}

/**
 * Componente Section para estructurar el layout de la página
 */
export function Section({
  id,
  className = "",
  children,
  variant = "default",
}: SectionProps) {
  const variants = {
    default: "bg-white",
    accent: "bg-slate-50",
    dark: "bg-slate-900 text-slate-100",
    gradient:
      "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white",
  };

  return (
    <section id={id} className={cn("w-full", variants[variant], className)}>
      {children}
    </section>
  );
}
