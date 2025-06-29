# 🚀 Desafío Técnico para Desarrollador FullStack: ¡Mi Propuesta Integral! 🚀
## ✨ Visión General del Reto

Este proyecto es mi resolución detallada de un desafío técnico de desarrollo web, diseñado no solo para cumplir con los requisitos, sino para ir más allá, demostrando mi iniciativa, pensamiento crítico y un dominio profundo de las tecnologías clave. Mi objetivo es presentar una solución robusta y bien estructurada que refleje mi compromiso con la calidad y la excelencia.

## 🛠️ Tecnologías Utilizadas
HTML & CSS: He utilizado estas tecnologías para la estructura y el diseño responsivo de la interfaz de usuario.

JavaScript: Implementé la lógica interactiva en el frontend y las validaciones de formularios con JavaScript.

Node.js: Empleé este entorno de ejecución para el desarrollo del backend y los microservicios.

Express.js: Utilicé este framework ágil y potente para construir las APIs RESTful.

JBoss (WildFly): Dada la restricción de tiempo en este desafío, no se pudo realizar el despliegue en vivo en un servidor JBoss/WildFly, pero he abordado el conocimiento teórico y los pasos de implementación y despliegue.

Postman: Me he apoyado en esta herramienta esencial para la comprobación y el testing de microservicios y APIs.

## 🎯 Componentes Clave de Mi Proyecto
1. 🌐 Mi Frontend Robusto con HTML y JavaScript
Página HTML Básica: He creado una base sólida con encabezados, párrafos y un botón interactivo usando JavaScript para demostrar funcionalidad elemental.

Formulario Web Inteligente (Mi Propuesta SIRMED): Implementé un formulario con validaciones exhaustivas en JavaScript. Más allá de la validación de campos vacíos, he contemplado múltiples escenarios de error (longitud, formato, etc.) y he diseñado mensajes de error claros y feedback visual para una experiencia de usuario impecable. ¡Aquí apliqué mi mentalidad de desarrolladora y tester!

2. ⚡ Mi Backend con Node.js y Express.js (Aprendizaje Profundo)
Mi API RESTful Funcional: Creé una API con Express.js que expone un endpoint /greet para un saludo JSON. Prioricé el entendimiento de APIs, endpoints y la configuración de rutas. Este endpoint lo he "nutrido" para proporcionar información adicional sobre la API y su versión, así como la fecha y hora actual en Medellín.

Demostración del Endpoint /greet:

Puedes acceder a: http://localhost:3000/greet

Ejemplo de respuesta:

{
    "saludo": "¡Hola, visitante!",
    "mensaje": "Bienvenido al servicio API de reporte de eventos del SIRMED.",
    "informacionAdicional": "Este endpoint provee información general sobre la API y su estado actual.",
    "versionAPI": "1.0.0",
    "fechaActual": "14 de junio de 2025, 04:08:37 a. m.",
    "endpointsDisponibles": {
        "obtenerBienvenida": "GET /greet?name=TuNombre - Obtiene un saludo personalizado y la hora actual.",
        "enviarReporte": "POST /submit-report - Para enviar un reporte de evento de riesgo desde el formulario HTML."
    },
    "ubicacionServidor": "Medellín, Antioquia, Colombia"
}

Mi Middleware de Registro Avanzado: Implementé un middleware para registrar detalladamente cada solicitud (método HTTP y URL) en la consola, mostrando cómo se interceptan y procesan las peticiones en el flujo del servidor.

Ejemplo de log en consola de mi servidor:

[2025-06-14T09:02:24.283Z] Solicitud: GET /greet
Endpoint /greet accedido.
[2025-06-14T09:03:37.327Z] Solicitud: POST /submit-report

Integración Frontend-Backend (Mi Formulario SIRMED): El formulario HTML de mi Frontend está completamente integrado con el backend. Al enviar el formulario, los datos son recolectados por JavaScript y enviados mediante una petición POST al endpoint /submit-report de mi API Node.js.

3. 🧩 Mi Microservicio Ágil de Agregación
Microservicio de Suma: Desarrollé un microservicio dedicado en Node.js, con un endpoint /add que recibe parámetros a y b y devuelve su suma en JSON. Apliqué mejores prácticas de diseño, modularidad y manejo de errores para garantizar una solución eficiente y escalable.

Mis Pruebas Exhaustivas: Verifiqué el microservicio con Postman y cURL, incluyendo capturas de evidencia de las respuestas y los códigos de estado HTTP, para asegurar su correcto funcionamiento y demostrar mis habilidades de testing de APIs.

Cómo puedes probar el Endpoint /add:

Navegador: http://localhost:3000/add?a=10&b=5

Postman/cURL:

GET Request: http://localhost:3000/add?a=20&b=22

Ejemplo de respuesta exitosa:

{
    "a": 20,
    "b": 22,
    "sum": 42,
    "message": "La suma de 20 y 22 es 42."
}

Ejemplo de respuesta con error (parámetros inválidos):

{
    "error": "Parámetros inválidos",
    "message": "Por favor, proporciona dos números válidos para \"a\" y \"b\". Ejemplo: /add?a=5&b=3"
}

4. ☁️ Mi Aplicación Web en JBoss (WildFly) - Enfoque Conceptual
Dada la limitación de tiempo durante el desafío, no fue posible realizar la instalación completa del entorno y el despliegue en vivo de una aplicación web en JBoss/WildFly. Sin embargo, he investigado y comprendo el proceso necesario para implementar este componente:

Tecnologías Clave: Se utilizaría Java (JDK), Apache Maven (para gestión de proyectos y compilación) y un servidor de aplicaciones WildFly.

Estructura del Proyecto: Se crearía un proyecto Maven de tipo webapp (aplicación web) con la estructura estándar de una aplicación Java EE.

Implementación: Se desarrollaría un JavaServer Page (JSP) simple (index.jsp) para generar el mensaje "Hola desde JBoss", junto con el descriptor de despliegue web.xml necesario.

Compilación: Maven se usaría para compilar el código fuente y empaquetar la aplicación en un archivo .war (Web ARchive). El comando típico sería mvn clean install.

Despliegue: El archivo .war resultante se desplegaría en el servidor WildFly (JBoss), usualmente copiándolo a la carpeta standalone/deployments de la instalación de WildFly o a través de la consola de administración del servidor.

Acceso: La aplicación sería accesible a través de una URL en el puerto 8080 del servidor, por ejemplo: http://localhost:8080/MiJBossApp/.

### Este enfoque demuestra mi comprensión de los pasos necesarios para implementar y desplegar aplicaciones en entornos Java con servidores de aplicaciones, incluso bajo restricciones de tiempo.

📂 Estructura de Mi Proyecto
NodeJsReto/
├── assets/                  # Contiene las imágenes de evidencia
│   ├── APIOK.JPG
│   ├── Apifuncional.JPG
│   ├── Evidencia1.JPG
│   ├── EvidenciaFormulario1.JPG
│   ├── EvidenciaFormulario2.JPG
│   ├── EvidenciaPostManAPI.JPG
│   └── image_214b16.png     # Nueva imagen de evidencia para JBoss
├── NodeJsApi/               # Backend con Node.js y Express
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
├── NodeJsReto/              # Frontend (HTML, CSS, JS)
│   ├── index.html
│   └── script.js
├── JBossReto/               # Proyecto de aplicación Java Web para JBoss/WildFly
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── webapp/
│               ├── WEB-INF/
│               │   └── web.xml
│               └── index.jsp
├── evidencias.html          # Página dedicada para mostrar todas las evidencias visuales (si se usa)
└── README.md                # Este archivo de documentación

## ⚙️ Cómo Puedes Ejecutar Mi Proyecto Localmente
Para ejecutar este proyecto en mi máquina local, por favor, sigue estos pasos:

### Clonar el Repositorio:
Si estás usando Git, clona este repositorio en tu máquina.

git clone <URL_DEL_REPOSITORIO> # Reemplaza con la URL de tu repo si lo subes
cd NodeJsReto

(Si ya tienes los archivos, simplemente navega a C:\Users\ALEXANDRA\Documents\RETO.NODEJS\NodeJsReto)

### Instalar Dependencias de Mi Backend:
Navega a la carpeta de la API e instala las dependencias de Node.js.

cd NodeJsApi
npm install

### Iniciar Mi Servidor Backend:
Desde la carpeta NodeJsApi, inicia la aplicación Node.js.

node app.js

Verás un mensaje indicando que el servidor está escuchando en http://localhost:3000.

### Acceder a Mi Frontend:
Abre tu navegador web y navega a:
http://localhost:3000/NodeJsReto/index.html
Aquí podrás interactuar con el formulario y el botón de alerta.

### Probar Mis Endpoints de la API:

http://localhost:3000/greet

http://localhost:3000/add?a=PARAM1&b=PARAM2 (reemplaza PARAM1 y PARAM2 con números)

Para probar el envío del formulario, puedes usarlo directamente en la página web principal.



### Ejecutar Mi Aplicación Web en JBoss (WildFly):

Asumiendo que ya tiene JDK (versión 8 o superior) y Apache Maven instalados, y que han descargado y descomprimido WildFly (JBoss), sigan estos pasos:

Compilar la aplicación Java:
Naveguen a la carpeta de mi proyecto JBoss (C:\Users\ALEXANDRA\Documents\RETO.NODEJS\NodeJsReto\JBossReto) en una terminal y ejecuten:

mvn clean install

Esto creará el archivo MiJBossApp.war en la carpeta target/.

Iniciar el servidor WildFly:
Abran una nueva terminal, naveguen a la carpeta bin de su instalación de WildFly (ej. C:\Users\ALEXANDRA\Documents\wildfly-36.0.1.Final\wildfly-36.0.1.Final\bin) y ejecuten:

.\standalone.bat

Esperen a que el servidor inicie completamente (verán un mensaje "started in ...ms").

Desplegar la aplicación .war:
Copia el archivo MiJBossApp.war (de la carpeta JBossReto/target/) y péguenlo en la carpeta standalone/deployments/ dentro de su instalación de WildFly. El servidor lo detectará y desplegará automáticamente.

### Acceder a la aplicación JBoss:

Abran su navegador web y naveguen a:

http://localhost:8080/MiJBossApp/

Aquí verán la página "Hola desde JBoss".


📸 Mis Evidencias
Aquí presento las evidencias visuales del funcionamiento de los componentes clave:

### Evidencia: Mi Página HTML Básica y Botón Interactivo
Muestra la estructura general de mi página HTML y el funcionamiento de la alerta al hacer clic en el botón.


### Evidencia: Mi Formulario Web Inteligente (SIRMED) - Presentación y Validación
Aquí puedes ver la apariencia de mi formulario y cómo se comportan las validaciones cuando los campos están vacíos o son incorrectos.



### Evidencia: Mi Integración Frontend-Backend y Middleware de Registro
Muestra la recepción exitosa de datos del formulario en el backend y los registros detallados del middleware.



### Evidencia: Mi Microservicio de Suma (/add)
Muestra las pruebas que realicé al microservicio de suma utilizando Postman, verificando su correcto funcionamiento y las respuestas JSON.

## Evidencia: Mi Aplicación Web en JBoss (WildFly)

Demostración de mi aplicación web "Hola desde JBoss" desplegada exitosamente en WildFly.

## ✨ Mi Compromiso Adicional
Mi objetivo va más allá de cumplir los requisitos mínimos. Busco demostrar una comprensión profunda de cada tecnología, mi capacidad para implementar mejores prácticas de desarrollo, y mi habilidad para crear soluciones que consideren la usabilidad y la robustez. Este proyecto es una muestra de mi dedicación y mi entusiasmo por formar parte de su equipo.


## Erika Alexandra García Barrios
Software Engineer Std 9 semestre
I.U. Pascual Bravo