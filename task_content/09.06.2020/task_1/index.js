export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: null,

    startTimer() {
        this.timerId = setInterval(() => {
            this.secondsPassed += 1;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 1000);
        // this.timerId = timerId;
    },
    getTime() {
        let secs = this.secondsPassed < 10 ? `0${this.secondsPassed}` : this.secondsPassed;
        return `${this.minsPassed}:${secs}`;
    },
    stopTimer() {
        clearInterval(this.timerId);
        // this.timerId = null;
    },
    resetTimer() {
        this.stopTimer();
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}


//let secondsPassed = 0;


// export const timer = {
//     minsPassed: 0,
//     secondsPassed: 0,
//     intervalId: null,


//     //BROKEN
//     // startTimer() {
//     //     const adder = function () {
//     //         this.secondsPassed += 1;
//     //         console.log(this.secondsPassed);
//     //     };
    
//     //FIX CONTENT
//     //     const newAdder = adder.bind(this);

//     //     setInterval(newAdder, 1000);
//     // },

//     startTimer() {
//         this.intervalId = setInterval(() => {
//             this.secondsPassed +=1;
            
//             if (this.secondsPassed === 60) {
//                 this.minsPassed +=1;
//                 this.secondsPassed = 0;
//             }
            
//             console.log(this.secondsPassed);
//         }, 1000);
//     },
//         // console.log(this.intervalId);
            
//     stopTimer() {
//         clearInterval(this.intervalId);
//         this.timerId = null;
//     },
    
    
//     getTime() {
//         let secs = this.secondsPassed < 10
//             ? `0${this.secondsPassed}`
//             : this.secondsPassed;

//         return `${this.minsPassed}:${secs}`;
//     },

    
//     resetTimer() {
//         this.stopTimer();
//         this.secondsPassed = 0;
//         this.minsPassed = 0;
//     },
// };

// // timer.startTimer();