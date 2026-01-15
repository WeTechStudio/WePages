"use client";

import { motion } from "framer-motion";
import { Clock, Eye, ArrowDown } from "lucide-react";

const STATS = [
  {
    icon: Clock,
    value: "8.25",
    unit: "segundos",
    label: "Atención promedio en mobile",
    source: "Microsoft Research, 2023",
  },
  {
    icon: Eye,
    value: "79%",
    label: "Escanea sin leer en profundidad",
    source: "Nielsen Norman Group",
  },
  {
    icon: ArrowDown,
    value: "47%",
    label: "Abandona en los primeros 3 segundos",
    source: "Google Core Web Vitals",
  },
];

const AttentionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4 block">
            La realidad del attention economy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Tienes 20 segundos.<br />
            <span className="text-zinc-400">Tu cliente decide en menos.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-zinc-800 mb-4">
                <stat.icon className="w-6 h-6 text-zinc-300" strokeWidth={1.5} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                {stat.value}
                <span className="text-lg font-normal text-zinc-400 ml-1">
                  {stat.unit}
                </span>
              </div>
              <p className="text-zinc-300 font-medium mb-1">{stat.label}</p>
              <p className="text-xs text-zinc-500">{stat.source}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                La mayoría de las landing pages fallan en esto
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">×</span>
                  <span>Tardan más de 3 segundos en cargar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">×</span>
                  <span>El headline no dice qué problema resuelven</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">×</span>
                  <span>Tienen más de 3 opciones de navegación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">×</span>
                  <span>El CTA principal no es claro ni visible</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 border border-zinc-700">
              <p className="text-lg font-medium text-white mb-2">
                "Si tu cliente no entiende qué vendes en 20 segundos,
                no importa qué tan bueno sea tu producto."
              </p>
              <p className="text-sm text-zinc-500">
                La claridad gana. La velocidad vende.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttentionSection;
