document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    // Toggle expanded state on hover
    navbar.addEventListener('mouseenter', function() {
        navbar.style.height = 'auto';
        navbar.querySelector('ul').style.opacity = '1';
        navbar.querySelector('.active-page').style.display = 'none';
    });

    // Return to minimized state when the mouse leaves the navbar
    navbar.addEventListener('mouseleave', function() {
        navbar.style.height = '50px';
        navbar.querySelector('ul').style.opacity = '0';
        navbar.querySelector('.active-page').style.display = 'block';
    });
});


document.getElementById('someElement').style.display = 'none';

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    const element = document.getElementById('someElement');
    if (element) {
        element.style.display = 'none';
    }
});
