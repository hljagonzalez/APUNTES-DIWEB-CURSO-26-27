# Sistema de Iconografía para Design System

Guía para crear un sistema de iconografía escalable mediante componentes y variantes en Figma.

[Volver a la UD1](01_Planificacion_de_Interfaces.md) | [Volver al Índice General](../INDICE_GENERAL.md) | 🌐 [Abrir infografía interactiva en el navegador](https://hljagonzalez.github.io/APUNTES-DIWEB-CURSO-26-27/UD1_Planificacion_Interfaces/sistema_iconografia.html)

---

## 🎯 ¿Por qué necesitas un sistema de iconos?

Los iconos son el lenguaje visual de tu interfaz:
* ⚡ **Comunicación rápida:** Transmiten significados de forma instantánea sin obligar al usuario a leer bloques de texto.
* ✨ **Consistencia visual:** Un estilo uniforme de trazado, grosor y relleno otorga coherencia y acabado profesional a toda la aplicación.
* 🌍 **Universalidad:** Superan las barreras lingüísticas y culturales.

---

## 📚 Bibliotecas de Iconos Recomendadas

| Biblioteca | Creador / Estilo | Características | Plugin en Figma |
| --- | --- | --- | --- |
| ⭐ **Lucide Icons** *(Recomendada)* | Open Source • Moderno | +1000 iconos consistentes, diseño limpio y vectorización perfecta. Muy empleada en la industria actual. | `Lucide Icons` |
| **Heroicons** | Tailwind CSS | Creada por el equipo de Tailwind; disponible en estilos *outline* y *solid*. | `Heroicons` |
| **Feather Icons** | Minimalista | Iconos vectoriales sencillos con grosor uniforme de 2px. | `Feather Icons` |
| **Material Symbols / Icons** | Google | La biblioteca oficial de Google con múltiples variantes (*outlined, filled, rounded, sharp*). | `Material Design Icons` |

> **Recomendación:** Para comenzar un proyecto desde cero, utiliza **Lucide Icons**. Es gratuita, moderna, completa y mantiene un grosor y escala homogéneos en todo su catálogo.

---

## 🔧 Creación de Componentes de Iconos con Variantes en Figma (Paso a Paso)

### Paso 1: Importar los iconos base
1. Pulsa `Shift + I` o ve a la pestaña **Assets** en Figma.
2. Localiza la biblioteca elegida (ej. *Lucide Icons*) y arrastra al lienzo dos iconos representativos (por ejemplo, `Star` y `Repeat`).

### Paso 2: Desvincular la instancia (Detach)
1. Selecciona los iconos importados.
2. Haz clic derecho → **Detach instance** (`Cmd + Alt + B` en Mac / `Ctrl + Alt + B` en Windows).
3. Esto convierte el icono en vectores editables dentro de tu propio archivo.

### Paso 3: Estandarizar medidas y color base
1. Configura ambos marcos a una dimensión cuadrada estándar de **24 × 24 px**.
2. Asigna color inicial negro (`#000000`).
3. Nombra las capas limpiamente como `Star` y `Repeat`.

### Paso 4: Crear componentes múltiples y combinarlos como variantes (Clave)
1. Selecciona ambos iconos a la vez.
2. Despliega el menú superior de componentes y selecciona **Create multiple components** (`Cmd + Alt + Shift + K`).
3. Marca inmediatamente la opción **Combine as variants**.
4. Nombra la primera propiedad como **`Type`** (valores: `Star`, `Repeat`).

### Paso 5: Añadir la propiedad de Tamaño (`Size`)
1. Selecciona el contenedor morado del componente principal y cámbiale el nombre a **`Icons`**.
2. Entra en el componente, duplica ambas variantes (`Cmd + D`) y reduce el tamaño de las copias a **12 × 12 px**.
3. Selecciona el componente principal, añade una nueva propiedad de tipo *Variant* y nómbrala **`Size`**.
4. Asigna el valor `24` a los iconos originales y `12` a los iconos reducidos.

### Paso 6: Añadir la propiedad de Color (`Color`)
1. Selecciona las 4 variantes creadas (`Star-24`, `Star-12`, `Repeat-24`, `Repeat-12`) y duplícalas (`Cmd + D`).
2. Cambia el color de relleno o trazado de los nuevos duplicados a blanco (`#ffffff`).
3. En el componente principal, añade una nueva propiedad *Variant* llamada **`Color`** con valores `Black` y `White`.
4. Habrás generado una matriz completa de **8 variantes** ($2 \text{ tipos} \times 2 \text{ tamaños} \times 2 \text{ colores}$).

### Paso 7: Organización visual en el lienzo
- Distribuye las variantes en una cuadrícula lógica dentro del marco contenedor morado, separándolas mediante múltiplos de 8px (ej. 16px o 24px).

### Paso 8: Uso del componente desde la interfaz
- Desde **Assets**, arrastra una instancia de `Icons` a cualquier pantalla o botón.
- En el panel lateral derecho dispondrás de tres selectores desplegables: **`Type`**, **`Size`** y **`Color`**, permitiendo cambiar cualquier icono instantáneamente.

---

## ⚠️ Errores comunes a evitar

* **Olvidar marcar "Combine as variants":** Si no se activa, se generan componentes individuales desconectados en lugar de un sistema unificado.
* **Nombres de propiedades inconsistentes:** Recuerda que Figma distingue entre mayúsculas y minúsculas (`Size` vs `size`).
* **Frame contenedor vs Trazo interior:** Asegúrate de modificar las propiedades del componente en el marco exterior y los colores/trazos en el vector interior.
* **Ajuste de grosor (stroke) en tamaños reducidos:** Un icono diseñado con trazo de 2px a 24px puede empastarse al reducirse a 12px; en tamaños inferiores a 16px conviene reducir proporcionalmente el grosor a 1px o 1.5px para preservar la legibilidad.
