////////////////////// Task 1 //////////////////
// const heights2 = [167, 190, 120, 165, 137];

// function lowestNumber(num){
//     let a = num[0];
//     for(const number of num){
//         if(number < a){
//             a = number;
//         }
//     }
//     return a;
// }


// const result = lowestNumber(heights2);
// console.log(result);


///////////////////// Task 2 /////////////////////
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(friends){
    let smallName = friends[0]
    for(let i = 0; i < friends.length; i++){
        let elemnt = friends[i]
        if(smallName.length > elemnt.length){
            smallName = elemnt
        }
    }
    console.log("The smallest name is: ", smallName);
}

