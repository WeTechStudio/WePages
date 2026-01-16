"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Eye, ArrowDown } from "lucide-react";
import Typed from "typed.js";

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
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Tienes 20 segundos.", "Tu cliente decide en menos.", "La atención es tu recurso más escaso."],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="atencion" className="py-28 md:py-40 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-base font-medium text-zinc-400 uppercase tracking-wider mb-6 block">
            La realidad del attention economy
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span ref={typedRef} />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-18 h-18 rounded-full bg-zinc-800 mb-6">
                <stat.icon className="w-8 h-8 text-zinc-300" strokeWidth={1.5} />
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                {stat.value}
                <span className="text-xl font-normal text-zinc-400 ml-2">
                  {stat.unit}
                </span>
              </div>
              <p className="text-lg text-zinc-300 font-medium mb-2">{stat.label}</p>
              <p className="text-sm text-zinc-500">{stat.source}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-10 md:p-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                La mayoría de las landing pages fallan en esto
              </h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-4">
                  <span className="text-red-400 mt-1 text-lg">×</span>
                  <span className="text-lg">Tardan más de 3 segundos en cargar</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-400 mt-1 text-lg">×</span>
                  <span className="text-lg">El headline no dice qué problema resuelven</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-400 mt-1 text-lg">×</span>
                  <span className="text-lg">Tienen más de 3 opciones de navegación</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-400 mt-1 text-lg">×</span>
                  <span className="text-lg">El CTA principal no es claro ni visible</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-8 border border-zinc-700">
              <p className="text-xl font-medium text-white mb-3">
                "Si tu cliente no entiende qué vendes en 20 segundos,
                no importa qué tan bueno sea tu producto."
              </p>
              <p className="text-base text-zinc-500">
                La claridad gana. La velocidad vende.
              </p>
            </div>
            </div>
          </motion.div>

          <motion.p
            className="text-center text-2xl md:text-3xl font-medium text-zinc-300 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            WePages está diseñado específicamente para ganar en esos primeros 20 segundos.
          </motion.p>
        </div>
      </section>
  );
};

export default AttentionSection;
