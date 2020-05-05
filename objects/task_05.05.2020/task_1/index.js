const buildObject = (keysList, valuesList) =>
    keysList.reduce((acc, key, index) => {
    return {...acc, [key]: valuesList[index]};
    }, {});

const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];

console.log(buildObject(keys, values));