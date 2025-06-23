# React Islands in .NET MVC
🌐 [Live Demo](https://react-dotnet-demo.onrender.com/)

Bring modern React components to your existing .NET MVC (Razor) app **without turning it into a full SPA**.

This project shows how to use **Vite** + **React** to inject interactive components into Razor pages using the [islands architecture](https://www.patterns.dev/vanilla/islands-architecture/) — just like [Astro.js](https://astro.build), but in a .NET environment.

---

## 🔥 Why This Exists

Modern frameworks like Astro.js solve performance issues with "islands" — small interactive components rendered in otherwise static pages.

But what if you're using .NET MVC?

> **This repo shows how to build your own islands architecture using Razor, Vite, and just a few lines of JS.**

---

## ✨ Features

- ✅ Inject React components into Razor views
- ⚡️ Uses Vite to bundle React for fast builds & dev experience
- 🔍 JavaScript only loads where needed — no global hydration
- 🧱 Works with any .NET MVC app (no rewrite)
- 🧪 Includes examples of Tailwind, Framer Motion, and animated hero sections

---

## 🧠 How It Works

1. Razor renders HTML with `data-island="ComponentName"` and optional props
2. A small JS loader finds those elements and dynamically imports the correct React component
3. React mounts **only** in those specific places — not the whole page
4. Vite bundles each island as a static asset (`/dist/`) with a manifest

```html
<!-- Razor -->
<div data-island="HeroBanner" data-props='{"title":"Hello from Razor"}'></div>
