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

## 6) Cerrar bÃºsqueda activa y mostrar estado sin bÃºsquedas

1. En `trabaja-con-nosotros/index.html`, localizar bloques:
   - `.job-open`
   - `.job-empty`
2. Para cerrar la bÃºsqueda visible:
   - Cambiar a `display: none` el bloque `.job-open` (por ediciÃ³n manual del HTML).
   - Quitar ocultamiento de `.job-empty`.
3. Ojo: existe comentario de mantenimiento en la secciÃ³n indicando:
   - `Para cerrar la bÃºsqueda activa, ocultar el bloque .job-open y mostrar el bloque .job-empty`

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
