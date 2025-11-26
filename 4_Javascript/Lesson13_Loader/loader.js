let message = document.createElement('span');
let container = document.querySelector(".container");

// let promise = new Promise(function(resolve, reject){
//     let time = 7;
    
//     setTimeout(() => {
//         if(time == 5){
//             resolve(`Время выполнения операции внутри промиса ${time} секунд`);
//         } else {
//             let error = new Error ("Время не соответствует заданному");
//             reject(error);
//         }   
//     }, 5000);
// });

// function load(){
//     return new Promise(function(resolve, reject){
//         let time = 7;
        
//         setTimeout(() => {
//             if(time == 5){
//                 resolve(`Время выполнения операции внутри промиса ${time} секунд`);
//             } else {
//                 let error = new Error ("Время не соответствует заданному");
//                 reject(error);
//             }   
//         }, 5000);
//     });
// }

// async функция вызявающая промис как результат своей работы:
async function load(){
    let time = 5;

    if(time == 5){
        return "Данные загружены успешно";
    } else {
        let error = new Error ("Ошибка загрузки данных");
        throw error;
    }   
};

// setTimeout(() => {
//     load().then((result) =>{
//         message.innerText = result;
//         container.append(message);
    
//         console.log(message);
//         // let h2 = `<h2> Wait 5 seconds </h2>`;
//     }).catch((error) => {
//         message.innerText = error.message;
//         container.append(message);
//         console.log(error.message);
//     }).finally(() => {
//         document.querySelector(".loader").remove();
//     });
// }, 5000);

// let promise = load();

//обработчик положительного результата:
// load().then((result) =>{
//     message.innerText = result;
//     container.append(message);

//     console.log(message);
//     // let h2 = `<h2> Wait 5 seconds </h2>`;
// }).catch((error) => {
//     message.innerText = error.message;
//     container.append(message);
//     console.log(error.message);
// }).finally(() => {
//     document.querySelector(".loader").remove();
// });

// async function rand(){
//     return Math.random();
// }

// //console.log(rand());
// rand().then((result) => {console.log(result)});


// await останавливает выполнение кода до выполнения промиса
// (работает внутри async функции):
setTimeout(async () => {
    try {
        //let r = new WWWWww(); // потенциально опасный код
        // let result = await load();
        // message.innerText = result;
        // container.append(message);

        message.innerText = await load();
        //container.append(message);

    } catch (error) {
        // console.log(error.message);
        message.innerText = error.message;
        //container.append(message);
    } finally {
        container.append(message);
        document.querySelector(".loader").remove();
    }

}, 3000);


let response = fetch ('https://punkapi.online/v3/beers/random');
console.log(response);

// setInterval( () => {
//     conn.open('GET', 'https://punkapi.online/v3/beers/random');
//     conn.responseType = 'json';
//     conn.send();
//     changeRandomBackground();
// }, 5000);