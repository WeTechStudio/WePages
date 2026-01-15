import { AlertCircle, Globe2, Zap } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              El problema con las landing pages actuales
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              La mayoría de las páginas web corporativas son lentas, confusas y no generan resultados. Tu cliente potencial abandona antes de entender tu propuesta de valor.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Carga lenta</h3>
                  <p className="text-muted-foreground text-sm">Cada segundo de carga reduce conversiones un 7%.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-red-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Diseño confuso</h3>
                  <p className="text-muted-foreground text-sm">Más de 5 opciones paralizan la decisión de compra.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5 text-red-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Sin métricas</h3>
                  <p className="text-muted-foreground text-sm">No sabes qué funciona ni cómo optimizar.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-lg">Antes / Después</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
