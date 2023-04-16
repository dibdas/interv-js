let employees = [
  { firstName: "John", lastName: "Doe", age: "76", category: "service-based" },
  {
    firstName: "Anna",
    lastName: "Smith",
    age: "32",
    category: "product-based",
  },
  {
    firstName: "Peter",
    lastName: "Jones",
    age: "67",
    category: "service-based",
  },
];

// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i]);
// }

// employees.forEach(function (employee, index) {
//   console.log(employee);
//   console.log(index);
// });

// callback function with parameter
// function (employee, index) {
//     console.log(employee);
//     console.log(index);
//   }

// (employee) => {
//     console.log(employee);
//   }

// employees.forEach((employee, index) => {
//   console.log(employee);
// });

// in one line
employees.forEach((employee) => console.log(employee));

const emp = employees.filter((employee) => employee.age > 60);
console.log(emp);

const dummy = employees.map(
  (employee) => `${employee.firstName} ${employee.lastName}`
);
console.log(dummy);

// ascending
// const sorted = employees.sort(function (c1, c2) {
//   if (c1.age > c2.age) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sorted);

//descending
// const sorted = employees.sort(function (c1, c2) {
//   if (c1.age < c2.age) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sorted);

const sorted = employees.sort((c1, c2) => (c1.age > c2.age ? 1 : -1)); // ascending
console.log(sorted);
const sorteddesc = employees.sort((c1, c2) => (c1.age < c2.age ? 1 : -1)); // descending
console.log(sorteddesc);
