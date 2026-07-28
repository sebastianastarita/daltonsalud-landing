# PHASE_LOG_AND_HANDOFF — SYS-006 / Micrositio de enlaces

**Fecha:** 2026-07-28

**Fase:** Cierre productivo del MVP

**Estado de salida:** DONE — producción activa y validada

## Autorización GO PROD

- Texto recibido: `GO PROD SYS-006 Links`
- Fecha y hora: 2026-07-28 19:41 ART
- Incluye: merge de PR `#1`, despliegue de `/links/`, tres alias `302`, validación y documentación.
- Excluye: número futuro de WhatsApp y cambio de bio de Instagram.

## Control de versión

- Rama: `agent/sys006-links-mvp`
- Commit de implementación: `8e9ccc5`
- Commit de handoff inicial: `080bf37`
- Commit de mejora de marca: `3605070`
- Commit de recorte comercial: `77ffe01`
- Commit de diseño bento y eslogan: `ebe6d4d`
- Commit de autorización GO PROD: `7de73d1`
- PR: `#1`, fusionado contra `main`
- Commit de merge productivo: `1f29bdcea232bb1bbcd3df63c8370a8c8c94e43c`
- Preview de rama: `https://agent-sys006-links-mvp.daltonsalud-landing.pages.dev`
- URL productiva: `https://daltonsalud.com/links/`

## Evidencias de validación no productiva

- Render mobile probado a `390 × 844`: tres botones visibles, sin desplazamiento horizontal.
- Render desktop probado a `1440 × 900`: tarjeta de `560 px`, tres botones visibles.
- Logo y recursos locales cargados sin imágenes rotas.
- Consola del navegador sin errores ni advertencias.
- HTML verificado con exactamente tres alias `/go/<destino>`.
- Búsqueda en todos los HTML: sin URL `wa.me` ni números de WhatsApp incrustados.
- `git diff --check`: aprobado.
- Cloudflare Pages: despliegue de preview exitoso.
- Preview remoto: `/links/`, hoja de estilos y logo responden HTTP `200`.
- Preview remoto: título presente y exactamente tres alias en el HTML servido.
- Revisión visual posterior: logo Dalton a `360 px` en desktop y `317 px` en viewport móvil, sin desborde horizontal.
- Crédito AST Sapiens visible y ambos SVG cargados sin errores.
- Consola del navegador sin errores ni advertencias después de las mejoras.
- Bento final a `390 × 844`: todo el contenido entra en un viewport, sin scroll ni desborde horizontal.
- Pantalla compacta a `360 × 740`: composición completa, eslogan visible y tarjetas secundarias iguales de `156 × 126 px`.
- Desktop a `1440 × 900`: WhatsApp a `560 px`, tarjetas secundarias de `274 px` y logo Dalton a `360 px`.

## Evidencias de validación productiva

- Merge de PR `#1`: 2026-07-28 19:42 ART.
- Cloudflare Pages desplegó correctamente el commit de merge.
- `/links/` respondió HTTP `200`.
- El HTML productivo contiene el eslogan aprobado y exactamente tres alias.
- Farmaonline y GPSFarma no aparecen en la página productiva.
- `https://daltonsalud.com/go/whatsapp` respondió `302` hacia `https://wa.me/message/7PZQOH5C4FUDJ1`.
- `https://daltonsalud.com/go/facebook` respondió `302` hacia `https://www.facebook.com/FarmaciaDalton/`.
- `https://daltonsalud.com/go/ubicacion` respondió `302` hacia `https://maps.app.goo.gl/cdVSPpRnP8yJEV7m7`.
- Las tres reglas constan activas en Cloudflare.
- Validación externa de alias: 2026-07-28, 19:59–20:00 ART.

## Trabajo realizado

- Se agregó `/links/` con tres accesos institucionales.
- Se reutilizaron tipografías, colores, logos y estilos de SYS-006.
- Se amplió un 50 % el ancho objetivo del logotipo Dalton, de `240 px` a `360 px`.
- Se agregó al pie el crédito “Desarrollado por” con el SVG de AST Sapiens ya versionado en SYS-006 y contrastado con el activo oficial disponible en Drive.
- Se implementó la composición bento aprobada: WhatsApp a ancho completo y ubicación/Facebook en dos tarjetas secundarias.
- Se incorporó debajo del logotipo el eslogan vigente en redes: “Cerca cuando importa”.
- El botón “Ubicación” explicita que abre Google Maps; su alias mantiene como destino `https://maps.app.goo.gl/cdVSPpRnP8yJEV7m7`.
- Farmaonline y GPSFarma se retiraron por decisión comercial: los enlaces genéricos no garantizan atribución a Dalton.
- Todos los botones del micrositio apuntan a alias `/go/<destino>`.
- Los accesos de WhatsApp de la home y de reclutamiento ahora usan `/go/whatsapp`.
- Se eliminó de la interfaz el número anterior mostrado como texto.
- Se documentó la migración futura a `+54 9 221 656-2222`.
- Se confirmó que Debmedia recibe los mensajes por la API de WhatsApp y no exige una URL especial.

## Mensaje prearmado aprobado para la preparación

> Hola, quiero hacer una consulta a Farmacia Dalton.

Se eligió un texto breve y general para no condicionar el enrutamiento ni pedir datos sensibles antes de que intervenga el canal de atención.

## Configuración productiva activa

Se crearon tres redirecciones temporales `302` en Cloudflare:

| Orden | Ruta de entrada | Destino inicial |
| --- | --- | --- |
| 1 | `https://daltonsalud.com/go/whatsapp` | `https://wa.me/message/7PZQOH5C4FUDJ1` |
| 2 | `https://daltonsalud.com/go/facebook` | `https://www.facebook.com/FarmaciaDalton/` |
| 3 | `https://daltonsalud.com/go/ubicacion` | `https://maps.app.goo.gl/cdVSPpRnP8yJEV7m7` |

Cuando el nuevo número esté operativo y exista autorización de cambio, modificar únicamente el destino de `/go/whatsapp` a:

`https://wa.me/5492216562222?text=Hola%2C%20quiero%20hacer%20una%20consulta%20a%20Farmacia%20Dalton.`

## Secuencia posterior al GO PROD

1. Observar 72 horas conservando la herramienta anterior como rollback.
2. Cambiar la bio de Instagram a `https://daltonsalud.com/links/` sólo con autorización específica.
3. Retirar la herramienta anterior después de la observación y de la migración de la bio, si no hay incidentes.
4. En la fecha de migración, validar el nuevo número y actualizar sólo `/go/whatsapp`.

## Verificación exigida antes de producción

- mobile real: carga, legibilidad y apertura de los tres botones;
- desktop: carga y disposición visual;
- respuesta HTTP de cada alias;
- apertura de WhatsApp con el destino vigente;
- después de la migración, apertura del nuevo número con el mensaje prearmado;
- ausencia de bucles, errores 404 o exposición del número anterior;
- registro de fecha, responsable, resultado y eventual rollback.

## Actualizaciones documentales de cierre

- [x] Registrar PR, commit productivo, fecha de despliegue y resultado.
- [x] Dejar constancia de las reglas activas de Cloudflare sin incluir credenciales.
- [x] Cerrar el work package con estado `DONE`.
- [ ] Actualizar el estado vigente en Drive y la fila del índice maestro.
- [ ] Registrar la fecha efectiva de sustitución del número cuando ocurra.
