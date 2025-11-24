// let user = {};
// console.log(user);
// let div = document.createElement("h1");
// h1.innerText = 'Это заголовок';
// let summ = 0;
// // for (let i = 0; i < 100000000; i++){
// //     summ += 1;
// // }
// document.body.append(h1);

//асинхронная загрузка:
// function loadScript(url, callback){
//     let script = document.createElement('script');
//     script.src = url;

//     script.onload = () =>{
        // createHeader('Это заголовок');
        // setTimeout(() => {}, 3000);
        // createH2Header('Это тоже заголовок');
//         callback();
//     }
//     document.body.append(script);
// }

//асинхронная загрузка:
//loadScript('./header.js');
// loadScript('./header.js', function(){
//     createHeader('Это заголовок');
    // setTimeout(() => {}, 3000);
    // createH2Header('Это тоже заголовок');
// });

//создает асинхронную задачу,
// как callback тоже выполняется по истечениии времени:
// setTimeout(() => {
//     alert('From timeout');
// }, 3000);

// let a = document.createElement("a");
// a.innerText = 'Это ссылка';
// a.href = 'https://google.com';

// document.body.prepend(a);

//выполнение не ожидается, запускается функция,
// код продолжает выполнять остальные написанные функции и прочее
// resolve, reject - callback functions
// let promise = new Promise(function(resolve, reject){
//     let summ = 14;
    
//     setTimeout(() => {
//         if(summ == 12){
//             console.log(`Результат выполнения операции внутри промиса ${summ}`); 
//             resolve(summ);
//         } else {
//             console.log("Ошибка выполнения операции промиса");
//             let error = new Error ("Число слишком не 12");
//             reject(error);
//         }   
//     }, 3000);
// });

// console.log("Это пример использования промиса");
//console.log(`Состояние промиса ${this.state}`);

let num = 4;

let button = document.querySelector("#btn");
let result = document.querySelector("#result");

// создание:
button.addEventListener('click', () => {
    //TODO очищать класс "animated"
    result.classList.remove("animated");
    //console.log(num);
    let promise = new Promise((resolve, reject) =>{
        let input = document.querySelector("#answer");
        if(input.value == num){
            resolve("Вы угадали!!");
        }else{
            let error = new Error("Вы не угадали!!");
            reject(error);
        }
    });
    
    //обработка результата:
    // promise.then((message) =>{
    //     console.log(message);
    // });

    // promise.catch((error) => {
    //     console.log(error.message);
    // });

    promise.then((message) =>{
        console.log(message);
        // let h4 = '<h4> Вы угадали </h4>';
        // checker.innerHTML = h4;
        // let message =  message.innerHTML;
        result.innerText = message;
        result.classList.add("animated");
        document.body.style.background = 'green';
    }).catch((error) => {
        console.log(error.message);
        result.innerText = error.message;
        result.classList.add("animated");
        document.body.style.background = 'red';
    }).finally(() => {
        num = Math.floor(Math.random()*10) + 1;
    });
});