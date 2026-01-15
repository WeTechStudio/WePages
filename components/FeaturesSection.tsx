import { BarChart3, Zap, Globe, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Medible',
    description: 'Analytics integrados desde el día uno. Sin configuraciones extra.',
  },
  {
    icon: Zap,
    title: 'Rápida',
    description: 'Carga en menos de 2 segundos. Optimizada para Core Web Vitals.',
  },
  {
    icon: Globe,
    title: 'Multilenguaje',
    description: 'Listo para varios idiomas sin costos adicionales.',
  },
  {
    icon: CheckCircle,
    title: 'Mantenimiento',
    description: 'Soporte técnico incluido por 30 días. Después, plans opcionales.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Características incluidas
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Todo lo que necesitas para una landing page de alto rendimiento, sin complicaciones.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
