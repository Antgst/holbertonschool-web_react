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
