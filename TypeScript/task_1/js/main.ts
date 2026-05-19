interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string,
): string => {
    return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    firstName: string;

    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const studentClassConstructor: StudentClassConstructor = StudentClass;
const student: StudentClassInterface = new studentClassConstructor('John', 'Doe');

console.log(student.workOnHomework());
console.log(student.displayName());

const teacher3: Teacher = {
  firstName: 'Léa',
  lastName: 'Toutous',
  fullTimeEmployee: true,
  yearsOfExperience: 0,
  location: 'Cesson-sevigne',
  contract: true,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'Louiza',
  lastName: 'Houaouti',
  location: 'Rennes',
  fullTimeEmployee: true,
  numberOfReports: 9,
};

console.log(director1);
