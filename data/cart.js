import { products } from "./products.js";

export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, size, price, quantity) {
    let matchingItem = cart.find(cartItem => cartItem.productId === productId && cartItem.size === size);

    const matchingProduct = products.find(product => product.id === productId);

    const productNameWithSize = `${matchingProduct.name} (${size})`;
    const addedMessage = document.querySelector('.add-to-cart');
    addedMessage.classList.add('add-to-cart-visible');
    setTimeout(() => {
        addedMessage.classList.remove('add-to-cart-visible');
    }, 2000);

    if (matchingItem) {
        matchingItem.quantity += quantity;
        matchingItem.totalPrice += price * quantity;
    } else {
        cart.push({
            productId: productId,
            size: size,
            productName: productNameWithSize,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity,
            
        });
    }
    saveToStorage();
}

export function updateCartPrice() {
    let cartPrice = 0;
    cart.forEach(cartItem => {
        cartPrice += cartItem.price;
    });
    document.querySelector('.product-price').innerHTML = cartPrice.toFixed(2);
    saveToStorage();
}

export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = []

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }
    })
    cart = newCart
    saveToStorage()
} 
export function updateQuantity(productId, newQuantity){
    let matchingItem
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }

    })

    matchingItem.quantity = newQuantity

    saveToStorage()

    
}

export function updateCheckout() {     let checkoutQuantity = 0;
    cart.forEach(cartItem => {
        checkoutQuantity += cartItem.quantity;
    });
    document.querySelector('.checkout-quantity').innerHTML = checkoutQuantity;
    
    updateCartQuantity()
    saveToStorage()
}