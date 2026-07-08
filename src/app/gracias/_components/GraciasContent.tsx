"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import WhatsAppRedirect from "./WhatsAppRedirect";

function GraciasInnerContent() {
  const searchParams = useSearchParams();
  const isWhatsapp = searchParams.get("to") === "whatsapp";

  if (isWhatsapp) {
    return (
      <div className="mx-auto max-w-md text-center text-white">
        <WhatsAppRedirect />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" aria-hidden="true" />
        </div>
      </div>
      
      <h1 className="mb-4 text-3xl font-bold text-amber-400">
        ¡Gracias por contactarnos!
      </h1>
      
      <p className="mb-6 text-lg text-slate-400">
        Hemos recibido tu mensaje correctamente. Nuestro equipo te contactará a la brevedad para atender tu solicitud.
      </p>
      
      <div className="space-y-4">
        <p className="text-sm text-slate-600">
          Tiempo de respuesta estimado: <strong>24-48 horas hábiles</strong>
        </p>
        
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/" size="md">
            Volver al inicio
          </Button>
          <Button href="/#servicios" variant="outline" size="md">
            Ver servicios
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function GraciasContent() {
  return (
    <Suspense fallback={<div className="text-slate-400 text-center">Cargando...</div>}>
      <GraciasInnerContent />
    </Suspense>
  );
}
