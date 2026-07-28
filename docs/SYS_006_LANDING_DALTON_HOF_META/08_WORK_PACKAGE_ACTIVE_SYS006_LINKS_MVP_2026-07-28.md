# WORK_PACKAGE_ACTIVE — SYS-006 / Micrositio de enlaces

**Fecha de apertura:** 2026-07-28

**Tipo:** Fast-track MVP

**Estado:** GO PROD autorizado; ejecución en curso

**Autorización recibida:** `GO PROD SYS-006 Links`, 2026-07-28 19:41 ART

## Objetivo

Reemplazar el enlace de bio de terceros por un punto institucional simple y preparar el cambio de WhatsApp sin volver a editar todas las páginas y canales.

## Criterios rectores DALTON-GOV-TEC

- mínima solución útil, segura, observable y recuperable;
- reutilización de SYS-006 y de la infraestructura vigente;
- ningún secreto ni credencial dentro del repositorio;
- cambios versionados y revisables;
- separación entre implementación no productiva y activación productiva;
- rollback definido antes de publicar.

## Arquitectura aprobada para el MVP

`Canal público → /links/ → /go/<destino> → redirección 302 de Cloudflare → servicio externo`

### Por qué no Apps Script + Google Sheets

Para tres enlaces, esa alternativa suma otro runtime, permisos, despliegue y punto de falla. Cloudflare ya forma parte de SYS-006 y permite cambiar el destino de WhatsApp sin modificar ni republicar el sitio.

### Fuente de verdad

- Código, estructura de enlaces y documentación técnica: repositorio SYS-006.
- Destinos activos de los alias: reglas de redirección en Cloudflare.
- Estado institucional y referencias: documentación DALTON-GOV-TEC e índice maestro.

## Entregables

- [x] Página estática `/links/`.
- [x] Tres alias internos en la interfaz.
- [x] Composición bento mobile-first y eslogan “Cerca cuando importa”.
- [x] Enlaces de WhatsApp existentes migrados al alias estable.
- [x] Número futuro y mensaje prearmado documentados sin activarlos.
- [x] Documentación mínima portable.
- [x] Preview de Cloudflare validado.
- [ ] Reglas `302` creadas y verificadas.
- [x] GO PROD registrado.
- [ ] Bio de Instagram migrada.
- [ ] Herramienta anterior retirada después del período de observación.

## Criterios de aceptación

- La página responde correctamente en mobile y desktop.
- Muestra exactamente tres accesos.
- Prioriza visualmente WhatsApp y mantiene ubicación/Facebook como acciones secundarias equivalentes.
- Muestra el eslogan aprobado debajo del logotipo Dalton.
- No contiene un número de WhatsApp directo en el HTML.
- Todos los botones usan `/go/<destino>`.
- Los tres alias responden con `302` al destino esperado.
- `/go/whatsapp` conserva el destino vigente hasta la fecha acordada.
- El cambio al número futuro puede hacerse modificando una sola regla.
- Existe rollback probado y no se pierde el enlace anterior durante la transición.

## Exclusiones del MVP

- analítica propia;
- panel de administración;
- campañas o múltiples perfiles;
- integración técnica con Debmedia;
- marketplaces genéricos sin atribución verificable a Dalton;
- cambios de DNS o nuevo subdominio;
- automatización del cambio de número.

## Riesgos y controles

| Riesgo | Control |
| --- | --- |
| Activar el número futuro antes de tiempo | Mantener el destino futuro sólo documentado hasta autorización específica |
| Regla incorrecta o bucle de redirección | Probar cada alias con respuesta HTTP y desde un teléfono |
| Caída de un destino externo | Verificación funcional previa y posterior a publicación |
| Dependencia de Cloudflare | Reglas simples, inventariadas y con rollback inmediato |
| Doble fuente de verdad | No duplicar destinos externos en el HTML |
| Baja anticipada de la herramienta actual | Mantenerla durante una observación mínima de 72 horas |

## Rollback

1. Restaurar el enlace de bio anterior.
2. Deshabilitar las tres reglas nuevas de Cloudflare.
3. Revertir el despliegue de Pages a la versión productiva previa.
4. Verificar home, WhatsApp y enlace de bio desde un teléfono.
