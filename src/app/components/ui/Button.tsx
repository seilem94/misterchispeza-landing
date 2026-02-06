import React from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  href?: string
  children: React.ReactNode
}

/**
 * Botón reutilizable con variantes de estilo
 * Puede funcionar como button o como link (anchor)
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon = false,
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 
    'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-amber-500 text-white shadow-lg hover:translate-y-[-1px] hover:bg-amber-600 hover:shadow-xl',
    secondary:
      'bg-slate-800 text-white hover:bg-slate-700 shadow-md hover:shadow-lg',
    outline:
      'border-2 border-amber-500 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950',
    ghost:
      'border border-white/40 text-white/90 backdrop-blur hover:bg-white/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  // Si tiene href, renderizar como anchor
  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
        {icon && <ChevronRight className="h-5 w-5" />}
      </a>
    )
  }

  // Sino, renderizar como button
  return (
    <button className={combinedClassName} {...props}>
      {children}
      {icon && <ChevronRight className="h-5 w-5" />}
    </button>
  )
}