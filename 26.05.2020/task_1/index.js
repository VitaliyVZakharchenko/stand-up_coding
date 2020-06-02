'use strict';

export const finishList = () => {
    const listEl = document.querySelector('.list');
    const el2 = document.querySelectorAll('li');

    const elOne = document.createElement('li');
    elOne.textContent = '1';
    listEl.prepend(elOne);
    
    const specialEl = document.querySelector('.special');
    const el4 = document.createElement('li');
    el4.textContent = '4';
    specialEl.before(el4);

    const el6 = document.createElement('li');
    el6.textContent = '6';
    specialEl.after(el6);

    const el8 = document.createElement('li');
    el8.textContent = '8';
    listEl.append(el8);
}

// finishList();