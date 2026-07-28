# CURRENT_STATE — SYS-006 / Micrositio de enlaces

**Fecha:** 2026-07-28

**Estado:** Candidato no productivo

**Sistema:** SYS-006 — Landing DALTON Salud y Bienestar

**Repositorio:** `sebastianastarita/daltonsalud-landing`

**Rama:** `agent/sys006-links-mvp`

**Base verificada:** `4ca2bb8`

**Revisión:** PR borrador `#1`

**Preview de rama:** `https://agent-sys006-links-mvp.daltonsalud-landing.pages.dev`

## Decisión

**GO para MVP fast-track sobre SYS-006.**

**NO GO para crear un Apps Script, una Google Sheet o un proyecto GCP adicional.**

La solución reutiliza la landing estática publicada en Cloudflare Pages y agrega:

- micrositio mobile-first en `https://daltonsalud.com/links/`;
- alias estables bajo `https://daltonsalud.com/go/<destino>`;
- destinos administrados como redirecciones temporales `302` en Cloudflare.

## Alcance implementado en la rama

- Página `/links/` con cinco destinos: WhatsApp, Facebook, Farmaonline, GPSFarma y ubicación.
- Sustitución de los enlaces directos de WhatsApp de la home y de `/trabaja-con-nosotros/` por `/go/whatsapp`.
- Identidad visual reutilizada del sitio institucional.
- Sin analytics, cookies, formularios, panel administrativo ni datos personales.

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
| `/go/farmaonline` | `https://www.farmaonline.com/` |
| `/go/gpsfarma` | `https://gpsfarma.com/` |
| `/go/ubicacion` | `https://maps.app.goo.gl/cdVSPpRnP8yJEV7m7` |

## Límites de esta fase

No se modificaron Cloudflare, DNS, Instagram, Linktree ni producción. Esas acciones requieren un GO PROD explícito y una ventana de validación.
