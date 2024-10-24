---
title: "TypeScript: Crea tu Portafolio con Astro"
description: "Guía paso a paso para crear un portafolio web usando TypeScript y Astro"
pubDate: 'Oct 23 2024'
heroImage: "../img/lucio.jpg"
---

## Crea tu portafolio con Astro

## ![Astro Portfolio](/img/lucio.jpg)

Si eres desarrollador web y quieres construir un portafolio moderno, rápido y fácil de mantener, **Astro** es una excelente opción. En este artículo, te guiaré paso a paso en la creación de un portafolio personal utilizando **Astro** junto con **TypeScript**, una herramienta poderosa que te permite añadir tipado a tu código y detectar errores con mayor facilidad durante el desarrollo.

## ¿Qué es Astro?

**Astro** es un **generador de sitios estáticos** que permite crear sitios modernos y rápidos. Su característica principal es que renderiza HTML de manera estática y solo utiliza JavaScript o TypeScript cuando es absolutamente necesario, lo que mejora el rendimiento.

### Ventajas de Usar Astro con TypeScript

**Cero JavaScript por defecto**: Menos código en el navegador, lo que reduce el tiempo de carga.<br>
**Compatibilidad con múltiples frameworks**: Puedes usar React, Vue, Svelte o Solid.<br>
**TypeScript integrado**: Mejor detección de errores, tipado estático y autocompletado para una mejor experiencia de desarrollo.

## Inicia tu Proyecto con Astro y TypeScript

### Paso 1: Instalar Astro

Primero, necesitas instalar Astro. En tu terminal, ejecuta el siguiente comando:

```bash
npm create astro@latest
```
Durante el proceso de configuración, asegúrate de seleccionar TypeScript como tu lenguaje preferido. Esto permitirá que tu proyecto use TypeScript desde el inicio, garantizando un mejor manejo de tipos en tu código.

### Paso 2: Estructura del Proyecto
Astro organiza el proyecto en directorios clave como src, public, y pages. En la carpeta pages es donde crearás las diferentes secciones de tu portafolio.

Por ejemplo, para tu página de inicio, crea el archivo src/pages/index.astro:

```astro
---
title: "Bienvenido a Mi Portafolio"
---

<h1>Hola, soy Cintia Losada</h1>
<p>Desarrolladora web especializada en frontend.</p>
```
Astro permite usar sintaxis similar a HTML, pero con la potencia de TypeScript para manejar cualquier lógica que necesites.

### Paso 3: Añadir TypeScript
Astro te permite incluir lógica usando TypeScript sin que se genere JavaScript innecesario. Para usar TypeScript en tu archivo .astro, puedes escribir código tipado directamente:

```typescript
---
interface Proyecto {
  nombre: string;
  descripcion: string;
}

let proyectos: Proyecto[] = [
  { nombre: "Proyecto 1", descripcion: "Un sitio web de ecommerce" },
  { nombre: "Proyecto 2", descripcion: "Un blog personal" }
];
---

<h2>Mis Proyectos</h2>
<ul>
  {proyectos.map((proyecto) => (
    <li>
      <strong>{proyecto.nombre}</strong>: {proyecto.descripcion}
    </li>
  ))}
</ul>
```
El uso de interfaces y el tipado estático en TypeScript te ayudará a evitar errores comunes y mejorar la calidad del código.

### Paso 4: Estilos con Tailwind CSS
Astro también es compatible con Tailwind CSS, un framework muy popular para estilos. Para instalar Tailwind, sigue estos pasos:

```bash
npm install -D tailwindcss
npx tailwindcss init
```
Luego, añade las directivas de Tailwind en src/styles/global.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
A partir de aquí, puedes usar clases de Tailwind en tus componentes para estilizar rápidamente tu portafolio.

### Paso 5: Integración de HTML, CSS y TypeScript
Astro permite una integración fluida de HTML y CSS con la lógica de TypeScript. Puedes crear componentes reutilizables que combinen ambos, como una galería de proyectos:

```astro
---
interface Proyecto {
  nombre: string;
  imagen: string;
}

const proyectos: Proyecto[] = [
  { nombre: "Proyecto 1", imagen: "/img/proyecto1.jpg" },
  { nombre: "Proyecto 2", imagen: "/img/proyecto2.jpg" }
];
---

<h2>Galería de Proyectos</h2>
<div class="gallery">
  {proyectos.map((proyecto) => (
    <div class="project-card">
      <img src={proyecto.imagen} alt={proyecto.nombre} />
      <h3>{proyecto.nombre}</h3>
    </div>
  ))}
</div>

<style>
  .gallery {
    display: grid;
    gap: 1rem;
  }
  .project-card {
    border: 1px solid #ddd;
    padding: 1rem;
  }
</style>
```
Este ejemplo muestra cómo puedes crear una galería de proyectos usando TypeScript para gestionar los datos y CSS o Tailwind para el diseño.

## Despliegue y Optimización
Una vez que hayas completado el desarrollo de tu portafolio, puedes construir el sitio para producción con:

```bash
npm run build
```
Esto generará archivos estáticos en la carpeta dist que puedes desplegar en plataformas como Netlify, Vercel o cualquier servicio de hosting estático.

Astro optimiza automáticamente tu sitio, minimizando el uso de JavaScript en el navegador y entregando HTML estático para una carga ultrarrápida.

### Conclusión
Crear un portafolio con Astro y TypeScript es una excelente manera de destacar tus habilidades como desarrollador web. La combinación de un sitio ligero y rápido con el poder de TypeScript te permitirá ofrecer una experiencia de usuario optimizada y profesional. ¡Sigue explorando las posibilidades con Astro y lleva tu portafolio al siguiente nivel!