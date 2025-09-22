let nav = document.querySelector("header nav");
let button = document.querySelector("header #menu-toggler");

nav.addEventListener('click', function(event){

     this.style.borderColor = "pink";   

//toggle - если класс существует, то будет удален, если не существует, то будет создана и удалена
     if(event.target.tagName.toLowerCase() == 'button'){
         //console.log("Мы нажали на кнопку");
         event.target.classList.toggle("opened");
     }
});

let a = document.getElementById("link");
a.addEventListener('click', function(event){
    event.preventDefault();

    let link = this.href;
    let iframe = document.querySelector("iframe");

    console.dir(document);

})
