let currentIndex = 0;

function changeContent(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentIndex].classList.remove('active');

    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0; // Wrap around to the first slide
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Wrap around to the last slide
    }

    slides[currentIndex].classList.add('active');
}

// Initialize the first slide as active
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    slides[currentIndex].classList.add('active');
});