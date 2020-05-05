const buildObject = (keysList, valuesList) => { 
    let obj = {};

    keysList.reduce((acc, key, index) => {
    return {...acc, [key]: valuesList[index]};
    }, obj)
};