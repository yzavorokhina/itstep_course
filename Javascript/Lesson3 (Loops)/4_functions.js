
//let degree = 2;

//function summ(a = 4, b = 10){
//    let result = (a + b) ** degree;

//    return result;
//}

//let number1 = 34;
//let number2 = 45;

//let finalResult = summ(number1, number2);
//let finalResult2 = summ(65, 78);
//let finalResult2 = summ(65);
//console.log(finalResult);
//console.log(summ(number1, number2));
//console.log(summ(number1, number2) ** degree);
//console.log(summ());

/* Task2 */
let number1 = 34;
let number2 = 45;

function minNumber (number1, number2){

    return (number1 < number2) ? number1 : number2;

    //if (number1 < number2) {
    //    return  number1;
    //} else {
    //    return number2;
    //}
}
console.log(minNumber(3,4));


/* Task3 */
let degree = 2;
let number1 = 34;

function raising (number1, degree){
    let result = number1 ** degree;
    return result;
}