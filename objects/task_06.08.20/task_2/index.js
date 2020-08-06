//algo
//1. iterate keyList with reduce
//2. get key/value & add to res object

//input: array, array
//output: object

// const buildObject = (keysList, valuesList) =>
//     keysList.reduce((acc, key, index) => {
//     return {...acc, [key]: valuesList[index]};
//     }, {});

// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];

// console.log(buildObject(keys, values));

const buildObject = (keysList, valueList) => {
    keysList.reduce((acc, curValue) => {
        // console.log(acc);
        console.log(curValue);
    }, {}) 
};


const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];

console.log(buildObject(keys, values));