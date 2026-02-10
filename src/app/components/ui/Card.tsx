import React from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

/**
 * Componente Card reutilizable para contener contenido
 */
export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        hover && "transition-shadow hover:shadow-lg",
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  icon?: React.ReactNode;
  title: string;
  className?: string;
}

/**
 * Header del Card con ícono opcional
 */
export function CardHeader({ icon, title, className = "" }: CardHeaderProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {icon && (
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          {icon}
        </div>
      )}
      <h4 className="text-xl font-bold">{title}</h4>
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Contenido del Card
 */
export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={cn("mt-3 text-slate-600", className)}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Footer del Card
 */
export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={cn("mt-4", className)}>{children}</div>;
}
