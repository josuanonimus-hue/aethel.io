/* Datos del sitio: acá podés cambiar precios, textos, trabajos y capturas sin tocar el resto del código. */
var SITE = {
  RATE: 5740, /* guaraníes por 1 dólar (referencial) */
  WA: "https://wa.me/595971775272", /* tu WhatsApp */
  works: [
{ tag: "Libro · Pedidos online", name: "Donde nacen las decisiones", desc: "Presenta el libro de Gustavo Lima, deja leer un adelanto y recibe los pedidos de compra desde la misma web.", domain: "eltiogustavolima.com.py", url: "https://www.eltiogustavolima.com.py/", items: ["Portada con el libro y el sello de material aprobado por el MEC", "Adelanto del capítulo 4 para leer pasando la página", "Visor 3D para girar y mirar el libro", "Pedido de compra en pasos: pedido, datos, factura y pago", "Compra unitaria, varios ejemplares, para regalar o envío al interior"], views: [
{ name: "Inicio", dark: "assets/img/libro-inicio.webp", alt: "Portada del sitio del libro Donde nacen las decisiones con el sello de material aprobado por el MEC" },
{ name: "Cifras", light: "assets/img/libro-cifras.webp", alt: "Sección con más de 1.000 unidades vendidas, 27 capítulos y 3 públicos" },
{ name: "Adelanto", light: "assets/img/libro-adelanto.webp", alt: "Sección para leer un adelanto del capítulo 4 con la tapa del libro y botón para verlo en 3D" },
{ name: "Novedades", light: "assets/img/libro-novedades.webp", alt: "Formulario para dejar el correo y recibir novedades del libro" }
] },
{ tag: "Música · Biografía", name: "Carlo Borghetti", desc: "Biografía, lanzamientos y contacto del músico Carlo Borghetti, integrante de Paiko.", domain: "carloborghetti.com", url: "https://carloborghetti.com/", items: ["Portada a pantalla completa con accesos a las plataformas de música", "Disponible en español e inglés", "Último lanzamiento con botones para escucharlo en cada plataforma", "Biografía con línea de tiempo y galería de fotos", "Contacto con formulario y descarga del press kit"], views: [
{ name: "Inicio", dark: "assets/img/carlo-inicio.webp", alt: "Portada de la web de Carlo Borghetti con su nombre y los accesos a las plataformas de música" },
{ name: "Cifras", dark: "assets/img/carlo-cifras.webp", alt: "Cifras de la trayectoria: más de 25 años, 7 álbumes de estudio, 1 disco de oro y 4 proyectos musicales" },
{ name: "Música", dark: "assets/img/carlo-musica.webp", alt: "Carrusel de lanzamientos con botones para escuchar en Spotify, Apple Music, Deezer y YouTube" }
] },
{ tag: "Portal · Mipymes", name: "Impulsa Mipymes", desc: "Portal de Infonegocios Paraguay con directorio de mipymes, publicidad y asistente virtual.", domain: "impulsamipymes.com.py", url: "https://www.impulsamipymes.com.py/", items: ["Ficha de cada mipyme: rubro, ciudad, WhatsApp e Instagram", "Guía con buscador por nombre o rubro y filtros por rubro y ciudad", "Espacios publicitarios para anunciantes", "Infobot, el asistente virtual que responde dudas", "Modo claro y oscuro"], views: [
{ name: "Inicio", light: "assets/img/impulsa-inicio-claro.webp", dark: "assets/img/impulsa-inicio-oscuro.webp", alt: "Portada de Impulsa Mipymes con una mipyme destacada y el asistente virtual Infobot" },
{ name: "Ficha de mipyme", light: "assets/img/impulsa-ficha-claro.webp", dark: "assets/img/impulsa-ficha-oscuro.webp", alt: "Ficha de la mipyme Che Retã Resto Café con botones de WhatsApp e Instagram" },
{ name: "Buscador y filtros", dark: "assets/img/impulsa-buscador-oscuro.webp", alt: "Sección Mipymes destacadas con buscador y filtros por rubro y ciudad" },
{ name: "Cómo sumarse", light: "assets/img/impulsa-sumarse-claro.webp", alt: "Sección con los tres pasos para que un negocio sea parte de Infonegocios" }
] }
],
  levels: [
{ n: "01", name: "Básica", base: 250, who: "Landing page para emprendedores, profesionales y promociones.", time: "5 a 7 días", f: ["Una página con botón de WhatsApp", "Diseño para celular, tablet y PC", "1 ronda de ajustes"], mname: "Esencial", m: 30 },
{ n: "02", name: "Corporativa", base: 600, who: "Presencia profesional para pymes y negocios.", time: "10 a 15 días", f: ["Hasta 5 secciones con tu identidad de marca", "SEO básico y correos corporativos", "2 rondas de ajustes"], mname: "Esencial", m: 30 },
{ n: "03", name: "Profesional", base: 1200, who: "Con gestor de contenido, para quienes actualizan seguido.", time: "20 a 30 días", f: ["Hasta 10 secciones y panel administrable", "Blog, reservas, citas o cotizaciones", "3 rondas de ajustes"], mname: "Profesional", m: 60 },
{ n: "04", name: "Avanzada", base: 2500, who: "E-commerce o sistema a medida con usuarios.", time: "35 a 60 días", f: ["Tienda online con carrito y panel de ventas", "Registro de usuarios e integraciones", "30 días de soporte posterior"], mname: "Avanzado", m: 120 }
],
  needs: [
{ label: "Quiero que me contacten por WhatsApp con una página simple", lv: 0 },
{ label: "Quiero una presencia profesional para mi negocio", lv: 1 },
{ label: "Quiero editar yo mismo mis textos, fotos y productos", lv: 2 },
{ label: "Quiero vender online o tener un sistema con usuarios", lv: 3 }
],
  steps: [
{ n: "1", title: "Elegís tu nivel", text: "Según tu proyecto y tu presupuesto, elegimos el nivel que mejor encaja." },
{ n: "2", title: "Seña del 30% e inicio", text: "Con la seña del 30% comienza el proceso de trabajo." },
{ n: "3", title: "Desarrollo y ajustes", text: "Armo tu sitio y lo ajustamos juntos en las rondas incluidas en tu nivel." },
{ n: "4", title: "Entrega y saldo", text: "Te entrego el sitio terminado. El saldo se abona contra entrega, o en cuotas en los niveles 3 y 4." }
],
  faqs: [
{ title: "Seña y saldo", text: "Con una seña del 30% sobre el precio base empezamos. El saldo se paga contra entrega; en los niveles 3 y 4 también en cuotas." },
{ title: "Precios negociables", text: "Los precios de cada nivel son una referencia y se pueden negociar. Contame tu proyecto y tu presupuesto, y buscamos la mejor forma de hacerlo posible." },
{ title: "Dominio y servidor (+5%)", text: "Es opcional. Activamos tu dominio y configuramos el servidor. Las renovaciones anuales se pagan aparte." },
{ title: "Precio fijo al cerrar", text: "Al cerrar el trato, el precio queda fijo aunque el dólar varíe después." },
{ title: "Ajustes y extras", text: "Cada nivel incluye sus rondas de ajustes. Lo que exceda el alcance del nivel se cotiza aparte, con tu aprobación." }
]
};
