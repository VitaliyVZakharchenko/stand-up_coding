//input: none
//output: obj

export function createLogger() {
    let logs = [];

    //string
    //none
    function warn(text) {
        addMessage('warn', text);
    }

    function error(text) {
        addMessage('error', text);
    }

    function log(text) {
        addMessage('log', text);
    }
    
    //string
    //array
    function getRecords(text) {
    let filtered = text ? logs.filter(el.type === text) : logs; 
    return filtered.sort((a, b) => b.dateTime - a.dateTime);
    }

    function addMessage(type, text) {
        logs.push({
        message: text,
        dateTime: new Date(),
        type: type
    });
    }
    
    return {
        warn,
        error,
        log,
        getRecords,
    };
}

let logger1 = createLogger();

logger1.warn('aaa');
logger1.error('ccc');
logger1.log('bbb');

let logger2 = createLogger();

logger2.warn('aaa');
logger2.error('ccc');
logger2.log('bbb');

let logger3 = createLogger();

// logger3.warn('aaa');
logger3.error('ccc');
// logger3.log('bbb');
console.log(logger3.getRecords);


