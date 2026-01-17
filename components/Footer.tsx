"use client";

import { ExternalLink, ArrowRight } from 'lucide-react';

const footerProductLinks = [
  { href: '#servicios', label: 'Características' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#casos-exito', label: 'Casos de éxito' },
];

const footerResourceLinks = [
  { href: '#atencion', label: 'Datos' },
  { href: '#post-lanzamiento', label: 'Post-lanzamiento' },
  { href: 'https://discord.gg/QEwbGxaQkt', label: 'Comunidad', external: true },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    const headerHeight = 72;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const FooterBrand = () => {
  return (
    <div className="space-y-4">
      <div className="font-bold text-xl">WePages</div>
      <p className="text-sm text-muted-foreground">
        Contacto: wepagesstudio@gmail.com
      </p>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Únete a nuestra comunidad
        </p>
        <a
          href="https://discord.gg/QEwbGxaQkt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          aria-label="Discord"
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          <span className="text-sm">Discord</span>
        </a>
      </div>
    </div>
  );
};

interface FooterNavProps {
  title: string;
  links: Array<{ href: string; label: string; external?: boolean }>;
}

const FooterNav = ({ title, links }: FooterNavProps) => {
  return (
    <div>
      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={(e) => !link.external && handleSmoothScroll(e, link.href)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1 inline-flex items-center gap-1"
            >
              {link.label}
              {link.external && <ExternalLink className="w-3 h-3" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterNewsletter = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-sm uppercase tracking-wider">Newsletter</h3>
        <p className="text-sm text-muted-foreground">
          Tips de conversión cada semana
        </p>
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="tu@email.com"
            className="h-10 w-full px-3 rounded-md border bg-background text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
          <button
            type="submit"
            className="h-10 w-full px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Suscribir
          </button>
        </form>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-sm uppercase tracking-wider">Trabaja con nosotros</h3>
        <p className="text-sm text-muted-foreground">
          ¿Quieres crear landings de alto impacto?
        </p>
        <a
          href="#contacto"
          onClick={(e) => handleSmoothScroll(e, '#contacto')}
          className="inline-flex items-center justify-center w-full h-10 px-4 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary/5 transition-colors gap-2"
        >
          Contáctanos
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <FooterBrand />
          <FooterNav title="Producto" links={footerProductLinks} />
          <FooterNav title="Recursos" links={footerResourceLinks} />
          <FooterNewsletter />
        </div>
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WePages. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
