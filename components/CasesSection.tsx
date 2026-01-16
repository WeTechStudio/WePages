"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { BarChart3, TrendingUp, Zap } from 'lucide-react';

const cases = [
  {
    title: 'SaaS B2B',
    metric: '+45%',
    label: 'leads',
    description: 'Landing page para startup de software empresarial.',
    icon: BarChart3,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'E-commerce',
    metric: '+32%',
    label: 'ventas',
    description: 'Página de producto optimizada para conversión.',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Consultoría',
    metric: '+60%',
    label: 'citas',
    description: 'Sitio web para firma de consultoría estratégica.',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
  },
];

const CasesSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Casos de éxito", "Resultados que hablan", "Empresas que transformaron su presencia digital"],
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
    <section id="casos" className="py-24 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span ref={typedRef} />
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Resultados reales para empresas que apostaron por landing pages optimizadas.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((caseItem, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${caseItem.gradient} p-6 flex flex-col justify-between`}>
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <caseItem.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-white/80 text-sm font-medium mb-1">{caseItem.title}</div>
                  <div className="text-white text-4xl font-bold">{caseItem.metric}</div>
                  <div className="text-white/80 text-sm">{caseItem.label}</div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground text-base">{caseItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
