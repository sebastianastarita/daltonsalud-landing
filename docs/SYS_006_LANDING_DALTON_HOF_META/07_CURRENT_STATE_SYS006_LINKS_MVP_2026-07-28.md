# CURRENT_STATE — SYS-006 / Micrositio de enlaces

**Fecha:** 2026-07-28

**Estado:** GO PROD autorizado; ejecución productiva en curso

**Sistema:** SYS-006 — Landing DALTON Salud y Bienestar

**Repositorio:** `sebastianastarita/daltonsalud-landing`

**Rama:** `agent/sys006-links-mvp`

**Base verificada:** `4ca2bb8`

**Revisión:** PR borrador `#1`

**Preview de rama:** `https://agent-sys006-links-mvp.daltonsalud-landing.pages.dev`

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

| Alias público | Destino |
| --- | --- |
| `/go/whatsapp` | WhatsApp vigente; luego se cambia al destino futuro |
| `/go/facebook` | `https://www.facebook.com/FarmaciaDalton/` |
| `/go/ubicacion` | `https://maps.app.goo.gl/cdVSPpRnP8yJEV7m7` |

## Límites de esta fase

No se modificaron Cloudflare, DNS, Instagram, Linktree ni producción. Esas acciones requieren un GO PROD explícito y una ventana de validación.
