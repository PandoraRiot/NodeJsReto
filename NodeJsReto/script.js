// Espera a que el DOM este completamente cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {
    // --- Logica para el boton de alerta ---
    const botonAlerta = document.getElementById('miBoton');

    if (botonAlerta) {
        botonAlerta.addEventListener('click', () => {
            console.log('Boton "¡Hacer clic aqui!" clickeado.');
            alert('¡Boton clickeado! Esto demuestra la funcionalidad basica de JavaScript.');
        });
    } else {
        console.log('El boton con ID "miBoton" no fue encontrado en el DOM.');
    }

    // --- Logica para la validacion y envio del formulario de reporte SIRMED ---
    const reportForm = document.getElementById('reportForm');

    if (reportForm) {
        reportForm.addEventListener('submit', async (event) => {
            console.log('Evento de submit del formulario "reportForm" disparado.');
            event.preventDefault(); // Previene el envio por defecto del formulario
            event.stopPropagation(); // Detiene la propagacion del evento

            let formIsValid = true;

            // Limpia mensajes de error y clases de validacion previas de todos los campos.
            const allFeedbacks = document.querySelectorAll('.invalid-feedback');
            allFeedbacks.forEach(feedback => { if (feedback) feedback.textContent = ''; }); // Verificacion si feedback existe
            const allFormControls = document.querySelectorAll('.form-control, .form-select, .form-check-input');
            allFormControls.forEach(control => control.classList.remove('is-invalid', 'is-valid'));


            // --- Validacion del campo Tipo de Evento (Select) ---
            const eventType = document.getElementById('eventType');
            const eventTypeFeedback = document.getElementById('eventTypeFeedback');
            if (!eventType.value) {
                eventType.classList.add('is-invalid');
                eventTypeFeedback.textContent = 'Por favor, selecciona un tipo de evento de riesgo.';
                formIsValid = false;
                console.log('Validacion fallida: Tipo de Evento (vacio).');
            } else {
                eventType.classList.add('is-valid');
            }

            // --- Validacion del campo Ubicacion del Evento ---
            const eventLocation = document.getElementById('eventLocation');
            const locationFeedback = document.getElementById('locationFeedback');
            if (eventLocation.value.trim() === '') {
                eventLocation.classList.add('is-invalid');
                locationFeedback.textContent = 'La ubicacion no puede estar vacia.';
                formIsValid = false;
                console.log('Validacion fallida: Ubicacion (vacia).');
            } else if (eventLocation.value.trim().length < 5) {
                eventLocation.classList.add('is-invalid');
                locationFeedback.textContent = 'La ubicacion debe ser mas detallada (minimo 5 caracteres).';
                formIsValid = false;
                console.log('Validacion fallida: Ubicacion (corta).');
            } else {
                eventLocation.classList.add('is-valid');
            }

            // --- Validacion del campo Fecha y Hora del Evento ---
            const eventDateTime = document.getElementById('eventDateTime');
            const eventDateTimeFeedback = document.getElementById('eventDateTimeFeedback');
            if (eventDateTime.value.trim() === '') {
                eventDateTime.classList.add('is-invalid');
                eventDateTimeFeedback.textContent = 'Por favor, ingresa la fecha y hora aproximada del evento.';
                formIsValid = false;
                console.log('Validacion fallida: Fecha y Hora del Evento (vacia).');
            } else {
                eventDateTime.classList.add('is-valid');
            }

            // --- Validacion del campo Numero de Personas Afectadas ---
            const affectedPeople = document.getElementById('affectedPeople');
            const affectedPeopleFeedback = document.getElementById('affectedPeopleFeedback');
            if (affectedPeople.value.trim() === '' || isNaN(affectedPeople.value) || parseInt(affectedPeople.value) < 0) {
                affectedPeople.classList.add('is-invalid');
                affectedPeopleFeedback.textContent = 'Por favor, ingresa un numero valido de personas afectadas (minimo 0).';
                formIsValid = false;
                console.log('Validacion fallida: N° Personas Afectadas (invalido).');
            } else {
                affectedPeople.classList.add('is-valid');
            }

            // --- Validacion del campo Descripcion Detallada ---
            const eventDescription = document.getElementById('eventDescription');
            const descriptionFeedback = document.getElementById('descriptionFeedback');
            if (eventDescription.value.trim() === '') {
                eventDescription.classList.add('is-invalid');
                descriptionFeedback.textContent = 'Por favor, proporciona una descripcion del evento.';
                formIsValid = false;
                console.log('Validacion fallida: Descripcion (vacia).');
            } else if (eventDescription.value.trim().length < 20) {
                eventDescription.classList.add('is-invalid');
                descriptionFeedback.textContent = `La descripcion es muy corta (${eventDescription.value.trim().length}/20). Por favor, se mas detallado.`;
                formIsValid = false;
                console.log('Validacion fallida: Descripcion (corta).');
            } else {
                eventDescription.classList.add('is-valid');
            }

            // --- Validacion del campo Nombre de Contacto ---
            const contactName = document.getElementById('contactName');
            const contactNameFeedback = document.getElementById('contactNameFeedback');
            if (contactName.value.trim() === '') {
                contactName.classList.add('is-invalid');
                contactNameFeedback.textContent = 'Por favor, ingresa el nombre completo.';
                formIsValid = false;
                console.log('Validacion fallida: Nombre de Contacto (vacio).');
            } else {
                contactName.classList.add('is-valid');
            }

            // --- Validacion del campo Correo Electronico de Contacto ---
            const contactEmail = document.getElementById('contactEmail');
            const contactEmailFeedback = document.getElementById('contactEmailFeedback');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            
            if (contactEmail.value.trim() === '') {
                contactEmail.classList.add('is-invalid');
                contactEmailFeedback.textContent = 'Por favor, ingresa el correo electronico.';
                formIsValid = false;
                console.log('Validacion fallida: Correo de Contacto (vacio).');
            } else if (!emailPattern.test(contactEmail.value.trim())) {
                contactEmail.classList.add('is-invalid');
                contactEmailFeedback.textContent = 'Por favor, ingresa un correo electronico valido.';
                formIsValid = false;
                console.log('Validacion fallida: Correo de Contacto (formato incorrecto).');
            } else {
                contactEmail.classList.add('is-valid');
            }

            // --- Validacion del campo Numero de Telefono ---
            const contactPhone = document.getElementById('contactPhone');
            const contactPhoneFeedback = document.getElementById('contactPhoneFeedback');
            const phonePattern = /^[0-9]{10}$/; 
            if (contactPhone.value.trim() === '') {
                contactPhone.classList.add('is-invalid');
                contactPhoneFeedback.textContent = 'Por favor, ingresa el numero de telefono.';
                formIsValid = false;
                console.log('Validacion fallida: Telefono (vacio).');
            } else if (!phonePattern.test(contactPhone.value.trim())) {
                contactPhone.classList.add('is-invalid');
                contactPhoneFeedback.textContent = 'Por favor, ingresa un numero de telefono valido (10 digitos).';
                formIsValid = false;
                console.log('Validacion fallida: Telefono (formato incorrecto, se esperan 10 digitos).');
            } else {
                contactPhone.classList.add('is-valid');
            }

            // --- Validacion del campo Afectacion a Infraestructura (Radio Buttons) ---
            const infraYes = document.getElementById('infraYes');
            const infraNo = document.getElementById('infraNo');
            const infraFeedback = document.getElementById('infraFeedback');
            let infrastructureAffectedValue = '';

            if (infraYes.checked) {
                infrastructureAffectedValue = infraYes.value;
                infraNo.classList.remove('is-invalid');
            } else if (infraNo.checked) {
                infrastructureAffectedValue = infraNo.value;
                infraYes.classList.remove('is-invalid');
            } else {
                formIsValid = false;
                infraYes.classList.add('is-invalid');
                infraNo.classList.add('is-invalid');
                infraFeedback.textContent = 'Se debe seleccionar si hay afectacion a infraestructura.';
                console.log('Validacion fallida: Afectacion a Infraestructura (no seleccionado).');
            }
            if (infrastructureAffectedValue) {
                infraFeedback.textContent = ''; // Limpiar el mensaje de error si se selecciono una opcion
                infraYes.classList.remove('is-invalid');
                infraNo.classList.remove('is-invalid');
            }

            // --- Validacion de archivo de Evidencia Fotografica (Opcional) ---
            const fileInput = document.getElementById('photoEvidence');
            const fileUploadError = document.getElementById('fileUploadError');
            if (fileInput && fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
                if (!allowedTypes.includes(file.type)) {
                    fileInput.classList.add('is-invalid');
                    fileUploadError.textContent = 'Solo se permiten imagenes (JPG, PNG, GIF).';
                    formIsValid = false;
                    console.log('Validacion fallida: Archivo (tipo incorrecto).');
                } else if (file.size > 5 * 1024 * 1024) { // 5 MB limite
                    fileInput.classList.add('is-invalid');
                    fileUploadError.textContent = 'El archivo es demasiado grande (maximo 5MB).';
                    formIsValid = false;
                    console.log('Validacion fallida: Archivo (tamano excedido).');
                } else {
                    fileInput.classList.remove('is-invalid');
                    fileInput.classList.add('is-valid');
                    fileUploadError.textContent = '';
                }
            } else if (fileInput) { // Si no hay archivo seleccionado, asegurar que no haya invalidacion
                fileInput.classList.remove('is-invalid', 'is-valid');
                fileUploadError.textContent = '';
            }

            console.log('Estado final de validacion del formulario:', formIsValid);

            // --- Si todas las validaciones pasan, recopilar los datos y enviarlos a la API ---
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
                    // Nota: Para subir archivos junto con JSON, se requeriria el uso de FormData.
                    // Actualmente, solo se envian los datos de texto/seleccion.
                };

                console.log('Datos del formulario a enviar:', formData);

                try {
                    const response = await fetch('http://localhost:3000/submit-report', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData) // Convierte el objeto JavaScript a JSON string
                    });

                    const result = await response.json(); // Parsea la respuesta JSON del servidor

                    if (response.ok) { // Si el estado de la respuesta HTTP es 2xx (exito)
                        alert('¡Reporte enviado con exito!\n' + result.message);
                        reportForm.reset(); // Limpia el formulario despues del envio exitoso
                        // Remueve las clases de validacion para limpiar el estado visual del formulario
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
                    // Error de red (el servidor no responde, etc.)
                    alert('No se pudo conectar con el servidor. Por favor, asegurese de que el servidor esta corriendo (http://localhost:3000).');
                    console.error('Error de conexion o de la solicitud fetch:', error);
                }
            } else {
                console.log('Errores en el formulario. Se requiere corregir los campos antes de enviar.');
                alert('Por favor, corrija los errores en el formulario antes de enviar.'); // Avisa al usuario de errores
            }
        });
    } else {
        console.log('El formulario con ID "reportForm" no fue encontrado en el DOM.');
    }
});
