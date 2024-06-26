/* ################################*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')

}
/*#######################################*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };
    });

    /************************************ */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /****************************************** */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};
/****************scroll reveal************************** */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});
ScrollReveal().reveal('.inicio-contenido, heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-imagen, .servicios-container, .portafolio-box, .contacto form', { origin: 'buttom' });
ScrollReveal().reveal('.inicio-contacto h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.inicio-contacto p, .about-contenido', { origin: 'right' });

/*****************tyoed.js************************* */

const typed = new Typed('.multiple-text', {
    strings: ['Desarrolladora de Software'],
    typeSpeed: 70,
    backDelay: 1000,
    loop: true,


});



