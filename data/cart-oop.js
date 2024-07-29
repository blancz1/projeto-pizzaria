import { products } from "./products.js";


const cart = {
    cartItems: undefined,

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) || [];
    },
    
    saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    },
    
    addToCart(productId, size, price, quantity) {
        let matchingItem = this.cartItems.find(cartItem => cartItem.productId === productId && cartItem.size === size);
    
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
            this.cartItems.push({
                productId: productId,
                size: size,
                productName: productNameWithSize,
                price: price,
                quantity: quantity,
                totalPrice: price * quantity,
                
            });
        }
        this.saveToStorage();
    },
    updateCartPrice() {
        let cartPrice = 0;
        this.cartItems.forEach(cartItem => {
            cartPrice += cartItem.price;
        });
        document.querySelector('.product-price').innerHTML = cartPrice.toFixed(2);
        this.saveToStorage();
    },
    
    updateCartQuantity() {
        let cartQuantity = 0;
        this.cartItems.forEach(cartItem => {
            cartQuantity += cartItem.quantity;
        });
        document.querySelector('.cart-quantity').innerHTML = cartQuantity;
        this.saveToStorage();
    },
    
    removeFromCart(productId) {
        const newCart = []
    
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem)
            }
        })
        this.cartItems = newCart
        this.saveToStorage()
    },
    updateQuantity(productId, newQuantity){
        let matchingItem
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem
            }
    
        })
    
        matchingItem.quantity = newQuantity
    
        this.saveToStorage()
    
        
    },
    
    updateCheckout() {     let checkoutQuantity = 0;
        this.cartItems.forEach(cartItem => {
            checkoutQuantity += cartItem.quantity;
        });
        document.querySelector('.checkout-quantity').innerHTML = checkoutQuantity;
        
        updateCartQuantity()
        saveToStorage()
    }

}

cart.loadFromStorage()



