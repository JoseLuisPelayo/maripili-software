// coge los elementos del DOM por el selector de css y los mete en las variables
const menuButton = document.querySelector('.menu__icon');
const navs = document.querySelector('.menu>ul');
const slider = document.querySelector('.main__carrousel__slider');
const logos = document.querySelector('.main__carrousel__logos');

//le añade un evento click al icono que le agrega la clase active si
//  la tiene y se la quita si no la tiene usando el metodo toggle
menuButton.addEventListener('click', function () {
    navs.classList.toggle('active')
});

// Esta linea clona las imagenes del slider para duplicarlas 
// y que parezca infinito
slider.appendChild(logos.cloneNode(true));

