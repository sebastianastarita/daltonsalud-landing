# PHASE_LOG_AND_HANDOFF — SYS-006 / Micrositio de enlaces

**Fecha:** 2026-07-28

**Fase:** Construcción del MVP

**Estado de salida:** Candidato para revisión; no productivo

## Control de versión

- Rama: `agent/sys006-links-mvp`
- Commit de implementación: `8e9ccc5`

## Evidencias de validación no productiva

- Render mobile probado a `390 × 844`: cinco botones visibles, sin desplazamiento horizontal.
- Render desktop probado a `1440 × 900`: tarjeta de `560 px`, cinco botones visibles.
- Logo y recursos locales cargados sin imágenes rotas.
- Consola del navegador sin errores ni advertencias.
- HTML verificado con exactamente cinco alias `/go/<destino>`.
- Búsqueda en todos los HTML: sin URL `wa.me` ni números de WhatsApp incrustados.
- `git diff --check`: aprobado.

La navegación final de los alias queda pendiente porque depende de las reglas productivas de Cloudflare, todavía fuera de alcance.

## Trabajo realizado

- Se agregó `/links/` con cinco accesos institucionales.
- Se reutilizaron tipografías, colores, logos y estilos de SYS-006.
- Todos los botones del micrositio apuntan a alias `/go/<destino>`.
- Los accesos de WhatsApp de la home y de reclutamiento ahora usan `/go/whatsapp`.
- Se eliminó de la interfaz el número anterior mostrado como texto.
- Se documentó la migración futura a `+54 9 221 656-2222`.
- Se confirmó que Debmedia recibe los mensajes por la API de WhatsApp y no exige una URL especial.

## Mensaje prearmado aprobado para la preparación

> Hola, quiero hacer una consulta a Farmacia Dalton.

Se eligió un texto breve y general para no condicionar el enrutamiento ni pedir datos sensibles antes de que intervenga el canal de atención.

## Configuración productiva pendiente

Crear cinco redirecciones temporales `302` en Cloudflare:

| Orden | Ruta de entrada | Destino inicial |
| --- | --- | --- |
| 1 | `https://daltonsalud.com/go/whatsapp` | `https://wa.me/message/7PZQOH5C4FUDJ1` |
| 2 | `https://daltonsalud.com/go/facebook` | `https://www.facebook.com/FarmaciaDalton/` |
| 3 | `https://daltonsalud.com/go/farmaonline` | `https://www.farmaonline.com/` |
| 4 | `https://daltonsalud.com/go/gpsfarma` | `https://gpsfarma.com/` |
| 5 | `https://daltonsalud.com/go/ubicacion` | `https://maps.app.goo.gl/cdVSPpRnP8yJEV7m7` |

Cuando el nuevo número esté operativo y exista autorización de cambio, modificar únicamente el destino de `/go/whatsapp` a:

`https://wa.me/5492216562222?text=Hola%2C%20quiero%20hacer%20una%20consulta%20a%20Farmacia%20Dalton.`

## Secuencia recomendada para GO PROD

1. Aprobar y fusionar el cambio del repositorio.
2. Confirmar el despliegue de `/links/` en Cloudflare Pages.
3. Crear y probar las cinco reglas `302`.
4. Emitir GO PROD y cambiar la bio de Instagram a `https://daltonsalud.com/links/`.
5. Observar 72 horas conservando la herramienta anterior como rollback.
6. Recién entonces retirar la herramienta anterior si no hay incidentes.
7. En la fecha de migración, validar el nuevo número y actualizar sólo `/go/whatsapp`.

## Verificación exigida antes de producción

- mobile real: carga, legibilidad y apertura de los cinco botones;
- desktop: carga y disposición visual;
- respuesta HTTP de cada alias;
- apertura de WhatsApp con el destino vigente;
- después de la migración, apertura del nuevo número con el mensaje prearmado;
- ausencia de bucles, errores 404 o exposición del número anterior;
- registro de fecha, responsable, resultado y eventual rollback.

## Actualizaciones documentales posteriores

Al cerrar producción:

- registrar commit, PR, fecha de despliegue y resultado en el historial de SYS-006;
- actualizar el estado vigente en Drive y la fila del índice maestro;
- dejar constancia de las reglas activas de Cloudflare sin incluir credenciales;
- registrar la fecha efectiva de sustitución del número;
- cerrar este work package con estado `DONE` o `ROLLED BACK`.
