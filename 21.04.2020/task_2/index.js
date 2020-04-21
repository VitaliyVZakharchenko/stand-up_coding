"use strict"

// input: array
// output: bool (true/false)

function some(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        console.log(i);
        console.log(arr[i]);

        if (arr[i] % 3 === 0) {
            return true;
        }
            
    }
    return false;
}

const numbers = [77, 5, 3, 4, 5];
const result = some(numbers);

// console.log(numbers);
console.log(result);