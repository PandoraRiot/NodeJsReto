const express = require('express'); // Importa el modulo Express
const app = express(); // Crea una instancia de la aplicacion Express
const path = require('path'); // Importa el modulo 'path' para manejar rutas de archivos

const port = 3000; // Define el puerto en el que correra el servidor

// Middleware para parsear JSON en las solicitudes POST.
// Esencial para recibir los datos enviados en formato JSON en el cuerpo de las solicitudes.
app.use(express.json()); 

// --- Servir archivos estaticos ---
// Sirve la carpeta raiz del proyecto Git (directorio padre de NodeJsApi).
// Permite acceder a 'README.md', 'evidencias.html' y la carpeta 'assets' directamente desde la raiz del servidor.
// Ejemplo de acceso: http://localhost:3000/README.md, http://localhost:3000/evidencias.html, http://localhost:3000/assets/imagen.JPG
app.use(express.static(path.join(__dirname, '..')));

// Sirve la subcarpeta 'NodeJsReto' (donde estan 'index.html' y 'script.js').
// Esta configuracion hace que los archivos del frontend sean accesibles bajo la ruta '/NodeJsReto'.
// Ejemplo de acceso: http://localhost:3000/NodeJsReto/index.html
app.use('/NodeJsReto', express.static(path.join(__dirname, '..', 'NodeJsReto')));


// --- Middleware de registro de solicitudes ---
// Este middleware se ejecuta para cada solicitud recibida por el servidor,
// registrando el metodo HTTP y la URL en la consola.
app.use((req, res, next) => {
    const timestamp = new Date().toISOString(); // Obtiene la fecha y hora actual en formato ISO
    console.log(`[${timestamp}] Solicitud: ${req.method} ${req.url}`);
    next(); // Pasa el control al siguiente middleware o a la ruta correspondiente
});

// --- Endpoint para la pagina principal del frontend ---
// Si se accede a la raiz del servidor (http://localhost:3000/), redirige a la ubicacion del 'index.html'.
app.get('/', (req, res) => {
    res.redirect('/NodeJsReto/index.html');
});

// --- Endpoint /greet que devuelve un mensaje JSON ---
// Maneja solicitudes GET a la ruta '/greet'.
app.get('/greet', (req, res) => {
    const userName = req.query.name || 'visitante'; // Obtiene el parametro 'name' de la query string o usa 'visitante' por defecto
    const now = new Date();
    
    // Configura opciones para formatear la fecha y hora segun la region de Medellin, Colombia.
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Bogota', // Zona horaria de Medellin
        hour12: true // Formato AM/PM
    };
    const formattedDateTime = now.toLocaleString('es-CO', options);

    console.log(`[${now.toISOString()}] Solicitud: GET /greet`);
    // Envia una respuesta JSON con informacion sobre la API.
    res.json({
        saludo: `¡Hola, ${userName}!`,
        mensaje: 'Bienvenido al servicio API de reporte de eventos del SIRMED.',
        informacionAdicional: 'Este endpoint provee informacion general sobre la API y su estado actual.',
        versionAPI: '1.0.0',
        fechaActual: formattedDateTime,
        endpointsDisponibles: {
            obtenerBienvenida: 'GET /greet?name=TuNombre - Obtiene un saludo personalizado y la hora actual.',
            enviarReporte: 'POST /submit-report - Para enviar un reporte de evento de riesgo desde el formulario HTML.',
        },
        ubicacionServidor: 'Medellín, Antioquia, Colombia'
    });
    console.log(`Endpoint /greet accedido por ${userName}.`);
});

// --- Endpoint para el microservicio de suma ---
// Maneja solicitudes GET a la ruta '/add', sumando dos parametros numericos 'a' y 'b'.
app.get('/add', (req, res) => {
    // Convierte los parametros 'a' y 'b' de la query string a numeros flotantes.
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    // Valida si 'a' y 'b' son numeros validos. Si no, envia un error 400 (Bad Request).
    if (isNaN(a) || isNaN(b)) {
        console.warn(`[${new Date().toISOString()}] Error en /add: Parametros invalidos. a=${req.query.a}, b=${req.query.b}`);
        return res.status(400).json({
            error: 'Parametros invalidos',
            message: 'Por favor, proporciona dos numeros validos para "a" y "b". Ejemplo: /add?a=5&b=3'
        });
    }

    const sum = a + b; // Realiza la operacion de suma
    console.log(`[${new Date().toISOString()}] Suma calculada: ${a} + ${b} = ${sum}`);
    // Envia la respuesta JSON con los numeros originales, la suma y un mensaje.
    res.json({
        a: a,
        b: b,
        sum: sum,
        message: `La suma de ${a} y ${b} es ${sum}.`
    });
});

// --- Endpoint para recibir reportes del formulario ---
// Maneja solicitudes POST a la ruta '/submit-report'.
app.post('/submit-report', (req, res) => {
    const reportData = req.body; // Los datos del formulario estan en req.body gracias a express.json()
    console.log('¡Reporte de Riesgo Recibido!');
    console.log('Datos del Reporte:', reportData);

    // En un escenario real, aqui se procesarian y almacenarian los datos del reporte.

    // Envia una respuesta JSON al frontend confirmando la recepcion del reporte.
    res.status(200).json({
        message: 'Reporte recibido con exito. Gracias por tu informacion.',
        receivedData: reportData // Opcional: devolver los datos recibidos para confirmacion
    });
});

// Inicia el servidor Express en el puerto definido.
app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
    console.log(`Puede acceder a la pagina HTML principal aqui: http://localhost:${port}/NodeJsReto/index.html`);
    console.log(`Puede ver las evidencias visuales aqui: http://localhost:${port}/evidencias.html`);
    console.log(`Pruebe el endpoint /greet aqui: http://localhost:${port}/greet`);
    console.log(`Pruebe el endpoint /add aqui: http://localhost:${port}/add?a=10&b=5`);
});
