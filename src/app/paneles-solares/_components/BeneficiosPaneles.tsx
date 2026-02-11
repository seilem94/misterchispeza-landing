"use client";

import React from "react";
import { Section, Container } from "@/app/components/ui";
import { Zap, TrendingDown, Leaf, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/app/components/ui";

const beneficios = [
  {
    icon: TrendingDown,
    title: "Reduce tu Factura",
    description: "Ahorra hasta un 90% en tu cuenta de electricidad mensual",
  },
  {
    icon: Leaf,
    title: "Energía Limpia",
    description: "Contribuye al medio ambiente con energía 100% renovable",
  },
  {
    icon: Zap,
    title: "Independencia Energética",
    description: "Genera tu propia electricidad y protégete de alzas",
  },
  {
    icon: Shield,
    title: "Garantía Extendida",
    description: 'Garantía estándar del producto: 10–12 años. Garantía de rendimiento: hasta 25 años.',
  },
  {
    icon: Clock,
    title: "Instalación Rápida",
    description: "Sistema operativo en 5-7 días hábiles",
  },
  {
    icon: Award,
    title: "Certificación SEC",
    description: "Instalaciones certificadas según normativa chilena",
  },
];

export function BeneficiosPaneles() {
  return (
    <Section id="beneficios-paneles" className="py-20 bg-white">
      <Container className="mb-12 text-center">
        <div>
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            ¿Por qué instalar paneles solares?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Invierte en tu futuro energético con tecnología limpia y eficiente
          </p>
        </div>

        <div className="grid py-10 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={beneficio.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card hover className="text-left py-6 h-full">
                <CardHeader
                  icon={<beneficio.icon className="h-6 w-6" />}
                  title={beneficio.title}
                  className="mb-2 py-2 text-slate-900"
                />
                <CardContent>
                  <p className="py-2 text-slate-700">{beneficio.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
