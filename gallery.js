// Mostrar detalles al pasar el mouse sobre la tarjeta
function showDetails(card) {
    const details = card.querySelector(".car-details");
    details.style.opacity = "1";
}

// Ocultar detalles al quitar el mouse
function hideDetails(card) {
    const details = card.querySelector(".car-details");
    details.style.opacity = "0";
}

// Abre el modal con la información del carro seleccionado
function selectCar(carName, carImage) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.querySelector(".modal-image");

    // Actualiza el título y la imagen del modal
    modalTitle.textContent = `🚗 ¡Has seleccionado el ${carName}!`;
    modalImage.src = carImage; // Cambia la imagen del modal

    // Muestra el modal
    modal.style.display = "flex";
}

// Aceptar selección y redirigir
function acceptCar() {
    window.location.href = "compra.html"; // Cambia esto si necesitas otra página
}

// Cierra el modal sin hacer nada
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
