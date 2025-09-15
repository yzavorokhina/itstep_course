// let div = document.getElementById("root");

// let ul = document.createElement("ul");

// div.append(ul);

// let text = '';

// while(text = prompt('Введите значение для пункта списка')){
//     let li = document.createElement("li");
//     li.innerText = text;

//     ul.append(li);
// }


/* task pz5  Создайте дерево из объекта.
Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.*/

// let data = {
//     "Рыбы": {
//       "форель": {},
//       "лосось": {}
//     },
  
//     "Деревья": {
//       "Огромные": {
//         "секвойя": {},
//         "дуб": {}
//       },
//       "Цветковые": {
//         "яблоня": {},
//         "магнолия": {}
//       }
//     }
//   };

// let div = document.getElementById("root");
// let ul = document.createElement("ul");

// // создаёт дерево в контейнере:
// function createTree(container, data){

//     let ul = document.createElement("ul");

//     for (let key in data) {                                 // for in возьмет ключи объектов
//         //console.log(key);
//         let li = document.createElement("li");
//         li.innerText = key;

//         if(data[key]){
//             let ulInner = document.createElement("ul");

//             for(let key1 in data[key]){
//                 let li1 = document.createElement("li");
//                 li1.innerText = key1;

//                 if(data[key][key1]){
//                     let ulSuperInner = document.createElement("ul");

//                     for(let key2 in data[key][key1]){
//                         let li2 = document.createElement("li");
//                         li2.innerText = key2;

//                         ulSuperInner.append(li2);
//                     }
//                     li1.append(ulSuperInner);
//                 }

//                 ulInner.append(li1);
//             }

//             li.append(ulInner);
//         }
//         //container.append(li);
//         ul.append(li);
//     } 
//     container.append(ul);
// };

// createTree(div, data);

//let container = document.getElementById('container');


//3! = 1 * 2 * 3
// function faktorial(n){

// }

// console.log(faktorial(3));


/* Task */
function showNotification(options){
    let div = document.createElement("div");

    div.classList.add("notification");

    if(options.className){
        div.classList.add(options.className);
    }

    div.style.top = options.top + "px";
    div.style.right = options.right + "px";
    div.innerText = options.html;
    document.body.prepend(div);
    //setTimeout( function(){div.remove()}, 1500);

    setTimeout(function(){
        div.classList.add("hide");
        setTimeout(function(){div.remove()},1000);
    }, 1500);
}

showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    // className: "welcome" // дополнительный класс для div (необязательно)   
    //html: "Ошибка! Вы ввели неверные данные", // HTML-уведомление
    //className: "error" // дополнительный класс для div (необязательно)   
});

function notify(){
    let top = randomInteger(0, 400);
    let right = randomInteger(0, 600);

    showNotification({
        top: top, 
        right: right,  
        html: "Ошибка! Вы ввели неверные данные", // HTML-уведомление
        className: "error" // дополнительный класс для div (необязательно)   
    });
}

function randomInteger(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

setInterval(notify, 1000);