// let numbers = [3, 7, 9, 10, -5, 231];
//numbers[3] = "jhvuhvu";
// let arr = [3, {name: "Edgar"}, "Hello!", function(){console.log('Hi!')}];
// console.log(`Значение массива ${numbers[3]}`);
// arr[3]();
// for(let i = 0; i < numbers.length; i++){                                //.length свойство объекта
//     console.log(`${numbers[i]} в квадрате будет ${numbers[i]**2}`);
// }

// Task1
//Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

class Product {
  constructor(productName, productCount, productIsBay, productPrice ) {
    this.name = productName;
    this.count = productCount;
    this.isBay = productIsBay;
    this.price = productPrice;
  }
}
let productList = [
  new Product("Хлеб смуглый", 1, true, 67),
  new Product("Лук зеленый", 1, false, 67),
  new Product("Селедка", 1, true, 67),
  new Product("Селедка под шубой", 1, true, 54),
  new Product("Сметана", 1, true, 2343),
  new Product("Селедка без ничего", 1, false, 45), // висячая запятая
];
console.log(productList);

function showBill(massivTovarov){
    for(tovar of massivTovarov){  //of возвращает элементы , in - ключи

        let price = tovar.count * tovar.price;

        console.log(`Товар  ${tovar.name}, кол-во - ${tovar.count},
        цена - ${price.toFixed(2)}`)  //объект класса Number
    }
}

function totalPrice(massivTovarov){
    let result = 0;
    for(tovar of massivTovarov){
        let price = tovar.count * tovar.price;
        result += price; 
    }
    console.log(`Общая сумма: ${result.toFixed(2)} `)
}

function maxPriceProduct(massivTovarov){
    let resultProduct = null;
    let totalProductPrice = 0;

    massivTovarov.forEach(function (product) {
        let price = product.count * product.price;

        if(price > totalProductPrice){
            resultProduct = product;
            totalProductPrice = price;
        }
    });

    console.log(`Самая дорогая покупка в чеке это ${resultProduct.name}`)
}

function averNum(massivTovarov){
    let resultPrice = 0;
    let resultCount = 0;

    for (tovar of massivTovarov){
        resultPrice += tovar.price * tovar.count;
        resultCount += tovar.count;
    }
    let result = resultPrice / resultCount;
    console.log(`Самая дорогая стоимость одного товара в чеке
     ${result.toFixed(2)}`)
}

function showProductList(massivProductov) {
  console.log(`Некупленные продукты:`);

  for (let i = 0; i < massivProductov.length; i++) {
    //.length - 6
    if (massivProductov[i].isBay === false) {
      console.log(`${massivProductov[i].name},
       количество ${massivProductov[i].count}`);
    }
  }
  console.log(`Купленные продукты:`);
  for (let i = 0; i < massivProductov.length; i++) {
    //.length - 6
    if (massivProductov[i].isBay === true) {
      console.log(`${massivProductov[i].name},
       количество ${massivProductov[i].count}`);
    }
  }
}
//showProductList(productList);

function addProduct(newProduct) {
  //,massiv
  //    return massiv;

  let isProductExist = false;

  productList.forEach(function (product, index) {  //, productList
    if (product.name == newProduct.name) {
      isProductExist = true;
      productList[index].count += newProduct.count;
    }
  });

  if(!isProductExist){
    productList.push(newProduct);
  }
}
addProduct(new Product("Йогурт", 3, false, 66));
addProduct(new Product("Сметана", 3, false, 789));
//productsList = addProduct(new Product("Йогурт", 3, false), productList);
//showProductList(productList);

function bay(productName){

    productList.forEach(function (product, index) {  //, productList
        if (product.name == productName) {
          productList[index].isBay = true;
        }
    });

}
//bay('Лук зеленый');
//showProductList(productList);

// let mass =[1];
// mass[969] = 777;  //length 969+1(0)
// console.log(mass);

// Task2
// Создать массив, описывающий чек в магазине. 
// Каждый элемент массива состоит из названия товара,
// количества и цены за
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 2
// Домашнее задание №2
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке. 


// class Item {
//   constructor(itemName, itemCount, itemPrice) {
//     this.name = itemName;
//     this.count = itemCount;
//     this.price = itemPrice;
//   }
// }
// let itemList = [
//   new Item("Хлеб смуглый", 1, 34),
//   new Item("Лук зеленый", 1, 25),
//   new Item("Ведро", 1, 20),
//   new Item("Селедка", 1, 67),
//   new Item("Сметана", 1, 45),
//   new Item("Бумага", 4, 56), // висячая запятая 
// ];
// console.log(itemList);

 
// function sumItems(massivProductov){
// let result = 0;
//   for (let i = 0; i < massivProductov.length; i++) {

//       console.log(`${massivProductov[i].name},
//        количество ${massivProductov[i].count}`);
//     }

// }

showBill(productList);
totalPrice(productList);
maxPriceProduct(productList);
averNum(productList);

let str = "Hello, my dear friend!";
// str[0]= "M";
//console.log(str[0]);
console.log(str);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.split(' '));
console.log(str.replace('Hello', 'Hi'));

let stroka = new String();
console.log(stroka);