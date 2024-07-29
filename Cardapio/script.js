import { cart } from "../data/cart.js";
import { addToCart } from "../data/cart.js";
import { updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `<div class="product-content">
<div> <img src="${product.image}" alt=""><p>${product.name}</p>
        
    <span class="price-quantity-container">
        <select class="price-selector-${product.id}">
            <option selected value="${(product.priceCents1 / 100).toFixed(2)}">8 pedaços $${(product.priceCents1 / 100).toFixed(2)}</option>
        <option value="${(product.priceCents2 / 100).toFixed(2)}">6 pedaços $${(product.priceCents2 / 100).toFixed(2)}</option>
        <option value="${(product.priceCents3 / 100).toFixed(2)}">Brotinho $${(product.priceCents3 / 100).toFixed(2)}</option>
        </select>
    </span>
    <span class="product-quantity-container">
            <select class="quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </span>
    <div class="button"><button class="add"
    data-product-id ="${product.id}">Adicionar</button></div>
</div>
</div>`;

});

document.querySelector('.products-grid').innerHTML = productsHTML;

document.querySelectorAll('.add').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const selectPrice = document.querySelector(`.price-selector-${productId}`);
        const price = Number(selectPrice.value);
        const size = selectPrice.options[selectPrice.selectedIndex].text;
        const selectQuantity = document.querySelector(`.quantity-selector-${productId}`);
        const quantity = Number(selectQuantity.value);

        addToCart(productId, size, price, quantity);
        updateCartQuantity();
    });
});
