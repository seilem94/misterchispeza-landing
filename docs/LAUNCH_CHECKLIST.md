# Checklist de lanzamiento — Mr. Chispeza

**Consolidación:** 2026-11-09, America/Santiago. **Actualización de cierre comercial:** 2026-11-14 (ADS-11/ADS-12 y registro de consolidación). **Base de desarrollo completada:** `a4f002f` (ADS-02), rama `feature/sublandings-remodelacion-viviendas-nuevas`. **Estado:** copy comercial, trazabilidad de WhatsApp, galerías reales y optimizaciones móviles de las campañas completados y validados localmente; se conservan los pendientes externos y de producción detallados más abajo.

Este documento separa los hitos completados de los pendientes de [PROJECT_STATUS.md](./PROJECT_STATUS.md), interpretando la línea base junto con sus resoluciones posteriores. Las casillas de producción corresponden a comprobaciones todavía no realizadas; no indican que estén fallando los chequeos locales ya aprobados. No se crean proveedores, funcionalidades ni tareas ajenas al registro del sprint.

**Regla vigente:** desde ADS-02, todo `(ads)` utiliza exclusivamente WhatsApp. Las tareas de Formspree y Turnstile de este checklist corresponden al **Home, fuera de campañas**. El responsable confirmó el dominio de producción en Cloudflare; el error local `110200` está excluido y no constituye un bloqueo que deba corregirse para estas landings.

Marcar una casilla solo al disponer de evidencia, anotando fecha, entorno y referencia del resultado en el ítem o en el changelog. Cuando una condición no aplique, como subtítulos en un vídeo sin voz, dejar constancia del motivo. No marcar como entregados recursos que todavía son placeholders.

## Completados

### Multimedia real de las campañas

ADS-07 y ADS-08 resuelven la entrega de vídeos y miniaturas de REM-01, VIV-01 y SOL-01 mediante URLs públicas de Vercel Blob, verificadas con HTTP 200. ADS-12 incorpora las galerías reales de remodelación y viviendas. Los avisos de preparación permanecen retirados de las tres campañas. Evidencias en [PROJECT_STATUS.md](./PROJECT_STATUS.md), registros ADS-07/ADS-08 y ADS-12.

- [x] **M01 — Vídeo de remodelación:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M02 — Poster de remodelación:** URL corregida a `remodelacion-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).
- [x] **M03 — Vídeo de viviendas nuevas:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M04 — Poster de viviendas nuevas:** URL corregida a `viviendas-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).
- [x] **M15 — Vídeo solar:** material real entregado e integrado desde Vercel Blob en `videoData.src`; HTTP 200 y `Content-Type: video/mp4` comprobados el 2026-11-13 (ADS-07).
- [x] **M16 — Poster solar:** URL corregida a `solar-poster.png` en Vercel Blob; HTTP 200, `Content-Type: image/png` e imagen válida comprobados el 2026-11-13 (ADS-08).
- [x] **M18 — Galería real de las sub-landings: COMPLETADA.** Dependencia bloqueante de entrega fotográfica de marketing cerrada el 2026-11-14. Seis fotografías reales `.webp` de Vercel Blob, tres por campaña, integradas con `next/image`, captions de comunas exactos y carga responsive. Originales y variantes optimizadas comprobados con HTTP 200, y seis fotos cargadas en navegador. Evidencia: ADS-12, commit `fc4580e`. Este cierre corresponde a las galerías de campañas; M12/M13 mantienen el alcance del Home.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), REM-01 «Antes de publicar», VIV-01 «Pendientes explícitos del equipo de marketing antes de publicar», ADS-02 «Pendientes de marketing conservados» y SOL-01 para los recursos solares.

### Copy comercial final y mensajes de WhatsApp

- [x] **M06 — Experiencia en remodelación:** retirada la cifra `[numero]` y su nota por instrucción de marketing el 2026-11-14 (ADS-11). No se sustituye por una métrica inventada ni se acredita una cantidad de obras.
- [x] **M07 — Superficie de referencia:** retirado `[100 m2]` al aplicar la respuesta aprobada de recableado el 2026-11-14 (ADS-11). No se publica un límite de superficie.
- [x] **M08 — Plazo de remodelación:** marketing proporciona el 2026-11-14 el copy «típicamente en 4 días, dependiendo de la envergadura del proyecto» y la respuesta «usualmente máximo 4 días» (ADS-11). Copy implementado por autorización del responsable; no es una medición independiente del agente.
- [x] **M09 — Experiencia en viviendas nuevas:** retirada la referencia `[número] viviendas instaladas` y su nota el 2026-11-14 (ADS-11), sin publicar una cifra sustituta.
- [x] **M10 — Plazo de presupuesto:** aplicado «Presupuesto detallado en menos de 3 días» aprobado por marketing el 2026-11-14 (ADS-11). La ejecución se comunica aparte como «entre 4 y 10 días, dependiendo de la envergadura y tamaño de la instalación».
- [x] **D02 — Copy comercial implementado:** feedback final de marketing aplicado en constantes, cifras y notas retiradas, tono empático, plazos aprobados y mensajes de WhatsApp abiertos para capturar la comuna. Comprobaciones locales y trazabilidad en ADS-11, commit `8bd98a8`; este cierre registra la implementación y aprobación del feedback, conservando el respaldo documental de certificaciones en M11.

Desde ADS-11, las plantillas de WhatsApp de remodelación y viviendas terminan en «comuna de » para que el visitante complete su ubicación; se retiraron los marcadores `[comuna]` y `[años]`. No añadir una comuna fija ni perder el espacio final al normalizar o codificar el mensaje.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), ADS-11 de Fase 1 (`8bd98a8`) y consolidación del feedback final del 2026-11-14. Los registros de REM-01/VIV-01 y ADS-02 se conservan como antecedentes inmutables.

### Trazabilidad y optimizaciones móviles

- [x] **C01 — Trazabilidad de WhatsApp implementada:** lectura de ruta con `usePathname()` y parámetro `servicio=remodelacion`, `casa-nueva` o `solar` en `/gracias` para ambas zonas; Home sin atribución de campaña. Mensajes exactos y espacio final conservados. Validación local en ADS-11/ADS-12, commits `8bd98a8` y `fc4580e`. La comprobación del evento y la segmentación en Google Analytics en producción se conserva en D14.
- [x] **C02 — Optimizaciones móviles y UI/UX implementadas:** 21 tarjetas compactas con icono izquierdo, CTA intermedio adicional, viewport compartido de Motion, movimiento reducido conservado, aislamiento GPU/WebKit del vídeo 9:16 y footer con `pb-24 lg:pb-8`. ADS-12, commit `fc4580e`: 27 combinaciones responsive sin desbordamientos y 12 accesos de contacto comprobados; footer sin superposición con WhatsApp. El workaround está aplicado; su validación en el hardware HDR afectado conserva el límite registrado en ADS-10/ADS-12.

### Hero del Home ya acreditado

- [x] **M14 — Hero:** acreditar la procedencia de `/hero.webp`. Si no se puede confirmar como fotografía propia de una obra real, aportar un reemplazo verificable antes de presentar el Home como 100 % de obras reales.

## Pendientes de Marketing y Negocio

### Subtítulos y respaldo comercial restante

- [ ] **M05 — Subtítulos:** proporcionar las pistas correspondientes cuando cualquiera de los vídeos tenga voz.
- [ ] **M11 — Respaldo de certificaciones y alcance:** conservar evidencia de las afirmaciones de electricistas certificados SEC y del alcance de diseño, instalación y TE1. La implementación del copy final y la entrega de las galerías ya constan en «Completados»; este ítem mantiene únicamente el respaldo comercial documental pendiente.
- [ ] **M17 — Respaldo solar heredado:** confirmar las afirmaciones de ahorro, precio, garantías y plazos conservadas en la extracción de SOL-01, así como la procedencia de `/grid-pattern.webp` y `/paneles-1.webp`, `/paneles-2.webp`, `/paneles-3.webp` y su correspondencia con los casos publicados. La refactorización visual no acredita esos datos ni las fotografías.

### Fotografías reales del Home

- [ ] **M12 — Galería:** sustituir las tres imágenes de Unsplash por fotografías reales de obras de Mr. Chispeza.
- [ ] **M13 — Banner:** entregar una fotografía real para reemplazar el fondo de banco de `BannerParallax`.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), «Seguimiento 2026-11-05 — Preparación del Home para Ads», «Resultado de la preparación del Home» y cierre ADS-01. La existencia de un archivo local no acredita por sí sola su procedencia.

## Pendientes de Desarrollo y DevOps

### Integración de los recursos y del copy aprobados

- [ ] **D01 — Completar validación multimedia:** vídeos reales y posters de Vercel Blob integrados y disponibles por HTTP; los 404 de las miniaturas quedan resueltos en ADS-08. Avisos retirados en ADS-07. ADS-09 comprueba reproducción real de los tres vídeos mediante interacción en producción local, con silencio inicial, marco 9:16, controles, `playsInline`, `preload="none"` y sin autoplay. Incorporar subtítulos cuando corresponda antes de cerrar esta casilla.
- [ ] **D03 — Integrar las fotos reales del Home:** actualizar las referencias de galería, banner y Hero con el material aprobado en M12–M14, respetando la separación de datos y UI. Comprobar imágenes optimizadas, dimensiones reservadas, tamaños responsive y ausencia de saltos atribuibles a la sustitución.
- [ ] **D04 — Validar la entrega en el entorno final:** repetir las comprobaciones de responsive, contraste y CTAs en el despliegue definitivo. Typecheck, lint, build y responsive locales de Copy/UI ya están aprobados en ADS-11/ADS-12; esta casilla conserva únicamente la validación del entorno final, sin reabrir los hitos completados.

**Trazabilidad:** [PROJECT_STATUS.md](./PROJECT_STATUS.md), backlog «Tarea 2», preparación del Home, REM-01, VIV-01, ADS-02 y resoluciones multimedia ADS-07/ADS-08/ADS-09. Disponibilidad de vídeos/posters y reproducción local comprobadas; subtítulos cuando correspondan y validación final en producción pendientes.

### Validación End-to-End en producción

- [ ] **D05 — Dominio y metadata finales:** verificar canonical y `openGraph.url` de cada ruta final contra el dominio de producción de `metadataBase`, junto con la existencia de las imágenes SEO. La comprobación local no acredita las variables del despliegue final ni permite publicar localhost como dominio.
- [ ] **D06 — Entradas de campaña:** comprobar en producción los enlaces del Home hacia las dos landings, sus respuestas 200 y los cuatro alias nativos 307 con preservación de parámetros UTM. Destinos de viviendas: `/instalacion-electrica-viviendas-nuevas`; destinos de remodelación: `/remodelacion-instalaciones`.
- [ ] **D07 — Recorrido completo de WhatsApp:** probar en producción los tres CTA de cada landing y el widget único, la selección Costa/Marga Marga, el paso por `/gracias?to=whatsapp&zone=…&servicio=…` y la apertura del destino de WhatsApp con el teléfono configurado y el mensaje exacto. ADS-11 comprueba localmente el parámetro `servicio` (`remodelacion`, `casa-nueva`, `solar`) y su ausencia en el Home. Completar una prueba controlada de recepción antes de afirmar que se verificó una entrega real; las pruebas del sprint solo comprobaron apertura y construcción de enlaces.
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
