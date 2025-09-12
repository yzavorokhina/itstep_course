// let a = 123;
// a =Math.sqrt(4);

// /* без ; */
// function sum(param1, param1){
//     return param1 + param2;
// }
// class Rect {

// }

// let num = 3;
// console.log (num);

// num = 56;
// console.log (num);

/* наименование переменных и функций выбирать в одном стиле */
// let str = "Hello";                         //'Hello'
// let str_inter = `${str + '123'}, world`;
// //let str_inter = `${12/-0}, world`;       // 0 и -0 есть в js
// let is_user = true;
// let empty = null;
// console.log(str_inter);

// let user = {
//     name: "Developer",
//     age: 25,
//     is_married: false,
//     salary: null,
//     "has childs": true    // клюс с пробелом в названии только в кавычках
// }
// // console.log(user[0]);

// let arr = [1, 2, 3, 4];
// let arr1 =[1, "2", {num: '3'}];

// console.log(arr1);

// const pi = 3.14;  // значение не переопределить в дальнейшем

// const obj = {
//     title: "Title"
// }
// obj.name = '123234';

/* Conditions */
// if (num > 0) {
//   console.log("Положительное");
// } else {
//   console.log("Отрицательное");
// }
// /* или сокращенно тернарным оператором: */
// num > 0 ? console.log("Положительное") : console.log("Отрицательное");

// let color = "blueeee";

// switch (color) {
//   case "blue":
//     console.log("Синий");
//     break;
//   case "black":
//     console.log("Черный");
//     break;
//   case "red":
//     console.log("Красный");
//     break;

//     default:
//         console.log('Неопределенный');
// }

// if (color == "blue") {
//     console.log("Синий");
// }
// if (color == "black") {
//     console.log("Черный");

// if (color == "red") {
//     console.log("Красный");
// }

// if (color == "blue") {
//     console.log("Синий");
// } else {
//     if (color == "black") {
//     console.log("Черный");
//     } else {
//         if (color == "red") {
//             console.log("Красный");
//         } else {
//             console.log('Неопределенный');
//         }
//     }
// }

/* или через else if */

/* цикл - кусок программы, который должен выполниться определенное кол-во раз */
// let hello = "Hello";
// console.log(hello);
// console.log(hello);
// console.log(hello);

// let counter = 0;

// while(counter < 10){
//   console.log(hello);
//     counter += 1;

// }

// for (let i = 0; i < 10; i++){
//     console.log(hello);
// }

/* функция - код, принимающий значения и выполняющий с ними определенные действия */
// console.log(22+45);

// function summ(param1, param2) {

//     let result = param1 + param2;

//     console.log(result);

//     return result;
// }
// summ(2, 2);

// let total = summ(2, 4);

// console.log(total ** 2);

// function gravity(m1,m2,r){

//     const G = 6.6743e-11;
//     let result = G * ((m1 * m2) / (r ** 2));

//     return result;

// }

// let g = gravity(80, 90, 1);
// console.log(g);

// let user = {
//     name: "Developer Programmer",
//     age: 25,
//     is_married: false,
//     salary: null,
//     "has childs": true,    // клюс с пробелом в названии только в кавычках
//     say_hi: function(){    // функции или методы
//         console.log (`Hello, my name is ${this.name}`);
//     },
//     say_age(){
//         console.log (`I am ${this.age} years old`);
//     }
// }
// user.say_hi();
// console.log(user.say_hi());
// user["say_hi"]();
// user.say_age();

// let perem = 3577;
// let terem = perem;
// console.log(perem);
// console.log(terem);

// terem = 7654;
// console.log(perem);
// console.log(terem);

// let elem = {
//   name: "Block",
// };
// //let new_elem = elem; // присвоили не по значению, а по ссылке

// let new_elem = {
//   // а теперь как надо было
//   name: elem.name,
// };

// console.log(elem);
// console.log(new_elem);

// new_elem.name = "Paragraph";

// console.log(elem);
// console.log(new_elem);

/* ------------------------------------------------------- */
// let mersedes = {
//   name: "Mersedes",
//   year: 1995,
// };

// let mazda = {
//   name: "Mazda",
//   year: 1990,
// };

// function Car(name, year, factory) {
//   this.name = name;
//   this.year = year;
//   this.factory = factory;
// }

// let mersedes = new Car ("Mersedes", 1995, {name: "Super zavod", address: "Germany"});
// let mazda = new Car ("Mazda", 1990, {name: "Super zavod", address: "Japan"});

// console.log(`${mazda.factory.name}, ${mazda.factory.address}`);

// // классическая функция
// function car(name, year) {
//   let obj = {};

//   obj.name = name;
//   obj.year = year;

//   return obj;
// }
// let mersedes = Car ("Mersedes", 1995);
// console.log(mersedes);
// console.log(mazda);

// let str = "Hello";
// let num = 3;
// console.log(str.length);
// console.log('Это число' + num. toString());
// console.log(str.toUpperCase());

// let n = new Number(3.365463);
// console.log(n.toFixed(2));
