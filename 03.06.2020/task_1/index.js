// 'use strict';

// scope example
// let message = 'Hello';

// if (true) {
//     let message = 'Hi';
//     console.log(message);
// }


// {
//     let message = 'Hey';
//     console.log(message);
// }

// function sum(a, b) {
    
// }

// console.log(message);


// hoisting example

// console.log(sum(5, 6));

// function sum(a, b) {
//     return a + b;
// }

// console.log(message);
// var message = 'Hello there!';
// console.log(message);



// hoisting var example

// var a = 10;

// if (true) {
//     var a = 50;
//     console.log(a);
// }

// console.log(a);

// hoisting var example 2

// var foo = 1;

// function bar() {
//     if (foo) {
//         console.log(foo);
//         console.log(!foo);
//         var foo = 10;
//     }

//     return foo;
// }

// var foo = bar();

// console.log(foo);

// hoisting var example 3


// var message = 'hello';

// function print() {
//     console.log(message);
//     var message = 'stop';
    
// }

// console.log(message);
// print();

let message = 'Hello';

if (true) {
    // let message = 'Hi';
    console.log(message);
}
console.log(message);
