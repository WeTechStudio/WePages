"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, FileText, Code, Rocket } from 'lucide-react';
import Typed from "typed.js";

const steps = [
  {
    icon: MessageSquare,
    step: '1',
    title: 'Discovery',
    description: '10–15 min de llamada',
  },
  {
    icon: FileText,
    step: '2',
    title: 'Brief y assets',
    description: 'Recopilamos tu marca',
  },
  {
    icon: Code,
    step: '3',
    title: 'Build',
    description: '1–7 días de desarrollo',
  },
  {
    icon: Rocket,
    step: '4',
    title: 'Launch',
    description: 'Deploy y soporte',
  },
];

const ProcessSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Cómo funciona", "Tu landing en 4 pasos", "Proceso simple y ágil"],
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
    <section className="py-24 md:py-36 bg-card">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span ref={typedRef} />
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-border" style={{ left: '12.5%', right: '12.5%' }} />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="w-7 h-7 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-base text-muted-foreground mb-2">Paso {step.step}</div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-base text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
