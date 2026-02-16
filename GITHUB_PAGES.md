# 🚀 Guía Completa: Subir a GitHub Pages

## 📋 Requisitos Previos

- ✅ Tener una cuenta de GitHub (gratis en https://github.com)
- ✅ Tener Git instalado en tu computadora
- ✅ Tu proyecto organizado (¡ya lo tienes!)

---

## 🎯 MÉTODO 1: Desde la Web (Más Fácil)

### Paso 1: Crear una Cuenta en GitHub
1. Ve a https://github.com
2. Haz clic en "Sign up" (si no tienes cuenta)
3. Completa el registro con tu email
4. Verifica tu correo electrónico

### Paso 2: Crear un Nuevo Repositorio
1. Una vez dentro de GitHub, haz clic en el botón **"+"** arriba a la derecha
2. Selecciona **"New repository"**
3. Configura así:
   - **Repository name**: `cartitas-amorcito` (o el nombre que prefieras)
   - **Description**: "Aplicación web de cartitas de amor"
   - **Public** ✅ (debe ser público para GitHub Pages gratis)
   - **NO** marques "Add a README file" (ya lo tienes)
   - **NO** agregues .gitignore (ya lo tienes)
4. Haz clic en **"Create repository"**

### Paso 3: Subir Archivos desde la Web
1. En la página del repositorio recién creado, verás un botón **"uploading an existing file"**
2. Haz clic en ese enlace
3. **Arrastra TODA la carpeta** `Cartitas_mi_Amorcito` (o los archivos dentro)
4. **IMPORTANTE**: Asegúrate de subir:
   - ✅ index.html (en la raíz)
   - ✅ manifest.json
   - ✅ service-worker.js
   - ✅ Carpetas: html/, css/, js/, imagenes/
   - ✅ README.md
5. Escribe un mensaje de commit: "Primera versión de la app"
6. Haz clic en **"Commit changes"**

### Paso 4: Activar GitHub Pages
1. En tu repositorio, haz clic en **"Settings"** (arriba a la derecha)
2. En el menú lateral izquierdo, busca y haz clic en **"Pages"**
3. En la sección **"Source"**, selecciona:
   - **Branch**: `main` (o `master` si es tu caso)
   - **Folder**: `/ (root)`
4. Haz clic en **"Save"**
5. Espera 1-2 minutos
6. ¡Recarga la página! Verás tu URL publicada:
   ```
   https://TU-USUARIO.github.io/cartitas-amorcito/
   ```

### Paso 5: Verificar que Funciona
1. Haz clic en el enlace que te da GitHub Pages
2. Verifica que:
   - ✅ Se ve el fondo de Mario Bros
   - ✅ Aparecen los 12 sobres
   - ✅ Puedes abrir cartas
3. **Compartir**: Copia el link y compártelo con tu pareja 💕

---

## 🎯 MÉTODO 2: Con Git (Recomendado para Actualizaciones)

### Paso 1: Verificar que Git está Instalado
Abre PowerShell y ejecuta:
```powershell
git --version
```

Si no está instalado, descárgalo de: https://git-scm.com/download/win

### Paso 2: Configurar Git (Solo Primera Vez)
```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"
```

### Paso 3: Crear Repositorio en GitHub
1. Ve a https://github.com
2. Haz clic en **"+"** → **"New repository"**
3. **Repository name**: `cartitas-amorcito`
4. **Public** ✅
5. **NO** marques "Add a README file"
6. Haz clic en **"Create repository"**
7. **Copia la URL** que te da (ejemplo: `https://github.com/TU-USUARIO/cartitas-amorcito.git`)

### Paso 4: Inicializar Git en tu Proyecto
Abre PowerShell en la carpeta de tu proyecto:

```powershell
# Navegar a tu proyecto
cd "g:\Mi unidad\TI\Cartitas_mi_Amorcito"

# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Crear el primer commit
git commit -m "Primera versión de la aplicación de cartitas"

# Cambiar la rama principal a "main"
git branch -M main

# Conectar con GitHub (CAMBIA TU-USUARIO por tu nombre de usuario)
git remote add origin https://github.com/TU-USUARIO/cartitas-amorcito.git

# Subir los archivos
git push -u origin main
```

**Nota**: Te pedirá usuario y contraseña de GitHub. Si tienes autenticación de 2 factores, necesitarás un [Personal Access Token](https://github.com/settings/tokens).

### Paso 5: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. **Source**: `main` branch, `/ (root)` folder
4. Haz clic en **"Save"**
5. Espera 1-2 minutos
6. Tu sitio estará en: `https://TU-USUARIO.github.io/cartitas-amorcito/`

---

## 🔄 Actualizar la Aplicación (Después de Cambios)

Si haces cambios en tu proyecto y quieres actualizarlo en GitHub Pages:

```powershell
# Navegar a tu proyecto
cd "g:\Mi unidad\TI\Cartitas_mi_Amorcito"

# Ver qué archivos cambiaron
git status

# Agregar los cambios
git add .

# Crear un commit con descripción
git commit -m "Actualizar mensajes de cartas"

# Subir los cambios
git push
```

GitHub Pages se actualizará automáticamente en 1-2 minutos.

---

## 📱 Compartir con Tu Pareja

Una vez publicado, envíale el link:
```
https://TU-USUARIO.github.io/cartitas-amorcito/
```

### En iPhone/iPad:
1. Abrir el link en Safari
2. Tocar el botón "Compartir" 📤
3. "Agregar a pantalla de inicio"
4. ¡Ya tiene la app! 📱💕

### En Android:
1. Abrir el link en Chrome
2. Menú (⋮) → "Agregar a pantalla de inicio"
3. ¡Ya tiene la app! 📱💕

---

## 🔒 Privacidad

### ⚠️ IMPORTANTE: Tu repositorio será PÚBLICO
- Cualquiera con el link puede ver tus cartitas
- GitHub Pages gratuito solo funciona con repositorios públicos

### Opciones para Privacidad:

#### Opción 1: Usar un nombre de repositorio poco obvio
En lugar de `cartitas-amorcito`, usa algo como:
- `project-memories-2026`
- `special-app-mx`
- Código aleatorio: `app-7x9k2m`

#### Opción 2: Password Protect (Avanzado)
Agregar un sistema de contraseña requiere JavaScript. Si te interesa, puedo ayudarte a implementarlo.

#### Opción 3: Usar Netlify (Alternativa)
Netlify permite proyectos privados. Instrucciones abajo ⬇️

---

## 🌟 ALTERNATIVA: Netlify (Más Privacidad)

Netlify es mejor si quieres más control de privacidad.

### Paso 1: Crear Cuenta en Netlify
1. Ve a https://www.netlify.com
2. Haz clic en "Sign up"
3. Puedes registrarte con GitHub (más fácil)

### Paso 2: Subir tu Proyecto

#### Método A: Arrastrar y Soltar (Más Fácil)
1. En Netlify, ve a https://app.netlify.com/drop
2. **Arrastra toda la carpeta** `Cartitas_mi_Amorcito`
3. ¡Listo! Netlify te da una URL aleatoria:
   ```
   https://random-name-12345.netlify.app
   ```
4. Puedes personalizar el nombre en **Site settings** → **Change site name**

#### Método B: Conectar con GitHub
1. En Netlify, haz clic en "New site from Git"
2. Conecta con GitHub
3. Selecciona tu repositorio `cartitas-amorcito`
4. Configuración:
   - **Build command**: (dejar vacío)
   - **Publish directory**: `/`
5. Haz clic en "Deploy site"

### Paso 3: Password Protect (Gratis en Netlify)
1. Ve a **Site settings** → **Access control**
2. Activa "Password protection"
3. Establece una contraseña
4. Comparte la URL + contraseña solo con tu pareja

---

## 🆘 Solución de Problemas

### "Las imágenes no se ven"
✅ **Solución**: Verifica que la carpeta `imagenes/` se subió correctamente
- Ve a tu repositorio en GitHub
- Verifica que existe la carpeta `imagenes/`
- Verifica que contiene `fondo-mario.jpg` e `icono-carta.png`

### "Error 404"
✅ **Solución**: Verifica que:
1. GitHub Pages está activado (Settings → Pages)
2. El archivo `index.html` está en la raíz del repositorio
3. Esperaste 1-2 minutos para que se publique

### "Las cartas no se abren"
✅ **Solución**: Verifica en GitHub que:
1. La carpeta `js/` contiene `cartas.js`
2. La carpeta `html/` contiene los archivos HTML
3. La carpeta `css/` contiene los archivos CSS

### "Git me pide autenticación constantemente"
✅ **Solución**: Usa GitHub CLI o crea un Personal Access Token:
1. Ve a https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Marca el scope "repo"
4. Copia el token
5. Úsalo como contraseña cuando Git te lo pida

---

## ✅ Checklist Final

Antes de compartir con tu pareja:

- [ ] ✅ Subiste todos los archivos (html/, css/, js/, imagenes/)
- [ ] ✅ GitHub Pages está activado
- [ ] ✅ El sitio carga correctamente (visítalo en el navegador)
- [ ] ✅ Las 12 cartas aparecen
- [ ] ✅ Puedes abrir al menos una carta
- [ ] ✅ Las imágenes se ven bien
- [ ] ✅ Personalizaste los mensajes (¡no dejes los ejemplos!)
- [ ] ✅ Copiaste el link para compartir

---

## 🎁 Link Final

Tu link será algo así:
```
https://TU-USUARIO.github.io/cartitas-amorcito/
```

**¡Compártelo con tu pareja y sorpréndela! 💕🎉**

---

## 📚 Recursos Adicionales

- **GitHub Docs**: https://docs.github.com/pages
- **Git Tutorial**: https://git-scm.com/book/es/v2
- **Netlify Docs**: https://docs.netlify.com
- **Video Tutorial Git**: https://www.youtube.com/watch?v=HiXLkL42tMU (español)

---

**Nota**: Si tienes problemas, asegúrate de que tu estructura de carpetas sea exactamente como está ahora (con html/, css/, js/, etc.). GitHub Pages servirá los archivos exactamente como están en tu repositorio.
