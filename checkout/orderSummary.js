import { updateCartQuantity, updateCartPrice, saveToStorage, updateCheckout } from "../data/cart.js";
import { addToCart } from "../data/cart.js";
import { cart, removeFromCart } from "../data/cart.js";
import { products, getProduct } from "../data/products.js";
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderOrderSummary() {
    document.querySelectorAll('.add').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
        });
    });

    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        const matchingProduct = products.find(product => product.id === productId);

        if (matchingProduct) {
            cartSummaryHTML += `
                <div class="js-cart-item-container-${productId}">
                <p>Prazo de entrega: 45 minutos</p>
                <div class="product-content js-cart-item-container-${productId}">
                    <div class="image"><img src="${matchingProduct.image}" alt="">
                        <div class="info">
                            <div class="product-name">${cartItem.productName}</div>
                            <div class="product-price">R$${(cartItem.totalPrice).toFixed(2)}</div>
                            <div class="product-quantity">
                                <span>
                                Quantity: <span class="quantity-label quantity-label-${productId}">${cartItem.quantity}</span>
                                </span>
                            </div>
                            <input type="number" class="quantity-input quantity-input-${productId}" min="1" value="${cartItem.quantity}">
                            <button class="save-quantity" data-product-id="${productId}">Save</button>
                            <button class="updateBtn" data-product-id="${productId}">Update</button>
                            <button class="deleteBtn" data-product-id="${productId}">Delete</button>
                        </div>
                    </div>
                </div>
                </div>
            `;
        }
    });

    document.querySelector('.summaryContent').innerHTML = cartSummaryHTML;

    document.querySelectorAll('.deleteBtn').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            removeFromCart(productId);
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();
            updateCartQuantity();
            updateCheckout();
            renderPaymentSummary()
        });
    });

    const updateBtn = document.querySelectorAll('.updateBtn');
    updateBtn.forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.classList.add('is-editing-quantity');
        });
    });

    document.querySelectorAll('.save-quantity').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.classList.remove('is-editing-quantity');

            const quantityInput = document.querySelector(`.quantity-input-${productId}`);
            const newQuantity = Number(quantityInput.value);

            const cartItem = cart.find(item => item.productId === productId);
            if (cartItem) {
                cartItem.quantity = newQuantity;
                cartItem.totalPrice = cartItem.price * newQuantity; // Recalcula o preço total
            }

            const quantityLabel = document.querySelector(`.quantity-label-${productId}`);
            quantityLabel.innerHTML = newQuantity;

            saveToStorage();
            updateCartQuantity();
            updateCheckout();
            renderOrderSummary()
        });
    });

    let cartQuantity = 0;
    cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    saveToStorage();
    updateCartQuantity();
    updateCheckout();
    renderPaymentSummary()
}
