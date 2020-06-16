function printMessage(age, city) {
    console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}

let user = {
    name: 'Alex',
    email: 'gmail.com',
}

// let bind = printMessage.bind(user);
// printMessage(50, 'Kyiv');

//input: func, obj
//output: func
function myBind1(func, contex) {
    return func.bind(contex);
}

// let bindPrint = myBind1(printMessage, user);
// bindPrintMessage(50, 'Kyiv');


//input: func, obj
//output: func
// function myBind2(func, contex) {
//     //TODO implement it
//     //1. add func into context
//     //2. call func and return result
//     return function (...args) {
//         let copyContext = Object.assign({}, contex);
//         copyContext.tempFunc = func;

//         console.log(copyContext);
//         console.log(args);

//         return copyContext.tempFunc(...args);
//         // return contex.tempFunc();
//     }
// };


// let bindedPrintMessage = myBind2(printMessage, user);
// bindedPrintMessage(50, 'Kyiv');

// // console.log(bindedPrintMessage);
// console.log(user);


function myBindWithAplly(func, contex) {
    
    return function (...args) {
        let funcResult = func.apply(contex, args)
        return funcResult;
    }
};

let bindedPrintMessage = myBindWithAplly(printMessage, user);
bindedPrintMessage(50, 'Kyiv');