let menu = document.querySelector('#mobile__menu');
let navLinks = document.querySelector('.navbar__menu');

let mobileMenu = () => {
     menu.classList.toggle('is-active')
     navLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);