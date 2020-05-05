const buildObject = (keysList, valuesList) => { 
    let obj = {};

    keysList.reduce((acc, key, index) => {
    return {...acc, [key]: valuesList[index]};
    }, obj)
};




const getCustomersList = obj => {        
    return Object.entries(obj).map(
        (entry) => Object.assign(entry[1], { id: entry[0] })
    ).sort((a, b) =>  a.age - b.age);

};