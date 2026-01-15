import { MessageSquare, FileText, Code, Rocket } from 'lucide-react';

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
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Cómo funciona
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" style={{ left: '12.5%', right: '12.5%' }} />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Paso {step.step}</div>
                <h3 className="font-bold text-base mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
