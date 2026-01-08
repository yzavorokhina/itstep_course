let ul = document.body.children[2];

console.dir(ul);  // dir выводит  DOM-элементы как объекты

ul.firstElementChild.getElementsByClassName.textTransform = 'uppercase'; // text-transform: uppercase

ul.lastElementChild.style.color = 'green';

//ul.innerHTML = '<li> Оставить только одну эту строку </li>';

ul.previousElementSibling.style.fontSize = "20px";

ul.parentElement.id = "page-body";

console.log(ul.getAttribute('id'));

//ul.setAttribute('class', 'superlist');  // добавили свойство superlist

// ul.classList.add('normalized', 'underlined'); // добавили два класса
ul.classList.add('normalized'); // добавили  класс

if(ul.classList.contains('underlined')){
    ul.classList.remove('underlined');
} else {
    ul.classList.add('underlined');
};

//ul.classList.toggle('underlined');  // методом убрали один класс как remove (убрать класс или несколько классов)

//1
let block = document.getElementById('flexbox');  // возвратит один уникальный элемент

block.innerText = "Hello from founded block!";
block.classList.add('bordered', 'd-flex');
block.style.color = 'red';

//2
let blocks = document.getElementsByClassName('example');  // ElementsSSS!! - возвращает коллекцию
block = blocks[0];
block.classList.add('padding-10');

//3

blocks = document.getElementsByTagName('div');

//самые универсальные методы:
//block = document.querySelector('#flexbox'); // возвращает 1ый найденный элемент
block = document.querySelector(' .example'); // возвращает 1ый найденный элемент

block.classList.remove('padding-10');

blocks = document.querySelectorAll(' .example');
block = blocks[0];


let head = document.getElementsByTagName('h1');
//head.style.textAlign = 'center';

let link = document.querySelector('a');
//let link = document.getElementsByTagName('a');
//link.innerHTML = '<img src="https://media.istockphoto.com/id/1176602671/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D1%81%D0%B5%D0%BD%D0%BD%D0%B8%D1%85-%D0%BB%D0%B8%D1%81%D1%82%D1%8C%D0%B5%D0%B2-%D0%B4%D0%BE-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B0.jpg?s=612x612&w=0&k=20&c=gkUIH91_q-Ua4uLv_ulpfWeSz2BwuvDvdDaEmIFc290=" alt="photo">';

ul = document.querySelector('#list');
ul.lastElementChild.style.textAlign ='right';

//ul.children[1].style.textAlign = 'center';
let li = document.querySelector('#list li:nth-child(2)');
li.style.textAlign = 'center';
