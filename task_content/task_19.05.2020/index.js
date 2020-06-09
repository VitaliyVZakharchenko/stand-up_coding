function printMessage(age, city) {
    console.log(`Hello ${this.name}, email ${this.email} age:${age}, city ${city}`);
}

let user = {
    name: 'Alex',
    email: 'gmail.com'
}


// printMessage.bind(user)(30);
// printMessage.bind(user, 30, 'Kiev')();


//1 use bind
//input function, obj, arg1, arg2 ...argN
//output function
function bind1(func, contex, ...args) {
    console.log(args);
    return func.bind(contex, ...args);    
}

// bind1(printMessage, user)(30, 'Kiev');
// bind1(printMessage, user, 30)('Kiev');
// bind1(printMessage, user, 30, 'Kiev')();


//2 use call/apply
function bind(func, contex, ...args) {
    
}

//3 custom bind
//input function, obj, arg1, arg2 ...argN
//output function

//algo
//1.put func to the contex
//2. call func as object property
function bind3(func, contex, ...bindArgs) {
    return function (...funcArgs) {
        contex.tempFunction = func;
        return contex.tempFunction(...bindArgs, ...funcArgs);
    }
}

bind3(printMessage, user)(30, 'Kiev');
bind3(printMessage, user, 30)('Kiev');
bind3(printMessage, user, 30, 'Kiev')();