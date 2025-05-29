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
let id: string | number;
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



// ///////////////// 17-dars Null /////////////
let userName: string | null = null;
let showUserName = userName ?? "Greet";
console.log(showUserName);

function greet(name: string | null) {
  if (name === null) {
    console.log("Ism yo‘q");
  } else {
    console.log(`Salom, ${name}`);
  }
}
