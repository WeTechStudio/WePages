"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Target, RefreshCw } from "lucide-react";

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
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Después del lanzamiento
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
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
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
            </div>

            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
              <p className="text-sm font-medium">ROI promedio</p>
              <p className="text-3xl font-bold">340%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterLaunchSection;