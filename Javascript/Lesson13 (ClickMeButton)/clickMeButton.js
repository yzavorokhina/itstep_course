let div = document.querySelector(".conteiner");
let button = document.querySelector(".conteiner #btn");

div.addEventListener('click', function(event){
    // let div = document.getElementById("btn");
    //     //div.add();
    //     document.body.style.backgroundColor = 'pink';
     this.style.borderColor = "black";   
     //console.dir(div);

    //  if(event.target.tagName.toLowerCase() == 'button'){
    //      //console.log("Мы нажали на кнопку");
    //      event.target.classList.add("animated");
    //  }

//toggle - если класс существует, то будет удален, если не существует, то будет создана и удалена
     if(event.target.tagName.toLowerCase() == 'button'){
         //console.log("Мы нажали на кнопку");
         event.target.classList.toggle("animated");
     }

});

// button.addEventListener('click', function(){
//     // let div = document.getElementById("btn");
//     //     //div.add();
//     //     document.body.style.border = 'red';
//     this.parentElement.style.backgroundColor = "green";
// });

/* Прекратить обработку события: */
// button.addEventListener('click', function(event){
//     // let div = document.getElementById("btn");
//     //     //div.add();
//     //     document.body.style.border = 'red';
//     event.stopPropagation();
//     this.parentElement.style.backgroundColor = "green";
// });

