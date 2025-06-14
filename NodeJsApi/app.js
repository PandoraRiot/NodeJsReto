const express = require('express'); // Importa el módulo Express
const app = express(); // Crea una instancia de la aplicación Express
const path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos

app.use(express.json()); 
// 
app.use(express.static(path.join(__dirname, '..', 'NodeJsReto')));
// -----------------------------------------------------------------------

const port = 3000; // Define el puerto en el que correrá el servidor

// --- Middleware de registro de solicitudes ---
// Este middleware se ejecutará para CADA solicitud que reciba el servidor
app.use((req, res, next) => {
    const timestamp = new Date().toISOString(); // Obtiene la fecha y hora actual
    console.log(`[${timestamp}] Solicitud: ${req.method} ${req.url}`);
    next(); // Pasa el control al siguiente middleware o a la ruta correspondiente
});

// --- Endpoint /greet que devuelve un mensaje JSON ---
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
            // Podrías añadir más endpoints aquí si los desarrollas en el futuro
        },
        ubicacionServidor: 'Medellín, Antioquia, Colombia'
    });
    console.log(`Endpoint /greet accedido por ${userName}.`);
});

// Nuevo endpoint para recibir el reporte del formulario
app.post('/submit-report', (req, res) => {
    const reportData = req.body; // Los datos del formulario estarán en req.body gracias a express.json()
    console.log('¡Reporte de Riesgo Recibido!');
    console.log('Datos del Reporte:', reportData);


    

    // Envía una respuesta al frontend
    res.status(200).json({
        message: 'Reporte recibido con éxito. Gracias por tu información.',
        receivedData: reportData // Opcional: devolver los datos recibidos para confirmación
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
    console.log(`Puedes ver tu página HTML aquí: http://localhost:${port}/`);
    console.log(`Prueba el endpoint de la API aquí: http://localhost:${port}/greet`);
});