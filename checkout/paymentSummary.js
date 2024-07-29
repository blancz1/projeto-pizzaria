import { cart } from "../data/cart.js"
import { getProduct } from "../data/products.js"

export function renderPaymentSummary() {
    let productPriceCents = 0
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId)
        productPriceCents += cartItem.price * cartItem.quantity
    })
    console.log(productPriceCents)
    
    document.querySelector('.totalItems').innerHTML = (productPriceCents).toFixed(2)

    document.querySelector('.total').innerHTML = (productPriceCents + 1500 / 100).toFixed(2)
}