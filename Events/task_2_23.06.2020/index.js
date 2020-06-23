'use strict';

const itemElem1 = document.querySelector('.list-item');

function sayHi1(event) {
    console.log(event.target.textContent);
}

itemElem1.addEventListener('click', sayHi1);


const itemElem2 = document.querySelector('.list-item:nth-child(2)');
itemElem2.addEventListener('click', sayHi1);



const itemElem3 = document.querySelector('.list-item:last-child');
itemElem3.addEventListener('click', sayHi1);