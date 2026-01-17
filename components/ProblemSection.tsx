"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { AlertCircle, Globe2, MessageCircle } from 'lucide-react';
import { HighlightWord } from '@/components/ui/HighlightWord';

const ProblemSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["El problema con las landing pages actuales", "Por qué tu landing no convierte", "Lo que está mal con tu página"],
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
    <section id="problema" className="py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span ref={typedRef} style={{ color: 'var(--foreground)' }} />
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              La mayoría de las páginas web corporativas no están diseñadas para <HighlightWord variant="hw1">convertir</HighlightWord>.
              El resultado: visitas que se pierden, mensajes que no venden y decisiones tomadas a ciegas.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-7 h-7 text-red-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Carga lenta</h3>
                  <p className="text-muted-foreground text-base">Cada segundo de carga reduce conversiones un 7%.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-red-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Falta de propósito</h3>
                  <p className="text-muted-foreground text-base">No dejas claro qué problema resuelves ni por qué deberían contactarte.</p>
                </div>  
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <Globe2 className="w-7 h-7 text-red-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Sin métricas</h3>
                  <p className="text-muted-foreground text-base">No sabes qué funciona ni cómo optimizar.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="space-y-8">
                <div className="text-center pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">De</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold text-red-500 line-through">8.2s</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-3xl font-bold text-primary">1.4s</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Tiempo de carga</p>
                </div>
                
                <div className="text-center pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">De</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold text-red-500 line-through">45%</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-3xl font-bold text-primary">2.1%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Tasa de rebote</p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">De</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold text-red-500 line-through">?</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-3xl font-bold text-primary">100%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Medibilidad</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Optimización real medible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
