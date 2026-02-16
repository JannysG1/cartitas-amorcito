# 🚀 GUÍA RÁPIDA DE INICIO

## ✅ ¡Tu aplicación está lista!

He creado una aplicación móvil completa para tus cartitas con **sistema de bloqueo por fechas y restricción diaria**.

## 🎯 Características Nuevas

### 🔐 Sistema Inteligente de Cartas
- **12 cartas totales**: 5 especiales con fechas + 7 emocionales
- **Una carta por día**: Solo se puede abrir una carta nueva cada día
- **Bloqueo por fechas**: Cartas especiales se desbloquean en fechas importantes
- **Progreso guardado**: Todo se guarda automáticamente en el navegador
- **Iconos grandes**: Sin fondo, solo el icono del sobre flotante
- **Estados visuales**: Bloqueadas (🔒), Disponibles (🔓), Abiertas (✅)

### 📅 Cartas Especiales Programadas
1. Primer Aniversario - 28 de noviembre
2. 6 Meses Juntos - 28 de mayo  
3. Tu Cumpleaños - 28 de agosto
4. Mi Cumpleaños - 23 de febrero
5. ¡Ya eres Ingeniero! - 1 de diciembre

### 💕 Cartas Emocionales (Para Cualquier Momento)
6. Cuando Estés Triste
7. Sí Te Quiero (cuando dude)
8. Después de Pelear
9. Celebrando Tu Felicidad
10. Te Extraño Tanto
11. Eres Increíble
12. Simplemente Te Amo

## 📦 Lo que he creado para ti:

### 🎨 Páginas Web
- ✅ **index.html** - Redirección automática (raíz del proyecto)
- ✅ **html/Pagina_Principal.html** - Pantalla principal con grid de sobres
- ✅ **html/Carta.html** - Vista de carta individual con animación

### 💅 Estilos
- ✅ **css/Pagina_Principal.css** - Diseño responsive de página principal
- ✅ **css/Carta.css** - Diseño con animación de sobre abriéndose

### ⚙️ Funcionalidad
- ✅ **js/cartas.js** - Sistema completo de 12 cartas + bloqueo por fechas
- ✅ **service-worker.js** - Funcionamiento offline (raíz)
- ✅ **manifest.json** - Configuración PWA para instalar como app (raíz)

### 📚 Documentación & Pruebas
- ✅ **README.md** - Documentación completa
- ✅ **test/test.html** - Página de pruebas y diagnóstico
- ✅ **.gitignore** - Para GitHub (opcional)

### Cómo Funciona

1. **12 Cartas Totales**
   - 5 cartas especiales con fechas específicas
   - 7 cartas emocionales para cualquier momento

2. **Una Carta por Día**
   - Solo puedes abrir UNA carta nueva cada día
   - Las cartas ya leídas se pueden releer sin límite
   - Esto hace que la experiencia sea más especial

3. **Bloqueo por Fechas**
   - Las 5 cartas especiales están bloqueadas hasta su fecha
   - Se desbloquean automáticamente el día indicado
   - Ideal para sorpresas programadas

4. **Estados Visuales**
   - 🔒 **Bloqueada**: Con candado, no se puede abrir
   - 🔓 **Disponible**: Lista para abrir hoy
   - ✅ **Abierta**: Ya leída, marca verde visible

---

## 🎯 PASO 1: Guardar las Imágenes (¡IMPORTANTE!)

**⚠️ Para que funcione, necesitas hacer esto primero:**

1. Abre el archivo 
2. Guarda tus 2 imágenes en la carpeta `imagenes` con estos nombres exactos:
   - `fondo-mario.jpg` (tu fondo de Super Mario Bros)
   - `icono-carta.png` (tu icono de sobre)

Sin las imágenes, verás espacios en blanco donde deberían aparecer.

## 🎯 PASO 2: Abrir la Aplicación

### Opción A: Con Live Server (Recomendado)
1. Instala la extensión "Live Server" en VS Code si no la tienes
2. Haz clic derecho en `index.html` (en la raíz del proyecto)
3. Selecciona "Open with Live Server"
4. ¡Listo! Se abrirá en tu navegador

### Opción B: Directamente en el navegador
1. Haz doble clic en `index.html` (en la raíz del proyecto)
2. Se abrirá en tu navegador predeterminado y redirigirá automáticamente
3. ¡Listo!

## 🎯 PASO 3: Personalizar las Cartas

### Editar Mensajes Existentes
1. Abre `js/cartas.js`
2. Busca el array `cartas`
3. Modifica los mensajes:
   ```javascript
   {
       id: 1,
       titulo: "Mi mensaje especial",
       fecha: "15 de febrero, 2026",
       mensaje: `
           <p>Tu mensaje aquí...</p>
           <p>Otro párrafo...</p>
           <p>Con emojis 💕</p>
       `
   }
   ```

### Agregar Más Cartas
Simplemente agrega más objetos al array con incrementando el `id`:
```javascript
{
    id: 7,
    titulo: "Carta nueva",
    fecha: "Tu fecha",
    mensaje: `<p>Mensaje nuevo...</p>`
}
```

## 🎯 PASO 4: Probar en tu Móvil

### Método 1: USB (Android)
1. Conecta tu móvil a la computadora
2. Copia toda la carpeta a tu móvil
3. Abre `index.html` (en la raíz) con Chrome

### Método 2: Compartir por email/WhatsApp
1. Comprime toda la carpeta en un ZIP
2. Envíala por email o WhatsApp
3. Descarga en el móvil y extrae
4. Abre con el navegador

### Método 3: Hosting online (Mejor opción)
Sube a internet para compartir con un link:
- **GitHub Pages** (gratis)
- **Netlify** (gratis) 
- **Vercel** (gratis)

Ver [README.md](README.md) sección "Hosting en Internet" para detalles.

## 🎯 PASO 5: Instalar como App (PWA)

Una vez que tengas la aplicación funcionando en tu móvil:

### En iPhone/iPad:
1. Abre en Safari
2. Toca el botón "Compartir" 📤
3. "Agregar a pantalla de inicio"
4. ¡Ya tienes una app!

### En Android:
1. Abre en Chrome
2. Menú (⋮) → "Agregar a pantalla de inicio"
3. O te aparecerá un banner automático
4. ¡Ya tienes una app!

## 🎨 Características de tu App

✨ **Lo que incluye:**
- 6 cartas pre-escritas listas para personalizar
- Animación de sobre abriéndose
- Diseño responsive (se adapta a cualquier pantalla)
- Funciona offline después de la primera carga
- Fondo personalizado de Super Mario Bros
- Iconos de sobre animados
- Colores románticos (rosa/morado)
- Efectos hover y transiciones suaves

## 📱 Compatibilidad

✅ Funciona en:
- iPhone (iOS Safari)
- Android (Chrome, Firefox)
- Tablets (iPad, Android)
- Computadoras (todos los navegadores modernos)

### Cambiar Colores

Edita los archivos CSS:
- `Pagina_Principal.css` - Para la página principal
- `Carta.css` - Para las cartas individuales

Busca las propiedades `background`, `color`, y `gradient` para cambiar los colores.

## 📁 Estructura de Archivos

```
Cartitas_mi_Amorcito/
├── index.html              # Redirección automática a la página principal
├── manifest.json           # Configuración PWA
├── service-worker.js       # Cache offline
├── README.md              # Este archivo
├── .gitignore             # Archivos ignorados por Git
├── html/
│   ├── Pagina_Principal.html  # Página principal con grid de sobres
│   └── Carta.html             # Página de carta individual
├── css/
│   ├── Pagina_Principal.css   # Estilos de página principal
│   └── Carta.css              # Estilos de carta individual
├── js/
│   └── cartas.js              # Base de datos y lógica de cartas
├── test/
│   └── test.html              # Página de pruebas y diagnóstico
└── imagenes/
    ├── fondo-mario.jpg        # Fondo de Super Mario Bros
    └── icono-carta.png        # Icono del sobre
```

## 🚀 Hosting en Internet

Para compartir tu aplicación en internet, puedes usar servicios gratuitos:

### GitHub Pages (Recomendado)
1. Crea una cuenta en GitHub
2. Crea un repositorio nuevo
3. Sube todos los archivos
4. Ve a Settings > Pages
5. Activa GitHub Pages
6. ¡Comparte el link!

### Netlify
1. Ve a [netlify.com](https://www.netlify.com)
2. Arrastra la carpeta del proyecto
3. ¡Listo! Te dan un link para compartir

### Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Importa tu proyecto
3. Despliega con un click

## 🆘 Problemas Comunes

### "No veo las imágenes"
→ Verifica que las guardaste con los nombres exactos en la carpeta `imagenes`

### "Los sobres no se abren"
→ Verifica que `js/cartas.js` está en la carpeta correcta y sin errores

### "Se ve raro en mi móvil"
→ Prueba actualizar la página o reiniciar el navegador

### "No puedo instalar como app"
→ Asegúrate de estar usando HTTPS (si está en un servidor) o abre desde localhost

## 💡 Próximos Pasos

1. ✅ Guarda tus imágenes (Paso 1)
2. ✅ Abre y prueba la aplicación (Paso 2)
3. ✅ Personaliza los mensajes (Paso 3)
4. ✅ Prueba en tu móvil (Paso 4)
5. ✅ Instala como app (Paso 5)
6. 🎁 ¡Comparte con tu persona especial!

## 📞 Necesitas Ayuda?

1. Lee el [README.md](README.md) completo
2. Revisa [INSTRUCCIONES_IMAGENES.md](INSTRUCCIONES_IMAGENES.md)
3. Consulta [PLANTILLAS_MENSAJES.md](PLANTILLAS_MENSAJES.md)
4. Abre la consola del navegador (F12) para ver errores

## 🎉 ¡Eso es Todo!

Tu aplicación está completamente funcional y lista para usar. Solo necesitas:
1. Guardar las imágenes
2. Personalizar los mensajes
3. ¡Disfrutar!

---

**Hecho con 💕 especialmente para ti**

¡Que disfrutes compartiendo tus cartitas! 💌
