const timer = {
    secondsPassed: 0,
    minsPassed: 0,

    //fix content with bind
    // startTimer() {
    //     const adder = function () {
    //         console.log(this);

    //         this.secondsPassed += 1;
    //     };

    //     const adderBinded = adder.bind(this);

    //     setInterval(adderBinded, 1000);
    //     // console.log(this);

    //     // setInterval(function () {
            
        
    //     //     this.secondsPassed += 1;
    //     //     console.log(this);
    //     // }, 1000);
    // },

    //fix content with arrow function
    startTimer() {
        setInterval(() => {
            console.log(this);

            this.secondsPassed += 1;
        }, 1000);
    },

    stopTimer() {

    },

    getTime() {

    },
    reset() {

    }
};

// timer.secondsPassed = 55;
timer.startTimer();

// setTimeout(() => {
//     console.log('11');
// }, 2000);

// setInterval(() => {
//     console.log('22');
// }, 2000);



//lose contex

// const user = {
//     name: 'Test',
//     run() {
//         console.log(this);
//     }
// }

// user.run();