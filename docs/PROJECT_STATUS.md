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

## Seguimiento 2026-11-05 — Preparación del Home para Ads

**Estado al comenzar:** implementación y validación en curso; no es un cierre del DoD global.

La petición actual actualiza el contrato de entrada respecto de la línea base: `proyectos-nuevos` enlazará a `/instalacion-electrica-casa-nueva` y `remodelacion` a `/remodelacion-electrica`. Estas URLs serán alias temporales de servidor hacia las landings existentes; no se elimina ni duplica su contenido. La decisión y su reversión están documentadas en `ARQUITECTURA.md`, sección «Decisión 2026-11-05».

El alcance añade prioridad de servicios con landing al comienzo del array, las anclas `#remodelacion`, `#proyectos-desde-cero`, `#tramites-sec` y `#empalmes`, retirada del enlace inexistente a testimonios y comentarios de auditoría de fotografías. Las anclas y los CTA se mantienen en constantes; la tarjeta local únicamente los renderiza.

Las tres imágenes de la galería y el fondo del banner proceden de Unsplash. El Hero utiliza `/hero.webp`, una imagen local cuya procedencia no está acreditada en el repositorio. Marketing deberá sustituir las imágenes de banco y confirmar la autoría de las fotografías propias antes de anunciar un Home con 100 % de obras reales.

### Resultado de la preparación del Home — 2026-11-05

**Estado actual:** los cinco cambios solicitados están implementados y comprobados dentro de su alcance. La aceptación global para campañas sigue pendiente de las fotografías reales, la deuda previa de lint y la validación del contacto.

- `services` comienza con `paneles-solares`, `proyectos-nuevos` y `remodelacion`; los demás servicios mantienen su orden relativo. Los dos nuevos CTA tienen texto específico y las URLs de campaña solicitadas.
- Las tarjetas renderizan anclas desde `anchorId ?? id`. Las cuatro anclas de Ads aparecen exactamente una vez en el DOM del Home. Los textos y el destino del CTA por defecto se extrajeron a constantes, conservando la separación de UI y datos.
- `#testimonios` fue retirado de `mainNavigation`, compartido por los menús móvil y de escritorio.
- Se añadieron comentarios `// TODO:` en las tres imágenes de la galería, su componente, el banner y el Hero. No se sustituyeron fotografías ni se atribuyó autoría no demostrada.
- Las páginas de alias de campaña redirigen en servidor a las landings existentes. Se comprobaron ambos enlaces desde sus tarjetas en el navegador: viviendas llega a `/instalacion-electrica-viviendas-nuevas` y remodelación a `/remodelacion-instalaciones`, con sus respectivos H1 y sin 404.
- `next typegen` y el script `typecheck` (`tsc --noEmit`) finalizaron con código 0. `npm run build`, ejecutado mediante el CLI local disponible de npm, también finalizó con código 0 y generó ambas rutas nuevas. La instalación efectiva utilizada sigue siendo Next.js 16.4.2; el lockfile del proyecto conserva 16.2.6. El build mantiene el aviso previo sobre un lockfile externo al repositorio y la configuración heredada que omite el chequeo de tipos durante la compilación.
- Se comprobó ausencia de desbordamiento horizontal en 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px. Las cuatro anclas dejan su tarjeta por debajo del header sticky tanto en 360 como en 1280 px.
- ESLint completo continúa fallando con los mismos tres errores y dos advertencias previos, en `WhatsAppWidget.tsx`, `WhatsAppRedirect.tsx` y `SectorsSection.tsx`; no detectó incidencias en los archivos modificados. Su reparación no forma parte de los cinco cambios concretos de esta petición.
- La consola de la prueba local mostró Turnstile `110200`: dominio no autorizado para la site key configurada. Se debe habilitar el hostname de desarrollo apropiado o preparar un entorno de prueba antes de verificar el formulario. No se modificó CAPTCHA ni se enviaron formularios reales. [Código oficial de Cloudflare](https://developers.cloudflare.com/turnstile/troubleshooting/client-side-errors/error-codes/).

El changelog de hitos con DoD completo se conserva vacío: esta observación registra el trabajo comprobado y sus bloqueos, sin certificar todavía el recorrido de contacto ni el lanzamiento de campañas.

## Seguimiento 2026-11-05 — Saneamiento de lint aprobado

**Decisión previa a la implementación:** el responsable aprobó las cuatro correcciones: estabilizar el orden de hooks de `WhatsAppWidget`, sustituir los dos `any` de `WhatsAppRedirect` por un contrato explícito para la llamada existente a `gtag`, retirar `motion` y `containerVariants` sin uso en `SectorsSection` y actualizar `scripts.lint` a `eslint . --max-warnings=0` para Next.js 16.

El cambio conserva el comportamiento del widget, la medición y la redirección de WhatsApp, sin añadir dependencias ni alterar las integraciones de contacto. Su aceptación requiere que `npm run typecheck`, `npm run lint` y `npm run build` finalicen correctamente; los resultados se incorporarán al changelog después de ejecutarlos.

**Aclaración de entorno autorizada por el responsable:** Turnstile `110200` en localhost queda excluido de esta validación y no bloquea este hito. El responsable confirma que el dominio de producción está configurado correctamente en Cloudflare. Esta instrucción sustituye la consideración previa del error local como bloqueo; no se modifica la configuración de CAPTCHA ni se realiza una prueba de envío real.

## Seguimiento 2026-11-05 — REM-01: contenido de la campaña de remodelación

**Decisión previa a la implementación:** aplicar el brief de remodelación mediante constantes tipadas y cinco secciones de servidor locales, vídeo bajo el Hero y un CTA cliente que abre el selector de WhatsApp existente con el mensaje de campaña. La decisión REM-01 de `ARQUITECTURA.md` documenta el contrato, el transporte del mensaje, la limpieza de secciones sustituidas y la conservación del formulario secundario.

Se trabajará en tres commits lógicos: datos y SSOT; UI e integración; validaciones y registro. La ruta pública, el grupo `(ads)` y las redirecciones ADS-01 no cambian.

**Pendientes conocidos del brief:** los archivos `/videos/remodelacion-placeholder.mp4` y `/galeria/remodelacion-poster.jpg` no existen; se solicitan expresamente como placeholders. Las cifras entre corchetes requieren confirmación del negocio. La implementación preparatoria no equivale a una campaña lista para publicar ni permite declarar el DoD multimedia completo. El error local Turnstile `110200` mantiene la exclusión previamente autorizada; no se enviarán formularios o mensajes reales.

## Seguimiento 2026-11-05 — VIV-01: contenido de viviendas nuevas

**Decisión previa a la implementación:** aplicar el brief mediante constantes tipadas, seis secciones locales de servidor y vídeo bajo el Hero, conservando el formulario secundario. La decisión VIV-01 de `ARQUITECTURA.md` define la extracción del botón cliente compartido, los mensajes por campaña y la retirada de secciones sustituidas. Los alias, las URLs finales y el layout ADS-01 se conservan.

Se realizarán tres commits lógicos: SSOT y datos; UI y reutilización del CTA; validación y registro. El mensaje de viviendas se añade al mapa de rutas del selector existente, sin duplicar widgets o introducir proveedores.

**Pendientes explícitos de marketing:** `[número]` viviendas instaladas, `[X días]` para presupuesto y respaldo del copy comercial; vídeo `/videos/viviendas-placeholder.mp4`, poster `/galeria/viviendas-poster.jpg` y subtítulos cuando haya voz. Los archivos están ausentes y se integrarán como placeholders solicitados, sin certificar reproducción ni campaña lista para invertir. `[comuna]` es un campo que completa el visitante. Se conserva la exclusión autorizada de Turnstile `110200` en local y no se realizarán envíos reales.

## Registro de Cambios (Changelog)

### 2026-11-05 — LINT-01: deuda técnica de linting saldada

**Estado:** completado. La deuda técnica de linting de **3 errores y 2 advertencias**, junto con la actualización del script de lint a **Next.js 16**, ha sido saldada y **cumple con el DoD de este hito**, conforme al alcance aprobado por el responsable.

**Resoluciones implementadas:**

- `src/app/components/WhatsAppWidget.tsx`: el `useEffect` se ejecuta siempre en el mismo orden, antes del retorno condicional. La condición de `/gracias` se evalúa dentro del efecto; el listener de clic exterior se elimina al cambiar a esa ruta y al desmontar el componente. Se conserva su limpieza y se declara la dependencia correspondiente.
- `src/app/gracias/_components/WhatsAppRedirect.tsx`: se eliminaron los dos `as any`. Un contrato local `WhatsAppAnalyticsWindow` tipa la llamada existente a `gtag`, sus parámetros y la zona nullable; se comprueba que la API sea una función antes de invocarla. Se conservan el nombre del evento, su payload y el temporizador con su limpieza.
- `src/app/_components/SectorsSection.tsx`: se retiraron el import de `motion` y la declaración `containerVariants`, ambos sin uso.
- `package.json`: `scripts.lint` utiliza ahora `eslint . --max-warnings=0`, con el CLI de ESLint instalado y sin depender de `next lint`.

**Validación ejecutada en el árbol de trabajo, zona horaria America/Santiago:**

- `npm run typecheck` → `tsc --noEmit`: **código 0**, sin errores.
- `npm run lint` → `eslint . --max-warnings=0`: **código 0, cero errores y cero advertencias** en todo el proyecto.
- `npm run build` → `next build --turbopack`: **código 0**, compilación y generación de las 11 páginas estáticas completadas, incluidos los accesos de campaña existentes.
- Los tres scripts se ejecutaron con `npm.cmd`, el lanzador funcional de npm de esta máquina. El entorno instalado utilizado es Next.js 16.4.2; el lockfile del proyecto sigue fijando 16.2.6.

**Cierre del DoD del hito:** tipado y lint global aprobados, build de producción aprobado y documentación sincronizada con evidencia. Los componentes conservan su colocación local o global; las correcciones se limitan a orden de hooks, tipos, código sin uso y herramientas. No introducen contenido comercial, estilos, imágenes, rutas ni nuevos proveedores. La aceptación aquí registrada corresponde al saneamiento de lint aprobado, no al cierre de los restantes hitos de contenido o del layout de campañas.

**Exclusión autorizada:** el error local Turnstile `110200` no se considera bloqueo de este hito. El responsable confirma la configuración correcta del dominio de producción en Cloudflare; no se ha modificado CAPTCHA ni se ha realizado un envío real como parte de estas correcciones.

**Aviso de entorno independiente de ESLint:** el build conserva el aviso previo de Next.js sobre `C:/Users/ESS/package-lock.json`, situado fuera del repositorio. Ese aviso no es una de las dos advertencias de lint resueltas y no impide la compilación. El typecheck se ejecutó de forma independiente, dado que continúa la configuración heredada `typescript.ignoreBuildErrors: true`.

**Referencia de entrega:** cambios locales revisables con `git diff` en la rama `feature/sublandings-remodelacion-viviendas-nuevas`, sobre la base `d6df99b`. Se conserva el trabajo previo de preparación del Home; este hito no crea un commit ni realiza un push.

### 2026-11-05 — Consolidación de la preparación en commits semánticos

Por solicitud del responsable, los cambios revisados se consolidan en tres grupos sobre la rama `feature/sublandings-remodelacion-viviendas-nuevas`:

- `6a3ec20` — `fix: resolver errores de ESLint, tipado en redirecciones y actualizar script de lint`: los cuatro archivos de saneamiento técnico de LINT-01.
- `68ea4bc` — `feat: preparar home para tráfico de Ads con anclas, reordenamiento y redirecciones`: los diez archivos de servicios, navegación, tipos, UI del Home, auditoría de imágenes y accesos de campaña.
- El commit documental de esta entrada — `docs: actualizar decisiones de arquitectura y registrar correcciones en el changelog`: `docs/ARQUITECTURA.md` y `docs/PROJECT_STATUS.md`, con las decisiones, resultados y referencias de entrega.

Se revisaron los diffs y la pertenencia exacta de los archivos a cada grupo antes de confirmar los commits. La validación de typecheck, lint y build registrada en LINT-01 corresponde a esta misma implementación; la consolidación conserva ese código validado. Esta entrada complementa las referencias de entrega local anteriores y mantiene intacto su historial.

### 2026-11-05 — ADS-01: Route Group de campañas, redirecciones nativas y layout restrictivo

**Estado:** completado en el alcance solicitado, con SSOT actualizado antes del código y validaciones técnicas aprobadas.

**Orden de ejecución y decisiones:**

1. `docs/AGENT.md` incorpora en «4.3 SEO técnico» la prohibición de carpetas proxy y el uso obligatorio de `redirects()` en `next.config.ts`. «Routing» de `docs/ARQUITECTURA.md` define `(ads)`, Zero Exit Links, distribución del widget y contrato del reproductor de vídeo. Primera entrega: `bb3e687`, anterior a la refactorización.
2. Se retiraron los cuatro directorios cuyo único archivo redirigía tráfico: `proyectos-nuevos`, `remodelacion-instalaciones-antiguas`, `instalacion-electrica-casa-nueva` y `remodelacion-electrica`. Sus redirecciones temporales se configuraron nativamente, sin cadenas ni cambio de destino. Las tres carpetas finales se movieron con sus componentes privados a `src/app/(ads)/`, conservando las URLs públicas. Los CTA de servicios apuntan directamente a esas rutas finales. Entrega de rutas: `cc4dc5c`.
3. `src/app/(ads)/layout.tsx` proporciona un header únicamente con logo centrado y sin enlace, un footer de copyright sin enlaces y una instancia de `WhatsAppWidget`. Se retiraron las tres cabeceras anteriores y los footers privados de las landings. El layout raíz conserva fuentes y medición; la Home monta su propio widget para evitar duplicaciones en campañas.
4. `AdsVideoPlayer.tsx`, exportado por el Design System, recibe `src` y `poster` obligatorios y combina sus clases con `cn()`. Utiliza vídeo nativo con controles, `preload="none"`, `playsInline`, sin autoplay y con soporte opcional de subtítulos. Los mensajes y la marca del layout proceden de `src/lib/constants/ads.ts`; no se introdujo un archivo de vídeo de demostración ni se atribuyeron obras ficticias.

**SEO y separación de responsabilidades:** las tres páginas son orquestadores de servidor; su metadata se consume desde las constantes de cada servicio. Cada una declara su canonical y `openGraph.url` con la ruta final, resueltos contra el dominio configurado en `metadataBase`. En paneles solares se reemplazó la referencia OG inexistente por `/og-image.webp`, un recurso ya presente en el proyecto. El entorno local utiliza su dominio de desarrollo; no se alteraron variables de producción.

**Resultados ejecutados:**

- `next typegen`: código 0. Se regeneraron los tipos tras mover las rutas y se retiró exclusivamente la caché obsoleta `.next/dev/types`, cuyos imports apuntaban a carpetas antiguas.
- `npm run typecheck`: **código 0**, sin errores.
- `npm run lint`: **código 0, cero errores y cero advertencias**.
- `npm run build`: **código 0**; siete páginas estáticas generadas y las tres rutas finales conservadas. Se mantiene únicamente el aviso de entorno sobre un lockfile externo, ya documentado en LINT-01. El typecheck independiente compensa la configuración heredada que omite tipos durante el build.
- Las comprobaciones se ejecutaron mediante `npm.cmd` con la instalación local Next.js 16.4.2. No se actualizaron dependencias ni el lockfile 16.2.6.
- HTTP: los cuatro alias responden **307** hacia el destino esperado y preservan `utm_source` y `utm_campaign`. Las tres landings finales, `/` y `/gracias` responden **200**.
- Navegador: las tres landings se validaron a **360, 767, 768, 1024 y 1280 px**. En las 15 combinaciones se verificó ausencia de desbordamiento horizontal, un solo header, logo centrado sin enlace, cero menús, cero enlaces en header/footer y un único widget con `position: fixed` y `z-index: 50`.
- A 360 px el botón de WhatsApp permanece visible desde el primer viewport y tras desplazarse al final de cada landing, a 24 px del borde inferior. La Home conserva una navegación y un widget; `/gracias` muestra cero widgets.
- No se observaron errores de consola distintos del Turnstile local `110200`, excluido por instrucción del responsable. No se enviaron formularios ni mensajes reales. El reproductor queda disponible para integrar vídeos reales; no se declara probada una reproducción con un archivo aún no proporcionado.

**Registro de entrega:** el commit de layout y vídeo incluye esta entrada y la implementación validada, después de los commits `bb3e687` (SSOT) y `cc4dc5c` (rutas). Se conservan los antecedentes y las tareas de contenido pendientes, incluida la sustitución de fotografías de banco; este hito no certifica el cierre de esas tareas comerciales.

### 2026-11-05 — REM-01: contenido y recorrido de remodelación preparados

**Estado:** implementación preparatoria solicitada entregada y comprobaciones técnicas aprobadas, zona horaria America/Santiago. El DoD completo de publicación sigue pendiente del material audiovisual real y de confirmar los datos comerciales entre corchetes. No se declara activada ni lista para recibir inversión la campaña.

**Fase 1 — SSOT y datos (`330191c`):** antes de modificar la UI se adoptó REM-01 en `ARQUITECTURA.md`, se añadió el procedimiento de mantenimiento en `TUTORIAL.md` y se registró el alcance en este documento. `src/lib/constants/remodelacion-antiguas.ts` incorpora contratos y exports tipados `heroData`, `symptomsData`, `fearsData`, `processData`, `includesData`, `whatsappMessage`, encabezados de secciones, vídeo y cierre de contacto. Los números, superficies y plazos no confirmados permanecen explícitos como pendientes. `src/lib/constants/whatsapp.ts` centraliza textos compartidos y reutiliza los teléfonos existentes de `navigation.ts`.

**Fase 2 — UI e integración (`6a73dca`):**

- Creados en `src/app/(ads)/remodelacion-instalaciones/_components/`: `RemodelacionHero.tsx`, `SymptomsSection.tsx`, `FearsSection.tsx`, `ProcessSection.tsx`, `IncludesSection.tsx` y el botón cliente mínimo `RemodelacionWhatsAppButton.tsx`.
- `page.tsx` compone las cinco secciones y el reproductor debajo del Hero. `CTARemodelacion.tsx` se convierte en sección de servidor con datos por props, repite el CTA y conserva el formulario secundario compartido. Se usan `Section`, `Container`, `Card`, `Button` y `AdsVideoPlayer` del Design System, sin nuevos proveedores ni dependencias.
- Retirados los seis componentes sustituidos (`HeroRemodelacion`, `SenalesAlerta`, `SolucionesBeneficios`, `ProcesoRemodelacion`, `ProyectosRemodelacion` y `FAQRemodelacion`) y sus datos sin consumidores. Se evita mantener copy duplicado o reutilizar los casos antiguos como evidencia no acreditada.
- `src/lib/utils/whatsapp.ts` define la apertura tipada del selector y construye los enlaces internos y finales con codificación del mensaje. `WhatsAppWidget.tsx` mantiene una sola instancia flotante, admite el mensaje solicitado por el CTA y conserva ese contexto al abrir directamente desde el botón flotante de remodelación.
- `WhatsAppRedirect.tsx` utiliza el texto de campaña cuando existe y los mensajes genéricos cuando no existe o es inválido. Los teléfonos siguen dependiendo exclusivamente de la zona configurada. Se mantiene el temporizador y el evento de analítica existente; se evita repetir ese evento para el mismo destino durante el montaje. No se interpreta la apertura como confirmación de mensaje enviado.
- La variante compartida `Button.primary` usa texto oscuro para mejorar contraste sobre el fondo ámbar, sin cambiar su API. Los textos comerciales de la nueva UI, del selector y de su redirección provienen de constantes.

**Fase 3 — Evidencia ejecutada sobre esta implementación:**

- `npm run typecheck` → `tsc --noEmit`: **código 0**.
- `npm run lint` → `eslint . --max-warnings=0`: **código 0, cero errores y cero advertencias**.
- `npm run build` → `next build --turbopack`: **código 0**, siete páginas estáticas generadas. Se utilizaron `npm.cmd` y Next.js 16.4.2 instalados, sin cambiar dependencias. Continúa el aviso previo del lockfile externo a este repositorio; el typecheck independiente sigue siendo necesario por `ignoreBuildErrors` heredado.
- Auditoría de los diez archivos afectados de UI mediante el AST de TypeScript: cero nodos de texto JSX con copy comercial literal. Se revisaron las props y las constantes; no se añadieron `any`, secciones de cliente completas ni imports entre carpetas privadas de rutas.
- Navegador de producción local, `/remodelacion-instalaciones`, **360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px**, alto 800 px: sin desbordamiento horizontal, un H1, cero menús, cero enlaces en header/footer, una sola instancia del widget y CTA inicial completamente visible. A 360 px el CTA termina a 580 px y el widget permanece a 24 px del borde inferior, también al acceder al cierre de contacto.
- Los CTA inicial y final abren el mismo selector, con dos enlaces de zona y el mensaje exacto configurado. Se comprobó foco inicial en el cierre, Escape y retorno al CTA correspondiente; el panel cabe en el viewport móvil. `video` declara las dos rutas solicitadas, controles, `preload="none"` y ausencia de autoplay.
- Se ejecutaron comprobaciones sobre las utilidades reales: selección de teléfonos de Costa y Marga Marga, conservación exacta de acentos y corchetes en el recorrido interno → `wa.me`, caracteres especiales, fallback de zona desconocida, mensaje vacío, entrada inválida y límite de 1.000 caracteres. Código 0, sin solicitudes externas ni envío de mensajes.
- Regresión en Home, paneles solares y viviendas nuevas: un widget y un selector por página; los dos enlaces de zona conservan los mensajes genéricos, sin arrastrar el texto de remodelación.
- HTTP: la landing responde **200**. Vídeo y poster placeholder responden **404**, pendiente esperado y expresamente autorizado como preparación, no resuelto ni ocultado mediante archivos ficticios. No se certifica reproducción, ausencia de errores de recursos o DoD multimedia.
- La consola mostró únicamente el Turnstile local `110200` ya excluido por instrucción del responsable. No se enviaron formularios, no se modificó CAPTCHA y no se verificó una recepción real en Formspree ni un mensaje entregado en WhatsApp. La compilación y los cambios locales no alteran ese alcance.

**Antes de publicar:** aportar vídeo real, miniatura propia y subtítulos cuando haya voz; sustituir las rutas de preparación y retirar su aviso; confirmar `[numero]`, `[100 m2]`, `[X días]` y la prueba social con el negocio; comprobar el material definitivo y el recorrido de contacto en el entorno de campaña. `[comuna]` y `[años]` son campos intencionados de la plantilla que completa el visitante, no cifras pendientes del negocio.

**Entrega y reversión:** fases 1 y 2 identificadas por los commits anteriores; el commit documental de esta entrada registra la fase 3. Sin push en esta tarea. La captura móvil de comprobación queda fuera del repositorio, en `C:/Users/ESS/Documents/Codex/remodelacion-rem01-mobile.jpg`. Los commits permiten revertir el contenido sin cambiar rutas, alias nativos o configuración externa.

### 2026-11-05 — VIV-01: contenido y recorrido de viviendas nuevas preparados

**Estado:** implementación preparatoria del brief entregada; typecheck, lint, build y responsive aprobados, zona horaria America/Santiago. El DoD de publicación continúa pendiente de material audiovisual real y confirmación del copy comercial entre corchetes. No se declara activada ni lista para recibir inversión la campaña.

**Fase 1 — SSOT y datos (`d982703`):** se adoptó VIV-01 en `ARQUITECTURA.md` antes del código, se añadió el procedimiento a `TUTORIAL.md` y se registraron alcance y pendientes en este documento. `src/lib/constants/viviendas-nuevas.ts` incorpora contratos y exports tipados `heroData`, `problemData`, `solutionData`, `processData`, `includesData`, `targetData`, `whatsappMessage`, encabezados, vídeo y contacto; la metadata se alinea con casas, cabañas y ampliaciones conservando canonical y URL final. `constants/whatsapp.ts` asocia la ruta final al mensaje de viviendas y mantiene el de remodelación como valor independiente.

**Fase 2 — UI y reutilización (`777fac3`):**

- Creados en `src/app/(ads)/instalacion-electrica-viviendas-nuevas/_components/`: `ViviendasNuevasHero.tsx`, `ProblemSection.tsx`, `SolutionSection.tsx`, `ProcessSection.tsx`, `IncludesSection.tsx` y `TargetSection.tsx`. Son Server Components con props tipadas; todo el contenido comercial proviene de constantes y se utiliza el Design System existente.
- `page.tsx` compone Hero → vídeo → problemas → solución → proceso → incluidos → perfiles → contacto. `AdsVideoPlayer` recibe las rutas de preparación desde `videoData`, bajo el Hero, con aviso visible de material pendiente.
- `CTAViviendasNuevas.tsx` es ahora sección de servidor con props; conserva `#contacto-viviendas-nuevas`, repite el CTA y mantiene `ContactForm` como alternativa secundaria con Formspree + Turnstile. La UI explica que los planos se comparten en WhatsApp, sin ofrecer una carga de archivos web inexistente.
- El antiguo botón privado de remodelación se trasladó a `src/app/components/WhatsAppCTAButton.tsx` al aparecer su segundo consumidor. Ambas campañas utilizan esta frontera cliente mínima con `Button.primary`, `cn()` y la apertura tipada del selector existente. Solo se actualizaron las referencias de Hero/cierre en remodelación; su contenido y la lógica compartida de transporte se conservan.
- Se retiraron los seis componentes sustituidos (`HeroViviendasNuevas`, `DesafiosRurales`, `SolucionesViviendasNuevas`, `EtapasObraNueva`, `ProyectosViviendasNuevas`, `FAQViviendasNuevas`) y sus datos sin consumidores. No se publican como evidencia los casos o plazos antiguos sin respaldo. No se añadieron dependencias, proveedores o widgets adicionales.

**Fase 3 — Validaciones ejecutadas sobre esta implementación:**

- `npm run typecheck` → `tsc --noEmit`: **código 0**, sin errores.
- `npm run lint` → `eslint . --max-warnings=0`: **código 0, cero errores y cero advertencias**.
- `npm run build` → `next build --turbopack`: **código 0**, siete páginas estáticas generadas. Scripts ejecutados con `npm.cmd`, Next.js 16.4.2 instalado y sin cambios de dependencias. Persiste el aviso conocido del lockfile externo; el typecheck independiente sigue siendo obligatorio por `ignoreBuildErrors` heredado.
- Auditoría mediante AST y revisión de código de los once archivos de UI afectados: cero textos comerciales literales en nodos `JSXText`; props y constantes tipadas, sin nuevos `any` o imports entre carpetas privadas de rutas.
- Producción local en `/instalacion-electrica-viviendas-nuevas`, **360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px**, alto 800 px: sin desbordamiento horizontal, H1 único, cero menús, cero enlaces de header/footer, un widget y CTA principal completamente visible. A 360 px el CTA termina a 570 px; el widget se mantiene a 24 px del borde inferior al acceder al contacto final.
- Orden de las ocho secciones comprobado en el DOM. Canonical conserva la ruta final y se resuelve contra el `metadataBase` local existente; no se modificaron variables de producción.
- CTA inicial, final y botón flotante de viviendas: un selector, dos zonas y el mensaje exacto «Hola Mr Chispeza, estoy construyendo en [comuna] y quiero cotizar la instalación eléctrica. ¿Les mando los planos?». Comprobados foco inicial, Escape, devolución del foco al disparador y panel dentro del viewport móvil; apertura comprobada también a 1280 px.
- Comprobaciones sobre las utilidades reales: ambas campañas y ambas zonas conservan sus mensajes exactos al codificarlos en el enlace interno y al construir `wa.me`, con el teléfono configurado de cada zona. Código 0, sin solicitudes externas ni mensajes enviados.
- Regresión de remodelación: sus dos CTA siguen abriendo el selector con su texto propio. Home y paneles solares mantienen un widget y sus enlaces genéricos; no reciben el mensaje de viviendas. Esta asociación nueva sustituye el estado anterior de viviendas documentado en REM-01, sin reescribir aquel historial.
- HTTP: landing **200**; `/videos/viviendas-placeholder.mp4` y `/galeria/viviendas-poster.jpg` **404**. Son referencias preparatorias solicitadas y todavía ausentes, no una reproducción verificada. El DOM mantiene `controls`, `preload="none"` y ausencia de autoplay. No se declara cumplido el DoD multimedia.
- En la consola se observó únicamente el Turnstile local `110200`, excluido por el responsable. No se modificó CAPTCHA, no se enviaron formularios ni se certificó recepción real de leads o mensajes. El servidor temporal se detuvo y se cerró la pestaña de validación al terminar.

**Pendientes explícitos del equipo de marketing antes de publicar:** confirmar `[número]` viviendas instaladas, `[X días]` para presupuesto y respaldo de la prueba social y del alcance ofrecido; proporcionar vídeo real de obras, poster propio y subtítulos cuando haya voz; sustituir las rutas de preparación, retirar su aviso y verificar los recursos definitivos y el contacto en el entorno de campaña. El marcador `[comuna]` es intencionado para que lo complete el visitante en WhatsApp.

**Entrega:** fases de datos y UI en los commits citados; el commit documental de esta entrada registra la validación. Captura móvil fuera del repositorio: `C:/Users/ESS/Documents/Codex/viviendas-viv01-mobile.jpg`. El conjunto se puede revertir mediante Git sin cambiar las rutas, los alias nativos o la configuración externa.

### 2026-11-09 — ADS-02: UI premium y embudo exclusivo de WhatsApp

**Estado:** alcance solicitado implementado y verificado en la rama `feature/sublandings-remodelacion-viviendas-nuevas`, sobre `2bf4873`, zona horaria America/Santiago. SSOT actualizado antes del cambio de flujo mediante la decisión ADS-02 de `ARQUITECTURA.md`, las reglas de `AGENT.md` y el procedimiento vigente de `TUTORIAL.md`.

**UI de campañas mejorada con animaciones Framer Motion y estilos premium. Formularios de email eliminados y regla de 3 CTAs por landing implementada según el brief.**

**Ejecución en el orden solicitado:**

1. Revisadas las cuatro reglas de `redirects()` en `next.config.ts`: ya estaban activas en la base. Se conservó su configuración nativa, sin añadir páginas proxy o cambios artificiales. Comprobación HTTP: `/proyectos-nuevos` y `/instalacion-electrica-casa-nueva` responden 307 hacia viviendas; `/remodelacion-instalaciones-antiguas` y `/remodelacion-electrica` responden 307 hacia remodelación. Se preservan `utm_source` y `utm_campaign`.
2. Retirados imports y renderizados de `ContactForm` de los cierres de remodelación y viviendas, junto con el copy de formulario sin consumidores en sus constantes. Para aplicar la regla a todo `(ads)`, el cierre solar también pierde formulario y enlace telefónico y consume `panelesContactData` con un CTA de WhatsApp. Las tres páginas responden 200 sin formulario, contacto de email/teléfono ni Turnstile en su HTML. El formulario del Home y su backend fuera del grupo no se modifican.
3. Cada landing tiene **tres `WhatsAppCTAButton` de contenido**: Hero, mitad del recorrido y cierre. El intermedio vive en `FearsSection` para remodelación y `SolutionSection` para viviendas; label y mensaje llegan desde constantes mediante props. El widget flotante permanece único y no se cuenta como uno de estos tres botones.
4. Refactorizados los **trece componentes visuales locales** de las dos rutas: entradas sutiles con `motion`, `whileInView` y `viewport.once`, fondos alternados blanco/slate-50, H2 centrados y jerarquía uniforme, tarjetas del Design System con sombra y padding amplio e iconos ámbar de al menos 32 px. Hero y cierre usan composición centrada. `useAdsReveal` comparte la configuración y soporta movimiento reducido; páginas, metadata y layout permanecen en servidor.
5. Registro de cambios y evidencias incorporado después de las comprobaciones siguientes.

**Piezas compartidas y separación de responsabilidades:** `AdsVideoSection.tsx` sustituye los bloques audiovisuales duplicados y mantiene el reproductor nativo existente; `WhatsAppCTAButton.tsx` mejora tamaño, contraste del icono y sombra sin alterar el transporte. Los estilos compartidos viven en `constants/ads.ts`; el contenido comercial sigue en las constantes de cada servicio. Se conservaron anclas, URLs finales, mensajes por zona y proveedores existentes; no se añadieron dependencias ni integraciones. `AGENT.md` deja explícita la excepción cliente para secciones con Motion y el alcance de Formspree/Turnstile únicamente fuera de campañas, sustituyendo la alternativa de formulario de REM-01/VIV-01.

**Validación técnica ejecutada:**

- El primer typecheck detectó tipos generados obsoletos en `.next/types`, con referencias a rutas antiguas. `node node_modules/next/dist/bin/next typegen` regeneró la caché con código 0; no se modificaron contratos para ocultar esos errores.
- `npm run typecheck` → `tsc --noEmit`: **código 0**, también tras el ajuste final de espaciado móvil.
- `npm run lint` → `eslint . --max-warnings=0`: **código 0, cero errores y cero advertencias**, también tras el ajuste final.
- `npm run build`: **código 0**, siete páginas estáticas generadas. La primera ejecución restringida no pudo descargar Geist/Geist Mono; la compilación con acceso de red autorizado a Google Fonts pasó y volvió a pasar después del ajuste móvil, sin cambiar fuentes ni configuración global. Se mantiene el aviso previo del lockfile externo. El typecheck se ejecutó aparte por `ignoreBuildErrors` heredado. Entorno: npm mediante `npm.cmd`, Next.js 16.4.2 instalado y sin cambios de dependencias.
- Auditoría de fuentes: los trece componentes locales importan Motion y utilizan el hook compartido; dieciocho archivos de UI afectados no contienen copy comercial literal en nodos `JSXText`. No hay `ContactForm`, `Formspree`, `useTurnstile`, `<form>`, `mailto:` o `tel:` en las fuentes de `(ads)`.

**Validación de navegador y conversión:**

- Ambas landings comprobadas en **360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px**, alto 800 px: 18 combinaciones sin desbordamiento horizontal, H1 único, H2 centrados, tres CTAs de contenido, cero formularios/campos o iframes Turnstile y un widget visible. El CTA principal aparece en el primer viewport.
- Probados los seis CTA de contenido: cada uno abre un único selector con Costa/Marga Marga y conserva exactamente el mensaje de su campaña en ambos enlaces. Foco inicial en el cierre, Escape y devolución al disparador correctos. A 360 px el panel cabe en pantalla y el widget permanece a 24 px del borde inferior. No se enviaron mensajes reales ni se certificó recepción de leads.
- Cierre solar comprobado: cero formularios, Turnstile o enlaces de email/teléfono y apertura del mismo selector con mensaje de paneles en ambas zonas.
- Inspección visual de tarjetas de miedos a 1280 px: contenido centrado, iconos de 32 px, padding de 32 px y sombras activas; se comprobó opacidad final 1 al terminar las entradas. La nota de preparación del Hero recibió margen interior móvil para evitar el botón flotante; la corrección se revisó en la compilación final a 360 px.
- Consola JavaScript de las pruebas locales sin errores ni advertencias. Sin formularios de campaña, no se carga el Turnstile que generaba el error local previamente excluido. No se simularon reproducciones ni envíos. Servidor temporal detenido y pestaña de validación cerrada.

**Pendientes de marketing conservados:** los cuatro archivos de vídeo/poster placeholder de REM-01 y VIV-01 siguen ausentes; no se proporcionaron recursos reales ni se verificó reproducción. Continúan pendientes las cifras y plazos entre corchetes y el respaldo de la prueba social. Este hito cierra presentación y embudo solicitado, sin declarar completos esos materiales ni el lanzamiento comercial.

**Entrega:** commit de esta entrada con el mensaje `feat(ads): aplicar UI premium, animaciones y forzar embudo exclusivo de WhatsApp`. Capturas de evidencia fuera del repositorio: `C:/Users/ESS/Documents/Codex/ads02-remodelacion-desktop.jpg` y `C:/Users/ESS/Documents/Codex/ads02-viviendas-mobile.jpg`. El commit permite revertir el alcance; el historial previo permanece intacto.

### 2026-11-09 — Cierre del desarrollo base y control de lanzamiento

La fase de desarrollo base de las sub-landings está **completada y validada** en `a4f002f`. El proyecto queda **en espera de los recursos y confirmaciones de marketing**. Los pendientes vigentes de multimedia, copy, fotografías reales, comprobaciones finales de producción y deuda heredada se consolidan en [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md), separados entre Marketing/Negocio y Desarrollo/DevOps y con trazabilidad a este registro. Se mantiene WhatsApp exclusivo en `(ads)`; las pruebas pendientes de Formspree + Turnstile corresponden al Home fuera de campañas. Este cierre no certifica el lanzamiento comercial ni resuelve las casillas pendientes; el historial anterior se conserva. Entrega documental limitada a estos dos archivos, con creación, enlaces y diff verificados antes del commit.

### 2026-11-09 — ADS-03: contraste y profundidad visual de las sub-landings

Polish visual aplicado a sub-landings: Se utilizaron las variantes del componente Section (gradient, dark, accent) para generar alto contraste, y se mejoró la profundidad de las tarjetas.

- **Alcance:** los trece componentes de `_components/` de remodelación y viviendas nuevas. Heroes y cierres con `gradient`, señales/problemas e incluidos/perfiles con `default`, miedos/solución con `accent` y bordes, procesos con `dark`. Tarjetas con padding amplio, elevación y movimiento reducido; H2 más grandes y separadores decorativos. Solo presentación y props del Design System; lógica, constantes, mensajes y tres CTAs por campaña conservados, sin formularios.
- **Validación:** `npm run typecheck`, `npm run lint` y `npm run build` con **código 0**; lint sin errores ni advertencias. Persiste únicamente el aviso previo del build sobre el lockfile externo. Comparación del AST confirma que no cambió el comportamiento. Ambas rutas revisadas a 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px, alto 800 px: sin desbordamientos y CTA inicial visible. Los seis CTAs abren el selector único con el mensaje correcto en ambas zonas; Escape devuelve el foco. Contraste mínimo medido de los textos del proceso oscuro: **9,87:1**. Consola sin errores ni advertencias; sin envíos reales.
- **Evidencia y entrega:** capturas fuera del repositorio en `C:/Users/ESS/Documents/Codex/ads-polish-proceso-desktop.jpg` y `C:/Users/ESS/Documents/Codex/ads-polish-viviendas-mobile.jpg`. Commit `style(ads): aplicar alto contraste con section variants y mejorar profundidad de tarjetas`. Se conservan los pendientes vigentes de [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md); este ajuste visual no acredita los recursos multimedia ni el lanzamiento. Los cambios previos del Home y del checklist quedan fuera del commit.

### 2026-11-10 — ADS-04: refinamiento visual de conversión

Refinamiento CRO visual: Hero rediseñado a layout Split-Screen con gradiente azul para maximizar contraste del CTA. Aplicados efectos Stagger y Sticky Scroll con Framer Motion y Tailwind. Cierre final rediseñado a modo oscuro premium.

- **Implementación:** Heroes azul/marino con texto claro y `AdsVideoPlayer` en la segunda columna desde `lg`, después del CTA en móvil. Ambas páginas pasan los datos existentes por props; retirado `AdsVideoSection` sin consumidores. Cierres oscuros centrados sin recuadro blanco y CTA ámbar con sombra. Los procesos usan cuatro columnas para el título sticky y ocho para los pasos verticales; «Cómo trabajamos» se define en las constantes de cada campaña. Las seis grillas comparten variantes de `useAdsStagger`, con `staggerChildren: 0.15` y configuración sin desplazamiento, duración ni cascada ante movimiento reducido. Arquitectura y tutorial actualizados antes del código.
- **Validación técnica final:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**; lint sin errores ni advertencias. Build con siete páginas estáticas y el aviso previo del lockfile externo. Repetidas las comprobaciones tras ajustar la escala del H1 en `xl`. Auditoría de datos y AST: solo cambia el título solicitado del proceso; mensajes, pasos, metadata, rutas y recursos conservados, sin copy comercial literal en los trece componentes locales inspeccionados. No se modifican transporte de WhatsApp, analítica, dependencias ni configuración externa.
- **Navegador:** 24 combinaciones aprobadas entre ambas rutas: anchos 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px a 800 px de alto, más 360, 1024 y 1280 px a 720 px. Sin desbordamientos, CTA inicial visible, un solo vídeo dentro del Hero, tres CTAs por campaña y cero formularios. Contraste mínimo del texto claro del Hero **5,59:1** y del texto del CTA **9,35:1**. Observada la cascada y opacidad final 1 en las seis grillas; sticky fijado a **128 px** y liberado al terminar el proceso en ambas rutas. Los seis CTAs conservan mensaje, ambas zonas, foco inicial, Escape y retorno del foco; no se enviaron mensajes. Consola JavaScript sin errores ni advertencias. Servidor temporal detenido, viewport restaurado y pestaña de prueba cerrada.
- **Entrega y pendientes:** commit `style(ads): rediseño de hero con alto contraste, sticky scroll y animaciones en cascada`. Capturas fuera del repositorio: `C:/Users/ESS/Documents/Codex/ads04-remodelacion-hero-desktop.jpg`, `C:/Users/ESS/Documents/Codex/ads04-viviendas-hero-desktop.jpg`, `C:/Users/ESS/Documents/Codex/ads04-sticky-desktop.jpg` y `C:/Users/ESS/Documents/Codex/ads04-viviendas-mobile.jpg`. Los vídeos/posters placeholder y las confirmaciones de marketing mantienen su estado en [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md); no se certifica reproducción de recursos ausentes ni lanzamiento comercial.

### 2026-11-10 — ADS-05: Hero marino/grafito y vídeo sin textos redundantes

- **Presentación:** ambos Heroes usan `from-slate-900 via-slate-800 to-blue-950`, `gap-12 lg:gap-16` e `items-center`. Retirados el título y la descripción situados sobre el vídeo; permanece un único reproductor y el aviso centrado con `text-xs text-slate-500/70`. La apariencia tenue del aviso preparatorio queda documentada como excepción puntual en ADS-05 de `ARQUITECTURA.md`. Constantes, contratos, mensajes, lógica de contacto y animaciones se conservan.
- **Validación:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**, sin errores ni advertencias. Ambas rutas revisadas a 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px con alto 800 px, más 1280 × 720: **20 combinaciones** sin desbordamientos y con CTA inicial visible. Separación de 48/64 px, centrado vertical comprobado, cero títulos/descripciones sobre el vídeo, aviso de 12 px centrado, vídeo único con `preload="none"`, tres CTAs por campaña y cero formularios. Ambos CTA del Hero abren el selector con el mensaje exacto y las dos zonas; foco, Escape y retorno correctos, sin envíos reales. Contraste del texto comercial del Hero **12,02:1** y del texto del botón **9,35:1**; consola JavaScript sin errores ni advertencias.
- **Entrega:** commit `style(ads): oscurecer gradiente del hero para destacar CTA y limpiar textos redundantes sobre el video`. Capturas fuera del repositorio en `C:/Users/ESS/Documents/Codex/ads05-remodelacion-hero-desktop.jpg` y `C:/Users/ESS/Documents/Codex/ads05-viviendas-hero-desktop.jpg`. Servidor temporal detenido y pestaña de prueba cerrada; viewport restaurado. Los recursos audiovisuales y confirmaciones pendientes de [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) no se dan por resueltos.

### 2026-11-12 — SOL-01: refinamiento premium solar y «Video debajo del Hero»

**Estado:** presentación y recorrido solicitados implementados sobre `c977568`, con SSOT actualizado antes del código. La estructura solar es **Hero centrado → Video debajo del Hero → beneficios → proceso → portafolio → cierre**. Las otras dos campañas conservan el vídeo dentro del Hero. Es una variante visual para comparar composiciones; no se configura un experimento A/B ni medición adicional.

- **Datos y UI:** `constants/paneles-solares.ts` incorpora datos tipados de Hero, beneficios, proceso, portafolio y `videoData` con los dos placeholders solicitados. Se trasladan los textos y arrays de los cinco componentes, conservando el copy comercial, pasos, mensaje y casos heredados. Las dimensiones de las fotos primera y tercera se corrigen contra los archivos reales y sus `alt` se construyen en constantes. No se acredita el respaldo de las cifras ni la procedencia de las fotos al extraerlas.
- **Presentación:** Hero con la imagen solar existente optimizada mediante `next/image`, precarga LCP, overlay negro al 60 % más gradiente, texto blanco y características glassmorphism. CTA principal `WhatsAppCTAButton` con «Cotizar por WhatsApp» y secundario `Button.ghost` blanco hacia `#proceso`. Recuperado `components/AdsVideoSection.tsx` con contrato compartido en `lib/types/ads.ts`, a todo el ancho del contenedor inmediatamente después del Hero; se documenta su colocación compartida solicitada aun con un único consumidor actual. Las cinco secciones locales y el bloque de vídeo usan `useAdsReveal`, conservando movimiento reducido. Fondos `dark/accent/default/dark/accent/dark`, tarjetas del Design System, imágenes del portafolio con carga diferida y proporción reservada; página, metadata y layout siguen en servidor.
- **Contacto:** Hero y cierre reutilizan el mensaje solar existente. La ruta `/paneles-solares` se asocia al mismo mensaje para el widget flotante. Se mantiene el CTA del proceso hacia `#contacto-paneles`; selector, teléfonos, transporte, analítica y proveedores sin cambios. No se añaden formularios.
- **Validación técnica:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**; lint sin errores ni advertencias y siete páginas estáticas generadas. Comparación de datos y AST: beneficios, pasos, metadata, mensaje y casos comerciales conservados; seis archivos visuales sin copy comercial literal, todos con `useAdsReveal` y sin formularios ni contacto de email/teléfono.
- **Validación visual y de recorrido:** once tamaños aprobados: 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px a 800 px de alto, más 360 y 1280 px a 720 px. Sin desbordamientos, H1 único y accesible, CTA inicial visible, tres etiquetas con blur, seis secciones en el orden previsto, un vídeo fuera del Hero con controles, `preload="none"` y sin autoplay. Los dos CTA directos y el widget abren un selector con mensaje solar exacto y ambas zonas; foco inicial, Escape y retorno correctos. Probadas ambas anclas; tres fotos del portafolio cargadas y Hero móvil sin texto tapado por el widget. Cota conservadora de contraste sobre una imagen blanca con solo el overlay negro: H1 **5,74:1**, bajada **4,66:1**; texto del CTA **9,35:1**. El gradiente adicional oscurece el fondo. Regresión de remodelación y viviendas: mensajes propios, tres CTAs y vídeo en su Hero conservados. Consola JavaScript sin errores ni advertencias; sin envíos reales. Servidor temporal detenido, viewport restaurado y pestaña de prueba cerrada.
- **Recursos y entrega:** HTTP solar y cuatro imágenes existentes **200**; vídeo `/videos/solar-placeholder.mp4` y poster `/galeria/solar-poster.jpg` **404**, pendientes autorizados. No se certifica reproducción ni lanzamiento comercial. [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) añade M15/M16 para medios solares y M17 para acreditar copy/fotos heredados, conservando las casillas anteriores. Capturas fuera del repositorio: `C:/Users/ESS/Documents/Codex/solar-sol01-desktop.jpg`, `C:/Users/ESS/Documents/Codex/solar-sol01-mobile.jpg` y `C:/Users/ESS/Documents/Codex/solar-sol01-video-desktop.jpg`. Commit solicitado: `style(ads): rediseño premium de hero solar y colocación de bloque audiovisual inferior`.

### 2026-11-13 — SOL-02: mayor altura e inmersión del Hero solar

`HeroPaneles.tsx` incorpora `min-h-[75vh] lg:min-h-[85vh]` y centrado vertical mediante `flex flex-col justify-center` en la sección y su contenedor. La altura sigue siendo mínima: el contenido puede hacer crecer el Hero sin recortes. Se conservan datos, contraste, animaciones, contacto y vídeo inmediatamente debajo.

- **Validación:** typecheck, lint y build con **código 0**, sin errores ni advertencias. Doce tamaños comprobados: anchos 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px a 800 px de alto; además 360 × 720, 1280 × 720 y 1280 × 1080. Sin desbordamientos horizontales ni contenido cortado, centrado vertical con diferencia de **0 px** y CTA inicial visible. En 1280 × 800, el Hero mide **680 px**; en 1280 × 1080, **918 px**. Comprobado el CTA móvil con mensaje solar, ambas zonas, foco, Escape y retorno; consola JavaScript sin errores ni advertencias, sin envíos reales. Servidor temporal detenido, viewport restaurado y pestaña cerrada.
- **Entrega:** commit `style(ads): aumentar altura del hero de paneles solares para mayor inmersión en el primer viewport`. Capturas fuera del repositorio: `C:/Users/ESS/Documents/Codex/solar-sol02-desktop.jpg` y `C:/Users/ESS/Documents/Codex/solar-sol02-mobile.jpg`. Los pendientes de marketing y recursos de SOL-01 se conservan.

### 2026-11-13 — ADS-06: cascada más pausada y entradas suavizadas

`useAdsReveal.ts` centraliza la cascada con `staggerChildren: 0.3` y las entradas con `duration: 0.7` y `ease: 'easeOut'`, tanto en los hijos de `useAdsStagger` como en `useAdsReveal`, utilizado por los procesos y las secciones solares. Se mantienen el desplazamiento de 20 px, la entrada única al viewport y los contratos existentes. Decisión ADS-06 documentada en arquitectura antes del código.

- **Validación programática:** ejecución del módulo con respuestas controladas de `useReducedMotion` para modo normal, SSR sin preferencia y movimiento reducido. En los dos primeros: duración 0,7 s y cascada 0,3 s; con reducción: duración y separación 0, `initial: false`, hijos visibles y desplazamiento 0. Auditoría de consumidores: las seis grillas heredan variantes de contenedor/hijos y las dieciocho secciones locales, incluidos los procesos, no sobrescriben `transition`. La comprobación se realiza por contrato y herencia, sin afirmar una nueva revisión visual de navegador.
- **Comprobaciones y entrega:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**, sin errores ni advertencias. Formato y diff revisados; sin cambios de markup, layout, datos comerciales, contacto o proveedores. Commit `style(ads): ralentizar animaciones de stagger y aumentar duracion de entrada para un efecto de revelado premium`. Los pendientes de marketing y recursos siguen vigentes.

### 2026-11-13 — ADS-07: vídeos reales en Vercel Blob y retirada de avisos

**Estado vigente de los pendientes de REM-01, VIV-01 y SOL-01:** marketing entregó los tres vídeos reales, ya integrados mediante URLs públicas de Vercel Blob en `videoData` de `remodelacion-antiguas.ts`, `viviendas-nuevas.ts` y `paneles-solares.ts`. Queda resuelta la ausencia de los vídeos placeholder registrada en REM-01 «Antes de publicar», VIV-01 «Pendientes explícitos del equipo de marketing antes de publicar» y SOL-01 «Recursos y entrega». Esta entrada actualiza su estado por adición, sin reescribir los resultados históricos.

- **Limpieza de UI:** eliminados por completo los tres `figcaption` de preparación en `RemodelacionHero.tsx`, `ViviendasNuevasHero.tsx` y `components/AdsVideoSection.tsx`, usado por paneles solares. Los reproductores ya no tienen avisos de material pendiente a su alrededor. Retirada también la frase «material pendiente de incorporar» de las tres etiquetas accesibles, manteniendo los textos en constantes. Las URLs de vídeo y poster aportadas por el equipo se conservan y se incluyen en la entrega. No se modifican layout, animaciones, contacto ni lógica de negocio.
- **Validación técnica:** `npm run typecheck`, `npm run lint` y `npm run build` finalizan con **código 0**, sin errores ni advertencias. Typecheck independiente del build; scripts ejecutados mediante `npm.cmd`, sin cambios de dependencias.
- **Recursos:** las peticiones HEAD a los tres vídeos públicos de Vercel Blob devuelven **HTTP 200** y `Content-Type: video/mp4`. Las URLs configuradas de `remodelacion-poster.jpg`, `viviendas-poster.jpg` y `solar-poster.jpg` devuelven **HTTP 404**: los posters todavía requieren URLs válidas o publicación de los archivos. No se declara resuelta su ausencia ni se inventan miniaturas para ocultarla.
- **Navegador:** las tres rutas revisadas a 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px, alto 800 px: **27 combinaciones** sin desbordamiento horizontal, sin avisos ni `figcaption` preparatorios y con un solo vídeo por campaña, controles, `preload="none"`, proporción 16:9 y ausencia de autoplay. Etiquetas accesibles actualizadas y cero formularios. La reproducción real y los recorridos de conversión no se repitieron en esta limpieza; la disponibilidad HTTP no sustituye esas pruebas.
- **Pendientes y trazabilidad:** [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) marca M01/M03/M15 como entregados e integrados; M02/M04/M16 y D01 siguen abiertos por los posters y la validación multimedia restante. Subtítulos cuando corresponda, cifras y plazos entre corchetes, respaldo comercial y comprobaciones finales de producción conservan su estado pendiente. El retiro solicitado de los avisos no certifica el lanzamiento comercial ni el DoD multimedia completo.
- **Entrega:** commit `chore(ads): eliminar avisos de material pendiente tras integrar videos reales desde Vercel Blob`.

### 2026-11-13 — ADS-08: miniaturas PNG integradas y 404 resueltos

El responsable proporcionó las URLs públicas correctas de los tres posters de Vercel Blob. La sustitución de `.jpg` por `.png` ya estaba aplicada en el árbol de trabajo de `src/lib/constants/remodelacion-antiguas.ts`, `viviendas-nuevas.ts` y `paneles-solares.ts`; se verificó y se incorpora a esta entrega sin modificar los vídeos ni la UI. Este registro resuelve por adición el bloqueo de miniaturas de ADS-07 y de REM-01, VIV-01 y SOL-01, preservando sus resultados históricos.

- **Recursos comprobados:** peticiones GET a `remodelacion-poster.png`, `viviendas-poster.png` y `solar-poster.png`: **HTTP 200**, `Content-Type: image/png`. Lectura de los tres archivos con `sharp.metadata()`: formato PNG válido y dimensiones **608 × 1080 px**. No se generaron imágenes sustitutas ni se alteró la proporción reservada del reproductor.
- **Validación técnica:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**, sin errores ni advertencias. Cambio limitado a URLs de datos y documentación; no se repiten pruebas de responsive, reproducción o conversión ni se presentan como verificadas en esta entrega. La revisión de UI de ADS-07 se conserva como antecedente.
- **SSOT y pendientes:** [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) cierra M02/M04/M16 y actualiza el estado multimedia vigente. D01 conserva únicamente la reproducción real y los subtítulos cuando correspondan; el copy entre corchetes, el respaldo comercial y las validaciones finales de producción permanecen pendientes.
- **Entrega:** commit `fix(ads): corregir URLs de miniaturas y resolver recursos pendientes`.

### 2026-11-13 — ADS-09: reproductor vertical 9:16 y silencio inicial

Decisión ADS-09 incorporada a `ARQUITECTURA.md` antes del código. `src/app/components/ui/AdsVideoPlayer.tsx` incorpora un marco centrado `aspect-[9/16]`, `w-full`, ancho máximo de 320 px y 384 px desde `sm`, borde slate, esquinas de 16 px, recorte y sombra profunda. El vídeo llena el interior con `block h-full w-full object-cover`; `className` conserva su aplicación al vídeo. Se añade `muted`, manteniendo `controls`, `playsInline`, `preload="none"`, etiqueta accesible, pistas opcionales y texto de compatibilidad, sin autoplay. Las tres campañas heredan el cambio; no se modifican datos comerciales ni contacto.

- **Validación técnica:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**, sin errores ni advertencias. Formato del componente y diff comprobados; typecheck ejecutado independientemente del build.
- **Responsive y presentación:** tres rutas revisadas a 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px con alto 800 px, más 360 y 1280 px con alto 720 px: **33 combinaciones** sin desbordamientos y con CTA inicial visible. Marco 9:16, límites de ancho y centrado comprobados; radio de 16 px, sombra activa, `overflow: hidden` y `object-fit: cover`. A 360 px el marco mide 279 × 496 px dentro de las tarjetas existentes; desde `sm` alcanza como máximo 384 × 682,66 px. Se conservan tres CTA en remodelación/viviendas, dos directos en solar y cero formularios.
- **Reproducción real:** los tres vídeos iniciados mediante teclado sobre el control nativo, con `muted === true`, `readyState === 4`, avance de `currentTime` y dimensiones intrínsecas 608 × 1080 px. Reproducción pausada al terminar cada prueba. Estado inicial silenciado, controles, reproducción inline, precarga desactivada y ausencia de autoplay comprobados en el DOM. Consola sin errores ni advertencias; no se certifican pruebas en un dispositivo iOS físico ni recepción de mensajes.
- **SSOT y entrega:** el checklist registra la reproducción local comprobada en D01; subtítulos cuando correspondan y validaciones de producción permanecen pendientes. Captura fuera del repositorio: `C:/Users/ESS/Documents/Codex/ads09-video-vertical.png`. Servidor temporal detenido, viewport restaurado y pestañas de prueba cerradas. Commit solicitado `style(ads): ajustar video a formato vertical 9:16 con estilo mockup y reproduccion silenciada`, seguido de `git push` a la rama `feature/sublandings-remodelacion-viviendas-nuevas`.

### 2026-11-13 — ADS-10: aislamiento GPU del reproductor

Aplicado en `src/app/components/ui/AdsVideoPlayer.tsx` el workaround solicitado para el reporte de sobreexposición/HDR: marco con `isolate transform-gpu` y vídeo con `backface-hidden transform-gpu brightness-100`. La compilación de utilidades de Tailwind instalado confirma que `isolate` genera `isolation: isolate`; `isolation-isolate` no genera CSS. El filtro mantiene brillo neutro. Decisión ADS-10 registrada en arquitectura antes del código; sin cambios de datos, animaciones ni lógica de contacto.

- **Validación técnica:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**, sin errores ni advertencias. Formato del componente y diff comprobados; se mantiene el chequeo de tipos independiente del build.
- **Navegador:** las tres campañas comprobadas a 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px, alto 800 px: **27 combinaciones** sin desbordamiento y con CTA inicial visible. CSS calculado con aislamiento `isolate`, transformaciones activas en marco/vídeo, `backface-visibility: hidden` y `filter: brightness(1)`. Se conservan marco 9:16, ancho máximo 320/384 px, esquinas de 16 px, recorte, sombra y `object-cover`.
- **Reproducción y límite de evidencia:** los tres vídeos iniciados mediante control nativo, con avance de `currentTime`, `readyState: 4`, `muted: true` y opacidad final 1; controles, `playsInline`, `preload="none"` y ausencia de autoplay conservados. Consola sin errores ni advertencias; aspecto visual comprobado después de la entrada animada. No se ha reproducido ni medido el fallo HDR original en el hardware afectado: esta entrega verifica el workaround y la regresión local, sin certificar su resolución en todos los dispositivos HDR/WebKit.
- **Entrega:** commit solicitado `fix(ads): aplicar aislamiento GPU al reproductor de video para prevenir bug de color en videos HDR`, seguido de `git push` a `feature/sublandings-remodelacion-viviendas-nuevas`. Captura fuera del repositorio: `C:/Users/ESS/Documents/Codex/ads10-gpu-video.png`. Servidor temporal detenido, viewport restaurado y pestaña cerrada. Los pendientes comerciales y de producción del checklist permanecen vigentes.

### 2026-11-14 — ADS-11: Fase 1 de copy comercial y trazabilidad

Feedback de marketing aplicado con decisión documentada antes del código en `ARQUITECTURA.md`. Los plazos se incorporan como textos proporcionados y autorizados por el responsable, sin atribuirles una medición independiente. Se conserva el diseño, los vídeos, el workaround GPU y el embudo exclusivo de WhatsApp.

- **Copy:** `remodelacion-antiguas.ts` actualiza etiqueta patrimonial, confianza, título y tres respuestas de recableado; comunica renovación típicamente en 4 días y simplifica el alcance a «El presupuesto detalla qué incluye tu caso.». `viviendas-nuevas.ts` comunica presupuesto detallado en menos de 3 días e instalación entre 4 y 10 días. Se retiran las cifras de experiencia y las notas de confirmación de ambos Heroes, incluido su campo tipado y su párrafo, sin dejar contenedores vacíos. Textos comerciales exclusivamente en constantes.
- **Mensajes:** `whatsapp.ts` centraliza las dos plantillas exactas terminadas en «comuna de »; los módulos de campaña reexportan `whatsappMessage`, manteniendo el contrato de los CTA sin duplicación ni ciclos. `normalizeWhatsAppMessage` descarta contenido vacío y limita a 1000 caracteres conservando el espacio final. Se preservan teléfonos, zonas y mensaje solar.
- **Trazabilidad:** el `usePathname()` ya existente de `WhatsAppWidget.tsx` consulta el mapa tipado de servicio y lo pasa a `getWhatsAppRedirectHref`: `remodelacion`, `casa-nueva` o `solar`. Ambas zonas reciben el parámetro `servicio` junto con `to`, `zone` y `message`; Home y rutas sin campaña lo omiten. El identificador no se incorpora al mensaje de WhatsApp. No se modifican eventos, proveedores ni IDs de analítica; la atribución en la URL no acredita conversiones de producción.
- **Validación técnica y de contratos:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**, sin errores ni advertencias. Ejecución de los módulos reales mediante transpile de TypeScript: copy exacto, reexports, eliminación de marcadores, mensajes con espacio final, seis combinaciones de campaña/zona y cuatro enlaces genéricos correctos. Destino `wa.me` conserva teléfono y texto tras codificación; entradas vacías o de más de 1000 caracteres rechazadas.
- **Navegador:** tres campañas a 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px, alto 800 px: **27 combinaciones** sin desbordamiento ni marcadores retirados. Once aperturas de selector desde los ocho CTA de contenido y los tres widgets: ambos enlaces conservan servicio, zona y mensaje exactos; foco inicial y Escape comprobados. Revisión móvil adicional del widget de cada campaña: panel dentro del viewport y Escape devuelve el foco. Home comprobado sin `servicio` ni mensaje de campaña. Consola de campañas sin errores ni advertencias. No se pulsaron enlaces de zona, enviaron mensajes ni certificaron recepción o medición externa.
- **Documentación y entrega:** el checklist cierra por retirada M06/M07/M09 y registra los plazos aprobados M08/M10; M11, producción y los demás pendientes conservan su estado. Captura fuera del repositorio: `C:/Users/ESS/Documents/Codex/ads11-copy-tracking.png`. Servidor temporal detenido, viewport restaurado y pestaña cerrada. Commit `feat(ads): refinar copy comercial y añadir tracking de servicio en redireccion a gracias`, **sin push**, por instrucción expresa.

### 2026-11-14 — ADS-12: Fase 2 de galerías reales y ajustes móviles

Decisión adoptada en `ARQUITECTURA.md` antes del código. `realWorkGallery` incorpora los seis objetos exactos de marketing en las constantes de remodelación y viviendas, con contrato `AdsWorkGalleryItem`. `components/RealWorkGallery.tsx`, compartido y de servidor, renderiza tres fotos por campaña tras señales/problemas: una columna móvil y tres desde `md`, figuras cuadradas, `next/image` con `fill`, `sizes` según `Container`, carga diferida, `alt` y pies desde los labels. `next.config.ts` autoriza únicamente el host Blob suministrado y las dos carpetas de estas galerías, sin query strings ni bypass del optimizador.

- **UI y conversión:** las 21 tarjetas de señales, miedos e incluidos afectadas usan fila, icono izquierdo, texto derecho y padding de 16 px en móvil; desde `md` conservan composición centrada y padding de 32 px. El CTA nuevo bajo síntomas consume el texto «Si alguna de estas te suena, te ayudamos a revisarlo.» desde constantes y abre el selector existente: remodelación tiene cuatro CTA de contenido, viviendas tres y solar dos. El footer de las tres campañas reserva 96 px inferiores en móvil y 32 px desde `lg`, sin añadir enlaces.
- **Motion y GPU:** ambos hooks comparten `once: true`, `margin: '0px 0px -50px 0px'` y `amount: 0.1`; se conservan 0,7 s de entrada, 0,3 s de cascada y movimiento reducido. El vídeo añade los estilos inline WebKit solicitados, manteniendo `isolate transform-gpu`, cara posterior oculta, brillo neutro, marco 9:16, silencio inicial y controles. Se usa `isolate`, la utilidad que genera CSS real, en lugar de `isolation-isolate`. La comprobación local de estilos no certifica todos los dispositivos HDR ni la eliminación de flashes en todos los escenarios.
- **Recursos y contratos:** las seis URLs originales responden **HTTP 200**, con WebP válidos y dimensiones comprobadas. Las seis variantes del optimizador de Next.js a 640 px/calidad 75 responden **HTTP 200** y son WebP válidos, de 16,9 a 89,9 KB aproximadamente. El navegador carga las seis fotos mediante `/_next/image`; en escritorio selecciona variantes de 384 px. Comparados src/labels contra el brief. Probados los patrones de Next: seis URLs permitidas y rechazo de otro host, HTTP, otra carpeta o query string. Hook real ejecutado con preferencia normal, SSR y movimiento reducido: viewport compartido y duración/cascada 0 en el último modo.
- **Validación técnica:** `npm run typecheck`, `npm run lint` y `npm run build`: **código 0**, sin errores ni advertencias. Typecheck independiente del build; formato y diff revisados, sin nuevas dependencias ni datos comerciales incrustados en JSX.
- **Navegador:** tres campañas en 360, 639, 640, 767, 768, 1023, 1024, 1279 y 1280 px, alto 800 px: **27 combinaciones** sin desbordamientos y con CTA inicial visible. Galerías de una/tres columnas, recorte cuadrado y labels correctos; tarjetas medidas tras finalizar las transiciones. Doce aperturas desde CTA y widget en móvil: selector dentro del viewport, foco inicial, Escape y ambos enlaces con zona, mensaje exacto y `servicio` conservados. Footer visible sin superposición con WhatsApp en las tres rutas a 360 y 1280 px. Entradas de síntomas comprobadas hasta opacidad final 1. Consola sin errores ni advertencias; sin envíos ni medición de leads en producción.
- **Entrega y límites:** capturas fuera del repositorio: `C:/Users/ESS/Documents/Codex/ads12-remodelacion-galeria.png`, `ads12-viviendas-galeria.png` y `ads12-tarjetas-mobile.png`. Servidor temporal detenido, viewport restaurado y pestaña cerrada. Material y labels aportados por el responsable; no se añaden testimonios, cifras ni casos inventados. Los pendientes de producción, respaldo comercial restante y subtítulos conservan su estado. Commit `style(ads): inyectar galeria real, compactar UI movil y aplicar fixes de GPU y animacion`, **sin push**.

### 2026-11-14 — ADS-11: Aplicación de feedback final de marketing y prueba social real

- **Alcance:** Depuración total del copy comercial en las sub-landings de Remodelación y Viviendas Nuevas (eliminación de placeholders numéricos, ajustes a tono empático y apertura de mensajes de WhatsApp para capturar la comuna del lead).
- **Galería Real:** Inyección de componente de prueba social con 6 fotografías reales de trabajos de Mr. Chispeza, utilizando URLs definitivas `.webp` servidas desde Vercel Blob, e incluyendo etiquetas de comunas exactas (Colmo, Limache, Forestal, Villa Independencia, Concón).
- **UI/UX y Trazabilidad:** Tarjetas de información compactadas a layout horizontal para optimizar el scroll móvil. Nuevo CTA intermedio de WhatsApp añadido. Inyección dinámica del parámetro `&servicio=` (mediante lectura de ruta) en la redirección hacia `/gracias` para segmentación invisible en Google Analytics. Workaround de aislamiento GPU aplicado al reproductor de video para prevenir bug de color HDR en iOS/WebKit.
- **Estado y Evidencia:** Implementación técnica aprobada mediante comprobaciones locales (`typecheck` y `lint` código 0). Documentos de control y checklist de lanzamiento actualizados, cerrando las dependencias fotográficas de marketing.
