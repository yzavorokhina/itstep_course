import { NormalModuleReplacementPlugin } from "webpack";

class User{
    name: string;
    // age: number;
    // private _age: number;  /* значения изменяются методами геттерами и сеттерами, св-ва не наследуются*/ /* чтобы св-ва для конкретного класса не наследовались */
    protected _age: number;  /* значения изменяются методами геттерами и сеттерами, св-ва не доступны извне, но наследуются */ /* чтобы код был неизменяемым извне */
    readonly gender: string;

    /* Методы: */
    constructor(name: string, gender: string, age?: number){
    // constructor(name: string, gender: string, age: number = 34,){
        this.name = name;
        this._age = age;
        this.gender = gender;
    }

    showInfo(): void{
        console.log(`My name is ${this.name}. I'm ${this._age} years old`);
    }

    // private _showInfo(): void{
    //     console.log(`My name is ${this.name}. I'm ${this.age} years old`);
    // }

    toString(): string{
        return `${this.name} : ${this._age}`;
    }

    /* Модификаторы доступа(свойств и методов объектов): */
    public set age(n: number){
        this._age = n;
    }

    public get age(): number{
        return this._age;
    }

    /* Статические поля и методы(не относятся к конкретному обекту или методу,
    можно вызывать без создания объекта класса): */
    static retirementAge: number = 65;
    static calculateYears(age: number) :number{
        return Employee.retirementAge - age;
    }
}

class Employee extends User{
    company: string;
    rank: string;

    constructor(name: string, gender: string, age?: number){
    //constructor(company: string, name: string, gender: string, age?: number){
        super(name, gender, age);
    }

    toString(): string {
        console.log(super.toString());
        return `${this.name} : ${this._age}: ${this.company}`;
    }
}

let user: User = new User("Ivan Ivanov", "male", 25);
let worker: Employee = new Employee("Sergei Morozov", "male",45);
worker.company = "Amazon";

// user.name = "Ivan Ivanov";
user.age = 25;

console.log(user.age);

user.showInfo();

console.log(user);
console.log(user.toString());
// user.gender = "female";
console.log(worker.toString());


/* Абстрактные классы (от него нельзя напрямую создавать объекты): */

abstract class Figure {
    abstract getArea(): number;
}

class Rectangle extends Figure {
    width: number;
    height: number;

    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number{
        return this.width * this.height;
    }
}

let rect: Rectangle = new Rectangle(100, 30);
console.log(`Rectangle area = ${rect.getArea()}`);

console.log(Employee.calculateYears(42));


/* Интерфейсы(определяет св-ва и методы, жесткую схему, которые класс должен реализовать): */
/* Абстрактный класс может быть с реализацией методов и без, и методы не обязательно переопределены */

interface IUser{
    id: number;
    name: string;
}

let employee: IUser = {
    id : 1,
    name: "Tom"
}

interface ICar{
    id: number;
    name: string;
    showInfo(): void;
}

class Sedan implements ICar{
    id: number;
    name: string;
    weight: number;

    constructor(id: number, name: string, weight: number){
        this.id = id;
        this.name = name;
        this.weight = weight;
    }

    showInfo(): void{
        console.log(`${this.name}`);
    }
}
class Vehicle implements ICar{
    id: number;
    name: string;
    weight: number;

    constructor(id: number, name: string, weight: number){
        this.id = id;
        this.name = name;
        this.weight = weight;
    }

    showInfo(): void{
        console.log(`${this.name}, ${this.id}, ${this.weight}`);
    }
}

let car1 = new Sedan(1, "Ford", 1340);
let car2 = new Vehicle(2, "Mersedes", 15000);


function showCarInfo(car: ICar){
    car.showInfo();
}

showCarInfo(car1);
showCarInfo(car2);


/* Интерфейс функции (заготовка для реализации какой-то функции) */

interface IFullNameBuilder{
    (name: string, surname: string) : string;
}

let simpleBuilder: IFullNameBuilder = function(name: string, surname: string) :string{
    return `${name} ${surname}` ;
}

console.log(simpleBuilder("Edgar", "Zhiznevskij") );

interface IStringArray{
    [index: number] :string;
}

let addresses: IStringArray = ["Адрес 1", "Адрес 2"];

interface IDictionary {
    [index: string]: string;
}

// let colors: IDictionary;

// colors["red"] = "#ff0000";
// colors["green"] = "#00ff00";
// colors["blue"] = "#0000ff";

let colors = {
   red: "#ff0000",
   green: "#00ff00"
}

colors["red"];


/* Преобразование типов: */

let tom: User = new Employee("Tom Soyer", "male");

let employeeTom: Employee = <Employee>tom;

// employeeTom = <Employee>tom;
employeeTom.company = "Amazon";

/* Обобщения: */
