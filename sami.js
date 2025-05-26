"use strict";
// 5 dars Arrays
// const cars: string[] = ["BMW", "Audi", "Mercedes"];
// const nums: number[] = [1, 2, 3, 4, 5];
// const booleans: boolean[] = [true, false, true, false];
// const toUpper = cars
//   .map((car) => car.toUpperCase())
//   .filter((car) => car.startsWith("B"));
// console.log(toUpper);
// Union types
// const mix: (number | string | boolean)[] = ["Jahon", 23, true];
// console.log(mix);
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
