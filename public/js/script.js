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


// Menu Active
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah aksi default link

        // Hapus kelas active dari semua link
        menuLinks.forEach(l => l.classList.remove('active'));

        // Tambahkan kelas active ke link yang diklik
        this.classList.add('active');
    });
});

// Menu Slide
function changeSlide(index) {
    const sliderContent = document.getElementById("slider-content");
    const slideWidth = sliderContent.clientWidth / 3; // Menghitung lebar satu slide
    sliderContent.style.transform = `translateX(-${index * slideWidth}px)`; // Menggeser sesuai index
}



const hamburger = document.getElementById('#hamburger');
const navMenu = document.getElementById('#nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});



