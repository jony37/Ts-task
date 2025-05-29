"use strict";
// 5 dars Arrays
// const cars: string[] = ["BMW", "Audi", "Mercedes"];
// const nums: number[] = [1, 2, 3, 4, 5];
// const booleans: boolean[] = [true, false, true, false];
// const toUpper = cars
//   .map((car) => car.toUpperCase())
//   .filter((car) => car.startsWith("B"));
// console.log(toUpper);
///////////////// 6 dars Tupe ////////////////////
// let joha: [number, string | number] = [1, 23];
// console.log("1", joha);
// joha = [21, "Jahon"];
// console.log("2", joha);
// joha = [32, 43];
// console.log("3", joha);
// // tupe with function
// function getinfo(): [string, number | string] {
//   return ["Helo", 12];
// }
// const logger = getinfo()
// console.log(logger[0]);
// console.log(logger[1]);
// // tupe with destruktizatsiya
// const [fullName, age] = logger;
// console.log(fullName);
// console.log(age);
//////////////////// 7 - dars  ReadOnly ////////////////////
// let admins: readonly number[] = [1,2,3,4,5];
// console.log(admins);
// // admins.push(6); bu yerda biz 6 qoshaolmeymiz
// let person: readonly [string, number] = ["String", 1];
// // person[0] = 'Doe' Xato
// const [fullName, age] = person;
// console.log(fullName);
// console.log(age);
// // 2 syntaxix
// let num: ReadonlyArray<number> = [1,2,3,4];
// console.log(num);
/////////////////////// 8 - dars Enums //////////////////////////
// Odiy enum yaratish usuli
// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }
// enum Direction{
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// enum Direction {
//   Up = "Up",
//   Down = "Down",
//   Left = "Left",
//   Right = "Right",
// }
// function getDerection(direction: Direction) {
//   if (Direction.Up === "Up") {
//     return console.log(true);
//   }
// }
// getDerection(Direction.Up);
// enum StatusCode {
//     Ok = 200,
//     NotFound = 404,
//     ServerError = 500
// }
// function chek (url: string): StatusCode {
//     if (url === '/') {
//         return StatusCode.Ok
//     } else if (url === 'server/error') {
//         return StatusCode.ServerError
//     }
//     return StatusCode.NotFound
// }
/////////////// 2 modul **********************************
////////////// 10 dars Union type//////////////////////////
let id;
id = "1234";
id = 1234;
// Union types
// const mix: (number | string | boolean)[] = ["Jahon", 23, true];
// console.log(mix);
// console.log(id);
// function printId (id: string | number) {
//     console.log(`The id is ${id}`);
// }
// printId(123)
// function getVal (value: string | number): string | number {
//     if (typeof value === "string") {
//         return value.toUpperCase();
//     } else if (typeof value === 'number') {
//         return value.toFixed(2);
//     }
//     return `Uknown type ${value}`
// }
// console.log(getVal("hello"));
// console.log(getVal(123.456));
// function logError (error: {massage: string} | {error: string}) {
//     if ('massage' in error) {
//         console.log('Massage', error.massage);
//     } else {
//         console.log("Error", error.error);
//     }
// }
// logError(({massage: "Hello"}))
// logError(({massage: "Hello"}))
// /////////////// 11 Literal type chi dars ///////////////
// enum Status {
//     SUCCESS,
//     ERROR
// }
// function getStatus(status: "success" | "error"): "success" | "error" {
//     if (status === "success") {
//         return 'success'
//     }
//     return 'error'
// }
// const statusMassage = getStatus('error')
// console.log(statusMassage);
// /////////// 12 dars Tupe aliases
// type Id = string | number;
// let joha: Id;
// joha = 1;
// joha = "1";
// // obj
// type Person = {
//   firstName: string;
//   lasTName: string;
//   age: number;
// };
// const obj: Person = {
//     firstName: "John",
//     lasTName: "Rav",
//     age: 123
// }
// const obj1: Person = {
//     firstName: "John",
//     lasTName: "Rav",
//     age: 123
// }
///////////////////////// 13 Dars Interface //////////////////
// interface Person1 {
//   firstName: string;
//   lasTName: string;
//   age: number;
// }
// interface Student {
//   id: number;
//   name: string;
//   age?: number; // bo‘lishi shart emas bolgan malumot
// }
// interface Student {
//   readonly id: number;
//   name: string;
// }
// interface Logger {
//   log: (message: string) => void;
// }
// const logger: Logger = {
//   log: (msg) => console.log(msg)
// };
// interface Person {
//   name: string;
// }
// interface Student extends Person {
//   id: number;
// }
// const s: Student = {
//   name: "Laylo",
//   id: 2
// };
// interface StringArray {
//   [index: number]: string;
// }
// let arr: StringArray = ["a", "b", "c"];
/////////////////////// 14 dars Void //////////////////////
// function logger (text: string, callback: (massage: string) => void) {
//     console.log(text);
//     callback("Logger" + text)
// }
// logger("Joha", massage => {
//     console.log(massage);
// })
// //////////////////// 15 dars Unknown ///////////////////
// function logger (text: unknown) {
//     // text.toUpperCase() xatolik yuzaga keladi lekin any da xatolik yuzaga kelmeydi
//     if (typeof text === "string") {
//         return text.toLowerCase()
//     } else if (typeof text === "number") {
//         return text.toFixed(2)
//     } else {
//         console.log("Unknown type");
//     }
// }
// console.log(logger(2.399439499));
// let x: unknown = 123;
// // console.log(x.toUpperCase());
// if (typeof x === "number") {
//     console.log(number);
// }
// let person: unknown = {
//     name: "John",
//     age: 30
// }
// if (typeof person === 'object') {
//     const obj = person as {name: string, age: number}
//     console.log(obj.name);
// }
// ///////////////// 16-dars Never //////////////////
// function throwError (message: string): never {
//     throw new Error(message)
// }
// throwError("404 Not Found")
// function infinityLoop () {
//     while (true) {
//         console.log("Loop");
//     }
// }
// ///////////////// 17-dars Null /////////////
// let userName: string | null = null;
// let showUserName = userName ?? "Greet";
// console.log(showUserName);
// function greet(name: string | null) {
//   if (name === null) {
//     console.log("Ism yo‘q");
//   } else {
//     console.log(`Salom, ${name}`);
//   }
// }
// /////////// 19 dars Amaliyot //////////////
// enum Role {
//     ADMIN,
//     STUDENT
// }
// interface IUser {
//     id : number
//     name : string
//     role: Role
// }
// interface ICourse {
//     id : number
//     title : string
//     description: string
//     students: IUser[]
// }
// // ////////////////// 20-dars Create Class /////////////
// class Car {
//   name: string;
//   year: Date;
//   isCar: boolean;
//   constructor(name: string, year: Date) {
//     this.name = name;
//     this.year = year;
//     this.isCar = true; // defolt qiymat qilib berapmiz
//   }
// }
// const bmw = new Car("Jahon", new Date("29.05.2025"));
// console.log(bmw);
// //////////////// 21 dars constructor
// class Car {
//   name: string;
//   year: Date;
//   isCar: boolean;
//   constructor(name: string = "Unknown", year: Date  = new Date()) {
//     this.name = name;
//     this.year = year;
//     this.isCar = true;
//   }
// }
// const bmw = new Car("Jahon", new Date("29.05.2025"));
// console.log(bmw);
// bmw.name = "Mers";
// console.log(bmw);
// const chevrolet = new Car("Chevrolet", new Date("29.05.2025"))
// console.log(chevrolet);
// class Car  {
//     name: string
//     year: Date
//     constructor(name: string, year: Date)
//     constructor (data: {name: string, year: Date})
//     constructor (nameOrdata: string | {name: string,  year: Date}, year?: Date) {
//         if (typeof nameOrdata === "string") {
//         this.name = nameOrdata,
//         this.year = year!
//         } else if (typeof nameOrdata === 'object') {
//             this.name = nameOrdata.name
//             this.year = nameOrdata.year
//         }
//     }
// }
// const mers = new Car("Tayota", new Date())
// /////////////////// 22 dars Methods //////////////////
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Salom, mening ismim ${this.name}`);
//   }
// }
// const person = new Person("Ali");
// person.greet(); // Salom, mening ismim Ali
// class Student {
//   name: string;
//   grades: number[];
//   constructor(name: string, grades: number[]) {
//     this.name = name;
//     this.grades = grades;
//   }
//   getAverage(): number {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     return sum / this.grades.length;
//   }
//   info() {
//     console.log(`${this.name}ning o‘rtacha bahosi: ${this.getAverage()}`);
//   }
// }
// const s = new Student("Laylo", [90, 85, 95]);
// s.info(); // Layloning o‘rtacha bahosi: 90
// ////////////// 23 dars overload method /////////////
class Logger {
    // haqiqiy implementatsiya (bitta metod!)
    log(message) {
        console.log("Log:", message);
    }
}
const logger = new Logger();
logger.log("Salom"); // Log: Salom
logger.log(42); // Log: 42
class Collection {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    show() {
        console.log(this.items);
    }
}
const c = new Collection();
c.add(10);
c.add("hello");
c.show(); // [10, "hello"]
