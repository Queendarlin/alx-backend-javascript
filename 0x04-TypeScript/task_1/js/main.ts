// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;  // Allows for additional properties
  }
  
  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Create a director object
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Define the printTeacherFunction interface
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  }
  
  // Example usage of printTeacher function
  console.log(printTeacher("John", "Doe")); // Output: J. Doe
  
  // Define the interface for the StudentClass constructor
  interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Define the interface for the StudentClass
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentClassConstructor) {
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
  
  // Example usage of StudentClass
  const student = new StudentClass({ firstName: 'Jane', lastName: 'Doe' });
  console.log(student.displayName()); // Output: Jane
  console.log(student.workOnHomework()); // Output: Currently working
  