// --- JavaScript para el Botón de Alerta (del inicio del proyecto) ---
const botonAlerta = document.getElementById('miBoton');

if (botonAlerta) {
    botonAlerta.addEventListener('click', function() {
        console.log('Botón "¡Haz clic aquí!" clickeado.');
        alert('¡Botón clickeado!');
    });
} else {
    console.log('El botón con ID "miBoton" no fue encontrado.');
}

// --- JavaScript para la Validación y Envío del Formulario de Reporte (SIRMED) ---
document.addEventListener('DOMContentLoaded', function() {
    const reportForm = document.getElementById('reportForm');

    if (reportForm) {
        reportForm.addEventListener('submit', async function(event) { // ¡AGREGADO 'async' aquí!
            console.log('Evento de submit del formulario "reportForm" disparado.');
            event.preventDefault();
            event.stopPropagation();

            let formIsValid = true;

            // --- Limpiar mensajes de error y clases de validación previas ---
            const allFeedbacks = document.querySelectorAll('.invalid-feedback');
            allFeedbacks.forEach(feedback => feedback.textContent = '');
            const allFormControls = document.querySelectorAll('.form-control, .form-select, .form-check-input');
            allFormControls.forEach(control => control.classList.remove('is-invalid', 'is-valid'));


            // --- Validación del campo Tipo de Evento (Select) ---
            const eventType = document.getElementById('eventType');
            const eventTypeFeedback = document.getElementById('eventTypeFeedback');
            if (!eventType.value) {
                eventType.classList.add('is-invalid');
                eventTypeFeedback.textContent = 'Por favor, selecciona un tipo de evento de riesgo.';
                formIsValid = false;
                console.log('Validación fallida: Tipo de Evento.');
            } else {
                eventType.classList.add('is-valid');
            }

            // --- Validación del campo Ubicación del Evento ---
            const eventLocation = document.getElementById('eventLocation');
            const locationFeedback = document.getElementById('locationFeedback');
            if (eventLocation.value.trim() === '') {
                eventLocation.classList.add('is-invalid');
                locationFeedback.textContent = 'La ubicación no puede estar vacía.';
                formIsValid = false;
                console.log('Validación fallida: Ubicación (vacía).');
            } else if (eventLocation.value.trim().length < 5) {
                eventLocation.classList.add('is-invalid');
                locationFeedback.textContent = 'La ubicación debe ser más detallada (mínimo 5 caracteres).';
                formIsValid = false;
                console.log('Validación fallida: Ubicación (corta).');
            } else {
                eventLocation.classList.add('is-valid');
            }

            // --- Validación del campo Fecha y Hora del Evento ---
            const eventDateTime = document.getElementById('eventDateTime');
            const eventDateTimeFeedback = document.getElementById('eventDateTimeFeedback');
            if (eventDateTime.value.trim() === '') {
                eventDateTime.classList.add('is-invalid');
                eventDateTimeFeedback.textContent = 'Por favor, ingresa la fecha y hora aproximada del evento.';
                formIsValid = false;
                console.log('Validación fallida: Fecha y Hora del Evento (vacía).');
            } else {
                eventDateTime.classList.add('is-valid');
            }

            // --- Validación del campo Número de Personas Afectadas ---
            const affectedPeople = document.getElementById('affectedPeople');
            const affectedPeopleFeedback = document.getElementById('affectedPeopleFeedback');
            if (affectedPeople.value.trim() === '' || isNaN(affectedPeople.value) || parseInt(affectedPeople.value) < 0) {
                affectedPeople.classList.add('is-invalid');
                affectedPeopleFeedback.textContent = 'Por favor, ingresa un número válido de personas afectadas (mínimo 0).';
                formIsValid = false;
                console.log('Validación fallida: N° Personas Afectadas (inválido).');
            } else {
                affectedPeople.classList.add('is-valid');
            }

            // --- Validación del campo Descripción Detallada ---
            const eventDescription = document.getElementById('eventDescription');
            const descriptionFeedback = document.getElementById('descriptionFeedback');
            if (eventDescription.value.trim() === '') {
                eventDescription.classList.add('is-invalid');
                descriptionFeedback.textContent = 'Por favor, proporciona una descripción del evento.';
                formIsValid = false;
                console.log('Validación fallida: Descripción (vacía).');
            } else if (eventDescription.value.trim().length < 20) {
                eventDescription.classList.add('is-invalid');
                descriptionFeedback.textContent = `La descripción es muy corta (${eventDescription.value.trim().length}/20). Por favor, sé más detallado.`;
                formIsValid = false;
                console.log('Validación fallida: Descripción (corta).');
            } else {
                eventDescription.classList.add('is-valid');
            }

            // --- Validación del campo Nombre de Contacto ---
            const contactName = document.getElementById('contactName');
            const contactNameFeedback = document.getElementById('contactNameFeedback'); // Asegúrate de tener este span en tu HTML
            if (contactName.value.trim() === '') {
                contactName.classList.add('is-invalid');
                contactNameFeedback.textContent = 'Por favor, ingresa tu nombre completo.';
                formIsValid = false;
                console.log('Validación fallida: Nombre de Contacto (vacío).');
            } else {
                contactName.classList.add('is-valid');
            }

            // --- Validación del campo Correo Electrónico de Contacto ---
            const contactEmail = document.getElementById('contactEmail');
            const contactEmailFeedback = document.getElementById('contactEmailFeedback');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            
            if (contactEmail.value.trim() === '') {
                contactEmail.classList.add('is-invalid');
                contactEmailFeedback.textContent = 'Por favor, ingresa tu correo electrónico.';
                formIsValid = false;
                console.log('Validación fallida: Correo de Contacto (vacío).');
            } else if (!emailPattern.test(contactEmail.value.trim())) {
                contactEmail.classList.add('is-invalid');
                contactEmailFeedback.textContent = 'Por favor, ingresa un correo electrónico válido.';
                formIsValid = false;
                console.log('Validación fallida: Correo de Contacto (formato incorrecto).');
            } else {
                contactEmail.classList.add('is-valid');
            }

            // --- Validación del campo Número de Teléfono ---
            const contactPhone = document.getElementById('contactPhone');
            const contactPhoneFeedback = document.getElementById('contactPhoneFeedback'); // Asegúrate de tener este span en tu HTML
            const phonePattern = /^[0-9]{10}$/; 
            if (contactPhone.value.trim() === '') {
                contactPhone.classList.add('is-invalid');
                contactPhoneFeedback.textContent = 'Por favor, ingresa tu número de teléfono.';
                formIsValid = false;
                console.log('Validación fallida: Teléfono (vacío).');
            } else if (!phonePattern.test(contactPhone.value.trim())) {
                contactPhone.classList.add('is-invalid');
                contactPhoneFeedback.textContent = 'Por favor, ingresa un número de teléfono válido (10 dígitos).';
                formIsValid = false;
                console.log('Validación fallida: Teléfono (formato incorrecto, se esperan 10 dígitos).');
            } else {
                contactPhone.classList.add('is-valid');
            }

            // --- Validación del campo Afectación a Infraestructura (Radio Buttons) ---
            const infraYes = document.getElementById('infraYes');
            const infraNo = document.getElementById('infraNo');
            const infraFeedback = document.getElementById('infraFeedback'); // Asegúrate de tener este span en tu HTML
            let infrastructureAffectedValue = '';

            if (infraYes.checked) {
                infrastructureAffectedValue = infraYes.value;
                infraNo.classList.remove('is-invalid'); // Limpiar el otro radio si estaba marcado como inválido
            } else if (infraNo.checked) {
                infrastructureAffectedValue = infraNo.value;
                infraYes.classList.remove('is-invalid'); // Limpiar el otro radio
            } else {
                formIsValid = false;
                infraYes.classList.add('is-invalid'); // Marcar al menos uno como inválido visualmente
                infraNo.classList.add('is-invalid');
                infraFeedback.textContent = 'Debes seleccionar si hay afectación a infraestructura.';
                console.log('Validación fallida: Afectación a Infraestructura (no seleccionado).');
            }
            if (infrastructureAffectedValue) { // Si se seleccionó alguno, limpiar el feedback
                infraFeedback.textContent = 'Debes seleccionar si hay afectación a infraestructura.';
                infraYes.classList.remove('is-invalid');
                infraNo.classList.remove('is-invalid');
            }

            // --- Validación de archivo de Evidencia Fotográfica (Opcional, pero si se selecciona, que sea una imagen) ---
            const fileInput = document.getElementById('photoEvidence');
            const fileUploadError = document.getElementById('fileUploadError'); // Asegúrate de tener este span en tu HTML
            if (fileInput && fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
                if (!allowedTypes.includes(file.type)) {
                    isValid = false; // Corregido: antes usaba 'isValid', debe ser 'formIsValid'
                    fileInput.classList.add('is-invalid');
                    fileUploadError.textContent = 'Solo se permiten imágenes (JPG, PNG, GIF).';
                    formIsValid = false;
                } else if (file.size > 5 * 1024 * 1024) { // 5 MB límite
                    isValid = false; // Corregido: antes usaba 'isValid', debe ser 'formIsValid'
                    fileInput.classList.add('is-invalid');
                    fileUploadError.textContent = 'El archivo es demasiado grande (máx 5MB).';
                    formIsValid = false;
                } else {
                    fileInput.classList.remove('is-invalid');
                    fileInput.classList.add('is-valid');
                    fileUploadError.textContent = '';
                }
            } else if (fileInput) { // Si no hay archivo seleccionado, asegurar que no haya invalidación
                fileInput.classList.remove('is-invalid', 'is-valid');
                fileUploadError.textContent = '';
            }

            console.log('Estado final de formIsValid:', formIsValid);

            // --- Si todas las validaciones pasan, recopilar los datos y ENVIARLOS A LA API ---
            if (formIsValid) {
                const formData = {
                    tipoEvento: eventType.value,
                    ubicacion: eventLocation.value.trim(),
                    fechaHora: eventDateTime.value,
                    numPersonasAfectadas: parseInt(affectedPeople.value) || 0,
                    descripcion: eventDescription.value.trim(),
                    nombreCompleto: contactName.value.trim(),
                    correoElectronico: contactEmail.value.trim(),
                    numeroTelefono: contactPhone.value.trim(),
                    afectacionInfraestructura: infrastructureAffectedValue
                    // Nota: Para subir archivos, necesitaríamos FormData y no JSON.
                    // Por ahora, solo enviamos los datos de texto/selección.
                };

                console.log('Datos del formulario a enviar:', formData); // Para depuración en la consola del navegador

                try {
                    const response = await fetch('http://localhost:3000/submit-report', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData) // Convierte el objeto JavaScript a JSON string
                    });

                    const result = await response.json(); // Parsea la respuesta JSON del servidor

                    if (response.ok) { // Si el estado de la respuesta es 2xx (ej. 200 OK)
                        alert('¡Reporte enviado con éxito!\n' + result.message);
                        reportForm.reset(); // Limpiar el formulario después del envío exitoso
                        // Quitar las clases 'is-valid' y 'is-invalid' después de resetear para limpiar el estado visual
                        Array.from(reportForm.elements).forEach(element => {
                            element.classList.remove('is-valid', 'is-invalid');
                        });
                        console.log('Formulario enviado y reseteado.');
                    } else {
                        // Si el servidor responde con un error (ej. 400, 500)
                        alert('Error al enviar el reporte: ' + (result.message || 'Error desconocido del servidor.'));
                        console.error('Error del servidor:', result);
                    }
                } catch (error) {
                    // Error de red, el servidor no responde, etc.
                    alert('No se pudo conectar con el servidor. Por favor, asegúrate de que el servidor está corriendo (http://localhost:3000).');
                    console.error('Error de conexión o de la solicitud fetch:', error);
                }
            } else {
                console.log('Errores en el formulario. Por favor, verifica los campos antes de enviar.');
                alert('Por favor, corrige los errores en el formulario antes de enviar.'); // Avisar al usuario
            }
        });
    } else {
        console.log('El formulario con ID "reportForm" no fue encontrado.');
    }
});