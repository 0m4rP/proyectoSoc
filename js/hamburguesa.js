document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.hamburguesa');
    const navMenu = document.querySelector('.contenido');

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");
    })
});