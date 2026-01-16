"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ui/ParticlesBackground";

interface Project {
  id: number;
  title: string;
  clientType: "SaaS B2B" | "E-commerce" | "Consultoría";
  result: string;
  description: string;
  image: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TechFlow",
    clientType: "SaaS B2B",
    result: "+127%",
    description: "Aumento en leads cualificados para SaaS de automatización",
    image: "/images/projects/techflow.svg",
    accentColor: "#06b6d4",
  },
  {
    id: 2,
    title: "StoreMax",
    clientType: "E-commerce",
    result: "+89%",
    description: "Incremento en conversiones para tienda de lifestyle",
    image: "/images/projects/storemax.svg",
    accentColor: "#10b981",
  },
  {
    id: 3,
    title: "DataSync",
    clientType: "SaaS B2B",
    result: "+156%",
    description: "Crecimiento en demo requests para startup de datos",
    image: "/images/projects/datasync.svg",
    accentColor: "#3b82f6",
  },
  {
    id: 4,
    title: "LegalPro",
    clientType: "Consultoría",
    result: "+203%",
    description: "Multiplicación de consultas para firma legal",
    image: "/images/projects/legalpro.svg",
    accentColor: "#f59e0b",
  },
  {
    id: 5,
    title: "ShopWave",
    clientType: "E-commerce",
    result: "+67%",
    description: "Mejora en ventas para catálogo de moda",
    image: "/images/projects/shopwave.svg",
    accentColor: "#8b5cf6",
  },
  {
    id: 6,
    title: "CloudOps",
    clientType: "SaaS B2B",
    result: "+94%",
    description: "Optimización de pipeline para DevOps",
    image: "/images/projects/cloudops.svg",
    accentColor: "#0ea5e9",
  },
];

const clientTypeLabels: Record<Project["clientType"], string> = {
  "SaaS B2B": "SaaS B2B",
  "E-commerce": "E-commerce",
  "Consultoría": "Consultoría",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-80 md:w-96 flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="relative aspect-video bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: project.accentColor }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-md"
            style={{ backgroundColor: `${project.accentColor}25` }}
          >
            <span className="text-3xl font-bold" style={{ color: project.accentColor }}>
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{
              backgroundColor: `${project.accentColor}30`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}40`,
            }}
          >
            {clientTypeLabels[project.clientType]}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div
            className="px-3 py-1.5 rounded-full text-sm font-bold"
            style={{
              backgroundColor: `${project.accentColor}20`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}30`,
            }}
          >
            {project.result}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span className="w-1 h-1 rounded-full bg-green-400" />
            <span>Landing page</span>
          </div>
        </div>
        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Optimizada
          </span>
          <span
            className="text-xs font-medium px-2 py-1 rounded"
            style={{
              backgroundColor: `${project.accentColor}20`,
              color: project.accentColor,
            }}
          >
            Ver caso
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SuccessStoriesCarousel() {
  const duplicatedProjects = useMemo(() => {
    return [...projects, ...projects];
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
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white"
            >
              Empresas que transformaron su presencia digital
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Resultados reales para empresas que apostaron por landing pages optimizadas
            </p>
          </div>
        </div>

        <div className="overflow-hidden py-4" role="region" aria-label="Carrusel de casos de éxito">
          <div className="flex w-max animate-scroll-right">
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 px-3"
                role="listitem"
                aria-label={`Proyecto ${project.title}: ${project.result}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400">Infraestructura de conversión validada con</span>
                <span className="text-white font-semibold">{projects.length}+ empresas</span>
              </span>
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-12 h-0.5 bg-white/10 rounded-full overflow-hidden"
                role="presentation"
              >
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                  style={{
                    width: i === 1 ? "60%" : "30%",
                    opacity: i === 1 ? 1 : 0.5,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
