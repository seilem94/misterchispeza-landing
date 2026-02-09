import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes with tailwind-merge to handle conflicts
 *
 * @example
 * cn('px-4 py-2', 'bg-blue-500', condition && 'text-white')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
