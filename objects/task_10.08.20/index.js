//input: objects
//output: array of objects

//algo:
//1.copy obj
//2.get key-value by object.entries
//3.map elements
//4.sort

const getCustomersList = (obj) => {
    Object.entries(obj)
        .map(el => ({ ...el[1], id: el[0] }))
        .sort((a, b) => a.age - b.age);
};

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
        city: 'Kiev'
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};

console.log(getCustomersList(customers));