// JavaScript for Scroll-Up Button
window.onscroll = function() {
    const scrollUpButton = document.querySelector('.scroll-up');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollUpButton.style.display = 'block';
    } else {
        scrollUpButton.style.display = 'none';
    }
};
// JavaScript for Parallax Scrolling
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
