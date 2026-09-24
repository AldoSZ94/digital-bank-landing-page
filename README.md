# ⭐ Digitalbank Landing Page

Landing page responsive inspirada en el reto de Frontend Mentor **"Digitalbank Landing Page"**.

El objetivo fue desarrollar una interfaz moderna y responsive para una plataforma de banca digital, implementando buenas prácticas de React y TypeScript, componentes reutilizables y un diseño adaptable utilizando Tailwind CSS.

---

## 📌 Descripción

Este proyecto consiste en una landing page para **Digitalbank**, una plataforma de banca digital enfocada en ofrecer servicios financieros modernos y accesibles.

La página presenta las principales características de la plataforma, una sección introductoria con llamada a la acción, información sobre sus servicios, artículos recientes y un footer con enlaces de navegación y redes sociales.

El proyecto fue desarrollado utilizando **React y TypeScript**, aplicando una arquitectura basada en componentes para mantener el código organizado, reutilizable y fácil de mantener.

La interfaz utiliza un enfoque **Mobile-First** y adapta su distribución a diferentes tamaños de pantalla mediante las utilidades responsive de Tailwind CSS.

Además, se implementó un menú de navegación responsive que permite mostrar y ocultar la navegación en dispositivos pequeños, utilizando estado con `useState` y efectos secundarios con `useEffect`.

---

## 🚀 Demo

👉 https://digital-bank-landing-page-aldosz94.netlify.app/

---

## 🛠️ Tecnologías utilizadas

- React
- TypeScript
- Tailwind CSS
- HTML5
- CSS3
- Vite

---

## 🎯 Características principales

- 📱 Diseño responsive con enfoque **Mobile-First**
- ⚛️ Desarrollo basado en componentes con React
- 🔷 Tipado estático mediante TypeScript
- 🎨 Diseño y estilos utilizando Tailwind CSS
- 🧩 Componentes reutilizables
- 📋 Renderizado dinámico de características y artículos mediante arrays tipados
- 🍔 Menú de navegación responsive para dispositivos móviles
- ⚙️ Uso de `useEffect` para gestionar efectos secundarios relacionados con el menú responsive
- 🔄 Detección de cambios en el viewport mediante `matchMedia` y eventos de cambio de breakpoint
- 🔒 Bloqueo del scroll de la página cuando el menú móvil está abierto
- ♿ Uso de atributos ARIA para mejorar la accesibilidad de elementos interactivos
- 🖼️ Adaptación de imágenes para diferentes tamaños de pantalla mediante `<picture>`
- 📐 Layouts responsive utilizando CSS Grid y Flexbox
- 🔗 Navegación y enlaces estructurados mediante componentes reutilizables

---

## 🧱 Estructura de componentes

El proyecto organiza la interfaz mediante diferentes componentes de React:

### Header

Contiene el logo, navegación principal, botón de solicitud de invitación y menú responsive para dispositivos pequeños.

El estado del menú se controla mediante el hook `useState` de React.

Además, se utiliza el hook `useEffect` para gestionar efectos secundarios relacionados con el comportamiento responsive del menú.

Uno de los efectos utiliza `window.matchMedia()` para detectar cuando el viewport alcanza el breakpoint de `480px` y cerrar automáticamente el menú móvil.

También se utiliza `useEffect` para bloquear el scroll del documento mientras el menú móvil está abierto y restaurarlo cuando el menú se cierra.

Los efectos incluyen funciones de limpieza mediante `return`, utilizadas para eliminar listeners y restaurar el estado original del documento.

### Hero

Sección principal de la landing page que presenta:

- Título principal
- Descripción de Digitalbank
- Call to action
- Ilustración responsive
- Mockups de la aplicación

### Features

Presenta las principales características de Digitalbank:

- Online Banking
- Simple Budgeting
- Fast Onboarding
- Open API

Las características se almacenan en un archivo independiente y se renderizan dinámicamente mediante `map()`.

### Latest Articles

Muestra los artículos más recientes de Digitalbank.

Cada artículo contiene:

- Imagen
- Autor
- Título
- Descripción
- Enlace

La información también se mantiene separada de la interfaz mediante un archivo de datos tipado con TypeScript.

### Footer

Incluye:

- Logo
- Enlaces de navegación
- Redes sociales
- Botón de solicitud de invitación
- Información de copyright

### MainButton

Componente reutilizable para los botones principales de la aplicación.

Permite personalizar:

- Texto
- Enlace
- Clases CSS

mediante props opcionales.

---

## 📂 Organización de datos

La información utilizada en las secciones dinámicas se encuentra separada de los componentes.

Por ejemplo, las características de Digitalbank se definen mediante una interfaz de TypeScript:

```ts
export interface FeatureItem {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
}
```

Esto permite mantener una estructura de datos consistente y aprovechar el tipado estático de TypeScript.

Los artículos siguen un enfoque similar, manteniendo la información independiente de la interfaz.

---

## 🧠 Aprendizajes

Durante este proyecto reforcé conceptos relacionados con:

- Desarrollo de interfaces utilizando React
- Uso de componentes reutilizables
- Manejo del estado con `useState`
- Uso de efectos secundarios con `useEffect`
- Uso de dependencias en `useEffect`
- Implementación de funciones de limpieza (`cleanup`) en efectos
- Uso de listeners para detectar cambios en el viewport
- Uso de `window.matchMedia()` para trabajar con breakpoints desde JavaScript
- Bloqueo y restauración del scroll mediante efectos secundarios
- Uso de props para crear componentes configurables
- Tipado de datos mediante interfaces de TypeScript
- Renderizado dinámico utilizando `map()`
- Organización de información en módulos independientes
- Diseño responsive con Tailwind CSS
- Uso de CSS Grid y Flexbox
- Implementación de navegación responsive
- Uso de atributos ARIA para mejorar la accesibilidad
- Uso del elemento `<picture>` para adaptar imágenes según el viewport
- Organización y separación de responsabilidades dentro de una aplicación React

---

## 📚 Inspiración

Proyecto basado en el reto de Frontend Mentor:

**Digitalbank Landing Page**

https://www.frontendmentor.io/challenges/digital-bank-landing-page-WaUhkoDN

---

## 👨‍💻 Autor

Desarrollado por **Aldo Sandoval Zepeda**

_(Frontend Developer en formación con enfoque en desarrollo de interfaces modernas y responsivas.)_

---

## ⭐ Notas finales

Este proyecto forma parte de mi portafolio y demuestra habilidades en desarrollo frontend utilizando **React, TypeScript y Tailwind CSS**, así como conocimientos en creación de componentes reutilizables, manejo de estado, efectos secundarios, tipado de datos, diseño responsive, accesibilidad y organización de proyectos.

El proyecto busca representar una landing page moderna para una plataforma de banca digital, manteniendo una estructura de código organizada y orientada a la reutilización de componentes.
