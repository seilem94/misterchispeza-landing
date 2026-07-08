"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Icono SVG personalizado de WhatsApp
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.909 1.504 5.511 0 9.995-4.485 9.998-10 .001-2.67-1.03-5.18-2.902-7.051C16.771 1.73 14.265.69 11.595.69c-5.5 0-9.986 4.486-9.99 10-.001 1.893.493 3.748 1.431 5.378L2.008 22l6.005-1.574c-.527.288-1.025.432-1.432.432.203.001.077 0-.074-.012zm11.502-4.578c-.307-.154-1.82-.9-2.1-.1-.28.1-.482.154-.69.462-.21.308-.8.995-.98 1.201-.18.206-.36.23-.668.077-.308-.154-1.3-.48-2.477-1.53-1.177-1.05-1.972-2.348-2.203-2.733-.23-.385-.025-.593.129-.747.14-.138.308-.36.462-.539.154-.18.206-.308.308-.514.103-.206.051-.385-.026-.54-.077-.154-.692-1.67-.949-2.285-.25-.602-.503-.52-.69-.53l-.59-.011c-.206 0-.54.077-.822.385-.282.308-1.078 1.053-1.078 2.57 0 1.516 1.104 2.985 1.258 3.19.154.206 2.172 3.31 5.262 4.643.735.316 1.309.505 1.758.648.74.235 1.414.202 1.947.123.593-.088 1.82-.745 2.078-1.46.257-.717.257-1.334.18-1.461-.077-.128-.282-.205-.59-.359z" />
  </svg>
);

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const widgetRef = useRef<HTMLDivElement>(null);

  // Ocultar el widget si estamos en la página de agradecimiento
  if (pathname === "/gracias") {
    return null;
  }

  // Cerrar al hacer clic fuera del widget
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Tarjeta de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-16 sm:bottom-20 right-[-8px] sm:right-0 w-[calc(100vw-32px)] sm:w-[350px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100"
          >
            {/* Header del Chat */}
            <div className="bg-[#075e54] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl font-bold">
                  ⚡
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#075e54] bg-[#25d366]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold leading-tight">Soporte Mr. Chispeza</h4>
                  <p className="text-xs text-slate-200">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cuerpo del Chat */}
            <div className="bg-[#efeae2] p-4 max-h-[350px] overflow-y-auto relative">
              {/* Burbuja de Mensaje del Bot */}
              <div className="mb-4 max-w-[85%] rounded-2xl rounded-tl-none bg-white p-3.5 text-sm text-slate-800 shadow-xs relative">
                <div className="absolute top-0 -left-2 h-0 w-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent" />
                <p className="leading-relaxed">
                  ¡Hola! 👋 Gracias por visitarnos. ¿De qué zona de la Región de Valparaíso nos contactas para poder derivarte con el técnico adecuado?
                </p>
                <span className="mt-1 block text-right text-[10px] text-slate-400">
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>

              {/* Botones de Selección */}
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href="/gracias?to=whatsapp&zone=costa"
                  className="flex flex-col w-full items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-emerald-500 py-3 px-4 text-center text-sm font-semibold text-slate-700 hover:text-emerald-700 shadow-xs hover:shadow-md transition-all"
                >
                  <span>📍 Quinta Costa</span>
                  <span className="text-xs text-slate-400 font-normal mt-0.5">
                    (Valparaíso, Viña, Concón)
                  </span>
                </a>
                <a
                  href="/gracias?to=whatsapp&zone=marga"
                  className="flex flex-col w-full items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-emerald-500 py-3 px-4 text-center text-sm font-semibold text-slate-700 hover:text-emerald-700 shadow-xs hover:shadow-md transition-all"
                >
                  <span>📍 Marga Marga</span>
                  <span className="text-xs text-slate-400 font-normal mt-0.5">
                    (Quilpué, Villa Alemana, Limache)
                  </span>
                </a>
              </div>
            </div>

            {/* Footer / Nota para Otras Zonas */}
            <div className="border-t border-slate-100 bg-slate-50 p-3 text-center">
              <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                💡 Si perteneces a otra zona geográfica, por favor selecciona <strong>Quinta Costa</strong> para derivarte al técnico correspondiente.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden"
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto de pulso si el chat está cerrado */}
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40 opacity-75" />
        )}
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>
    </div>
  );
}
