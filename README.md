# DALTON Salud y Bienestar - Landing V0.1

Landing institucional estática para DALTON Salud y Bienestar, preparada para publicar en Cloudflare Pages.

## Estructura de archivos

- `/index.html`: contenido principal, enlaces configurables, SEO y secciones de la landing.
- `/styles.css`: estilos responsive, colores de marca y reglas visuales.
- `/assets/logo/`: logos, isotipos, favicons y archivos de identidad.
- `/assets/icons/`: carpeta preparada para iconos propios si se agregan más adelante.
- `/assets/img/`: carpeta preparada para fotos reales u Open Graph.
- `/README.md`: guía de mantenimiento.

## Gestión de WhatsApp

Todos los accesos públicos del repositorio deben apuntar al alias estable:

```text
https://daltonsalud.com/go/whatsapp
```

El número real no se publica en el código. El destino se administra mediante una
regla de redirección temporal `302` en Cloudflare, bajo autorización productiva.
Esto permite cambiar de número sin volver a modificar la landing, el micrositio
de enlaces ni otras piezas que utilicen el alias.

## Dónde cambiar horarios

En `index.html`, buscar la tarjeta con el título `Horarios` dentro de la sección `Datos esenciales`.

Horario actual:

```text
Lunes a viernes: 8:30 a 20:00
Sábados: 8:00 a 13:00
Domingos: cerrado
```

## Dónde cambiar links

En `index.html`, los enlaces principales están comentados al inicio del `<body>`.

- WhatsApp: alias interno `/go/whatsapp`.
- Google Maps: enlaces con clase `js-map-link`.
- Instagram: `https://www.instagram.com/farmaciadalton/`.
- Facebook: `https://www.facebook.com/FarmaciaDalton`.

## Dónde reemplazar fotos

La landing no usa fotos genéricas ni imágenes de stock. Si más adelante hay fotos reales del local, guardarlas en `/assets/img/` y reemplazar el bloque visual del hero en `index.html`.

El Open Graph queda preparado como:

```text
/assets/img/og-dalton.png
```

Si ese archivo todavía no existe, la página sigue funcionando normalmente.

## Deploy automático con Cloudflare Pages

Cloudflare Pages debe estar conectado al repositorio de GitHub `sebastianastarita/daltonsalud-landing`.

Configuración recomendada:

- Framework preset: `None`.
- Build command: dejar vacío.
- Build output directory: `/`.
- Rama de producción: `main`.

Cada push a `main` dispara un despliegue automático. Cuando el despliegue termina, la URL técnica `daltonsalud-landing.pages.dev` debe mostrar la landing.

Las ramas distintas de `main` son no productivas y deben validarse en preview
antes de cualquier GO PROD.

## Micrositio de enlaces

La ruta `/links/` contiene el hub institucional para Instagram y otros canales.
Sus botones apuntan exclusivamente a alias internos `/go/<destino>`; los
destinos externos se administran en Cloudflare y no se duplican en el HTML.

## Nota sobre identidad

El sitio está preparado para usar los archivos de identidad con los nombres indicados en `/assets/logo/`. Si se reemplazan por los SVG oficiales finales, mantener los mismos nombres para que no haga falta modificar el HTML.
