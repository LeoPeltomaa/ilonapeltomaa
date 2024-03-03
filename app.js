const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});




// Attach the event listener to the window
window.addEventListener("resize", updateResolution);

document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop(); // ilona.html

    var links = document.querySelectorAll('nav ul li a');

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') === currentPage) {
            links[i].classList.add('active');
        }
    }
});