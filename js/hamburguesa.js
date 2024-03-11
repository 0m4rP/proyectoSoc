const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.menu1');

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})