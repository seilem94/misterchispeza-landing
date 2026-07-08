"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

export default function WhatsAppRedirect() {
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [zoneLabel, setZoneLabel] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const to = searchParams.get("to");
    const zone = searchParams.get("zone");

    if (to === "whatsapp") {
      setIsRedirecting(true);

      // Configuración de números y mensajes según la zona
      let phone = "56986774423"; // Quinta Costa (default)
      let label = "Quinta Costa";
      let text = "Hola, me gustaría realizar una consulta sobre sus servicios eléctricos (Quinta Costa).";

      if (zone === "marga") {
        phone = "56968204310";
        label = "Marga Marga";
        text = "Hola, me gustaría realizar una consulta sobre sus servicios eléctricos (Marga Marga).";
      }

      setZoneLabel(label);
      
      const encodedText = encodeURIComponent(text);
      const url = `https://wa.me/${phone}?text=${encodedText}`;
      setWhatsappUrl(url);

      // Track conversion in Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "whatsapp_contact_conversion", {
          event_category: "Lead",
          event_label: label,
          zone: zone,
        });
      }

      // Redirigir después de 1.5 segundos
      const timer = setTimeout(() => {
        window.location.href = url;
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  if (!isRedirecting) return null;

  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xs text-center max-w-md mx-auto">
      <div className="mb-4 flex justify-center">
        <Loader2 className="h-10 w-10 text-emerald-400 animate-spin" />
      </div>
      <h2 className="text-xl font-bold text-slate-100 mb-2">
        Redirigiéndote a WhatsApp
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Te estamos derivando con el técnico de la zona de <strong className="text-emerald-400">{zoneLabel}</strong>. Esto tomará sólo un segundo...
      </p>
      
      <div className="space-y-3">
        <Button
          href={whatsappUrl}
          variant="primary"
          size="md"
          className="w-full bg-emerald-600 hover:bg-emerald-500 border-0 flex items-center justify-center gap-2"
        >
          <MessageSquare className="h-4 w-4" />
          Hacer clic si no eres redirigido
        </Button>
      </div>
    </div>
  );
}
