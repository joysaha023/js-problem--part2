// const products = [
//     {name: 'shampoo', price: 300, quantity: 2},
//     {name: 'soap', price: 50, quantity: 5},
//     {name: 'pent', price: 750, quantity: 2},
//     {name: 'shirt', price: 450, quantity: 3},
// ]

// function cartTotal (products){
//     let total = 0;
//     for(const product of products){
//         const thisProduct = product.price * product.quantity;
//         total = total + thisProduct;
//     }
//     return total;
// }

// const shoppingCost = cartTotal(products);
// console.log(shoppingCost);

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(100);
console.log(total);