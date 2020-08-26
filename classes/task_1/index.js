// class Sportsman {
//     constructor(name) {
//         this.name = name;
//     }

//     run() {
//         console.log(`${this.name} is running`);
//     }
// }

// class Swimmer extends Sportsman {
//     constructor(name, style) {
//         super(name);
//         this.style = style;
//     }

//     swim() {
//         console.log(`${this.name} is swimming ${this.style}`);
//     }

//     test() {
//         console.log(this);
//     }
// }

// const spotsman = new Sportsman('Den');
// console.log(spotsman);
// spotsman.run();

// const spotsman1 = new Sportsman('Bob');
// spotsman1.run();

// const spotsman2 = new Sportsman('Ann');
// spotsman2.run();

// const swimmer1 = new Swimmer('Gim', 'test style');
// console.log(swimmer1);
// swimmer1.test();
// swimmer1.swim();


export class Sportsman {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

export class Swimmer extends Sportsman {
    constructor(name, style) {
        super(name);
        this.style = style;
    }

    swim() {
        console.log(`${this.name} is swimming ${this.style}`);
    }
}