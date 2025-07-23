/* Task1 */

//let n = 5;
//let m = 10;
//console.log((m>n) ? m : n);

/* Task2 */
//let n = 5;
//console.log((n%5 == 0) ? "кратно 5-ти" : "не кратно 5-ти");

/* Task3 */
//let name = prompt("Напишите имя вашей планеты");
//let planetName = "Earth";
//console.log ((planetName == "Earth" || planetName == "earth")? "Привет, землянин!" : "Привет, инопланетянин!");

/* Task4 */
//let n = +prompt('Введите число больше 2');
//while(1)  - always true
//while(n < 2){
//    n = +prompt('Неверное число. Введите число больше 2');
//}
//let m = +prompt('Введите степень числа');
//console.log(`Результат равен ${n**m}`);

/* Task5 */
//let count = 10;
//while (count > 0){
//    console.log(`${count} - #`);
//    count--;
//}

/* Task5 */
//let userNumber = 6;
//while (userNumber >= 0){
//    console.log (`Число - ${userNumber}`);
//    userNumber--;
//}

/* Task6 */
//let n = 3; //число
//let m = 4; //степень
//let result = 1;
//let i = 1;
//while (i <= m){
//    result = result * n;
//    console.log(`Промежуточный - ${result}`)
//    i++;
//}
//console.log (`Результат - ${result}`);

/* Task7 */
//let num = 5;
//let i = 1;
//let result = 1;
//while(i <= num){
//    result = result * i;
//    i++;
//}
//console.log(`Факториал числа ${num} равен ${result}`);

/* Task8 */
//выполнится минимум 1 раз
//num = 45;

//do{
//    result = +prompt("Я загадал число, отгадай его!")

//} while(result != num);
//console.log (`Вы угадали. Загаданное число - ${num}!`);

/* Цикл for для случаев, когда нужно повторить цикл определенное кол-во раз */
//for(j = 1; j <= 10; j+=2){
//    console.log(j);
//}

/* Task9 */
//let num = 1000;

//do {
//    num = num / 2;
//   }
//while
//(num >= 50);
//console.log (` Число - ${num}`);

let start = 10;
let end = 150;

for (let i = start; i <= end; i += 4) {
  console.log(`Элемент - ${i}`);
}

/*
let start = 10;
let end = 50;

while(start <= end){
    console.log(start);
    start +=4;
}
*/
