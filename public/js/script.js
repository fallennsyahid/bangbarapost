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

// POPUP
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});

itemDetailButtons.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
};


document.querySelector('.close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    };
};

// File Upload
function updateFileName(input) {
    const fileName = input.files[0]?.name || "Tidak ada file yang dipilih";
    document.getElementById("file-name").textContent = fileName;
}

// Note


// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navbar');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});




