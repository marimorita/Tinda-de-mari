
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón del carrito en el navbar
    const cartButton = document.getElementById("cartButton");

    // Obtener referencia a todos los controles del carrito
    const cartControls = document.querySelectorAll(".cart-controls");

    // Agregar evento a todos los controles del carrito
    cartControls.forEach((controls) => {
        const subtractButton = controls.querySelector(".subtract-button");
        const addButton = controls.querySelector(".add-button");

        let quantity = 0;

        subtractButton.addEventListener("click", subtractFromCart);
        addButton.addEventListener("click", addToCart);

        function subtractFromCart() {
            if (quantity > 0) {
                quantity--;
            }
            updateCart();
        }

        function addToCart() {
            quantity++;
            updateCart();
        }

        function updateCart() {
            cartButton.textContent = "Carrito (" + quantity + ")";
        }
    });
});