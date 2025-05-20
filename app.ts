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
