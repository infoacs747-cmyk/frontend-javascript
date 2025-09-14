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
  age: 25,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "San Francisco",
};

// Create an array with the two students
const studentsList: Student[] = [student1, student2];

// Get the body element to render the table
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Create a table and append it to the body
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create the table header row
const headerRow: HTMLTableRowElement = document.createElement('tr');
const header1: HTMLTableCellElement = document.createElement('th');
const header2: HTMLTableCellElement = document.createElement('th');

header1.textContent = "First Name";
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
thead.appendChild(headerRow);

// Append a new row for each student in studentsList
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
