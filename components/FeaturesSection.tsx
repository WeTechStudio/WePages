"use client";

import { useEffect, useRef } from "react";
import { BarChart3, Zap, Globe, CheckCircle } from 'lucide-react';
import Typed from "typed.js";

const features = [
  {
    icon: BarChart3,
    title: 'Medible',
    description: 'Medimos visitas, clics y conversiones desde el primer día.',
  },
  {
    icon: Zap,
    title: 'Rápida',
    description: 'Carga rápida. Optimizada para Core Web Vitals.',
  },
  {
    icon: Globe,
    title: 'Multilenguaje',
    description: 'Listo para varios idiomas sin costos adicionales.',
  },
  {
    icon: CheckCircle,
    title: 'Evolución continua',
    description: 'Tu landing queda lista para optimizar, escalar y crecer según resultados.',
  },
];

const FeaturesSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Características incluidas", "Lo que incluye tu landing", "Todo para maximizar conversiones"],
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
    <section id="servicios" className="py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span ref={typedRef} />
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Todo lo que necesitas para una landing page de alto rendimiento, sin complicaciones.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl border bg-card text-card-foreground shadow-sm">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
