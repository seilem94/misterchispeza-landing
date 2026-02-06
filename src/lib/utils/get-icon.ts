import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IconName = keyof typeof LucideIcons;

// Fallback robusto (según versión puede existir CircleHelp o HelpCircle)
const FALLBACK_ICON: LucideIcon = LucideIcons.HelpCircle;

function isReactComponentType(v: unknown): boolean {
  // forwardRef components suelen ser "object" en runtime
  return (typeof v === "function") || (typeof v === "object" && v !== null);
}

export function getIconComponent(icon: string): LucideIcon {
  if (!(icon in LucideIcons)) return FALLBACK_ICON;

  const candidate = LucideIcons[icon as IconName];

  return isReactComponentType(candidate) ? (candidate as unknown as LucideIcon) : FALLBACK_ICON;
}
