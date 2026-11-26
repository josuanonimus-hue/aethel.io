# Portfolio · Thiago Aranda

Sitio estático: no necesita instalar nada. Abrí `index.html` en el navegador o subí la carpeta completa a Netlify, Vercel o GitHub Pages.

## Estructura

- `index.html`: la estructura de la página y los datos para Google y WhatsApp.
- `css/style.css`: todos los estilos.
- `js/data.js`: los datos que más vas a cambiar: precios, niveles, textos, trabajos, capturas y condiciones.
- `js/main.js`: la lógica (pestañas, armador de paquete, proceso, condiciones).
- `assets/img/`: capturas de los trabajos e imagen para compartir el link (`og.png`).
- `assets/icons/`: el favicon (cursor naranja) en SVG y PNG para celulares.
- `favicon.ico` y `site.webmanifest`: se quedan en la raíz, es donde los navegadores los buscan.

## Cosas para editar

- **Precios y niveles:** `js/data.js`, dentro de `levels`.
- **Tu WhatsApp:** `js/data.js` (`WA`) y los links `wa.me` de `index.html`.
- **Cotización del dólar:** `js/data.js` (`RATE`) y el texto de aclaración en `index.html`.
- **Dirección de la web:** si más adelante conectás un dominio propio, cambiá `thiago-yfz.pages.dev` por tu dominio en `index.html` (las líneas `canonical`, `og:url`, `og:image` y `twitter:image`).
