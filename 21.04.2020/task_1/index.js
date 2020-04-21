"use strict"

// input: array
// output: array

function squareArr(arr) {
    const result = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i += 1) {
        const square = (arr[i] * arr[i]);
        result.push(square);
    }
    return result;
}

const numbers = [4, 5, 3, 4, 5, 8];
const result = squareArr(numbers);

console.log(result);