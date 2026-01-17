"use client";

import { useEffect, useRef } from "react";
import { Search, Code, TrendingUp } from 'lucide-react';
import Typed from "typed.js";
import { motion } from "framer-motion";

const phases = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Analizamos tu negocio, audiencia y competencia para diseñar una estrategia de conversión efectiva.',
    items: [
      'Auditoría inicial del mercado',
      'Definición de buyer personas',
      'Mapeo del customer journey',
      'Estrategia de propuesta de valor',
    ],
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Desarrollamos una landing optimizada para rendimiento, conversión y experiencia de usuario.',
    items: [
      'Diseño focalizado en conversión',
      'Desarrollo performant (<2s LCP)',
      'Mobile-first y accesible',
      'Analytics y tracking integrados',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Optimize',
    description: 'No terminamos en el lanzamiento. Monitorizamos, medimos y optimizamos continuamente.',
    items: [
      'Informes mensuales de métricas',
      'A/B testing de headlines y CTAs',
      'Heatmaps y grabaciones de sesión',
      'Optimización basada en datos',
    ],
  },
];

const PricingSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Diseñado para convertir", "Infraestructura que escala", "Resultados que importan"],
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

  return (
    <section id="precios" className="py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span ref={typedRef} style={{ color: 'var(--foreground)' }} />
        </h2>
        
        <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Una landing que convierte hoy. Una infraestructura que escala mañana.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl border p-8 shadow-sm transition-all duration-300 ${
                index === 1 ? 'border-primary bg-primary/5' : 'bg-background'
              }`}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  index === 1 ? 'bg-primary' : 'bg-primary/10'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <phase.icon className={`w-6 h-6 ${index === 1 ? 'text-primary-foreground' : 'text-primary'}`} strokeWidth={1.5} />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>

              <ul className="space-y-3 mb-8">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            El lanzamiento es solo el inicio.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Agendar reunión gratuita
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Más que una landing page. Un sistema de crecimiento medible.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;