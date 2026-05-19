interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: "Léa",
    lastName: "Toutous",
    fullTimeEmployee: true,
    yearsOfExperience: 0,
    location: "Cesson-sevigne",
    contract: true,
};

console.log('TEST T1');
console.log(teacher3);
