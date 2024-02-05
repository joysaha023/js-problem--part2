function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }

    const mult = num1 * num2;
    return mult;
}

// const result = multiply(5, 'a');
// console.log(result);

console.log("typeof", typeof true);

// function fullName(first, last){
//     if(typeof first !== 'string'){
//         return "first name provide valid word";
//     }
//     else if(typeof last !== 'string'){
//         return "second name provide valid word";
//     }
//     const full = first + ' ' + last;
//     return full;
// }

// const full = fullName('Rahan', 7)
// console.log(full);

// function getPrice(product){
//     if(typeof product !== 'object'){
//         return 'please provide a object'
//     }
//     const price = product.price;
//     return price;
// }

// // const priceP = getPrice({name: 'joy', price: 35, color: 'blue'})
// const priceP = getPrice(5);
// console.log(priceP)

// function getSecond(numbers){
//     if(Array.isArray(numbers) === false){
//         return "please provide an array"
//     }
//     const second = numbers[1];
//     return second;
// }

// const second = getSecond(45);
// console.log(second);

