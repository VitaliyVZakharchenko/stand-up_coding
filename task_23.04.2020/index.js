// начальный массив
const numbersList = [1, 2, 3, 4, 5];

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */


/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достаньте последний элемент массива
// и поместите его в переменную lastNumber
// выведите эту переменную в консоль

// ... code here


const lastNumber = numbersList.pop();
console.log(lastNumber);


/* push - добавит элемент в конец массива */

// c помощью метода push добавьте число 6 в конец массива
// выведите numbersList в консоль

// ... code here


const result = numbersList.push(6);
console.log(numbersList);


/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достаньте первый элемент массива и поместите его
// в переменную firstNumber
// выведите эту переменную в консоль

// ... code here


const firstNumber = numbersList.shift();
console.log(firstNumber);


/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавьте число 0 в начало массива
// выведите numbersList в консоль

// ... code here

numbersList.unshift(0);
console.log(numbersList);

// const newArr = [];

// function func(item, i) {
//     newArr.push(item * item);
//     // или
//     numbersList[i] = item * item;
//     // console.log(item);
// }

// numbersList.forEach(func);

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */


/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина
нового и исходного массивов равны */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* элементы массива newArr - это результат вызова callback для каждого элемента arr */
/* newArr[i] = callback(arr[i]) */

// c помощью метода map создайте новый массив squaredNumbers,
// в котором будут квадраты чисел из numbersList
// выведите squaredNumbers в консоль

// ... code here


function square(num) {
    return num * num;
}
const squaredNumbers = numbersList.map(square);
console.log(squaredNumbers);


/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true */
/* callback(arr[i]) === true -> элемент будет добавлен в финальный массив  */
/* callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив  */

// c помощью метода filter создайте новый массив evenNumbers,
// в котором только четные числа из numbersList
// выведите evenNumbers в консоль

// ... code here


function filterFunc(num) {
    return num % 2 === 0;
}
const evenNumbers = numbersList.filter(filterFunc);
console.log(evenNumbers);


/* метод find */
/* const arrElement = arr.filter(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* если callback(arr[i]) вернет true, то filter прекратит поиск и вернет этот элемент */

// c помощью метода find найдите первое нечетное число
// в numbersList и выведите его в консоль

// ... code here

function callback(num) {
    return num % 2 === 1;
}

const firstOdd = numbersList.find(callback);
console.log(firstOdd);