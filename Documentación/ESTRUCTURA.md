# 📁 Estructura del Proyecto

## ✅ Proyecto Organizado en Carpetas

El proyecto ha sido reorganizado profesionalmente en carpetas para mejor mantenimiento y claridad.

## 🗂️ Estructura Completa

```
Cartitas_mi_Amorcito/
│
├── 📄 index.html              ← Punto de entrada (abre este archivo)
├── 📄 manifest.json           ← Configuración PWA
├── 📄 service-worker.js       ← Cache offline
├── 📄 README.md              ← Documentación principal
├── 📄 .gitignore             ← Archivos ignorados por Git
│
├── 📁 html/                  ← Páginas HTML
│   ├── Pagina_Principal.html  (12 cartas en grid)
│   └── Carta.html             (vista individual de carta)
│
├── 📁 css/                   ← Hojas de estilo
│   ├── Pagina_Principal.css   (estilos del grid)
│   └── Carta.css              (estilos de carta individual)
│
├── 📁 js/                    ← Lógica JavaScript
│   └── cartas.js              (sistema de cartas + localStorage)
│
├── 📁 test/                  ← Herramientas de prueba
│   └── test.html              (diagnóstico del sistema)
│
└── 📁 imagenes/              ← Recursos gráficos
    ├── fondo-mario.jpg        (fondo de Super Mario Bros)
    └── icono-carta.png        (icono de sobre)
```

## 🎯 Archivos por Función

### 🚀 Inicio
- **index.html** - Abre este archivo para iniciar la aplicación

### 🎨 Interfaz de Usuario
- **html/Pagina_Principal.html** - Pantalla principal con 12 sobres
- **html/Carta.html** - Vista de carta individual con animación

### 💅 Estilos
- **css/Pagina_Principal.css** - Diseño responsive del grid
- **css/Carta.css** - Animación de apertura de sobre

### ⚙️ Funcionalidad
- **js/cartas.js** - Sistema completo de cartas con:
  - Array de 12 cartas (5 especiales + 7 emocionales)
  - Sistema de bloqueo por fechas
  - Restricción de 1 carta por día
  - Relectura ilimitada de cartas abiertas
  - Persistencia con localStorage

### 📱 PWA (Progressive Web App)
- **manifest.json** - Configuración para instalar como app móvil
- **service-worker.js** - Funcionamiento offline

### 🧪 Pruebas
- **test/test.html** - Herramientas de diagnóstico:
  - Probar generación de cartas
  - Ver estado de todas las cartas
  - Verificar sistema de fechas
  - Ver progreso
  - Resetear sistema

## 📝 Cómo Usar

### Para Abrir la App
1. Abre `index.html` (raíz del proyecto)
2. La app se cargará automáticamente

### Para Personalizar Mensajes
1. Abre `js/cartas.js`
2. Edita el array `cartas`
3. Modifica los textos de `mensaje`

### Para Cambiar Estilos
1. Abre `css/Pagina_Principal.css` (para el grid)
2. O abre `css/Carta.css` (para las cartas individuales)
3. Modifica colores, tamaños, animaciones

### Para Probar el Sistema
1. Abre `test/test.html`
2. Usa los botones de prueba
3. Verifica que todo funcione correctamente

## 🔗 Referencias de Rutas

### Desde la raíz (/)
```
index.html → html/Pagina_Principal.html
```

### Desde html/
```
html/Pagina_Principal.html → ../css/Pagina_Principal.css
html/Pagina_Principal.html → ../js/cartas.js
html/Pagina_Principal.html → ../imagenes/icono-carta.png
html/Carta.html → Carta.html (misma carpeta)
```

### Desde css/
```
css/Pagina_Principal.css → ../imagenes/fondo-mario.jpg
css/Carta.css → ../imagenes/fondo-mario.jpg
```

### Desde test/
```
test/test.html → ../js/cartas.js
test/test.html → ../html/Pagina_Principal.html
```

## ✨ Ventajas de Esta Estructura

✅ **Organización Clara**: Cada tipo de archivo tiene su carpeta
✅ **Fácil Mantenimiento**: Encuentras rápido lo que buscas
✅ **Profesional**: Estructura estándar de proyectos web
✅ **Escalable**: Fácil agregar más archivos en el futuro
✅ **Limpio**: El código está separado de las vistas
✅ **Modular**: Cada componente en su lugar

## 🚀 Próximos Pasos

1. ✅ Estructura organizada
2. ⏳ Guardar imágenes en `imagenes/`
3. ⏳ Personalizar mensajes en `js/cartas.js`
4. ⏳ Probar con `test/test.html`
5. ⏳ Compartir la app

---

**Nota**: Todas las referencias de rutas han sido actualizadas automáticamente. La app funciona igual que antes, solo que ahora está mejor organizada. 🎉
