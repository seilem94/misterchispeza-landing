# Propuesta de SEO técnico — mrchispeza.cl

Fecha: 2026-11-17 (America/Santiago). Estado: aprobado para implementación, con el paso 3 cancelado por instrucción del responsable.

## 1. Alcance y diagnóstico comprobado

La fase documental inicial creó únicamente este documento. El responsable autorizó después la implementación del código, sus validaciones, el registro en `PROJECT_STATUS.md`, el commit y el push a la rama actual. Se cancela por completo la generación de imágenes: se utilizará el WebP estático proporcionado manualmente, sin crear, modificar ni redimensionar imágenes por código.

La revisión del repositorio confirma:

- El layout raíz ya declara `metadataBase: new URL(SITE_URL || 'https://mrchispeza.cl')`. Se conservará; la auditoría recibida no describe completamente el estado actual del código.
- El Home ya tiene canonical `/`, pero mantiene `title: 'Inicio'`, una descripción extensa y una imagen OG expresada como string sin dimensiones.
- El layout declara `locale`, `siteName` y dimensiones OG, pero el Home sustituye todo ese objeto al declarar su propio `openGraph`. Next.js realiza una combinación superficial: esos campos deben declararse también en el Home. [Documentación de herencia de metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#merging).
- Las tres sub-landings ya tienen canónicas específicas en sus constantes. Esta propuesta se limita al layout global y al Home; los objetos OG propios de las sub-landings requieren una revisión posterior y no reciben automáticamente los campos OG globales que omiten.
- `public/og-image.webp` existe, pero mide **512×512**. El responsable proporcionó después `public/og-image-1200x630.webp`: su dimensión real comprobada es **1200×628**, aunque su nombre contenga 630. La metadata utilizará las dimensiones reales sin modificar el recurso.
- Existe `public/favicon_io/apple-touch-icon.png`, de **180×180**. Se reutilizará mediante `icons.apple`; `appleWebApp` por sí solo no declara ese enlace. [Metadata de iconos](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons).
- No se encontró JSON-LD del negocio en el Home.

La comprobación anterior es del repositorio local. No acredita el HTML que actualmente sirve producción ni la caché de WhatsApp.

## 2. Decisión propuesta y archivos de una futura implementación

Se recomienda conservar la API `Metadata` de Next.js y el renderizado de servidor. Los datos de marca se reconciliarán en el módulo existente `src/shared/config/site.ts`; los datos específicos del Home se añadirán a `src/lib/constants/home.ts`, conservando `homeHeroContent`. El layout y la página consumirán esas fuentes, conforme al contrato de `docs/AGENT.md`.

Los únicos archivos de aplicación previstos son:

- `src/shared/config/site.ts`: configuración única de marca, dominio y recurso OG.
- `src/lib/constants/home.ts`: datos SEO y JSON-LD del Home.
- `src/app/layout.tsx`: objeto global completo mostrado en la sección 4.
- `src/app/page.tsx`: objeto del Home e inserción del script mostrados en las secciones 5 y 6.
- `public/og-image-1200x630.webp`: recurso suministrado por el responsable, incluido en Git sin modificar sus bytes.

Se descarta añadir etiquetas manuales paralelas, otro gestor SEO o una librería de Schema. También se descarta limitar el cambio al layout, porque el `openGraph` del Home reemplaza sus campos.

### Configuración exacta propuesta: `src/shared/config/site.ts`

Este bloque reemplazaría el contenido de ese módulo. Se conserva la propiedad `facebook` existente. La marca y el copy SEO quedarán definidos en código; las variables `NEXT_PUBLIC_SITE_NAME`, `NEXT_PUBLIC_SITE_TAGLINE`, `NEXT_PUBLIC_SITE_DESCRIPTION`, `NEXT_PUBLIC_SITE_LOCALE` y `NEXT_PUBLIC_OG_IMAGE` dejarán de controlar la metadata, para evitar divergencias de nombre, idioma, texto o dimensiones. Esta decisión forma parte de la propuesta a revisar.

```typescript
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? '')
  .trim()
  .replace(/\/+$/, '')

export const site = {
  name: 'Mr. Chispeza',
  legalName: 'Mr. Chispeza - HHL SpA',
  tagline: 'Servicio Eléctrico Profesional en Valparaíso',
  url: SITE_URL || 'https://mrchispeza.cl',
  locale: 'es_CL',
  facebook: 'https://www.facebook.com/MisterChispeza',
  ogImage: '/og-image-1200x630.webp',
  ogImageAlt: 'Mr. Chispeza - HHL SpA: servicios eléctricos en Valparaíso',
  description:
    'Instalaciones eléctricas, mantenimiento, certificación SEC y paneles solares en Valparaíso. Cotiza tu proyecto con Mr. Chispeza - HHL SpA.',
} as const
```

En producción se comprobará `NEXT_PUBLIC_SITE_URL=https://mrchispeza.cl`. El fallback cubre valores ausentes o vacíos; no corrige una variable configurada con localhost, otro dominio o una URL inválida. Cambiar esta variable requiere recompilar.

### Datos SEO exactos que se añadirían a `src/lib/constants/home.ts`

Se añadirá el import al inicio del módulo y este export, sin sustituir los datos del Hero:

```typescript
import { site } from '@/shared/config/site'

export const homeSeoContent = {
  title: 'Electricista en Valparaíso | Mr. Chispeza - HHL SpA',
  description: site.description,
} as const
```

- Título final: **Electricista en Valparaíso | Mr. Chispeza - HHL SpA** — **51 caracteres**, incluidos espacios y signos.
- Descripción final: **Instalaciones eléctricas, mantenimiento, certificación SEC y paneles solares en Valparaíso. Cotiza tu proyecto con Mr. Chispeza - HHL SpA.** — **138 caracteres**, por debajo del máximo de 155.

Se utilizará `title.absolute` en el Home para que el template global no añada de nuevo la marca y altere la longitud del título aprobado. [Reglas de títulos de Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title).

## 3. Paso cancelado: utilizar exclusivamente la imagen estática suministrada

El responsable canceló íntegramente la creación y transformación de imágenes. No se incorporará ni ejecutará ningún script de generación, conversión o redimensionado.

Se referencia `/og-image-1200x630.webp`, con MIME `image/webp` y dimensiones reales de 1200×628 comprobadas en modo lectura. Se conservará el recurso intacto y se comprobará su hash antes del commit. El archivo anterior `/og-image.webp` permanece disponible para sus consumidores actuales.

## 4. Objeto `metadata` global exacto: `src/app/layout.tsx`

Se conservarán `import type { Metadata, Viewport } from 'next'`, fuentes, viewport, GA, Analytics, SpeedInsights y la estructura del layout. Se añadirá el import de configuración siguiente y se retirarán las constantes locales duplicadas de sitio. `GOOGLE_SITE_VERIFICATION` y `GA_MEASUREMENT_ID` conservarán sus lecturas actuales del entorno.

El objeto global quedará **completo** así:

```typescript
import { SITE_URL, site } from '@/shared/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL || 'https://mrchispeza.cl'),

  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'electricista',
    'servicios eléctricos',
    'Valparaíso',
    'instalaciones eléctricas',
    'paneles solares',
    'mantenimiento eléctrico',
    'proyectos eléctricos',
    'Chile',
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 628,
        type: 'image/webp',
        alt: site.ogImageAlt,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
  },

  icons: {
    icon: '/favicon.ico',
    apple: [
      {
        url: '/favicon_io/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },

  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: 'default',
  },

  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
}
```

`metadataBase` convertirá las rutas de imágenes sociales y canónicas relativas a URLs absolutas en el HTML. Las rutas relativas en los objetos TypeScript son válidas; se validará su resultado renderizado. [Resolución de URLs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase).

Se retirará el canonical global actual: cada página indexable declarará el suyo. El Home y las tres sub-landings ya disponen de esas declaraciones; así `/gracias` no heredará accidentalmente la canónica del Home y conservará su `noindex`. Por la misma razón, `openGraph.url` se declarará en cada página y no como `/` global.

La tarjeta global de Twitter define solo el formato. El Home especificará sus textos e imagen completos; las otras páginas podrán utilizar el fallback de Next.js desde su metadata resuelta o definir su propia tarjeta. No se inventará un usuario de X/Twitter.

`appleWebApp` configurará la presentación al guardar el sitio en iOS; no implica implementar una PWA, un service worker ni funcionalidad offline.

## 5. Objeto `metadata` exacto del Home: `src/app/page.tsx`

Se mantendrá `import type { Metadata } from 'next'` y se añadirán los imports siguientes. El objeto completo reemplazará la metadata actual del Home:

```typescript
import { site } from '@/shared/config/site'
import { homeSeoContent, homeBusinessJsonLd } from '@/lib/constants/home'

export const metadata: Metadata = {
  title: {
    absolute: homeSeoContent.title,
  },
  description: homeSeoContent.description,
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: site.name,
    url: '/',
    title: homeSeoContent.title,
    description: homeSeoContent.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 628,
        type: 'image/webp',
        alt: site.ogImageAlt,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: homeSeoContent.title,
    description: homeSeoContent.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 628,
        alt: site.ogImageAlt,
      },
    ],
  },
}
```

Con el dominio de producción, el HTML deberá incluir una única canónica equivalente a `https://mrchispeza.cl/` y una imagen OG `https://mrchispeza.cl/og-image-1200x630.webp`, además de `og:type=website`, `og:locale=es_CL`, `og:site_name=Mr. Chispeza`, `og:image:width=1200`, `og:image:height=628`, `og:image:alt` y `twitter:card=summary_large_image`. Next.js puede serializar la canónica raíz sin la barra final; ambas formas representan la misma URL raíz.

## 6. JSON-LD exacto del negocio e inserción en el Home

Se utilizará **`Electrician`**, un subtipo de `LocalBusiness` adecuado al servicio. [Definición de Schema.org](https://schema.org/Electrician).

### Objeto que se añadirá a `src/lib/constants/home.ts`

Este bloque reutiliza el import de `site` de la sección 2:

```typescript
export const homeBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': new URL('/#electrician', site.url).href,
  name: site.legalName,
  url: new URL('/', site.url).href,
  image: new URL(site.ogImage, site.url).href,
  description: homeSeoContent.description,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Valparaíso',
    addressCountry: 'CL',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Región de Valparaíso',
  },
} as const
```

El nombre emitido será exactamente **Mr. Chispeza - HHL SpA**, la URL será **https://mrchispeza.cl/** y la ubicación identificará **Valparaíso, Chile**. Se declara la región, acorde con la cobertura del negocio, sin inferir una dirección física en la ciudad. `metadataBase` no transforma los valores de JSON-LD; por eso se construyen aquí URLs absolutas explícitamente.

No se añadirán calle, código postal, coordenadas, horarios, reseñas, valoraciones ni perfiles sociales sin validar. El esquema regional es una base descriptiva; no garantiza elegibilidad para resultados enriquecidos de negocio local. Una dirección completa y otros campos que exija Google se incorporarán únicamente cuando el negocio los confirme.

### Código exacto que emitirá el script en `src/app/page.tsx`

Se reemplazará únicamente el cuerpo de `HomePage` por esta composición, manteniendo los imports actuales de secciones y los de la sección 5. El script se incluirá una sola vez, renderizado en servidor, como primer hijo de `<main>`:

```tsx
export default function HomePage() {
  return (
    <main className="relative min-h-screen scroll-smooth font-sans text-slate-800">
      <script
        id="home-electrician-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeBusinessJsonLd).replace(/</g, '\\u003c'),
        }}
      />
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
      <WhatsAppWidget />
    </main>
  )
}
```

El reemplazo de `<` por su escape Unicode evita que el contenido serializado cierre el elemento script. Se utiliza un elemento nativo para datos estructurados, siguiendo la [guía JSON-LD de Next.js](https://nextjs.org/docs/app/guides/json-ld).

## 7. Validación prevista después de aprobar e implementar

Estas comprobaciones son criterios de aceptación futuros, no pruebas ejecutadas de una implementación:

1. Ejecutar `npm.cmd run typecheck`, `npm.cmd run lint` y `npm.cmd run build` con código 0. El typecheck será independiente del bypass de tipos configurado en el build.
2. Compilar con `NEXT_PUBLIC_SITE_URL` vacío y con `https://mrchispeza.cl`; comprobar en ambos casos las URLs absolutas del HTML prerenderizado.
3. Comprobar el título exacto de 51 caracteres y la descripción de 138, sin sufijos duplicados; una sola canónica, un solo objeto OG y un solo JSON-LD en el Home.
4. Verificar en el HTML de `/`, `/paneles-solares`, `/remodelacion-instalaciones` y `/instalacion-electrica-viviendas-nuevas` que las canónicas siguen siendo propias. Verificar que `/gracias` conserva `noindex`.
5. Comprobar el WebP suministrado: 1200×628 reales, hash intacto, HTTP 200 y `Content-Type: image/webp`, sin autenticación. Verificar también el icono Apple de 180×180 y su etiqueta `apple-touch-icon`.
6. Parsear el JSON-LD emitido y validar tipo, nombre, URL y región en [Schema Markup Validator](https://validator.schema.org/). Revisar por separado la elegibilidad y advertencias en [Rich Results Test](https://search.google.com/test/rich-results), sin completar datos desconocidos para silenciarlas.
7. Tras un despliegue autorizado por separado, inspeccionar el HTML público y probar una nueva compartición en WhatsApp. Registrar por separado el resultado del código desplegado y las posibles cachés de plataformas; no garantizar una actualización inmediata de vistas previas antiguas.

## 8. Riesgos, revisión y reversión

- La publicación debe incluir el WebP suministrado junto con la metadata; de lo contrario la URL propuesta devolvería 404. No se generará ningún recurso alternativo.
- La configuración propuesta centraliza los datos y retira los overrides de texto SEO indicados en la sección 2. `site.name` también alimenta el copyright y el alt del logo del layout de campañas: su valor se normalizaría de `Mr Chispeza` a `Mr. Chispeza`. No se cambian contactos ni rutas.
- El campo regional de JSON-LD expresa la información disponible, no una dirección comercial verificada. El negocio debe revisar el nombre legal y la ubicación antes de la implementación.
- Google puede reescribir títulos y snippets; las longitudes aprobadas no garantizan su presentación exacta en resultados.
- Los cambios de OG específicos de las tres sub-landings quedan fuera de esta propuesta; no se declarará reparada su metadata completa por modificar solo el layout.
- La reversión de una implementación futura restauraría por Git los cuatro archivos de aplicación y retiraría la referencia al recurso suministrado si ya no tuviera consumidores, sin modificar su contenido. Se conservará la corrección previa de `metadataBase`, el canonical actual del Home y las canónicas existentes de las sub-landings.

**Revisión documental inicial ejecutada:** se comprobaron las longitudes de los textos, la sintaxis y los tipos de la metadata propuesta mediante compilación en memoria contra la instalación local de Next.js. Se revisaron el nombre, tipo, URLs y región del objeto JSON-LD y el escape del script. Esa revisión no generó imágenes ni escribió archivos de aplicación.

**Autorización vigente:** implementar el plan con WebP estático y sin el paso de generación de imágenes. Los resultados efectivos de validación y entrega se registrarán en `docs/PROJECT_STATUS.md`.
