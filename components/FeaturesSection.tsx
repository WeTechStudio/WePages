"use client";

import { useEffect, useRef } from "react";
import { 
  BarChart3, Zap, Globe, CheckCircle,
  TrendingUp, Gauge, Languages, Layers,
  Search, Smartphone, LineChart, Database,
  Bot, Target, Monitor, Plug
} from 'lucide-react';
import Typed from "typed.js";
import type { LucideIcon } from 'lucide-react';

interface FeatureCard {
  front: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  back: {
    icon: LucideIcon;
    benefit: string;
    testimonial: string;
  };
}

const features: FeatureCard[] = [
  {
    front: {
      icon: BarChart3,
      title: 'Medible',
      description: 'Medimos visitas, clics y conversiones desde el primer día.',
    },
    back: {
      icon: TrendingUp,
      benefit: '+340% conversión en 30 días',
      testimonial: "El mejor ROI de todo nuestro marketing",
    },
  },
  {
    front: {
      icon: Zap,
      title: 'Rápida',
      description: 'Carga rápida. Optimizada para Core Web Vitals.',
    },
    back: {
      icon: Gauge,
      benefit: 'LCP < 2.0s, INP < 100ms',
      testimonial: "Nunca había visto una landing tan rápida",
    },
  },
  {
    front: {
      icon: Globe,
      title: 'Multilenguaje',
      description: 'Listo para varios idiomas sin costos adicionales.',
    },
    back: {
      icon: Languages,
      benefit: 'Español, Portugués, Inglés',
      testimonial: "Llegamos a 3 mercados sin configurar nada",
    },
  },
  {
    front: {
      icon: CheckCircle,
      title: 'Evolución continua',
      description: 'Tu landing queda lista para optimizar, escalar y crecer según resultados.',
    },
    back: {
      icon: Layers,
      benefit: 'Updates mensuales incluidos',
      testimonial: "Siempre mejorando, nunca estancado.",
    },
  },
  {
    front: {
      icon: Search,
      title: 'SEO Optimizada',
      description: 'Diseñada para rankear en Google desde el primer día.',
    },
    back: {
      icon: Target,
      benefit: '#1 en keywords locales',
      testimonial: "Pasamos de página 10 a top 3 en 2 semanas.",
    },
  },
  {
    front: {
      icon: Smartphone,
      title: 'Responsive',
      description: 'Funciona perfectamente en todos los dispositivos.',
    },
    back: {
      icon: Monitor,
      benefit: '100% mobile score Lighthouse',
      testimonial: "La conversión en móvil se duplicó.",
    },
  },
  {
    front: {
      icon: LineChart,
      title: 'Analytics integrados',
      description: 'Datos reales sin configurar herramientas externas.',
    },
    back: {
      icon: Database,
      benefit: 'Dashboard en tiempo real',
      testimonial: "Ahora sabemos exactamente qué funciona.",
    },
  },
  {
    front: {
      icon: Bot,
      title: 'Automatizaciones',
      description: 'Integración con HubSpot, Notion, Slack.',
    },
    back: {
      icon: Plug,
      benefit: 'Workflows pre-configurados',
      testimonial: "Nos ahorramos 10 horas semanales.",
    },
  },
];

const FlipCard = ({ feature }: { feature: FeatureCard }) => {
  return (
    <div className="perspective-1000 overflow-hidden">
      <div className="relative h-[340px] transition-transform duration-500 ease-in-out preserve-3d group-hover:rotate-y-180">
        
        <div className="absolute inset-0 backface-hidden p-8 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <feature.front.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="font-semibold text-xl mb-3">{feature.front.title}</h3>
          <p className="text-muted-foreground text-base">{feature.front.description}</p>
        </div>
        
        <div className="absolute inset-0 backface-hidden rotate-y-180 p-8 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <feature.back.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="font-semibold text-xl mb-3">{feature.back.benefit}</h3>
          <p className="text-muted-foreground text-sm italic">&ldquo;{feature.back.testimonial}&rdquo;</p>
        </div>
        
      </div>
    </div>
  );
};

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
      contentType: 'html',
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="servicios" className="py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span ref={typedRef} style={{ color: 'var(--foreground)' }} />
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Todo lo que necesitas para una landing page de alto rendimiento, sin complicaciones.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <FlipCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
