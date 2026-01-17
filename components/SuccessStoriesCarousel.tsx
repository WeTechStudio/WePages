"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./ui/ParticlesBackground";
import Typed from "typed.js";

interface Project {
  id: number;
  title: string;
  clientType: "Landing Page" | "E-commerce" | "SaaS" | "Aplicación Web";
  description: string;
  image: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AguaConnect",
    clientType: "Landing Page",
    description: "Landing page corporativa con secciones de servicios, testimonios y formulario de contacto para empresa de distribución de agua",
    image: "/images/projects/AguaConnect.png",
    gallery: [
      "/images/projects/AguaConnect/AguaConnect2.png",
      "/images/projects/AguaConnect/AguaConnect3.png",
      "/images/projects/AguaConnect/AguaConnect4.png",
    ],
  },
  {
    id: 2,
    title: "LibreriaJSR",
    clientType: "E-commerce",
    description: "E-commerce completo con catálogo de productos, carrito de compras, pasarela de pagos y panel de administración",
    image: "/images/projects/LibreriaJSR.png",
    gallery: [
      "/images/projects/LibreriaJSR/LibreriaJSR2.png",
      "/images/projects/LibreriaJSR/LibreriaJSR3.png",
      "/images/projects/LibreriaJSR/LibreriaJSR4.png",
    ],
  },
  {
    id: 3,
    title: "WeRide",
    clientType: "Aplicación Web",
    description: "Frontend completo de aplicación de renta de bicicletas con mapa interactivo, reservas y panel de usuario",
    image: "/images/projects/WeRide.png",
    gallery: [
      "/images/projects/WeRide/WeRide2.png",
      "/images/projects/WeRide/WeRide3.png",
      "/images/projects/WeRide/WeRide4.png",
    ],
  },
];

const clientTypeLabels: Record<Project["clientType"], string> = {
  "Landing Page": "Landing Page",
  "E-commerce": "E-commerce",
  "SaaS": "SaaS",
  "Aplicación Web": "Aplicación Web",
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onMouseEnter: (project: Project) => void;
  onMouseLeave: () => void;
}

function ProjectCard({ project, index, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}
      className="flex-shrink-0 w-80 md:w-96 group relative bg-white/5 border border-white/20 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-300"
      onMouseEnter={() => onMouseEnter(project)}
      onMouseLeave={onMouseLeave}
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
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Nuestros Productos", "Proyectos Ejecutados", "Soluciones Entregadas"],
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

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
    window.addEventListener('touchstart', checkTouchDevice, { once: true });

    return () => window.removeEventListener('touchstart', checkTouchDevice);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (hoveredProject) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [hoveredProject]);

  const handleMouseEnter = (project: Project) => {
    if (isTouchDevice) return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 500);
  };

  const handleModalEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleModalLeave = () => {
    if (isTouchDevice) return;
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 500);
  };

  const duplicatedProjects = useMemo((): Array<Project & { _displayIndex: number }> => {
    const result: Array<Project & { _displayIndex: number }> = [];
    
    projects.forEach((p, i) => {
      result.push({ ...p, _displayIndex: i });
    });
    
    projects.forEach((p, i) => {
      result.push({ ...p, _displayIndex: i + projects.length });
    });
    
    return result;
  }, []);

  return (
    <>
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
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
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
                <span className="text-gray-400">entregados en el tiempo acordado</span>
                <span className="font-semibold text-white">resultados más que satisfactorios</span>
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>

    <HoverGalleryModal
      project={hoveredProject!}
      isVisible={hoveredProject !== null}
      onModalEnter={handleModalEnter}
      onModalLeave={handleModalLeave}
    />
    </>
  );
}

interface HoverGalleryModalProps {
  project: Project;
  isVisible: boolean;
  onModalEnter: () => void;
  onModalLeave: () => void;
}

const HoverGalleryModal = ({ project, isVisible, onModalEnter, onModalLeave }: HoverGalleryModalProps) => {
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 bg-black/60 pointer-events-none z-40"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-8"
            onMouseEnter={onModalEnter}
            onMouseLeave={onModalLeave}
          >
            <div
              className="w-[85vw] h-[90vh] bg-black/90 border border-white/20 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md flex flex-col"
              role="dialog"
              aria-modal="false"
              aria-label={`Galería de ${project.title}`}
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {clientTypeLabels[project.clientType]}
                </p>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  {project.gallery.map((imagePath, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
                    >
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={imagePath}
                          alt={`${project.title} - Imagen ${i + 2}`}
                          fill
                          className="object-contain"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
