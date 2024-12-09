(function () {
    emailjs.init('v7eGD4CT1SNXjLRiK'); // Reemplaza con tu 'user_id' de EmailJS
})();

function handleFormSubmit(event) {
    event.preventDefault(); // Evitar el envío real del formulario

    // Obtener el formulario
    const form = event.target;

    // Obtener valores de los campos
    const name = form.name.value;
    const age = form.age.value;
    const gift = form.gift.value;
    const behavior = form.behavior.value;
    const gender = form.gender.value;

    // Enviar el formulario utilizando emailjs.sendForm()
    emailjs.sendForm('service_1hn78wb', 'template_trqyiut', form)
        .then(function (response) {
            console.log('Correo enviado', response);
            alert('¡Gracias por enviar tu carta a Papá Noel! Hemos recibido tu mensaje.');

            // Reiniciar el formulario después del envío
            form.reset();

            // Mostrar mensaje personalizado
            const responseMessage = document.getElementById('responseMessage');
            let finalMessage = gender === 'male'
                ? (behavior === 'good'
                    ? "¡Gracias por ser un buen chico este año! Papá Noel está orgulloso de ti."
                    : "Aunque mereces carbón por portarte mal, Papá Noel verá qué puede hacer.")
                : (behavior === 'good'
                    ? "¡Gracias por ser una buena niña este año! Papá Noel está orgulloso de ti."
                    : "Aunque mereces carbón por portarte mal, Papá Noel verá qué puede hacer.");

            finalMessage += "<br><br>¡Gracias por enviar tu carta a Papá Noel! Tu mensaje ha sido recibido.";
            responseMessage.innerHTML = finalMessage;
        })
        .catch(function (error) {
            console.error('Error al enviar correo', error);
            alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
        });
}
