# AGENTS.md - WePages

## Propósito del Proyecto

WePages es un servicio de creación de landing pages optimizadas para conversión, diseñadas específicamente para negocios que necesitan una presencia digital efectiva y medible. El proyecto consiste tanto en el sitio web corporativo de WePages como en las landing pages que se entregan como producto a los clientes.

### Problema que Resuelve

La mayoría de las landing pages actuales fallan en tres aspectos críticos:

1. **Velocidad de carga**: Cada segundo adicional reduce las conversiones un 7%
2. **Claridad del mensaje**: Más de 5 opciones paralizan la decisión de compra
3. **Medibilidad**: Los negocios no saben qué funciona ni cómo optimizar

### Propuesta de Valor

WePages entrega landing pages que:
- Cargan en menos de 2 segundos (optimizadas para Core Web Vitals)
- Tienen mensajes claros enfocados en la propuesta de valor
- Incluyen analytics integrados desde el día uno
- Están listas en menos de 7 días
- Soportan múltiples idiomas sin costos adicionales
- Incluyen SSL, deploy y soporte técnico

### Público Objetivo

- Startups B2B que necesitan generar leads cualificados
- E-commerce que quiere aumentar conversiones
- Consultorías y firmas de servicios profesionales
- Cualquier negocio que necesite una landing page de alto rendimiento

---

## Estética y Diseño

### Filosofía de Diseño

El diseño de WePages sigue una filosofía de **minimalismo funcional**: cada elemento debe tener un propósito claro. No hay decoración innecesaria, cada espacio en blanco comunica tanto como el contenido.

#### Principios Fundamentales

1. **Claridad sobre creatividad**: El mensaje siempre prima sobre la estética
2. **Velocidad como feature**: El diseño no puede comprometer el rendimiento
3. **Consistencia visual**: Todos los elementos siguen el mismo lenguaje visual
4. **Accesibilidad**: El diseño debe ser usable por todas las personas
5. **Mobile-first**: El diseño se piensa primero para mobile, luego se expande

### Paleta de Colores

El sistema de colores está basado en **CSS variables** con el modelo **OKLCH** para mejor precisión cromática y soporte de dark mode.

#### Colores del Tema Claro (Light Mode)

```css
:root {
  --background: oklch(1 0 0);          /* Blanco puro */
  --foreground: oklch(0.145 0 0);      /* Negro suave, texto principal */
  --card: oklch(1 0 0);                /* Cards */
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);         /* Negro, color principal */
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);        /* Gris muy claro, secundario */
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);            /* Gris muted */
  --muted-foreground: oklch(0.556 0 0); /* Gris texto */
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325); /* Rojo errores */
  --border: oklch(0.922 0 0);          /* Bordes sutiles */
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);            /* Rings de focus */
}
```

#### Colores del Tema Oscuro (Dark Mode)

```css
.dark {
  --background: oklch(0.145 0 0);      /* Negro suave */
  --foreground: oklch(0.985 0 0);      /* Blanco */
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);         /* Blanco, color principal */
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
}
```

#### Colores de Gráficos (Chart Colors)

```css
--chart-1: oklch(0.646 0.222 41.116);   /* Azul verdoso */
--chart-2: oklch(0.6 0.118 184.704);    /* Azul */
--chart-3: oklch(0.398 0.07 227.392);   /* Azul oscuro */
--chart-4: oklch(0.828 0.189 84.429);   /* Amarillo dorado */
--chart-5: oklch(0.769 0.188 70.08);    /* Naranja cálido */
```

#### Colores del Sidebar

```css
--sidebar: oklch(0.985 0 0);
--sidebar-foreground: oklch(0.145 0 0);
--sidebar-primary: oklch(0.205 0 0);
--sidebar-primary-foreground: oklch(0.985 0 0);
--sidebar-accent: oklch(0.97 0 0);
--sidebar-accent-foreground: oklch(0.205 0 0);
--sidebar-border: oklch(0.922 0 0);
--sidebar-ring: oklch(0.708 0 0);
```

### Usos de los Colores

- **Primary (Negro/Blanco)**: Botones principales, textos destacados, elementos de navegación
- **Secondary (Gris claro)**: Fondos de secciones, elementos secundarios
- **Muted (Gris)**: Texto secundario, etiquetas, metadatos
- **Destructive (Rojo)**: Solo para errores, estados de peligro
- **Chart colors**: Para visualizaciones de datos y estadísticas

### Radios de Borde (Border Radius)

```css
--radius: 0.625rem;    /* 10px - radio base */
--radius-sm: calc(var(--radius) - 4px);   /* 6px */
--radius-md: calc(var(--radius) - 2px);   /* 8px */
--radius-lg: var(--radius);               /* 10px */
--radius-xl: calc(var(--radius) + 4px);   /* 14px */
--radius-2xl: calc(var(--radius) + 8px);  /* 18px */
--radius-3xl: calc(var(--radius) + 12px); /* 22px */
--radius-4xl: calc(var(--radius) + 16px); /* 26px */
```

### Sombras (Shadows)

El sistema usa sombras sutiles para dar profundidad sin comprometer la limpieza visual. En el tema claro, las sombras son muy sutiles (casi imperceptibles). En el tema oscuro, se usan bordes semitransparentes en lugar de sombras.

### Espaciados

Los espaciados siguen una escala basada en múltiplos de 4:
- `p-1`: 4px
- `p-2`: 8px
- `p-3`: 12px
- `p-4`: 16px
- `p-6`: 24px
- `p-8`: 32px
- `p-12`: 48px
- `p-16`: 64px
- `p-24`: 96px

---

## Tipografía

### Fuentes del Sistema

WePages utiliza tres fuentes de Google Fonts integradas con `next/font`:

#### 1. Geist Sans (Variable)

**Propósito**: Texto principal, body, paragraphs, botones

**Características**:
- Sans-serif moderna y geométrica
- Excelente legibilidad en pantallas
- Variable font con pesos del 100 al 900
- Perfecta para texto largo

**Implementación**:
```tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

**CSS Variable**: `--font-sans`

#### 2. Geist Mono (Variable)

**Propósito**: Código, datos técnicos, elementos monoespaciados

**Características**:
- Monospace diseñada para complementar Geist Sans
- Perfecta para mostrar código, estadísticas, métricas
- Variable font

**Implementación**:
```tsx
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

**CSS Variable**: `--font-mono`

#### 3. Geom (Variable)

**Propósito**: Títulos destacados, headlines, énfasis visual

**Características**:
- Display font con personalidad
- Pesos: 300, 400, 500, 600, 700, 800, 900
- Estilos: normal e italic
- Usar con moderación para máximo impacto

**Implementación**:
```tsx
const geom = Geom({
  variable: "--font-geom",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
```

**CSS Variable**: `--font-geom`

### Jerarquía Tipográfica

#### Títulos (Headlines)

| Elemento | Size | Weight | Line Height | Usage |
|----------|------|--------|-------------|-------|
| H1 | 4xl / 5xl / 6xl (responsive) | Bold (700) | Tight (1.1) | Hero section main headline |
| H2 | 3xl / 4xl (responsive) | Bold (700) | Tight (1.2) | Section titles |
| H3 | xl / 2xl (responsive) | Semibold (600) | Normal (1.4) | Subsection titles |
| H4 | lg / xl (responsive) | Semibold (600) | Normal (1.4) | Card titles |

#### Cuerpo de Texto (Body)

| Elemento | Size | Weight | Line Height | Usage |
|----------|------|--------|-------------|-------|
| P grande | xl / 2xl (responsive) | Normal (400) | Relaxed (1.6) | Introducciones, énfasis |
| P normal | base / lg (responsive) | Normal (400) | Relaxed (1.6) | Texto principal |
| P pequeño | sm / base (responsive) | Normal (400) | Relaxed (1.6) | Texto secundario, captions |
| P muy pequeño | xs / sm (responsive) | Normal (400) | Normal (1.5) | Metadatos, timestamps |

#### UI Elements

| Elemento | Size | Weight | Usage |
|----------|------|--------|-------|
| Buttons | sm / base (responsive) | Medium (500) | CTAs, acciones |
| Navigation | sm (14px) | Medium (500) | Links de menú |
| Labels | sm (14px) | Medium (500) | Labels de formularios |
| Tags | xs (12px) | Medium (500) | Badges, categorías |

### Tamanos Responsivos

Los tamaños de fuente escalan con breakpoints:

```tsx
// Mobile first
text-4xl md:text-5xl lg:text-6xl    // H1 Hero
text-3xl md:text-4xl                // H2 Secciones
text-lg md:text-xl                  // P grande
text-base                           // P normal
text-sm                             // P pequeño
text-xs                             // UI labels
```

### Tracking y Leading

- **Tracking (letter-spacing)**: Tight para títulos grandes, normal para el resto
- **Leading (line-height)**: 
  - Títulos: 1.1 - 1.2 (tight)
  - Body: 1.6 - 1.75 (relaxed, para mejor lectura)
  - UI elements: 1.4 - 1.5 (normal)

### Aplicación en Componentes

```tsx
// Ejemplo de uso tipográfico
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
  Landing pages que venden
</h1>

<p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
  Descripción del servicio
</p>

<span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
  Label
</span>
```

---

## User Interface (UI)

### Arquitectura de Componentes

El proyecto usa una arquitectura de componentes inspirada en **shadcn/ui**, con componentes base en `components/ui/` y componentes de sección en la raíz de `components/`.

#### Estructura de Componentes

```
components/
├── ui/                    # Componentes base (shadcn style)
│   ├── SkeletonCard.tsx
│   ├── SkeletonText.tsx
│   ├── SkeletonImage.tsx
│   ├── ParticlesBackground.tsx
│   ├── TypedHeading.tsx
│   ├── HighlightWord.tsx
│   ├── MagnifyingImage.tsx
│   └── OptimizedImage.tsx
├── Header.tsx             # Navegación principal
├── Footer.tsx             # Footer
├── HeroSection.tsx        # Sección hero con partículas
├── ProblemSection.tsx     # Sección de problemas
├── AttentionSection.tsx   # Estadísticas de atención
├── FeaturesSection.tsx    # Características
├── AfterLaunchSection.tsx # Servicios post-lanzamiento
├── SuccessStoriesCarousel.tsx # Carrusel de casos de éxito
├── ProjectsSection.tsx    # Grid de proyectos
├── PricingSection.tsx     # Planes y precios
├── ProcessSection.tsx     # Proceso de trabajo
├── ContactSection.tsx     # Formulario de contacto
├── InfiniteHorizontalScroll.tsx # Scroll horizontal infinito
└── SmoothScrollProvider.tsx # Scroll smoothing
```

### Header (Navegación)

**Características**:
- Fixed position con `backdrop-blur-sm`
- Background semitransparente (`bg-background/95`)
- Borde inferior sutil
- Logo con imagen SVG
- Menú de navegación desktop con 4 enlaces
- CTA "Solicitar demo" visible
- Menú mobile con toggle

**Comportamiento responsive**:
- Desktop (>768px): Logo + nav links + CTA
- Mobile (<768px): Logo + toggle button + menú collapsible

**Colores**:
- Background: `--background/95`
- Border: `--border`
- Links: `--foreground/80` → `--foreground` on hover
- CTA: `--primary` con `--primary-foreground`

### Hero Section

**Elementos**:
- Headline principal (H1)
- Párrafo descriptivo con HighlightWord
- Dos CTAs: primario y secundario
- Background de partículas interactivas (@tsparticles/react)
- Carousel de casos de éxito con navegación (botones y dots)
- Estadísticas destacadas (+45% leads, +32% ventas, +60% citas)

**Layout**: Stack centrado, diseño optimizado para mobile first

**Partículas**:
- Interactive: Modo "grab" al hover
- Links entre partículas cercanas
- Movimiento aleatorio "outside"
- 80 partículas con opacidad animada

**Carousel**:
- 4 items: SaaS B2B, E-commerce, Consultoría, Producto digital
- Navegación con botones prev/next
- Indicadores de dots
- Auto-manual toggle

**Spacing**: `pt-24 md:pt-36 pb-16 px-4 md:px-8`

### Problem Section

**Propósito**: Identificar el problema para luego ofrecer la solución

**Elementos**:
- Título H2
- Párrafo descriptivo
- 3 cards con problemas (icono + título + descripción)
- Imagen comparativa (placeholder)

**Iconos**:
- Alerta (rojo) para "Carga lenta"
- Mensaje (rojo) para "Falta de propósito"
- Globe (rojo) para "Sin métricas"

**Background de iconos**: `bg-red-100`

### Attention Section

**Características especiales**:
- Background oscuro (`bg-zinc-950`)
- Texto blanco
- Animaciones con Framer Motion
- Estadísticas con gradient text
- Bloque de "fails" con marcas X rojas
- Cita destacados

**STATS mostradas**:
- 8.25 segundos: atención promedio en mobile
- 79%: usuarios que escanean sin leer
- 47%: abandono en primeros 3 segundos

**Animaciones**: Fade in + slide up con stagger delay

### Features Section

**Grid**: 4 columnas en desktop, 2 en tablet, 1 en mobile

**Elementos por feature**:
- Icono en círculo (`bg-primary/10`)
- Título H3
- Descripción

**Cards**: Con borde, background `--card`, shadow-sm

### AfterLaunch Section

**Propósito**: Mostrar servicios y beneficios post-lanzamiento

**Elementos**:
- Título H2 con Typed.js (animación de palabras)
- 4 beneficios con iconos (Analytics, Informes, Optimización, Mantenimiento)
- Card de estadísticas con métricas reales (visitantes, conversión, tiempo, leads)
- Badge flotante de ROI

**Background**: `bg-muted/30`

**Animaciones**:
- Framer Motion fade in + slide up
- Efecto hover con scale y shadow
- Typed.js para título animado

### SuccessStoriesCarousel

**Propósito**: Carrusel infinito de casos de éxito

**Elementos**:
- Título H2 con Typed.js
- Partículas de fondo (no interactivas)
- Scroll horizontal infinito con CSS animation
- 3 proyectos duplicados para efecto infinito:
  - AguaConnect (Empresa)
  - LibreriaJSR (E-commerce)
  - WeRide (Aplicación)
- Cards con imagen, tag, título y descripción
- Indicadores de progreso

**Background**: `bg-[#030305]` (negro profundo)

**Animación**: `scroll-right` (60s linear infinite)

### Pricing Section

**Grid**: 3 columnas

**Cards de pricing**:
- Borde con indicador `popular` (color primary)
- Badge "Más popular" en el plan Growth
- Título, precio, descripción
- Lista de features con checks
- CTA button

**Diferenciación visual**:
- Plan popular: borde primary, bg `primary/5`
- Plan normal: bg background

### Process Section

**Background**: `--card` (sección elevada)

**Layout**:
- Línea horizontal conectando pasos (desktop)
- 4 pasos con iconos en círculos
- Paso actual (step number)

**Steps**: Discovery → Brief → Build → Launch

### Contact Section

**Background**: `bg-muted/30`

**Grid**: 2 columnas

**Izquierda**:
- Título H2
- Descripción
- Tiempo de respuesta (<2 horas)
- Horario (Lun-Vie, 9-18 GMT-3)

**Derecha**: Formulario con:
- Nombre (required)
- Email (required)
- Empresa (optional)
- Mensaje (required)
- Submit button
- Estados: idle, submitting, success

### Footer

**Background**: Border top sutil

**Grid**: 4 columnas
1. Brand + descripción
2. Producto (links internos)
3. Empresa (links externos)
4. Legal (privacidad, términos)

**Bottom**: Copyright + social icons (Twitter, LinkedIn)

### UI Primitives (Shadcn-style)

#### Skeleton Components

```tsx
// SkeletonCard
<SkeletonCard
  showImage={true}
  imageAspect="aspect-[4/3]"
  lines={3}
  className=""
/>

// SkeletonImage
<SkeletonImage aspectRatio="aspect-video" />

// SkeletonText
<SkeletonText lines={3} lineHeight="h-4" />
```

#### Image Components

```tsx
// OptimizedImage (con blur placeholder)
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Descripción"
  blurDataURL="/path/to/blur-image.jpg"
  width={400}
  height={300}
  className="w-full h-48"
/>

// MagnifyingImage (efecto lupa)
<MagnifyingImage
  src="/path/to/image.jpg"
  alt="Descripción"
  zoomLevel={2}
  lensSize={150}
  className="w-full"
/>
```

#### Animation Components

```tsx
// TypedHeading (typing animation)
<TypedHeading
  words={["Palabra 1", "Palabra 2", "Palabra 3"]}
  className="text-4xl font-bold"
/>

// HighlightWord (resaltar palabras)
<HighlightWord variant="hw1">Texto destacado</HighlightWord>
```

#### Particles

```tsx
// ParticlesBackground (background de partículas no interactivas)
<ParticlesBackground />

// Configuración custom (HeroSection)
<Particles
  options={particlesOptions}
  className="absolute inset-0"
/>
```

### Formularios

**Inputs**:
- Height: `h-10` (40px)
- Border: `border-input`
- Focus ring: `focus-visible:ring-ring`
- Radius: `rounded-md`

**Textarea**:
- Rows: 4
- Resize: none

**Buttons**:
- Height: `h-10` o `h-11`
- Padding: `px-4 py-2` o `px-8`
- Radius: `rounded-md`
- Font: `text-sm font-medium`

---

## Interacciones y Animaciones

### Scroll Suave (Lenis)

El proyecto implementa **smooth scrolling** usando la librería Lenis para una experiencia de navegación más fluida y premium.

**Configuración**:
```tsx
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});
```

### Animaciones de Entrada (Framer Motion)

**Patrón general**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

**Delay por índice**: Para stagger effect en listas

### tw-animate-css

Animaciones CSS predefinidas disponibles:

```css
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
@keyframes slide-in-from-top { from { transform: translateY(-100%); } }
@keyframes slide-in-from-bottom { from { transform: translateY(100%); } }
@keyframes scale-in { from { transform: scale(0.95); opacity: 0; } }
@keyframes scroll-right {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-right {
  animation: scroll-right 60s linear infinite;
}
```

### tsParticles (Partículas)

**Partículas Background (no interactivas)**:
- Movimiento: dirección "right", loop
- 85 partículas, tamaño 1-4px
- Opacidad: 0.4-0.8
- Velocidad: 0.5
- Color: blanco

**Partículas Hero (interactivas)**:
- Modo: "grab" al hover
- Links entre partículas (distancia 120px)
- 80 partículas, tamaño 2-5px
- Movimiento: "outside" aleatorio
- Velocidad: 1.5
- Colores: múltiples tonos de gris

### Infinite Horizontal Scroll

Scroll horizontal infinito usando Framer Motion:

```tsx
<InfiniteHorizontalScroll speed={1} className="">
  {children}
</InfiniteHorizontalScroll>
```

### Transiciones de Color

**Buttons**:
```css
transition-colors duration-120
```

**Links**:
```css
hover:text-foreground transition-colors
```

**Hover effects**: 
- Cards: Efecto sutil en hover
- Buttons: `hover:bg-primary/90` o `hover:bg-secondary/80`

---

## Convenciones de Código

### Nombrado de Archivos

- **Componentes**: PascalCase (`HeroSection.tsx`, `PricingSection.tsx`)
- **Componentes UI**: PascalCase con prefijo descriptivo (`SkeletonCard.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useScroll.ts`)
- **Utils**: camelCase (`utils.ts`, `formatDate.ts`)

### Nombrado de Clases

**Tailwind CSS**:
- Utilidad base: `p-4`, `m-2`, `flex`, `grid`
- Colores: `text-primary`, `bg-muted`, `border-border`
- Estados: `hover:text-foreground`, `focus:ring-ring`
- Responsive: `md:grid-cols-2`, `lg:p-8`
- Dark mode: `dark:bg-background`

**Clases personalizadas**:
- Usar cuando sea necesario: `className="min-h-screen"`
- Evitar clases CSS custom cuando Tailwind es suficiente

### Imports

**Orden de imports**:
1. React/Next.js imports
2. Third-party imports (lucide-react, framer-motion, etc.)
3. Components imports (@/components/*)
4. Utils/hooks imports (@/lib/*, @/hooks/*)

**Ejemplo**:
```tsx
import { useState } from 'react';
import { motion } from "framer-motion";
import { Check, X } from 'lucide-react';
import Image from 'next/image';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

import { cn } from '@/lib/utils';
```

### Typescript

**Interfaces vs Types**:
- Interfaces para objetos y componentes: `interface Props { ... }`
- Types para uniones, primitivos: `type Status = 'idle' | 'submitting' | 'success'`

**Exportación**:
- Default export para componentes principales
- Named exports para types y utilities

### Componentes Funcionales

**Patrón**:
```tsx
interface ComponentNameProps {
  prop1: string;
  prop2?: number;
}

const ComponentName = ({ prop1, prop2 = 1 }: ComponentNameProps) => {
  // hooks al inicio
  // constants
  // handlers
  // render
  return ( ... );
};

export default ComponentName;
```

### CSS Custom

Usar `@layer base` para estilos globales:

```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## Stack Tecnológico

### Core

- **Framework**: Next.js 16.1.1 (App Router)
- **Lenguaje**: TypeScript 5
- **CSS**: Tailwind CSS 4
- **Build Tool**: Turbopack (Next.js default)

### Dependencias Principales

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| react | 19.2.3 | UI library |
| react-dom | 19.2.3 | DOM rendering |
| next | 16.1.1 | React framework |
| framer-motion | 12.26.2 | Animaciones |
| lenis | 1.3.17 | Smooth scrolling |
| lucide-react | 0.562.0 | Iconos |
| class-variance-authority | 0.7.1 | Variantes de componentes |
| clsx | 2.1.1 | Classnames utility |
| tailwind-merge | 3.4.0 | Tailwind class merging |
| tw-animate-css | 1.4.0 | Animaciones CSS |
| @tsparticles/react | 3.0.0 | Partículas animadas |
| @tsparticles/slim | 3.9.1 | Engine de partículas optimizado |
| resend | 6.7.0 | Envío de emails |
| typed.js | 2.1.0 | Animación de texto typing |

### Dev Dependencies

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| tailwindcss | 4 | CSS framework |
| @tailwindcss/postcss | 4 | PostCSS plugin |
| @types/node | 20 | Node types |
| @types/react | 19 | React types |
| @types/react-dom | 19 | React DOM types |
| eslint | 9 | Linting |
| eslint-config-next | 16.1.1 | Next.js ESLint config |
| typescript | 5 | Type checking |

### Herramientas de Desarrollo

- **Linting**: ESLint con configuración Next.js
- **Formatting**: Prettier (implícito en Next.js)
- **Testing**: No configurado actualmente
- **Git hooks**: Husky (si se añade)

---

## Estructura del Proyecto

```
WePages/
├── .next/                  # Build output (generado)
├── app/
│   ├── globals.css         # Estilos globales + variables CSS
│   ├── layout.tsx          # Root layout + fonts
│   ├── loading.tsx         # Loading state
│   ├── page.tsx            # Homepage
│   ├── api/               # API Routes
│   │   └── send-email/    # Route handler para emails
│   │       └── route.ts
│   └── favicon.ico         # Favicon
├── components/
│   ├── ui/                 # Componentes base (shadcn)
│   │   ├── SkeletonCard.tsx
│   │   ├── SkeletonText.tsx
│   │   ├── SkeletonImage.tsx
│   │   ├── ParticlesBackground.tsx
│   │   ├── TypedHeading.tsx
│   │   ├── HighlightWord.tsx
│   │   ├── MagnifyingImage.tsx
│   │   └── OptimizedImage.tsx
│   ├── AttentionSection.tsx
│   ├── AfterLaunchSection.tsx
│   ├── ContactSection.tsx
│   ├── FeaturesSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── InfiniteHorizontalScroll.tsx
│   ├── PricingSection.tsx
│   ├── ProcessSection.tsx
│   ├── ProblemSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SuccessStoriesCarousel.tsx
│   └── SmoothScrollProvider.tsx
├── lib/
│   └── utils.ts            # Utils (cn function)
├── public/
│   ├── images/            # Imágenes del proyecto
│   │   └── projects/      # Screenshots de proyectos
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── wetech.svg
├── .gitignore
├── .eslint.config.mjs      # ESLint config
├── .git/                   # Git repo
├── components.json         # Shadcn config
├── next.config.ts          # Next.js config
├── next-env.d.ts           # Next.js types
├── package.json
├── pnpm-lock.yaml          # PNPM lock
├── postcss.config.mjs      # PostCSS config
├── README.md
└── tsconfig.json           # TypeScript config
```

---

## API Routes

### Email Sending (Resend)

**Endpoint**: `POST /api/send-email`

**Propósito**: Envío de emails desde el formulario de contacto usando Resend.

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Responses**:
- `200`: Email enviado exitosamente
- `400`: Campos requeridos faltantes
- `500`: Error de configuración o envío

**Environment Variables**:
- `RESEND_API_KEY`: API key de Resend (requerido)

**Implementación**:
```ts
// app/api/send-email/route.ts
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'WePages <onboarding@resend.dev>',
  to: ['wepagesstudio@gmail.com'],
  replyTo: email,
  subject: `Nuevo contacto desde WePages - ${name}`,
  html: `...`
});
```

---

## Configuración

### Tailwind CSS v4

Configuración mínima en `postcss.config.mjs`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Las variables CSS definen todos los tokens de diseño.

### TypeScript

`tsconfig.json` incluye paths aliases:
- `@/*` → `/*` (root)

### ESLint

Configuración en `.eslint.config.mjs`:
- Next.js core web vitals
- TypeScript recommended
- React hooks rules

---

## Guías de Desarrollo

### Agregar Nueva Sección

1. Crear componente en `components/` con nombre descriptivo
2. Incluir en `app/page.tsx` en orden lógico
3. Seguir patrones existentes:
   - Props interface
   - Export default
   - Tailwind classes
   - Responsive design
4. Añadir anchor link en Header si es necesario

### Agregar Nueva Feature

1. Añadir array/object de datos
2. Mapear en grid responsivo
3. Usar icon de lucide-react
4. Mantener consistencia con existentes

### Modificar Estilos

**Colores**: Modificar variables en `app/globals.css`
**Tipografía**: Modificar fonts en `app/layout.tsx`
**Spacing**: Usar clases Tailwind existentes
**Nuevos tokens**: Añadir en `@theme inline`

### Añadir Animaciones

**Framer Motion**:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

**tw-animate-css**:
```tsx
className="animate-fade-in"
```

### Responsive Design

Breakpoints Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Mobile-first: empezar con estilos base, añadir media queries con `md:`, `lg:`, etc.

---

## Performance

### Optimizaciones Incluidas

- **Next.js Font**: Fonts auto-optimized, no layout shift
- **Lenis**: Smooth scroll sin afectar performance
- **Code splitting**: Automatico por Next.js
- **Image optimization**: Componente `next/image` con OptimizedImage (blur placeholder)
- **Tree shaking**: Solo se importa lo que se usa
- **Skeleton loading**: Estados de carga con componentes de skeleton
- **Particles optimization**: Versión slim de tsParticles para mejor rendimiento

### Métricas Objetivo

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

### Best Practices

- Usar `next/image` para todas las imágenes
- Lazy load componentes pesados
- Optimizar third-party scripts
- Mantener bundles pequeños
- Usar CSS en lugar de JS para animaciones cuando sea posible

---

## Accesibilidad

### WCAG 2.1 AA

El proyecto sigue estándares de accesibilidad:

- **Contraste**: Colores con ratio >= 4.5:1
- **Focus states**: `focus-visible:ring` en todos los interactivos
- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<footer>`
- **ARIA labels**: En botones sin texto (menú toggle)
- **Keyboard navigation**: Navegable sin mouse

### Checklist

- [ ] Imágenes con alt text
- [ ] Formularios con labels
- [ ] Buttons con aria-label si es necesario
- [ ] Focus visible en todo
- [ ] Contraste suficiente
- [ ] Responsive sin zoom

---

## Internacionalización (i18n)

###准备

El proyecto está preparado para múltiples idiomas:

- **Estructura**: Variables CSS para textos
- **Fonts**: Subset `latin` soporta múltiples idiomas
- **Icons**: Lucide-react universal
- **Componentes**: Texto hardcodeado en español (actualmente)

### Próximos Pasos

Para añadir soporte i18n:
1. Usar `next-intl` o similar
2. Extraer strings a archivos JSON
3. Crear archivos de traducción
4. Detectar idioma del navegador

---

## Dark Mode

### Implementación

El dark mode está implementado con CSS variables y clase `.dark`:

```html
<html class="dark">
  <!-- Contenido oscuro -->
</html>
```

### Toggle

No hay toggle implementado actualmente, pero la estructura soporta:
- `dark:` prefix en Tailwind
- Clases CSS variables en `.dark`
- Transiciones suaves entre temas

---

## Deployment

### Plataformas Soportadas

- **Vercel**: Recomendado (optimizado para Next.js)
- **Netlify**: Soportado
- **Docker**: Posible con Dockerfile custom

### Comandos

```bash
# Development
npm run dev

# Build para producción
npm run build

# Start producción
npm start

# Linting
npm run lint
```

### Variables de Entorno

**Requeridas**:
- `RESEND_API_KEY`: API key de Resend para envío de emails desde formulario de contacto

**Opcionales**: No hay variables opcionales actualmente.

---

## Contribución

### Flujo de Trabajo

1. Crear branch feature/fix
2. Desarrollar con `npm run dev`
3. Verificar con `npm run build`
4. Asegurar `npm run lint` sin errores
5. Pull request para review

### Estándares de Código

- ESLint debe pasar sin warnings
- TypeScript sin errores
- Commits descriptivos
- PRs con description clara

---

## Recursos y Referencias

### Documentación

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.studio/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Geist Font](https://vercel.com/font)

### Inspiración

- Sitios de SaaS B2B modernos
- Landing pages de Stripe, Vercel, Linear
- Diseños minimalistas con foco en conversión

---

## Notas para Agentes

### Lo Que Funciona

- Diseño limpio y focalizado
- Mobile-first approach
- Performance como prioridad
- Animaciones sutiles y significativas
- Código mantenible y escalable

### Áreas de Mejora

- Más imágenes de proyectos reales
- Tests unitarios y E2E
- Analytics integrados (GA4)
- SEO optimization avanzada
- Sistema de theming avanzado con toggle

### Consideraciones Futuras

- Sistema de theming avanzado
- Más componentes UI reutilizables
- Blog/recursos section
- Sistema de authentication para admin
- CMS para clientes

---

*Este documento será actualizado conforme el proyecto evolucione. Última actualización: 17 de Enero 2026.*
