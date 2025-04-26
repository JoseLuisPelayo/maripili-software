// coge los elementos del DOM por el selector de css y los mete en las variables
const menuButton = document.querySelector('.menu__icon');
const navs = document.querySelector('.menu>ul');

//le añade un evento click al icono que le agrega la clase active si la tiene
//y se la quita si no la tiene usando el metodo toggle
menuButton.addEventListener('click', function () {
    navs.classList.toggle('active')
});