"use client";
import { Container } from "@/app/components/ui";
import { Button } from "@/app/components/ui/Button";
import { Sun, Zap, TrendingDown, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export function HeroPaneles() {
  
  return (
    <section className="relative overflow-hidden bg-slate-900/50 py-10 text-white">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 h-full opacity-40">
        <div className="absolute inset-0 h-full bg-[url('/grid-pattern.jpg')] bg-auto bg-bottom" />
      </div>

      <Container className="relative z-10">
        {/* ✅ CAMBIA: mx-auto max-w-4xl text-center → max-w-4xl text-left */}

        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-md font-medium backdrop-blur"
          >
            <Sun className="h-4 w-4" />
            Energía Solar Profesional
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="mb-6 text-6xl font-bold leading-tight"
          >
            Instalación de{" "}
            <span className="text-amber-500">Paneles Solares</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4,
            }}
            className="py-5 mb-8 lg:text-lg font-bold text-slate-300 sm:text-xl"
          >
            Reduce tu factura eléctrica hasta un 90% con energía limpia y
            renovable
          </motion.p>

          {/* ✅ CAMBIA: justify-center → justify-start */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4,
            }}
            className="mb-12 flex flex-wrap justify-start gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur">
                <Zap className="h-5 w-5" />
              </div>
              <span className="font-medium">Instalación Certificada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur">
                <TrendingDown className="h-5 w-5" />
              </div>
              <span className="font-medium">Ahorro Garantizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur">
                <DollarSign className="h-5 w-5" />
              </div>
              <span className="font-medium">
                Desde $8MM + IVA — instalación tipo 8 kW
              </span>
            </div>
          </motion.div>

          {/* ✅ CAMBIA: sm:justify-center → sm:justify-start */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
            <Button
              href="#contacto-paneles"
              size="lg"
              className="bg-white/95 text-amber-600 hover:bg-amber-100"
            >
              Solicitar Cotización
            </Button>
            <Button
              href="#proceso"
              size="lg"
              variant="outline"
              className="bg-amber-500/90 border-white text-white hover:bg-white/10"
            >
              Ver Proceso
            </Button>
          </div>
        </div>
      </Container>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}
