<div align="center">

```
  ███╗   ███╗███████╗███╗   ██╗██╗   ██╗
  ████╗ ████║██╔════╝████╗  ██║██║   ██║
  ██╔████╔██║█████╗  ██╔██╗ ██║██║   ██║
  ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║   ██║
  ██║ ╚═╝ ██║███████╗██║ ╚████║╚██████╔╝
  ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝
```

<img src="Registro/assets/logo.png" alt="BettyLopDesigner" width="140">

### `> nav.render() && dropdown.activate()` — **Born to Code** 💜

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Made with Flask](https://img.shields.io/badge/Flask-9B59D0?style=for-the-badge&logo=flask&logoColor=white)](#)

[![Status](https://img.shields.io/badge/status-en_desarrollo-A8D832?style=flat-square)](#)
[![License](https://img.shields.io/badge/license-MIT-F5C518?style=flat-square)](#)
[![Responsive](https://img.shields.io/badge/responsive-sí-9B59D0?style=flat-square)](#)

</div>

---

## 📖 Tabla de contenido

- [Sobre el proyecto](#-sobre-el-proyecto)
- [Vista previa](#️-vista-previa)
- [Características](#-características)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Paleta de diseño](#-paleta-de-diseño)
- [Instalación](#️-instalación)
- [Uso](#️-uso)
- [Responsive](#-responsive)
- [Roadmap](#️-roadmap)
- [Autoría](#-autoría)

<br>

## 🧭 Sobre el proyecto

**Menú Desplegable — BettyLopDesigner** es el componente de navegación oficial
de [bettylopdesigner.com](#), una marca que fusiona diseño de moda con
identidad de desarrollador ("Born to Code"). El menú incluye desplegables
interactivos, buscador y carrito, todo construido con HTML, CSS y JavaScript
puros, y servido opcionalmente mediante un backend en Python (Flask).

Este componente está pensado para integrarse como cabecera fija en cualquier
página de la tienda, manteniendo consistencia visual con el resto del
ecosistema de la marca.

<br>

## 🖼️ Vista previa

> `Diseños ▾` · `Colecciones ▾` · `Tiendas ▾` — cada uno despliega un submenú
> al pasar el cursor (o al tocar, en dispositivos móviles).

```
┌─────────────────────────────────────────────────────────────────────┐
│ 🟣 BETTYLOPDESIGNER.com   Inicio  Diseños▾  Colecciones▾  Tiendas▾   │
│                           Sobre mí  Blog  Contacto   🔍  🛒  [Shop]  │
└─────────────────────────────────────────────────────────────────────┘
```

<br>

## ✨ Características

| Componente                 | Descripción                                                                |
|-----------------------------|------------------------------------------------------------------------------|
| 🔽 **Menús desplegables**   | `Diseños`, `Colecciones` y `Tiendas` muestran submenús con animación suave    |
| 🔍 **Buscador expandible**  | Ícono que despliega un campo `input` con `placeholder`                       |
| 🛒 **Carrito con contador** | Ícono con badge numérico que se actualiza dinámicamente vía JavaScript        |
| 📱 **Menú hamburguesa**     | Navegación colapsable para pantallas pequeñas                                |
| 🎨 **Identidad de marca**   | Paleta, tipografía y microcopy 100% alineados a BettyLopDesigner              |
| 🖱️ **Estados hover**        | `cursor: pointer` y `.btn:hover` con transición de color en toda acción       |

<br>

## 📁 Estructura del proyecto

```
Menu despleglable/
├── index.html         → estructura del menú + sección de demostración
├── style.css           → estilos con la paleta de marca
├── script.js            → interactividad (dropdowns, buscador, carrito, hamburguesa)
├── app.py               → servidor Flask opcional para servir los archivos
└── assets/
    └── logo.png          → logo de BettyLopDesigner
```

<br>

## 🎨 Paleta de diseño

| Token            | Preview                                                                 | HEX       | Uso                                          |
|-------------------|:------------------------------------------------------------------------:|-----------|-----------------------------------------------|
| `BETTYLOPURPLE`   | ![#9B59D0](https://placehold.co/18x18/9B59D0/9B59D0.png)                | `#9B59D0` | Botón CTA · nombre de marca · acentos activos |
| `CODE LIME`       | ![#A8D832](https://placehold.co/18x18/A8D832/A8D832.png)                | `#A8D832` | Hover de botones · enlace activo             |
| `DEBUG GOLD`      | ![#F5C518](https://placehold.co/18x18/F5C518/F5C518.png)                | `#F5C518` | Badges · contador del carrito                |
| `VOID BLACK`      | ![#0D0D0D](https://placehold.co/18x18/0D0D0D/0D0D0D.png)                | `#0D0D0D` | Fondo principal (dark mode)                  |
| `TERMINAL BG`     | ![#CCCCCC](https://placehold.co/18x18/CCCCCC/CCCCCC.png)                | `#CCCCCC` | Texto secundario de los enlaces              |
| `OUTPUT WHITE`    | ![#FFFFFF](https://placehold.co/18x18/FFFFFF/FFFFFF.png)                | `#FFFFFF` | Texto principal                              |

<br>

## ⚙️ Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/menu-bettylopdesigner.git
cd menu-bettylopdesigner

# 2. (Opcional) instala Flask si quieres servirlo con Python
pip install flask

# 3. Levanta el servidor
python app.py

# 4. Ábrelo en tu navegador
# → http://127.0.0.1:5000
```

> 💡 El menú también funciona abriendo `index.html` directamente en el
> navegador, sin necesidad de servidor — Flask solo es útil si más adelante
> conectas el buscador o el carrito a datos reales.

<br>

## 🖱️ Uso

- Pasa el cursor (o toca en móvil) sobre **Diseños**, **Colecciones** o
  **Tiendas** para ver su submenú.
- Haz clic en 🔍 para abrir el campo de búsqueda.
- Haz clic en 🛒 para simular la adición de productos al carrito.
- En pantallas angostas, el ícono ☰ despliega la navegación completa.

<br>

## 📱 Responsive

El menú se adapta a tres puntos de quiebre principales:

| Breakpoint   | Comportamiento                                                    |
|--------------|------------------------------------------------------------------|
| `> 960px`    | Menú horizontal completo con desplegables por hover               |
| `≤ 960px`    | Menú hamburguesa con navegación colapsable                         |
| `≤ 600px`    | Se oculta el botón "Shop Now"; se ajusta el logo y el buscador      |

<br>

## 🗺️ Roadmap

- [ ] Conectar el buscador a un endpoint real de búsqueda de productos
- [ ] Persistir el carrito en `localStorage` o en el backend
- [ ] Agregar animación de "producto añadido" al hacer clic en el carrito
- [ ] Integrar este menú como cabecera común de todas las páginas del sitio

<br>

## 👩‍💻 Autoría

Diseñado y desarrollado para **BettyLopDesigner**, marca donde el estilo se
piensa tanto en Photoshop como en un archivo `.css`.

<div align="center">

**Hecho con 💜 y `Bettylopdesigner`**

</div>
