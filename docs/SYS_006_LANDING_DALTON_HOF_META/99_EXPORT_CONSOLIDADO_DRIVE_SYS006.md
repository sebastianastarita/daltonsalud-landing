---
# DOCUMENTO 1 — SYS-006 Â· Landing Institucional Dalton / Web HOF-Meta

# SYS-006 Â· Landing Institucional Dalton / Web HOF-Meta

## IdentificaciÃ³n

- **Nombre del sistema:** Landing Institucional Dalton / Web HOF-Meta  
- **ID documental:** `SYS-006`  
- **Estado:** `PRODUCCIÃ“N`  
- **Fecha de cierre:** `30/06/2026`  

## Objetivo general

Implementar y consolidar una landing institucional estÃ¡tica para `daltonsalud.com` con identidad visual oficial de DALTON, redirecciÃ³n canÃ³nica de dominio, SEO tÃ©cnico bÃ¡sico y subpÃ¡gina institucional de reclutamiento, manteniendo una operaciÃ³n liviana y de bajo mantenimiento.

## Alcance funcional

- Landing institucional principal con secciones funcionales de servicios, envÃ­os y contacto.
- Reemplazo de assets provisorios por branding oficial.
- IntegraciÃ³n de foto institucional real de fachada en el hero principal.
- Assets de imagen institucional:
  - `/assets/img/farmacia-dalton-frente.webp`
  - `/assets/img/farmacia-dalton-frente-small.webp`
  - `/assets/img/og-dalton-frente.jpg`
- CanonicalizaciÃ³n y redirecciÃ³n de dominio canÃ³nico.
- SEO tÃ©cnico inicial (metadatos, robots, sitemap, schema.org).
- PÃ¡gina institucional de reclutamiento en `/trabaja-con-nosotros/`.
- Ajuste de navegaciÃ³n por anclas y consistencia visual.

## URLs productivas

- `https://daltonsalud.com` (canÃ³nica)
- `https://daltonsalud.com/trabaja-con-nosotros/` (subpÃ¡gina de reclutamiento)

## Repositorio

- `https://github.com/sebastianastarita/daltonsalud-landing`

## Plataforma de hosting

- Cloudflare Pages

## Dominio

- Dominio canÃ³nico: `https://daltonsalud.com`
- Canonical URL definida en HTML de la home y aplicado a nivel de despliegue.

## DNS

- Cloudflare DNS administrando el dominio `daltonsalud.com`.

## Email Routing

- Cuentas activas de contacto y recepciÃ³n configuradas en dominio.

## SEO

- `robots.txt` pÃºblico con `Allow: /` y referencia a sitemap.
- `sitemap.xml` con URL base y pÃ¡gina de reclutamiento.
- Meta title y description de la home.
- Open Graph y Twitter Card.
- `schema.org` con `LocalBusiness`.

## PÃ¡gina de reclutamiento

- Implementada como secciÃ³n independiente para RRHH sin impacto estructural de la home.
- URL: `https://daltonsalud.com/trabaja-con-nosotros/`
- Contenido principal preparado para gestiÃ³n de bÃºsquedas abiertas y mantenimiento.

## Estado final

- âœ… Landing institucional en producciÃ³n.
- âœ… Dominio canÃ³nico y redirecciÃ³n operativa.
- âœ… SEO tÃ©cnico operativo.
- âœ… SubpÃ¡gina de reclutamiento habilitada.
- âœ… DocumentaciÃ³n tÃ©cnica preparada para handover.

## PrÃ³ximos pasos recomendados

1. Definir procedimiento de actualizaciÃ³n de contenidos por responsable funcional y tÃ©cnico.
2. Cerrar y abrir bÃºsquedas de reclutamiento mediante cambios simples en HTML.
3. Revisar periÃ³dicamente `sitemap.xml` cuando se agreguen nuevas rutas.
4. Mantener validaciÃ³n mensual de canonical, redirecciones y links funcionales crÃ­ticos.
5. Coordinar con RRHH para que el bloque de reclutamiento refleje estado real.
6. Pendiente eventual: reemplazar la foto del hero si hay producciÃƒÂ³n fotogrÃƒÂ¡fica profesional futura; no bloquea el cierre actual.

---
# DOCUMENTO 2 — Arquitectura TÃ©cnica â€” SYS-006

# Arquitectura TÃ©cnica â€” SYS-006

## Arquitectura general

Sistema estÃ¡tico de una sola pÃ¡gina (SPA-like por navegaciÃ³n interna anclada) con una subpÃ¡gina institucional, sin capa de aplicaciÃ³n compleja.

## Flujo de publicaciÃ³n

`GitHub (repo)` â†’ `Cloudflare Pages (build/deploy automÃ¡tico)` â†’ `daltonsalud.com`

## Naturaleza tÃ©cnica

- HTML y CSS estÃ¡tico.
- Sin WordPress.
- Sin backend propio.
- Sin base de datos.
- Sin CMS.
- Sin servicios de servidor adicionales para render.

## Infraestructura

- **DNS:** Cloudflare DNS
- **Hosting:** Cloudflare Pages
- **CDN/SSL:** gestionado por Cloudflare

## Middleware de redirecciÃ³n

- `functions/_middleware.js` en Pages.
- Redirige `www.daltonsalud.com` al host canÃ³nico `daltonsalud.com` con HTTP 301.
- Conserva path y querystring.

## Dominio canÃ³nico

- Dominio principal definido como `https://daltonsalud.com`.
- Canonical tag en HTML apuntando a dominio apex.

## SEO tÃ©cnico

- `robots.txt` con polÃ­tica pÃºblica de indexaciÃ³n.
- `sitemap.xml` con URLs pÃºblicas conocidas.
- Meta etiquetas OG/Twitter.
- `schema.org` LocalBusiness con datos de negocio.

## Assets de marca

- Logos y isÃ³topos oficiales en `/assets/logo`.
- Favicons oficiales en `/assets/icons`.
- Sin cambios de identidad visual en implementaciones siguientes sin aprobaciÃ³n de marca.

## Assets de imagen institucional

- `/assets/img/farmacia-dalton-frente.webp`
- `/assets/img/farmacia-dalton-frente-small.webp`
- `/assets/img/og-dalton-frente.jpg`

Uso:

- Hero principal (desktop y mobile con `picture`/`srcset`).
- Open Graph y Twitter Card.

Criterio tÃ©cnico:

- Imagen principal en formato WebP para rendimiento en hero.
- JPG para Open Graph/social.
- `object-fit: cover` aplicado en el bloque hero.
- Alt text: `Fachada de Farmacia Dalton en La Plata`.

## RelaciÃ³n con Meta / WhatsApp API

- WhatsApp expuesto vÃ­a enlace `wa.me` en UI.
- Meta (Open Graph) configurado para social preview en la home y en la ruta de reclutamiento.

## RelaciÃ³n con SYS-005 (SelecciÃ³n)

- La subpÃ¡gina `/trabaja-con-nosotros/` funciona como canal pÃºblico de difusiÃ³n.
- No reemplaza ni integra dinÃ¡micamente SYS-005 (Google Form + Google Sheets).
- Mantiene un texto de aclaraciÃ³n de procesamiento interno para alinear el flujo operativo existente.

---
# DOCUMENTO 3 — Runbook Operativo â€” SYS-006

# Runbook Operativo â€” SYS-006

## Alcance

Este documento define operaciones cotidianas sin tocar backend, ni cambios de infraestructura.

## 1) Modificar textos de la home

1. Abrir `index.html` en una rama o directamente `main`.
2. Editar textos en las secciones:
   - Hero
   - Servicios principales
   - EnvÃ­os
   - SecciÃ³n de contacto
   - Aviso institucional
3. Mantener jerarquÃ­a semÃ¡ntica (`h1`, `h2`, etc.).
4. Publicar y validar render en pÃ¡gina.

## 2) Modificar datos de contacto

1. En `index.html`, ubicar la secciÃ³n `#contacto`.
2. Editar campos visibles en tarjetas de direcciÃ³n, WhatsApp, email, telÃ©fono y redes.
3. Verificar formato `mailto:` y `tel:` donde corresponda.

## 3) Modificar WhatsApp

1. En `index.html`, buscar enlaces con clase `js-whatsapp-link`.
2. Reemplazar `href` por el nÃºmero/formato nuevo (`https://wa.me/<codigo>`).
3. Verificar en:
   - Header
   - Hero
   - SecciÃ³n de ayuda

## 4) Modificar bÃºsqueda activa (reclutamiento)

1. Abrir `trabaja-con-nosotros/index.html`.
2. En secciÃ³n `#busquedas` editar bloques `.job-open`:
   - `Puesto`
   - `Sector`
   - `Horario`
   - `CondiciÃ³n relevante`
   - `UbicaciÃ³n`
3. Actualizar botÃ³n `Postularme` con nuevo link de Google Form si aplica.

## 6) Cerrar bÃºsqueda activa y mostrar estado sin bÃºsquedas

1. En `trabaja-con-nosotros/index.html`, localizar bloques:
   - `.job-open`
   - `.job-empty`
2. Para cerrar la bÃºsqueda visible:
   - Cambiar a `display: none` el bloque `.job-open` (por ediciÃ³n manual del HTML).
   - Quitar ocultamiento de `.job-empty`.
3. Ojo: existe comentario de mantenimiento en la secciÃ³n indicando:
   - `Para cerrar la bÃºsqueda activa, ocultar el bloque .job-open y mostrar el bloque .job-empty`

## 5) Modificar foto principal del hero

1. Reemplazar archivos en `assets/img` si corresponde:
   - `/assets/img/farmacia-dalton-frente.webp`
   - `/assets/img/farmacia-dalton-frente-small.webp`
   - `/assets/img/og-dalton-frente.jpg`

2. Mantener nombres de archivo para evitar cambios innecesarios en `index.html`.

3. Si cambian nombres, actualizar:
   - `index.html` (hero visual y `srcset`).
   - `og:image`
   - `twitter:image`

4. Verificar:
   - desktop
   - mobile
   - que la imagen ocupa todo el bloque visual del hero
   - que no se vea como thumbnail
   - `Content-Type` de assets:
     - `image/webp` para `farmacia-dalton-frente.webp` y `farmacia-dalton-frente-small.webp`
     - `image/jpeg` para `og-dalton-frente.jpg`

## 7) Publicar cambios

1. Guardar cambios y validar visualmente en local.
2. `git add` y `git commit`.
3. `git push origin main`.
4. Confirmar deploy en Cloudflare Pages.

## 8) Verificar deploy en Cloudflare Pages

1. Entrar a Pages â†’ proyecto del sitio.
2. Confirmar que el Ãºltimo commit estÃ© en estado `success`.
3. Abrir:
   - `https://daltonsalud.com`
   - `https://daltonsalud.com/trabaja-con-nosotros/`
4. Confirmar carga 200.

## 9) Verificar redirecciÃ³n de www

1. Verificar `https://www.daltonsalud.com` responde 301.
2. Confirmar Location final en `https://daltonsalud.com`.
3. Opcional: probar rutas arbitrarias y querystring.

## 10) Verificar robots y sitemap

1. Abrir `https://daltonsalud.com/robots.txt` y validar contenido.
2. Abrir `https://daltonsalud.com/sitemap.xml` y validar URLs.
3. Tras cambios de URL incluir/ajustar ruta en `sitemap.xml` y volver a publicar.

## 11) Rollback bÃ¡sico

- **GitHub revert:** identificar commit con error, ejecutar `git revert <hash>` y pushear a `main`.
- **Cloudflare Pages rollback:** desde panel de despliegues, restaurar versiÃ³n previa estable si hace falta.

## Checklist post-deploy

- [ ] Landing responde 200 en dominio canÃ³nico.
- [ ] `www` redirige 301 al canÃ³nico.
- [ ] Enlaces crÃ­ticos visibles y funcionales.
- [ ] Favicon cargando correctamente.
- [ ] Reclutamiento accesible y botÃ³n `Postularme` en nueva pestaÃ±a.
- [ ] `mailto:` y `tel:` funcionales donde correspondan.
- [ ] `sitemap.xml` actualizado.

---
# DOCUMENTO 4 — Cambios y commits â€” SYS-006

# Cambios y commits â€” SYS-006

## Historial principal de implementaciÃ³n

| Hash | Mensaje | Finalidad | Impacto |
| --- | --- | --- | --- |
| `abf9013` | Implement Dalton landing V0.1 | ImplementaciÃ³n inicial de landing institucional | LevantÃ³ la estructura base del sitio y secciones principales |
| `ca3e06d` | Replace provisional assets with official Dalton SVGs | SustituciÃ³n de imÃ¡genes y logos provisionales por activos oficiales | AlineaciÃ³n de branding con identidad Dalton |
| `83f3faf` | Refine Dalton landing typography and desktop layout | Ajustes de tipografÃ­a y composiciÃ³n desktop | Mejora visual y jerarquÃ­a de textos |
| `2665c2f` | Implement canonical domain and technical SEO | DefiniciÃ³n de meta tags canÃ³nicos y SEO base | Canonical, title/description y estructura base SEO |
| `040ea93` | Add canonical host redirect middleware | Middleware de redirecciÃ³n canÃ³nica para host | RedirecciÃ³n de `www` al dominio principal |
| `1806e10` | Refine services section with editorial mobile layout | Mejora de secciÃ³n de servicios en mobile | Lista editorial mÃ¡s compacta y legible |
| `c581379` | Refine services editorial list sizing | Ajustes de escala y espaciado servicios | Refinamiento de altura y densidad visual |
| `72961b6` | Further compact services editorial list | CompactaciÃ³n adicional en versiÃ³n mobile | Mejora de densidad por viewport |
| `83b0cb2` | Refine mobile services heading scale | Ajuste de encabezado de servicios en mobile | Escala armÃ³nica para jerarquÃ­a y continuidad |
| `57107c9` | Add recruitment page | ImplementaciÃ³n subpÃ¡gina `/trabaja-con-nosotros/` | Canal pÃºblico de reclutamiento y vÃ­nculo desde home |
| 60fc8c9 | Fix recruitment postulaciÃ³n text | Corrección textual de acentuación | Ajuste redacción y calidad editorial |
| `8a31974` | Add technical documentation for landing system | Creación de documentación técnica de cierre SYS-006 | Deja preparado el paquete documental para Drive e índice maestro |
| `99f4fa0` | Add Dalton storefront photo to hero | Integración de foto real de fachada en el hero principal | Reemplaza isotipo provisorio por imagen institucional del local y actualiza Open Graph |
| `cdbb65f` | Fix hero storefront photo sizing | Corrección de estilos para que la foto ocupe correctamente el bloque visual del hero | Evita renderizado tipo thumbnail y consolida imagen real como pieza principal del hero |

## Cambios relevantes adicionales en lÃ­nea de continuidad

| Hash | Mensaje | Finalidad | Impacto |
| --- | --- | --- | --- |
| `9674713` | Reorganize contact and footer sections | Ajuste de orden y bloque de contacto | Mejora de estructura de contenidos institucionales |
| `2882b8c` | Add institutional contact details and footer credits | InclusiÃ³n de datos de contacto y crÃ©ditos | IncorporÃ³ correo y telÃ©fono en contacto + footer |
| `a909563` | Add institutional contact details and footer credits | Ajuste final de bloques de contacto y footer | ConsolidaciÃ³n de bloque institucional |
| `b098ef1` | Center institutional notice and clarify footer band | Ajuste estÃ©tico footer/aviso | Centro visual y consistencia del bloque final |
| `18df1f4` | Increase AST Sapiens footer logo size | Ajuste de proporciones de logo institucional de crÃ©dito | Mejora de legibilidad de referencia de desarrollo |
| `a6eab00` | Enlarge AST Sapiens footer logo | Ajuste adicional tamaÃ±o | Refuerzo de visibilidad del logo de crÃ©dito |

---
# DOCUMENTO 5 — Addenda Reclutamiento Web â€” SYS-006

# Addenda Reclutamiento Web â€” SYS-006

## Datos de la subpÃ¡gina

- **Ruta:** `/trabaja-con-nosotros/`
- **URL:** `https://daltonsalud.com/trabaja-con-nosotros/`
- **Objetivo:** Canal pÃºblico institucional para publicar vacantes y redirigir a postulaciÃ³n oficial.

## Contexto operativo

Esta subpÃ¡gina actÃºa como punto de entrada para candidatos y no reemplaza el sistema operativo real de selecciÃ³n.

Correo de contacto de selecciÃ³n: `seleccion@daltonsalud.com`

## Formulario oficial

- **Form actual:**  
  `https://docs.google.com/forms/d/e/1FAIpQLSdYsME55V4Z8c_cSxz17qzcIPWIINuciJ94qD3AVC_Dv_3fRQ/viewform?usp=header`

## BÃºsqueda abierta actual

- `Auxiliar / atenciÃ³n al pÃºblico en farmacia`

## Reemplazo del link del Form

1. Editar `trabaja-con-nosotros/index.html`.
2. En botÃ³n `Postularme`, actualizar el `href`.
3. Verificar atributos:
   - `target="_blank"`
   - `rel="noopener noreferrer"`
4. Guardar y publicar.

## Ocultar bÃºsqueda activa y mostrar estado sin bÃºsquedas

La plantilla incluye ambos bloques en la secciÃ³n `#busquedas`:

- `.job-open` (bÃºsqueda activa)
- `.job-empty` (sin bÃºsquedas abiertas)

### Procedimiento

1. Para ocultar bÃºsqueda activa: establecer `.job-open` como no visible y mostrar `.job-empty`.
2. Confirmar que solo uno de los bloques quede visible.
3. Actualizar texto de contacto a `seleccion@daltonsalud.com` si aplica.

Comentario incluido en el HTML:
`Para cerrar la bÃºsqueda activa, ocultar el bloque .job-open y mostrar el bloque .job-empty`

## Reglas de mantenimiento

- Mantener texto de alcance institucional y evitar ofertas de beneficios no confirmados.
- Mantener `postulaciÃ³n` y `selecciÃ³n` en redacciÃ³n institucional clara.
- Revisar que el enlace de postulaciÃ³n siempre sea el formulario oficial vigente.
- Verificar apertura del botÃ³n en nueva pestaÃ±a.
- Mantener coherencia visual con la home.

## Riesgo de desactualizaciÃ³n

- Riesgo principal: link del Form o datos de la vacante desactualizados en ausencia de rutina de mantenimiento.
- Riesgo de UX: bloque `.job-open` visible cuando no hay vacante.
- MitigaciÃ³n: rutina semanal de revisiÃ³n por RRHH.

## Responsable funcional

- **RRHH:** Responsable de contenido de reclutamiento.
- **SebastiÃ¡n Astarita:** Responsable funcional y coordinaciÃ³n de mantenimiento institucional.

---
# DOCUMENTO 6 — Credenciales y accesos (referencias no secretas) â€” SYS-006

# Credenciales y accesos (referencias no secretas) â€” SYS-006

## Referencias operativas

- **Cloudflare:** cuenta bajo control de SebastiÃ¡n.
- **GitHub:** repo `sebastianastarita/daltonsalud-landing`.
- **Google Drive:** carpeta documental tÃ©cnica compartida del proyecto.
- **Dominio:** `daltonsalud.com`.
- **Email Routing:**
  - `dalton@daltonsalud.com`
  - `contacto@daltonsalud.com`
  - `administracion@daltonsalud.com`
  - `rrhh@daltonsalud.com`
  - `seleccion@daltonsalud.com`

## Seguridad

No incluir credenciales reales, tokens ni contraseÃ±as en este documento.

Las claves reales y secretos deben conservarse fuera de este archivo, en el repositorio interno autorizado de claves.

---
# DOCUMENTO 7 — Fila para Sheet maestro - SYS-006

# Fila para Sheet maestro - SYS-006

| Campo | Valor |
| --- | --- |
| ID | SYS-006 |
| Sistema | Landing Institucional Dalton / Web HOF-Meta |
| Área | Dirección / HOF / Comercial / RRHH |
| Estado | Producción |
| Criticidad | ALTA |
| Responsable funcional | Sebastián Astarita |
| Responsable técnico | Mantenimiento asistido con Codex |
| Responsable documentación | Sebastián Astarita |
| Carpeta documental | `0.0_DOCUMENTACION_TECNICA/Implementaciones/SYS_006_LANDING_DALTON_HOF_META` |
| Subpágina | `/trabaja-con-nosotros/` |
| Apps Script / Proyecto | No aplica |
| Repositorio | `sebastianastarita/daltonsalud-landing` |
| Sheet principal | No aplica |
| Dependencias críticas | Cloudflare, GitHub, DNS, Email Routing, Google Forms reclutamiento, identidad visual Dalton |
| Contingencia | rollback Cloudflare Pages / revert GitHub |
| Estado documental | COMPLETO |
| Última modificación | 30/06/2026 |
| Última validación | 30/06/2026 |
| Próxima revisión | Cierre de búsqueda activa / antes de Etapa 3 Meta |
| Observaciones | Landing institucional soporte HOF-Meta con subpágina de reclutamiento. |


