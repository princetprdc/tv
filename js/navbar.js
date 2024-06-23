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


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Toggle the navigation menu when the hamburger is clicked
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close the navigation menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});
