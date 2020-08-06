//input: object, string
//output:object

const user = {
    name: 'Tom',
    age: '50',
    city: 'test'
}



const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
};

// console.log(addPropertyV1(user, '07'));


const addPropertyV2 = (userData, userId) => 
    Object.assign(userData, {id: userId});

// console.log(addPropertyV2(user, '07'));


const addPropertyV3 = (userData, userId) => 
    Object.assign({}, userData, {id: userId});

// console.log(addPropertyV3(user, '07'));


const addPropertyV4 = (userData, userId) => {
    return {...userData, id: userId};
};

console.log(addPropertyV4(user, '07'));