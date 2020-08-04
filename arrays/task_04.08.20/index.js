//algo
//1. create empty array
//2. iterate array & call callback
//3.

//EXAMPLE
//input: [10, 30, 1, 8]
//output: [30]


//input: array, function
//output: array

//callback
//input:
//utput:
function filterArray(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}

let array = [10, 30, 1, 8, 100];

const callback = (element) => {
    const res = element > 20;
    return res;
}

// console.log(filterArray(array, callback));
