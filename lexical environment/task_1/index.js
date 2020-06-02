// lexicalEnvironment = {
//     environmentRecord: {
//       <identifier> : <value>,
//       <identifier> : <value>
//     }
//     outer: < Reference to the parent lexical environment>
//   }

//interview example
// let a = 20;
// let b = 20;

// printer(a);
// sum(a, b);

// function printer(a) {
//     console.log(a);
// }

// const sum = (a, b) => {
//     console.log(a + b);
// }

let counter = 0;

export function makeCounter() {
    // let counter = 0;

    return function () {
        
        // counter++;
        return counter++;
    }    
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = makeCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());