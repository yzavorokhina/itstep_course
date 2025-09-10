/* Task 1 */

/** Создать объект, описывающий автомобиль (производитель,
модель, год выпуска, средняя скорость), и следующие функции
для работы с этим объектом.
1. Функция для вывода на экран информации об автомобиле.
2. Функция для подсчета необходимого времени для пре-
одоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час */

let auto1 = {
    name: "Audi",
    model: "TT_2_8J",
    year: 2006,
    avSpeed: 60,  //например, по городу
    //maxSpeed: 240, 
};

let auto2 = {
    name: "Mazda",
    model: "626_2(GC)",
    year: 1987,
    avSpeed: 60,
    //maxSpeed: 171,
};

class Car {
    constructor(name, model, year, avSpeed) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.avSpeed = avSpeed;
    }

    /* Функция для вывода на экран информации об автомобиле. */
    showInfo() {
        console.log(`name: ${this.name}, model: ${this.model}, year: ${this.year}, avSpeed: ${this.avSpeed}`);
    }
}

auto1 = new Car("Audi", "TT_2_8J", "2006", 60);
auto2 = new Car("Mazda", "626_2(GC)", "1987", 70);

auto1.showInfo();
auto2.showInfo();

/**
 * Функция для подсчета необходимого времени для пре-
одоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час.
 * 
 * @param numbers distance, avSpeed
 * @return number resultTime of the trip
 */
let distance = 4172;

function getTripTime(distance, avSpeed) {
    let tripTime = distance / avSpeed;

    let restHours = tripTime / 4;
    let resultTime = tripTime + restHours;

    return resultTime;
}

console.log({ tripTime: getTripTime(4172, 70) });


/* Task 2 */

/** Создать объект, хранящий в себе отдельно числитель и зна-
менатель дроби, и следующие функции для работы с этим объ-
ектом.
1. Функция сложения 2-х объектов-дробей.
2. Функция вычитания 2-х объектов-дробей.
3. Функция умножения 2-х объектов-дробей.
4. Функция деления 2-х объектов-дробей.
5. Функция сокращения объекта-дроби. */

let fractionalNumber1 = {
    numerator: 1,          // числитель
    denominator: 3,        // знаменатель
}
let fractionalNumber2 = {
    numerator: 1,          // числитель
    denominator: 4,        // знаменатель
}

/**
 * Функция сложения 2-х объектов-дробей.
 * 
 * @param fractionalNumber1 object with numerator, denominator 
 * @param fractionalNumber2 object with numerator, denominator
 * @return number resultNumber
 */
function additionFractionalNumbers(fractionalNumber1, fractionalNumber2) {

    let resultNumerator = 0;
    let resultDenominator = 0;

    if (fractionalNumber1.denominator === fractionalNumber2.denominator) {
        resultNumerator = (fractionalNumber1.numerator + fractionalNumber2.numerator);
        resultDenominator = fractionalNumber1.denominator;
    } else {
        commonDenominator = fractionalNumber1.denominator * fractionalNumber2.denominator;
        let numerator1 = fractionalNumber1.numerator * fractionalNumber2.denominator;
        let numerator2 = fractionalNumber2.numerator * fractionalNumber1.denominator;
        resultNumerator = numerator1 + numerator2;
        resultDenominator = commonDenominator;
    }

    return { numerator: resultNumerator, denominator: resultDenominator };
}

console.log(additionFractionalNumbers(fractionalNumber1, fractionalNumber2));

/**
 * Функция вычитания 2-х объектов-дробей.
 * 
 * @param numbers numerator, denominator
 * @return number resultNumber
 */
function subtractionFractionalNumbers(numerator, denominator) {


    return resultNumber;
}

/**
 * Функция умножения 2-х объектов-дробей.
 * 
 * @param numbers numerator, denominator
 * @return number resultNumber
 */
function multiplicationFractionalNumbers(numerator, denominator) {


    return resultNumber;
}

/**
 * Функция деления 2-х объектов-дробей.
 * 
 * @param numbers numerator, denominator
 * @return number resultNumber
 */
function divisionFractionalNumbers(numerator, denominator) {


    return resultNumber;
}

/**
 * Функция сокращения объекта-дроби.
 * 
 * @param numbers numerator, denominator
 * @return number resultNumber
 */
function reductionFractionalNumbers(numerator, denominator) {


    return resultNumber;
}

/* Task 3 */

/** Создать объект, описывающий время (часы, минуты, секун-
ды), и следующие функции для работы с этим объектом.
1. Функция вывода времени на экран.
2. Функция изменения времени на переданное количество
секунд.
3. Функция изменения времени на переданное количество
минут.
4. Функция изменения времени на переданное количество
часов.
Учтите, что в последних 3-х функциях, при изменении одной
части времени, может измениться и другая. Например: если ко
времени «20:30:45» добавить 30 секунд, то должно получиться
«20:31:15», а не «20:30:75». */