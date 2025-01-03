
document.addEventListener('DOMContentLoaded', () => {

    asignarListenerAlScroll();
    asignarListenerModalEmail();
    asignarListenerBotonEnviar();
})
function asignarListenerAlScroll() {
    document.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {  
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

}

function asignarListenerModalEmail() {
    const modalemail = document.getElementById('contactme');
    modalemail.addEventListener('click', () => {

        const modal = new bootstrap.Modal(document.getElementById('ModalEmail'));
        modal.show();
    })
}

async function mandarMensaje() {

    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    console.log(email);
    
    var data = {
        Email: email,
        Mensaje: mensaje
    };

    try {

        const response = await fetch('/Index?handler=EnviarMensaje', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json', 
                'RequestVerificationToken': document.getElementsByName('__RequestVerificationToken')[0].value
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data) 
        });

       
        const result = await response.json();

      
        if (result.success) {
            alert(result.message); 
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        alert('Ocurrió un error al enviar el mensaje.');
    }
}

function asignarListenerBotonEnviar() {
    const botonEnviar = document.getElementById('enviar');
    botonEnviar.addEventListener('click', async () => {
        await mandarMensaje();
    })
}

