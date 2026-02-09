# 📘 Tutorial de Uso - Mr. Chispeza

Guía práctica para modificar y extender tu sitio web sin complicaciones.

---

## 📋 Tabla de Contenidos

1. [Cambiar Contenido de una Sección](#1-cambiar-contenido-de-una-sección)
2. [Crear una Subpágina Nueva](#2-crear-una-subpágina-nueva)
3. [Agregar Imágenes](#3-agregar-imágenes)
4. [Cambiar el Orden de las Tarjetas](#4-cambiar-el-orden-de-las-tarjetas)
5. [Tareas Comunes Adicionales](#5-tareas-comunes-adicionales)

---

## 1️⃣ Cambiar Contenido de una Sección

### 📝 Cambiar Texto de una Sección Existente

#### Ejemplo: Modificar la sección "Empresa"

**Archivo a editar:** `src/app/_components/CompanySection.tsx`

```typescript
// Ubicación: src/app/_components/CompanySection.tsx

export function CompanySection() {
  return (
    <Section id="empresa" variant="gradient" className="relative">
      <Container className="py-20">
        <div className="max-w-4xl">
          {/* 👇 EDITA ESTE TÍTULO */}
          <h2 className="text-3xl font-bold sm:text-4xl">
            Somos expertos en Instalaciones Eléctricas
          </h2>

          {/* 👇 EDITA ESTE PÁRRAFO */}
          <p className="mt-4 text-amber-100">
            Ingeniería y diseño de instalaciones; servicio preventivo y
            correctivo de instalaciones eléctricas, para que su energía opere
            eficientemente.
          </p>

          {/* 👇 EDITA EL TEXTO DEL BOTÓN */}
          <div className="mt-6">
            <a
              href="#contacto"
              className="inline-block rounded-xl bg-white px-5 py-3 font-semibold text-amber-700 shadow-lg hover:translate-y-[-1px] transition-transform"
            >
              Contáctenos
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
```

**Pasos:**

1. Abre el archivo del componente
2. Busca el texto que quieres cambiar
3. Edita directamente el contenido
4. Guarda el archivo
5. El navegador se actualizará automáticamente (si tienes `npm run dev` corriendo)

---

### 🎨 Cambiar Estilos de una Sección

#### Ejemplo: Cambiar el color de fondo de "Empresa"

```typescript
// src/app/_components/CompanySection.tsx

export function CompanySection() {
  return (
    <Section
      id="empresa"
      variant="gradient"  // 👈 OPCIONES: 'default' | 'accent' | 'dark' | 'gradient'
      className="relative"
    >
      {/* ... */}
    </Section>
  )
}
```

**Variantes disponibles:**

- `default` → Fondo blanco
- `accent` → Fondo gris claro
- `dark` → Fondo oscuro (negro/gris oscuro)
- `gradient` → Gradiente amarillo (actual)

---

### 📊 Cambiar Datos Dinámicos (Servicios, Sectores, etc.)

Los datos de servicios, sectores y galería están **separados** de los componentes visuales.

#### Agregar un Nuevo Servicio

**Archivo:** `src/lib/constants/services.ts`

```typescript
// src/lib/constants/services.ts

export const services: Service[] = [
  // ... servicios existentes ...

  // 👇 AGREGAR NUEVO SERVICIO AQUÍ
  {
    id: "mantenimiento-aires", // ID único
    iconName: "Wind", // Nombre del icono de Lucide
    title: "Mantenimiento de Aires Acondicionados",
    description:
      "Servicio profesional de mantención preventiva y correctiva de sistemas de climatización.",
    slug: "mantenimiento-aires-acondicionados", // Para URL futura
    category: "electrical", // 'electrical' | 'electronic' | 'solar' | 'security'
    featured: true, // Aparece en destacados (opcional)
  },
];
```

**Lista completa de iconos:** https://lucide.dev/icons/

**Pasos detallados:**

1. Abre `src/lib/constants/services.ts`
2. Copia el último servicio del array
3. Pégalo al final (antes del `]`)
4. Modifica los valores:
   - `id`: Identificador único (sin espacios, minúsculas)
   - `iconName`: Nombre exacto del icono de Lucide (primera letra mayúscula)
   - `title`: Título visible
   - `description`: Descripción corta
   - `slug`: URL amigable (para subpáginas futuras)
   - `category`: Categoría del servicio
   - `featured`: `true` si quieres destacarlo
5. Guarda el archivo
6. ¡Listo! El servicio aparecerá automáticamente en el sitio

#### Editar un Servicio Existente

```typescript
// Busca el servicio por su id y edita lo que necesites
{
  id: 'empalmes',
  iconName: 'Plug',
  title: 'Empalmes Residenciales',  // 👈 Cambiar título
  description: 'Nueva descripción aquí',  // 👈 Cambiar descripción
  slug: 'empalmes',
  category: 'electrical',
  featured: true,
},
```

#### Eliminar un Servicio

Simplemente **borra** todo el objeto (incluyendo las llaves `{ }`) del array.

```typescript
export const services: Service[] = [
  {
    id: "empalmes",
    // ...
  },
  // 👇 ELIMINAR ESTE SERVICIO COMPLETO (desde { hasta })
  // {
  //   id: 'servicio-a-eliminar',
  //   ...
  // },
  {
    id: "remodelacion",
    // ...
  },
];
```

---

## 2️⃣ Crear una Subpágina Nueva

### 📄 Caso 1: Página Simple (Ej: "Sobre Nosotros")

**Estructura:**

```
src/app/
└── sobre-nosotros/
    └── page.tsx
```

**Pasos:**

1. **Crear la carpeta:**

```bash
mkdir src/app/sobre-nosotros
```

2. **Crear el archivo `page.tsx`:**

```typescript
// src/app/sobre-nosotros/page.tsx

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { Section, Container } from '@/app/components/ui'

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen scroll-smooth font-sans text-slate-800">
      <Header />

      <Section id="sobre-nosotros" className="py-20">
        <Container>
          <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
          <p className="mt-4 text-lg text-slate-600">
            Aquí va el contenido de la página...
          </p>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
```

3. **Acceder a la página:**
   - URL: `http://localhost:3000/sobre-nosotros`
   - En producción: `https://mrchispeza.cl/sobre-nosotros`

---

### 🔧 Caso 2: Páginas Dinámicas de Servicios

Crear una página individual para cada servicio automáticamente.

**Estructura:**

```
src/app/
└── servicios/
    ├── page.tsx           ← Lista de todos los servicios
    └── [slug]/
        └── page.tsx       ← Página individual dinámica
```

#### Paso 1: Crear página de lista de servicios

```typescript
// src/app/servicios/page.tsx

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { Section, Container } from '@/app/components/ui'
import { services } from '@/lib/constants/services'
import Link from 'next/link'

export default function ServiciosPage() {
  return (
    <main className="min-h-screen scroll-smooth font-sans text-slate-800">
      <Header />

      <Section className="py-20">
        <Container>
          <h1 className="text-4xl font-bold text-center mb-12">
            Nuestros Servicios
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/servicios/${service.slug}`}
                className="block p-6 border rounded-2xl hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
```

#### Paso 2: Crear página dinámica individual

```typescript
// src/app/servicios/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { Section, Container, Button } from '@/app/components/ui'
import { services, getServiceBySlug } from '@/lib/constants/services'
import { getIconComponent } from '@/lib/utils/get-icon'

// Genera las rutas estáticas en build time
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Genera metadata dinámico (SEO)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) return {}

  return {
    title: `${service.title} | Mr. Chispeza`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  // Si el servicio no existe, mostrar 404
  if (!service) {
    notFound()
  }

  const IconComponent = getIconComponent(service.iconName)

  return (
    <main className="min-h-screen scroll-smooth font-sans text-slate-800">
      <Header />

      {/* Hero del servicio */}
      <Section className="py-20 bg-gradient-to-br from-amber-400 to-amber-600 text-white">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <IconComponent className="h-12 w-12" />
            </div>
            <h1 className="text-4xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-amber-50 max-w-3xl">
            {service.description}
          </p>
        </Container>
      </Section>

      {/* Contenido del servicio */}
      <Section className="py-20">
        <Container>
          <div className="prose prose-lg max-w-none">
            <h2>Descripción Completa</h2>
            <p>
              {service.fullDescription || service.description}
            </p>

            <h2>¿Por qué elegir este servicio?</h2>
            <ul>
              <li>Profesionales certificados</li>
              <li>Equipos de última generación</li>
              <li>Garantía de satisfacción</li>
              <li>Atención personalizada</li>
            </ul>

            <h2>¿Cómo funciona?</h2>
            <ol>
              <li>Contacta con nosotros</li>
              <li>Visitamos tu ubicación</li>
              <li>Te damos un presupuesto sin compromiso</li>
              <li>Realizamos el trabajo en fecha acordada</li>
              <li>Certificamos y entregamos garantía</li>
            </ol>
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" icon href="/#contacto">
              Solicitar este Servicio
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
```

#### Paso 3: Agregar descripción completa en services.ts

```typescript
// src/lib/constants/services.ts

export const services: Service[] = [
  {
    id: "empalmes",
    iconName: "Plug",
    title: "Empalmes",
    description: "Instalación y regularización del empalme eléctrico...",
    // 👇 AGREGAR DESCRIPCIÓN COMPLETA PARA LA PÁGINA INDIVIDUAL
    fullDescription: `
      En Mr. Chispeza nos especializamos en la instalación completa de empalmes 
      eléctricos para viviendas, comercios e industrias. Gestionamos todo el proceso 
      ante la compañía eléctrica distribuidora, desde la solicitud hasta la 
      instalación del medidor.
      
      Nuestro servicio incluye:
      - Diseño eléctrico del empalme
      - Instalación de tablero general
      - Tendido de cables
      - Certificación SEC
      - Gestión ante la compañía eléctrica
    `,
    slug: "empalmes",
    category: "electrical",
    featured: true,
  },
  // ... resto de servicios
];
```

**Resultado:**

- `/servicios` → Lista de todos los servicios
- `/servicios/empalmes` → Página del servicio "Empalmes"
- `/servicios/paneles-solares` → Página del servicio "Paneles Solares"
- etc.

---

## 3️⃣ Agregar Imágenes

### 📸 Tipos de Imágenes

1. **Imágenes locales** → En la carpeta `/public/`
2. **Imágenes externas** → URLs de internet
3. **Imágenes de galería** → Constantes en código

---

### 🖼️ Agregar Imagen Local

#### Paso 1: Guardar la imagen

```
public/
├── hero.png              ← Ya existe
├── logo.png
├── servicios/
│   ├── empalmes.jpg      ← Nueva imagen
│   └── paneles.jpg       ← Nueva imagen
└── galeria/
    ├── trabajo-1.jpg
    └── trabajo-2.jpg
```

**Reglas:**

- Usa nombres descriptivos sin espacios: `empalmes-electricos.jpg` ✅
- Evita caracteres especiales: `instalación eléctrica.jpg` ❌
- Formatos recomendados: `.jpg`, `.png`, `.webp`
- Tamaño recomendado: Máximo 2MB por imagen

#### Paso 2: Usar la imagen en un componente

```typescript
import Image from 'next/image'

export function MiComponente() {
  return (
    <div className="relative h-64 w-full">
      <Image
        src="/servicios/empalmes.jpg"  // 👈 Ruta desde /public/
        alt="Instalación de empalmes eléctricos"
        fill                             // Llena el contenedor
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover rounded-2xl"
      />
    </div>
  )
}
```

---

### 🌐 Agregar Imagen Externa (URL)

```typescript
// next.config.ts - Primero configurar el dominio

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "tu-dominio.com" }, // 👈 Agregar aquí
    ],
  },
};
```

```typescript
// Luego usar la imagen
<Image
  src="https://tu-dominio.com/imagen.jpg"
  alt="Descripción"
  width={800}
  height={600}
/>
```

---

### 🖼️ Agregar Imágenes a la Galería

**Archivo:** `src/lib/constants/gallery.ts`

```typescript
// src/lib/constants/gallery.ts

export const galleryImages: GalleryImage[] = [
  // Imágenes existentes...

  // 👇 AGREGAR NUEVA IMAGEN
  {
    id: "img-4", // ID único
    src: "/galeria/trabajo-nuevo.jpg", // Ruta de la imagen
    alt: "Instalación industrial completa",
    category: "industrial", // Opcional: para filtros futuros
  },
  {
    id: "img-5",
    src: "https://images.unsplash.com/photo-xxxxx", // O URL externa
    alt: "Panel solar residencial",
    category: "solar",
  },
];
```

**La galería se actualiza automáticamente** en `src/app/_components/GallerySection.tsx`

---

### 🎨 Cambiar la Imagen Hero (Fondo Principal)

```typescript
// src/app/_components/Hero.tsx

export function Hero() {
  return (
    <Section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.png"  // 👈 CAMBIAR ESTA RUTA
          alt="Mantenimiento eléctrico"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* ... */}
      </div>
    </Section>
  )
}
```

**Pasos:**

1. Guarda tu nueva imagen en `/public/` (ej: `/public/hero-nuevo.jpg`)
2. Cambia `src="/hero.png"` a `src="/hero-nuevo.jpg"`
3. Guarda el archivo
4. ¡Listo!

---

## 4️⃣ Cambiar el Orden de las Tarjetas

### 🔄 Reordenar Servicios

Los servicios se muestran en el **mismo orden** que están en el array.

**Archivo:** `src/lib/constants/services.ts`

```typescript
// ANTES: Empalmes aparece primero
export const services: Service[] = [
  {
    id: "empalmes",
    title: "Empalmes",
    // ...
  },
  {
    id: "remodelacion",
    title: "Remodelación",
    // ...
  },
  {
    id: "paneles-solares",
    title: "Paneles Solares",
    // ...
  },
];

// DESPUÉS: Paneles Solares aparece primero
export const services: Service[] = [
  {
    id: "paneles-solares", // 👈 Movido al inicio
    title: "Paneles Solares",
    // ...
  },
  {
    id: "empalmes",
    title: "Empalmes",
    // ...
  },
  {
    id: "remodelacion",
    title: "Remodelación",
    // ...
  },
];
```

**Método simple:**

1. Abre `src/lib/constants/services.ts`
2. **Corta** el objeto completo del servicio (desde `{` hasta `},`)
3. **Pega** en la posición deseada
4. Guarda

---

### 🔄 Reordenar Sectores

**Archivo:** `src/lib/constants/sectors.ts`

```typescript
// Mismo principio que servicios
export const sectors: Sector[] = [
  {
    id: "residencial", // 👈 Aparece primero
    // ...
  },
  {
    id: "industrial", // 👈 Aparece segundo
    // ...
  },
  {
    id: "comercial", // 👈 Aparece tercero
    // ...
  },
];
```

---

### 🔄 Reordenar Secciones Completas

**Archivo:** `src/app/page.tsx`

```typescript
// ANTES
export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <CompanySection />
      <ServicesGrid />
      <BannerParallax />
      <SectorsSection />
      <GallerySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}

// DESPUÉS: Galería antes de Sectores
export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <CompanySection />
      <ServicesGrid />
      <BannerParallax />
      <GallerySection />      // 👈 Movido aquí
      <SectorsSection />      // 👈 Ahora va después
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
```

**Reglas importantes:**

- `<Header />` siempre va primero
- `<Footer />` siempre va al final
- `<Hero />` típicamente va después del Header
- Las demás secciones puedes ordenarlas como quieras

---

## 5️⃣ Tareas Comunes Adicionales

### ✏️ Cambiar Información de Contacto

**Archivo:** `src/lib/constants/navigation.ts`

```typescript
export const contactInfo = {
  phone: "+56 9 8677 4423", // 👈 Cambiar teléfono
  email: "elielo.hhs@gmail.com", // 👈 Cambiar email
  location: "Valparaíso, Chile", // 👈 Cambiar ubicación
  whatsapp: "+56986774423", // 👈 Cambiar WhatsApp
};
```

Esta información se usa automáticamente en:

- Sección de contacto
- Footer
- Cualquier lugar que la importe

---

### 🎨 Cambiar Colores Globales

**Archivo:** `src/app/globals.css`

```css
:root {
  --background: #ffffff; /* Fondo claro */
  --foreground: #171717; /* Texto oscuro */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a; /* Fondo oscuro en dark mode */
    --foreground: #ededed; /* Texto claro en dark mode */
  }
}
```

**Para cambiar el color principal (amarillo):**

Busca en los componentes `amber-` y reemplaza por otro color:

```typescript
// ANTES
className = "bg-amber-500 text-white";

// DESPUÉS (azul)
className = "bg-blue-500 text-white";
```

**Colores disponibles en Tailwind:**

- `red`, `orange`, `amber`, `yellow`, `lime`, `green`
- `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`
- `violet`, `purple`, `fuchsia`, `pink`, `rose`

---

### 📱 Agregar Enlaces a Redes Sociales

**Archivo:** `src/app/components/Footer.tsx`

```typescript
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        {/* ... contenido existente ... */}

        {/* 👇 AGREGAR REDES SOCIALES */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com/tu-pagina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-amber-500"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/tu-cuenta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-amber-500"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
```

---

### 🔗 Cambiar Links de Navegación

**Archivo:** `src/lib/constants/navigation.ts`

```typescript
export const mainNavigation: NavItem[] = [
  {
    label: "Compañía",
    href: "#empresa",
  },
  {
    label: "Servicios",
    href: "#servicios",
  },
  // 👇 AGREGAR NUEVO LINK
  {
    label: "Blog",
    href: "/blog", // Ruta interna
  },
  {
    label: "Tienda",
    href: "https://tienda.ejemplo.com", // Ruta externa
    external: true,
  },
];
```

---

### 📄 Cambiar Metadata (SEO)

**Archivo:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: {
    default: `Mr. Chispeza | Servicios Eléctricos`, // 👈 Cambiar título
    template: `%s | Mr. Chispeza`,
  },
  description: "Servicios eléctricos profesionales en Valparaíso", // 👈 Cambiar descripción
  // ...
};
```

**Para páginas individuales:**

```typescript
// src/app/sobre-nosotros/page.tsx

export const metadata = {
  title: "Sobre Nosotros",
  description: "Conoce más sobre Mr. Chispeza",
};

export default function SobreNosotrosPage() {
  // ...
}
```

---

## 🚀 Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Verificar errores de TypeScript
npm run typecheck

# Compilar para producción
npm run build

# Iniciar en producción
npm start

# Formatear código
npm run format

# Limpiar caché
rm -rf .next
```

---

## 🐛 Troubleshooting

### Cambios no se reflejan en el navegador

1. **Hard refresh:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Limpiar caché:**
   ```bash
   rm -rf .next
   npm run dev
   ```

### Error al agregar imagen

```
Error: Invalid src prop on `next/image`
```

**Solución:** Asegúrate de configurar el dominio en `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    { protocol: "https", hostname: "tu-dominio.com" },
  ],
}
```

### Icono no aparece

Verifica que el nombre sea exacto: `'Plug'` no `'plug'`

Lista completa: https://lucide.dev/icons/

---

## 📚 Recursos Adicionales

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/icons
- **TypeScript:** https://www.typescriptlang.org/docs

---

## ✅ Checklist Rápido

**Antes de hacer cambios:**

- [ ] `npm run dev` está corriendo
- [ ] Hice backup de los archivos que voy a editar

**Después de hacer cambios:**

- [ ] Guardé el archivo
- [ ] Verifiqué en el navegador
- [ ] No hay errores en la consola
- [ ] `npm run typecheck` pasa sin errores

---

¡Con este tutorial deberías poder manejar las tareas más comunes sin problemas! 🎉

Si tienes dudas, recuerda que:

- Los **datos** están en `/lib/constants/`
- Los **componentes visuales** están en `/app/_components/`
- Las **páginas** están en `/app/`
- Los **estilos globales** están en `/app/globals.css`
