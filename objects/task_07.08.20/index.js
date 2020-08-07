function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }

    keys1.forEach((key, index) => {
        console.log("KEY1" + key);
        console.log("VALUE" + obj1[key]);

        console.log("KEY2" + keys2[index]);
        console.log("VALUE2" + obj2[keys2[index]]);

        if (obj1[key] !== obj2[keys2[index]]) {
            return false;
        }
    });

    // return keys1.reduce((acc, key) => obj1[key] === obj2[key], true);

    // console.log();
}


const obj1 = {
    name: 'Tom',
    age: '20',
    city: 'Kiev'
}

const obj2 = {
    name: 'Tom',
    age: '1',
    city: 'Kiev'
}

console.log(compareObjects(obj1, obj2));