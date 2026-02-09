import { Button, Container } from "@/app/components/ui";
import {
  ClipboardCheck,
  Calculator,
  Wrench,
  CheckCircle,
  FileCheck,
} from "lucide-react";

const pasos = [
  {
    numero: 1,
    icon: ClipboardCheck,
    titulo: "Evaluación Inicial",
    descripcion:
      "Visita técnica gratuita para evaluar tu techo, consumo eléctrico y viabilidad del proyecto.",
    duracion: "1 día",
  },
  {
    numero: 2,
    icon: Calculator,
    titulo: "Cotización Personalizada",
    descripcion:
      "Diseñamos el sistema óptimo según tu consumo y presupuesto. Incluye simulación de ahorro.",
    duracion: "2-3 días",
  },
  {
    numero: 3,
    icon: FileCheck,
    titulo: "Tramitación y Permisos",
    descripcion:
      "Gestionamos todos los permisos municipales y trámites SEC requeridos.",
    duracion: "15-20 días",
  },
  {
    numero: 4,
    icon: Wrench,
    titulo: "Instalación",
    descripcion:
      "Montaje de paneles, inversor y estructura. Equipo certificado y equipamiento profesional.",
    duracion: "3-5 días",
  },
  {
    numero: 5,
    icon: CheckCircle,
    titulo: "Puesta en Marcha",
    descripcion:
      "Conexión a red eléctrica, pruebas y capacitación en uso del sistema de monitoreo.",
    duracion: "1 día",
  },
];

export function ProcesoInstalacion() {
  return (
    <section id="proceso" className="bg-slate-50 py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Proceso de Instalación
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Un proceso transparente y profesional de principio a fin
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora (desktop) */}
          <div
            className="absolute left-8 top-0 hidden h-full w-0.5 bg-amber-200 md:block"
            style={{ left: "2rem" }}
          />

          <div className="space-y-8">
            {pasos.map((paso, index) => {
              const Icon = paso.icon;
              return (
                <div
                  key={paso.numero}
                  className="relative flex flex-col gap-6 md:flex-row md:items-start"
                >
                  {/* Número e icono */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                        Paso {paso.numero}
                      </span>
                      <span className="text-sm text-slate-500">
                        {paso.duracion}
                      </span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-slate-900">
                      {paso.titulo}
                    </h3>
                    <p className="text-slate-600">{paso.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-lg font-medium text-slate-700">
            Tiempo total estimado:{" "}
            <strong className="text-amber-600">4-6 semanas</strong>
          </p>
          <Button href="#contacto-paneles" size="lg">
            Iniciar mi Proyecto
          </Button>
        </div>
      </Container>
    </section>
  );
}
