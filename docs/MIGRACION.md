# 🚀 Guía de Migración - Mr. Chispeza Refactorizado

## 📁 Estructura del Proyecto Refactorizado

```
src/
├── app/
│   ├── components/              # Componentes GLOBALES reutilizables
│   │   ├── ui/                 # Design System Base
│   │   │   ├── Button.tsx      ✅ Sistema de botones con variantes
│   │   │   ├── Card.tsx        ✅ Cards modulares (Header, Content, Footer)
│   │   │   ├── Section.tsx     ✅ Wrapper de secciones con variantes
│   │   │   ├── Container.tsx   ✅ Contenedor responsive
│   │   │   └── index.ts        ✅ Barrel export
│   │   ├── Header.tsx          ✅ Header global con navegación
│   │   ├── Footer.tsx          ✅ Footer global
│   │   └── ContactForm.tsx     ✅ (Ya existía - sin cambios)
│   │
│   ├── (home)/                 # Route group para la página principal
│   │   ├── _components/        # Componentes ESPECÍFICOS de home
│   │   │   ├── Hero.tsx
│   │   │   ├── CompanySection.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── BannerParallax.tsx
│   │   │   ├── SectorsSection.tsx
│   │   │   ├── SectorCard.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── page.tsx            ✅ Orquestador limpio (antes: 500+ líneas, ahora: ~30 líneas)
│   │
│   ├── gracias/
│   │   └── page.tsx            ✅ (Ya existía - sin cambios)
│   │
│   ├── layout.tsx              ✅ (Ya existía - sin cambios)
│   └── globals.css             ✅ (Ya existía - sin cambios)
│
├── lib/
│   ├── constants/              # DATOS separados de la UI
│   │   ├── services.ts         ✅ 11 servicios + funciones helper
│   │   ├── sectors.ts          ✅ 3 sectores
│   │   ├── gallery.ts          ✅ 3 imágenes
│   │   └── navigation.ts       ✅ Nav items + info de contacto
│   │
│   ├── types/
│   │   └── index.ts            ✅ Tipos TypeScript compartidos
│   │
│   └── utils/
│       └── cn.ts               ✅ Helper para classnames
│
└── shared/
    └── config/
        └── site.ts             ✅ (Ya existía - sin cambios)
```

---

## 📦 Paso 1: Instalar Nuevas Dependencias

```bash
npm install clsx tailwind-merge
```

**¿Por qué estas librerías?**

- `clsx`: Construcción condicional de classnames
- `tailwind-merge`: Merge inteligente de clases Tailwind (evita conflictos)

---

## 🔧 Paso 2: Crear la Nueva Estructura de Carpetas

### Opción A: Migración Limpia (Recomendada)

```bash
# 1. Hacer backup del proyecto actual
cp -r src src-backup

# 2. Crear la nueva estructura
mkdir -p src/lib/{constants,types,utils}
mkdir -p src/app/components/ui
mkdir -p src/app/\(home\)/_components

# 3. Copiar los archivos nuevos desde /outputs/ a tu proyecto
```

### Opción B: Migración Incremental

Si prefieres ir paso a paso sin romper nada:

1. Mantén tu `src/app/page.tsx` original funcionando
2. Crea la carpeta `src/app/(home)/` con el nuevo `page.tsx`
3. Ve moviendo componentes uno por uno
4. Cuando todo funcione, elimina el `page.tsx` viejo

---

## 🗂️ Paso 3: Copiar Archivos Nuevos

### 3.1 Fundamentos (lib/)

```bash
# Copiar utilidades y tipos
cp /outputs/lib/utils/cn.ts src/lib/utils/
cp /outputs/lib/types/index.ts src/lib/types/

# Copiar constantes de datos
cp /outputs/lib/constants/*.ts src/lib/constants/
```

### 3.2 Design System (components/ui/)

```bash
# Copiar componentes UI base
cp /outputs/app/components/ui/*.tsx src/app/components/ui/
cp /outputs/app/components/ui/index.ts src/app/components/ui/
```

### 3.3 Componentes Globales

```bash
# Copiar Header y Footer
cp /outputs/app/components/Header.tsx src/app/components/
cp /outputs/app/components/Footer.tsx src/app/components/
```

### 3.4 Componentes de Home

```bash
# Copiar todos los componentes de la página home
cp /outputs/app/\(home\)/_components/*.tsx src/app/\(home\)/_components/

# Copiar el nuevo page.tsx orquestador
cp /outputs/app/\(home\)/page.tsx src/app/\(home\)/
```

### 3.5 Actualizar package.json

```bash
cp /outputs/package.json ./package.json
npm install
```

---

## 🔄 Paso 4: Migrar ContactForm.tsx

Tu `ContactForm.tsx` actual ya está en `src/app/components/ContactForm.tsx`.

**Cambio necesario:**

```typescript
// Antes (con router.push)
import { useRouter } from "next/navigation";
const router = useRouter();

useEffect(() => {
  if (state.succeeded) {
    router.push("/gracias"); // ❌ Error de TypeScript
  }
}, [state.succeeded, router]);

// Después (con window.location.href)
useEffect(() => {
  if (state.succeeded) {
    window.location.href = "/gracias"; // ✅ Funciona perfectamente
  }
}, [state.succeeded]);
```

---

## ✅ Paso 5: Verificar que Todo Funciona

```bash
# Limpiar caché de Next.js
rm -rf .next

# Correr el servidor de desarrollo
npm run dev
```

### Checklist de Verificación:

- [ ] La página principal carga sin errores
- [ ] Todas las secciones se ven correctamente
- [ ] Las animaciones funcionan (Hero, ServiceCards, etc.)
- [ ] El formulario de contacto envía y redirige a /gracias
- [ ] El header sticky funciona
- [ ] Los botones con variantes funcionan
- [ ] Las imágenes cargan correctamente
- [ ] No hay errores en la consola del navegador
- [ ] No hay errores de TypeScript

---

## 🎨 Paso 6: Personalización y Extensión

### Agregar un Nuevo Servicio

Antes (editabas el JSX directamente):

```typescript
// ❌ Tenías que editar page.tsx y buscar el array entre 200 líneas de código
```

Ahora (editas solo el archivo de datos):

```typescript
// ✅ Editas lib/constants/services.ts
export const services: Service[] = [
  // ... servicios existentes
  {
    id: "nuevo-servicio",
    icon: Wrench,
    title: "Nuevo Servicio",
    description: "Descripción del nuevo servicio",
    slug: "nuevo-servicio",
    category: "electrical",
    featured: true,
  },
];
```

### Cambiar el Estilo de Todos los Botones

Antes:

```typescript
// ❌ Tenías que buscar y cambiar cada botón en todo el código
```

Ahora:

```typescript
// ✅ Editas app/components/ui/Button.tsx una sola vez
const variants = {
  primary: "bg-blue-500 text-white ...", // Cambiar aquí afecta TODOS los botones
};
```

### Crear una Nueva Página de Servicio Individual

```bash
# Crear la estructura
mkdir -p src/app/servicios/[slug]

# Crear el componente
# src/app/servicios/[slug]/page.tsx
```

```typescript
import { getServiceBySlug, services } from '@/lib/constants/services'

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export default function ServicePage({
  params
}: {
  params: { slug: string }
}) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return <div>Servicio no encontrado</div>
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  )
}
```

---

## 📊 Comparación: Antes vs Después

### Antes (Monolítico):

```
✗ page.tsx: 500+ líneas
✗ Datos mezclados con UI
✗ Estilos duplicados
✗ Difícil agregar nuevas páginas
✗ Difícil mantener
```

### Después (Modular):

```
✓ page.tsx: ~30 líneas (orquestador)
✓ Datos separados en lib/constants/
✓ Design System reutilizable
✓ Fácil crear páginas nuevas
✓ Componentes testeables
✓ TypeScript bien tipado
✓ Escalable
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module '@/lib/utils/cn'"

**Solución:** Verifica tu `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Error: "Module not found: Can't resolve 'clsx'"

**Solución:**

```bash
npm install clsx tailwind-merge
```

### Las imágenes no cargan

**Solución:** Verifica que `/public/hero.png` exista en tu proyecto.

### Error con typed routes en /gracias

**Solución:** Asegúrate de que:

1. La carpeta sea `src/app/gracias/page.tsx` (no `gracias.tsx`)
2. Usar `window.location.href = '/gracias'` en lugar de `router.push`

---

## 🎯 Próximos Pasos Recomendados

1. **Crear páginas individuales para cada servicio**
   - Usar la estructura `/servicios/[slug]/page.tsx`
   - Reutilizar los datos de `lib/constants/services.ts`

2. **Agregar más secciones**
   - Testimonios (crear `lib/constants/testimonials.ts`)
   - Blog
   - FAQ

3. **Mejorar el SEO**
   - Agregar metadata por página
   - Crear sitemap.xml dinámico

4. **Agregar tests**
   - Unit tests para componentes UI
   - Integration tests para formularios

---

## 📚 Recursos Útiles

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 💬 Soporte

Si tienes dudas durante la migración, recuerda:

1. Cada componente está documentado con comentarios
2. Los tipos TypeScript te guiarán
3. Puedes migrar incrementalmente (no todo de golpe)
4. Siempre haz backup antes de cambios grandes

¡Buena suerte con la refactorización! 🚀
