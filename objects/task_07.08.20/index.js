function compareObjects(obj1, obj2) {

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }



    // 1

    // let res = true;
    // keys1.forEach((key, index) => {
    //     if (obj1[key] !== obj2[key]) {
    //         res = false;
    //     }
    // });
    // return res;


    // 2
    // return !keys1.some(key => obj1[key] !== obj2[key]);
    

    // 3
    return keys1.reduce((acc, key) => obj1[key] !== obj2[key], true);
}


const obj1 = {
    name: 'Tom',
    age: '20',
    city: 'Kiev'
}

const obj2 = {
    name: 'Tom',
    age: '20',
    city: 'Kiev',
    // qwerty: 'qw'
}

console.log(compareObjects(obj1, obj2));