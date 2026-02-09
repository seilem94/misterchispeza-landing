// src/lib/types/turnstile.d.ts
// Declaración de tipos para Cloudflare Turnstile

interface TurnstileOptions {
  sitekey: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact";
  action?: string;
  cData?: string;
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
  "before-interactive-callback"?: () => void;
  "after-interactive-callback"?: () => void;
  "unsupported-callback"?: () => void;
}

interface Turnstile {
  render: (
    container: HTMLElement | string,
    options: TurnstileOptions,
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string | undefined;
}

// Para uso en el código
declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

export {};
