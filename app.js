let menu = document.querySelector('#mobile__menu');
let navLinks = document.querySelector('.navbar__menu');
let navLogo = document.querySelector('#navbar__logo')
// Display Mobile Menu
let mobileMenu = () => {
     menu.classList.toggle('is-active')
     navLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling

 let highLightMenu = () => {
     let elem = document.querySelector('.hightlight');
     let homeMenu = document.querySelector('#home-page');
     let aboutMenu = document.querySelector('#about-page');
     let servicesMenu = document.querySelector('#services-page');

     let scrollPosition = window.scrollY;

     if (window.innerWidth > 960 && scrollPosition < 600){
          homeMenu.classList.add('hightlight');
          aboutMenu.classList.remove('hightlight');
          return;
     } else if (window.innerWidth > 960 && scrollPosition < 1400){
          aboutMenu.classList.add('hightlight');
          homeMenu.classList.remove('hightlight');
          servicesMenu.classList.remove('hightlight');
          return;
     } else if (window.innerWidth > 960 && scrollPosition < 2345){
          servicesMenu.classList.add('hightlight');
          aboutMenu.classList.remove('hightlight');
          return
     }

     if ((elem && window.innerWidth < 960) || scrollPosition < 600 ){
          elem.classList.remove('hightlight');
     }

 }

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click', highLightMenu);

// Colse Mobile menu when click on it item

let hideMobileMenu = () => {

     let mobileBars = document.querySelector('.is-active');//mobileBars = transformated burger menu - - -  to 'X'
     if (window.innerWidth <= 768 && mobileBars) {// if width of display 768 or less and navbar menu is column whish signs mobileBars 
          menu.classList.toggle('is-active');
          navLinks.classList.remove('active');
     }
}

navLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);