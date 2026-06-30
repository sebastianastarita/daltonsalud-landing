# Runbook Operativo — SYS-006

## Alcance

Este documento define operaciones cotidianas sin tocar backend, ni cambios de infraestructura.

## 1) Modificar textos de la home

1. Abrir `index.html` en una rama o directamente `main`.
2. Editar textos en las secciones:
   - Hero
   - Servicios principales
   - Envíos
   - Sección de contacto
   - Aviso institucional
3. Mantener jerarquía semántica (`h1`, `h2`, etc.).
4. Publicar y validar render en página.

## 2) Modificar datos de contacto

1. En `index.html`, ubicar la sección `#contacto`.
2. Editar campos visibles en tarjetas de dirección, WhatsApp, email, teléfono y redes.
3. Verificar formato `mailto:` y `tel:` donde corresponda.

## 3) Modificar WhatsApp

1. En `index.html`, buscar enlaces con clase `js-whatsapp-link`.
2. Reemplazar `href` por el número/formato nuevo (`https://wa.me/<codigo>`).
3. Verificar en:
   - Header
   - Hero
   - Sección de ayuda

## 4) Modificar búsqueda activa (reclutamiento)

1. Abrir `trabaja-con-nosotros/index.html`.
2. En sección `#busquedas` editar bloques `.job-open`:
   - `Puesto`
   - `Sector`
   - `Horario`
   - `Condición relevante`
   - `Ubicación`
3. Actualizar botón `Postularme` con nuevo link de Google Form si aplica.

## 5) Cerrar búsqueda activa y mostrar estado sin búsquedas

1. En `trabaja-con-nosotros/index.html`, localizar bloques:
   - `.job-open`
   - `.job-empty`
2. Para cerrar la búsqueda visible:
   - Cambiar a `display: none` el bloque `.job-open` (por edición manual del HTML).
   - Quitar ocultamiento de `.job-empty`.
3. Ojo: existe comentario de mantenimiento en la sección indicando:
   - `Para cerrar la búsqueda activa, ocultar el bloque .job-open y mostrar el bloque .job-empty`

## 6) Publicar cambios

1. Guardar cambios y validar visualmente en local.
2. `git add` y `git commit`.
3. `git push origin main`.
4. Confirmar deploy en Cloudflare Pages.

## 7) Verificar deploy en Cloudflare Pages

1. Entrar a Pages → proyecto del sitio.
2. Confirmar que el último commit esté en estado `success`.
3. Abrir:
   - `https://daltonsalud.com`
   - `https://daltonsalud.com/trabaja-con-nosotros/`
4. Confirmar carga 200.

## 8) Verificar redirección de www

1. Verificar `https://www.daltonsalud.com` responde 301.
2. Confirmar Location final en `https://daltonsalud.com`.
3. Opcional: probar rutas arbitrarias y querystring.

## 9) Verificar robots y sitemap

1. Abrir `https://daltonsalud.com/robots.txt` y validar contenido.
2. Abrir `https://daltonsalud.com/sitemap.xml` y validar URLs.
3. Tras cambios de URL incluir/ajustar ruta en `sitemap.xml` y volver a publicar.

## 10) Rollback básico

- **GitHub revert:** identificar commit con error, ejecutar `git revert <hash>` y pushear a `main`.
- **Cloudflare Pages rollback:** desde panel de despliegues, restaurar versión previa estable si hace falta.

## Checklist post-deploy

- [ ] Landing responde 200 en dominio canónico.
- [ ] `www` redirige 301 al canónico.
- [ ] Enlaces críticos visibles y funcionales.
- [ ] Favicon cargando correctamente.
- [ ] Reclutamiento accesible y botón `Postularme` en nueva pestaña.
- [ ] `mailto:` y `tel:` funcionales donde correspondan.
- [ ] `sitemap.xml` actualizado.
