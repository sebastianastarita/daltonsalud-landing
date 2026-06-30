# Addenda Reclutamiento Web — SYS-006

## Datos de la subpágina

- **Ruta:** `/trabaja-con-nosotros/`
- **URL:** `https://daltonsalud.com/trabaja-con-nosotros/`
- **Objetivo:** Canal público institucional para publicar vacantes y redirigir a postulación oficial.

## Contexto operativo

Esta subpágina actúa como punto de entrada para candidatos y no reemplaza el sistema operativo real de selección.

Correo de contacto de selección: `seleccion@daltonsalud.com`

## Formulario oficial

- **Form actual:**  
  `https://docs.google.com/forms/d/e/1FAIpQLSdYsME55V4Z8c_cSxz17qzcIPWIINuciJ94qD3AVC_Dv_3fRQ/viewform?usp=header`

## Búsqueda abierta actual

- `Auxiliar / atención al público en farmacia`

## Reemplazo del link del Form

1. Editar `trabaja-con-nosotros/index.html`.
2. En botón `Postularme`, actualizar el `href`.
3. Verificar atributos:
   - `target="_blank"`
   - `rel="noopener noreferrer"`
4. Guardar y publicar.

## Ocultar búsqueda activa y mostrar estado sin búsquedas

La plantilla incluye ambos bloques en la sección `#busquedas`:

- `.job-open` (búsqueda activa)
- `.job-empty` (sin búsquedas abiertas)

### Procedimiento

1. Para ocultar búsqueda activa: establecer `.job-open` como no visible y mostrar `.job-empty`.
2. Confirmar que solo uno de los bloques quede visible.
3. Actualizar texto de contacto a `seleccion@daltonsalud.com` si aplica.

Comentario incluido en el HTML:
`Para cerrar la búsqueda activa, ocultar el bloque .job-open y mostrar el bloque .job-empty`

## Reglas de mantenimiento

- Mantener texto de alcance institucional y evitar ofertas de beneficios no confirmados.
- Mantener `postulación` y `selección` en redacción institucional clara.
- Revisar que el enlace de postulación siempre sea el formulario oficial vigente.
- Verificar apertura del botón en nueva pestaña.
- Mantener coherencia visual con la home.

## Riesgo de desactualización

- Riesgo principal: link del Form o datos de la vacante desactualizados en ausencia de rutina de mantenimiento.
- Riesgo de UX: bloque `.job-open` visible cuando no hay vacante.
- Mitigación: rutina semanal de revisión por RRHH.

## Responsable funcional

- **RRHH:** Responsable de contenido de reclutamiento.
- **Sebastián Astarita:** Responsable funcional y coordinación de mantenimiento institucional.
