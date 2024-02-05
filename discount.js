function layeredDiscountTotal(quantity){

    const fist100P = 100;
    const second100P = 90;
    const above200P = 70;

    if(quantity <= 100){
        const total = quantity * fist100P;
        return total;
    }
    else if( quantity <= 200){
        const first100Total = 100 * fist100P;
        const remainingQ = quantity - 100;
        const remainingTotal = remainingQ * second100P;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * fist100P;
        const second100Total = 100 * second100P;
        const remainingQ = quantity - 200;
        const remainingTotal = remainingQ * above200P;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const result = layeredDiscountTotal(350);
console.log(result);