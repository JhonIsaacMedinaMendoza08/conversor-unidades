# ⚙️ Conversor de Unidades Universal

Una aplicación de consola sencilla desarrollada con **Node.js** que permite convertir entre diferentes tipos de unidades: temperatura, peso, longitud, tiempo, velocidad, entre otras, de forma interactiva, sin necesidad de internet ni herramientas externas.

---

## ✅ Problema que resuelve

Los usuarios a menudo necesitan realizar conversiones de unidades (por ejemplo: pasar de kilómetros a millas, de Celsius a Fahrenheit, etc.). En lugar de usar Google o aplicaciones externas, esta herramienta permite hacer esas conversiones **directamente desde la terminal**, con una experiencia rápida, simple y funcional.

---

## 🚀 Funcionalidades principales

- Conversión de unidades entre múltiples categorías (longitud, masa, temperatura, etc.)
- Visualización de todas las unidades disponibles agrupadas por tipo
- Historial de conversiones guardado en archivo `historial.txt` local
- Menú interactivo con una interfaz amigable por consola

---

## 📦 Librerías utilizadas

### [🔗 convert-units](https://www.npmjs.com/package/convert-units)
Librería que permite convertir entre una amplia variedad de unidades físicas de forma precisa y sencilla.

### [🔗 inquirer](https://www.npmjs.com/package/inquirer)
Permite crear menús interactivos y recoger información del usuario por consola.

### [🔗 chalk](https://www.npmjs.com/package/chalk)
Da formato con colores y estilos a los textos de consola para una mejor experiencia visual.

---

## 🧠 ¿Cómo funciona?

Al ejecutar el programa, se presenta un menú interactivo desarrollado con `inquirer`, que permite al usuario elegir el tipo de unidad a convertir. Luego, se realiza la conversión utilizando `convert-units` y el resultado se guarda automáticamente en un archivo local (`historial.txt`) mediante el módulo `fs`.

---

## 🛠️ Instalación y ejecución

### 1. Clona este repositorio:

```bash
git clone https://github.com/JhonIsaacMedinaMendoza08/conversor-unidades.git
cd conversor-unidades
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Ejecuta el programa
```bash
node main.js
```


## 📂 Estructura del proyecto
```bash
conversor-unidades/
├── index.js           // Código principal del programa
├── historial.txt      // Archivo donde se guarda el historial de conversiones
└── package.json       // Dependencias y configuración del proyecto
```

## 📹 Video demostrativo

Aquí puedes ver una demostración en video del funcionamiento del proyecto:
🔗 [Ver video en YouTube](https://youtu.be/qQ-Unb2XakM)  


---

## 👨‍💻 Autor

**Jhon Isaac Medina Mendoza**  
📍 Taller NPM – Aplicación de consola con Node.js  
📅 Julio 2025
