# SYS-006 · Landing Institucional Dalton / Web HOF-Meta

## Identificación

- **Nombre del sistema:** Landing Institucional Dalton / Web HOF-Meta  
- **ID documental:** `SYS-006`  
- **Estado:** `PRODUCCIÓN`  
- **Fecha de cierre:** `30/06/2026`  

## Objetivo general

Implementar y consolidar una landing institucional estática para `daltonsalud.com` con identidad visual oficial de DALTON, redirección canónica de dominio, SEO técnico básico y subpágina institucional de reclutamiento, manteniendo una operación liviana y de bajo mantenimiento.

## Alcance funcional

- Landing institucional principal con secciones funcionales de servicios, envíos y contacto.
- Reemplazo de assets provisorios por branding oficial.
- Integración de foto institucional real de fachada en el hero principal.
- Assets de imagen institucional:
  - `/assets/img/farmacia-dalton-frente.webp`
  - `/assets/img/farmacia-dalton-frente-small.webp`
  - `/assets/img/og-dalton-frente.jpg`
- Canonicalización y redirección de dominio canónico.
- SEO técnico inicial (metadatos, robots, sitemap, schema.org).
- Página institucional de reclutamiento en `/trabaja-con-nosotros/`.
- Ajuste de navegación por anclas y consistencia visual.

## URLs productivas

- `https://daltonsalud.com` (canónica)
- `https://daltonsalud.com/trabaja-con-nosotros/` (subpágina de reclutamiento)

## Repositorio

- `https://github.com/sebastianastarita/daltonsalud-landing`

## Plataforma de hosting

- Cloudflare Pages

## Dominio

- Dominio canónico: `https://daltonsalud.com`
- Canonical URL definida en HTML de la home y aplicado a nivel de despliegue.

## DNS

- Cloudflare DNS administrando el dominio `daltonsalud.com`.

## Email Routing

- Cuentas activas de contacto y recepción configuradas en dominio.

## SEO

- `robots.txt` público con `Allow: /` y referencia a sitemap.
- `sitemap.xml` con URL base y página de reclutamiento.
- Meta title y description de la home.
- Open Graph y Twitter Card.
- `schema.org` con `LocalBusiness`.

## Página de reclutamiento

- Implementada como sección independiente para RRHH sin impacto estructural de la home.
- URL: `https://daltonsalud.com/trabaja-con-nosotros/`
- Contenido principal preparado para gestión de búsquedas abiertas y mantenimiento.

## Estado final

- ✅ Landing institucional en producción.
- ✅ Dominio canónico y redirección operativa.
- ✅ SEO técnico operativo.
- ✅ Subpágina de reclutamiento habilitada.
- ✅ Documentación técnica preparada para handover.

## Próximos pasos recomendados

1. Definir procedimiento de actualización de contenidos por responsable funcional y técnico.
2. Cerrar y abrir búsquedas de reclutamiento mediante cambios simples en HTML.
3. Revisar periódicamente `sitemap.xml` cuando se agreguen nuevas rutas.
4. Mantener validación mensual de canonical, redirecciones y links funcionales críticos.
5. Coordinar con RRHH para que el bloque de reclutamiento refleje estado real.
6. Pendiente eventual: reemplazar la foto del hero si hay producciÃ³n fotogrÃ¡fica profesional futura; no bloquea el cierre actual.
