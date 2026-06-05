# DALTON Salud y Bienestar - Landing V0.1

Landing institucional estática para DALTON Salud y Bienestar, preparada para publicar en Cloudflare Pages.

## Estructura de archivos

- `/index.html`: contenido principal, enlaces configurables, SEO y secciones de la landing.
- `/styles.css`: estilos responsive, colores de marca y reglas visuales.
- `/assets/logo/`: logos, isotipos, favicons y archivos de identidad.
- `/assets/icons/`: carpeta preparada para iconos propios si se agregan más adelante.
- `/assets/img/`: carpeta preparada para fotos reales u Open Graph.
- `/README.md`: guía de mantenimiento.

## Dónde cambiar WhatsApp

En `index.html`, buscar `wa.me/5492216767506`. Cambiar ese número o el texto precargado en todos los enlaces de WhatsApp.

WhatsApp actual:

```text
+54 9 221 676 7506
https://wa.me/5492216767506?text=Hola,%20quiero%20hacer%20una%20consulta%20a%20Dalton%20Salud
```

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

- WhatsApp: enlaces con clase `js-whatsapp-link`.
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

## Nota sobre identidad

El sitio está preparado para usar los archivos de identidad con los nombres indicados en `/assets/logo/`. Si se reemplazan por los SVG oficiales finales, mantener los mismos nombres para que no haga falta modificar el HTML.
