# Arquitectura Técnica — SYS-006

## Arquitectura general

Sistema estático de una sola página (SPA-like por navegación interna anclada) con una subpágina institucional, sin capa de aplicación compleja.

## Flujo de publicación

`GitHub (repo)` → `Cloudflare Pages (build/deploy automático)` → `daltonsalud.com`

## Naturaleza técnica

- HTML y CSS estático.
- Sin WordPress.
- Sin backend propio.
- Sin base de datos.
- Sin CMS.
- Sin servicios de servidor adicionales para render.

## Infraestructura

- **DNS:** Cloudflare DNS
- **Hosting:** Cloudflare Pages
- **CDN/SSL:** gestionado por Cloudflare

## Middleware de redirección

- `functions/_middleware.js` en Pages.
- Redirige `www.daltonsalud.com` al host canónico `daltonsalud.com` con HTTP 301.
- Conserva path y querystring.

## Dominio canónico

- Dominio principal definido como `https://daltonsalud.com`.
- Canonical tag en HTML apuntando a dominio apex.

## SEO técnico

- `robots.txt` con política pública de indexación.
- `sitemap.xml` con URLs públicas conocidas.
- Meta etiquetas OG/Twitter.
- `schema.org` LocalBusiness con datos de negocio.

## Assets de marca

- Logos y isótopos oficiales en `/assets/logo`.
- Favicons oficiales en `/assets/icons`.
- Sin cambios de identidad visual en implementaciones siguientes sin aprobación de marca.

## Assets de imagen institucional

- `/assets/img/farmacia-dalton-frente.webp`
- `/assets/img/farmacia-dalton-frente-small.webp`
- `/assets/img/og-dalton-frente.jpg`

Uso:

- Hero principal (desktop y mobile con `picture`/`srcset`).
- Open Graph y Twitter Card.

Criterio técnico:

- Imagen principal en formato WebP para rendimiento en hero.
- JPG para Open Graph/social.
- `object-fit: cover` aplicado en el bloque hero.
- Alt text: `Fachada de Farmacia Dalton en La Plata`.

## Relación con Meta / WhatsApp API

- WhatsApp expuesto vía enlace `wa.me` en UI.
- Meta (Open Graph) configurado para social preview en la home y en la ruta de reclutamiento.

## Relación con SYS-005 (Selección)

- La subpágina `/trabaja-con-nosotros/` funciona como canal público de difusión.
- No reemplaza ni integra dinámicamente SYS-005 (Google Form + Google Sheets).
- Mantiene un texto de aclaración de procesamiento interno para alinear el flujo operativo existente.
