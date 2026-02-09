import React from "react";
import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "full";
}

/**
 * Contenedor responsive con máximo ancho
 */
export function Container({
  className = "",
  children,
  size = "lg",
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
