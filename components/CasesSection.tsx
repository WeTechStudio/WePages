import Image from 'next/image';

const cases = [
  {
    title: 'SaaS B2B',
    metric: '+45% leads',
    description: 'Landing page para startup de software empresarial.',
  },
  {
    title: 'E-commerce',
    metric: '+32% ventas',
    description: 'Página de producto optimizada para conversión.',
  },
  {
    title: 'Consultoría',
    metric: '+60% citas',
    description: 'Sitio web para firma de consultoría estratégica.',
  },
];

const CasesSection = () => {
  return (
    <section id="casos" className="py-24 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Casos de éxito
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Resultados reales para empresas que apostaron por landing pages optimizadas.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((caseItem, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-base">Imagen del proyecto</span>
                </div>
              </div>
              <div className="p-8">
                <div className="text-base text-primary font-medium mb-3">{caseItem.title}</div>
                <h3 className="text-3xl font-bold mb-3">{caseItem.metric}</h3>
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
