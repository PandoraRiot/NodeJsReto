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

// --- JavaScript para la Validación del Formulario de Reporte (SIRMED) ---
const reportForm = document.getElementById('reportForm');

if (reportForm) {
    reportForm.addEventListener('submit', function(event) {
        console.log('Evento de submit del formulario "reportForm" disparado.');
        event.preventDefault();
        event.stopPropagation();

        let formIsValid = true;

        // --- Validación del campo Tipo de Evento (Select) ---
        const eventType = document.getElementById('eventType');
        const eventTypeFeedback = document.getElementById('eventTypeFeedback');
        if (!eventType.value) {
            eventType.classList.add('is-invalid');
            eventType.classList.remove('is-valid');
            eventTypeFeedback.textContent = 'Por favor, selecciona un tipo de evento de riesgo.';
            formIsValid = false;
            console.log('Validación fallida: Tipo de Evento.');
        } else {
            eventType.classList.remove('is-invalid');
            eventType.classList.add('is-valid');
        }

        // --- Validación del campo Ubicación del Evento ---
        const eventLocation = document.getElementById('eventLocation');
        const locationFeedback = document.getElementById('locationFeedback');
        if (eventLocation.value.trim() === '') {
            eventLocation.classList.add('is-invalid');
            eventLocation.classList.remove('is-valid');
            locationFeedback.textContent = 'La ubicación no puede estar vacía.';
            formIsValid = false;
            console.log('Validación fallida: Ubicación (vacía).');
        } else if (eventLocation.value.trim().length < 5) {
            eventLocation.classList.add('is-invalid');
            eventLocation.classList.remove('is-valid');
            locationFeedback.textContent = 'La ubicación debe ser más detallada (mínimo 5 caracteres).';
            formIsValid = false;
            console.log('Validación fallida: Ubicación (corta).');
        } else {
            eventLocation.classList.remove('is-invalid');
            eventLocation.classList.add('is-valid');
        }

        // --- Validación del campo Fecha y Hora del Evento ---
        const eventDateTime = document.getElementById('eventDateTime');
        const eventDateTimeFeedback = document.getElementById('eventDateTimeFeedback');
        if (eventDateTime.value.trim() === '') {
            eventDateTime.classList.add('is-invalid');
            eventDateTime.classList.remove('is-valid');
            eventDateTimeFeedback.textContent = 'Por favor, ingresa la fecha y hora aproximada del evento.';
            formIsValid = false;
            console.log('Validación fallida: Fecha y Hora del Evento (vacía).');
        } else {
            eventDateTime.classList.remove('is-invalid');
            eventDateTime.classList.add('is-valid');
        }

        // --- Validación del campo Número de Personas Afectadas ---
        const affectedPeople = document.getElementById('affectedPeople');
        const affectedPeopleFeedback = document.getElementById('affectedPeopleFeedback');
        if (affectedPeople.value.trim() === '' || isNaN(affectedPeople.value) || parseInt(affectedPeople.value) < 0) {
            affectedPeople.classList.add('is-invalid');
            affectedPeople.classList.remove('is-valid');
            affectedPeopleFeedback.textContent = 'Por favor, ingresa un número válido de personas afectadas (mínimo 0).';
            formIsValid = false;
            console.log('Validación fallida: N° Personas Afectadas (inválido).');
        } else {
            affectedPeople.classList.remove('is-invalid');
            affectedPeople.classList.add('is-valid');
        }

        // --- Validación del campo Descripción Detallada ---
        const eventDescription = document.getElementById('eventDescription');
        const descriptionFeedback = document.getElementById('descriptionFeedback');
        if (eventDescription.value.trim() === '') {
            eventDescription.classList.add('is-invalid');
            eventDescription.classList.remove('is-valid');
            descriptionFeedback.textContent = 'Por favor, proporciona una descripción del evento.';
            formIsValid = false;
            console.log('Validación fallida: Descripción (vacía).');
        } else if (eventDescription.value.trim().length < 20) {
            eventDescription.classList.add('is-invalid');
            eventDescription.classList.remove('is-valid');
            descriptionFeedback.textContent = `La descripción es muy corta (${eventDescription.value.trim().length}/20). Por favor, sé más detallado.`;
            formIsValid = false;
            console.log('Validación fallida: Descripción (corta).');
        } else {
            eventDescription.classList.remove('is-invalid');
            eventDescription.classList.add('is-valid');
        }

        // --- Validación del campo Nombre de Contacto (AHORA REQUERIDO) ---
        const contactName = document.getElementById('contactName');
        if (contactName.value.trim() === '') {
            contactName.classList.add('is-invalid');
            contactName.classList.remove('is-valid');
            formIsValid = false;
            console.log('Validación fallida: Nombre de Contacto (vacío).');
        } else {
            contactName.classList.remove('is-invalid');
            contactName.classList.add('is-valid');
        }

        // --- Validación del campo Correo Electrónico de Contacto (AHORA REQUERIDO) ---
        const contactEmail = document.getElementById('contactEmail');
        const contactEmailFeedback = document.getElementById('contactEmailFeedback');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        
        if (contactEmail.value.trim() === '') {
            contactEmail.classList.add('is-invalid');
            contactEmail.classList.remove('is-valid');
            contactEmailFeedback.textContent = 'Por favor, ingresa tu correo electrónico.';
            formIsValid = false;
            console.log('Validación fallida: Correo de Contacto (vacío).');
        } else if (!emailPattern.test(contactEmail.value.trim())) {
            contactEmail.classList.add('is-invalid');
            contactEmail.classList.remove('is-valid');
            contactEmailFeedback.textContent = 'Por favor, ingresa un correo electrónico válido.';
            formIsValid = false;
            console.log('Validación fallida: Correo de Contacto (formato incorrecto).');
        } else {
            contactEmail.classList.remove('is-invalid');
            contactEmail.classList.add('is-valid');
        }

        // --- Validación del campo Número de Teléfono (NUEVO CAMPO, REQUERIDO) ---
        const contactPhone = document.getElementById('contactPhone');
        // Patrón para 10 dígitos numéricos (común en Colombia)
        const phonePattern = /^[0-9]{10}$/; 
        if (contactPhone.value.trim() === '') {
            contactPhone.classList.add('is-invalid');
            contactPhone.classList.remove('is-valid');
            formIsValid = false;
            console.log('Validación fallida: Teléfono (vacío).');
        } else if (!phonePattern.test(contactPhone.value.trim())) {
            contactPhone.classList.add('is-invalid');
            contactPhone.classList.remove('is-valid');
            formIsValid = false;
            console.log('Validación fallida: Teléfono (formato incorrecto, se esperan 10 dígitos).');
        } else {
            contactPhone.classList.remove('is-invalid');
            contactPhone.classList.add('is-valid');
        }

        // --- Validación del campo Afectación a Infraestructura (NUEVO CAMPO, REQUERIDO) ---
        const infraYes = document.getElementById('infraYes');
        const infraNo = document.getElementById('infraNo');
        let infrastructureAffectedValue = '';
        if (infraYes.checked) {
            infrastructureAffectedValue = infraYes.value;
        } else if (infraNo.checked) {
            infrastructureAffectedValue = infraNo.value;
        } else { // Ninguna opción seleccionada
            // Para que Bootstrap muestre el mensaje de error, podemos añadir is-invalid a la primera radio
            // o a un contenedor padre si aplica. Aquí, el 'required' en el HTML ya ayuda.
            // Para JS, simplemente marcamos como inválido.
            formIsValid = false;
            console.log('Validación fallida: Afectación a Infraestructura (no seleccionado).');
        }
        // Bootstrap manejará visualmente la validación con la clase 'is-invalid' en los radios si el grupo es 'required'.
        // No necesitamos añadir is-valid/invalid a los radios directamente desde JS a menos que sea una validación compleja.
        
        console.log('Estado final de formIsValid:', formIsValid);

        // --- Si todas las validaciones pasan ---
        if (formIsValid) {
            const photoFileName = document.getElementById('eventPhoto').files.length > 0 ? document.getElementById('eventPhoto').files[0].name : 'No adjuntada';

            alert('¡Reporte de Riesgo enviado con éxito al SIRMED!\n\n' +
                  'Tipo de Evento: ' + eventType.value + '\n' +
                  'Ubicación: ' + eventLocation.value.trim() + '\n' +
                  'Fecha y Hora: ' + eventDateTime.value + '\n' +
                  'Personas Afectadas: ' + affectedPeople.value + '\n' +
                  'Evidencia Fotográfica: ' + photoFileName + '\n' +
                  'Descripción: ' + eventDescription.value.trim() + '\n' +
                  '--- Datos de Contacto del Reportante ---\n' +
                  'Nombre: ' + contactName.value.trim() + '\n' +
                  'Correo: ' + contactEmail.value.trim() + '\n' +
                  'Teléfono: ' + contactPhone.value.trim() + '\n' +
                  'Afectación Infraestructura: ' + infrastructureAffectedValue + '\n');
            
            // Reiniciar el formulario después del éxito
            reportForm.reset();
            // Quitar las clases 'is-valid' y 'is-invalid' después de resetear para limpiar el estado visual
            Array.from(reportForm.elements).forEach(element => {
                element.classList.remove('is-valid', 'is-invalid');
            });
            console.log('Formulario enviado y reseteado.');
        } else {
            console.log('Errores en el formulario. Por favor, verifica los campos.');
        }
    });
} else {
    console.log('El formulario con ID "reportForm" no fue encontrado.');
}