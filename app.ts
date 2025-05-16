// let fullName: string = "John";
// let isMarried: boolean = true;
// let num: number = 1234;


// fullName = "123"

// let fullName: string = "John"
// console.log(typeof fullName);


// const salary: number = 1000;
// const bonus: number = 5000;

// const totalSalary: number = salary + bonus

// console.log(salary + bonus);

function getName (firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

const person1 = getName("John ", "Ravshanov");
console.log(person1);

const chekAdult = (age: number):boolean => {
    if (age >= 18) {
        return true
    }

    return false
}


const isAdult = chekAdult(20);
console.log(isAdult);
