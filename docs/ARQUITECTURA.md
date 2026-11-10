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
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
  category: "electrical" | "electronic";
}

// lib/constants/services.ts
export const services: Service[] = [
  {
    id: "empalmes",
    icon: Plug,
    title: "Empalmes",
    description: "...",
    slug: "empalmes",
    category: "electrical",
  },
  // ... más servicios
];

// Funciones helper
export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
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
src/app/
├── layout.tsx                         # Documento, fuentes y medición compartida
├── page.tsx                           # /: Home con navegación y widget propio
├── _components/                       # Secciones privadas de la Home
├── (ads)/
│   ├── layout.tsx                     # Layout restrictivo compartido de campañas
│   ├── instalacion-electrica-viviendas-nuevas/
│   │   ├── page.tsx                   # /instalacion-electrica-viviendas-nuevas
│   │   └── _components/
│   ├── remodelacion-instalaciones/
│   │   ├── page.tsx                   # /remodelacion-instalaciones
│   │   └── _components/
│   └── paneles-solares/
│       ├── page.tsx                   # /paneles-solares
│       └── _components/
├── gracias/
│   └── page.tsx                       # /gracias: resultado del contacto
└── components/                        # Componentes compartidos y Design System
```

### Route Group `(ads)` y Layout de conversión — ADS-01

**Decisión adoptada antes de implementar, 2026-11-05:** todas las sub-landings para tráfico pagado de Google Ads deben vivir dentro de `src/app/(ads)/`. Los paréntesis organizan las rutas y permiten compartir un layout sin añadir `(ads)` a la URL pública. Las tres rutas finales anteriores mantienen sus URLs. [Convención de Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups).

`src/app/(ads)/layout.tsx` es un Server Component restrictivo diseñado para conversión bajo el criterio **Zero Exit Links**:

- El Header contiene únicamente el logo de Mr. Chispeza centrado, renderizado con `next/image` y dimensiones intrínsecas. El logo no tiene `href` ni está envuelto en un enlace.
- No hay navegación principal, menú hamburguesa, enlaces para volver a la Home ni cabeceras de navegación privadas en las páginas hijas.
- El Footer contiene únicamente copyright o información legal y no incluye enlaces extra. Los textos e información de marca se consumen desde `src/lib/constants/`, reutilizando la configuración de marca existente.
- El layout monta una sola instancia de `WhatsAppWidget`. Su botón utiliza posicionamiento Tailwind `fixed`, `bottom-6`, `right-6`, `z-50` y permanece visible desde el primer viewport en móviles menores de 768 px y al desplazarse por la página. Los enlaces de contacto del propio widget y los CTA de conversión dentro del contenido siguen disponibles.
- El layout raíz conserva documento, fuentes y medición, sin inyectar un segundo widget en campañas. La Home monta su widget en su propio árbol y conserva su navegación habitual. `/gracias` no muestra el widget.
- Cada `page.tsx` se limita a la metadata y sus secciones de contenido. Se retiran sus headers y footers anteriores para evitar navegación duplicada. La metadata conserva su contenido en constantes y declara canonical y `openGraph.url` de la ruta final.

### Redirecciones nativas; prohibición de carpetas proxy

Quedan prohibidos los `page.tsx` y directorios cuya única función sea redirigir. Los alias se declaran exclusivamente en `redirects()` de `next.config.ts`, mediante pares explícitos `source`/`destination`. Se mantiene `permanent: false` para conservar la semántica temporal de las redirecciones actuales; no se introducen cadenas ni bucles. [API nativa de Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects).

La configuración debe cubrir estos accesos heredados y de campaña:

- `/proyectos-nuevos` y `/instalacion-electrica-casa-nueva` → `/instalacion-electrica-viviendas-nuevas`.
- `/remodelacion-instalaciones-antiguas` y `/remodelacion-electrica` → `/remodelacion-instalaciones`.

Los CTA internos de `src/lib/constants/services.ts` enlazan directamente a las rutas finales para evitar saltos innecesarios. Los alias conservan los accesos publicados previamente y sus parámetros de campaña. Esta decisión **sustituye** el uso de páginas de redirección aprobado en «Home y accesos para campañas Ads»; aquel registro se conserva como antecedente histórico.

### Vídeo de campañas

`src/app/components/ui/AdsVideoPlayer.tsx` es una primitiva compartida del Design System. Recibe `src` y `poster` obligatorios y utiliza `<video controls preload="none" playsInline>` sin autoplay. No carga librerías ni iframes externos. La miniatura se entrega mediante el atributo nativo `poster`; no se añade una imagen superpuesta que duplique la descarga. Su aspecto responsive reserva espacio y sus clases se combinan con `cn()`. Los archivos de vídeo y las miniaturas reales se suministran desde constantes al integrarlo en una landing; no se inventan recursos ni se insertan demos de banco. [Elemento de vídeo HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video).

**Validación y reversión de ADS-01:** ejecutar typecheck, lint y build, comprobar los cuatro alias por HTTP con sus parámetros, las tres páginas finales, la ausencia de enlaces en header/footer y el widget único y flotante en móvil. La reversión restauraría las rutas y layouts mediante Git; cualquier cambio futuro del contrato se documenta primero y debe seguir usando redirecciones nativas.

### Contenido y conversión de remodelación — REM-01

**Decisión adoptada antes del código, 2026-11-05:** poblar `/remodelacion-instalaciones` con el brief aprobado. La ruta y el layout ADS-01 se conservan. El problema actual es la presencia de copy incrustado, promesas sin confirmar y un selector de WhatsApp que pierde el contexto del servicio.

- `src/lib/constants/remodelacion-antiguas.ts` exportará contratos y datos tipados: `heroData`, `symptomsData`, `fearsData`, `processData`, `includesData`, `whatsappMessage`, metadata, contenido audiovisual y cierre de contacto. Los valores pendientes se mantienen entre corchetes (`[numero]`, `[100 m2]`, `[X días]`); no son evidencia de resultados ni compromisos de plazo.
- La página compone, en este orden, `RemodelacionHero`, vídeo, `SymptomsSection`, `FearsSection`, `ProcessSection`, `IncludesSection` y el cierre de contacto existente. Todas las secciones son Server Components; reciben datos por props. El botón local de WhatsApp es la frontera cliente mínima.
- Los seis componentes anteriores de hero, señales, soluciones, proceso, proyectos y FAQ se sustituyen por este recorrido. Se retiran sus constantes sin consumidores para evitar dos fuentes del mismo mensaje. No se reutilizan como prueba social casos o cifras cuya procedencia no está acreditada.
- Se conserva `#contacto-remodelacion` y el `ContactForm` compartido como alternativa secundaria con Formspree + Turnstile. El CTA de WhatsApp se repite en el cierre; no se ofrecen llamadas a números identificados como «Solo WhatsApp» ni se modifican proveedores, CAPTCHA o envíos.
- El botón solicita la apertura del **único selector flotante existente**, mediante un evento de navegador tipado compartido en `src/lib/utils/whatsapp.ts`, con el mensaje obtenido de constantes. No se añade un segundo modal ni un proveedor externo. Se elige este contrato frente a un contexto en todo el layout para mantener estáticas las secciones y limitar el cambio compartido al contacto.
- El selector conserva la elección Costa/Marga Marga. Sus enlaces a `/gracias?to=whatsapp&zone=…` añaden `message` mediante `URLSearchParams`; la pantalla existente construye `wa.me` con el teléfono de la zona y ese texto codificado. Solo se acepta texto no vacío de hasta 1.000 caracteres; en su ausencia se conserva el mensaje genérico de cada zona. El parámetro no controla teléfonos, destinos ni código. No incorporar datos personales a la plantilla: el visitante completa `[comuna]` y `[años]` en WhatsApp.
- `src/lib/constants/whatsapp.ts` centraliza los textos del selector y de su redirección, reutiliza los teléfonos de `navigation.ts` y asocia la ruta de remodelación a su mensaje. Así, el botón flotante de esta campaña conserva también el contexto del servicio; las demás rutas mantienen sus mensajes genéricos. Se conservan el evento de medición existente y su significado: abrir el contacto no acredita un mensaje enviado.
- El selector expone nombre accesible, estado expandido, foco al abrir, cierre con Escape y retorno al disparador. No se declara modal bloqueante ni se encierra el foco, puesto que sigue siendo un panel flotante no modal.
- Se corrige la variante compartida `Button.primary` a texto `slate-950` sobre `amber-500`, conservando su API, para ofrecer contraste legible sin repetir correcciones en cada CTA.

**Vídeo autorizado como placeholder:** `videoData` define exactamente `/videos/remodelacion-placeholder.mp4` y `/galeria/remodelacion-poster.jpg`. Ambos recursos están ausentes al adoptar esta decisión; se integran como referencias de preparación, con aviso visible de material pendiente y `preload="none"`. Esta excepción explícita del brief no certifica reproducción, ausencia de 404 del poster ni cumplimiento multimedia del DoD. Marketing debe proporcionar vídeo real, miniatura propia y subtítulos antes de activar la campaña. No generar archivos falsos para ocultar el pendiente.

**Archivos y fases:** fase 1, este contrato y constantes tipadas; fase 2, secciones locales, composición, botón y adaptación compartida del selector/redirección; fase 3, validación y registro en `PROJECT_STATUS.md`. Los exports heredados se conservan únicamente durante la transición de la primera fase y se retiran con sus consumidores en la segunda.

**Validación:** ejecutar `npm run typecheck`, `npm run lint` y, por cambiar renderizado, `npm run build`. Comprobar H1 único, ausencia de copy comercial en la nueva UI, layout sin navegación, breakpoints, CTA inicial y final, dos zonas y conservación exacta del mensaje en los enlaces. Verificar la construcción de `wa.me` sin enviar mensajes ni formularios reales. Registrar por separado los placeholders y el Turnstile local `110200`, ya excluido por el responsable.

**Reversión:** revertir los commits REM-01 mediante Git, recuperando composición y mensajes anteriores sin tocar rutas finales, redirecciones nativas, secretos ni configuración externa. No cambiar los alias como efecto colateral de un cambio de copy.

### Contenido y conversión de viviendas nuevas — VIV-01

**Decisión adoptada antes del código, 2026-11-05:** aplicar a `/instalacion-electrica-viviendas-nuevas` el brief de viviendas nuevas y el patrón validado REM-01. Se conserva el layout ADS-01, la URL final, su canonical, los alias nativos y el formulario secundario. Se sustituye el contenido anterior centrado en parcelas para evitar copy incrustado, plazos no confirmados y casos sin evidencia.

- `src/lib/constants/viviendas-nuevas.ts` exporta contratos y objetos tipados `heroData`, `problemData`, `solutionData`, `processData`, `includesData`, `targetData` y `whatsappMessage`, más encabezados, metadata, vídeo y cierre de contacto. Los arrays llevan IDs estables y se mantienen serializables, sin imports de UI ni dependencias de las constantes de remodelación.
- El orden del recorrido es Hero → vídeo → problemas → solución → proceso → incluidos → perfiles → cierre de contacto. Las seis secciones nuevas viven en `_components/` de viviendas y son Server Components con props tipadas; `page.tsx` compone sin copy comercial. Se conserva `#contacto-viviendas-nuevas` y `ContactForm` con Formspree + Turnstile como alternativa secundaria.
- El botón cliente de REM-01 pasa a ser `src/app/components/WhatsAppCTAButton.tsx`, compartido por ambas campañas al aparecer su segundo consumidor real. Recibe `label` y `message`, usa `Button.primary` y `cn()`, y solicita la apertura mediante la utilidad existente. Se actualizan los dos consumidores de remodelación y se elimina su botón privado anterior. No se importa UI entre carpetas privadas ni se duplica el selector, la integración o la lógica de transporte.
- `src/lib/constants/whatsapp.ts` asocia cada ruta final a su propio mensaje. El selector flotante de viviendas utiliza el mismo mensaje que sus CTA. Costa/Marga Marga conservan los teléfonos configurados y el transporte por `/gracias` definido en REM-01. Home y paneles solares mantienen sus mensajes genéricos.
- Se retiran los seis componentes anteriores sustituidos y sus exports sin consumidores; `CTAViviendasNuevas` se convierte en sección de servidor con contenido desde constantes. El visitante puede compartir planos en WhatsApp; el formulario web conserva sus campos actuales y no ofrece una subida de archivos inexistente.
- La prueba social y el plazo permanecen como `[número] viviendas instaladas` y `Presupuesto en [X días]`, con avisos de confirmación pendiente. Son preparación de copy aprobada, no evidencia ni garantías de experiencia o plazo. `[comuna]` es un campo intencionado del mensaje que completa el visitante.

**Excepción audiovisual del brief:** integrar `AdsVideoPlayer` bajo el Hero con `/videos/viviendas-placeholder.mp4` y `/galeria/viviendas-poster.jpg` desde `videoData`. Ambos archivos están ausentes al adoptar la decisión; mostrar un aviso visible de material pendiente y mantener `controls`, `preload="none"` y ausencia de autoplay. Marketing debe aportar vídeo real, poster propio y subtítulos cuando haya voz. No fabricar recursos ni certificar reproducción o DoD multimedia con estas rutas de preparación.

**Alternativas y alcance:** duplicar el botón por campaña incumpliría la regla de extracción al segundo consumidor; importar el botón privado de remodelación rompería la colocación. Se comparte únicamente esta frontera cliente, conservando las secciones específicas cerca de sus páginas. No se añaden abstracciones, dependencias ni proveedores.

**Fases y archivos:** primero SSOT y constantes (exports heredados solo durante la transición); después las seis secciones, composición, cierre de contacto y extracción del botón; finalmente validación y registro en `PROJECT_STATUS.md`. Se actualiza el procedimiento de mantenimiento en `TUTORIAL.md`.

**Validación:** typecheck, lint con cero advertencias y build por cambiar renderizado; responsive en móvil y límites `sm`/`md`/`lg`/`xl`; un H1, ausencia de desbordamientos y CTA en primer viewport. Comprobar CTA inicial/final, dos zonas, mensaje exacto, foco y Escape; verificar que remodelación conserva su copy y que Home/solar no reciben mensajes de campaña. No enviar mensajes o formularios reales. Registrar los placeholders y mantener la exclusión autorizada del Turnstile local `110200`.

**Reversión:** revertir VIV-01 mediante Git y devolver el botón al ámbito privado solo si deja de existir el segundo consumidor. Conservar rutas públicas, redirecciones nativas y configuración externa. Esta decisión amplía REM-01; sus observaciones históricas sobre mensajes genéricos de viviendas describen el estado anterior.

### UI premium y WhatsApp exclusivo — ADS-02

**Decisión adoptada antes del código, 2026-11-09:** finalizar la presentación y el embudo de remodelación y viviendas según la instrucción de marketing «Sin formulario de email». Sustituye expresamente la conservación del formulario secundario de REM-01/VIV-01; sus registros históricos describen el estado anterior.

**Orden de implementación:**

1. Revisar `next.config.ts`: las cuatro reglas temporales hacia las rutas finales ya están activas en la base `2bf4873`. No crear carpetas proxy ni redirecciones nuevas para simular una reactivación. Comprobar por HTTP sus destinos y parámetros tras compilar.
2. Eliminar `ContactForm` y cualquier contacto de email/teléfono de `(ads)`. Esto incluye el cierre de paneles solares, que todavía contiene formulario y enlace `tel:`. El Home conserva su integración de formulario fuera del grupo. Los cierres consumen datos de constantes y conservan sus anclas; no se cambia el backend ni la configuración de CAPTCHA. Retirar los campos de copy del formulario que dejan de tener consumidores.
3. Montar tres `WhatsAppCTAButton` en cada campaña: Hero, final de `FearsSection` en remodelación o `SolutionSection` en viviendas y cierre. Reutilizar label y mensaje desde constantes a través de props. El widget flotante permanece único y no cuenta entre esas tres instancias.
4. Refactorizar los trece componentes visuales locales de ambas rutas con Motion: entradas `opacity: 0, y: 20` hacia `opacity: 1, y: 0`, `whileInView` y `viewport.once`. Se permiten Client Components para estas secciones animadas; `page.tsx`, metadata y layout se conservan de servidor. Un hook compartido `useAdsReveal` centraliza la configuración y elimina desplazamiento/duración ante `prefers-reduced-motion`.
5. Registrar la implementación y evidencias al final del changelog después de validar.

**Presentación y reutilización:** alternar blanco y `slate-50`, reservar el ámbar para acentos y CTAs, mantener H2 centrados en `text-3xl sm:text-4xl font-bold text-slate-900 mb-10`. Utilizar `Card` con `rounded-2xl`, fondo blanco, borde sutil, padding 6/8 y sombras `shadow-md hover:shadow-lg`; centrar el contenido de las grillas. Los iconos decorativos son de al menos 32 px y ámbar, con `aria-hidden`. Hero y cierre tienen composición centrada, espacios amplios y CTA de contraste legible; no introducir datos comerciales en JSX. El bloque de vídeo compartido `AdsVideoSection` adopta la misma presentación y animación en ambas páginas, conservando `AdsVideoPlayer`.

**Alcance compartido mínimo:** extraer configuración de Motion al hook, el bloque audiovisual a `components/` por sus dos consumidores y ajustar el botón común para integrar el icono con contraste. Las secciones siguen siendo privadas de su ruta; no se importan entre sí. El cierre solar se limita a retirar contacto alternativo y consumir constantes, sin ampliar la refactorización premium a sus demás secciones. No añadir bibliotecas, servicios o imágenes de banco.

**Alternativas y riesgos:** mantener formularios contradice el brief; duplicar animaciones dificulta respetar movimiento reducido. Animar las secciones requiere hidratación, pero las páginas siguen generando HTML y metadata. Mantener entradas breves, sin carruseles o cambios de dimensiones que causen CLS. Los vídeos, posters y cifras comerciales pendientes conservan su estado de preparación; activar aliases no declara aprobada una campaña publicitaria ni valida estos recursos ausentes.

**Validación y reversión:** typecheck, lint sin advertencias y build; comprobar cuatro alias 307 con UTM, rutas finales 200, ausencia de formularios/Turnstile/mailto/tel en `(ads)`, tres CTAs reales por landing, mensaje correcto en ambas zonas, responsive y estado visible después de las animaciones. Verificar foco/Escape sin enviar mensajes. Revertir el commit mediante Git recuperaría la presentación anterior; cualquier reintroducción de formularios requiere una decisión nueva del SSOT y autorización del brief.

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
optimizePackageImports: ["lucide-react", "framer-motion"];
```

---

## 📈 Escalabilidad

### Agregar Nueva Funcionalidad

#### Ejemplo: Agregar sección de Blog

1. **Crear tipos**

```typescript
// lib/types/index.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
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
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: Props) {
  // ...
}
```

2. **Usar tipos compartidos**

```typescript
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  // TypeScript autocompleta service.title, service.icon, etc.
}
```

3. **Evitar `any`**

```typescript
// ❌ MAL
const data: any = fetchData();

// ✅ BIEN
const data: Service[] = fetchData();
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

## Decisión 2026-11-05 — Home y accesos para campañas Ads

**Estado:** adoptada para esta tarea por solicitud explícita del responsable del proyecto. Este registro precede a los cambios de código.

**Problema:** las tarjetas con landing no están agrupadas, faltan anclas de campaña en el DOM, el menú apunta a una sección inexistente y existen fotografías de banco sin marcar. Las nuevas URLs solicitadas tampoco existen como rutas del App Router.

**Alcance y decisión:**

- Mantener `src/app/page.tsx` y `src/app/_components/` como estructura real de la home; no recrear el grupo `(home)` de los ejemplos históricos.
- Ordenar estáticamente `services` con los servicios que tienen `href` y `ctaText` propios al principio, preservando el orden relativo del resto. La UI conserva el orden de las constantes.
- Definir `href: /instalacion-electrica-casa-nueva` para `proyectos-nuevos` y `href: /remodelacion-electrica` para `remodelacion`, con textos de CTA específicos en `src/lib/constants/services.ts`.
- Añadir `anchorId?: string` al contrato `Service`. Cada tarjeta utiliza `anchorId ?? id` como ID del DOM; `proyectos-nuevos` declara `anchorId: proyectos-desde-cero`. Así se resuelven también `#remodelacion`, `#tramites-sec` y `#empalmes` sin mapas comerciales en JSX. Reservar margen de scroll para el header sticky.
- Las URLs nuevas son accesos de campaña mediante redirecciones temporales de servidor a `/instalacion-electrica-viviendas-nuevas` y `/remodelacion-instalaciones`. Las páginas existentes siguen siendo las únicas que renderizan cada servicio; este cambio no crea ni duplica sub-landings. Cuando se implemente contenido propio en las rutas de campaña, revisar esta decisión antes de sustituir los alias.
- Retirar `#testimonios` de `mainNavigation` hasta que exista una sección real.
- Marcar con `// TODO:` las fotos de Unsplash de galería y banner para sustituirlas por obras reales. La foto local del Hero requiere confirmar procedencia; no se declara de banco ni se certifica como trabajo propio solo por su apariencia.

**Alternativas descartadas:** dejar enlaces a rutas inexistentes produciría 404 y errores de rutas tipadas; duplicar o trasladar ahora las landings ampliaría el alcance. Las redirecciones temporales conservan la navegación existente y permiten una futura sustitución sin fijar una redirección permanente.

**Archivos afectados:** constantes de servicios, navegación y galería; contrato `Service`; tarjeta local de servicio; comentarios de Hero, Galería y Banner; dos páginas de redirección; este documento y `PROJECT_STATUS.md`.

**Validación:** generar tipos de rutas, ejecutar typecheck, ESLint y build; comprobar orden, CTAs, existencia y unicidad de anclas en el HTML y destino de ambas redirecciones. Registrar las limitaciones del entorno y los fallos previos separadamente de los resultados del cambio.

**Riesgos y reversión:** las fotos de banco seguirán visibles hasta disponer de sustitutos aprobados y el recorrido de campaña incluye una redirección. Para revertir, restaurar propiedades, orden, navegación y contrato anteriores y retirar los dos alias, manteniendo intactas las páginas existentes. No se altera Formspree, Turnstile ni la medición.

## Decisión 2026-11-10 — Refinamiento visual de conversión ADS-04

**Estado:** adoptada por solicitud del responsable antes de implementar. Actualiza la presentación centrada de ADS-02/ADS-03; sus registros históricos se conservan. El problema es la falta de separación entre Hero ámbar y CTA del mismo color, el cierre con recuadro blanco y las grillas que aparecen simultáneamente.

**Alcance y decisión:**

- Los dos Heroes usan la variante `dark` de `Section` con degradado azul a marino y texto blanco/azul claro. Desde `lg`, texto y CTA ocupan la columna izquierda y `AdsVideoPlayer` la derecha; en móvil se mantiene el CTA antes del vídeo. Cada página de servidor pasa `videoData` al Hero mediante su contrato tipado. Se conservan rutas placeholder, controles, `preload="none"`, títulos, avisos y anclas audiovisuales. Retirar `AdsVideoSection` cuando pierda sus dos consumidores, sin sustituir la primitiva compartida ni crear un segundo reproductor por campaña.
- Los cierres usan `Section.dark`, contenido centrado y CTA ámbar con sombra, sin recuadro blanco. Se conservan las anclas y las tres instancias de `WhatsAppCTAButton` por campaña; el selector, sus mensajes, teléfonos, eventos y redirecciones no cambian.
- Las seis grillas de señales/problemas, miedos, incluidos y perfiles comparten `useAdsStagger` en el módulo de animación existente: variantes de contenedor/hijos, `staggerChildren: 0.15` y entrada única al viewport. Con movimiento reducido, eliminar desplazamiento, duración y escalonamiento y mantener el contenido visible.
- Los procesos conservan sus pasos y adoptan dos columnas desde `lg`: título y descripción en cuatro columnas con `sticky top-32`, pasos verticales en ocho. El contenedor sticky no recibe transformaciones de Motion; animar su contenido interior. En móvil vuelve al flujo normal. El título solicitado «Cómo trabajamos» procede de `processSectionData.title` en las constantes de cada campaña; no se cambia el resto del copy, los marcadores ni los datos de negocio.

**Alternativas y límites:** dejar el vídeo bajo el Hero mantiene la composición que se pidió sustituir; duplicarlo aumenta ruido y carga. No añadir bibliotecas, formularios, recursos ficticios, proveedores ni cambios de URLs. Mantener páginas, metadata y layout en servidor; las secciones animadas conservan la excepción cliente vigente.

**Archivos afectados:** Heroes, cierres, procesos y grillas locales, ambos `page.tsx`, constantes de campaña para el título solicitado, módulo compartido `useAdsReveal.ts`, retirada del bloque audiovisual sin consumidores y documentación de arquitectura, mantenimiento y estado.

**Riesgos, validación y reversión:** revisar CTA inicial visible, contraste del texto y botón, vídeo único dentro del Hero, orden móvil, desbordamientos en los límites de Tailwind, fijación y liberación reales del sticky y escalonamiento de las tarjetas. Ejecutar typecheck, lint y build y comprobar los seis CTA, foco/Escape y mensajes de ambas zonas sin envíos reales. Los vídeos/posters y cifras pendientes de marketing no se dan por resueltos. Revertir el commit recupera la composición anterior sin modificar rutas ni configuración externa.
