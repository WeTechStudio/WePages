"use client";

import { useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesBackground from "./ui/ParticlesBackground";
import Typed from "typed.js";

interface Project {
  id: number;
  title: string;
  clientType: "Empresa" | "E-commerce" | "SaaS" | "Aplicación Web";
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AguaConnect",
    clientType: "Empresa",
    description: "Landing page corporativa con secciones de servicios, testimonios y formulario de contacto para empresa de distribución de agua",
    image: "/images/projects/AguaConnect.png",
  },
  {
    id: 2,
    title: "LibreriaJSR",
    clientType: "E-commerce",
    description: "E-commerce completo con catálogo de productos, carrito de compras, pasarela de pagos y panel de administración",
    image: "/images/projects/LibreriaJSR.png",
  },
  {
    id: 3,
    title: "WeRide",
    clientType: "Aplicación Web",
    description: "Frontend completo de aplicación de renta de bicicletas con mapa interactivo, reservas y panel de usuario",
    image: "/images/projects/WeRide.png",
  },
];

const clientTypeLabels: Record<Project["clientType"], string> = {
  "Empresa": "Empresa",
  "E-commerce": "E-commerce",
  "SaaS": "SaaS",
  "Aplicación Web": "Aplicación Web",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}
      className="flex-shrink-0 w-80 md:w-96 group relative bg-white/5 border border-white/20 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-300"
    >
      <div className="relative aspect-video bg-white/5 overflow-hidden">
        <Image
          src={project.image}
          alt={`Landing page de ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 320px, 384px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/90 via-[#030305]/20 to-transparent" />
      </div>
      
      <div className="p-5 relative">
        <div className="flex items-start gap-4 mb-3">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-white mb-2">
              {clientTypeLabels[project.clientType]}
            </span>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          </div>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {project.clientType}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SuccessStoriesCarousel() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Nuestros Productos", "Landing Pages Ejecutadas", "Soluciones Entregadas"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      contentType: 'html',
    });

    return () => typed.destroy();
  }, []);

  const duplicatedProjects = useMemo((): Array<Project & { _displayIndex: number }> => {
    const result: Array<Project & { _displayIndex: number }> = [];
    projects.forEach((p, i) => {
      result.push({ ...p, _displayIndex: i });
      result.push({ ...p, _displayIndex: i + projects.length });
    });
    return result;
  }, []);

  return (
    <section
      id="casos-exito"
      className="relative py-20 md:py-28 bg-[#030305] overflow-hidden"
      aria-labelledby="success-stories-heading"
    >
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-transparent to-[#030305]" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2
              id="success-stories-heading"
              className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white"
            >
              <span ref={typedRef} style={{ color: 'white' }} />
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Con una muestra de nuestro trabajo, productos listos para generar impacto desde el primer día
            </p>
          </div>
        </div>

        <div 
          className="overflow-hidden py-4" 
          role="region" 
          aria-label="Carrusel de casos de éxito"
        >
          <div className="flex gap-6 md:gap-8 animate-scroll-right">
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 px-2 md:px-0"
                role="listitem"
                aria-label={`Proyecto ${project.title}`}
              >
                <ProjectCard 
                  project={project}
                  index={project._displayIndex}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-gray-400">Productos creados y entregados a</span>
                <span className="font-semibold text-white">{projects.length}+ clientes</span>
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
