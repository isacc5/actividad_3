// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const reserveForm = document.querySelector('.reserve-form');
if (reserveForm) {
    reserveForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica de validación y envío del formulario
        alert('¡Gracias por su reserva! Nos pondremos en contacto pronto.');
    });
}

// Responsive Menu Toggle
const menuButton = document.createElement('button');
menuButton.classList.add('menu-toggle');
menuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.main-header').appendChild(menuButton);

menuButton.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Animación al hacer scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .testimonial-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

