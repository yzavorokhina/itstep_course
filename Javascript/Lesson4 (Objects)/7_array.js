// Theory
// let numbers = [3, 7, 9, 10, -5, 231];
//numbers[3] = "jhvuhvu";
// let arr = [3, {name: "Edgar"}, "Hello!", function(){console.log('Hi!')}];
// console.log(`Значение массива ${numbers[3]}`);
// arr[3]();
// for(let i = 0; i < numbers.length; i++){                                //.length свойство объекта
//     console.log(`${numbers[i]} в квадрате будет ${numbers[i]**2}`);
// }
// let mass =[1];
// mass[969] = 777;  //length 969+1(0)
// console.log(mass);
// let str = "Hello, my dear friend!";
// // str[0]= "M";
// //console.log(str[0]);
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.length);
// console.log(str.split(' '));
// console.log(str.replace('Hello', 'Hi'));
// let stroka = new String();
// console.log(stroka);
/*-------------------------------------------------------------------------------------*/

// Task1
// Создать массив «Список покупок». Каждый элемент массива является объектом,
// который содержит название продукта, необходимое количество и куплен или нет.
// Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

// class Product {
//   constructor(productName, productCount, productIsBay, productPrice) {
//     this.name = productName;
//     this.count = productCount;
//     this.isBay = productIsBay;
//     this.price = productPrice;
//   }
// }
// let productList = [
//   new Product("Хлеб черный", 1, true, 4),
//   new Product("Лук зеленый", 1, false, 5),
//   new Product("Селедка под шубой", 1, true, 8),
//   new Product("Сметана", 1, true, 23),
//   new Product("Хороший борщ с капусткой, но не красный", 1, true, 8),
//   new Product("Сосисочки", 1, true, 1),
//   new Product("Непонятный салат (из моркови, капусты, яблок и ананаса)", 1, true, 2),
//   new Product("Вкусный чай, утоляющий жажду и позволяющий почувствовать себя человеком", 1, true, 53),
// ];
// console.log(productList);

/**
 * Вывод всего списка продуктов на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
 * @param array massivProductov
 * @return array Массив списка продуктов
 */
// function showProductList(massivProductov) {
//   console.log(`Некупленные продукты:`);

//   for (let i = 0; i < massivProductov.length; i++) {
//     //.length - 6
//     if (massivProductov[i].isBay === false) {
//       console.log(`${massivProductov[i].name},
//        количество ${massivProductov[i].count}`);
//     }
//   }
//   console.log(`Купленные продукты:`);
//   for (let i = 0; i < massivProductov.length; i++) {
//     //.length - 6
//     if (massivProductov[i].isBay === true) {
//       console.log(`${massivProductov[i].name},
//        количество ${massivProductov[i].count}`);
//     }
//   }
// }
//showProductList(productList);

/**
 * Добавление покупки в список. При добавлении покупки с уже существующим в списке продуктом,
 * увеличивается количество в существующей покупке, а не добавляется новая.
 * @param object newProduct
 * @return array Массив списка продуктов
 */
// function addProduct(newProduct) {
//   //,massiv
//   //    return massiv;

//   let isProductExist = false;

//   productList.forEach(function (product, index) {  //, productList
//     if (product.name == newProduct.name) {
//       isProductExist = true;
//       productList[index].count += newProduct.count;
//     }
//   });

//   if (!isProductExist) {
//     productList.push(newProduct);
//   }
// }
// addProduct(new Product("Йогурт", 3, false, 66));
// addProduct(new Product("Сметана", 3, false, 789));
//productsList = addProduct(new Product("Йогурт", 3, false), productList);
//showProductList(productList);

/**
 * Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
 * @param object productName
 * @return array Массив списка продуктов
 */
// function bay(productName) {
//   productList.forEach(function (product, index) {  //, productList
//     if (product.name == productName) {
//       productList[index].isBay = true;
//     }
//   });

// }
//bay('Лук зеленый');
//showProductList(productList);
/*---------------------------*/

// Task2
// Создать массив, описывающий чек в магазине.
// Каждый элемент массива состоит из названия товара,
// количества и цены за
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

/**
 * Распечатка чека на экран.
 * @param array massivTovarov
 * @return array massivTovarov with price
 */
// function showBill(massivTovarov) {
//   for (tovar of massivTovarov) {  //of возвращает элементы , in - ключи

//     let price = tovar.count * tovar.price;

//     console.log(`Товар  ${tovar.name}, кол-во - ${tovar.count},
//         цена - ${price.toFixed(2)}`)  //объект класса Number
//   }
// }

/**
 * Подсчет общей суммы покупки.
 * @param array massivTovarov
 * @return number result (total price)
 */
// function totalPrice(massivTovarov) {
//   let result = 0;
//   for (tovar of massivTovarov) {
//     let price = tovar.count * tovar.price;
//     result += price;
//   }
//   console.log(`Общая сумма: ${result.toFixed(2)} `)
// }

/**
 * Получение самой дорогой покупки в чеке.
 * @param array massivTovarov
 * @return object product (Product.name)
 */
// function maxPriceProduct(massivTovarov) {
//   let resultProduct = null;
//   let totalProductPrice = 0;

//   massivTovarov.forEach(function (product) {
//     let price = product.count * product.price;

//     if (price > totalProductPrice) {
//       resultProduct = product;
//       totalProductPrice = price;
//     }
//   });

//   console.log(`Самая дорогая покупка в чеке это ${resultProduct.name}`)
// }

/**
 * Подсчет средней стоимости одного товара в чеке.
 * @param array massivTovarov
 * @return object tovar
 */
// function averageItemPrice(massivTovarov) {
//   let resultPrice = 0;
//   let resultCount = 0;

//   for (tovar of massivTovarov) {
//     resultPrice += tovar.price * tovar.count;
//     resultCount += tovar.count;
//   }
//   let result = resultPrice / resultCount;
//   console.log(`Самая дорогая стоимость одного товара в чеке
//      ${result.toFixed(2)}`)
// }

// showBill(productList);
// totalPrice(productList);
// maxPriceProduct(productList);
// averageItemPrice(productList);
/*-------------------------------------------------------------------------------------*/

// Task3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст,
// и выводит этот текст с помощью document.write() в тегах <p></p>,
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
// console.log("Task3");
// class Style {
//   constructor(styleName, styleValue) {
//     this.name = styleName;
//     this.value = styleValue;
//   }
// }
// /**
//  * Функция, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
//  * добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
//  * @param {*} styleList
//  * @param {*} text
//  * @return text
//  */
// function printParagraph(styleList, text) {

//   let styleHtml = "";
//   for (let style of styleList) {
//     styleHtml += `${style.name}: ${style.value}; `;
//   }
//   document.write(`<p style="${styleHtml}">${text}</p>`);
// }

// let styleRomantic = [
//   new Style("color", '#add8e6'),
//   new Style("font-size", "large"),
//   new Style("font-style", "italic"),
//   new Style("font-weight", "100"),
//   new Style("text-decoration", "none"),
// ];
// printParagraph(styleRomantic, "There might be some romantic text here.");

// let styleSoulful = [
//   new Style("color", '#8608ee'),
//   new Style("font-size", "small"),
//   new Style("font-style", "oblique"),
//   new Style("font-weight", "400"),
//   new Style("text-decoration", "none"),
// ];
// printParagraph(styleSoulful, "There might be some soulful text here.");

// let styleHeroic = [
//   new Style("color", '#994b38'),
//   new Style("font-size", "large"),
//   new Style("font-style", "normal"),
//   new Style("font-weight", "800"),
//   new Style("text-decoration", "underline"),
// ];
// printParagraph(styleHeroic, "There might be some heroic text here.");

// let stylePsychological = [
//   new Style("color", '#6a8069'),
//   new Style("font-size", "medium"),
//   new Style("font-style", "normal"),
//   new Style("font-weight", "400"),
//   new Style("text-decoration", "underline"),
// ];
// printParagraph(stylePsychological, "There might be some psychological text here.");
/*-------------------------------------------------------------------------------------*/

// Task4
// Создать массив аудиторий академии. Объект-аудитория состоит из
// названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту).

console.log("Task4");

class AcademyAuditorium {
  constructor(name, capacity, facultyName) {
    this.name = name;
    this.capacity = capacity;
    this.faculty = facultyName;
  }
}

let academyAuditoriumList = [
  new AcademyAuditorium("Восточная башня", 60, "Griffindor"),
  new AcademyAuditorium("Гостиная Грифиндора", 40, "Griffindor"),
  new AcademyAuditorium("Башня Когтеврана", 9, "Ravenclaw"),
  new AcademyAuditorium("Гостиная Пуффендуя", 19, "Hufflepuff"),
  new AcademyAuditorium("Гостиная Слизерина", 32, "Slytherin"),
];

// console.log(academyAuditoriumList);

/**
 * Вывод на экран всех аудиторий.
 * 
 * @param array academyAuditoriumList
 * @return void
 */
function displayAllAudiences(academyAuditoriumList) {
  console.log(`Все аудитории академии Чародейства и волшебства Хо́гвартс:`);
  for (audience of academyAuditoriumList) {
    console.log(`${audience.name}`);
  }
}

displayAllAudiences(academyAuditoriumList);
/*----------------------------------------------------------------------*/

/**
 * Вывод на экран аудиторий для указанного факультета.
 * 
 * @param string facultyName
 * @return void
 */
function displayAudienceByFacultyName(facultyName) {
  console.log(`Аудитории для факультета ${facultyName}:`);
  for (let audience of academyAuditoriumList) {
    if (audience.faculty === facultyName) {
      console.log(`${audience.name}`);
    }
  }
}

displayAudienceByFacultyName("Griffindor");
/*----------------------------------------------------------------------*/

class Group {
  constructor(name, studentCount, facultyName) {
    this.name = name;
    this.capacity = studentCount;
    this.faculty = facultyName;
  }
}

let groupList = [
  new Group("Грифиндорцы-младшие", 32, "Griffindor"),
  new Group("Когтевранцы-младшие", 1, "Ravenclaw"),
  new Group("Пуффендуйцы-младшие", 11, "Hufflepuff"),
  new Group("Слизеринцы-младшие", 24, "Slytherin"),
  new Group("Грифиндорцы-средние", 35, "Griffindor"),
  new Group("Когтевранцы-средние", 4, "Ravenclaw"),
  new Group("Пуффендуйцы-средние", 14, "Hufflepuff"),
  new Group("Слизеринцы-средние", 27, "Slytherin"),
  new Group("Грифиндорцы-старшие", 30, "Griffindor"),
  new Group("Когтевранцы-старшие", 1, "Ravenclaw"),
  new Group("Пуффендуйцы-старшие", 10, "Hufflepuff"),
  new Group("Слизеринцы-старшие", 39, "Slytherin"),
];
// console.log(groupList);

/**
 * Вывод на экран только тех аудиторий, которые подходят для переданной группы.
 * Объект-группа состоит из названия, количества студентов и названия факультета.
 * 
 * @param Group group
 * @return void
 */
function displayAudienceForGroup(group) {
  console.log(`Аудитории для группы ${group.name}:`);
  for (let audience of academyAuditoriumList) {
    if (audience.faculty === group.faculty) {
      console.log(`${audience.name}`);
    }
  }
}

displayAudienceForGroup(groupList[0]);
/*----------------------------------------------------------------------*/

/**
 * Функция сортировки аудиторий по количеству мест.
 * 
 * @param array academyAuditoriumList
 * @return  array by capacity 
 */
function sortByCapacity(academyAuditoriumList) {
  console.log(`Сортировка аудиторий по количеству мест:`);

  academyAuditoriumList.sort((a, b) => {
    return a.capacity - b.capacity;
  });

  for (let audience of academyAuditoriumList) {
    console.log(`${audience.name} - ${audience.capacity}`);
  }
}
sortByCapacity(academyAuditoriumList);
/*----------------------------------------------------------------------*/

/**
 * Функция сортировки аудиторий по названию (по алфавиту).
 * 
 * @param array academyAuditoriumList
 * @return array sorted by name
 */
function sortByAcademyAuditoriumName(academyAuditoriumList) {
  console.log(`Сортировка аудиторий по названию:`);

  academyAuditoriumList.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  for (let audience of academyAuditoriumList) {
    console.log(`${audience.name}`);
  }
}
sortByAcademyAuditoriumName(academyAuditoriumList);
/*----------------------------------------------------------------------*/