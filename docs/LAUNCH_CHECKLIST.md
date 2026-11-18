# Checklist de lanzamiento — Mr. Chispeza

**Consolidación:** 2026-11-09, America/Santiago. **Actualización de cierre comercial y CRO:** 2026-11-15, ADS-14. **Base de desarrollo completada:** `a4f002f` (ADS-02), rama `feature/sublandings-remodelacion-viviendas-nuevas`. **Estado:** feedback de marketing de Remodelación y Viviendas Nuevas **COMPLETADO**, incluidos copy, CTAs contextuales, trazabilidad, galerías reales, acordeones, carruseles con indicadores y consistencia desktop. La trazabilidad y la conversión de ambas campañas quedaron cerradas por confirmación del responsable el 2026-11-18 (D14).

Este documento reúne las confirmaciones del responsable y las pruebas registradas en [PROJECT_STATUS.md](./PROJECT_STATUS.md).

**Homologación UX de las tres sub-landings: COMPLETADA**, 2026-11-15, SOL-03. Paneles Solares incorpora acordeones móviles en beneficios/proceso, iconos integrados y portafolio deslizable con indicadores; conserva las descripciones abiertas y la grilla de escritorio. Este cierre UX no modifica los pendientes comerciales, multimedia o de producción solares.

**Homologación mobile-first del Home y galería real: COMPLETADA**, 2026-11-16, HOME-01. Servicios, sectores, galería 4:5 con indicadores, acceso compacto al formulario y reserva del footer comprobados localmente.

**Homologación UX/UI móvil del Home y las tres sub-landings: 100 % COMPLETADA**, 2026-11-16, HOME-02. El cierre visual reúne C02–C09, SOL-03, HOME-01 y el pulido de Hero/divisor de HOME-02. El porcentaje corresponde al alcance UX/UI móvil. Las tareas activas de Paneles Solares se registran más abajo.

**Regla vigente:** desde ADS-02, todo `(ads)` utiliza exclusivamente WhatsApp. Las tareas de Formspree y Turnstile de este checklist corresponden al **Home, fuera de campañas**. SEC-02-R1 mantiene Formspree como único validador de Turnstile, tras confirmar el responsable su activación; Next.js reenvía `cf-turnstile-response` sin consumirlo. El responsable confirmó el dominio de producción en Cloudflare; el error local `110200` está excluido y no constituye un bloqueo que deba corregirse para estas landings.

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
- [x] **M18 — Galería real de las sub-landings: COMPLETADA.** Dependencia bloqueante de entrega fotográfica de marketing cerrada el 2026-11-14. Seis fotografías reales `.webp` de Vercel Blob, tres por campaña, integradas con `next/image`, captions de comunas exactos y carga responsive. Originales y variantes optimizadas comprobados con HTTP 200, y seis fotos cargadas en navegador. Evidencia: ADS-12, commit `fc4580e`; carrusel móvil nativo con snap y ancho de 85 vw en ADS-14, commit `a75ab4a`. Este cierre corresponde a las galerías de campañas. M12 y M13 registran la galería y el banner del Home.

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

- [x] **C01 — Trazabilidad de WhatsApp implementada:** lectura de ruta con `usePathname()` y parámetro `servicio=remodelacion`, `casa-nueva` o `solar` en `/gracias` para ambas zonas; Home sin atribución de campaña. Mensajes exactos y espacio final conservados. Validación local en ADS-11/ADS-12, commits `8bd98a8` y `fc4580e`; diez accesos desde los cuatro CTA y el widget de cada campaña nuevamente comprobados en ADS-15. D14 registra la confirmación del responsable sobre la trazabilidad y la conversión.
- [x] **C02 — Optimizaciones móviles y UI/UX implementadas:** 24 tarjetas compactas con icono izquierdo y `gap-3`, pasos compactos y 21 acordeones exclusivamente móviles en FAQ, incluidos y proceso, con estado independiente, botones accesibles y transiciones de 0,2 s (`easeOut`; duración 0 con movimiento reducido). Desde `md`, las descripciones permanecen visibles mediante CSS incluso con el estado cerrado; HTML SSR y reglas compiladas comprobados. ADS-14/ADS-15: carrusel nativo, 18 combinaciones responsive sin desbordamientos, 21 paneles probados con Enter/Espacio y diez accesos de contacto comprobados. Se conservan los cuatro CTA por campaña, viewport compartido de Motion, aislamiento GPU/WebKit del vídeo 9:16 y footer con `pb-24 lg:pb-8`. Evidencias en ADS-12/ADS-14 y entrada oficial ADS-11 de CRO con detalle ADS-15. El workaround está aplicado; su validación en el hardware HDR afectado conserva el límite registrado en ADS-10/ADS-12.

### Consistencia visual final — COMPLETADA, 2026-11-15

- [x] **C03 — Carruseles móviles con indicadores: COMPLETADOS.** Dos galerías de tres fotos, cuatro perfiles y tres columnas de dos síntomas, con `CarouselDots` compartido. Botones accesibles, indicador activo al desplazar y navegación por clic/Enter/Espacio; primer, segundo y último ítem comprobados, incluso al alcanzar el límite del scroll. Indicadores visibles solo bajo `md`, con píldora ámbar, listener pasivo y observación de tamaño; sin nuevas dependencias.
- [x] **C04 — Target desktop: COMPLETADO.** Cuatro tarjetas simétricas en grilla de dos columnas, mismo `Container` que Incluidos, `gap-8`, padding de 32 px, icono superior de 48 px y textos centrados de 20/16 px. Móvil conserva 82 vw, 320 px desde `sm`, padding de 20 px, icono de 40 px y distribución compacta en fila. Evidencia ADS-14 del 2026-11-15.
- [x] **C05 — Separación visual y footer móvil: COMPLETADOS.** Galería compartida con fondo `accent`, bordes sutiles y tarjetas blancas 4:5; separación vertical de 64/96 px y hover conservados. Footer con `pb-24 lg:pb-8`, 96 px inferiores comprobados en móvil. ADS-13 (`9dc5a6c`) y regresión ADS-14 del 2026-11-15.
- [x] **C06 — Validación final local: COMPLETADA.** `npm run typecheck`, `npm run lint` y `npm run build`: código 0, cero errores y advertencias. Ambas rutas en nueve anchos, 18 combinaciones sin desbordamiento; seis fotos cargadas y cuatro CTA más widget por campaña con ambas zonas, mensaje exacto, `servicio`, foco y Escape. Sin envíos reales. Evidencia detallada en la última entrada ADS-14 de `PROJECT_STATUS.md`.
- [x] **C07 — Homologación UX solar: COMPLETADA.** SOL-03 del 2026-11-15: seis beneficios y cinco pasos con acordeones móviles de 0,2 s, Paso 1 abierto inicialmente e iconos dentro de las tarjetas. Portafolio con tres proyectos, carrusel nativo y tres indicadores interactivos; tres columnas y hover desde `md`. Los once paneles solares y los 21 existentes de remodelación/viviendas (32 en total) responden a Enter/Espacio y muestran sus descripciones desde `md`. Tres campañas en nueve anchos, 27 combinaciones sin desbordamiento; imágenes, extremos del carrusel y contacto comprobados. Typecheck, lint y build con código 0, cero errores y advertencias. Los pendientes propios de Paneles Solares se conservan en la sección correspondiente.

### Hero del Home ya acreditado

- [x] **M14 — Hero:** acreditar la procedencia de `/hero.webp`. Si no se puede confirmar como fotografía propia de una obra real, aportar un reemplazo verificable antes de presentar el Home como 100 % de obras reales.

### Home — galería real y optimización móvil, COMPLETADAS, 2026-11-16

- [x] **M12 — Home, galería: COMPLETADO.** Las tres imágenes placeholder de Unsplash fueron sustituidas por las fotos reales `.webp` indicadas de Vercel Blob: Restaurant Río Tinto (Casablanca), restauración e iluminación (Colmo) y tablero patrimonial (Con-Con). Originales HTTP 200 con `Content-Type: image/webp`; tres imágenes optimizadas cargadas en navegador mediante `next/image`, proporción reservada 4:5, títulos y ubicaciones exactos. Evidencia: HOME-01 en [PROJECT_STATUS.md](./PROJECT_STATUS.md).
- [x] **C08 — Home, optimización mobile-first: COMPLETADO.** Tres servicios destacados abiertos y siete acordeones con IDs intactos y auto-apertura/scroll por hash de Google Ads; sectores con Residenciales abierto inicialmente. Galería con carrusel nativo, tres indicadores interactivos, tarjetas de 85 vw/340 px y grilla abierta desde `md`. Banner naranja oculto bajo `md`, información previa al formulario compacta, CTA con scroll suave/foco y footer con `pb-24 lg:pb-8`. Nueve tamaños entre 360 y 1280 px sin desbordamiento; typecheck, lint y build con código 0, cero errores y advertencias. Fase 1: `d212089`; cierre y límites: HOME-01.

- [x] **C09 — Pulido visual del Home y cierre de homologación UX/UI móvil: COMPLETADO.** HOME-02 del 2026-11-16: Hero centrado solo bajo `md`, H1 de 40/48 px con peso 800 y tracking ajustado; párrafo centrado y padding móvil equilibrado. Desde `md` se mantienen alineación izquierda, tamaños 48/60 px, peso 700 y espaciado de escritorio. Divisor «También realizamos estos servicios» con texto de 18 px/700 y acento ámbar decorativo, oculto desde `md`. Comprobados 320 × 640 px, 390 × 844 px y nueve anchos entre 360 y 1280 px: sin recortes ni desbordamiento; ambos CTA completos en la primera pantalla a 320 × 640 px. Typecheck, lint y build con código 0, cero errores y advertencias. Home y las tres sub-landings quedan 100 % homologados en UX/UI móvil conforme al alcance solicitado, con evidencia conjunta de C07, C08 y HOME-02.

### Home — seguridad del backend, SEC-02, 2026-11-16

- [x] **SEC-02 — Contrato de seguridad del formulario del Home: CORREGIDO Y VALIDADO LOCALMENTE EN SEC-02-R1.** La Server Action conserva validación de campos, honeypot y presencia/formato del token; reenvía `cf-turnstile-response` en JSON para una única validación nativa en Formspree. Se retira el Siteverify previo de Next.js y su dependencia de `TURNSTILE_SECRET_KEY`, incompatibles con la protección nativa confirmada por el responsable. Estados tipados, timeout de 10 segundos, rechazo de redirecciones, reset del widget y éxito solo tras aceptación del receptor. Pruebas vigentes: 34/34 aprobadas con HTTP simulado; typecheck, lint y build con código 0, sin errores ni advertencias. D12/D13 registran la confirmación posterior en producción y la regresión local. Evidencia en SEC-02-R1 de [PROJECT_STATUS.md](./PROJECT_STATUS.md); el registro SEC-02 se conserva como antecedente sustituido.
- [x] **D10 — Home, integración nativa configurada según confirmación del responsable:** el 2026-11-16 confirma que CAPTCHA/Turnstile está activado en Formspree. Next.js reenvía el token sin validarlo antes y mantiene la aceptación de Formspree como requisito para el éxito. La confirmación posterior en producción consta en D09 y D13.
- [x] **D11 — Home, validación de campos en servidor:** comprobados ausencia, formato de email/teléfono, límites, archivos y campos duplicados. Asunto fijo y lista de campos autorizados; no se reenvían valores internos de React ni campos arbitrarios.

### SEO técnico, Open Graph y datos estructurados — COMPLETADO, 2026-11-18

- [x] **SEO-01 — Metadata global y JSON-LD del Home.** Marca, dominio e imagen social centralizados, `metadataBase` y canónica del Home, y JSON-LD `Electrician` renderizado en servidor.
- [x] **SEO-02 — Favicon vectorial, manifest e imagen social.** Favicon SVG, manifest corporativo `#004473`, WebP de 1200×630 y cuenta `@MisterChispeza`. Score de producción de **98/100**, informado por el responsable.
- [x] **SEO-03 — Open Graph y Twitter Cards de campañas.** Las tres sub-landings emiten canónicas y URLs sociales absolutas, `og:site_name`, `og:locale`, WebP de 1200×630 y `twitter:site` en el HTML prerenderizado. El build termina con código 0 y conserva el aviso de seguridad de Next.js 16.4.2, registrado en [PROJECT_STATUS.md](./PROJECT_STATUS.md).

### Verificaciones de lanzamiento — COMPLETADAS, 2026-11-18

- [x] **D06 — Entradas de campaña y alias.** GET en el build local y en `https://mrchispeza.cl`: `/instalacion-electrica-viviendas-nuevas` y `/remodelacion-instalaciones` devolvieron 200. `/proyectos-nuevos` y `/instalacion-electrica-casa-nueva` redirigieron a Viviendas Nuevas, y `/remodelacion-instalaciones-antiguas` y `/remodelacion-electrica` a Remodelación. Los cuatro devolvieron 307 y preservaron `?utm_source=test&utm_campaign=audit` en `Location`.
- [x] **D09 — Home, variables y dominio.** El responsable confirmó que las variables de Vercel quedaron depuradas y que la integración nativa entre Cloudflare Turnstile y Formspree funciona en producción.
- [x] **D12 — Home, expiración y reintento.** La confirmación de la integración en producción se complementó con la suite local `node --test scripts/contact-form.test.mjs`, con 34/34 pruebas aprobadas, incluidos rechazo por expiración y reintento con token nuevo mediante HTTP simulado.
- [x] **D13 — Home, validación nativa.** El responsable comprobó que el servidor de Formspree verifica Turnstile en producción. La suite local de 34 pruebas también comprobó el rechazo de tokens inválidos, expirados y reutilizados y la espera de aceptación del receptor, con HTTP simulado.
- [x] **D14 — Remodelación y Viviendas Nuevas, trazabilidad y conversión.** El responsable confirmó expresamente que la trazabilidad en `/gracias` y la conversión están listas. El cierre queda registrado sin requerir una sesión adicional.
- [x] **M13 — Home, banner.** `BannerParallax` usa `/banner-parallax-fondo.jpg` desde `public/` desde el commit `0fccae3`. El optimizador del build local devolvió HTTP 200 y un WebP decodificable de 640 px de ancho.
- [x] **D03 — Home, integración fotográfica.** El banner local verificado en M13 completa la integración junto con la galería acreditada en M12.

## Pendientes activos

### Paneles Solares — respaldo y validación propios

- [ ] **M17 — Paneles Solares, respaldo comercial y fotos:** confirmar ahorro, precio, garantías y plazos de SOL-01, procedencia de `/grid-pattern.webp` y `/paneles-1.webp`, `/paneles-2.webp`, `/paneles-3.webp`, y su correspondencia con los casos publicados.
- [ ] **M05/D01 — Paneles Solares, subtítulos y multimedia:** comprobar si el vídeo solar tiene voz e incorporar la pista correspondiente, o registrar que no aplica. Se conserva la reproducción y disponibilidad ya acreditadas en ADS-07/ADS-08/ADS-09.
- [ ] **D04/D05/D07/D08 — Paneles Solares, despliegue final:** comprobar responsive, contraste, canonical/`openGraph.url`, imágenes SEO, CTA/widget, ambas zonas, mensaje/servicio solar, paso por `/gracias`, foco/Escape y WhatsApp exclusivo con los recursos finales.

## Antecedentes fuera del feedback cerrado

Por instrucción del responsable, las casillas activas se limitan a los pendientes de Paneles Solares. Los registros previos M05/M11/D01 sobre subtítulos y respaldo documental, y D15/D16/D17 sobre stack, bypass de tipos y contenido heredado, conservan su trazabilidad en [PROJECT_STATUS.md](./PROJECT_STATUS.md), línea base, REM-01/VIV-01/SOL-01 y decisiones posteriores. Su salida de la lista de feedback no equivale a una auditoría externa completada ni a una reparación del stack. M05/D01 mantienen arriba su alcance solar; `typescript.ignoreBuildErrors` permanece y el typecheck independiente sigue siendo obligatorio.
