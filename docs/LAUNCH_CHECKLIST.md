# Checklist de lanzamiento — Mr. Chispeza

**Consolidación:** 2026-11-09, America/Santiago. **Actualización multimedia:** 2026-11-13 (ADS-08). **Base de desarrollo completada:** `a4f002f` (ADS-02), rama `feature/sublandings-remodelacion-viviendas-nuevas`. **Estado:** vídeos reales y miniaturas integrados; subtítulos cuando correspondan, confirmaciones de marketing y validaciones finales de producción pendientes.

Este documento concentra los pendientes de [PROJECT_STATUS.md](./PROJECT_STATUS.md), interpretando la línea base junto con sus resoluciones posteriores. Las casillas de producción y de integración de recursos corresponden a comprobaciones todavía no realizadas; no indican que estén fallando los chequeos locales ya aprobados. No se crean proveedores, funcionalidades ni tareas ajenas al registro del sprint.

**Regla vigente:** desde ADS-02, todo `(ads)` utiliza exclusivamente WhatsApp. Las tareas de Formspree y Turnstile de este checklist corresponden al **Home, fuera de campañas**. El responsable confirmó el dominio de producción en Cloudflare; el error local `110200` está excluido y no constituye un bloqueo que deba corregirse para estas landings.

Marcar una casilla solo al disponer de evidencia, anotando fecha, entorno y referencia del resultado en el ítem o en el changelog. Cuando una condición no aplique, como subtítulos en un vídeo sin voz, dejar constancia del motivo. No marcar como entregados recursos que todavía son placeholders.

## Pendientes de Marketing y Negocio

### Multimedia real de las campañas

ADS-07 y ADS-08 actualizan los pendientes de REM-01, VIV-01 y SOL-01: los tres vídeos reales y sus miniaturas están integrados en `videoData` mediante URLs públicas de Vercel Blob. Vídeos y posters responden HTTP 200. ADS-08 resuelve los 404 de las miniaturas usando las URLs `.png` entregadas por el responsable; las tres imágenes se verificaron como PNG de 608 × 1080 px. Los avisos de preparación permanecen retirados de las tres campañas. Evidencias y alcance en [PROJECT_STATUS.md](./PROJECT_STATUS.md), entradas ADS-07 y ADS-08 del 2026-11-13.

- [x] **M01 — Vídeo de remodelación:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M02 — Poster de remodelación:** URL corregida a `remodelacion-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).
- [x] **M03 — Vídeo de viviendas nuevas:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M04 — Poster de viviendas nuevas:** URL corregida a `viviendas-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).
- [ ] **M05 — Subtítulos:** proporcionar las pistas correspondientes cuando cualquiera de los vídeos tenga voz.
- [x] **M15 — Vídeo solar:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M16 — Poster solar:** URL corregida a `solar-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), REM-01 «Antes de publicar», VIV-01 «Pendientes explícitos del equipo de marketing antes de publicar», ADS-02 «Pendientes de marketing conservados» y SOL-01 para los recursos solares.

### Copy, cifras, plazos y respaldo comercial

- [ ] **M06 — Experiencia en remodelación:** confirmar el número de renovaciones que reemplazará `[numero]` y aportar el respaldo de esa cifra.
- [ ] **M07 — Superficie de referencia:** confirmar o corregir `[100 m2]` en la objeción de recableado de remodelación. La referencia pendiente no debe presentarse como un límite del servicio sin confirmación del negocio.
- [ ] **M08 — Plazo de remodelación:** confirmar o corregir `[X días]` referido al tiempo de intervención, conforme al alcance que se ofrecerá.
- [ ] **M09 — Experiencia en viviendas nuevas:** confirmar la cantidad de `[número] viviendas instaladas` y su respaldo.
- [ ] **M10 — Plazo de presupuesto:** confirmar `[X días]` para entregar el presupuesto de viviendas nuevas; este plazo es distinto del tiempo de ejecución de una remodelación.
- [ ] **M11 — Prueba social y alcance ofrecido:** respaldar las afirmaciones comerciales de ambas campañas, incluida la prueba social de electricistas certificados SEC y el alcance de diseño, instalación y TE1, antes de dar por aprobado el copy definitivo.
- [ ] **M17 — Respaldo solar heredado:** confirmar las afirmaciones de ahorro, precio, garantías y plazos conservadas en la extracción de SOL-01, así como la procedencia de `/grid-pattern.webp` y `/paneles-1.webp`, `/paneles-2.webp`, `/paneles-3.webp` y su correspondencia con los casos publicados. La refactorización visual no acredita esos datos ni las fotografías.

`[comuna]` y `[años]` son campos intencionados de las plantillas de WhatsApp que completa el visitante. No son métricas pendientes de marketing ni deben sustituirse por una comuna o antigüedad fija para toda la campaña.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), REM-01 «Antes de publicar», VIV-01 «Pendientes explícitos del equipo de marketing antes de publicar» y ADS-02 «Pendientes de marketing conservados».

### Fotografías reales del Home

- [ ] **M12 — Galería:** sustituir las tres imágenes de Unsplash por fotografías reales de obras de Mr. Chispeza.
- [ ] **M13 — Banner:** entregar una fotografía real para reemplazar el fondo de banco de `BannerParallax`.
- [x] **M14 — Hero:** acreditar la procedencia de `/hero.webp`. Si no se puede confirmar como fotografía propia de una obra real, aportar un reemplazo verificable antes de presentar el Home como 100 % de obras reales.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), «Seguimiento 2026-11-05 — Preparación del Home para Ads», «Resultado de la preparación del Home» y cierre ADS-01. La existencia de un archivo local no acredita por sí sola su procedencia.

## Pendientes de Desarrollo y DevOps

### Integración de los recursos y del copy aprobados

- [ ] **D01 — Completar validación multimedia:** vídeos reales y posters de Vercel Blob integrados y disponibles por HTTP; los 404 de las miniaturas quedan resueltos en ADS-08. Avisos retirados en ADS-07. Incorporar subtítulos cuando corresponda y verificar reproducción real antes de cerrar esta casilla. Controles, `preload="none"` y ausencia de autoplay conservados.
- [ ] **D02 — Aplicar el copy confirmado:** reemplazar los marcadores comerciales de M06–M11 exclusivamente en las constantes y retirar sus notas de confirmación pendiente cuando exista respaldo. Conservar los campos intencionados de las plantillas de WhatsApp.
- [ ] **D03 — Integrar las fotos reales del Home:** actualizar las referencias de galería, banner y Hero con el material aprobado en M12–M14, respetando la separación de datos y UI. Comprobar imágenes optimizadas, dimensiones reservadas, tamaños responsive y ausencia de saltos atribuibles a la sustitución.
- [ ] **D04 — Validar la entrega definitiva:** después de incorporar recursos o copy, ejecutar `npm run typecheck`, `npm run lint` y `npm run build`; revisar responsive, contraste y CTAs con el material final. Adjuntar resultados al registro de entrega. Los tres comandos y el responsive de la base actual ya están aprobados en ADS-02; esta casilla corresponde a los cambios pendientes y a su despliegue final.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), backlog «Tarea 2», preparación del Home, REM-01, VIV-01, ADS-02 y resoluciones multimedia ADS-07/ADS-08. La disponibilidad de vídeos y posters fue comprobada; la reproducción y la validación multimedia completa siguen pendientes.

### Validación End-to-End en producción

- [ ] **D05 — Dominio y metadata finales:** verificar canonical y `openGraph.url` de cada ruta final contra el dominio de producción de `metadataBase`, junto con la existencia de las imágenes SEO. La comprobación local no acredita las variables del despliegue final ni permite publicar localhost como dominio.
- [ ] **D06 — Entradas de campaña:** comprobar en producción los enlaces del Home hacia las dos landings, sus respuestas 200 y los cuatro alias nativos 307 con preservación de parámetros UTM. Destinos de viviendas: `/instalacion-electrica-viviendas-nuevas`; destinos de remodelación: `/remodelacion-instalaciones`.
- [ ] **D07 — Recorrido completo de WhatsApp:** probar en producción los tres CTA de cada landing y el widget único, la selección Costa/Marga Marga, el paso por `/gracias?to=whatsapp&zone=…` y la apertura del destino de WhatsApp con el teléfono configurado y el mensaje exacto. Completar una prueba controlada de recepción antes de afirmar que se verificó una entrega real; las pruebas del sprint solo comprobaron apertura y construcción de enlaces.
- [ ] **D08 — Regla de contacto en el despliegue:** verificar que remodelación, viviendas y paneles solares siguen sin formularios, Turnstile o enlaces de email/teléfono; mantener el header y footer restrictivos y los tres CTA de contenido de cada una de las dos campañas. Confirmar también foco, Escape, consola y comportamiento móvil con los recursos finales.

Los cuatro alias documentados son `/proyectos-nuevos`, `/instalacion-electrica-casa-nueva`, `/remodelacion-instalaciones-antiguas` y `/remodelacion-electrica`. Ya funcionan localmente; esta lista no solicita recrearlos ni volver a introducir carpetas proxy.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), backlog «Tarea 2», ADS-01 (metadata y alias), REM-01/VIV-01 (contacto no verificado en el entorno final) y ADS-02 (pruebas locales y ausencia de recepción real).

### Formspree y Turnstile del Home, fuera de `(ads)`

- [ ] **D09 — Variables y dominio del entorno final:** comprobar en la configuración del despliegue final del Home `NEXT_PUBLIC_TURNSTILE_SITE_KEY` y `NEXT_PUBLIC_FORMSPREE_ID`, y que el formulario servido utiliza la configuración correspondiente. Conservar evidencia del dominio de producción autorizado en Cloudflare, cuya configuración ya fue confirmada por el responsable, sin publicar valores sensibles ni reabrir el error excluido de localhost.
- [ ] **D10 — Validación efectiva en Formspree:** verificar la activación y configuración de la integración nativa de Turnstile en Formspree. La auditoría local no verificó esa configuración externa; no basta con que aparezca el widget. Mantener una única validación del token, sin doble consumo.
- [ ] **D11 — Validación de campos en servidor:** completar las pruebas pendientes de entradas inválidas del formulario conforme al contrato existente, sin limitar la validación al navegador.
- [ ] **D12 — Rechazos y renovación de token:** probar token ausente, inválido y expirado, así como su renovación al reintentar, dejando evidencia de rechazo y recuperación.
- [ ] **D13 — Envío y errores del formulario:** completar una prueba controlada de recepción real en Formspree y navegación a `/gracias` solo después de la aceptación. Verificar fallo de red y reintentos sin simular éxito ni duplicar envíos.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), «Contacto, contenido y conversión», backlog «Tarea 2», aclaración autorizada del Turnstile local y ADS-02 (Home y backend fuera del grupo no modificados). Los nombres de variables y el reparto de validación se conservan del contrato de [AGENT.md, sección 5](./AGENT.md). Estas tareas no autorizan formularios en las sub-landings ni una nueva integración de contacto.

### Medición de conversiones en `/gracias`

- [ ] **D14 — Comprobar la medición existente en producción:** verificar el evento de contacto en el recorrido de WhatsApp y el recorrido de éxito del formulario del Home, según corresponda, sin conversiones duplicadas. Distinguir apertura de WhatsApp, mensaje recibido y formulario aceptado; una visita directa a `/gracias` no acredita por sí sola un lead. Registrar los resultados de las pruebas finales sin inventar IDs de seguimiento o proveedores.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), backlog «Tarea 2», REM-01 (semántica de apertura y prevención de repetición del evento), VIV-01 y ADS-02 (sin recepción real certificada); criterio de conversión vigente de [AGENT.md](./AGENT.md).

### Seguimiento de deuda heredada aún sin resolución documentada

Estas observaciones de la línea base se conservan con su alcance original; no reabren el desarrollo base ni los errores de lint ya resueltos.

- [ ] **D15 — Coherencia del stack y documentación:** documentar y reconciliar la discrepancia registrada entre arquitectura Next.js 15, manifiesto `^16.2.6`, lockfile 16.2.6, instalación inspeccionada 16.4.2 y `eslint-config-next` 15.5.4. Dejar explícita la decisión de compatibilidad antes de cambiar dependencias; no se prescribe una actualización o downgrade nuevo.
- [ ] **D16 — Bypass del chequeo de tipos:** documentar la propuesta de retirada de `typescript.ignoreBuildErrors: true` con evidencia. Mientras siga vigente, conservar el typecheck independiente como requisito; un build exitoso no lo sustituye.
- [ ] **D17 — Contenido comercial heredado:** cerrar con evidencia la observación inicial de datos incrustados en secciones, formularios y metadata fuera de los archivos ya saneados. Identificar lo que siga pendiente y extraerlo a `src/lib/constants/` donde corresponda, sin atribuir esa deuda a los componentes de campaña aceptados en ADS-02.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), sección «4. Deuda y bloqueos detectados en la línea base» y validaciones posteriores que mantienen las versiones y `ignoreBuildErrors`. El aviso del lockfile externo se conserva como observación de entorno que no impide compilar; no se convierte aquí en un bloqueo nuevo. LINT-01, las rutas proxy, los tipos generados obsoletos y la descarga de fuentes ya tienen resolución documentada y no forman parte de las casillas abiertas.
