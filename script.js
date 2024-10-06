document.getElementById('mobile-menu').addEventListener('click', function(){
    const hamburger = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});