let images = document.querySelectorAll(".slider img"); //коллекция изображений
//console.dir(images);
let currentImageIndex = 0;

const firstTitle = images[0].title;

let block = document.getElementById('flexbox');  // возвратит один уникальный элемент
block.innerText = firstTitle;
block.classList.add('bordered', 'd-flex', 'titleSpace');
block.style.color = 'white';
let blocks = document.getElementsByClassName('titleSpace');  // ElementsSSS!! - возвращает коллекцию
block = blocks[0];
block.classList.add('padding-10');
blocks = document.getElementsByTagName('div');

function changeSlide(){
    if(currentImageIndex < 7){
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }

    for (let i = 0; i < images.length; i++) {
        if (i == currentImageIndex) {
            const title = images[i].title;
            block.innerText = title;
            console.log({ title });
            images[i].classList.add('active');
        } else {
            images[i].classList.remove('active');
        }
    }
}

setInterval(changeSlide, 5000); //5000 милисекунд = 5 секунды