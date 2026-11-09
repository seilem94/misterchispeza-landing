# Manual de agentes — Mr. Chispeza

## 1. Alcance y autoridad documental

Este contrato se aplica a cualquier agente que lea, modifique o valide el proyecto. Su objetivo es mantener la arquitectura modular y preparar sub-landings de conversión sin introducir dependencias, flujos ni datos comerciales ficticios.

**`/docs` es la única fuente de verdad documental (SSOT)** para arquitectura, decisiones, procedimientos y hoja de ruta. Antes de ejecutar cualquier tarea, leer el estado vigente en este orden:

1. [AGENT.md](./AGENT.md): restricciones operativas y Definición de Hecho (DoD).
2. [PROJECT_STATUS.md](./PROJECT_STATUS.md): línea base, sprint, backlog, bloqueos y avances registrados.
3. [ARQUITECTURA.md](./ARQUITECTURA.md): separación de responsabilidades, estructura y Design System.
4. [MIGRACION.md](./MIGRACION.md): antecedentes de la migración modular ya completada.
5. [TUTORIAL.md](./TUTORIAL.md): procedimientos de mantenimiento; contrastar sus ejemplos con los contratos vigentes.

Antes de cambiar arquitectura o flujo, **proponer primero el cambio en el documento correspondiente de `/docs`**. La propuesta debe indicar problema, alcance, alternativas, decisión recomendada, archivos afectados, riesgos, validación y reversión. Registrar el estado de la decisión antes de implementar; una propuesta pendiente no equivale a una decisión adoptada. Aplicar cambios dentro de la autorización de la tarea, sin añadir aprobaciones para decisiones rutinarias ya autorizadas.

Estas reglas y las decisiones explícitas del sprint prevalecen sobre ejemplos históricos contradictorios. En particular, los ejemplos de `TUTORIAL.md` que editan contenido comercial dentro del JSX no autorizan nuevo hardcoding. Las discrepancias entre documentación e implementación deben registrarse y resolverse en `/docs` antes de modificar el comportamiento afectado. El código y los manifiestos aportan evidencia del estado implementado; no sustituyen el contrato documental.

No mantener copias de estos documentos en la raíz. Un README u otra entrada de instrucciones puede enlazar al SSOT sin duplicar sus reglas. Mantener el nombre solicitado `docs/AGENT.md`; la herramienta que ejecute al agente debe cargarlo explícitamente cuando corresponda.

## 2. Flujo de trabajo del agente

1. Leer el SSOT y delimitar el objetivo y los criterios de aceptación.
2. Inspeccionar `git status`, rama, diff y scripts antes de editar. Preservar cambios ajenos; no usar `reset --hard`, limpieza destructiva ni push forzado.
3. Inspeccionar los contratos y consumidores afectados. Distinguir hechos verificados, requisitos y propuestas; no inferir que una ruta o integración funciona solo porque existe un archivo.
4. Documentar primero cualquier decisión de arquitectura o flujo. Implementar el cambio mínimo coherente con ella y con el backlog vigente.
5. Ejecutar las validaciones del DoD y conservar resultados reproducibles. Un comando que no pudo ejecutarse se informa como bloqueado, nunca como aprobado.
6. Actualizar el registro conforme al protocolo de `PROJECT_STATUS.md`. Cerrar un hito únicamente con el DoD completo; informar deuda previa y validaciones pendientes sin ocultarlas.
7. Revisar el diff, incluir solo archivos del alcance autorizado y usar commits semánticos en español. No atribuir al agente cambios previos que no realizó.

## 3. Arquitectura y reglas de sistema

### 3.1 Límites y dirección de dependencias

Aplicar Clean Architecture mediante separación de responsabilidades sobre la estructura existente; no crear capas, repositorios, CMS o servicios nuevos sin necesidad documentada.

```text
src/app/page.tsx                         Orquestación de la home
src/app/_components/                    UI exclusiva de la home
src/app/(ads)/layout.tsx                 Layout restrictivo de campañas pagadas
src/app/(ads)/<ruta>/page.tsx            Landing de campaña; URL sin el grupo
src/app/(ads)/<ruta>/_components/        UI exclusiva de esa landing
src/app/<ruta>/page.tsx                  Orquestación y metadata de cada landing
src/app/<ruta>/_components/              UI exclusiva de esa ruta
src/app/components/                     Componentes usados por dos o más páginas
src/app/components/ui/                  Design System compartido
src/app/components/hooks/               Hooks compartidos existentes
src/app/actions/contact.ts              Frontera de servidor del formulario
src/lib/constants/                      SSOT de contenido y datos estáticos
src/lib/types/                          Contratos TypeScript compartidos
src/lib/utils/                          Utilidades sin dependencias de páginas
src/shared/config/site.ts               Configuración de sitio heredada
```

- `page.tsx` compone secciones y declara metadata; no contiene catálogos, reglas comerciales ni integración de proveedores.
- Los componentes visuales reciben datos tipados por props o importan constantes; no realizan envíos a proveedores ni validaciones de negocio.
- Los módulos de `lib/` no importan componentes de `app/`. Las utilidades de negocio no dependen de JSX ni del estado del navegador.
- Mantener el transporte HTTP y la lectura de variables de entorno en la frontera de servidor correspondiente. El formulario consume un resultado tipado, sin conocer secretos ni interpretar respuestas externas sin validar.
- Usar el alias `@/` configurado en `tsconfig.json`. Evitar dependencias circulares y exportaciones que mezclen código de servidor con código de cliente.

### 3.2 Colocación local frente a global

- Un componente usado en **una sola página** pertenece a su `_components/` local.
- Un componente usado en **dos o más páginas** pertenece a `src/app/components/`; las primitivas compartidas pertenecen a `ui/`.
- Ninguna ruta importa `_components/` privados de otra ruta. Extraer la parte compartida y parametrizarla al aparecer un segundo consumidor real.
- La home implementada vive en `src/app/page.tsx`, con `src/app/_components/`. El grupo `(home)` de documentos históricos es un ejemplo organizativo, no una migración pendiente que deba repetirse.

### 3.3 TypeScript y seguridad de tipos

- Mantener `strict: true`. Tipar props, contratos, formularios y resultados de integración; usar `import type` para imports exclusivamente de tipos.
- **Cero uso injustificado de `any`**, incluido `as any`. Usar `unknown` en fronteras externas y estrechar el tipo mediante validación antes de consumirlo.
- Una excepción imprescindible por una dependencia debe ser mínima, documentada en `/docs`, justificada en código y acompañada de una alternativa o condición de retirada. No usar supresiones de ESLint o TypeScript para eludir el DoD.
- Reutilizar `Service`, `NavItem` y demás contratos existentes. El contrato vigente de `Service` utiliza `icon: string`, `href?: Route` y `ctaText?: string`; no copiar el `iconName` de ejemplos antiguos.
- Conservar `typedRoutes`. Si faltan rutas generadas, regenerar los tipos con la herramienta de la versión instalada antes de concluir que hay un error de código. No forzar casts para ocultarlo.

### 3.4 Server Components por defecto

- Mantener páginas, layouts y secciones estáticas como Server Components.
- Añadir `'use client'` solo a la frontera mínima que necesita hooks de cliente, eventos, APIs del navegador o Framer Motion. Importar un formulario cliente desde una sección de servidor no obliga a convertir toda la sección en cliente.
- Los datos enviados a Client Components deben ser serializables. Mantener los iconos como identificadores de datos y resolverlos con la utilidad existente donde se renderizan.
- Mantener secretos y operaciones de servidor fuera del grafo de imports del cliente. Las Server Actions validan sus entradas aunque el navegador ya lo haya hecho.
- No convertir la página completa en cliente para resolver un problema local. Mantener la metadata en la frontera de servidor.
- Excepción adoptada en ADS-02: las secciones visuales de las dos campañas usan Framer Motion como Client Components; las páginas, metadata y layout permanecen en servidor. Compartir la configuración de entrada mediante `useAdsReveal`, respetar movimiento reducido y mantener los datos serializables en constantes.

### 3.5 UI y datos separados

- **Cero datos comerciales hardcodeados en componentes visuales**: títulos, descripciones, beneficios, FAQ, testimonios, teléfonos, rutas de CTA, textos de botones, imágenes, `alt`, etiquetas de formulario y mensajes de estado proceden de `src/lib/constants/`.
- Reutilizar `services.ts`, `navigation.ts`, `gallery.ts`, `viviendas-nuevas.ts` y `remodelacion-antiguas.ts`. Extenderlos con objetos tipados cuando falte contenido; no crear fuentes paralelas para el mismo dato.
- La separación documental y la de datos cumplen funciones distintas: `/docs` define el contrato; `src/lib/constants/` contiene los valores que consume la aplicación.
- Pueden permanecer en la UI su estructura semántica y sus clases de presentación. No trasladar credenciales a constantes: la configuración sensible pertenece al entorno del servidor.
- La configuración heredada de `src/shared/config/site.ts` y la configuración del layout deben reconciliarse mediante una propuesta documental antes de cambiar su fuente. No crear una tercera definición de marca, dominio o contacto.
- Al tocar una sección con contenido incrustado, extraer el contenido afectado antes de ampliarlo. Las infracciones heredadas no son precedentes válidos.

### 3.6 Tailwind y Design System

- Reutilizar `Button`, `Card`, `Section`, `Container` y `FormField` desde `src/app/components/ui/`.
- Usar **`cn()` de `@/lib/utils/cn`** al combinar clases base, condiciones, variantes o `className` recibido. La utilidad integra `clsx` y `tailwind-merge`.
- No construir clases dinámicas como `bg-${color}-500`; usar mapas con clases completas detectables por Tailwind. Evitar estilos inline cuando exista una utilidad apropiada.
- Mantener las variantes de `Button`: `primary`, `secondary`, `outline`, `ghost`; tamaños `sm`, `md`, `lg`. Proponer cualquier variante nueva en el SSOT antes de implementarla.
- El `Button` actual renderiza un `<a>` cuando recibe `href`. No asumir una API `asChild`, anidar botones y enlaces ni asumir que todos los atributos de botón se propagan al enlace.

## 4. Conversión, accesibilidad y SEO

Estas reglas hacen explícitos los principios de mobile-first, Design System, header sticky, CTA y metadata de la documentación existente. Son criterios de implementación y aceptación; no certifican que toda la UI heredada ya los cumpla.

### 4.1 Recorrido de conversión

- Cada sub-landing debe responder a una intención de campaña concreta: remodelación de instalaciones o instalación eléctrica para viviendas nuevas. Alinear anuncio, H1, propuesta de valor y CTA; evitar promesas, certificaciones, casos o tiempos de respuesta inventados.
- Mantener un CTA principal visible en el primer viewport y disponible durante el recorrido mediante el header sticky o el patrón persistente existente. En móvil debe poder accederse sin abrir un menú. Repetirlo al final sin tapar contenido, campos ni el widget de contacto.
- Usar `Button` y sus variantes; `primary` identifica la acción principal y las variantes secundarias mantienen la jerarquía. Si el contraste de una variante falla, proponer su corrección compartida en lugar de duplicar estilos locales.
- Mantener header al inicio, hero a continuación y footer al final. Las secciones intermedias deben respaldar la decisión de contacto con beneficios, proceso y evidencia real.
- `href` y `ctaText` se definen en constantes. Una tarjeta hacia una sub-landing usa su ruta final. En remodelación y viviendas se renderizan al menos tres `WhatsAppCTAButton`: Hero, mitad del recorrido y cierre. Cada uno abre el selector único con su mensaje de campaña; el widget flotante no sustituye estas tres instancias.
- En todo `(ads)` el único contacto permitido es WhatsApp: prohibidos formularios de email, `ContactForm`, Formspree, Turnstile y enlaces de contacto `mailto:` o `tel:`. Las anclas de cierre conservadas llevan al CTA de WhatsApp. Fuera de campañas se conserva el formulario acordado. No inventar automatizaciones ni proveedores.
- Reutilizar la medición existente sin inventar IDs ni añadir proveedores. Distinguir clic de CTA, apertura de WhatsApp y formulario aceptado; una visita directa a `/gracias` no demuestra por sí sola un lead enviado.

### 4.2 Accesibilidad y responsive

- Diseñar mobile-first y validar `sm`, `md`, `lg`, `xl`. Comprobar el viewport pequeño y ambos lados de los umbrales; los valores predeterminados son 640, 768, 1024 y 1280 px, sujetos a la configuración efectiva.
- Mantener foco visible, orden de tabulación lógico, etiquetas asociadas a campos y mensajes de error accesibles. Respetar `prefers-reduced-motion`; las animaciones no deben impedir leer o accionar un CTA.
- Medir contraste de texto, fondos e imágenes con sus overlays: mínimo 4.5:1 para texto normal y 3:1 para texto grande según WCAG. No dar por accesible una combinación solo por pertenecer a la paleta. [Referencia de contraste](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- Evitar desbordamientos horizontales, saltos por carga de imágenes y superposición del header o widgets. Las anclas de contacto deben dejar el formulario visible bajo el header fijo.

### 4.3 SEO técnico

- Queda estrictamente prohibido crear carpetas o archivos físicos (ej. `page.tsx`) cuyo único propósito sea redirigir tráfico (carpetas proxy). Toda redirección de URLs heredadas, alias o campañas debe configurarse nativamente usando la función `redirects()` dentro de `next.config.ts`.
- Todas las sub-landings de campañas pagadas pertenecen a `src/app/(ads)/` y comparten su layout restrictivo: header únicamente con logo centrado sin `href`, footer legal sin enlaces y una sola instancia de WhatsApp flotante, visible también en móviles. Las páginas no añaden cabeceras, menús ni pies de navegación propios.
- Declarar metadata específica por landing con la API `Metadata` de Next.js en servidor. Consumir textos e imágenes desde constantes y evitar tags duplicados por sistemas SEO paralelos.
- Usar un solo H1 alineado con el servicio y una jerarquía de encabezados coherente. Mantener contenido esencial renderizado desde servidor.
- Definir canonical y `openGraph.url` de cada ruta final usando el dominio de producción configurado. No heredar por accidente el canonical de la home ni publicar localhost como dominio.
- Conservar los alias existentes como redirecciones a una sola página final; no publicar copias de contenido para el mismo servicio. Documentar antes de cambiar URLs o el comportamiento de redirección.
- Mantener `/gracias` con `noindex`. Revisar la política de indexación de las sub-landings según la campaña y mantener coherencia con robots y sitemap cuando corresponda; no suponer que existe un generador de sitemap.
- Comprobar que las imágenes SEO existen. No inventar reseñas, valoraciones, credenciales ni datos estructurados comerciales.

### 4.4 Imágenes y rendimiento

- Usar **`next/image`** para imágenes de contenido y fondos visuales; los iconos SVG del sistema existente conservan su función de iconos.
- Reservar espacio mediante dimensiones intrínsecas o `fill` con un contenedor posicionado y de tamaño o proporción definidos. `sizes` debe reflejar el ancho real por breakpoint; `src` y `alt` proceden de constantes.
- Priorizar solo la imagen LCP cuando lo justifique el diseño. En Next.js 15 se usa `priority`; en Next.js 16 está deprecado y debe evaluarse `preload` o `fetchPriority` según la carga requerida. No combinar indicaciones incompatibles ni priorizar toda la galería. [Next.js 15 Image](https://nextjs.org/docs/15/app/api-reference/components/image), [Image vigente](https://nextjs.org/docs/app/api-reference/components/image).
- Mantener carga diferida fuera del primer viewport y respetar `images.remotePatterns` y `images.qualities` de `next.config.ts`. Documentar antes de ampliar orígenes externos.
- Verificar ausencia de CLS atribuible al cambio y carga correcta de imágenes. No presentar métricas de Lighthouse o Core Web Vitals como medidas si no se ejecutó la medición.

## 5. Contacto: WhatsApp en campañas y formularios fuera de `(ads)`

**Regla vigente ADS-02, 2026-11-09:** todas las rutas de `(ads)`, incluido paneles solares, utilizan exclusivamente el selector existente de WhatsApp. Las reglas de Formspree + Turnstile siguientes se aplican solo donde se permiten formularios, fuera de ese grupo. Esta instrucción sustituye la alternativa de formulario de REM-01 y VIV-01.

### 5.1 Flujo y responsabilidad de validación

El único backend de recepción de formularios autorizado es **Formspree**, con validación obligatoria de **Cloudflare Turnstile**. Reutilizar el recorrido existente:

```text
ContactForm (cliente) + useTurnstile
  -> submitContactForm (Server Action)
  -> Formspree con cf-turnstile-response
  -> validación Turnstile en el servidor de Formspree
  -> aceptación confirmada -> /gracias
```

La decisión para este flujo es usar la integración nativa de Turnstile en Formspree: activar CAPTCHA, seleccionar Turnstile y configurar allí la clave secreta. Los dominios permitidos del widget se configuran en Cloudflare; la site key pública se utiliza en la web. Esta configuración externa debe verificarse antes de afirmar que el formulario está protegido. [Integración oficial](https://help.formspree.io/articles/form-and-project-settings/protecting-your-forms-with-cloudflare-turnstile).

El token es de un solo uso y caduca a los cinco minutos. No validarlo primero mediante Siteverify en la Server Action y reenviarlo después para que Formspree vuelva a consumirlo. Cambiar quién valida requiere una propuesta documental que mantenga una única verificación efectiva antes de aceptar el lead. Mostrar el widget no sustituye la validación de servidor. [Validación de Turnstile](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

### 5.2 Contrato operativo

- Reutilizar `src/app/components/ContactForm.tsx`, `src/app/components/hooks/useTurnstile.ts` y `src/app/actions/contact.ts` exclusivamente fuera de `(ads)` donde exista un formulario autorizado; no importarlos desde campañas.
- Mantener las variables públicas existentes `NEXT_PUBLIC_FORMSPREE_ID` y `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. Ninguna clave secreta puede llevar el prefijo `NEXT_PUBLIC_`, incluirse en constantes o publicarse en Git, logs o documentación.
- Validar en servidor los campos `nombre`, `email`, `telefono`, `ubicacion` y `mensaje`; rechazar valores ausentes, tipos inesperados y contenido inválido. Aplicar una lista explícita de campos enviados, preservando el token y el comportamiento anti-spam acordado.
- La ausencia de site key, token o configuración de validación impide dar el flujo por válido. El navegador debe ofrecer un error útil; no añadir bypasses de CAPTCHA para producción.
- Resolver estados inicial, pendiente, éxito y error; evitar envíos duplicados y renovar el token cuando caduque o se necesite reintentar. Mantener accesibles los errores de validación y de red.
- La redirección de un envío legítimo a `/gracias` ocurre después de la aceptación de Formspree. No simular éxito ante errores de red, rechazo del proveedor o CAPTCHA inválido.
- Usar entornos y datos de prueba para verificar la integración; conservar evidencia de aceptación y rechazo sin exponer datos personales.
- **Prohibido inventar integraciones externas**: n8n, Make, Zapier, CRM, webhooks, proveedores alternativos de correo o automatizaciones de WhatsApp. Su presencia en documentación de un proveedor no las incorpora al alcance del proyecto.

## 6. Definición de Hecho (DoD)

Un hito solo se declara completado cuando cumple **todos** los puntos siguientes con evidencia. La deuda previa se registra como bloqueo; no rebaja el criterio ni se oculta con supresiones.

1. **Compilación y linting.** `npm run typecheck` y el linter finalizan con código 0, sin errores ni advertencias. Ejecutar `npm run lint` cuando su script sea válido y ESLint con `--max-warnings=0`. Para cambios de rutas, renderizado o configuración, ejecutar además `npm run build`. Un build con `ignoreBuildErrors: true` no sustituye el typecheck. En el estado inicial, `lint` necesita reconciliación: `next lint` fue eliminado en Next.js 16; puede diagnosticarse con `node node_modules/eslint/bin/eslint.js . --max-warnings=0`, sin declarar reparado el script. [Cambio oficial](https://nextjs.org/docs/app/guides/upgrading/version-16#next-lint-command).
2. **Colocación de componentes.** UI exclusiva en `_components/` de su ruta; UI usada por dos o más páginas en `src/app/components/`; primitivas en `ui/`. No hay imports entre carpetas privadas de rutas.
3. **Separación de responsabilidades.** Cero datos comerciales hardcodeados en componentes visuales afectados. Todo el contenido está en `src/lib/constants/`, con contratos tipados y sin duplicación. La UI no contiene lógica de integración.
4. **Performance.** Las imágenes usan `next/image`, espacio reservado, `sizes` adecuados y prioridad de carga compatible con la versión efectiva. No hay imágenes rotas ni CLS causado por el cambio.
5. **Responsive.** La UI se valida en viewport móvil y en `sm`, `md`, `lg`, `xl`, incluidos sus límites. No hay desbordamientos, contenido cortado, CTA oculto ni formulario tapado. Registrar rutas y tamaños comprobados.
6. **Conversión.** CTAs funcionales con destinos y anclas correctos. En las dos campañas, comprobar al menos tres `WhatsAppCTAButton`, selector único, elección de las dos zonas, conservación del mensaje, foco y Escape; en todo `(ads)` comprobar ausencia de formularios y contacto alternativo. Fuera de `(ads)`, cuando el cambio afecte formularios, validar Formspree + Turnstile, token ausente/inválido/expirado, fallo de red y aceptación previa a `/gracias`. No duplicar conversiones ni confundir apertura de WhatsApp con mensaje enviado. La navegación probada debe estar libre de errores, registrando aparte los placeholders autorizados.
7. **Documentación sincronizada.** `PROJECT_STATUS.md` incorpora una nueva entrada del hito cumplido, con alcance, archivos, evidencias y referencia de entrega. Los documentos afectados por decisiones de arquitectura o flujo se han actualizado previamente. No borrar ni reescribir entradas históricas.

No marcar una validación como realizada por inspección del código cuando exige ejecución. El estado inicial y sus bloqueos están en [PROJECT_STATUS.md](./PROJECT_STATUS.md); su changelog se entrega vacío para registrar únicamente futuros hitos que cumplan este DoD.
