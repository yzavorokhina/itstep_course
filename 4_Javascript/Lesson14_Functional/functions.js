// let a = 5;
// let b = 6;
// let counter = 0;

// //let c = (5 + 6) * 7;

// function summ(a, b){

//     counter++; // делает фун-цию грязной, потому что меняет состояние
//     return a + b;
// }

// function mul(a, b){
//     return a * b;
// }

// // выход одной ф-ции - данные для другой:
// // чистая функция (результаты одни и те же и данные извне не берутся)
// let c = mul(summ(a,b), b);

// // результат будет разный, поэтому это не чистая ф-ция:
// function doSomething(a, b){
//     return (a + b) / Math.randon();

// // спорно что чистая, потому что объект Math извне:
//     return (a + b) / Math.PI;
// }
//////////////////////
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// let show = function(i){
//     console.log(i);
// }

// function cicle(counter, func){

//     if(counter < 0){
//         return;
//     }

//     func(counter);
//     counter--;
//     cicle(counter, func);

// }

// cicle(10, show);
/////////////////////

// let massive = [1, 2, 4, -1, 6, 9];
// let posMassive = [];
// let oddMassive = [];
// let negMassive = [];
// let newMass = [];

// for (let i = 0; i < mass.length; i++){
//     newMass.push(mass[i] * 2);
// }
// console.log(newMass);

// функции высш. порядка:
// newMass = massive.map(function(item){
//     return item * 2;
// });

// console.log(newMass);

// for (let i = 0; i <= massive.length; i++) {
//         if (massive[i] % 2 == 0) {
//         }
//         posMassive.push.massive[i];
//     }

// for (let num of massive.lenght) {
//         if (num < 0) {
//             negMassive.push(num);
//         }  
//     }

// for (let num  of massive) {
//     if (num % 2 === 0) {
//     }
//     odd.push.push(num);
// }
// console.log(negMassive);
// console.log(newMass);

// var positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// function isPositive(massive) {
//     return massive > 0;
// }

// function isNegative(massive) {
//     return massive < 0;
// }

// let filtered = [];

// // negativeCondition
// let someCondition = function(n) {
//     // if (n < 0){
//     //     return true;
//     // } else{
//     //     return false;
//     // }
//     return n < 0;

// };

// for (let element of massive){
//     if(someCondition){
//         filtered.push(element);
//     }
// }

// filtered = massive.filter((item) => {
//     return someCondition(item);
// });
// console.log (filtered);


// // oddCondition
// let oddCondition = [];
// let anotherSomeCondition = function(n) {
//     // if (n % 2 === 0){
//     //     return true;
//     // } else{
//     //     return false;
//     // }
//     return n % 2 === 0;

// };

// for (let element of massive){
//     if(anotherSomeCondition){
//         oddCondition.push(element);
//     }
// }
// console.log (oddCondition);


// function filter(elements, condition) {
//     let result = [];

//     // elements.forEach(function(element){
//     //     if(condition(element)){
//     //         result.push(element);
//     //     }
//     // });

//     elements.forEach(function(element){
//         condition(element) ? result.push(element) : null 
//     });
        
//     return result;
// }

// console.log(filter(massive, someCondition));
// console.log(filter(massive, anotherSomeCondition));

let cart = [
    {
        name: "Товар 1",
        count: 2,
        price: 10

    },
    {
        name: "Товар 2",
        count: 1,
        price: 5

    },
    {
        name: "Товар 3",
        count: 10,
        price: 1

    },
];

//let totalPrice = 0;
let totalPrice = cart.reduce(function(acc, item){
    // console.log(item);
    acc += item.price * item.count;
    return acc;
}, 0);

//let totalCount = 0;
let totalCount = cart.reduce(function(acc, item){
    acc += item.count;
    return acc;
}, 0);

// for (item of cart){
//     totalCount += item.count;
//     totalPrice += item.count * item.price;
// }

// cart.forEach(function(item){
//     totalCount += item.count;
//     totalPrice += item.count * item.price;
// });
console.log (totalCount);
console.log (totalPrice);


// немедленно вызываемые функции IIFE (например, для создания глобальных объектов при экспорте как в jquery):
function render(message){
    console.log(message);
}
render('Это сообщение');

// (function render(message){
//     console.log(message);
// })('Это сообщение');


// анонимная IIFE:
(function(message){
    console.log(message);
})(`Сумма чисел равна ${5 + 6}`);

// Каррирование (Currying)
// Каррирование – это трансформация, которая превращает вызов f(a, b, c) в f(a)(b)(c) /
// преобразование функции с несколькими аргументами в последовательность вложенных функций, каждая из которых принимает только один аргумент.
// Каррированная функция «ожидает» аргументы по одному, последовательно. Ключевой механизм — замыкания: ранее полученные аргументы «ждут» в памяти до завершения вычислений.

// Реализация обычно позволяет вызывать функцию обоими вариантами: либо нормально,
// либо возвращает частично применённую функцию, если количество аргументов недостаточно.
// Каррирование позволяет легко получать частичные функции: универсальная функция log(date, importance, message) после каррирования возвращает
// частично применённую функцию, когда вызывается с одним аргументом, как log(date)
// или двумя аргументами, как log(date, importance).

//Каррирование возможно только для функций с фиксированным числом аргументов.
// Функции без аргументов или с одним аргументом не требуют каррирования.
// В JavaScript каррирование реализуется благодаря: 
// - замыканиям (closure);
// - функциям первого класса (можно передавать, возвращать, присваивать).


// Обработка событий:
// function handleClick(action) {
//   return function(event) {
//     console.log(`Performing ${action} action on button click.`);
//   };
// }

// const handleSaveClick = handleClick('save');
// const handleDeleteClick = handleClick('delete');

// document.getElementById('saveButton').addEventListener('click', handleSaveClick);
// document.getElementById('deleteButton').addEventListener('click', handleDeleteClick);


// Для автоматического каррирования можно использовать библиотеки:
// Lodash:
// const { curry } = require('lodash');

// function greet(greeting, name) {
//   console.log(`${greeting}, ${name}!`);
// }

// const curriedGreet = curry(greet);
// curriedGreet('Hello')('John'); // Hello, John!
// curriedGreet('Hi')('Sarah');  // Hi, Sarah!