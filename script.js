document.getElementById('mobile-menu').addEventListener('click', toggleNav);

function toggleNav(){
    const hamburger = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLogo = document.querySelector('.nav-logo');

    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    navLogo.classList.toggle('active');
}