let currentSlide = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
}

// Cambiar slide cada 3 segundos
setInterval(nextSlide, 3000);