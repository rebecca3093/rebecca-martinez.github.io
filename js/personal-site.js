fetch('https://api.github.com/users/rebecca3093/events/public', {
    authorization: 'GIT_KEY', // Useful for including session ID (and, IIRC, authorization headers)
})
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()`
    })
    .catch(error => console.error(error))


console.log("test")


/*==================== MENU - SHOW & HIDE ====================*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/

if (navToggle) {
    navToggle.addEventListener('click',
        () => {
            navMenu.classList.add('show-menu')
        })
}

/*===== MENU HIDDEN =====*/

if (navClose) {
    navClose.addEventListener('click',
        () => {
        navMenu.classList.remove('show-menu')
    })
}

console.log(navClose);


/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/