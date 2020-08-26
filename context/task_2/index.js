function printMessage(age, city) {
    console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}

let user = {
    name: 'Alex',
    email: 'gmail.com',
}

// const printMessageBinded = printMessage.bind(user);
// printMessageBinded(100, 'Lviv');

// const printMessageBinded1 = printMessage.bind(user, 100, 'Lviv');
// printMessageBinded1();

// printMessage.bind(user, 100, 'Lviv')();

// const myBind = (func, context, ...args) => {
//     return function (...targetArgs) {
//         return func.call(context, ...args, targetArgs);
//     }
// };

// const printMessageBinded = myBind(printMessage, user, 200, 'Kiev');
// printMessageBinded();

const mySuperBind = (func, context, ...args) => {
    return function () {
        const copyContext = { ...context };
        copyContext.tempFunction = func;
        copyContext.tempFunction(...args);
    }
}

const printMessageBinded3 = mySuperBind(printMessage, user, 50, )
printMessageBinded3();

console.log(user);