let cart = [];
let total = 0;

// Añadir producto al carrito
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
}

// Actualizar carrito
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toLocaleString()} COP`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = `Total: $${total.toLocaleString()} COP`;

    if (cart.length === 0) {
        cartItems.innerHTML = "<li>Tu carrito está vacío 🛍️</li>";
    }
}

// Abrir modal de pago
function openPaymentModal() {
    document.getElementById("payment-modal").style.display = "flex";
}

// Cerrar modal de pago
function closePaymentModal() {
    document.getElementById("payment-modal").style.display = "none";
}

// Procesar pago
function processPayment(event) {
    event.preventDefault();
    alert("¡Pago procesado con éxito! 🎉");
    cart = [];
    total = 0;
    updateCart();
    closePaymentModal();
}
