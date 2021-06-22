interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface PrintTeacher {
  (firstName: string, lastName: string): string,
}

export const printTeacher: PrintTeacher = function (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
