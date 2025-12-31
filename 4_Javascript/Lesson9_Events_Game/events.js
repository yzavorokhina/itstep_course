// function show1(num1, num2){
//     if(num1 < 0){
//         return;
//     }else{
//         console.log(`Числа ${num1} и ${num2}`);
//         show1(num1 - 1, num2 - 1);
//     }
// }
// // function show2(num1, num2){
// //     show1(num1, num2);
// // }

// // show2(2,3);

// show1(2, 3);

// function showNumbers(start, end){
// //     for(let i = start; i <= end; i++){
// //         console.log(i);
// //     }
//        if (start > end){
//            return;
//        }else{
//            console.log(start);
//            showNumbers(start + 1, end);
//        }
// }
// showNumbers (0, 10);

// function changeLinkText(event){
//     let a = document.querySelector("a");

//     a.innerText = "New link";

//     console.dir(event);  // вывод объекта события
// }

// let button = document.querySelector("button");

// // button.onclick = changeLinkText; // скобки использовать нельзя, потому что тогда будет вызов функции

// // button.onclick = function(){   // вывод нельзя навесить больше одного обработчика
// //     document.body.style.backgroundColor = 'red';
// // }

// button.addEventListener('click', changeLinkText );
// button.addEventListener('click', function(){   
//     document.body.style.backgroundColor = 'red';
//     });
// button.addEventListener('click', function(){   
//     document.body.style.backgroundColor = 'pink';
//     });
// button.addEventListener('click', function(){   
//     alert('Ready!');
//     });

// button.onclick = function(){
//     alert(this.innerText);
// }  

// button.onclick = function(event){
//     console.dir(event);
// }  


// button.onclick = function(event){
//     console.dir(event.target);     // event.target = this
// }


// button.removeEventListener('click', changeLinkText);  // удаляем слушатель событий

// не работает:
// button.removeEventListener('click', function(){   
//     document.body.style.backgroundColor = 'pink';
//     });


//button.onclick = null;  // удалить назначенные события

// console.dir(button);



/* Task 1 */
// Добавьте JavaScript к кнопке button,
// чтобы при нажатии элемент <div id="text"> исчезал.
// 
// function hideText(event){

//     let div = document.getElementById("text");

//     div.textContent = '';

//     console.dir(event);
// }

// let button = document.querySelector("button");
// button.addEventListener('click', hideText);



// variant:
// let button = document.querySelector("button");

// button.addEventListener('click', function(){
//     let div = document.getElementById("text");
//         div.remove();
// });

// button.addEventListener('click', function(){
//     this.hidden = true;
// })

const ball = document.querySelector(".ball");

function moveBall(event){
    //console.log(event);
    let clientX = event.clientX;
    let clientY = event.clientY;

    //console.dir(ball);

    ball.style.left = clientX - Math.floor(ball.offsetWidth/2) + "px";
    ball.style.top = clientY - Math.floor(ball.offsetHeight/2) + "px";
}

document.body.addEventListener('click', moveBall);

// TODO: add some meaning to the ball on the grass
// TODO: find jQuery games and play them