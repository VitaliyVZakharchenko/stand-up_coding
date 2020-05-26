'use strict';

export function finishList() {
    const listEl = document.querySelector('.list');
    const el2 = document.querySelectorAll('li');

    const elOne = document.createElement('li');
    elOne.textContent = 1;
    listEl.prepend(elOne);

    const elTwo = document.createElement('li');
    elTwo.textContent = 8;
    listEl.append(elTwo);

    const specialEl = document.querySelector('.special');
    const el4 = document.createElement('li');
    el4.textContent = 4;
    specialEl.before(el4);

    const el6 = document.createElement('li');
    el6.textContent = 6;
    specialEl.append(el6);
}

finishList();
