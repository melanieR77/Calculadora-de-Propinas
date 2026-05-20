# 🧾 Calculadora de Propinas — Sofía

Aplicación React con Tailwind CSS para calcular propinas de forma rápida y sencilla.

---

## 📋 Instrucciones para correr el proyecto

### 1. Prerrequisitos
Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) v16 o superior
- npm (incluido con Node.js)

### 2. Instalar dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

> Esto instalará React, React Scripts y Tailwind CSS automáticamente.

### 3. Iniciar la aplicación

```bash
npm start
```

La app se abrirá en tu navegador en: **http://localhost:3000**

---

## 🗂️ Estructura del proyecto

```
tip-calculator/
├── public/
│   └── index.html          # HTML base
├── src/
│   ├── App.jsx             # ← Componente principal (aquí trabajas)
│   ├── index.js            # Punto de entrada de React
│   └── index.css           # Estilos globales + Tailwind
├── tailwind.config.js      # Configuración de Tailwind
└── package.json
```

---

## ✅ Funcionalidades ya implementadas

- [x] Campo para ingresar el monto de la cuenta
- [x] Selección de porcentaje (10%, 15%, 20%)
- [x] Cálculo automático de propina y total
- [x] Botón de limpiar / reiniciar
- [x] Diseño con Tailwind CSS
- [x] Moneda en Lempiras (HNL)

---

## 💡 Cosas que puedes mejorar o agregar

- [ ] Porcentaje personalizado (input libre)
- [ ] División entre varias personas
- [ ] Cambiar la moneda (HNL, USD, etc.)
- [ ] Guardar historial de cálculos
- [ ] Animaciones al mostrar resultados

---

## 🎨 Tecnologías usadas

| Tecnología | Versión |
|---|---|
| React | 18 |
| Tailwind CSS | 3 |
| Google Fonts | Playfair Display + DM Sans |
