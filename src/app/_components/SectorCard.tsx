"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Sector } from "@/lib/types";
import { getIconComponent } from "@/lib/utils/get-icon";

interface SectorCardProps {
  sector: Sector;
  index: number;
}

/**
 * Tarjeta individual de sector
 */
export function SectorCard({ sector, index }: SectorCardProps) {
  const IconComponent = getIconComponent(sector.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-4xl border border-slate-200 p-6 text-center shadow-xl"
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
        <IconComponent />
      </div>
      <h4 className="text-lg font-semibold">{sector.title}</h4>
      <p className="mt-2 text-slate-600">{sector.description}</p>
    </motion.div>
  );
}
