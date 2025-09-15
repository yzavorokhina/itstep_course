let a = document.createElement("a");

console.dir(a);

a.href = "https://google.com";

a.innerText = "Это ссылка на Google";
a.classList.add("no-decoration");
a.style.color = "red";

let div = document.querySelector("#root");

//1
div.append(a);  // вставляется элемент перед закрывающим тэгом

let a1 = document.createElement("a");
a1.href="https://ya.ru";
a1.innerText = "Это ссылка на Яндекс";

div.append(a1);

//2
div.prepend(a1); // добавляет элемент сразу после открывающим тэгом

//3
div.before(a);  // добавляет элемент перед открывающим тэгом

//4
div.after(a1); // добавляет элемент после закрывающего тэга

let texts = ['Пункт 1', 'Пункт 2','Пункт 3','Пункт 4'];

let ul = document.createElement("ul");

//let li = document.createElement("li");
//li.innerText = text[0];
//ul.append(li);

// let li1 = document.createElement("li");
// li1.innerText = text[1];
// ul.append(li1);

//метод применяет функцию к каждому элементу массива:
texts.forEach(function(elem){
    let li = document.createElement("li");
    li.innerText = elem;
    ul.append(li);
}); 

div.append(ul);

a1.remove();

let h1 = "<h1> Это заголовок </h1>";

div.textContent = h1;
div.innerText = h1; //браузер отобразит как текст а не как тэги
//div.innerHTML = h1;  //не подходит потому что перезатирает

//div.insertAdjacentHtml( "afterbegin" , h1);  // после открывающего тэга
//div.insertAdjacentHtml( "afterend" , h1);  // после закрывающего тэга
//div.insertAdjacentHtml( "beforebegin" , h1);  //перед открывающим тэгом
//div.insertAdjacentHtml( "beforeend" , h1);  // перед закрывающим тэгом

//div.insertAdjacentElement("afterend", a);

/* Javascript. DOM - pz4 */

