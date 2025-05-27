const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    if (menuOpen == false) {
        navLinks.style.display = "flex";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
})