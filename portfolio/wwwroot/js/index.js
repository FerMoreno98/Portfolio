
document.addEventListener('DOMContentLoaded', () => {

    asignarListenerAlScroll();
    asignarListenerModalEmail()
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