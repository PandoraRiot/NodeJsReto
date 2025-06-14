const express = require('express'); // Importa el módulo Express
const app = express(); // Crea una instancia de la aplicación Express
const path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos

const port = 3000; // Define el puerto en el que correrá el servidor

// Middleware para parsear JSON en las solicitudes POST
// Esto es CRUCIAL para recibir los datos del formulario en req.body
app.use(express.json()); 

// --- Servir archivos estáticos ---
// Sirve la carpeta raíz de tu proyecto Git (C:\Users\ALEXANDRA\Documents\RETO.NODEJS\NodeJsReto)
// Esto permite acceder a README.md, evidencias.html y la carpeta 'assets' directamente desde la raíz del servidor.
// Ejemplo: http://localhost:3000/README.md, http://localhost:3000/evidencias.html, http://localhost:3000/assets/imagen.JPG
app.use(express.static(path.join(__dirname, '..')));

// Sirve la subcarpeta 'NodeJsReto' (donde está index.html y script.js)
// bajo una ruta específica para que tu frontend funcione correctamente.
// Esto significa que index.html será accesible en http://localhost:3000/NodeJsReto/index.html
app.use('/NodeJsReto', express.static(path.join(__dirname, '..', 'NodeJsReto')));


// --- Middleware de registro de solicitudes (Parte 2 del reto) ---
// Este middleware se ejecutará para CADA solicitud que reciba el servidor
app.use((req, res, next) => {
    const timestamp = new Date().toISOString(); // Obtiene la fecha y hora actual
    console.log(`[${timestamp}] Solicitud: ${req.method} ${req.url}`);
    next(); // Pasa el control al siguiente middleware o a la ruta correspondiente
});

// --- Endpoint para la página principal del frontend (index.html) ---
// Si alguien accede a http://localhost:3000/, se le redirige a la ubicación correcta de index.html
app.get('/', (req, res) => {
    res.redirect('/NodeJsReto/index.html');
});

// --- Endpoint /greet que devuelve un mensaje JSON (Parte 2 del reto) ---
app.get('/greet', (req, res) => {
    const userName = req.query.name || 'visitante'; // Predeterminado a 'visitante'
    const now = new Date();
    
    // Configurar opciones para un formato de fecha y hora local de Colombia (Medellín)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Bogota', // Zona horaria de Medellín
        hour12: true // Formato AM/PM
    };
    const formattedDateTime = now.toLocaleString('es-CO', options);

    console.log(`[${now.toISOString()}] Solicitud: GET /greet`);
    res.json({
        saludo: `¡Hola, ${userName}!`,
        mensaje: 'Bienvenido al servicio API de reporte de eventos del SIRMED.',
        informacionAdicional: 'Este endpoint provee información general sobre la API y su estado actual.',
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

// --- Endpoint para el microservicio de suma (Parte 4 del reto) ---
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a); // Convierte el parámetro 'a' a número flotante
    const b = parseFloat(req.query.b); // Convierte el parámetro 'b' a número flotante

    // Valida si 'a' y 'b' son números válidos.
    // Si alguno no es un número (NaN), enviamos un error 400 (Bad Request).
    if (isNaN(a) || isNaN(b)) {
        console.warn(`[${new Date().toISOString()}] Error en /add: Parámetros inválidos. a=${req.query.a}, b=${req.query.b}`);
        return res.status(400).json({
            error: 'Parámetros inválidos',
            message: 'Por favor, proporciona dos números válidos para "a" y "b". Ejemplo: /add?a=5&b=3'
        });
    }

    const sum = a + b; // Realiza la suma
    console.log(`[${new Date().toISOString()}] Suma calculada: ${a} + ${b} = ${sum}`);
    res.json({
        a: a,
        b: b,
        sum: sum,
        message: `La suma de ${a} y ${b} es ${sum}.`
    });
});

// --- Nuevo endpoint para recibir el reporte del formulario (Parte 1 del reto, formulario) ---
app.post('/submit-report', (req, res) => {
    const reportData = req.body; // Los datos del formulario estarán en req.body gracias a express.json()
    console.log('¡Reporte de Riesgo Recibido!');
    console.log('Datos del Reporte:', reportData);

    // Aquí iría la lógica para guardar en base de datos, etc.
    // Por ahora, solo confirmamos la recepción.

    // Envía una respuesta al frontend
    res.status(200).json({
        message: 'Reporte recibido con éxito. Gracias por tu información.',
        receivedData: reportData // Opcional: devolver los datos recibidos para confirmación
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
    console.log(`Puedes ver tu página HTML principal aquí: http://localhost:${port}/NodeJsReto/index.html`);
    console.log(`Puedes ver tus evidencias aquí: http://localhost:${port}/evidencias.html`);
    console.log(`Prueba el endpoint /greet aquí: http://localhost:${port}/greet`);
    console.log(`Prueba el endpoint /add aquí: http://localhost:${port}/add?a=10&b=5`);
});