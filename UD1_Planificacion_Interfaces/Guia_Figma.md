# Guía: Colaboración y Organización en Figma

Guía práctica de organización de archivos, gestión de equipos y flujos de trabajo en Figma para el ciclo de **Desarrollo de Aplicaciones Web (DAW)**.

[Volver a la UD1](01_Planificacion_de_Interfaces.md) | [Volver al Índice General](../INDICE_GENERAL.md) | 🌐 [Abrir infografía interactiva en el navegador](https://hljagonzalez.github.io/APUNTES-DIWEB-CURSO-26-27/UD1_Planificacion_Interfaces/guia_figma.html)

---

## 1. DRAFTS vs PROJECTS: Organización de Archivos

### 📝 DRAFTS (Borradores)
* **¿Qué son?** Tu espacio personal de trabajo. Todos los archivos nuevos se crean aquí por defecto y solo tú tienes acceso inicialmente.
* **Características:**
  - ✅ Ideal para experimentar y trabajar en ideas iniciales.
  - ✅ Privados hasta que decidas compartirlos explícitamente.
  - ✅ No requieren organización previa en carpetas.
  - ❌ No forman parte de la estructura formal de un equipo.
* **Cuándo usar Drafts:**
  - Estás explorando un boceto rápido o practicando técnicas nuevas.
  - Proyectos personales independientes.

### 📁 PROJECTS (Proyectos)
* **¿Qué son?** Espacios o carpetas organizadas dentro de un **Team (Equipo)** que agrupan archivos relacionados con un mismo objetivo o cliente.
* **Características:**
  - ✅ Organización clara y profesional.
  - ✅ Facilita la colaboración simultánea en tiempo real.
  - ✅ Control granular de permisos de visualización y edición.
  - ✅ Historial de versiones compartido.
* **Cuándo usar Projects:**
  - Prácticas en equipo en el aula.
  - Proyectos estructurados con múltiples pantallas o vistas (desktop, tablet, móvil).

---

## 2. Crear y Gestionar Equipos (Teams)

### 🏢 ¿Qué es un Team en Figma?
Un Team es el entorno de trabajo compartido donde varios diseñadores colaboran, se organizan los proyectos y se comparten bibliotecas de componentes.

* **Plan Starter (Gratuito):** Permite hasta **3 archivos con edición activa** en proyectos de equipo y **visualizadores ilimitados**. Es suficiente para grupos de trabajo en DAW si se organiza adecuadamente.
* **Plan Education (Gratuito para centros educativos):** Figma ofrece licencias educativas completas para profesores y estudiantes verificados, eliminando las restricciones de archivos.

---

### 📋 Paso a Paso: Crear un Team y Añadir Miembros

1. **Crear el equipo:**
   - En la barra lateral izquierda de Figma, haz clic en el icono **`+`** junto a *Teams*.
   - Elige un nombre identificativo para el grupo (ejemplo: `DAW2 - Grupo 03`).
   - Selecciona el plan gratuito (*Starter*).
2. **Invitar a los compañeros de grupo:**
   - Accede a la pestaña **Members** del equipo y pulsa **Invite**.
   - Introduce los correos de los integrantes y asigna roles:
     - **Admin:** Coordinador del grupo (gestión de miembros y proyectos).
     - **Member (Can Edit):** Miembros del equipo con permisos de edición y creación de archivos.
     - **Viewer (Can View):** Rol recomendado para el profesor o evaluadores externos (pueden inspeccionar medidas, estilos y añadir comentarios sin modificar el diseño).

---

### 🎓 Estructura Recomendada para Proyectos en DAW

```text
📁 Team: "Grupo 03 - DIWEB 2026/27"
├── 📂 Project: "Proyecto Final E-Commerce"
│   ├── 📄 01_Wireframes_y_Flujos
│   ├── 📄 02_Diseno_Desktop_y_Mobile
│   └── 📄 03_Design_System_y_Componentes
└── 📂 Project: "Recursos y Documentación"
    ├── 📄 Guía de Estilo y Colores
    └── 📄 Iconografía y Tipografía
```

---

## 3. Opciones de Compartir e Inspección

Figma ofrece dos niveles principales de acceso a los archivos:

### A) Can View (Modo Lectura / Inspección de Desarrollo)
* Permite recorrer el archivo, medir distancias con la tecla `Alt/Option`, ver las propiedades CSS (colores, fuentes, sombras) y descargar los recursos gráficos (SVGs, imágenes).
* Permite dejar comentarios precisos mediante chinchetas en el lienzo (tecla `C`).
* **Ideal para:** Fase de entrega, revisión docente y traspaso al equipo de desarrollo frontend (*handoff*).

### B) Can Edit (Modo Edición)
* Acceso completo para mover elementos, modificar capas, crear componentes y editar estilos.
* **Ideal para:** Los autores activos del proyecto.

---

## 4. Publicar Componentes y Bibliotecas (Libraries)

1. En el archivo donde crees los componentes maestros y estilos (colores y tipografía), abre el panel de **Assets** (`Shift + I`).
2. Haz clic en el icono del libro (*Team Library*).
3. Pulsa el botón **Publish**.
4. En el resto de archivos del proyecto, abre el panel de bibliotecas y activa el archivo publicado: todos los componentes estarán disponibles para su reutilización inmediata, manteniendo la sincronización si el archivo maestro se actualiza.
