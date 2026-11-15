# Checklist de lanzamiento — Mr. Chispeza

**Consolidación:** 2026-11-09, America/Santiago. **Actualización de cierre comercial y CRO:** 2026-11-15, ADS-14. **Base de desarrollo completada:** `a4f002f` (ADS-02), rama `feature/sublandings-remodelacion-viviendas-nuevas`. **Estado:** feedback de marketing de Remodelación y Viviendas Nuevas **COMPLETADO**, incluidos copy, CTAs contextuales, trazabilidad, galerías reales, acordeones, carruseles con indicadores y consistencia desktop. La única validación conjunta activa de estas dos campañas es la sesión de 15 minutos en `/gracias` y Google Ads (D14); se conservan aparte las tareas exclusivas del Home y Paneles Solares.

Este documento refleja el cierre de feedback solicitado por el responsable y la evidencia de [PROJECT_STATUS.md](./PROJECT_STATUS.md). Los cierres técnicos corresponden a implementación y pruebas locales; el disparo real de la conversión en Google Ads sigue reservado a D14. El historial y los antecedentes generales se conservan sin presentarlos como auditorías externas realizadas.

**Homologación UX de las tres sub-landings: COMPLETADA**, 2026-11-15, SOL-03. Paneles Solares incorpora acordeones móviles en beneficios/proceso, iconos integrados y portafolio deslizable con indicadores; conserva las descripciones abiertas y la grilla de escritorio. Este cierre UX no modifica los pendientes comerciales, multimedia o de producción solares.

**Regla vigente:** desde ADS-02, todo `(ads)` utiliza exclusivamente WhatsApp. Las tareas de Formspree y Turnstile de este checklist corresponden al **Home, fuera de campañas**. El responsable confirmó el dominio de producción en Cloudflare; el error local `110200` está excluido y no constituye un bloqueo que deba corregirse para estas landings.

Marcar una casilla solo al disponer de evidencia, anotando fecha, entorno y referencia del resultado en el ítem o en el changelog. Cuando una condición no aplique, como subtítulos en un vídeo sin voz, dejar constancia del motivo. No marcar como entregados recursos que todavía son placeholders.

## Completados

### Multimedia real de las campañas

ADS-07 y ADS-08 resuelven la entrega de vídeos y miniaturas de REM-01, VIV-01 y SOL-01 mediante URLs públicas de Vercel Blob, verificadas con HTTP 200. ADS-12 incorpora las galerías reales de remodelación y viviendas; ADS-14 añade su presentación Swipe-Carousel móvil y grilla de tres columnas desde `md`. Los avisos de preparación permanecen retirados de las tres campañas. Evidencias en [PROJECT_STATUS.md](./PROJECT_STATUS.md), registros ADS-07/ADS-08, ADS-12 y ADS-14.

- [x] **M01 — Vídeo de remodelación:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M02 — Poster de remodelación:** URL corregida a `remodelacion-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).
- [x] **M03 — Vídeo de viviendas nuevas:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M04 — Poster de viviendas nuevas:** URL corregida a `viviendas-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).
- [x] **M15 — Vídeo solar:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M16 — Poster solar:** URL corregida a `solar-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).
- [x] **M18 — Galería real de las sub-landings: COMPLETADA.** Dependencia bloqueante de entrega fotográfica de marketing cerrada el 2026-11-14. Seis fotografías reales `.webp` de Vercel Blob, tres por campaña, integradas con `next/image`, captions de comunas exactos y carga responsive. Originales y variantes optimizadas comprobados con HTTP 200, y seis fotos cargadas en navegador. Evidencia: ADS-12, commit `fc4580e`; carrusel móvil nativo con snap y ancho de 85 vw en ADS-14, commit `a75ab4a`. Este cierre corresponde a las galerías de campañas; M12/M13 mantienen el alcance del Home.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), REM-01 «Antes de publicar», VIV-01 «Pendientes explícitos del equipo de marketing antes de publicar», ADS-02 «Pendientes de marketing conservados» y SOL-01 para los recursos solares.

### Copy comercial final y mensajes de WhatsApp

- [x] **M06 — Experiencia en remodelación:** retirada la cifra `[numero]` y su nota por instrucción de marketing el 2026-11-14 (ADS-11). No se sustituye por una métrica inventada ni se acredita una cantidad de obras.
- [x] **M07 — Superficie de referencia:** retirado `[100 m2]` al aplicar la respuesta aprobada de recableado el 2026-11-14 (ADS-11). No se publica un límite de superficie.
- [x] **M08 — Plazo de remodelación:** marketing proporciona el 2026-11-14 el copy «típicamente en 4 días, dependiendo de la envergadura del proyecto» y la respuesta «usualmente máximo 4 días» (ADS-11). Copy implementado por autorización del responsable; no es una medición independiente del agente.
- [x] **M09 — Experiencia en viviendas nuevas:** retirada la referencia `[número] viviendas instaladas` y su nota el 2026-11-14 (ADS-11), sin publicar una cifra sustituta.
- [x] **M10 — Plazo de presupuesto:** aplicado «Presupuesto detallado en menos de 3 días» aprobado por marketing el 2026-11-14 (ADS-11). La ejecución se comunica aparte como «entre 4 y 10 días, dependiendo de la envergadura y tamaño de la instalación».
- [x] **D02 — Copy comercial y CTAs: COMPLETADOS.** Feedback final aplicado en constantes tipadas, sin corchetes comerciales, con plazos aprobados y mensajes abiertos para capturar la comuna. Evidencia ADS-11 (`8bd98a8`), refinamiento previo (`10577ac`) y cierre de CTAs contextuales/microcopys en ADS-12 del 2026-11-14 (`5d7f294`) y ADS-13 del 2026-11-15 (`9dc5a6c`). Orden exacto de síntomas y subtítulo de incluidos de remodelación comprobados; no se modifican los textos aprobados en ADS-14.

Desde ADS-11, las plantillas de WhatsApp de remodelación y viviendas terminan en «comuna de » para que el visitante complete su ubicación; se retiraron los marcadores `[comuna]` y `[años]`. No añadir una comuna fija ni perder el espacio final al normalizar o codificar el mensaje.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), ADS-11 de Fase 1 (`8bd98a8`) y consolidación del feedback final del 2026-11-14. Los registros de REM-01/VIV-01 y ADS-02 se conservan como antecedentes inmutables.

### Trazabilidad y optimizaciones móviles

- [x] **C01 — Trazabilidad de WhatsApp implementada:** lectura de ruta con `usePathname()` y parámetro `servicio=remodelacion`, `casa-nueva` o `solar` en `/gracias` para ambas zonas; Home sin atribución de campaña. Mensajes exactos y espacio final conservados. Validación local en ADS-11/ADS-12, commits `8bd98a8` y `fc4580e`; diez accesos desde los cuatro CTA y el widget de cada campaña nuevamente comprobados en ADS-15. La comprobación del evento y la segmentación en Google Analytics en producción se conserva en D14.
- [x] **C02 — Optimizaciones móviles y UI/UX implementadas:** 24 tarjetas compactas con icono izquierdo y `gap-3`, pasos compactos y 21 acordeones exclusivamente móviles en FAQ, incluidos y proceso, con estado independiente, botones accesibles y transiciones de 0,2 s (`easeOut`; duración 0 con movimiento reducido). Desde `md`, las descripciones permanecen visibles mediante CSS incluso con el estado cerrado; HTML SSR y reglas compiladas comprobados. ADS-14/ADS-15: carrusel nativo, 18 combinaciones responsive sin desbordamientos, 21 paneles probados con Enter/Espacio y diez accesos de contacto comprobados. Se conservan los cuatro CTA por campaña, viewport compartido de Motion, aislamiento GPU/WebKit del vídeo 9:16 y footer con `pb-24 lg:pb-8`. Evidencias en ADS-12/ADS-14 y entrada oficial ADS-11 de CRO con detalle ADS-15. El workaround está aplicado; su validación en el hardware HDR afectado conserva el límite registrado en ADS-10/ADS-12.

### Consistencia visual final — COMPLETADA, 2026-11-15

- [x] **C03 — Carruseles móviles con indicadores: COMPLETADOS.** Dos galerías de tres fotos, cuatro perfiles y tres columnas de dos síntomas, con `CarouselDots` compartido. Botones accesibles, indicador activo al desplazar y navegación por clic/Enter/Espacio; primer, segundo y último ítem comprobados, incluso al alcanzar el límite del scroll. Indicadores visibles solo bajo `md`, con píldora ámbar, listener pasivo y observación de tamaño; sin nuevas dependencias.
- [x] **C04 — Target desktop: COMPLETADO.** Cuatro tarjetas simétricas en grilla de dos columnas, mismo `Container` que Incluidos, `gap-8`, padding de 32 px, icono superior de 48 px y textos centrados de 20/16 px. Móvil conserva 82 vw, 320 px desde `sm`, padding de 20 px, icono de 40 px y distribución compacta en fila. Evidencia ADS-14 del 2026-11-15.
- [x] **C05 — Separación visual y footer móvil: COMPLETADOS.** Galería compartida con fondo `accent`, bordes sutiles y tarjetas blancas 4:5; separación vertical de 64/96 px y hover conservados. Footer con `pb-24 lg:pb-8`, 96 px inferiores comprobados en móvil. ADS-13 (`9dc5a6c`) y regresión ADS-14 del 2026-11-15.
- [x] **C06 — Validación final local: COMPLETADA.** `npm run typecheck`, `npm run lint` y `npm run build`: código 0, cero errores y advertencias. Ambas rutas en nueve anchos, 18 combinaciones sin desbordamiento; seis fotos cargadas y cuatro CTA más widget por campaña con ambas zonas, mensaje exacto, `servicio`, foco y Escape. Sin envíos reales. Evidencia detallada en la última entrada ADS-14 de `PROJECT_STATUS.md`.
- [x] **C07 — Homologación UX solar: COMPLETADA.** SOL-03 del 2026-11-15: seis beneficios y cinco pasos con acordeones móviles de 0,2 s, Paso 1 abierto inicialmente e iconos dentro de las tarjetas. Portafolio con tres proyectos, carrusel nativo y tres indicadores interactivos; tres columnas y hover desde `md`. Los once paneles solares y los 21 existentes de remodelación/viviendas (32 en total) responden a Enter/Espacio y muestran sus descripciones desde `md`. Tres campañas en nueve anchos, 27 combinaciones sin desbordamiento; imágenes, extremos del carrusel y contacto comprobados. Typecheck, lint y build con código 0, cero errores y advertencias. Se conservan M17, M05/D01, validaciones de producción y D14.

### Hero del Home ya acreditado

- [x] **M14 — Hero:** acreditar la procedencia de `/hero.webp`. Si no se puede confirmar como fotografía propia de una obra real, aportar un reemplazo verificable antes de presentar el Home como 100 % de obras reales.

## Pendientes activos

### Validación conjunta de Remodelación y Viviendas Nuevas

- [ ] **D14 — Prueba en vivo de 15 minutos en `/gracias` y Google Ads:** recorrer los CTA reales, seleccionar Costa/Marga Marga y confirmar el disparo único de la conversión existente, con `servicio` y mensaje correctos. Revisar recarga/regreso para descartar duplicados y guardar evidencia del resultado. La sesión reúne las comprobaciones finales de despliegue/contacto de estas campañas antes agrupadas en D04/D05/D07/D08; revisar también URLs/metadata y contacto exclusivamente por WhatsApp. Una visita aislada a `/gracias` no acredita un lead ni recepción de mensajes. Esta prueba conjunta no se ha ejecutado en ADS-14.

### Home — fotografías, entradas y formulario

- [ ] **M12 — Home, galería:** sustituir las tres imágenes de Unsplash por fotografías reales de obras de Mr. Chispeza.
- [ ] **M13 — Home, banner:** entregar una fotografía real para reemplazar el fondo de banco de `BannerParallax`.
- [ ] **D03 — Home, integración fotográfica:** integrar el material aprobado de M12–M14 desde constantes; comprobar optimización, dimensiones reservadas, tamaños responsive y ausencia de saltos.
- [ ] **D06 — Home, entradas de campaña:** verificar en producción los enlaces a `/instalacion-electrica-viviendas-nuevas` y `/remodelacion-instalaciones`, respuestas 200 y alias 307 con parámetros UTM. Conservar los cuatro alias nativos existentes, sin carpetas proxy.
- [ ] **D09 — Home, variables y dominio:** comprobar `NEXT_PUBLIC_TURNSTILE_SITE_KEY` y `NEXT_PUBLIC_FORMSPREE_ID` del despliegue final y su uso en el formulario; conservar evidencia del dominio autorizado sin publicar valores sensibles ni reabrir el error local excluido.
- [ ] **D10 — Home, Formspree:** verificar la activación/configuración de la integración nativa de Turnstile y una única validación efectiva del token.
- [ ] **D11 — Home, validación de campos:** completar las pruebas de entradas inválidas en servidor según el contrato existente.
- [ ] **D12 — Home, rechazos y reintentos:** probar token ausente, inválido y expirado, renovación y recuperación.
- [ ] **D13 — Home, envío y errores:** probar recepción real controlada en Formspree, fallo de red, reintentos y navegación a `/gracias` tras aceptación; comprobar su medición sin conversiones duplicadas.

Las tareas de Formspree/Turnstile pertenecen únicamente al Home, fuera de `(ads)`, conforme a [AGENT.md, sección 5](./AGENT.md).

### Paneles Solares — respaldo y validación propios

- [ ] **M17 — Paneles Solares, respaldo comercial y fotos:** confirmar ahorro, precio, garantías y plazos de SOL-01, procedencia de `/grid-pattern.webp` y `/paneles-1.webp`, `/paneles-2.webp`, `/paneles-3.webp`, y su correspondencia con los casos publicados.
- [ ] **M05/D01 — Paneles Solares, subtítulos y multimedia:** comprobar si el vídeo solar tiene voz e incorporar la pista correspondiente, o registrar que no aplica. Se conserva la reproducción y disponibilidad ya acreditadas en ADS-07/ADS-08/ADS-09.
- [ ] **D04/D05/D07/D08 — Paneles Solares, despliegue final:** comprobar responsive, contraste, canonical/`openGraph.url`, imágenes SEO, CTA/widget, ambas zonas, mensaje/servicio solar, paso por `/gracias`, foco/Escape y WhatsApp exclusivo con los recursos finales.

## Antecedentes fuera del feedback cerrado

Por instrucción del responsable, las casillas activas se limitan a D14 y al alcance exclusivo Home/Solar anterior. Los registros previos M05/M11/D01 sobre subtítulos y respaldo documental, y D15/D16/D17 sobre stack, bypass de tipos y contenido heredado, conservan su trazabilidad en [PROJECT_STATUS.md](./PROJECT_STATUS.md), línea base, REM-01/VIV-01/SOL-01 y decisiones posteriores. Su salida de la lista de feedback no equivale a una auditoría externa completada ni a una reparación del stack. M05/D01 mantienen arriba su alcance solar; `typescript.ignoreBuildErrors` permanece y el typecheck independiente sigue siendo obligatorio.
