'use strict'
const numbersList = [4.784, 6.9324, 36646.48];

// function callback (acc, num) {
//     console.log(acc, num);
//     const newAcc = acc + num;
    
//     return newAcc;
// }

// const sum = numbersList.reduce(callback, 0);

// console.log(sum);


const getTotalPrice = arr => {
    const sum = arr.reduce((acc, num) => {
        return acc + num;
        }, 0)     
    return '$' + Math.floor(sum * 100) / 100;
};

console.log(getTotalPrice(numbersList));