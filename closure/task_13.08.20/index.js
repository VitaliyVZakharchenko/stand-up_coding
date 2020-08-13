//input: none
//output: object

export const createLogger = () => {
    const records = [];
    return {
        //input: string
        //output: underfined
        warn(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'warn'
            });
        },
        //input: string
        //output: underfined
        error(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'error'
            });
        },
        //input: string
        //output: underfined
        log(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'log'
            });
        },
        //input string
        //output: array

        //algo:
        //1. check if input -> filter
        //2. return all records
        //3.sort
        getRecords(type) {
            return type ? records
                .filter(message => message.type === type) :
                records
                .sort((mes1, mes2) => {
                    mes1.dateTime - mes2.dateTime;
                });

            // if (type) {
            //     return records
            //         .filter(message => message.type === type)
            //         .sort((mes1, mes2) => {
            //             mes1.dateTime - mes2.dateTime;
            //         });
            // } else {
            //     return records
            //         .sort((mes1, mes2) => {
            //             mes1.dateTime - mes2.dateTime;
            //         });
            // }
        }
    };
};

// const logger1 = createLogger();

// console.log(logger1);

// const res = logger1.warn('hello');
// console.log(res);
// logger1.error('shit happens');
// logger1.error('some error');
// logger1.log('some log message');

// console.log(logger1.getRecords());

// console.log(logger1.getRecords('error'));