"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CAROUSEL_ITEMS = [
  { label: "SaaS B2B", metric: "+45% leads" },
  { label: "E-commerce", metric: "+32% ventas" },
  { label: "Consultoría", metric: "+60% citas" },
  { label: "Producto digital", metric: "conversión optimizada" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [init, setInit] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.6,
            },
          },
        },
      },
      particles: {
        color: {
          value: ["#525252", "#737373", "#a3a3a3", "#d4d4d4"],
        },
        links: {
          color: "#a3a3a3",
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "outside" as const,
          enable: true,
          outModes: {
            default: "out" as const,
          },
          random: true,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 600,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 2,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-36 pb-16 px-4 md:px-8 overflow-hidden">
      {init && (
        <Particles
          id="tsparticles-hero"
          options={particlesOptions}
          className="absolute inset-0 pointer-events-auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}

      <div className="container mx-auto max-w-6xl relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.05]">
            Convierte visitas en ventas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            WePages entrega una landing optimizada para conversión en menos de 7 días. Setup, deploy y opciones de pago locales incluidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Solicitar demo — 15 min
            </a>
            <a
              href="#precios"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background hover:bg-secondary/50 h-14 px-10 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Ver precios
            </a>
          </div>

          <p className="text-base text-muted-foreground">
            Incluye SSL, deploy y 7 días de soporte.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl border bg-muted/30 backdrop-blur-sm">
            <div className="flex items-center justify-between p-10 md:p-14 min-h-[200px] md:min-h-[260px]">
              <button
                onClick={prevSlide}
                className="flex-shrink-0 p-3 hover:bg-muted rounded-full transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
              </button>

              <div className="flex-1 text-center px-6">
                <span className="text-sm md:text-base text-muted-foreground uppercase tracking-widest mb-4 block">
                  Caso de éxito
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {CAROUSEL_ITEMS[currentIndex].label} — {CAROUSEL_ITEMS[currentIndex].metric}
                </span>
              </div>

              <button
                onClick={nextSlide}
                className="flex-shrink-0 p-3 hover:bg-muted rounded-full transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {CAROUSEL_ITEMS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
