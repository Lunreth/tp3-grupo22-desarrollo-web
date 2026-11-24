# NEXO — Trabajo Práctico N.º 3 — Grupo 22

## Descripción

Sitio web grupal desarrollado para la materia **Desarrollo de Sistemas Web — Front End — 2.º cuatrimestre de 2026**, correspondiente al IFTS N.º 29.

El proyecto presenta una landing page para **NEXO**, una startup desarrollada originalmente por estudiantes del IFTS N.º 16. Su propuesta permite conectar clientes con profesionales de reparaciones según el servicio requerido, la ubicación y la disponibilidad.

En este trabajo se analizaron y representaron dos reglas de negocio mediante sus respectivas sentencias, condiciones, consecuencias y diagramas:

- **Regla R5:** comprobación de la disponibilidad y del estado de verificación del profesional antes de enviar una solicitud.
- **Regla R6:** comprobación y rechazo de una solicitud cuando el profesional seleccionado no está disponible.

La intervención humana incorporada en el flujo de la Regla R6 corresponde a una decisión de diseño del Grupo 22, orientada a evitar la contratación automática de otro profesional sin la confirmación del cliente.

## Integrantes

- [Angel Dominguez](https://github.com/ad29dominguez-design): coordinación de instrucciones al agente, organización, integración, documentación y revisión final.
- [Cimar Gomez Torrez](https://github.com/CimarGomez): análisis y desarrollo de la Regla R6.
- [David Carlos Ruiz Flores](https://github.com/Davidruizf): análisis y desarrollo de la Regla R5.
- [Rodrigo Nicolás Molina](https://github.com/Rodrigo-Molina12506): optimización de JavaScript y preparación de pruebas funcionales.
- [Kevin Martínez Cáceres](https://github.com/Lunreth): estructura inicial de la landing, estilos básicos e implementación inicial de JavaScript.

## Tecnologías utilizadas

- HTML5 para la estructura y el contenido.
- CSS3 para los estilos, la adaptación responsive y el modo claro/oscuro.
- JavaScript para la interacción y el comportamiento de la interfaz.
- Git y GitHub para el trabajo colaborativo y el control de versiones.
- Vercel para la publicación de la aplicación.
- Visual Studio Code como entorno de desarrollo.

## Organización del trabajo

Para organizar el desarrollo se utilizaron ramas individuales, commits y Pull Requests. Este procedimiento permitió revisar cada aporte antes de incorporarlo a la rama principal y reducir el riesgo de sobrescribir el trabajo de otros integrantes.

Cada integrante trabajó sobre la tarea asignada, revisó manualmente sus cambios y dejó registro de los archivos modificados y de las verificaciones realizadas.

## Uso de Inteligencia Artificial

### Angel Dominguez

- Aplicación utilizada: ChatGPT Codex.
- Modelo utilizado: GPT-5.6 Sol.
- Plan utilizado: ChatGPT Plus.
- Tareas asistidas: análisis de la consigna, organización de tareas, elaboración de instrucciones para el agente, edición de contenido, documentación y revisión de la integración de la landing.
- Verificación realizada: revisión manual del código y del contenido generado, comprobación de los cambios en la landing y validación de su correspondencia con los requisitos del trabajo práctico.

### Cimar Gomez Torrez

- Aplicación utilizada: ChatGPT.
- Modelo utilizado: GPT-6.1, plan gratuito.
- Tareas asistidas: análisis de la Regla R6 y elaboración de su ficha, identificando los datos necesarios, la condición y la consecuencia.
- Verificación realizada: se comprobó que la propuesta respete la sentencia original, informe el rechazo al cliente, ofrezca alternativas y no contrate automáticamente a otro profesional.

### David Carlos Ruiz Flores

- Aplicaciones utilizadas: ninguna.
- Uso de inteligencia artificial: no utilizó IA para realizar su aporte.
- Tarea realizada: análisis y desarrollo de la Regla R5.
- Verificación realizada: revisión de la regla implementada y comprobación de su correspondencia con la consigna.

### Rodrigo Nicolás Molina

- Aplicación utilizada: ChatGPT.
- Modelo utilizado: GPT-6.1, plan gratuito.
- Tareas asistidas: optimización de scripts JavaScript y preparación del plan de pruebas funcionales para la entrega.
- Verificación realizada: validación visual en navegador, comprobación responsive y del modo oscuro, inspección de la consola de desarrollo para verificar la ausencia de errores y comprobación de las rutas de imágenes estáticas.

### Kevin Martínez Cáceres

- Aplicación informada: ChatGPT.
- Modelo utilizado: GPT-6.1, plan gratuito.
- Tareas asistidas: primeras versiones de la estructura de la web, estilos básicos e implementación inicial de JavaScript.
- Verificación realizada: pruebas y depuración del modo claro/oscuro.

## Verificación del proyecto

Se realizaron las siguientes comprobaciones:

- Visualización general de la landing.
- Navegación entre las diferentes secciones.
- Adaptación a distintos tamaños de pantalla.
- Funcionamiento del modo claro y oscuro.
- Carga correcta de imágenes y recursos.
- Visualización de las soluciones R5 y R6.
- Correspondencia de los diagramas con las reglas analizadas.
- Revisión de la consola del navegador para comprobar la ausencia de errores.
- Revisión manual de los cambios antes de su integración.

## Ejecución local

Para ejecutar el proyecto localmente:

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir el archivo `index.html` con un navegador.
4. Opcionalmente, utilizar la extensión **Live Server** de Visual Studio Code.

Este proyecto no requiere instalar dependencias adicionales.

## Publicación

- [Sitio publicado en Vercel](https://tp3-grupo22-desarrollo-web.vercel.app/)
- [Repositorio en GitHub](https://github.com/Lunreth/tp3-grupo22-desarrollo-web)

## Estado del proyecto

El proyecto se encuentra integrado y publicado en Vercel. La landing incluye la presentación de NEXO, las soluciones correspondientes a las reglas R5 y R6, sus diagramas, la identificación de los integrantes y el modo claro/oscuro.

Se completó la revisión visual y funcional de la versión publicada. La documentación final se actualizó con la descripción del proyecto, la distribución de tareas, las herramientas utilizadas, las verificaciones realizadas y los enlaces de publicación.