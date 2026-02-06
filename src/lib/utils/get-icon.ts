// src/lib/utils/get-icon.ts

import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Icon = keyof typeof LucideIcons;

export function getIconComponent(icon: string): LucideIcon {
  const Icon = (LucideIcons as Record<string, LucideIcon>)[icon]
  
  if (!Icon) {
    console.warn(`Icon "${icon}" not found, using default`)
    return LucideIcons.HelpCircle
  }
  
  return Icon
}