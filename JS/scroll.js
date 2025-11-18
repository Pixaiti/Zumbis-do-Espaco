const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        logo.classList.add('a');
    } else {
        logo.classList.remove('a');
    }
});
