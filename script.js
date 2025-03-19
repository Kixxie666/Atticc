// Toggle Room Details
function toggleRoomDetails(roomId) {
    let details = document.getElementById(roomId);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

// Slideshow Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000);