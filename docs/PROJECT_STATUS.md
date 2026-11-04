# Estado y hoja de ruta — Mr. Chispeza

## 1. Línea base y política de registro

- **Fecha de referencia:** 2026-11-04, zona horaria America/Santiago.
- **Estado global:** proyecto activo; migración a arquitectura modular completada.
- **Sprint actual:** creación de sub-landings de alta conversión para campañas de Google Ads, orientadas a remodelación de instalaciones y viviendas nuevas.
- **Rama de trabajo:** `feature/sublandings-remodelacion-viviendas-nuevas`.
- **Base de código inspeccionada:** `0add08b`, más el árbol de trabajo existente al iniciar esta documentación.
- **Contrato de aceptación:** [AGENT.md](./AGENT.md), junto con [ARQUITECTURA.md](./ARQUITECTURA.md), [MIGRACION.md](./MIGRACION.md) y [TUTORIAL.md](./TUTORIAL.md).

Este archivo conserva una **hoja de ruta inmutable por adición**. Las secciones iniciales describen la línea base; no deben reescribirse para aparentar que una tarea siempre estuvo terminada. Los avances posteriores se agregan como nuevas entradas fechadas. Una corrección debe referenciar el registro corregido y explicar el motivo, sin eliminarlo. Git conserva la trazabilidad de cada incorporación.

El estado vigente se interpreta a partir de la línea base y las entradas posteriores. La migración modular completada no implica que el DoD del sprint actual esté cumplido.

## 2. Alcance y objetivo del sprint

Conectar la landing principal con las dos sub-landings, consolidar su estructura modular y comprobar el recorrido completo desde la intención de campaña hasta el contacto aceptado por Formspree con Turnstile validado.

La preparación documental no declara listas las campañas, resuelta toda la deuda técnica ni verificadas las conversiones en producción. No se incorporan nuevos proveedores de automatización.

### Rutas que debe utilizar la implementación

- **Servicio `proyectos-nuevos`:** `/instalacion-electrica-viviendas-nuevas`.
  - Página: `src/app/instalacion-electrica-viviendas-nuevas/page.tsx`.
  - UI local: `src/app/instalacion-electrica-viviendas-nuevas/_components/`.
  - Datos existentes: `src/lib/constants/viviendas-nuevas.ts`.
  - Ancla de contacto: `#contacto-viviendas-nuevas`.
- **Servicio `remodelacion`:** `/remodelacion-instalaciones`.
  - Página: `src/app/remodelacion-instalaciones/page.tsx`.
  - UI local: `src/app/remodelacion-instalaciones/_components/`.
  - Datos existentes: `src/lib/constants/remodelacion-antiguas.ts`.
  - Ancla de contacto: `#contacto-remodelacion`.

Ambas rutas, sus componentes y sus datos ya existen en la base inspeccionada. También existen los alias `/proyectos-nuevos` y `/remodelacion-instalaciones-antiguas`, que redirigen a las rutas finales anteriores. Conservarlos; no crear páginas duplicadas ni nuevas URLs por deducción de los IDs.

## 3. Backlog inmediato

### Tarea 1 — Actualizar `href` y `ctaText` de los servicios

**Estado inicial:** pendiente. En `src/lib/constants/services.ts` los objetos con IDs `proyectos-nuevos` y `remodelacion` tienen `href` y `ctaText` en `undefined`. `ServiceCard` aplica entonces el fallback a `#contacto` de la home.

**Cambio a implementar exclusivamente en los objetos existentes:**

```ts
// id: 'proyectos-nuevos'
href: '/instalacion-electrica-viviendas-nuevas',
ctaText: 'Ver más sobre instalaciones para viviendas nuevas',

// id: 'remodelacion'
href: '/remodelacion-instalaciones',
ctaText: 'Ver más sobre remodelación de instalaciones',
```

**Criterios de aceptación:**

- Modificar ambos pares de propiedades sin duplicar servicios ni cambiar sus IDs, `slug`, categoría u orden como efecto colateral.
- Conservar el contrato `Service` y sus rutas tipadas; la UI consume los valores desde constantes.
- Al pulsar cada CTA de la home, cargar su landing final correcta sin 404, redirecciones innecesarias ni fallback a contacto.
- Comprobar textos completos y accesibles en móvil y escritorio; cumplir el DoD antes de registrar el hito completado.

### Tarea 2 — Crear y consolidar la estructura de las dos sub-landings conforme al SSOT

**Estado inicial:** estructura creada en el código; revisión y aceptación del sprint pendientes. El título conserva el objetivo de la hoja de ruta: aprovechar la implementación existente y completar sus carencias antes de crear archivos nuevos.

**Estructura objetivo de cada ruta:**

```text
src/app/<ruta-final>/
  page.tsx                 Server Component: secciones y metadata
  _components/             Secciones exclusivas de la landing
src/app/components/        UI y formulario compartidos
src/lib/constants/         Contenido tipado, navegación, CTA y datos SEO
```

**Criterios de aceptación:**

- Auditar ambas rutas existentes frente a `AGENT.md`; mantener orquestadores de servidor, UI local y componentes globales conforme a su reutilización.
- Extraer a las constantes correspondientes los títulos, CTA, contactos, imágenes y demás contenido comercial que aún esté incrustado en componentes o metadata.
- Alinear hero, propuesta de valor, beneficios, proceso, proyectos reales y FAQ con la intención de cada campaña; mantener un CTA principal visible y accesible durante el recorrido.
- Reutilizar el Design System y el formulario `ContactForm`; mantener los IDs de contacto y verificar todas las anclas.
- Definir metadata y canonical propios para cada ruta final con el dominio configurado. Revisar contraste, imágenes optimizadas y responsive.
- Validar Formspree + Turnstile, aceptación y errores, navegación a `/gracias` y medición existente sin dobles conversiones.
- No declarar la tarea completada solo por existir sus carpetas: cumplir todos los puntos del DoD con evidencia.

La tarea 1 enlaza con las rutas de la tarea 2. Como ya existen, se puede preparar el enlace, pero la integración del sprint no queda aceptada hasta validar ambos recorridos completos.

## 4. Deuda y bloqueos detectados en la línea base

Estos hallazgos requieren tratamiento antes de aceptar las sub-landings para campaña. Su registro es diagnóstico y no acredita su resolución.

### Compatibilidad del stack y documentos históricos

- La arquitectura describe Next.js 15. `package.json` declara `next: ^16.2.6` y `package-lock.json` fija 16.2.6; la instalación local inspeccionada informa 16.4.2. No asumir que documentación, lockfile e instalación describen exactamente el mismo entorno.
- `eslint-config-next` está fijado en 15.5.4. Documentar la decisión de compatibilidad y reconciliar herramientas y documentación antes de modificar dependencias; este sprint documental no ejecuta una actualización ni un downgrade.
- La home real utiliza `src/app/page.tsx` y `src/app/_components/`. El grupo `(home)` de ejemplos antiguos no debe recrearse como otra página `/`.
- Los ejemplos del tutorial incluyen `iconName` y edición de textos en JSX. El contrato vigente utiliza `icon: string`; el contenido nuevo o modificado debe seguir la separación estricta de `AGENT.md`.

### Linting y calidad técnica

- El script `npm run lint` invoca `next lint`, retirado en Next.js 16. Proponer su reemplazo por ESLint CLI, conservando cero advertencias como criterio de aceptación. [Referencia oficial](https://nextjs.org/docs/app/guides/upgrading/version-16#next-lint-command).
- La ejecución directa de ESLint detectó **tres errores y dos advertencias**: un `useEffect` condicional en `src/app/components/WhatsAppWidget.tsx`, dos usos de `any` en `src/app/gracias/_components/WhatsAppRedirect.tsx` y dos símbolos sin uso en `src/app/_components/SectorsSection.tsx`.
- `next.config.ts` mantiene `typescript.ignoreBuildErrors: true`. Un build exitoso no certifica tipos correctos; mantener el typecheck independiente y proponer la retirada del bypass con evidencia.

### Contacto, contenido y conversión

- `submitContactForm` reenvía `cf-turnstile-response` a Formspree. La validación nativa debe estar activada y configurada en Formspree, conforme a `AGENT.md`; esta configuración externa **no se verificó** en la auditoría local.
- Quedan pendientes las pruebas de rechazo por token ausente, inválido o expirado, validación de campos en servidor y renovación del token ante reintentos. No inferir protección solo por renderizar el widget ni consumir dos veces el mismo token.
- Persisten datos comerciales incrustados en secciones, formularios y metadata. Los CTA de llamada deben reconciliarse con los contactos que las constantes identifican como «Solo WhatsApp» antes de promoverlos en campaña.
- La metadata del layout define un canonical de sitio; las dos sub-landings no declaran uno propio. Verificar y corregir su herencia para que cada ruta final tenga su canonical correspondiente.

## 5. Evidencia inicial de validación

- **Tipos de rutas:** `node node_modules/next/dist/bin/next typegen` completado correctamente. Los errores iniciales de rutas tipadas desaparecieron tras regenerar los archivos de Next.js.
- **Typecheck:** script `typecheck` (`tsc --noEmit`) completado con código 0 después de esa regeneración.
- **Script de lint:** ejecución con `--max-warnings=0` fallida; conserva `next lint` y rechaza la opción. El script necesita reparación.
- **ESLint directo:** `node node_modules/eslint/bin/eslint.js . --max-warnings=0` terminó con código 1: tres errores y dos advertencias en código preexistente.
- **Entorno de comandos:** el lanzador `npm` de esta máquina apunta a un CLI ausente. Se ejecutaron los scripts anteriores con el CLI de npm disponible junto a Node; no se modificó la configuración global.
- **Build, responsive, contraste, navegador y envío real:** no ejecutados en esta tarea de documentación. La ausencia de estas pruebas impide afirmar que el sprint cumple el DoD.

El changelog se inicializa vacío por alcance de esta entrega. No se registra un hito funcional completado mientras siga pendiente su aceptación.

## 6. Protocolo para próximos registros

Antes de modificar arquitectura o flujo, registrar la propuesta en el documento correspondiente de `/docs`. Las observaciones de trabajo o bloqueos nuevos se agregan como registros fechados antes del changelog, preservando la línea base; no se presentan como hitos completados.

Al cumplir íntegramente el DoD de `AGENT.md`, agregar una entrada al final del changelog con:

- Fecha ISO 8601 y zona horaria; ID de tarea e hito completado.
- Alcance, rutas y archivos afectados; decisión documental que fundamenta el cambio, si corresponde.
- Comandos ejecutados, resultados y evidencia de cero errores y cero advertencias; build cuando corresponda.
- Evidencia de imágenes, contraste, viewports comprobados, CTAs y Formspree + Turnstile, sin secretos ni datos personales.
- Referencia verificable de entrega: commit existente o PR; no inventar el SHA del commit que todavía no existe.
- Pendientes externos al hito, si los hay, identificados sin presentarlos como resueltos ni ocultar incumplimientos del DoD.

## Registro de Cambios (Changelog)
