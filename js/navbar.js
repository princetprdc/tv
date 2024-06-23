document.addEventListener('DOMContentLoaded', () => {
    fetch('/html/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Add event listener for hamburger menu after navbar is loaded
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    });
});
