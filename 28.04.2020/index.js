'use strict'
const numbersList = [4.78, 6.9, 36646];

// function callback (acc, num) {
//     console.log(acc, num);
//     const newAcc = acc + num;
    
//     return newAcc;
// }

// const sum = numbersList.reduce(callback, 0);

// console.log(sum);


const getTotalPrice = () => {
    const sum = arr.reduce(function callback(acc, num) {
        return acc + num;
    }, 0);    
    console.log(sum);
    return '$' + Math.floor(sum * 100) / 100;
};

console.log(getTotalPrice(numbersList));