"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, Zap, Target, RefreshCw } from "lucide-react";
import Typed from "typed.js";

const benefits = [
  {
    icon: TrendingUp,
    title: "Analytics integrados",
    description: "GA4 configurado desde el día uno. Sin costes adicionales ni integraciones complicadas.",
  },
  {
    icon: Target,
    title: "Informes mensuales",
    description: "Reporte detallado de métricas clave: conversiones, tiempo en página, rebote y más.",
  },
  {
    icon: RefreshCw,
    title: "Optimización continua",
    description: "A/B testing de headlines, CTAs y layouts para maximizar conversiones.",
  },
  {
    icon: Zap,
    title: "Mantenimiento incluido",
    description: "Updates de seguridad, backups automáticos y soporte técnico prioritario.",
  },
];

const AfterLaunchSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Después del lanzamiento", "Post-lanzamiento", "Optimización continua"],
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
    <section id="post-lanzamiento" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span ref={typedRef} style={{ color: 'var(--foreground)' }} />
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Una landing page no es un proyecto que termina en el lanzamiento. 
              Es una herramienta de crecimiento que evoluciona con tu negocio.
            </p>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              Nos encargamos de que tu página siempre esté optimizada, segura y 
              generando datos accionables para que tomes mejores decisiones.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group flex gap-4 cursor-pointer p-3 -m-3 rounded-xl transition-colors duration-300 hover:bg-white/60 dark:hover:bg-white/5"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <benefit.icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              className="bg-card rounded-2xl p-8 border border-border shadow-sm"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-sm text-muted-foreground">Visitantes únicos</span>
                  <span className="text-2xl font-bold">+127%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-sm text-muted-foreground">Tasa de conversión</span>
                  <span className="text-2xl font-bold text-primary">4.8%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-sm text-muted-foreground">Tiempo en página</span>
                  <span className="text-2xl font-bold">2m 34s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Leads cualificados</span>
                  <span className="text-2xl font-bold">+89</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  * Datos promedio de clientes después de 3 meses
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg cursor-pointer"
              whileHover={{ 
                scale: 1.1,
                y: -4,
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <p className="text-sm font-medium">ROI promedio</p>
              <p className="text-3xl font-bold">340%</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterLaunchSection;