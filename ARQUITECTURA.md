# 🏗️ Arquitectura del Proyecto - Mr. Chispeza

## 📋 Tabla de Contenidos

1. [Visión General](#visión-general)
2. [Principios de Diseño](#principios-de-diseño)
3. [Estructura de Carpetas](#estructura-de-carpetas)
4. [Design System](#design-system)
5. [Patrón de Componentes](#patrón-de-componentes)
6. [Gestión de Datos](#gestión-de-datos)
7. [Routing](#routing)
8. [Performance](#performance)
9. [Escalabilidad](#escalabilidad)

---

## 🎯 Visión General

Este proyecto usa **Next.js 15 con App Router** y está estructurado siguiendo los principios de:

- **Separación de Responsabilidades**: UI, datos y lógica separados
- **Componentización**: Componentes pequeños, reutilizables y testeables
- **Design System**: Sistema de diseño consistente y centralizado
- **Type Safety**: TypeScript en todo el proyecto
- **Performance**: Optimizado con React Server Components y lazy loading

---

## 💡 Principios de Diseño

### 1. **Componentes como Piezas de LEGO**

Cada componente debe ser:
- ✅ **Pequeño y enfocado**: Hace una sola cosa bien
- ✅ **Reutilizable**: Se puede usar en múltiples contextos
- ✅ **Composable**: Se combina con otros componentes
- ✅ **Testeable**: Fácil de probar en aislamiento

### 2. **Datos Separados de la UI**

```typescript
// ❌ MAL - Datos hardcodeados en el componente
function Services() {
  return (
    <div>
      {[
        { title: 'Empalmes', description: '...' },
        // ... más datos aquí mezclados con JSX
      ].map(s => <ServiceCard {...s} />)}
    </div>
  )
}

// ✅ BIEN - Datos en archivo separado
// lib/constants/services.ts
export const services = [...]

// Componente solo renderiza
function Services() {
  return (
    <div>
      {services.map(s => <ServiceCard {...s} />)}
    </div>
  )
}
```

### 3. **Progressive Enhancement**

- Server Components por defecto
- Client Components solo cuando se necesita interactividad
- Lazy loading de componentes pesados

### 4. **Mobile-First**

- Diseño responsive desde el principio
- Tailwind con breakpoints: sm, md, lg, xl

---

## 📁 Estructura de Carpetas

### Principio: **Colocation vs Global**

```
src/
├── app/
│   ├── components/          # ← GLOBAL: Reutilizable en toda la app
│   │   ├── ui/             # ← Design System
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── (home)/             # ← Route group
│   │   ├── _components/    # ← LOCAL: Solo para esta página (underscore = privado)
│   │   └── page.tsx
│   │
│   └── servicios/
│       ├── [slug]/
│       │   ├── _components/ # ← LOCAL: Solo para páginas de servicio
│       │   └── page.tsx
│       └── page.tsx
│
├── lib/                     # ← Lógica de negocio y datos
│   ├── constants/          # ← Datos estáticos
│   ├── types/              # ← TypeScript types
│   └── utils/              # ← Funciones helper
```

**Regla de Oro:**

- Si el componente se usa en **1 sola página** → `_components/` local
- Si el componente se usa en **2+ páginas** → `components/` global

---

## 🎨 Design System

### Filosofía: **Build Once, Use Everywhere**

El Design System está en `app/components/ui/` y contiene:

#### 1. Button

```typescript
<Button variant="primary" size="md" icon>
  Click me
</Button>
```

**Variantes:**
- `primary`: Amarillo (CTA principal)
- `secondary`: Gris oscuro
- `outline`: Borde amarillo
- `ghost`: Transparente con borde

**Sizes:**
- `sm`: Pequeño (móvil)
- `md`: Mediano (default)
- `lg`: Grande (hero sections)

#### 2. Card

```typescript
<Card hover padding="md">
  <CardHeader icon={<Icon />} title="Title" />
  <CardContent>Content here</CardContent>
  <CardFooter>Footer here</CardFooter>
</Card>
```

**Beneficios:**
- Estructura consistente
- Fácil de estilizar globalmente
- Composable (puedes usar solo las partes que necesitas)

#### 3. Section

```typescript
<Section variant="default" id="section-name">
  <Container>
    Content here
  </Container>
</Section>
```

**Variantes:**
- `default`: Fondo blanco
- `accent`: Fondo gris claro
- `dark`: Fondo oscuro
- `gradient`: Gradiente amarillo

#### 4. Container

```typescript
<Container size="lg" className="py-20">
  Content here
</Container>
```

**Sizes:**
- `sm`: 768px (blog posts)
- `md`: 1024px
- `lg`: 1280px (default)
- `full`: Sin límite

### Utilidad `cn()`

```typescript
import { cn } from '@/lib/utils/cn'

// Combina classes dinámicamente
<div className={cn(
  'base-class',
  isActive && 'active-class',
  'override-class'
)} />
```

**¿Por qué `cn()` en lugar de template strings?**

```typescript
// ❌ Template strings causan conflictos
className={`px-4 py-2 ${props.className}`}  // Si props.className tiene px-6, ambos se aplican

// ✅ cn() resuelve conflictos inteligentemente
className={cn('px-4 py-2', props.className)}  // px-6 gana
```

---

## 🧩 Patrón de Componentes

### Anatomía de un Componente

```typescript
'use client'  // Solo si necesitas interactividad

import React from 'react'
import { motion } from 'framer-motion'
import type { MyType } from '@/lib/types'

interface MyComponentProps {
  data: MyType
  className?: string
}

/**
 * Descripción del componente
 * 
 * @param data - Descripción del prop
 */
export function MyComponent({ data, className }: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn('base-styles', className)}
    >
      {/* Contenido */}
    </motion.div>
  )
}
```

### Client vs Server Components

**Server Components (Default):**
```typescript
// Sin 'use client'
// Puede hacer fetch directo, acceso a DB, etc.
export function ServerComponent() {
  const data = await fetchData()  // ✅ OK
  return <div>{data}</div>
}
```

**Client Components:**
```typescript
'use client'  // ← Requerido

// Puede usar hooks, event handlers, etc.
export function ClientComponent() {
  const [state, setState] = useState()  // ✅ OK
  return <button onClick={() => setState(...)}>Click</button>
}
```

**Regla:** Usa Server Components por defecto, Client solo cuando necesites:
- `useState`, `useEffect`, otros hooks
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`window`, `document`)
- Animaciones con Framer Motion

---

## 📊 Gestión de Datos

### Patrón: **Constantes Tipadas**

```typescript
// lib/types/index.ts
export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  slug: string
  category: 'electrical' | 'electronic'
}

// lib/constants/services.ts
export const services: Service[] = [
  {
    id: 'empalmes',
    icon: Plug,
    title: 'Empalmes',
    description: '...',
    slug: 'empalmes',
    category: 'electrical',
  },
  // ... más servicios
]

// Funciones helper
export const getServiceBySlug = (slug: string) =>
  services.find(s => s.slug === slug)
```

### ¿Por qué este patrón?

1. **Single Source of Truth**: Los datos viven en un solo lugar
2. **Type Safety**: TypeScript previene errores
3. **Fácil de mantener**: Agregar un servicio = editar un array
4. **Reutilizable**: Puedes usar los mismos datos en múltiples páginas
5. **Fácil migrar a CMS**: Cuando crezcas, cambias `const services = [...]` por `const services = await fetchFromCMS()`

---

## 🛣️ Routing

### Estructura de Rutas

```
app/
├── (home)/
│   └── page.tsx          → /
├── gracias/
│   └── page.tsx          → /gracias
├── servicios/
│   ├── page.tsx          → /servicios
│   └── [slug]/
│       └── page.tsx      → /servicios/empalmes, /servicios/paneles-solares, etc.
└── layout.tsx
```

### Route Groups `(home)`

**¿Por qué usar `(home)`?**

- ✅ Organización lógica sin afectar la URL
- ✅ Permite tener layout específico para home
- ✅ Mantiene los `_components` cerca del código que los usa

### Dynamic Routes `[slug]`

```typescript
// app/servicios/[slug]/page.tsx

// Genera las rutas en build time (SSG)
export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

// Página dinámica
export default function ServicePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const service = getServiceBySlug(params.slug)
  return <div>{service?.title}</div>
}
```

---

## ⚡ Performance

### Optimizaciones Implementadas

1. **Next.js Image Optimization**
```typescript
<Image
  src="/hero.png"
  alt="..."
  fill
  priority  // Para above-the-fold images
  sizes="100vw"
/>
```

2. **Code Splitting Automático**
- Cada página es un bundle separado
- Los componentes se cargan solo cuando se necesitan

3. **Framer Motion Optimizado**
```typescript
// viewport={{ once: true }} = anima solo la primera vez
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}  // ← Importante
>
```

4. **optimizePackageImports**
```typescript
// next.config.ts
optimizePackageImports: ['lucide-react', 'framer-motion']
```

---

## 📈 Escalabilidad

### Agregar Nueva Funcionalidad

#### Ejemplo: Agregar sección de Blog

1. **Crear tipos**
```typescript
// lib/types/index.ts
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  date: string
  author: string
}
```

2. **Crear constantes (o fetch desde CMS)**
```typescript
// lib/constants/blog.ts
export const blogPosts: BlogPost[] = [...]
```

3. **Crear componentes**
```typescript
// app/blog/_components/BlogCard.tsx
// app/blog/_components/BlogGrid.tsx
```

4. **Crear páginas**
```typescript
// app/blog/page.tsx → Lista de posts
// app/blog/[slug]/page.tsx → Post individual
```

### Migrar a CMS (Futuro)

Cuando quieras usar un CMS (Contentful, Sanity, etc.):

```typescript
// Antes:
export const services: Service[] = [...]

// Después:
export async function getServices(): Promise<Service[]> {
  const data = await fetch('https://cms.example.com/services')
  return data.json()
}
```

**Ventaja:** Solo cambias dónde vienen los datos, los componentes siguen iguales.

---

## 🔒 Type Safety

### Reglas de TypeScript

1. **Siempre tipar props**
```typescript
interface Props {
  title: string
  onClick?: () => void
}

export function MyComponent({ title, onClick }: Props) {
  // ...
}
```

2. **Usar tipos compartidos**
```typescript
import type { Service } from '@/lib/types'

export function ServiceCard({ service }: { service: Service }) {
  // TypeScript autocompleta service.title, service.icon, etc.
}
```

3. **Evitar `any`**
```typescript
// ❌ MAL
const data: any = fetchData()

// ✅ BIEN
const data: Service[] = fetchData()
```

---

## 🧪 Testing (Futuro)

Estructura recomendada para cuando agregues tests:

```
src/
├── app/
│   └── components/
│       └── ui/
│           ├── Button.tsx
│           └── Button.test.tsx
├── lib/
│   ├── constants/
│   │   ├── services.ts
│   │   └── services.test.ts
```

---

## 📚 Referencias

- [Next.js App Router](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 🎓 Mejores Prácticas

### DO ✅

- Usar Server Components por defecto
- Tipar todas las interfaces
- Mantener componentes pequeños (<150 líneas)
- Separar datos de UI
- Usar el Design System
- Documentar componentes complejos

### DON'T ❌

- Mezclar datos con JSX
- Usar `any` en TypeScript
- Crear componentes monolíticos
- Duplicar estilos
- Hardcodear strings (usar constantes)
- Usar inline styles (usar Tailwind)

---

¡Esta arquitectura está diseñada para crecer contigo! 🚀
