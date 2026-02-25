/* Map(коллекция пар ключ-значение) и деструктурирующее присваивание: */
let m = new Map();

m.set(1, "str1").set("1", "num1")
let o = {
  prop: "Prop",
  name: "Name",
  age: 25
}

m.set(o, "kdfgjffg");

// for(let key in o){
//   console.log(key);
// }

// for(let key of Object.keys(o)){
//   console.log(key);
// }

for(let key of Object.entries(o)){
  //console.log(key);
  //['prop', 'Prop']

  let [keyName, keyValue] = key;
  // let keyName = key[0];
  // let keyValue = key[1];

  console.log(keyName);
  console.log(keyValue);
}

console.log(keyName);
console.log(key);


/* Set(перебираемый объект): */
let arr = ["1", "1", "2"];
console.log(arr);

let set = new Set(arr);
console.log(set);

set.add("123");
console.log(set);

/* Замыкание(функция, возвращающая другую ф-цию у которой есть доступ к переменным внешней функции): */
if( 1 > 0){
  let k = 9;
}
console.log(k);

{
  let h = "hello";
}
console.log(h);

// function add(n1, n2 = 0 {
//   let summ = n1 + n2;
//   return summ;
// }

function MakeCounter() {
  let count = 0;

  return function () {
    return count++;
  }
}

let counter = makeCounter(); // в переменной function ()
let counter1 = makeCounter(); // в переменной function ()
console.log(counter()); //0
console.log(counter()); //1

console.log(counter1()); //0
console.log(counter1()); //1


// class User {
//   constructor(){
//     this.name = null;
//     this.age = 0;
//   }
// }

// let user1 = new User();
// user1.name = "Ivan";
// user1.age = 34;


function User() {
  this.name = null;
  this.age = 0;
}

let user = new User();
user.showName();

/* Декораторы(ф-ции меняющие поведение существующих): */


/* Передача контекста через call-метод указывающий объект со свойствами внутри и параметрами:  */
user.name = "Petr";
function  sayHi(helloPhrase, comma) {

  // console.log(`${helloPhrase}, ${this.name} ${comma}`);
  
  let show = () =>{
    console.log(`${helloPhrase}, ${this.name} ${comma}`);
  }
  show();
}

sayHi.call(user, "Hello", "!");
