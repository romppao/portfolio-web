# Portfolio Web - Rompao

## 🎥 Descripción

Portfolio cinematográfico profesional para mostrar trabajos de **fotografía** y **filmmaking**. Diseñado con un enfoque minimalista y estético que destaca el contenido visual.

## ✨ Características

- **Introducción cinematográfica**: Animación de entrada con efecto de película
- **Navegación suave**: Smooth scroll entre secciones
- **Galerías organizadas**: 
  - Fotografía: Retratos, Deportivas, Callejeras
  - Vídeos: Videoclips, Comercial
- **Diseño responsive**: Adaptado para todos los dispositivos
- **Estilo Polaroid**: Presentación de fotos con efecto instantáneo

## 💻 Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados con efectos cinematográficos
- **JavaScript**: Interactividad y navegación dinámica
- **Google Fonts**: Tipografías Cinzel y Raleway

## 🚀 Demo en vivo

[Ver Portfolio](https://romppao.github.io/portfolio-web/)

## 📁 Estructura del proyecto

```
portfolio-web/
│
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── scripts/
│   └── main.js         # Lógica JavaScript
├── img/                # Imágenes del portfolio
│   ├── perfil.jpg
│   ├── retratos/
│   ├── deportivas/
│   └── callejeras/
└── audio/              # Efectos de sonido
    └── film_projector.mp3
```

## 🛠️ Instalación local

1. Clona el repositorio:
```bash
git clone https://github.com/romppao/portfolio-web.git
```

2. Navega al directorio:
```bash
cd portfolio-web
```

3. Abre `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve
```

## 📝 Personalización

### Cambiar imágenes
Reemplaza las imágenes en la carpeta `img/` manteniendo los nombres o actualiza las rutas en `index.html`.

### Modificar colores
Edita las variables de color en `style.css`:
```css
body {
    background-color: #0a0a0a;  /* Fondo oscuro */
    color: #d4af37;             /* Dorado */
}
```

### Añadir vídeos de YouTube
Actualiza los `iframe` con tus IDs de vídeo:
```html
<iframe src="https://www.youtube.com/embed/TU_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

## 💬 Contacto

- **Email**: rompaoondo@email.com
- **Instagram**: [@hakemm.l](https://instagram.com/hakemm.l)
- **YouTube**: [romppao.28](https://youtube.com/romppao.28)

## 📝 Licencia

© 2025 Rompao. Todos los derechos reservados.

---

**Nota**: Este portfolio está en desarrollo continuo. Las optimizaciones de rendimiento y nuevas funcionalidades se añaden regularmente.
