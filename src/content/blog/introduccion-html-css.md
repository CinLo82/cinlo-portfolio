---
title: "Desarrollo web: Introducción a HTML y CSS"
description: "Funciones y Comprendiendo Variables"
pubDate: 'Jul 23 2024'
heroImage: "../img/html-css.jpg"
---

## Introducción a HTML y CSS


![HTML y CSS](/img/html-css.jpg)

En esta entrega de nuestra serie sobre desarrollo web, exploraremos los fundamentos de HTML y CSS, dos tecnologías esenciales para la creación de sitios web. Si estás comenzando en este emocionante mundo, este artículo es para ti.

## HTML: La Estructura de la Web

HTML (HyperText Markup Language) es el lenguaje de marcado que define la estructura de las páginas web. Utiliza etiquetas para organizar el contenido y crear la base de cualquier sitio.

### Estructura Básica de un Documento HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primer Documento HTML</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es un párrafo de texto en HTML.</p>
</body>
</html>
```
En este ejemplo, <!DOCTYPE html> declara que el documento es un archivo HTML5. Las etiquetas <head> y <body> organizan el contenido y la metadata.

### Elementos Comunes en HTML

```html
Encabezados: <h1> a <h6> para definir títulos.
Párrafos: <p> para texto.
Enlaces: <a> para crear hipervínculos.
Imágenes: <img> para insertar imágenes.
```

## CSS: Estilizando la Web

CSS (Cascading Style Sheets) es el lenguaje que se utiliza para describir la presentación de un documento HTML. Permite definir estilos como colores, fuentes y diseño.

### Sintaxis Básica de CSS

```css

body {
    background-color: #f0f0f0;
    color: #333;
}

h1 {
    font-size: 2 em;
    text-align: center;
}

```
En este ejemplo, estamos aplicando un color de fondo y un color de texto al cuerpo del documento, así como un tamaño de fuente y alineación al encabezado. <h1>

## Selectores en CSS
**Selectores de tipo:** Seleccionan elementos por su nombre (ej. h1, p). <br />
**Selectores de clase:** Seleccionan elementos con una clase específica (ej. .mi-clase). <br />
**Selectores de ID:** Seleccionan un elemento único con un ID específico (ej. #mi-id).

## Integrando HTML y CSS
Para aplicar estilos CSS a un documento HTML, puedes utilizar diferentes métodos:

### 1. Estilos en línea

```html
<h1 style="color: blue;">¡Hola, mundo!</h1>
```

### 2. Estilos internos

```html
<head>
    <style>
        h1 {
            color: red;
        }
    </style>
</head>

```
### 3. Estilos externos

```html
<link rel="stylesheet" href="styles.css">
```
Este último método es el más recomendado, ya que permite mantener el HTML y CSS separados, facilitando la organización y mantenimiento del código.

## 

**En este artículo, hemos cubierto los conceptos básicos de HTML y CSS, que son fundamentales para cualquier desarrollador web. Aprender a estructurar y estilizar tus páginas es el primer paso en tu viaje hacia la creación de sitios web atractivos y funcionales. En el próximo artículo, profundizaremos en JavaScript y su papel en la interactividad de las páginas web. ¡Sigue aprendiendo y disfrutando del desarrollo web! 🚀✨**