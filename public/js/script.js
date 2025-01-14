// Navbar Fixed 
window.onscroll = function () {
    const navbarNav = document.querySelector('#navbar');
    const fixedNav = navbarNav.offsetTop;

    if (window.scrollY > fixedNav) {
        navbarNav.classList.add('navbar-fixed');
    } else {
        navbarNav.classList.remove('navbar-fixed');
    }
}



const hamburger = document.getElementById('#hamburger');
const navMenu = document.getElementById('#nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});
