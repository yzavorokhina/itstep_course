let images = document.querySelectorAll(".slider img"); //коллекция изображений
//console.dir(images);
let currentImageIndex = 0;

function changeSlide(){
    if(currentImageIndex < 3){
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }

    for(let i = 0; i < images.length; i++){
        if(i == currentImageIndex){
            images[i].classList.add('active');
        } else {
            images[i].classList.remove('active');
        }
    }
}

setInterval(changeSlide, 2000); //2000 милисекунд = 2 секунды

// TODO: 
// add titles above the image or below with slide titles