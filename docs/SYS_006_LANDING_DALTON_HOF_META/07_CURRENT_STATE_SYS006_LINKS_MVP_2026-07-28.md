# CURRENT_STATE — SYS-006 / Micrositio de enlaces

**Fecha:** 2026-07-28

**Estado:** PROD activo y validado

**Sistema:** SYS-006 — Landing DALTON Salud y Bienestar

**Repositorio:** `sebastianastarita/daltonsalud-landing`

**Rama productiva:** `main`

**Commit productivo:** `1f29bdc`

**Revisión:** PR `#1`, fusionado

**URL productiva:** `https://daltonsalud.com/links/`

## Autorización productiva

**GO PROD SYS-006 Links recibido:** 2026-07-28 19:41 ART

Alcance autorizado:

- fusionar el PR `#1` en `main`;
- desplegar `/links/` en `daltonsalud.com`;
- crear y activar los alias `302` de WhatsApp vigente, Facebook y Google Maps;
- validar y documentar producción.

Fuera de alcance:

- activar el número futuro de WhatsApp;
- modificar la bio de Instagram.

## Decisión

**GO para MVP fast-track sobre SYS-006.**

**NO GO para crear un Apps Script, una Google Sheet o un proyecto GCP adicional.**

La solución reutiliza la landing estática publicada en Cloudflare Pages y agrega:

- micrositio mobile-first en `https://daltonsalud.com/links/`;
- alias estables bajo `https://daltonsalud.com/go/<destino>`;
- destinos administrados como redirecciones temporales `302` en Cloudflare.

## Alcance implementado en la rama

- Página `/links/` con tres destinos: WhatsApp, Facebook y ubicación.
- Sustitución de los enlaces directos de WhatsApp de la home y de `/trabaja-con-nosotros/` por `/go/whatsapp`.
- Diseño mobile-first tipo bento: WhatsApp como acción principal y ubicación/Facebook como tarjetas secundarias.
- Identidad visual reutilizada del sitio institucional y eslogan vigente en redes: “Cerca cuando importa”.
- Sin analytics, cookies, formularios, panel administrativo ni datos personales.

## Decisión comercial sobre marketplaces

Farmaonline y GPSFarma se retiraron del MVP por autorización explícita. Sus enlaces genéricos permiten elegir distintas farmacias y no garantizan que el tráfico, la venta o la atribución comercial queden en Dalton.

Una futura opción “Comprar online” sólo debe habilitarse mediante el alias `/go/comprar` cuando exista un enlace específico o una condición verificable que identifique a Dalton, junto con condiciones económicas, operativas y de medición aprobadas.

## Estado de WhatsApp

- **Destino vigente a conservar hasta la migración:** `https://wa.me/message/7PZQOH5C4FUDJ1`
- **Número futuro informado:** `+54 9 221 656-2222`
- **Número normalizado para WhatsApp:** `5492216562222`
- **Destino futuro preparado, todavía inactivo:**

  `https://wa.me/5492216562222?text=Hola%2C%20quiero%20hacer%20una%20consulta%20a%20Farmacia%20Dalton.`

Debmedia no requiere una URL especial: los mensajes ingresan por la API de WhatsApp. La redirección sólo debe abrir la conversación en el número activo.

## Destinos externos confirmados

| Alias público | Estado | Destino validado |
| --- | --- | --- |
| `/go/whatsapp` | `302`, activo | `https://wa.me/message/7PZQOH5C4FUDJ1` |
| `/go/facebook` | `302`, activo | `https://www.facebook.com/FarmaciaDalton/` |
| `/go/ubicacion` | `302`, activo | `https://maps.app.goo.gl/cdVSPpRnP8yJEV7m7` |

Validación externa completada el 2026-07-28 entre 19:59 y 20:00 ART.

## Límites vigentes

- No se modificó DNS.
- No se modificó la bio de Instagram.
- No se activó el número futuro de WhatsApp.
- La herramienta anterior debe conservarse durante la observación definida como mecanismo de rollback.

## Cierre documental institucional

- Carpeta Drive SYS-006: `1HMl3b7CpNcjp1gSnhWoEIMqcwjhhEojO`.
- CURRENT_STATE: `1HA8YfGPHPlXGemAE_MrXIdlQ4NZ_ffO1`.
- WORK_PACKAGE: `1733wqDKYPnfDaC1KbdLZuG6qPQJsCfjP`.
- PHASE_LOG_AND_HANDOFF: `1aXQZHjPv7GyyexpMgjediZ4HuNW-qD0_`.
- Historial `03_CAMBIOS_Y_COMMITS_SYS006.md` actualizado en el archivo existente `1vkqCSjtH_MQDlqA8jkamrvpHPOREW8wv`.
- Índice maestro `00_INDICE_MAESTRO_SISTEMAS`, hoja `SISTEMAS`, fila 7: actualizado y verificado.
- PR documental de cierre: `#2`.
