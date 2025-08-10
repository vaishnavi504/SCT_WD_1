// Scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0px 12px rgba(0,191,255,0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }
});
