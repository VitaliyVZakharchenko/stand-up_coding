// 'use strict';

var a = 17;

function test() {
 var a = 10;   

if (a) {
    var a = 1;
    console.log(a);
}
}

test();
console.log(a);