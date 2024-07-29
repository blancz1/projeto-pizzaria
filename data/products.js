export function getProduct(productId) {
    let matchingProduct

    products.forEach((product) => {
        if (product.id === productId){
            matchingProduct = product
        }
    })
    return matchingProduct
}

class Product {
    id;
    image;
    name;
    priceCents1
    priceCents2
    priceCents3

    constructor(productDetails) {
        this.id = productDetails.id
        this.image = productDetails.image
        this.name = productDetails.name
        this.priceCents1 = productDetails.priceCents1
        this.priceCents2 = productDetails.priceCents2
        this.priceCents3 = productDetails.priceCents3
    }
}



export const products = [
    {
    image:"../img/calabresa.jpg",
    name: 'Calabresa',
    id: 'asoSDFoqwQWfgpdADasdmd',
    priceCents1: 5590,
    priceCents2: 4590,
    priceCents3: 3590,
    
    
}, {
    image: "../img/queijo.jpg",
    name: 'Queijo',
    id: 'qwdosaoflsad',
    priceCents1: 5290,
    priceCents2: 4290,
    priceCents3: 3290
}, {
    image: "../img/margherita.jpg",
    name: 'Margherita',
    id: 'qwkekfmsdlDKfm',
    priceCents1: 5790,
    priceCents2: 4790,
    priceCents3: 3790
}, {
    image: "../img/corn e bacon.jpg",
    name: 'Corn & Bacon',
    id: 'fkaskdamsdlv',
    priceCents1: 5890,
    priceCents2: 4890,
    priceCents3: 3890
}, {
    image: "../img/3-queijos.jpg",
    name: '3 Queijos',
    id: 'wqlkdakfmds',
    priceCents1: 5190,
    priceCents2: 4190,
    priceCents3: 3190
}, {
    image: "../img/pepperoni.jpg",
    name: 'Pepperoni',
    id: 'wqdlpoqwdoldsad',
    priceCents1: 5590,
    priceCents2: 4590,
    priceCents3: 3590
}, {
    image: "../img/doce-de-leite.jpg",
    name: 'Doce de Leite',
    id: 'qowdaowefmiqwdm',
    priceCents1: 4890,
    priceCents2: 3890,
    priceCents3: 2890
}, {
    image: "../img/brigadeiro.jpg",
    name: 'Brigadeiro',
    id: 'qwdkaskfmigiwemf',
    priceCents1: 4790,
    priceCents2: 3790,
    priceCents3: 2790
}].map((productDetails) => {
    return new Product(productDetails)
});
console.log(products)