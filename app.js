"use strict";
// // // let fullName: string = "John";
// // // let isMarried: boolean = true;
// // // let num: number = 1234;
// // // fullName = "123"
// // // let fullName: string = "John"
// // // console.log(typeof fullName);
// // // const salary: number = 1000;
// // // const bonus: number = 5000;
// // // const totalSalary: number = salary + bonus
// // // console.log(salary + bonus);
// // function getName (firstName: string, lastName: string): string {
// //     return `${firstName} ${lastName}`
// // }
// // const person1 = getName("John ", "Ravshanov");
// // console.log(person1);
// // const chekAdult = (age: number):boolean => {
// //     if (age >= 18) {
// //         return true
// //     }
// //     return false
// // }
// // const isAdult = chekAdult(20);
// // console.log(isAdult);
// // const person = {
// //     firstname: "Samar", // required
// //     lastname: "Badriddinov",
// //     city: "Tashkent",
// //     skills: {
// //         programing: "JavaScript",
// //         design: "Figma"
// //     }
// // }
// // function getName (data: {firstname: string, lastname: string}): string {
// //     return `${data.firstname} ${data.lastname}`
// // }
// // const person1 = getName(person)
// // console.log(person1);
// const num: number[] = [1,2,3,4,5];
// console.log(num);
// let narxlar: Array<number> = [100, 200, 300];
// let ismlar: Array<string> = ["Dilshod", "Aziza"];
// let aralash: (string | number)[] = [1, "Ali", 3, "Vali"];
// let user: { ism: string; yosh: number } = {
//   ism: "Ali",
//   yosh: 25
// };
// // console.log(user.ism);
// console.log('egerg');
// **************************** *** Ulugbek Samigjonov darslari *** **************
// array yaratishni 1chi usuli
// let numbers: number[] = [1,2,3]
// // array yaratishni 2 chi usuli
// let AnotherNumbers: number[] = [1,2,3 ]
// function sayHello(name: string): string {
//  return `Hello there, ${name}!`
// }
// ////////////////////////////////////// Function Overloading ///////////////////////////////////
// function sayHello(name: string): string;
// function sayHello(name: string[]): string[];
// function sayHello(name: unknown): unknown {
//  if (typeof name === 'string') {
//  return `Hello there, ${name}!`
//  }else if (Array.isArray(name)) {
//  return name.map(name => `Hello, ${name}!`);
//  }
//  throw new  Error("Somethng went wrong")
// }
// /////////// Interface
// interface Person {
//   name: string;
//   age: number;
// }
// function greet(person: Person) {
//   return `Hello, ${person.name}!`;
// }
// console.log(greet({name: "Jony", age: 18}));
// interface Person {
//   firstname: string;
//   age: number;
//   telegramUsername?: string;
// }
// interface Person {
//   firstname: string;
//   age: number;
//   telegramUsername?: string;
//   readonly id: number;
// }
// function updatePerson(person: Person) {
//   // We can read from 'obj.id'.
//   console.log(`prop has the value '${person.id}'.`);
//   // But we can't re-assign it.
//   person.id = 12345;
// }
// const numbers: number[] = [1, 2, 3];
// const anotherNumbers: Array<number> = [1, 2, 3];
// interface Person {
//     ism: string;
//     age: number;
// }
// function gret (person: Person) {
//     console.log(`my name is ${person.ism}, ${person.age}`);
// }
// gret({ism: "John", age: 18});
var StudentStatus;
(function (StudentStatus) {
    StudentStatus["Active"] = "Active";
    StudentStatus["Graduated"] = "Graduated";
    StudentStatus["Dropped"] = "Dropped";
})(StudentStatus || (StudentStatus = {}));
const students = [
    {
        id: 1,
        name: "Ali",
        age: 20,
        status: StudentStatus.Active,
        grades: [80, 75, 90],
    },
    {
        id: 2,
        name: "Laylo",
        age: 17,
        status: StudentStatus.Graduated,
        grades: [88, 92, 95],
    },
    {
        id: 3,
        name: "Diyor",
        age: 22,
        status: StudentStatus.Dropped,
        grades: [60, 55, 70],
    },
    {
        id: 4,
        name: "Malika",
        age: 19,
        status: StudentStatus.Active,
        grades: [100, 95, 98],
    },
];
let kattalar = [];
for (let i = 0; i < students.length; i++) {
    const Allstudents = students[i];
    // 1
    console.log(`${Allstudents.name} yosh: ${Allstudents.age}, holati: ${Allstudents.status}`);
    // 2
    if (Allstudents.age > 18) {
        console.log(`${Allstudents.name} yoshi: ${Allstudents.age}`);
    }
    // 3
    if (Allstudents.status === StudentStatus.Active) {
        console.log(`${Allstudents.name} status: ${Allstudents.status}`);
    }
    // 4
    console.log(`${Allstudents.name} ni ortacha baxosi ${ortaBaxo(Allstudents.grades)}`);
    // 5
    console.log(`${Allstudents.name} yoshi: ${Allstudents.age}, statusi: ${Allstudents.status}, ortacha baxosi: ${ortaBaxo(Allstudents.grades)}`);
}
function ortaBaxo(grades) {
    const gradeClone = grades.slice();
    const max = Math.max(...gradeClone);
    const min = Math.min(...gradeClone);
    const maxSon = gradeClone.indexOf(max);
    if (maxSon !== -1) {
        gradeClone.splice(maxSon, 1);
    }
    const minSon = gradeClone.indexOf(min);
    if (minSon !== -1) {
        gradeClone.splice(minSon, 1);
    }
    let sum = 0;
    for (let i = 0; i < gradeClone.length; i++) {
        sum += gradeClone[i];
    }
    return Math.round(sum / gradeClone.length);
}
