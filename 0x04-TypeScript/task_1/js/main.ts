
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}


const teacher3: Teacher = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};


interface Directors extends Teacher {
    numberOfReports: number;
}


const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};


//console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};


//console.log(printTeacher("John", "Doe")); 


interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}


interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class Student implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }


    displayName(): string {
        return this.firstName;
    }
}


const student1 = new Student("John", "Doe");

console.log(student1.workOnHomework());
console.log(student1.displayName());
