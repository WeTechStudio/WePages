import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Launch',
    price: '$499',
    description: 'Landing page lista en 7 días.',
    features: [
      'Diseño personalizado',
      'Mobile optimizado',
      'SSL incluido',
      'Deploy en Vercel/Netlify',
      'Formularios integrados',
      '7 días de soporte',
    ],
    cta: 'Empezar ahora',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$899',
    description: 'Incluye SEO y analytics avanzado.',
    features: [
      'Todo lo de Launch',
      'SEO técnico',
      'Google Analytics 4',
      'Heatmaps y grabaciones',
      'A/B testing básico',
      '30 días de soporte',
      '1 mes de hosting gratis',
    ],
    cta: 'Empezar ahora',
    popular: true,
  },
  {
    name: 'Scale',
    price: '$1,499',
    description: 'Para proyectos que escalan rápido.',
    features: [
      'Todo lo de Growth',
      'Multi-idioma (2 langs)',
      'CMS integrado',
      'Integraciones API',
      'Automatizaciones',
      '3 meses de soporte',
      ' Hosting incluido por 1 año',
    ],
    cta: 'Contactar',
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="precios" className="py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Precios claros
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Sin costos ocultos. El precio incluye todo lo necesario para lanzar.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 shadow-sm ${
                plan.popular ? 'border-primary bg-primary/5' : 'bg-background'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                  Más popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-3 mb-4">
                <span className="text-5xl font-bold">{plan.price}</span>
              </div>
              <p className="text-base text-muted-foreground mb-8">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-base">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`inline-flex items-center justify-center w-full rounded-md h-12 px-6 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
