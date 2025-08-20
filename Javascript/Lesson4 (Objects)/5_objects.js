/* Task Example */
//  function summ(start, end) {

//  let result = 0;

//     for (let i = start; i <= end ; i++){
//         if(i % 2 == 0 ){
//             result += i;
//         }
//     }
//     console.log(`Сумма четных чисел диапазона от ${start} до ${end} равна ${result}`);

//  }
//  summ(10,50);
//  summ(1,100);
//  summ(-50,50);
//  summ(1,50);

//  const summ = function(start,end) {

//  let result = 0;

//  for (let i = start; i <= end ; i++){
//      if(i % 2 == 0 ){
//          result += i;
//      }
//  }
//  console.log(`Сумма четных чисел диапазона от ${start} до ${end} равна ${result}`);

// }
//summ(1,5);
/*---------------------------------------------------------------------------*/

/* Theory */
/*  Стрелочная функция без ключевого слова this */
// const arr = (name) => {
//     console.log('Hello, ${name}')
// }
// arr('Edgar');
// const user = {
//     "first name": 'Ivan',  //если с пробелом, то в кавычках
//     age: 35,
//     job: {
//         name: 'Developer',
//         experience: 15
//     },

//     gender: "man", // висячая запятая приводит свойства к одиннаковому вида
//     //hello(){  //другая запись метода без function
//     //стрелочная функция
//     //hello() => {
//         // console.log(`Hello!! My name is ${this.name}. I'm ${this.age} years old.`);
//         // console.log(`I have a ${car.name}. I's ${car.type}.`);
//     //}
//     hello: function(){
//         console.log(`Hello!! My name is ${this.name}. I'm ${this.age} years old.`);
//         console.log(`I have a ${car.name}. I's ${car.type}.`);
//     },
//     //vozrast: 4,
// }

// // let a () => {
// //     this.name ="1232";
// //     let b = ()=>{
// //         console.log(this);
// //     }
// //     b();
// // }

// user.hello();

// const car = {
//     name: "Mersedes",
//     type: "Legkovoi",
// }

// car.engine = "electric";

// //car = 5;

// console.log(user.name);
// console.log (`Пользователь ${user.name} работает на должнности ${user.job.name} ${user.job.stage} лет`)
// user.login = "Dev";
// user.password = 'qwerty';
// console.log (user);

// delete user.gender;
// console.log(user);
// console.log(user["first name"]);
// console.log(user["age"]);
// console.log(user["job"]["name"]);
// let age = "age";
// console.log(user[vozrast]);

// if("gender" in user) {
//     console.log(user.gender);
// }

// if(user.age !== undefined){

// }
// for(key in user){
//     console.log(`Ключ - ${key}`);
//     console.log(`Значение -${user[key]}`);
// }

//функции и методы
/*---------------------------------------------------------------------------*/

/* Task1 */
/* Напишите код, выполнив задание из каждого пункта отдельной строкой:
    Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта.
*/
// const user = {
//     name: 'John',
//     surname: 'Smith',
// }
// user.name = "Pete";
// console.log(JSON.stringify(user));
// console.log({ ...user });    //copy
// console.log(user);           //link
// delete user.name;
// console.log(JSON.stringify(user));
// console.log({ ...user });
// console.log(user);
// user.name = "David";
// console.log(JSON.stringify(user));
// console.log({ ...user });
// console.log(user);
/*------------------------------------------------------*/

/* Task2 */
/*Напишите функцию isEmpty(obj),
которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
 */

// let isEmpty = function(obj){
//     for (key in obj){
//         result = false;
//     }
//     return true;
//}

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// const obj1 = {
//     a: 1,
// }
// const obj2 = obj1;

// console.log(obj1.a);
// console.log(obj2.a);

// obj2.a = 34;

// console.log(obj1.a);
// console.log(obj2.a);
/*------------------*/

// let m = 1;
// let n = m;
// n = 5;
// console.log(m);
// console.log(n);

// const obj2 = {
//     a: obj1.a
// }

//клонирование свойств объектов:
// const obj2 = {}
// for(key in obj1) {
//     obj2[key] = obj1[key];
// }
// Object.assign(obj2, obj1);
/*------------------------------------------------------*/

/* Task3 */
/* Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John"
};
// это будет работать?           //будет
user.name = "Pete"; */
/*----*/
// Работает!
//user.name = "Pete";

// Ошибка
//user = 123;
/*------------------------------------------------------*/

/* Task3 */
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390.

//  function summSalary(salaries) {
//     let result = 0;
//     for(key in salaries) {
//          result += salaries[key];
//     }
//     return result;
// }
//  console.log(`Сумма равна ${summSalary(salaries)}`);
/*------------------------------------------------------*/

/* Task 4 */
/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
}; */

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log({ result: menu });
/*------------------------------------------------------*/

/* Task X */
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
//   };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
/*------------------------------------------------------*/

/* Функция принимает 2 значения name age и
 возвращает объект c заданными значениями */
// function usertoObj(name, age){
//   let obj ={};
//   obj.name = name;
//   obj.age = age;

//   return  obj;
// }
// let anna = usertoObj('Anna', 45);
// console.log (anna.name);
// console.log(usertoObj("Piter", 12));

/* Функция-конструктор (с большой буквы) возвращать ничего не нужно*/
// function UsertoObj(name, age) {
//   this.firstname = name;
//   this.vozrast = age;
//   this.hello = function () {
//     console.log(`Привет, я ${this.firstname}`);
//   };
// }

// let anna = new UsertoObj("Анна", 35); //тип наследует от основного объекта
// console.log(anna.hello());

/* Через классы */

//<div class="block"></div>

// let div = {
//   name: 'div',
//   attribute: {
//     name: 'class',
//     value: 'block',
//   },
//   innerHtml:'',
// };

//<a href ="https://google.com">ССылка</a>
// let a = {
//   name: 'a',
//   attribute: {
//     name: 'href',
//     value: "https://google.com",
//   },
//   innerHtml: 'Ссылка',
// };

//<input type="text"/>
// let input = {
//   name: 'input',
//   attribute: {
//     name: 'type',
//     value: 'text',
//   },
//   innerHtml: null,
// };

// class HTMLElement {
//     constructor(name){
//       this.name = name;
//       this.innerHtml = null;
//       this.attribute = null;
//     }

//     setInnerHtmlValue(innerHtmlValue){
//       this.innerHtml = innerHtmlValue;
//     }

//     setAttributeValue(attributeValue){
//       this.attribute = attributeValue;
//     }
// }

// let div = new HTMLElement('div');  // объект класса HTMLElement
// div.setInnerHtmlValue('');
// div.setInnerHtmlValue('1234454');
// div.setAttributeValue({name: 'class', value: 'block',});
// console.log(div);

// let a = new HTMLElement('a');  // объект класса HTMLElement
// a.setInnerHtmlValue('Ссылка');
// a.setAttributeValue({name: 'href', value: "https://google.com"});
// console.log(a);

// let input = new HTMLElement('input');  // объект класса HTMLElement
// input.setInnerHtmlValue(null);
// input.setAttributeValue({name: 'type', value: 'text'},);
// console.log(input);

// class HTMLElement {
//     constructor(param1 ,param2, param3){
//       this.name = param1;         //если убрать св-ва будет создан пустой объект
//       this.attribute = param2;
//       this.innerHtnl = param3;
//     }
//  // метод возвращает строку
//     renderHTML(){
//       //<div class="block"></div>
//       return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHtnl}</${this.name}>`;
//     }
// }

// const div = new HTMLElement('div',{ name: 'class', value: 'block',}, '1223');

// div.name = 'a';
// console.log(div.renderHTML());

// function Сalculator() {
//   this.num1 = 0;
//   this.num2 = 0;

//   this.read = function () {
//     this.num1 = +prompt(`num1?`, 0);
//     this.num2 = +prompt(`num2?`, 0);
//     console.log(`Введенные числа: ${this.num1}, ${this.num2} `);
//   };

//   this.sum= function () {
//     return this.num1 + this.num2 ;
//     console.log(`Сумма чисел равна: ${this.sum}`);
//   };

//   this.mul = function () {
//     return this.num1 * this.num2 ;
//     console.log(`Произведение чисел равно: ${this.mul}`);
//   };
// }

// let calculator = new Сalculator();
// calculator.read();

// calculator.sum();
// calculator.mul();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(startingValue) {

//   this.value = startingValue;

//   this.read = function () {
//         this.value += +prompt('Введите число', 0);
//   };  
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// class HTMLElement {
//     constructor(param1 ,param2, param3){
//       this.name = param1;         //если убрать св-ва будет создан пустой объект
//       this.attribute = param2;
//       this.innerHtnl = param3;
//     }
//  // метод возвращает строку
//     renderHTML(){
//       //<div class="block"></div>
//       return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHtnl}</${this.name}>`;
//     }
// }

function HTMLElement(param1, param2, param3) {
  this.name = param1;
  this.attribute = param2;
  this.innerHtml = param3;
  
  this.renderHTML = function () {

    if (this.attribute != null && this.attribute.name != undefined && this.attribute.value != undefined}) {
      return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHtml}</${this.name}>`;
    }
    return `<${this.name}>${this.innerHtml}</${this.name}>`;
  
  }

  this.addToPage = function(){
    document.body.insertAdjacentHTML('beforeend', this.renderHTML());
  }

}

const a = new HTMLElement('a', {name: 'href', value: 'https://google.com'}, 'Это ссылка на Google');
a.addToPage();
const p = new HTMLElement('p',{},'Это текстовый абзац');
p.addToPage();
console.log(a.renderHTML());