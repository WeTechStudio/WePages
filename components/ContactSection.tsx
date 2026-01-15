"use client";

import { useState } from 'react';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormStatus('success');
  };

  return (
    <section id="contacto" className="py-24 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para lanzar?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Agenda una demo de 15 minutos y te contamos cómo podemos ayudarte a convertir más visitantes en clientes.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-base font-medium mb-2">Tiempo promedio de respuesta</p>
                <p className="text-muted-foreground text-lg">Menos de 2 horas</p>
              </div>
              <div>
                <p className="text-base font-medium mb-2">Disponibilidad</p>
                <p className="text-muted-foreground text-lg">Lun - Vie, 9am - 6pm (GMT-3)</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl border p-8 shadow-sm">
            {formStatus === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground">Te contactaremos en breve.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-base text-primary hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-base font-medium">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-base font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="company" className="text-base font-medium">Empresa (opcional)</label>
                  <input
                    id="company"
                    type="text"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu empresa"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-base font-medium">Mensaje</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="inline-flex items-center justify-center w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : 'Solicitar demo'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
