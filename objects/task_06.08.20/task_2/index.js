//algo
//1. iterate keyList with reduce
//2. get key/value
//3. add to res object

//input: array, array
//output: object

// const buildObject = (keysList, valuesList) => {
//     keysList.reduce((acc, key, index) => {
//         return {...acc, [key]: valuesList[index]};
//     }, {});
// };

// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];

// console.log(buildObject(keys, values));

const buildObject = (keysList, valueList) => {
    
        keysList.reduce((accamulator, key, index) => {
        
        console.log(accamulator);
        console.log(key);
        console.log(valueList[index]);
        
        const res = { ...accamulator, [key]: valueList[index] };
        
        return res;
    }, {})

};


const keys = ['name', 'age'];
const values = ['Bob', '34'];

buildObject(keys, values);