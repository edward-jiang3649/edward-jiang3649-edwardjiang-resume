document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    // Get the current page URL without the query string or hash
    const links = navbar.querySelectorAll('a');
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Highlight the link that matches the current page
    links.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Handle hover effect to expand navbar, keeping headers visible
    navbar.addEventListener('mouseenter', function() {
        navbar.classList.remove('minimized');
        navbar.style.height = 'auto';
        navbar.querySelector('ul').style.opacity = '1';
    });

    // Return to minimized state when the mouse leaves the navbar
    navbar.addEventListener('mouseleave', function() {
        navbar.classList.add('minimized');
        navbar.style.height = '50px';
        navbar.querySelector('ul').style.opacity = '0';
    });

    // Additional element hiding logic
    const element = document.getElementById('someElement');
    if (element) {
        element.style.display = 'none';
    }

    // Slideshow initialization
    var slideIndex = [1, 1];
    var slideId = ["mySlides1", "mySlides2"];
    var slideInterval;

    showSlides(1, 0); // Initialize the first slideshow
    showSlides(1, 1); // Initialize the second slideshow

    // Set interval to rotate slides every 2 seconds
    slideInterval = setInterval(function() {
        plusSlides(1, 0); 
        plusSlides(1, 1); 
    }, 2000);

    // Function to handle left/right clicks for slides
    function handleClick(event, no) {
        var xPosition = event.clientX;
        var elementWidth = event.currentTarget.offsetWidth;

        if (xPosition < elementWidth / 2) {
            plusSlides(-1, no); // Move to previous slide when clicked on left
        } else {
            plusSlides(1, no);  // Move to next slide when clicked on right
        }
    }

    // Function to move slides forward or backward
    function plusSlides(n, no) {
        showSlides(slideIndex[no] += n, no);
    }

    // Function to jump to a specific slide
    function currentSlide(n, no) {
        showSlides(slideIndex[no] = n, no);
    }

    // Function to show the slides
    function showSlides(n, no) {
        var i;
        var slides = document.getElementsByClassName(slideId[no]);
        if (n > slides.length) {
            slideIndex[no] = 1;
        }
        if (n < 1) {
            slideIndex[no] = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex[no] - 1].style.display = "block";
    }
});






// Function to copy email to clipboard
function copyToClipboard(email) {
    // Create a temporary input element to hold the email text
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);

    // Select the email text and copy it to clipboard
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Show the popup message
    const popup = document.getElementById('popup-message');
    popup.classList.add('show');

    // Hide the popup after 2 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}
