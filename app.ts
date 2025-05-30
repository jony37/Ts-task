// // // // let fullName: string = "John";
// // // // let isMarried: boolean = true;
// // // // let num: number = 1234;

// // // // fullName = "123"

// // // // let fullName: string = "John"
// // // // console.log(typeof fullName);

// // // // const salary: number = 1000;
// // // // const bonus: number = 5000;

// // // // const totalSalary: number = salary + bonus

// // // // console.log(salary + bonus);

// // // function getName (firstName: string, lastName: string): string {
// // //     return `${firstName} ${lastName}`
// // // }

// // // const person1 = getName("John ", "Ravshanov");
// // // console.log(person1);

// // // const chekAdult = (age: number):boolean => {
// // //     if (age >= 18) {
// // //         return true
// // //     }

// // //     return false
// // // }

// // // const isAdult = chekAdult(20);
// // // console.log(isAdult);

// // // const person = {
// // //     firstname: "Samar", // required
// // //     lastname: "Badriddinov",
// // //     city: "Tashkent",
// // //     skills: {
// // //         programing: "JavaScript",
// // //         design: "Figma"
// // //     }
// // // }

// // // function getName (data: {firstname: string, lastname: string}): string {
// // //     return `${data.firstname} ${data.lastname}`
// // // }

// // // const person1 = getName(person)
// // // console.log(person1);

// // const num: number[] = [1,2,3,4,5];
// // console.log(num);

// // let narxlar: Array<number> = [100, 200, 300];
// // let ismlar: Array<string> = ["Dilshod", "Aziza"];
// // let aralash: (string | number)[] = [1, "Ali", 3, "Vali"];

// // let user: { ism: string; yosh: number } = {
// //   ism: "Ali",
// //   yosh: 25
// // };

// // // console.log(user.ism);
// // console.log('egerg');

// // **************************** *** Ulugbek Samigjonov darslari *** **************

// // array yaratishni 1chi usuli
// // let numbers: number[] = [1,2,3]

// // // array yaratishni 2 chi usuli
// // let AnotherNumbers: number[] = [1,2,3 ]

// // function sayHello(name: string): string {
// //  return `Hello there, ${name}!`
// // }

// // ////////////////////////////////////// Function Overloading ///////////////////////////////////
// // function sayHello(name: string): string;
// // function sayHello(name: string[]): string[];

// // function sayHello(name: unknown): unknown {
// //  if (typeof name === 'string') {
// //  return `Hello there, ${name}!`
// //  }else if (Array.isArray(name)) {
// //  return name.map(name => `Hello, ${name}!`);
// //  }

// //  throw new  Error("Somethng went wrong")
// // }

// // /////////// Interface
// // interface Person {
// //   name: string;
// //   age: number;
// // }
// // function greet(person: Person) {
// //   return `Hello, ${person.name}!`;
// // }

// // console.log(greet({name: "Jony", age: 18}));

// // interface Person {
// //   firstname: string;
// //   age: number;
// //   telegramUsername?: string;
// // }

// // interface Person {
// //   firstname: string;
// //   age: number;
// //   telegramUsername?: string;
// //   readonly id: number;
// // }
// // function updatePerson(person: Person) {
// //   // We can read from 'obj.id'.
// //   console.log(`prop has the value '${person.id}'.`);
// //   // But we can't re-assign it.
// //   person.id = 12345;
// // }

// // const numbers: number[] = [1, 2, 3];
// // const anotherNumbers: Array<number> = [1, 2, 3];

// // interface Person {
// //     ism: string;
// //     age: number;
// // }

// // function gret (person: Person) {
// //     console.log(`my name is ${person.ism}, ${person.age}`);
// // }

// // gret({ism: "John", age: 18});

// // /////////////////////// Class work ////////////////
// // enum StudentStatus {
// //   Active = "Active",
// //   Graduated = "Graduated",
// //   Dropped = "Dropped",
// // }

// // interface Student {
// //   id: number;
// //   name: string;
// //   age: number;
// //   status: StudentStatus;
// //   grades: number[];
// // }

// // const students: Student[] = [
// //   {
// //     id: 1,
// //     name: "Ali",
// //     age: 20,
// //     status: StudentStatus.Active,
// //     grades: [80, 75, 90],
// //   },
// //   {
// //     id: 2,
// //     name: "Laylo",
// //     age: 17,
// //     status: StudentStatus.Graduated,
// //     grades: [88, 92, 95],
// //   },
// //   {
// //     id: 3,
// //     name: "Diyor",
// //     age: 22,
// //     status: StudentStatus.Dropped,
// //     grades: [60, 55, 70],
// //   },
// //   {
// //     id: 4,
// //     name: "Malika",
// //     age: 19,
// //     status: StudentStatus.Active,
// //     grades: [100, 95, 98],
// //   },
// // ];

// // let kattalar: Student[] = [];
// // for (let i = 0; i < students.length; i++) {
// //   const Allstudents = students[i];

// // //   // 1
// // //   console.log(
// // //     `${Allstudents.name} yosh: ${Allstudents.age}, holati: ${Allstudents.status}`
// // //   );

// // //   // 2
// // //   if (Allstudents.age > 18) {
// // //     console.log(`${Allstudents.name} yoshi: ${Allstudents.age}`);
// // //   }

// // //   // 3
// // //   if (Allstudents.status === StudentStatus.Active) {
// // //     console.log(`${Allstudents.name} status: ${Allstudents.status}`);
// // //   }

// // //   // 4
// // //   console.log(`${Allstudents.name} ni ortacha baxosi ${ortaBaxo(Allstudents.grades)}`);

// //   // 5
// //   console.log(`${Allstudents.name} yoshi: ${Allstudents.age}, statusi: ${Allstudents.status}, ortacha baxosi: ${ortaBaxo(Allstudents.grades)}`);

// // }

// // function ortaBaxo(grades: number[]) {
// //   const gradeClone = grades.slice();

// //   const max = Math.max(...gradeClone);
// //   const min = Math.min(...gradeClone);

// //   const maxSon = gradeClone.indexOf(max);
// //   if (maxSon !== -1) {
// //     gradeClone.splice(maxSon, 1);
// //   }

// //   const minSon = gradeClone.indexOf(min);
// //   if (minSon !== -1) {
// //     gradeClone.splice(minSon, 1);
// //   }

// //   let sum = 0;
// //   for (let i = 0; i < gradeClone.length; i++) {
// //     sum += gradeClone[i];
// //   }

// //   return Math.round(sum / gradeClone.length);
// // }

// // const arr: number[] = [
// //   42, 3, 60, 7, 19, 85, 25, 42, 64, 76, 1, 99, 31, 17, 27, 33, 17, 49, 57, 4, 2,
// //   5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22, 23, 24, 26, 28, 29, 30,
// //   32, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53,
// //   54, 55, 56, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
// //   75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
// //   95, 96,
// // ];

// // for (let i = arr.length - 1; i >= 0; i--) {
// //   if (arr[i] === arr[i]) {
// //     arr.splice(i, 1);
// //   }
// // }
// // enum Status {
// //     SUCCESS,
// //     ERROR
// // }

// // function getStatus(status: "success" | "error"): "success" | "error" {
// //     if (status === "success") {
// //         return 'success'
// //     }

// //     return 'error'
// // }

// // enum Status {
// //     information = 100 | 199,
// //     success = 200 | 299,
// //     redaction = 300 | 399,
// //     clientEror = 400 | 499,
// //     serverError = 500 | 599
// // }

// // // 1 chi masala
// // enum Status {
// //   informationS = 100,
// //   informationE = 199,
// //   successS = 200,
// //   successE = 299,
// //   clientErorS = 400,
// //   clientErorE = 499,
// //   serverErrorS = 500,
// //   serverErrorE = 599,
// // }

// // function getResponse(response: number) {
// //   if (response >= Status.informationS && response <= Status.informationE) {
// //     return `information response ${response}`;
// //   } else if (response >= Status.successS && response <= Status.successE) {
// //     return `success response ${response}`;
// //   } else if (response >= Status.clientErorS && response <= Status.clientErorE) {
// //     return `client Error response ${response}`;
// //   } else if (response >= Status.serverErrorS && response <= Status.serverErrorE) {
// //     return `server Error response ${response}`;
// //   }

// //   return `Error num`
// // }

// // if (response in statusMessages) {
// //     return {
// //       code: response as Status,
// //       message: statusMessages[response as Status]
// //     };
// //   } else {
// //     return {
// //       code: response,
// //       message: 'Unknown Status Code'
// //     };

// // const res = getResponse(507);
// // console.log(res);

// // 2chi masala

// type Status =
//   | 100
//   | 101
//   | 102
//   | 103
//   | 200
//   | 201
//   | 202
//   | 203
//   | 204
//   | 205
//   | 206
//   | 207
//   | 208
//   | 226
//   | 300
//   | 301
//   | 302
//   | 303
//   | 304
//   | 305
//   | 306
//   | 307
//   | 308
//   | 400
//   | 401
//   | 402
//   | 403
//   | 404
//   | 405
//   | 406
//   | 407
//   | 408
//   | 409
//   | 410
//   | 411
//   | 412
//   | 413
//   | 414
//   | 415
//   | 416
//   | 417
//   | 418
//   | 421
//   | 422
//   | 423
//   | 424
//   | 425
//   | 426
//   | 428
//   | 429
//   | 431
//   | 451
//   | 500
//   | 501
//   | 502
//   | 503
//   | 504
//   | 505
//   | 506
//   | 507
//   | 508
//   | 510
//   | 511;

// function getResponse(response: Status) {
//   if (response >= 100 && response <= 199) {
//     return `information response ${response}`;
//   } else if (response >= 200 && response <= 299) {
//     return `success response ${response}`;
//   } else if (response >= 300 && response <= 399) {
//     return `client Error response ${response}`;
//   } else if (response >= 400 && response <= 499) {
//     return `server Error response ${response}`;
//   }
// }
// const resss = getResponse(201);


// class Car{
//     name:string;
//     speed:number;

//     constructor(name:string,speed:number){
//         this.name=name
//         this.speed= 0
//     }

//     greeting(name: string, isStudied:boolean): void
//     greeting(age: number): void;
//     greeting(value1: any, value2?: boolean): void{
//         if (typeof value1 === 'string' && 'boolean') {
//             console.log(`My name is ${value1}, Is studied ${value2}`);
//         } else if (typeof value1 === 'number') {
//             console.log(`My age is ${value1}`);
//         }
//     }
    

// }

// let nexia = new Car('nexia',300)
// nexia.greeting(66)

// class Employee {
//     _salary: number = 0

//     set salary(num:number) {
//         this._salary = num * 100
//     }

//     get salary (): number {
//         return this._salary
//     }
// }

// const jonpulat = new Employee()
// jonpulat.salary = 10
// const salary = jonpulat.salary
// console.log(salary);

