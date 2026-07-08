# Addenda Reclutamiento Web — SYS-006

## Datos de la subpágina

- **Ruta:** `/trabaja-con-nosotros/`
- **URL:** `https://daltonsalud.com/trabaja-con-nosotros/`
- **Objetivo:** Canal público institucional para publicar vacantes y redirigir a postulación oficial.

## Contexto operativo

Esta subpágina actúa como punto de entrada para candidatos y no reemplaza el sistema operativo real de selección (SYS-005).

Correo de contacto de selección: `seleccion@daltonsalud.com`

## Estado desde SYS-006 hotfix 2026-07-08 — sin búsqueda abierta

La convocatoria `BUS-REEMPLAZO-2026-001` (`Auxiliar / atención al público en farmacia`) fue cerrada operativamente en SYS-005 (Apps Script). Esta subpágina fue actualizada en consecuencia:

- Se eliminó el bloque `.job-open` (puesto, sector, horario, condición relevante, ubicación, botón `Postularme`, nota de formulario oficial).
- Se eliminó toda referencia al Form activo (`docs.google.com/forms/.../1FAIpQLSdYsME55V4Z8c_cSxz17qzcIPWIINuciJ94qD3AVC_Dv_3fRQ`). Ese Form ya no está enlazado desde esta página.
- El bloque `.job-empty` (único bloque restante en `#busquedas`) ahora muestra el título "Registro para futuras búsquedas" y un botón que abre el **Registro Futuro** de SYS-005:
  `https://script.google.com/a/macros/daltonsalud.com/s/AKfycbzVhvZx99p8IjCdgd_eXdWK-gxQB4FrtFCXoWN_sEilutIXREALpOwyjUSzgCEMc5ZpOA/exec?view=registroFuturo`
- El botón principal del hero ("Ver búsqueda abierta") fue reemplazado por "Dejar mis datos", con el mismo destino de Registro Futuro.
- El botón "Escribir a selección" (`mailto:seleccion@daltonsalud.com`) se mantuvo sin cambios — nunca apuntó al Form activo.

## Registro Futuro (SYS-005) — nuevo destino canónico

- **URL:** `https://script.google.com/a/macros/daltonsalud.com/s/AKfycbzVhvZx99p8IjCdgd_eXdWK-gxQB4FrtFCXoWN_sEilutIXREALpOwyjUSzgCEMc5ZpOA/exec?view=registroFuturo`
- **Atributos del link:** `target="_blank"` `rel="noopener noreferrer"` (verificado en ambos botones).
- Este destino pertenece al sistema SYS-005 (repo `dalton-rrhh-seleccion-candidatos`), no a SYS-006. No modificar su contenido desde este repositorio.

## Si en el futuro se abre una nueva búsqueda

1. Editar `trabaja-con-nosotros/index.html`.
2. Reintroducir un bloque `.job-open` con los datos de la nueva vacante (puesto, sector, horario, condición relevante, ubicación) y un botón de postulación al canal oficial vigente en ese momento.
3. Verificar atributos `target="_blank"` y `rel="noopener noreferrer"` en el botón de postulación.
4. Decidir si el bloque de Registro Futuro se mantiene visible en paralelo o se retira mientras haya búsqueda activa.
5. Guardar y publicar.

## Reglas de mantenimiento

- Mantener texto de alcance institucional y evitar ofertas de beneficios no confirmados.
- No decir "Banco de CV" (no se pide CV en el registro futuro).
- No prometer contacto garantizado.
- No indicar que hay búsqueda abierta mientras no la haya.
- Verificar apertura de los botones en nueva pestaña.
- Mantener coherencia visual con la home.

## Riesgo de desactualización

- Riesgo principal: reabrir una búsqueda y olvidar actualizar esta página, dejando el mensaje "sin búsquedas abiertas" desactualizado.
- Riesgo de UX: mostrar simultáneamente un bloque de búsqueda activa y el bloque de registro futuro sin criterio claro.
- Mitigación: rutina de revisión por RRHH al abrir o cerrar cada búsqueda.

## Responsable funcional

- **RRHH:** Responsable de contenido de reclutamiento.
- **Sebastián Astarita:** Responsable funcional y coordinación de mantenimiento institucional.
