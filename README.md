# 🟣 Portafolio — Julieth Vanessa Mena Ortega

Portafolio personal desarrollado con **Next.js 14**, CSS Modules y React Hooks.

## 🚀 Cómo correr el proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Correr en modo desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Compilar para producción
```bash
npm run build
npm start
```

## 📁 Estructura del proyecto

```
portfolio/
├── app/
│   ├── layout.js          # Layout raíz con fuentes y metadata
│   ├── page.js            # Página principal
│   └── globals.css        # Estilos globales + variables de color
│
├── components/
│   ├── Sidebar.js/.module.css       # Menú lateral con navegación activa
│   ├── SocialFloat.js/.module.css   # Íconos sociales flotantes a la derecha
│   ├── Hero.js/.module.css          # Sección bienvenida + stats animados
│   ├── About.js/.module.css         # Acerca de mí + barras de habilidades
│   ├── Projects.js/.module.css      # Tarjetas de proyectos con links
│   ├── Experience.js/.module.css    # Timeline académico y laboral
│   ├── Testimonials.js/.module.css  # Grid de 4 testimonios
│   ├── Game.js/.module.css          # 🎮 Typing Speed Challenge
│   ├── Contact.js/.module.css       # Formulario + info de contacto
│   └── Footer.js/.module.css        # Pie de página
│
└── public/
    └── cv-vanessa-mena.pdf          # ← Agrega tu CV aquí
```

## 🎨 Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--purple-400` | `#c084fc` | Acento principal |
| `--purple-500` | `#a855f7` | Botones, badges |
| `--purple-700` | `#7c3aed` | Textos morado oscuro |
| `--dark` | `#1a1025` | Sidebar y footer |
| `--light-bg` | `#faf5ff` | Fondo de secciones |

## 📝 Personalización

### Agregar tu foto de perfil
En `components/Hero.js`, reemplaza:
```jsx
<div className={styles.photoPlaceholder}>
  <i className="fas fa-user"></i>
</div>
```
Por:
```jsx
<div className={styles.photoPlaceholder}>
  <img src="/tu-foto.jpg" alt="Vanessa Mena" />
</div>
```
Y coloca tu foto en `public/tu-foto.jpg`.

### Agregar tu CV
Coloca tu archivo PDF en `public/cv-vanessa-mena.pdf`.

### Actualizar proyectos
Edita el array `projects` en `components/Projects.js` y actualiza los links de GitHub y demo.

## 🌐 Deploy en Vercel

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conecta tu repositorio de GitHub directamente en [vercel.com](https://vercel.com).

---
Hecho con 💜 en Pasto, Colombia
