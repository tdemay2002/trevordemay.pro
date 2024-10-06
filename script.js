document.getElementById('mobile-menu').addEventListener('click', function(){
    const hamburger = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLogo = document.querySelector('.nav-logo');
    const navBar = document.querySelector('navBar');

    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    navLogo.classList.toggle('active');
    navBar.classList.toggle('active');
});