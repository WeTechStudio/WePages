"use client";

import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const mainLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#contacto', label: 'Contacto' },
];

const secondaryLinks = [
  { href: '#problema', label: 'Problema' },
  { href: '#atencion', label: 'Datos' },
  { href: '#post-lanzamiento', label: 'Post-lanzamiento' },
  { href: '#proceso', label: 'Proceso' },
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const allLinks = [...mainLinks, ...secondaryLinks];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-18">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/wetech.svg"
              alt="WeTech Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold tracking-tight">
              WePages
            </span>
          </a>

          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-1">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-base font-medium text-foreground/80 hover:text-foreground px-4 py-2 rounded-md transition-colors duration-120"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 text-base font-medium text-foreground/80 hover:text-foreground px-4 py-2 rounded-md transition-colors duration-120"
                >
                  Más
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {secondaryLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, link.href);
                          setIsDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors duration-120"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <a
            href="#contacto"
            onClick={(e) => handleSmoothScroll(e, '#contacto')}
            className="hidden md:inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Solicitar demo
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 -mr-2 hover:bg-muted rounded transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-5 border-t border-border">
            <ul className="flex flex-col gap-1">
              {allLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      handleSmoothScroll(e, link.href);
                      setIsMenuOpen(false);
                    }}
                    className="block text-base font-medium py-3 px-2 text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    handleSmoothScroll(e, '#contacto');
                    setIsMenuOpen(false);
                  }}
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-center w-full"
                >
                  Solicitar demo
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
