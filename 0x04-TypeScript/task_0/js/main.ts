// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Create a table and append to the body
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  studentsList.forEach(student => {
    const row = document.createElement("tr");
  
    const cell1 = document.createElement("td");
    cell1.textContent = student.firstName;
    row.appendChild(cell1);
  
    const cell2 = document.createElement("td");
    cell2.textContent = student.location;
    row.appendChild(cell2);
  
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  