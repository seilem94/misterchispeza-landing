import React from "react"
import { cn } from "@/lib/utils/cn"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: "sm" | "md" | "lg"
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
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm transition-all",
        "flex flex-col", // ✅ Flexbox para alinear footer al fondo
        hover && "hover:border-amber-400 hover:shadow-lg",
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  )
}

// CardHeader
interface CardHeaderProps {
  children?: React.ReactNode // ✅ AHORA ES OPCIONAL
  className?: string
  icon?: React.ReactNode
  title?: string
}

export function CardHeader({
  children,
  className = "",
  icon,
  title,
}: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {icon && (
        <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      )}
      {children}
    </div>
  )
}

// CardContent
interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={cn(
      "text-sm text-slate-600",
      "grow", // ✅ Crece para empujar el footer hacia abajo
      className
    )}>
      {children}
    </div>
  )
}

// CardFooter
interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={cn(
      "mt-auto pt-4", // ✅ Se mantiene al fondo
      className
    )}>
      {children}
    </div>
  )
}
