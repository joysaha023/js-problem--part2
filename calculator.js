function add(a, b){
    const sum = a + b;
    return sum;
}

function subtract(a, b){
    const sum = a - b;
    return sum;
}

function multiply(a, b){
    const sum = a * b;
    return sum;
}

function divide(a, b){
    const sum = a / b;
    return sum;
}

function calculator(a, b, operation) {
    if(operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }
    else{
        return "please enter a correct operation";
    }
}

const result = calculator(5, 7, 'multiply');
console.log(result);