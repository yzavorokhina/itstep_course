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
/*----------------------------------------------------------------------------*/

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
/*----------------------------------------------------------------------------*/


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
/*-------------------------*/

//<a href ="https://google.com">ССылка</a>

// let a = {
//   name: 'a',
//   attribute: {
//     name: 'href',
//     value: "https://google.com",
//   },
//   innerHtml: 'Ссылка',
// };
/*-------------------------*/

//<input type="text"/>

// let input = {
//   name: 'input',
//   attribute: {
//     name: 'type',
//     value: 'text',
//   },
//   innerHtml: null,
// };
/*----------------------------------------------------------------------------*/

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
/*----------------------------------------------------------------------------*/

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
/*----------------------------------------------------------------------------*/

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
/*----------------------------------------------------------------------------*/

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
/*----------------------------------------------------------------------------*/

function HTMLElement(param1, param2, param3) {
  this.name = param1;
  this.attribute = param2;
  this.innerHtml = param3;
  
  this.renderHTML = function () {

    if (this.attribute != null && this.attribute.name != undefined && this.attribute.value != undefined) {
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
/*----------------------------------------------------------------------------*/