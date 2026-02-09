import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
  error?: string; // Formspree devuelve string | undefined
  children?: ReactNode;
  rows?: number;
  className?: string;
}

export function FormField({
  label,
  id,
  name,
  type = "text",
  required = false,
  placeholder,
  error,
  children,
  rows,
  className = "",
}: FormFieldProps) {
  const hasError = !!error;
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 4}
          required={required}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`mt-1 w-full rounded-xl border px-3 py-2 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors ${
            hasError
              ? "border-red-500 bg-red-50/20 text-slate-200 placeholder-slate-400"
              : "border-slate-600 bg-slate-900/50 text-slate-200 placeholder-slate-500"
          }`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          pattern={type === "tel" ? "^\\+569\\s?\\d{4}\\s?\\d{4}$" : undefined} // ✅ Patrón chileno
          inputMode={type === "tel" ? "tel" : undefined}
          title={type === "tel" ? "Formato: +569 XXXX XXXX" : undefined}
          required={required}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`mt-1 w-full rounded-xl border px-3 py-2 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors ${
            hasError
              ? "border-red-500 bg-red-50/20 text-slate-200 placeholder-slate-400"
              : "border-slate-600 bg-slate-900/50 text-slate-200 placeholder-slate-500"
          }`}
        />
      )}
      {children}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
