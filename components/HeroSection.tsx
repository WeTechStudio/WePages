import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Landing pages que venden — rápidas, limpias y medibles
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              WePages entrega una landing optimizada para conversión en menos de 7 días. Setup, deploy y opciones de pago locales incluidas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Solicitar demo — 15 min
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Ver precios
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Incluye SSL, deploy y 7 días de soporte.
            </p>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-muted rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-lg">Ilustración del producto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
